/**
 * Hero section typing effect and floating shapes animation
 * Creates a typewriter effect with an array of titles and animated floating shapes
 */
(function () {
    'use strict';

    // ----- Typing Effect -----
    const phrases = [
        'Researcher at Hefei Comprehensive National Science Center',
        'AI & Medical Image Analysis',
        'Algorithm Fairness & MEG Signal Processing',
        'Ph.D. from USTC',
    ];

    const heroEl = document.querySelector('.hero-section');
    if (!heroEl) return;

    let typingContainer = heroEl.querySelector('.hero-typing');
    if (!typingContainer) {
        typingContainer = document.createElement('div');
        typingContainer.className = 'hero-typing';
        heroEl.appendChild(typingContainer);
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingContainer.textContent = currentPhrase.substring(0, charIndex--);
        } else {
            typingContainer.textContent = currentPhrase.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentPhrase.length + 1) {
            isPaused = true;
            setTimeout(() => {
                isDeleting = true;
                isPaused = false;
                typeEffect();
            }, 2000);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 500);
            return;
        }

        const delay = isDeleting ? 30 : 60;
        setTimeout(typeEffect, delay);
    }

    // Add cursor element
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '';
    typingContainer.appendChild(cursor);

    // Start typing effect after a brief delay
    setTimeout(typeEffect, 1000);

    // ----- Floating Shapes -----
    const shapesContainer = heroEl.querySelector('.hero-floating-shapes');
    if (!shapesContainer) return;

    const shapes = shapesContainer.querySelectorAll('.hero-shape');
    shapes.forEach((shape, i) => {
        const delay = i * 5;
        shape.style.animationDelay = `-${delay}s`;
    });
})();