import { projectsData } from './data.js';

const modal = document.getElementById('project-modal');
let currentModalProj = null;
let currentModalImgIdx = 0;

export function setupModals() {
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        if (card && !e.target.closest('.slider-controls') && !e.target.closest('.project-link')) {
            openModal(card.dataset.project);
        }
    });

    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
    }

    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');

    if (prevBtn) prevBtn.onclick = () => {
        const imgs = projectsData[currentModalProj].images;
        currentModalImgIdx = (currentModalImgIdx > 0) ? currentModalImgIdx - 1 : imgs.length - 1;
        updateModalImage();
    };

    if (nextBtn) nextBtn.onclick = () => {
        const imgs = projectsData[currentModalProj].images;
        currentModalImgIdx = (currentModalImgIdx < imgs.length - 1) ? currentModalImgIdx + 1 : 0;
        updateModalImage();
    };
}

function openModal(id) {
    const data = projectsData[id];
    if (!data) return;
    currentModalProj = id;
    currentModalImgIdx = 0;

    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-year').innerText = data.year;
    document.getElementById('modal-full-desc').innerHTML = data.desc;
    document.getElementById('modal-tags').innerHTML = data.tags.map(t => `<span>${t}</span>`).join('');
    document.getElementById('modal-links').innerHTML = (data.links || []).map(l => 
        `<a href="${l.url}" class="btn btn--primary" target="_blank">${l.text} <i data-lucide="${l.icon}"></i></a>`
    ).join('');

    const controls = document.querySelector('.modal-controls');
    if (controls) {
        controls.style.display = (data.images && data.images.length > 1) ? 'flex' : 'none';
    }

    updateModalImage();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function updateModalImage() {
    const data = projectsData[currentModalProj];
    if (!data.images?.length) return;
    const container = document.querySelector('.modal-slides');
    if(container) container.innerHTML = `<img src="assets/images/portfolio/${currentModalProj}/${data.images[currentModalImgIdx]}">`;
}