// Project Data for Modal
const projectsData = {
    slime_catcher: {
        title: "Slime Catcher - Farm Idle RPG",
        year: "2025",
        tags: ["Unity 6", "Zenject", "UniTask", "Game Design", "AI"],
        desc: `Мобильная idle/RPG игра для Android с фокусом на коллекционирование и прогрессию. Проект разработан для F2P модели.
        <br><br>
        <b>Реализовано:</b>
        <ul>
            <li>Core loop: ловля слаймов → загоны → производство → апгрейды.</li>
            <li>Симуляционная модель экономики в коде для тестирования баланса.</li>
            <li>NavMesh AI для слаймов: обход препятствий, патрулирование.</li>
            <li>Интеграция аналитики: Adjust, AppMetrica, Facebook SDK.</li>
        </ul>`,
        images: ["1.jpg", "2.jpg", "3.jpg"],
        links: [
            { text: "Google Play", url: "https://play.google.com/store/apps/details?id=com.multicast.slimecatcher", icon: "external-link" }
        ]
    },
    dnd_system: {
        title: "D&D Offline Session System",
        year: "2025",
        tags: ["Desktop", "Unity", "Zenject", "UI/UX"],
        desc: `Десктопное приложение для проведения оффлайн сессий D&D. Позволяет мастеру транслировать контент на второй экран игрокам.
        <br><br>
        <b>Фичи:</b>
        <ul>
            <li>Двухоконный режим: Мастер (контроль) и Игроки (трансляция).</li>
            <li>Физика кубиков (D4-D20) с физическим разбросом.</li>
            <li>Аудиосистема: управление фоновой музыкой и эффектами.</li>
            <li>Система сохранения проектов в формате .dnd.</li>
        </ul>`,
        images: ["1.jpg", "2.jpg"],
        links: []
    },
    tesla: {
        title: "AR Tesla CyberTruck",
        year: "2022",
        tags: ["AR Foundation", "Unity", "Mobile"],
        desc: `Приложение дополненной реальности для визуализации Tesla CyberTruck.
        <br><br>
        <b>Реализовано:</b>
        <ul>
            <li>Трекинг окружения и меток.</li>
            <li>Возможность заглянуть внутрь машины, менять размер.</li>
            <li>Функция фото и выкладывания в альбом ВКонтакте.</li>
        </ul>`,
        images: ["1.jpg"],
        links: []
    },
    iuh: {
        title: "IUH - 2D Platformer",
        year: "2020",
        tags: ["2D", "Unity", "Multiplayer", "Physics"],
        desc: `Мой первый серьезный проект на Unity. 2D платформер с уникальными механиками на каждом уровне.
        <br><br>
        <b>Фичи:</b>
        <ul>
            <li>Босс с 3 стадиями поведения.</li>
            <li>Процедурная генерация уровней.</li>
            <li>Сетевая игра.</li>
            <li>Управляемый автомобиль с физикой.</li>
        </ul>`,
        images: ["1.jpg", "2.jpg"],
        links: [
            { text: "GitHub", url: "https://github.com/DrSeedon/HUI", icon: "github" }
        ]
    }
};

// Initialize Lucide icons
lucide.createIcons();

// Cursor Effect (Rigid Glow)
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Typing Effect for Subtitle
const subtitle = document.querySelector('.subtitle');
const text = subtitle.innerText;
subtitle.innerText = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        subtitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
    }
}
// Start typing after reveal
setTimeout(typeWriter, 1000);

// Modal Logic
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
let currentProject = null;
let currentImgIdx = 0;

function openProject(id) {
    const data = projectsData[id];
    if (!data) return;
    
    currentProject = id;
    currentImgIdx = 0;
    
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-year').innerText = data.year;
    document.getElementById('modal-full-desc').innerHTML = data.desc;
    
    const tagsCont = document.getElementById('modal-tags');
    tagsCont.innerHTML = data.tags.map(t => `<span>${t}</span>`).join('');
    
    const linksCont = document.getElementById('modal-links');
    linksCont.innerHTML = data.links.map(l => 
        `<a href="${l.url}" class="btn primary" target="_blank">${l.text} <i data-lucide="${l.icon}"></i></a>`
    ).join('');
    
    updateModalImage();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function updateModalImage() {
    const data = projectsData[currentProject];
    const slidesCont = document.querySelector('.modal-slides');
    const imgName = data.images[currentImgIdx];
    slidesCont.innerHTML = `<img src="assets/images/portfolio/${currentProject}/${imgName}" onerror="this.src='https://placehold.co/800x600?text=${data.title}'">`;
}

// Global modal trigger for cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't open modal if clicking on controls or links
        if (e.target.closest('.slider-controls') || e.target.closest('.project-link')) {
            return;
        }
        openProject(card.dataset.project);
    });
});

closeModal.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = (e) => {
    if (e.target == modal) closeModal.onclick();
};

document.getElementById('modal-prev').onclick = () => {
    const data = projectsData[currentProject];
    currentImgIdx = (currentImgIdx > 0) ? currentImgIdx - 1 : data.images.length - 1;
    updateModalImage();
};

document.getElementById('modal-next').onclick = () => {
    const data = projectsData[currentProject];
    currentImgIdx = (currentImgIdx < data.images.length - 1) ? currentImgIdx + 1 : 0;
    updateModalImage();
};

// Card Internal Sliders
document.querySelectorAll('.project-slider').forEach(slider => {
    const slides = slider.querySelector('.slides img');
    const folder = slider.parentElement.dataset.project;
    let currentImg = 1;
    const maxImgs = 3; 

    const updateImage = () => {
        slides.style.opacity = '0';
        setTimeout(() => {
            slides.src = `assets/images/portfolio/${folder}/${currentImg}.jpg`;
            slides.style.opacity = '1';
        }, 200);
    };

    slider.querySelector('.prev-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImg = currentImg > 1 ? currentImg - 1 : maxImgs;
        updateImage();
    });

    slider.querySelector('.next-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImg = currentImg < maxImgs ? currentImg + 1 : 1;
        updateImage();
    });
});

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Nav transparency
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.background = window.scrollY > 50 ? 'rgba(10, 10, 12, 0.95)' : 'rgba(10, 10, 12, 0.7)';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
