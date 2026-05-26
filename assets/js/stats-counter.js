/**
 * Animated stat counters that count up when scrolled into view
 */
(function () {
    'use strict';

    function animateCounter(el, target) {
        const duration = 1500;
        const startTime = performance.now();
        const startVal = 0;

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startVal + (target - startVal) * eased);
            el.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(update);
    }

    function initStats() {
        const stats = document.querySelectorAll('.stat-number');
        if (!stats.length) return;

        let animated = false;

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    stats.forEach(function (stat) {
                        const target = parseInt(stat.getAttribute('data-target'), 10);
                        if (!isNaN(target)) {
                            animateCounter(stat, target);
                        }
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(stats[0].closest('.stats-row') || stats[0].parentElement);
    }

    // Wait for page load to ensure stats are rendered
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initStats);
    } else {
        initStats();
    }
})();