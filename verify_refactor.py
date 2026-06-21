import json
import os
import re
import sys

base = r"D:\wirero\Wirero (1)"
mapping = json.load(open(os.path.join(base, ".tailwind-canonical-mapping.json"), "r", encoding="utf-8"))
scanner = json.load(open(os.path.join(base, ".tailwind-arbitrary-scan.json"), "r", encoding="utf-8"))
arb_set = {m["arbitrary"] for m in mapping.get("mappings", [])}
boundary = r"(^|[\s\"'\`])"
remaining = {}
for entry in scanner.get("files", []):
    rel = entry["path"]
    path = os.path.join(base, rel)
    if not os.path.exists(path):
        continue
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    for arb in arb_set:
        pat = boundary + re.escape(arb) + r"($|[\s\"'\`])"
        matches = re.findall(pat, text)
        if matches:
            remaining.setdefault(rel, []).append((arb, len(matches)))
if remaining:
    print("Remaining mapped arbitrary tokens found:", file=sys.stderr)
    for rel, items in remaining.items():
        print(f"  {rel}:", file=sys.stderr)
        for arb, cnt in items:
            print(f"    {arb} ({cnt}x)", file=sys.stderr)
    sys.exit(1)
print("Verification passed: no mapped arbitrary tokens remain in scanned source files.")
