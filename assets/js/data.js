export const projectsData = {
    orchestra: {
        title: "Orchestra — оркестратор AI-агентов",
        title_en: "Orchestra — Multi-Agent AI Orchestrator",
        year: "2026 — наст. время",
        year_en: "2026 — Present",
        priority: true,
        tags: ["Python", "FastAPI", "LLM", "MCP", "Open Source"],
        tags_en: ["Python", "FastAPI", "LLM", "MCP", "Open Source"],
        desc: `
            <p><strong>Роль:</strong> автор и единственный инженер. Открытый код.</p>
            <p>Платформа, которая берёт задачу в общем виде, режет её на части и запускает несколько AI-агентов параллельно. Каждый работает в своей копии репозитория, поэтому агенты не мешают друг другу. За время эксплуатации — <strong>556 сессий агентов</strong> и <strong>207 089 записанных событий</strong> на 21 проекте.</p>

            <h4>🚀 Что внутри:</h4>
            <ul>
                <li><strong>4 рантайма под одним контуром:</strong> Claude, Codex, Grok и шлюз к OpenRouter, 18 моделей. Выбор модели по типу задачи, а не по цене.</li>
                <li><strong>Изоляция через git worktree:</strong> агент не видит чужих изменений до слияния, объединяет результат только координатор.</li>
                <li><strong>Состояние переживает перезапуск:</strong> живёт на сервере, а не в памяти процесса; прерванный ход помечается и поднимается заново.</li>
                <li><strong>10+ собственных MCP-серверов:</strong> почта, таск-трекер, поиск, GitHub Actions, Figma. Сам оркестратор отдаёт 46 инструментов управления.</li>
                <li><strong>Надёжность записи:</strong> журнал операций, идемпотентность по идентификатору, перепроверка результата через API после изменения. Непонятно завершившаяся операция блокирует повторы до разбора человеком.</li>
                <li><strong>Права действий:</strong> три класса — можно сразу, только исследование, нужно подтверждение человека. Правила в коде, а не в промпте.</li>
                <li><strong>Кросс-ревью:</strong> результат проверяет модель другого производителя. Ревьюер недоступен — проверка не подменяется своей моделью.</li>
                <li><strong>2 600+ автотестов</strong>, Docker, CI/CD, песочница по Unix-правам.</li>
            </ul>

            <h4>🔍 Что дал разбор логов:</h4>
            <ul>
                <li>Таймаут создания задачи оказался лишней пересборкой на каждом запросе: <strong>38 с → 3 с</strong>, ускорение в 8–12 раз.</li>
                <li>Агенты зависали намертво — виноват был не код, а модель порядка событий: порядковый номер записи отражает момент сохранения, а не событие. <strong>4 266 пар из 42 661</strong> шли в обратную сторону. После пересборки сопоставления по времени заблокированных сессий стало <strong>2 вместо 266</strong>.</li>
            </ul>

            <h4>🛠 Технологии:</h4>
            <p>Python (asyncio), FastAPI, SQLite, MCP, Claude Agent SDK, Docker, git worktrees, HTMX/SSE.</p>
        `,
        desc_en: `
            <p><strong>Role:</strong> author and sole engineer. Open source.</p>
            <p>A platform that takes a high-level task, splits it into parts and runs several AI agents in parallel. Each works in its own repository checkout, so agents never overwrite each other. To date: <strong>556 agent sessions</strong> and <strong>207,089 logged events</strong> across 21 projects.</p>

            <h4>🚀 Inside:</h4>
            <ul>
                <li><strong>4 runtimes under one lifecycle:</strong> Claude, Codex, Grok and an OpenRouter gateway, 18 models. Routing by task type, not by price.</li>
                <li><strong>Git-worktree isolation:</strong> an agent cannot see others' work until merge; only the orchestrator merges.</li>
                <li><strong>Restart-safe state:</strong> lives server-side, not in process memory; interrupted turns are marked and resumed.</li>
                <li><strong>10+ custom MCP servers:</strong> mail, task tracker, search, GitHub Actions, Figma. The orchestrator itself exposes 46 control tools.</li>
                <li><strong>Write reliability:</strong> operation journal, idempotency keys, read-back verification after every change. Indeterminate operations block retries until a human resolves them.</li>
                <li><strong>Permission classes:</strong> act now, research only, or requires human approval — enforced in code, not in the prompt.</li>
                <li><strong>Cross-vendor review:</strong> output is reviewed by a different vendor's model; if unavailable, review is skipped rather than substituted.</li>
                <li><strong>2,600+ automated tests</strong>, Docker, CI/CD, Unix-permission sandboxing.</li>
            </ul>

            <h4>🔍 What log analysis revealed:</h4>
            <ul>
                <li>A task-creation timeout turned out to be a synchronous rebuild on every request: <strong>38 s → 3 s</strong>, an 8–12× speedup.</li>
                <li>Agents hung permanently — the cause was not the code but the event-ordering model: SQLite autoincrement reflects commit order, not event order. <strong>4,266 pairs out of 42,661</strong> were inverted. Re-pairing by timestamp dropped blocked sessions from <strong>266 to 2</strong>.</li>
            </ul>

            <h4>🛠 Stack:</h4>
            <p>Python (asyncio), FastAPI, SQLite, MCP, Claude Agent SDK, Docker, git worktrees, HTMX/SSE.</p>
        `,
        links: [{ text: "GitHub", url: "https://github.com/DrSeedon/orchestra", icon: "external-link" }]
    },
    ritual_platform: {
        title: "Платформа для агрегатора услуг",
        title_en: "B2B Platform Delivery",
        year: "2026",
        year_en: "2026",
        priority: true,
        tags: ["AI Agents", "Data 10⁸", "SEO", "B2B"],
        tags_en: ["AI Agents", "Data 10⁸", "SEO", "B2B"],
        desc: `
            <p><strong>Роль:</strong> архитектура, постановка задач агентам, ответственность за результат.</p>
            <p>Небольшая компания без своей разработки хотела вырасти в поисковой выдаче и принимать заявки онлайн. Бюджета на команду не было — задачи закрывались мультиагентной системой под моим контролем и контролем клиента.</p>

            <h4>📈 Результат:</h4>
            <ul>
                <li>Видимость в поиске выросла <strong>в 49 раз</strong>: карта сайта с 9 846 до <strong>478 354</strong> адресов.</li>
                <li>Поиск по архиву на <strong>114 млн записей</strong>, 41 ГБ исходных данных.</li>
                <li><strong>152 244 города</strong> со склонением названий по падежам для поисковой выдачи.</li>
                <li>Сопоставление <strong>62 млн записей</strong> отработало 9 часов без присмотра; отдельную задачу ускорил с <strong>31 часа до 24 минут</strong>.</li>
                <li>Восемь направлений за два с половиной месяца: <strong>87 агентов</strong>, 8 274 вызова инструментов.</li>
                <li>Голосовой помощник на линии 8-800: приём звонка, распознавание речи, перевод на живого оператора.</li>
            </ul>

            <h4>🛠 Технологии:</h4>
            <p>Python, FastAPI, MySQL, Docker, Claude и Codex, собственные MCP-интеграции, платёжные сервисы, телефония (Asterisk, SpeechKit).</p>
        `,
        desc_en: `
            <p><strong>Role:</strong> architecture, task specification for agents, ownership of the result.</p>
            <p>A small company with no in-house development needed search visibility and online lead intake. With no budget for a team, the work was delivered by a multi-agent system under my supervision and the client's review.</p>

            <h4>📈 Outcome:</h4>
            <ul>
                <li>Search visibility grew <strong>49×</strong>: sitemap from 9,846 to <strong>478,354</strong> URLs.</li>
                <li>Archive search over <strong>114M records</strong>, 41 GB of source data.</li>
                <li><strong>152,244 cities</strong> with grammatical case morphology for search pages.</li>
                <li>A <strong>62M-record cross-match</strong> ran 9 hours unattended; one job was optimised from <strong>31 hours to 24 minutes</strong>.</li>
                <li>Eight workstreams in two and a half months: <strong>87 agents</strong>, 8,274 tool calls.</li>
                <li>Voice assistant on the 8-800 line: call intake, speech recognition, handoff to a human operator.</li>
            </ul>

            <h4>🛠 Stack:</h4>
            <p>Python, FastAPI, MySQL, Docker, Claude and Codex, custom MCP integrations, payment providers, telephony (Asterisk, SpeechKit).</p>
        `,
        links: []
    },
    sensar: {
        title: "Sensar — медицинский видеоларингоскоп",
        title_en: "Sensar — Medical Video Laryngoscope",
        year: "2026",
        year_en: "2026",
        priority: true,
        tags: ["Embedded", "Qt/C++", "Medical", "Контракт 800k₽"],
        tags_en: ["Embedded", "Qt/C++", "Medical", "₽800k contract"],
        desc: `
            <p><strong>Роль:</strong> разработка ПО устройства по коммерческому контракту.</p>
            <p>Программное обеспечение для медицинского видеоларингоскопа — прибора, которым врач видит дыхательные пути пациента при интубации. Цена ошибки высокая, требования к приёмке формальные.</p>

            <h4>✅ Результат:</h4>
            <ul>
                <li>Контракт <strong>800 000 ₽</strong>, приёмка по <strong>всем 11 критериям</strong>.</li>
                <li>Загрузка устройства оптимизирована с <strong>20 секунд до 4,5</strong> — критично, когда прибор берут в руки в неотложной ситуации.</li>
                <li>Запись видео, работа с камерой, интерфейс под управление в перчатках.</li>
            </ul>

            <h4>🛠 Технологии:</h4>
            <p>Qt/C++, embedded Linux, работа с видеопотоком.</p>
        `,
        desc_en: `
            <p><strong>Role:</strong> device software development under a commercial contract.</p>
            <p>Software for a medical video laryngoscope — the device a doctor uses to see a patient's airway during intubation. High cost of error, formal acceptance requirements.</p>

            <h4>✅ Outcome:</h4>
            <ul>
                <li><strong>₽800,000 contract</strong>, accepted on <strong>all 11 criteria</strong>.</li>
                <li>Device boot time optimised from <strong>20 seconds to 4.5</strong> — critical when the device is picked up in an emergency.</li>
                <li>Video capture, camera handling, UI designed for gloved operation.</li>
            </ul>

            <h4>🛠 Stack:</h4>
            <p>Qt/C++, embedded Linux, video pipeline.</p>
        `,
        links: []
    },
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
        desc: "Разработка пошаговой стратегической игры Guilds UP! Сложные механики боя, экономика и система прогрессии.",
        desc_en: "Developing the turn-based strategy game Guilds UP! Complex combat mechanics, economy, and progression system.",
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
        desc: "Разработка проектов с заменой лиц и генерацией образов для музеев. Интерактивные ИИ-инсталляции, создающие уникальный пользовательский опыт.",
        desc_en: "Developing AI projects with face swapping and image generation for museums. Interactive AI installations creating unique user experiences.",
        links: []
    },
    drones: {
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
        desc: "Работа в студии над игрой Factory Tower. Оптимизация производительности, разработка игровых механик и подготовка к релизу в Steam.",
        desc_en: "Worked in a studio on Factory Tower. Performance optimization, mechanics development, and Steam release preparation.",
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
        desc: "Авторская игровая платформа для детей 6-12 лет по изучению английского языка. Геймификация процесса обучения.",
        desc_en: "Custom gaming platform for children aged 6-12 to learn English. Gamified learning process.",
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
            <p>Создание VR туров и иммерсивных сцен. Hand Tracking: физические руки, которые не проваливаются сквозь предметы, скалолазание, использование предметов, перемещение по меткам.</p>
        `,
        desc_en: `
            <p>Creating VR tours and immersive scenes. Hand Tracking: physical hands that don't pass through objects, climbing, interaction, teleportation system.</p>
        `,
        links: []
    },
    tesla: {
        title: "AR Tesla CyberTruck",
        title_en: "AR Tesla CyberTruck",
        year: "Ноябрь 2022",
        year_en: "November 2022",
        priority: false,
        tags: ["AR", "Social", "Mobile"],
        tags_en: ["AR", "Social", "Mobile"],
        desc: `
            <p>AR-опыт с Tesla CyberTruck. Сканирование окружения, трекинг, изменение размера/положения машины. Фото с машиной и постинг в ВК альбом.</p>
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
        desc: "Приложение для стендов. Динамическая загрузка контента (текст, фото, видео) из папок проекта без пересборки билда. Слайдшоу и видеоплеер.",
        desc_en: "App for stands. Dynamic content loading (text, photos, video) without rebuilding. Slideshow and video player.",
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
        desc: "Система навигации для вертикальных стендов. Расписание мероприятий + Интерактивная схема с построением маршрутов в реальном времени для 5 разных точек расположения.",
        desc_en: "Navigation system for vertical stands. Schedule + Map with real-time wayfinding for 5 different locations.",
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
        desc: "Асинхронная загрузка и отображение бесконечного коллажа фоток из папки без повторений. Динамическое обновление сетки.",
        desc_en: "Asynchronous loading and display of an infinite photo collage without repetitions. Dynamic grid updates.",
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
        desc: "Управление большим экраном через планшет по OSC протоколу. Интеграция с Resolume для запуска видеороликов одним нажатием.",
        desc_en: "Large screen control via tablet using OSC protocol. Resolume integration for video triggering.",
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
        desc: "Система расчета стоимости сложных изделий. Роли Оператор/Инженер, база данных параметров и генерация PDF-отчетов с заказами.",
        desc_en: "Product cost calculation system. Operator/Engineer roles, parameter database, and PDF order generation.",
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
        desc: "Мобильный тайкун про молочную ферму. Постройка пастеризаторов, упаковщиков, логистика. AdJust, Facebook SDK и глубокая оптимизация производительности.",
        desc_en: "Idle tycoon about a dairy farm. Machinery building, logistics. Adjust, Facebook SDK, and deep performance optimization.",
        links: []
    },
    particles_test: {
        title: "Particle System Visuals",
        title_en: "Particle System Visuals",
        year: "2022",
        year_en: "2022",
        priority: false,
        tags: ["VFX", "Particles", "Shaders"],
        tags_en: ["VFX", "Particles", "Shaders"],
        desc: "Тесты сложных визуальных эффектов с помощью Particle System в Unity. Оптимизация и создание кастомных шейдеров для эффектов.",
        desc_en: "Complex visual effects tests using Unity Particle System. Optimization and custom shaders for VFX.",
        links: [{ text: "YouTube", url: "https://www.youtube.com/watch?v=6X_Z6Lx_XSw", icon: "external-link" }]
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
            <p>Крупный пет-проект в 3D. Песочница с выживанием, мультиплеером и упором на социальное взаимодействие.</p>
            <h4>🚀 Реализовано:</h4>
            <ul>
                <li>Процедурная генерация огромного мира.</li>
                <li>Реалистичная физика персонажа.</li>
                <li>Инвентарь и система ключей для дверей.</li>
            </ul>
        `,
        desc_en: `
            <p>Large-scale 3D pet project. Survival sandbox with multiplayer and social focus. Procedural generation, realistic physics, and inventory system.</p>
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
            <p>Первый большой проект. Создавался для глубокого изучения Unity.</p>
            <h4>🚀 Фичи:</h4>
            <ul>
                <li>11 уровней с уникальными физическими механиками.</li>
                <li>Босс с 3 стадиями поведения.</li>
                <li>Процедурная генерация и сетевой режим.</li>
                <li>Управляемый транспорт (Hill Climb style).</li>
                <li>Магазин скинов, покупки за реальные деньги и реклама.</li>
            </ul>
        `,
        desc_en: `
            <p>First big project for learning Unity. 11 unique levels, 3-stage boss, procedural generation, multiplayer, vehicles, and IAP/Ads integration.</p>
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
        desc: `
            <p>Симулятор бактерий с собственными нейросетями. Мутации, естественный отбор и система Boids.</p>
            <h4>🚀 Фичи:</h4>
            <ul>
                <li>Настройка всех правил мира в реальном времени.</li>
                <li>Ядовитые зоны, требующие эволюционной адаптации.</li>
            </ul>
        `,
        desc_en: `
            <p>Bacteria simulator with custom neural networks. Mutations, natural selection, Boids system, and evolutionary adaptation to toxic zones.</p>
        `,
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
        desc: "Генерация лабиринтов любого размера, мгновенное переключение между 2D и 3D режимами и алгоритм автоматического поиска пути.",
        desc_en: "Generation of mazes of any size, seamless 2D/3D switching, and automatic pathfinding algorithms.",
        links: [{ text: "Google Play", url: "https://play.google.com/store/apps/details?id=com.SeedonsGames.SimpleMazze", icon: "external-link" }]
    }
};
