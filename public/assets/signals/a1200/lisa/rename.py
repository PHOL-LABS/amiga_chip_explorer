import os
import re

prefix = "pin"
extension = ".gif"
directory = os.getcwd()

pattern = re.compile(r"^snap_(\d+)\.gif$", re.IGNORECASE)

# collect files with extracted numeric part
files = []
for name in os.listdir(directory):
    m = pattern.match(name)
    if m:
        number = int(m.group(1))
        files.append((number, name))

# sort by actual number: 630, 631, 632 ... 639, 6310, 6311 ...
files.sort(key=lambda x: x[0])

# rename via temporary names first to avoid overwrite collisions
temp_files = []
for i, (_, old_name) in enumerate(files, start=1):
    old_path = os.path.join(directory, old_name)
    tmp_name = f"__tmp_rename_{i}__.gif"
    tmp_path = os.path.join(directory, tmp_name)
    os.rename(old_path, tmp_path)
    temp_files.append((i, tmp_name))

# final rename
for i, tmp_name in temp_files:
    tmp_path = os.path.join(directory, tmp_name)
    new_name = f"{prefix}{i}{extension}"
    new_path = os.path.join(directory, new_name)
    os.rename(tmp_path, new_path)
    print(f"{tmp_name} -> {new_name}")

print("Done.")