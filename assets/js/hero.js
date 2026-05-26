/**
 * Hero section typing effect for the academic homepage
 */
(function () {
    'use strict';

    const typingElement = document.getElementById('hero-typing');
    if (!typingElement) return;

    const phrases = [
        'Specially Appointed Associate Researcher at IAI, HFCNS',
        'AI & Medical Image Analysis',
        'Algorithm Fairness & MEG Signal Processing',
        'Ph.D. from USTC',
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex--);
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentPhrase.length + 1) {
            setTimeout(function () {
                isDeleting = true;
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

    setTimeout(typeEffect, 1000);
})();