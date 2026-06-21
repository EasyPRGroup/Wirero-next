import json
import os
import re
import sys

BASE_DIR = r"D:\wirero\Wirero (1)"
MAPPING_PATH = os.path.join(BASE_DIR, ".tailwind-canonical-mapping.json")
SCANNER_PATH = os.path.join(BASE_DIR, ".tailwind-arbitrary-scan.json")
REPORT_JSON_PATH = os.path.join(BASE_DIR, ".tailwind-refactor-report.json")
REPORT_TXT_PATH = os.path.join(BASE_DIR, ".tailwind-refactor-report.txt")

def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
        f.write("\n")

def compile_patterns(replacement_map):
    """Precompile regex patterns for each arbitrary class.

    A token is only matched when it is surrounded by whitespace, quotes,
    backticks, or the start/end of the string. This avoids replacing
    partial matches such as `text-[1rem]` inside `mq450:text-[1rem]`.
    """
    boundary = r'''[\s"'\`]'''
    patterns = []
    for arb, can in replacement_map.items():
        before = r"(^|" + boundary + r")"
        after = r"($|" + boundary + r")"
        regex = before + re.escape(arb) + after
        patterns.append((arb, can, re.compile(regex)))
    return patterns

def main():
    mapping_data = load_json(MAPPING_PATH)
    scanner_data = load_json(SCANNER_PATH)

    replacement_map = {}
    for item in mapping_data.get("mappings", []):
        arb = item.get("arbitrary")
        can = item.get("canonical")
        if arb and can:
            replacement_map[arb] = can

    if not replacement_map:
        print("No mappings found.", file=sys.stderr)
        save_json(REPORT_JSON_PATH, {"filesModified": [], "summary": {"totalFilesModified": 0, "totalReplacements": 0}})
        with open(REPORT_TXT_PATH, "w", encoding="utf-8") as f:
            f.write("Tailwind Refactor Report\nNo mappings found.\n")
        return

    patterns = compile_patterns(replacement_map)
    files_modified = []
    total_replacements = 0

    for file_entry in scanner_data.get("files", []):
        rel_path = file_entry.get("path")
        if not rel_path:
            continue
        file_path = os.path.join(BASE_DIR, rel_path)
        if not os.path.exists(file_path):
            print(f"File not found, skipping: {file_path}", file=sys.stderr)
            continue

        # Only touch lines that the scanner reported as containing class attributes.
        class_lines = set()
        for cls in file_entry.get("classes", []):
            line_num = cls.get("line")
            if line_num is not None:
                class_lines.add(line_num - 1)

        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()

        file_replacements = {}
        modified = False

        for line_idx in class_lines:
            if line_idx < 0 or line_idx >= len(lines):
                continue
            line = lines[line_idx]
            new_line = line
            for arb, can, pattern in patterns:
                new_line, count = pattern.subn(r"\1" + can + r"\2", new_line)
                if count:
                    file_replacements[arb] = file_replacements.get(arb, 0) + count
                    modified = True
            lines[line_idx] = new_line

        if modified:
            with open(file_path, "w", encoding="utf-8") as f:
                f.writelines(lines)
            replacements_list = [
                {"arbitrary": arb, "canonical": replacement_map[arb], "count": cnt}
                for arb, cnt in sorted(file_replacements.items())
            ]
            files_modified.append({
                "path": rel_path.replace("\\", "/"),
                "replacements": replacements_list
            })
            total_replacements += sum(file_replacements.values())
            print(f"Modified {rel_path}: {sum(file_replacements.values())} replacements")

    report = {
        "filesModified": files_modified,
        "summary": {
            "totalFilesModified": len(files_modified),
            "totalReplacements": total_replacements
        }
    }
    save_json(REPORT_JSON_PATH, report)

    with open(REPORT_TXT_PATH, "w", encoding="utf-8") as f:
        f.write("Tailwind Refactor Report\n")
        f.write("========================\n\n")
        f.write(f"Total files modified: {len(files_modified)}\n")
        f.write(f"Total replacements: {total_replacements}\n\n")
        if files_modified:
            f.write("Modified files:\n")
            for entry in files_modified:
                f.write(f"- {entry['path']}\n")
                for rep in entry["replacements"]:
                    f.write(f"    {rep['arbitrary']} -> {rep['canonical']} ({rep['count']}x)\n")
        else:
            f.write("No files were modified.\n")

    print(f"Done. {len(files_modified)} files modified, {total_replacements} replacements.")

if __name__ == "__main__":
    main()
