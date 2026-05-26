/**
 * 3D tilt effect on paper cards based on mouse position
 */
(function () {
    'use strict';

    function initTilt() {
        const cards = document.querySelectorAll('.paper-box');
        if (!cards.length || window.innerWidth < 768) return;

        cards.forEach(function (card) {
            card.setAttribute('data-tilt', '');

            card.addEventListener('mouseenter', function () {
                // Will be updated on mousemove
            });

            card.addEventListener('mousemove', function (e) {
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;

                // Max rotation: 5 degrees
                const rotateY = (mouseX / (rect.width / 2)) * 5;
                const rotateX = -(mouseY / (rect.height / 2)) * 5;

                card.style.transform =
                    'perspective(1000px) translateY(-4px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale(1.01)';
            });

            card.addEventListener('mouseleave', function () {
                card.style.transform = '';
            });
        });
    }

    // Reduce motion check
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!motionQuery.matches) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initTilt);
        } else {
            initTilt();
        }
    }
})();