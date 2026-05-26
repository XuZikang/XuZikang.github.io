/**
 * Animate timeline items on scroll with staggered reveal
 */
(function () {
    'use strict';

    function initTimeline() {
        const items = document.querySelectorAll('.timeline-section li');
        if (!items.length) return;

        // Add animate-in class to all items so they start hidden
        items.forEach(function (item) {
            item.classList.add('animate-in');
        });

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        items.forEach(function (item) {
            observer.observe(item);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTimeline);
    } else {
        initTimeline();
    }
})();