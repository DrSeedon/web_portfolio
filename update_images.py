import os
import json

# Путь к папке с портфолио
portfolio_path = os.path.join('assets', 'images', 'portfolio')
output_file = os.path.join('assets', 'images_manifest.json')

manifest = {}

if os.path.exists(portfolio_path):
    # Перебираем папки проектов
    for project_name in os.listdir(portfolio_path):
        project_dir = os.path.join(portfolio_path, project_name)
        
        if os.path.isdir(project_dir):
            # Собираем все картинки в этой папке
            images = [
                f for f in os.listdir(project_dir) 
                if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'))
            ]
            # Сортируем для порядка (чтобы image1 был первым)
            images.sort()
            manifest[project_name] = images

# Сохраняем в JSON
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(manifest, f, indent=4, ensure_ascii=False)

print(f"✅ Manifest updated! Found {len(manifest)} projects.")
