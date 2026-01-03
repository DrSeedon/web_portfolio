export const projectsData = {
    slime_catcher: {
        title: "Slime Catcher - Farm Idle RPG",
        title_en: "Slime Catcher - Farm Idle RPG",
        year: "Август 2025",
        year_en: "August 2025",
        priority: true,
        tags: ["Unity 6", "Zenject", "AI", "Economy"],
        tags_en: ["Unity 6", "Zenject", "AI", "Economy"],
        desc: `
            <p><strong>Компания:</strong> Multicast Games (август - декабрь 2025)</p>
            <p><strong>Роль:</strong> Unity Developer + Game Designer</p>
            <p>Мобильная idle/RPG игра для Android с фокусом на коллекционирование, прогрессию и casual геймплей. Проект разработан для F2P модели с интеграцией аналитики и монетизации.</p>
            
            <h4>🚀 Реализованные фичи:</h4>
            <ul>
                <li><strong>Core Loop:</strong> ловля слаймов → загоны → производство ресурсов → апгрейды. 6 локаций с прогрессивной разблокировкой.</li>
                <li><strong>AI:</strong> NPC-боты (охотники, фермеры) и умное поведение слаймов (патрулирование, побег от игрока, NavMesh).</li>
                <li><strong>Game Economy:</strong> мультивалютная система. Разработал симуляционную модель экономики в коде для тестирования баланса на 45+ минут геймплея.</li>
                <li><strong>Technical:</strong> Hot-reload баланса в runtime, Export/Import через JSON для Excel/AI анализа.</li>
                <li><strong>Analytics:</strong> Интеграция Adjust, AppMetrica, Facebook SDK и RevenueCat.</li>
            </ul>

            <h4>🛠 Технологии:</h4>
            <p>Unity 6, C#, Zenject (DI), UniTask, NavMesh, Cinemachine, ScriptableObjects, Git (BitBucket).</p>
        `,
        desc_en: `
            <p><strong>Company:</strong> Multicast Games (Aug - Dec 2025)</p>
            <p><strong>Role:</strong> Unity Developer + Game Designer</p>
            <p>Mobile idle/RPG for Android focused on collection, progression, and casual gameplay. Built for F2P with full analytics/monetization integration.</p>
            
            <h4>🚀 Key Features:</h4>
            <ul>
                <li><strong>Core Loop:</strong> Catching slimes → pens → resource production → upgrades. 6 unlockable locations.</li>
                <li><strong>AI:</strong> Smart NPC bots and slime behavior (evasion, patrol, NavMesh).</li>
                <li><strong>Economy:</strong> Multi-currency. Custom simulation model for 45+ min gameplay testing.</li>
                <li><strong>Technical:</strong> Runtime balance hot-reload, JSON data bridge for Excel/AI analysis.</li>
            </ul>

            <h4>🛠 Stack:</h4>
            <p>Unity 6, Zenject, UniTask, NavMesh, Cinemachine, ScriptableObjects.</p>
        `,
        links: [{ text: "Google Play", url: "https://play.google.com/store/apps/details?id=com.multicast.slimecatcher", icon: "external-link" }]
    },
    dnd_system: {
        title: "D&D Offline Session System",
        title_en: "D&D Offline Session System",
        year: "Январь 2025",
        year_en: "January 2025",
        priority: true,
        tags: ["Desktop", "Unity", "Zenject"],
        tags_en: ["Desktop", "Unity", "Zenject"],
        desc: `
            <p>Многофункциональный дашборд для проведения настольных ролевых игр. Позволяет мастеру транслировать контент на второй экран (для игроков) и управлять всеми показателями в реальном времени.</p>
            
            <h4>🚀 Фичи:</h4>
            <ul>
                <li><strong>Dual-Window Mode:</strong> Окно мастера (контроль) и окно игроков (трансляция) с синхронизацией в реальном времени.</li>
                <li><strong>RPG Tools:</strong> Виртуальные кубики (D4-D20) с физикой, менеджмент золота, аудиосистема с плейлистами.</li>
                <li><strong>Content:</strong> Интерфейс для слайдов (карты, арты, видео), лазерная указка и визуальные уведомления.</li>
                <li><strong>Save System:</strong> Полное сохранение проектов в кастомный формат .dnd (архив с контентом).</li>
            </ul>
        `,
        desc_en: `
            <p>A professional dashboard for offline D&D sessions. Enables the Game Master to stream content to a secondary display while managing all game metrics.</p>
            
            <h4>🚀 Features:</h4>
            <ul>
                <li><strong>Dual-Screen:</strong> Separate GM and Player windows with real-time sync.</li>
                <li><strong>Physics Dice:</strong> D4-D20 dice system with realistic physics.</li>
                <li><strong>Asset Manager:</strong> Slide system for maps/videos, audio player, and dynamic character icons.</li>
            </ul>
        `,
        links: []
    },
    guilds_up: {
        title: "Guilds UP!",
        title_en: "Guilds UP!",
        year: "2024",
        year_en: "2024",
        priority: true,
        tags: ["Strategy", "Turn-based", "Unity"],
        tags_en: ["Strategy", "Turn-based", "Unity"],
        desc: "Разработка пошаговой стратегической игры Guilds UP!",
        desc_en: "Developing the turn-based strategy game Guilds UP!",
        links: []
    },
    museum_faceswap: {
        title: "Museum AI Experience",
        title_en: "Museum AI Experience",
        year: "2024",
        year_en: "2024",
        priority: true,
        tags: ["AI", "FaceSwap", "Museums"],
        tags_en: ["AI", "FaceSwap", "Museums"],
        desc: "Разработка проектов с заменой лиц и генерацией образов для музеев. Интерактивные ИИ-инсталляции.",
        desc_en: "Developing AI projects with face swapping and image generation for museums. Interactive AI installations.",
        links: []
    },
    drone_simulator: {
        title: "Drone Assembly Simulator",
        title_en: "Drone Assembly Simulator",
        year: "Март 2024",
        year_en: "March 2024",
        priority: true,
        tags: ["B2B", "Education", "3D"],
        tags_en: ["B2B", "Education", "3D"],
        desc: `
            <p>Обучающее ПО для обучения сборке квадрокоптеров. Представление дрона в виде 3D модели, поэтапная сборка, визуализация всех частей, PBR материалы.</p>
        `,
        desc_en: `
            <p>Educational software for UAV assembly training. 3D model visualization, step-by-step assembly, PBR materials.</p>
        `,
        links: []
    },
    factory_tower: {
        title: "Factory Tower",
        title_en: "Factory Tower",
        year: "2023",
        year_en: "2023",
        priority: false,
        tags: ["Steam", "Optimization", "Unity"],
        tags_en: ["Steam", "Optimization", "Unity"],
        desc: "Работа в студии над игрой Factory Tower. Оптимизация и разработка механик.",
        desc_en: "Worked in a studio on Factory Tower. Optimization and mechanics development.",
        links: [{ text: "Steam", url: "https://store.steampowered.com/app/2023910/Factory_Tower/", icon: "external-link" }]
    },
    english_league: {
        title: "English League",
        title_en: "English League",
        year: "2023",
        year_en: "2023",
        priority: false,
        tags: ["Education", "Kids", "Platform"],
        tags_en: ["Education", "Kids", "Platform"],
        desc: "Авторская игровая платформа для детей 6-12 лет по изучению английского языка.",
        desc_en: "Custom gaming platform for children aged 6-12 to learn English.",
        links: [{ text: "Website", url: "https://feacademy.su", icon: "external-link" }]
    },
    ai_test: {
        title: "AI & Physics Sandbox",
        title_en: "AI & Physics Sandbox",
        year: "2022",
        year_en: "2022",
        priority: false,
        tags: ["ML Agents", "Physics", "VR"],
        tags_en: ["ML Agents", "Physics", "VR"],
        desc: `
            <h4>🚀 Фичи:</h4>
            <ul>
                <li><strong>Unity ML Agents:</strong> обучение ИИ выполнению сложных действий в кастомной среде.</li>
                <li><strong>War Thunder Style Flight:</strong> физика самолета с удобным управлением, перенесено в VR.</li>
                <li><strong>City Sim:</strong> симуляция жизни города с NavMesh (пешеходы, авто, рандомные точки).</li>
            </ul>
        `,
        desc_en: `
            <h4>🚀 Features:</h4>
            <ul>
                <li><strong>Unity ML Agents:</strong> training AI to perform complex actions in a custom environment.</li>
                <li><strong>Flight Physics:</strong> War Thunder style plane physics, ported to VR.</li>
                <li><strong>City Sim:</strong> NavMesh-based city life simulation.</li>
            </ul>
        `,
        links: [{ text: "GitHub", url: "https://github.com/DrSeedon/AI_Test", icon: "github" }]
    },
    vr_tours: {
        title: "VR Tours & Hand Tracking",
        title_en: "VR Tours & Hand Tracking",
        year: "2022",
        year_en: "2022",
        priority: false,
        tags: ["VR", "Hand Tracking", "Immersive"],
        tags_en: ["VR", "Hand Tracking", "Immersive"],
        desc: `
            <p>Создание VR туров и иммерсивных сцен. Hand Tracking: физические руки, которые не проваливаются сквозь предметы, скалолазание, взаимодействие с объектами.</p>
        `,
        desc_en: `
            <p>Creating VR tours and immersive scenes. Hand Tracking: physical hands that don't pass through objects, climbing, interaction.</p>
        `,
        links: []
    },
    tesla_ar: {
        title: "AR Tesla CyberTruck",
        title_en: "AR Tesla CyberTruck",
        year: "Ноябрь 2022",
        year_en: "November 2022",
        priority: false,
        tags: ["AR", "Social", "Mobile"],
        tags_en: ["AR", "Social", "Mobile"],
        desc: `
            <p>AR-опыт с Tesla CyberTruck. Сканирование окружения, трекинг, изменение размера/положения машины. Фото с машиной и постинг в ВК.</p>
        `,
        desc_en: `
            <p>AR experience with Tesla CyberTruck. Environment scanning, tracking, photo features with VK integration.</p>
        `,
        links: []
    },
    kef_partners: {
        title: "KEF Partners Interface",
        title_en: "KEF Partners Interface",
        year: "2022",
        year_en: "2022",
        priority: false,
        tags: ["Touch Screen", "Data-driven", "Interactive"],
        tags_en: ["Touch Screen", "Data-driven", "Interactive"],
        desc: "Приложение для стендов. Динамическая загрузка контента (текст, фото, видео) без пересборки билда.",
        desc_en: "App for stands. Dynamic content loading (text, photos, video) without rebuilding.",
        links: []
    },
    kef_navigation: {
        title: "KEF Navigation System",
        title_en: "KEF Navigation System",
        year: "2022",
        year_en: "2022",
        priority: false,
        tags: ["Mapping", "Navigation", "Wayfinding"],
        tags_en: ["Mapping", "Navigation", "Wayfinding"],
        desc: "Система навигации для вертикальных стендов. Расписание + Схема с построением маршрутов в реальном времени.",
        desc_en: "Navigation system for vertical stands. Schedule + Map with real-time wayfinding.",
        links: []
    },
    tele2_collage: {
        title: "Tele2 Photo Collage",
        title_en: "Tele2 Photo Collage",
        year: "2022",
        year_en: "2022",
        priority: false,
        tags: ["Async", "VFX", "Interactive"],
        tags_en: ["Async", "VFX", "Interactive"],
        desc: "Асинхронная загрузка и отображение бесконечного коллажа фоток без повторений.",
        desc_en: "Asynchronous loading and display of an infinite photo collage without repetitions.",
        links: []
    },
    tele2_tablet: {
        title: "Tele2 Tablet Remote",
        title_en: "Tele2 Tablet Remote",
        year: "2022",
        year_en: "2022",
        priority: false,
        tags: ["OSC", "Remote Control", "Tablet"],
        tags_en: ["OSC", "Remote Control", "Tablet"],
        desc: "Управление большим экраном через планшет по OSC протоколу (интеграция с Resolume).",
        desc_en: "Large screen control via tablet using OSC protocol (Resolume integration).",
        links: []
    },
    calculator: {
        title: "Product Cost Calculator",
        title_en: "Product Cost Calculator",
        year: "2022",
        year_en: "2022",
        priority: false,
        tags: ["B2B", "PDF Export", "Database"],
        tags_en: ["B2B", "PDF Export", "Database"],
        desc: "Система расчета стоимости изделий. Роли Оператор/Инженер, генерация PDF заказов.",
        desc_en: "Product cost calculation system. Operator/Engineer roles, PDF order generation.",
        links: []
    },
    farm_game: {
        title: "Farm Idle Tycoon",
        title_en: "Farm Idle Tycoon",
        year: "Июнь 2022",
        year_en: "June 2022",
        priority: false,
        tags: ["Mobile", "Optimization", "F2P"],
        tags_en: ["Mobile", "Optimization", "F2P"],
        desc: "Тайкун про молочную ферму. AdJust, Facebook SDK и глубокая мобильная оптимизация.",
        desc_en: "Idle tycoon about a dairy farm. Adjust, Facebook SDK, and deep mobile optimization.",
        links: []
    },
    polus: {
        title: "POLUS - Survival Sandbox",
        title_en: "POLUS - Survival Sandbox",
        year: "Декабрь 2021",
        year_en: "December 2021",
        priority: false,
        tags: ["Multiplayer", "Survival", "Procedural"],
        tags_en: ["Multiplayer", "Survival", "Procedural"],
        desc: `
            <p>Крупный пет-проект: песочница с выживанием, реалистичной физикой персонажа и процедурной генерацией карты.</p>
        `,
        desc_en: `
            <p>Large-scale pet project: survival sandbox with realistic character physics and procedural map generation.</p>
        `,
        links: [{ text: "GitHub", url: "https://github.com/DrSeedon/POLUS", icon: "github" }]
    },
    iuh: {
        title: "IUH - 2D Platformer",
        title_en: "IUH - 2D Platformer",
        year: "Май 2020",
        year_en: "May 2020",
        priority: false,
        tags: ["2D", "Multiplayer", "Unity"],
        tags_en: ["2D", "Multiplayer", "Unity"],
        desc: `
            <p>Первый большой проект. 11 уровней с уникальными механиками, босс, процедурная генерация, мультиплеер и магазин.</p>
        `,
        desc_en: `
            <p>First big project. 11 levels with unique mechanics, boss, procedural generation, multiplayer, and store.</p>
        `,
        links: [
            { text: "Google Play", url: "https://play.google.com/store/apps/details?id=com.SeedonsGames.IUH", icon: "external-link" },
            { text: "GitHub", url: "https://github.com/DrSeedon/HUI", icon: "github" }
        ]
    },
    neuronka: {
        title: "Neuronka - Evolution Sim",
        title_en: "Neuronka - Evolution Sim",
        year: "Февраль 2020",
        year_en: "February 2020",
        priority: false,
        tags: ["Neural Networks", "Evolution", "AI"],
        tags_en: ["Neural Networks", "Evolution", "AI"],
        desc: "Симулятор бактерий с собственными нейросетями. Мутации, естественный отбор и система Boids.",
        desc_en: "Bacteria simulator with custom neural networks. Mutations, natural selection, and Boids system.",
        links: [{ text: "Google Play", url: "https://play.google.com/store/apps/details?id=com.SeedonsGames.Neuronka", icon: "external-link" }]
    },
    simple_mazze: {
        title: "Simple Mazze",
        title_en: "Simple Mazze",
        year: "2020",
        year_en: "2020",
        priority: false,
        tags: ["Puzzle", "Algorithms", "Unity"],
        tags_en: ["Puzzle", "Algorithms", "Unity"],
        desc: "Генерация лабиринтов любого размера, переключение 2D/3D и алгоритм поиска пути.",
        desc_en: "Generation of mazes of any size, 2D/3D switching, and pathfinding algorithms.",
        links: [{ text: "Google Play", url: "https://play.google.com/store/apps/details?id=com.SeedonsGames.SimpleMazze", icon: "external-link" }]
    }
};
