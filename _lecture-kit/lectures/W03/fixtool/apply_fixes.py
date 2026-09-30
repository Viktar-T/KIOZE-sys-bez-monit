import sys
sys.path.insert(0, '.')
from fixes_data import FIXES, L
texts = {}
errors = []
for fid, f, sev, note, old, new, cnt in FIXES:
    if f not in texts:
        texts[f] = open(L + f, encoding='utf-8').read()
    n = texts[f].count(old)
    if n != cnt:
        errors.append(f"fix {fid} ({f}): expected {cnt}, found {n}")
if errors:
    print("\n".join(errors)); sys.exit(1)
for fid, f, sev, note, old, new, cnt in FIXES:
    texts[f] = texts[f].replace(old, new)
if '--apply' in sys.argv:
    for f, t in texts.items():
        open(L + f, 'w', encoding='utf-8').write(t)
    print(f"applied {len(FIXES)} fixes to {len(texts)} files")
else:
    print(f"dry run OK: {len(FIXES)} fixes match")
