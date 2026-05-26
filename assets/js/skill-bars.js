/**
 * Animated skill bars that fill when scrolled into view
 */
(function () {
    'use strict';

    function initSkillBars() {
        const bars = document.querySelectorAll('.skill-bar-fill');
        if (!bars.length) return;

        let animated = false;

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    bars.forEach(function (bar) {
                        const width = bar.getAttribute('data-width');
                        if (width) {
                            bar.style.width = width + '%';
                        }
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(bars[0].closest('.skills-container') || bars[0].parentElement);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSkillBars);
    } else {
        initSkillBars();
    }
})();