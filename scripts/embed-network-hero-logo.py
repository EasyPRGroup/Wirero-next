from base64 import b64encode
from pathlib import Path


project = Path(r"D:\wirero\Wirero (1)")
hero = project / "public" / "network-hero-industries.svg"
logo = project / "public" / "Wirero.svg"

content = hero.read_text(encoding="utf-8")
data_uri = f"data:image/svg+xml;base64,{b64encode(logo.read_bytes()).decode('ascii')}"
content = content.replace('href="/Wirero.svg"', f'href="{data_uri}"')
hero.write_text(content, encoding="utf-8")

print("Embedded central Wirero logo")
