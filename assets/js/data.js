export const projectsData = {
    orchestra: {
        title: "Orchestra — мультиагентный оркестратор (Open Source)",
        title_en: "Orchestra — Multi-Agent AI Orchestrator (Open Source)",
        year: "2026 — наст. время",
        year_en: "2026 — Present",
        priority: true,
        tags: ["Python", "FastAPI", "LLM", "MCP", "Git Worktrees", "Open Source"],
        tags_en: ["Python", "FastAPI", "LLM", "MCP", "Git Worktrees", "Open Source"],
        desc: `
            <p><strong>Роль:</strong> автор и единственный инженер. Открытый код (<a href="https://github.com/DrSeedon/orchestra" target="_blank">DrSeedon/orchestra</a>).</p>
            <p>Платформа, которая берёт задачу в общем виде, режет её на части и запускает десятки AI-агентов параллельно (до 100+ воркеров). Каждый работает в своей изолированной копии репозитория (<code>git worktree</code>), поэтому агенты не мешают друг другу. За время эксплуатации — <strong>556+ сессий агентов</strong> и <strong>207 089+ записанных событий</strong> на 21 проекте.</p>

            <h4>🚀 Что внутри:</h4>
            <ul>
                <li><strong>4 рантайма под одним контуром:</strong> Claude, OpenAI Codex, Grok и шлюз к OpenRouter, 18 моделей. Выбор модели по типу задачи, а не по цене.</li>
                <li><strong>Изоляция через git worktree:</strong> агент не видит чужих изменений до слияния, объединяет результат только координатор.</li>
                <li><strong>Состояние переживает перезапуск:</strong> живёт на сервере (SQLite), а не в памяти процесса; прерванный ход помечается и поднимается заново.</li>
                <li><strong>10+ собственных MCP-серверов:</strong> почта, таск-трекер, реклама, поиск, GitHub Actions, Figma. Сам оркестратор отдаёт 46 инструментов управления.</li>
                <li><strong>Надёжность записи:</strong> журнал операций, идемпотентность по идентификатору, перепроверка результата через API после изменения.</li>
                <li><strong>Права действий и кросс-ревью:</strong> три класса прав в коде (не в промпте), кросс-ревью моделью другого вендора, <strong>2 600+ автотестов</strong>, Docker, CI/CD.</li>
            </ul>

            <h4>🔍 Что дал разбор логов:</h4>
            <ul>
                <li>Таймаут создания задачи оказался лишней пересборкой на каждом запросе: <strong>38 с → 3 с</strong>, ускорение в 8–12 раз.</li>
                <li>Агенты зависали намертво из-за инверсии порядка событий при сохранении (<strong>4 266 пар из 42 661</strong>). После пересборки сопоставления по времени заблокированных сессий стало <strong>2 вместо 266</strong>.</li>
            </ul>

            <h4>🛠 Технологии:</h4>
            <p>Python (asyncio), FastAPI, SQLite, MCP, Claude Agent SDK, Docker, git worktrees, HTMX/SSE.</p>
        `,
        desc_en: `
            <p><strong>Role:</strong> author and sole engineer. Open source (<a href="https://github.com/DrSeedon/orchestra" target="_blank">DrSeedon/orchestra</a>).</p>
            <p>A platform that takes a high-level task, splits it into parts and runs dozens of AI agents in parallel (100+ workers across departments). Each works in its own isolated repository checkout (<code>git worktree</code>), so agents never overwrite each other. To date: <strong>556+ agent sessions</strong> and <strong>207,089+ logged events</strong> across 21 projects.</p>

            <h4>🚀 Inside:</h4>
            <ul>
                <li><strong>4 runtimes under one lifecycle:</strong> Claude, OpenAI Codex, Grok and an OpenRouter gateway, 18 models. Routing by task type, not by price.</li>
                <li><strong>Git-worktree isolation:</strong> an agent cannot see others' work until merge; only the orchestrator merges.</li>
                <li><strong>Restart-safe state:</strong> lives server-side (SQLite), not in process memory; interrupted turns are marked and resumed.</li>
                <li><strong>10+ custom MCP servers:</strong> mail, task tracker, ad campaigns, search, GitHub Actions, Figma. The orchestrator itself exposes 46 control tools.</li>
                <li><strong>Write reliability:</strong> operation journal, idempotency keys, read-back verification after every change.</li>
                <li><strong>Permission classes &amp; cross-vendor review:</strong> enforced in code (not prompts), cross-reviewed by a different vendor's model, <strong>2,600+ automated tests</strong>, Docker, CI/CD.</li>
            </ul>

            <h4>🔍 What log analysis revealed:</h4>
            <ul>
                <li>A task-creation timeout turned out to be a synchronous rebuild on every request: <strong>38 s → 3 s</strong>, an 8–12× speedup.</li>
                <li>Agents hung permanently due to SQLite commit-order vs. event-order inversion (<strong>4,266 pairs out of 42,661</strong>). Re-pairing by timestamp dropped blocked sessions from <strong>266 to 2</strong>.</li>
            </ul>

            <h4>🛠 Stack:</h4>
            <p>Python (asyncio), FastAPI, SQLite, MCP, Claude Agent SDK, Docker, git worktrees, HTMX/SSE.</p>
        `,
        links: [
            { text: "GitHub", url: "https://github.com/DrSeedon/orchestra", icon: "github" },
            { text: "Seedon.ru", url: "https://seedon.ru", icon: "external-link" }
        ]
    },
    kesha_brain: {
        title: "Kesha & CEO Second Brain — 24/7 AI-операционка",
        title_en: "Kesha & CEO Second Brain — 24/7 Executive AI OS",
        year: "2025 — наст. время",
        year_en: "2025 — Present",
        priority: true,
        tags: ["Second Brain", "Hybrid RAG", "Claude 4.6", "Voice AI", "Open Source"],
        tags_en: ["Second Brain", "Hybrid RAG", "Claude 4.6", "Voice AI", "Open Source"],
        desc: `
            <p><strong>Роль:</strong> архитектор и разработчик. Открытый код ядра: <a href="https://github.com/DrSeedon/kesha-tg-bot" target="_blank">DrSeedon/kesha-tg-bot</a>.</p>
            <p>Персональная операционная система и «Второй мозг» руководителя, работающий 24/7 в продакшене более года. Объединяет голос, переписки, почту, таск-трекер (YouGile), документы (43+ формата) и граф знаний Obsidian в единую память без потери контекста.</p>

            <h4>🧠 Архитектура и возможности:</h4>
            <ul>
                <li><strong>Гибридная память (Hybrid RAG + Knowledge Graph):</strong> векторный поиск (<code>bge-m3</code>, 1024-dim, cosine similarity) + полнотекстовый поиск SQLite FTS5 (BM25 с русской морфологией) + граф связей <code>[[wikilinks]]</code> (люди, компании, проекты, решения, дедлайны).</li>
                <li><strong>45+ модулей и 16+ автономных инструментов:</strong> от семантического поиска по прошлым договорённостям до создания задач в YouGile, отправки писем, генерации отчётов и управления браузером (Playwright).</li>
                <li><strong>Голосовой контур:</strong> транскрибация голосовых и длинных планерок за секунды (Deepgram Nova-2) с автоматической выжимкой решений, рисков и поручений + голосовой ответ (ElevenLabs v4).</li>
                <li><strong>Каскад надёжности:</strong> при недоступности основного провайдера автоматически переключается на резервный контур (Claude → Gemini / OpenAI / локальный Whisper) без потери ни одного сообщения.</li>
                <li><strong>Качество в цифрах:</strong> <strong>1 700+ автотестов</strong>, ~18 000 строк кода, нулевая потеря контекста между сессиями.</li>
            </ul>

            <h4>🛠 Технологии:</h4>
            <p>Python 3.12, aiogram 3, Claude Agent SDK, SQLite + FTS5, bge-m3 embeddings, Deepgram STT, ElevenLabs TTS, Playwright, Docker.</p>
        `,
        desc_en: `
            <p><strong>Role:</strong> system architect and developer. Open-source core: <a href="https://github.com/DrSeedon/kesha-tg-bot" target="_blank">DrSeedon/kesha-tg-bot</a>.</p>
            <p>A 24/7 Executive Second Brain and AI operating system running in production for over a year. Unifies voice notes, meetings, emails, task trackers (YouGile), documents (43+ formats), and an Obsidian knowledge graph into a single persistent memory layer.</p>

            <h4>🧠 Architecture &amp; Capabilities:</h4>
            <ul>
                <li><strong>Hybrid Memory (Vector + FTS5 + Knowledge Graph):</strong> semantic vector search (<code>bge-m3</code>, 1024-dim) combined with SQLite FTS5 BM25 keyword search and an interconnected Obsidian graph (people, deals, projects, decisions, commitments).</li>
                <li><strong>45+ modules &amp; 16+ autonomous tools:</strong> from instant context retrieval before executive calls to creating tracker tasks, drafting/sending emails, generating PDF/Word briefs, and browser automation (Playwright).</li>
                <li><strong>Voice-first workflow:</strong> transcribes voice notes and hour-long meetings in seconds (Deepgram Nova-2), automatically extracting action items, owners, and risks + natural voice synthesis (ElevenLabs v4).</li>
                <li><strong>Multi-provider failover cascade:</strong> seamlessly routes across Claude, Gemini, OpenAI, and local Whisper so no executive input is ever lost.</li>
                <li><strong>Production quality:</strong> <strong>1,700+ automated tests</strong>, ~18,000 lines of Python, zero context loss across restarts.</li>
            </ul>

            <h4>🛠 Stack:</h4>
            <p>Python 3.12, aiogram 3, Claude Agent SDK, SQLite + FTS5, bge-m3 embeddings, Deepgram STT, ElevenLabs TTS, Playwright, Docker.</p>
        `,
        links: [
            { text: "GitHub (Kesha)", url: "https://github.com/DrSeedon/kesha-tg-bot", icon: "github" }
        ]
    },
    mcp_ecosystem: {
        title: "Экосистема из 10+ собственных MCP-серверов",
        title_en: "10+ Custom Production MCP Servers Ecosystem",
        year: "2025 — 2026",
        year_en: "2025 — 2026",
        priority: true,
        tags: ["MCP", "Tool Calling", "FastMCP", "B2B Integrations", "Open Source"],
        tags_en: ["MCP", "Tool Calling", "FastMCP", "B2B Integrations", "Open Source"],
        desc: `
            <p><strong>Роль:</strong> автор открытых MCP-коннекторов для связки LLM-агентов с реальными бизнес-системами.</p>
            <p>Набор специализированных серверов протокола <strong>Model Context Protocol (MCP)</strong>, позволяющих AI-агентам безопасно управлять рекламой, таск-трекерами, корпоративной почтой, поиском и внешними API с проверкой результата каждого действия.</p>

            <h4>🔌 Открытые репозитории в экосистеме:</h4>
            <ul>
                <li><strong><a href="https://github.com/DrSeedon/yougile-mcp" target="_blank">DrSeedon/yougile-mcp</a>:</strong> 39 инструментов для управления проектами, досками, колонками, задачами и сотрудниками в YouGile.</li>
                <li><strong><a href="https://github.com/DrSeedon/yandex-direct-mcp" target="_blank">DrSeedon/yandex-direct-mcp</a>:</strong> управление рекламными кампаниями Яндекс.Директ v5 (кампании, группы, объявления, ключевые фразы, ставки, минус-слова, аналитика).</li>
                <li><strong><a href="https://github.com/DrSeedon/mailru-mcp" target="_blank">DrSeedon/mailru-mcp</a>:</strong> 15 инструментов IMAP/SMTP для автономной работы агентов с корпоративной почтой (поиск, треды, вложения, отправка).</li>
                <li><strong><a href="https://github.com/DrSeedon/mcp-websearch" target="_blank">DrSeedon/mcp-websearch</a>:</strong> бесплатный мульти-поисковый MCP-сервер с извлечением чистого контента страниц для глубокого ресёрча.</li>
                <li><strong><a href="https://github.com/DrSeedon/gpb-mcp" target="_blank">DrSeedon/gpb-mcp</a>:</strong> специализированный коннектор для интеграции с корпоративными и финансовыми шлюзами.</li>
            </ul>

            <h4>🛡 Инженерные стандарты:</h4>
            <p>Идемпотентность по ключу операции, журнал вызовов (Write-Ahead Log), автоматический read-back после записи и защита от повторного выполнения зависших мутаций.</p>
        `,
        desc_en: `
            <p><strong>Role:</strong> creator of open-source MCP connectors bridging LLM agents with live business systems.</p>
            <p>A suite of production <strong>Model Context Protocol (MCP)</strong> servers enabling AI agents to safely operate ad platforms, project trackers, corporate email, web search, and enterprise APIs with read-back verification on every mutation.</p>

            <h4>🔌 Open-Source Repositories:</h4>
            <ul>
                <li><strong><a href="https://github.com/DrSeedon/yougile-mcp" target="_blank">DrSeedon/yougile-mcp</a>:</strong> 39 tools for managing projects, boards, columns, tasks, and assignees in YouGile CRM/tracker.</li>
                <li><strong><a href="https://github.com/DrSeedon/yandex-direct-mcp" target="_blank">DrSeedon/yandex-direct-mcp</a>:</strong> full Yandex.Direct API v5 automation (campaigns, ad groups, ads, keywords, bids, negative keywords, performance reports).</li>
                <li><strong><a href="https://github.com/DrSeedon/mailru-mcp" target="_blank">DrSeedon/mailru-mcp</a>:</strong> 15 IMAP/SMTP tools for autonomous corporate email workflows (search, threads, attachments, replies).</li>
                <li><strong><a href="https://github.com/DrSeedon/mcp-websearch" target="_blank">DrSeedon/mcp-websearch</a>:</strong> multi-engine web search and clean page-content extraction server for deep agentic research.</li>
                <li><strong><a href="https://github.com/DrSeedon/gpb-mcp" target="_blank">DrSeedon/gpb-mcp</a>:</strong> enterprise gateway and API integration server.</li>
            </ul>

            <h4>🛡 Engineering Standards:</h4>
            <p>Idempotency keys, Write-Ahead operation journal, automatic read-back verification after mutations, and human-in-the-loop locks on indeterminate writes.</p>
        `,
        links: [
            { text: "yougile-mcp", url: "https://github.com/DrSeedon/yougile-mcp", icon: "github" },
            { text: "yandex-direct", url: "https://github.com/DrSeedon/yandex-direct-mcp", icon: "github" },
            { text: "mailru-mcp", url: "https://github.com/DrSeedon/mailru-mcp", icon: "github" },
            { text: "mcp-websearch", url: "https://github.com/DrSeedon/mcp-websearch", icon: "github" }
        ]
    },
    ritual_platform: {
        title: "B2B-платформа и Data-пайплайн на 114 млн записей",
        title_en: "B2B Platform & 114M-Record AI Data Pipeline",
        year: "2026",
        year_en: "2026",
        priority: true,
        tags: ["AI Agents", "Data 10⁸", "SEO 49×", "Voice 8-800", "B2B"],
        tags_en: ["AI Agents", "Data 10⁸", "SEO 49×", "Voice 8-800", "B2B"],
        desc: `
            <p><strong>Роль:</strong> архитектура, постановка задач рою AI-агентов, ответственность за бизнес-результат.</p>
            <p>Компания без собственной команды разработки хотела кратно вырасти в поисковой выдаче и автоматизировать приём заявок. Вся разработка (8 направлений за 2,5 месяца) была выполнена мультиагентной системой под моим контролем.</p>

            <h4>📈 Измеримый бизнес-результат:</h4>
            <ul>
                <li>Видимость в поиске выросла <strong>в 49 раз</strong>: карта сайта с 9 846 до <strong>478 354</strong> индексируемых страниц.</li>
                <li>Высоконагруженный поиск по архиву на <strong>114 млн записей</strong> (41 ГБ исходных данных).</li>
                <li>Геобаза на <strong>152 244 населённых пункта</strong> со склонением названий по падежам.</li>
                <li>Сопоставление <strong>62 млн записей</strong> отработало 9 часов без присмотра; ключевая задача оптимизирована с <strong>31 часа до 24 минут</strong> (ускорение в 77 раз).</li>
                <li>Задействовано <strong>87 специализированных AI-агентов</strong>, выполнено 8 274 инструментальных вызова.</li>
                <li>Голосовой AI-ассистент на линии 8-800 (Asterisk + SpeechKit): приём звонка, распознавание речи, квалификация и перевод на оператора.</li>
            </ul>

            <h4>🛠 Технологии:</h4>
            <p>Python, FastAPI, MySQL, Docker, Claude и Codex, собственные MCP-интеграции, платёжные сервисы, телефония (Asterisk, SpeechKit).</p>
        `,
        desc_en: `
            <p><strong>Role:</strong> system architecture, agent fleet orchestration, end-to-end delivery ownership.</p>
            <p>A company with no in-house engineering team needed massive search visibility and automated lead intake. All 8 workstreams were delivered in 2.5 months by a multi-agent fleet under my supervision.</p>

            <h4>📈 Measurable Business Outcome:</h4>
            <ul>
                <li>Search visibility grew <strong>49×</strong>: sitemap expanded from 9,846 to <strong>478,354</strong> indexed URLs.</li>
                <li>High-speed archive search over <strong>114M records</strong> (41 GB of raw data).</li>
                <li><strong>152,244 localities</strong> with full grammatical case morphology for programmatic SEO pages.</li>
                <li>A <strong>62M-record cross-match</strong> ran 9 hours unattended; a bottleneck pipeline was optimized from <strong>31 hours down to 24 minutes</strong> (77× faster).</li>
                <li>Delivered across 8 workstreams by <strong>87 specialized AI agents</strong> executing 8,274 verified tool calls.</li>
                <li>Voice AI operator on the 8-800 toll-free line (Asterisk + SpeechKit): call intake, real-time STT, qualification, and seamless human handoff.</li>
            </ul>

            <h4>🛠 Stack:</h4>
            <p>Python, FastAPI, MySQL, Docker, Claude and Codex, custom MCP integrations, payment providers, telephony (Asterisk, SpeechKit).</p>
        `,
        links: [
            { text: "Кейс на Seedon.ru", url: "https://seedon.ru", icon: "external-link" }
        ]
    },
    ai_infra_oss: {
        title: "Open-Source AI Инфраструктура: T3 Code, Codex, Aperant, VoiceType",
        title_en: "Open-Source AI Infrastructure: T3 Code, Codex, Aperant, VoiceType",
        year: "2025 — 2026",
        year_en: "2025 — 2026",
        priority: true,
        tags: ["T3 Code (Merged)", "OpenAI Codex", "Autonomous Dev", "Voice AI", "Open Source"],
        tags_en: ["T3 Code (Merged)", "OpenAI Codex", "Autonomous Dev", "Voice AI", "Open Source"],
        desc: `
            <p><strong>Роль:</strong> официальный контрибьютор в ядро агентных рантаймов и автор open-source инструментов автоматизации.</p>
            <p>Помимо основных платформ, разрабатываю открытые инфраструктурные решения для автономного программирования, управления удалёнными рантаймами, голосового ввода и долгосрочной памяти агентов.</p>

            <h4>🚀 Ключевые репозитории и контрибуции:</h4>
            <ul>
                <li><strong>Вмерженный PR в ядро <a href="https://github.com/pingdotgg/t3code/pull/30781" target="_blank">pingdotgg/t3code (#30781 — MERGED)</a>:</strong> включил режим мультиагентной оркестрации Ultracode для Claude Sonnet 5.5 и Haiku 5.5 (вмержен в <code>main</code> главным мейнтейнером Julius Marminge, коммит <code>4bfb896</code>).</li>
                <li><strong>Исследование и Rust-патч для <a href="https://github.com/openai/codex/issues/40362" target="_blank">openai/codex (Issue #40362)</a>:</strong> воспроизведение, замер (23 МБ JSONL-строка) и патч с unit-тестом для ограничения переполнения буфера stdio в <code>thread/resume</code>.</li>
                <li><strong><a href="https://github.com/DrSeedon/Aperant" target="_blank">DrSeedon/Aperant</a> и <a href="https://github.com/DrSeedon/claude-server" target="_blank">DrSeedon/claude-server</a>:</strong> фреймворк автономной мульти-сессионной разработки и HTTP/SSE-сервер для удалённого управления агентными рантаймами на VPS.</li>
                <li><strong><a href="https://github.com/DrSeedon/Claude-Code-Game-Master" target="_blank">DrSeedon/Claude-Code-Game-Master</a>:</strong> движок управления состоянием сложного мира и долгосрочной памятью на базе Claude Code (проверка правил, граф событий, синхронизация, вмержен upstream <a href="https://github.com/Sstobo/Claude-Code-Game-Master/pull/2" target="_blank">PR #2</a>).</li>
                <li><strong><a href="https://github.com/DrSeedon/VoiceType" target="_blank">DrSeedon/VoiceType</a>:</strong> десктопная система мгновенного голосового ввода и транскрибации с ИИ-постобработкой текста для ускорения работы инженера и руководителя.</li>
                <li><strong><a href="https://github.com/DrSeedon/hedgehog-vpn" target="_blank">DrSeedon/hedgehog-vpn</a>:</strong> полностью автоматизированный SaaS-сервис (VLESS/Xray, автовыдача ключей, биллинг, мониторинг узлов).</li>
            </ul>
        `,
        desc_en: `
            <p><strong>Role:</strong> official contributor to core agentic runtimes and author of open-source developer &amp; automation tools.</p>
            <p>Alongside flagship platforms, I build open-source infrastructure for autonomous coding, remote runtime daemons, low-latency voice input, and stateful long-horizon agent memory.</p>

            <h4>🚀 Key Repositories &amp; Core Contributions:</h4>
            <ul>
                <li><strong>Merged core PR to <a href="https://github.com/pingdotgg/t3code/pull/30781" target="_blank">pingdotgg/t3code (#30781 — MERGED)</a>:</strong> exposed Ultracode multi-agent workflow orchestration on Claude Sonnet 5.5 and Haiku 5.5 (merged into <code>main</code> by lead maintainer Julius Marminge, commit <code>4bfb896</code>).</li>
                <li><strong>Core bug reproduction &amp; Rust patch for <a href="https://github.com/openai/codex/issues/40362" target="_blank">openai/codex (Issue #40362)</a>:</strong> diagnosed and measured a 23 MB unbounded JSONL response in <code>thread/resume</code> and authored a Rust patch + unit test.</li>
                <li><strong><a href="https://github.com/DrSeedon/Aperant" target="_blank">DrSeedon/Aperant</a> &amp; <a href="https://github.com/DrSeedon/claude-server" target="_blank">DrSeedon/claude-server</a>:</strong> autonomous multi-session coding framework and HTTP/SSE daemon for orchestrating remote Claude Code instances on VPS clusters.</li>
                <li><strong><a href="https://github.com/DrSeedon/Claude-Code-Game-Master" target="_blank">DrSeedon/Claude-Code-Game-Master</a>:</strong> stateful narrative &amp; world-simulation engine testing long-horizon LLM memory, rule enforcement, and entity state graphs (upstream <a href="https://github.com/Sstobo/Claude-Code-Game-Master/pull/2" target="_blank">PR #2</a> merged).</li>
                <li><strong><a href="https://github.com/DrSeedon/VoiceType" target="_blank">DrSeedon/VoiceType</a>:</strong> instant AI voice-to-text desktop pipeline with LLM post-processing for high-speed engineering and executive dictation.</li>
                <li><strong><a href="https://github.com/DrSeedon/hedgehog-vpn" target="_blank">DrSeedon/hedgehog-vpn</a>:</strong> end-to-end automated SaaS service (VLESS/Xray node orchestration, automated billing, key provisioning).</li>
            </ul>
        `,
        links: [
            { text: "T3 Code PR #30781 (Merged)", url: "https://github.com/pingdotgg/t3code/pull/30781", icon: "git-merge" },
            { text: "Codex Issue #40362", url: "https://github.com/openai/codex/issues/40362", icon: "git-pull-request" },
            { text: "Aperant", url: "https://github.com/DrSeedon/Aperant", icon: "github" },
            { text: "VoiceType", url: "https://github.com/DrSeedon/VoiceType", icon: "github" }
        ]
    },
    sensar: {
        title: "Sensar — медицинский видеоларингоскоп",
        title_en: "Sensar — Medical Video Laryngoscope",
        year: "2026",
        year_en: "2026",
        priority: true,
        tags: ["Embedded Linux", "Qt/C++", "Medical", "Контракт 800k₽"],
        tags_en: ["Embedded Linux", "Qt/C++", "Medical", "₽800k contract"],
        desc: `
            <p><strong>Роль:</strong> разработка системного и прикладного ПО устройства по коммерческому контракту.</p>
            <p>Программное обеспечение для медицинского видеоларингоскопа — прибора, которым врач видит дыхательные пути пациента при интубации. Цена ошибки высокая, требования к приёмке формальные.</p>

            <h4>✅ Результат:</h4>
            <ul>
                <li>Контракт <strong>800 000 ₽</strong>, успешная сдача и приёмка по <strong>всем 11 критериям</strong>.</li>
                <li>Холодная загрузка устройства оптимизирована с <strong>20 секунд до 4,5 с</strong> — критично в экстренной реанимационной ситуации.</li>
                <li>Захват видеопотока 60 FPS без просадок, работа с камерой, интерфейс под управление в медицинских перчатках.</li>
            </ul>

            <h4>🛠 Технологии:</h4>
            <p>Qt/C++, Embedded Linux, V4L2/GStreamer видеопайплайн, systemd optimization.</p>
        `,
        desc_en: `
            <p><strong>Role:</strong> system and application software development under a commercial hardware contract.</p>
            <p>Software for a medical video laryngoscope — the device a doctor uses to visualize a patient's airway during emergency intubation. High cost of error, strict formal acceptance criteria.</p>

            <h4>✅ Outcome:</h4>
            <ul>
                <li><strong>₽800,000 contract</strong>, formally accepted on <strong>all 11/11 criteria</strong>.</li>
                <li>Device cold boot time optimized from <strong>20 seconds down to 4.5s</strong> — critical when picked up in an emergency.</li>
                <li>Zero-drop 60 FPS video capture, camera pipeline, and touch UI engineered for gloved operation.</li>
            </ul>

            <h4>🛠 Stack:</h4>
            <p>Qt/C++, Embedded Linux, V4L2/GStreamer video pipeline, systemd boot optimization.</p>
        `,
        links: []
    },
    slime_catcher: {
        title: "Slime Catcher - Farm Idle RPG",
        title_en: "Slime Catcher - Farm Idle RPG",
        year: "Август 2025",
        year_en: "August 2025",
        priority: false,
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
        priority: false,
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
        priority: false,
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
        priority: false,
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
        priority: false,
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
