export function setupTypewriter() {
    const subtitle = document.querySelector('.subtitle');
    const subText = subtitle ? subtitle.innerText : '';
    if (subtitle) {
        subtitle.innerText = '';
        let charIdx = 0;
        function typeWriter() {
            if (charIdx < subText.length) {
                subtitle.innerHTML += subText.charAt(charIdx);
                charIdx++;
                setTimeout(typeWriter, 30);
            }
        }
        setTimeout(typeWriter, 1000);
    }
}

export function setupObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return observer; // Return if needed elsewhere
}

export function setupCursor() {
    const glow = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        if(glow) {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        }
    });
    
    // Add hover effect for buttons to make glow bigger/brighter
    const addHover = () => {
        document.querySelectorAll('.btn, .project-card, .comp-card, .timeline-item').forEach(el => {
            el.addEventListener('mouseenter', () => {
                if(glow) glow.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                if(glow) glow.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    };
    addHover();
    
    // Export for dynamic elements
    window.refreshCursorHover = addHover;
}