import re

file_path = "src/pages/Gallery.jsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update the animationPhotos array.
array_match = re.search(r'const animationPhotos = \[(.*?)\];', content, re.DOTALL)
if array_match:
    items_str = array_match.group(1)
    items = re.findall(r'"([^"]+)"', items_str)
    
    # Extract item at index 36
    item_to_move = items.pop(36)
    # Insert it at index 3
    items.insert(3, item_to_move)
    
    lines = []
    for i in range(0, len(items), 3):
        chunk = items[i:i+3]
        lines.append("    " + ", ".join([f'"{x}"' for x in chunk]))
    
    new_array_str = ",\n".join(lines)
    new_array_block = f"const animationPhotos = [\n{new_array_str}\n  ];"
    content = content[:array_match.start()] + new_array_block + content[array_match.end():]

# 2. Update the `if (i === X)` indices
fanarts_match = re.search(r'(const fanarts = animationPhotos\.map\(\(filename, i\) => \{.*?\n    return \{)', content, re.DOTALL)
if fanarts_match:
    fanarts_block = fanarts_match.group(1)
    
    def replacer(m):
        prefix = m.group(1)
        num = int(m.group(2))
        if 3 <= num <= 35:
            num += 1
        return f"{prefix}{num}"
        
    new_fanarts_block = re.sub(r'(if \(i === |else if \(i === )(\d+)', replacer, fanarts_block)
    content = content[:fanarts_match.start()] + new_fanarts_block + content[fanarts_match.end():]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Refactored Gallery.jsx successfully.")
