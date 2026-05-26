/**
 * Reading progress bar at the top of the page
 * Shows how far the user has scrolled through the content
 * Also shrinks the navigation bar on scroll
 */
(function () {
    'use strict';

    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    document.body.prepend(progressBar);

    const masthead = document.querySelector('.masthead');
    let ticking = false;

    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        progressBar.style.width = scrollPercent + '%';

        // Nav shrink effect
        if (masthead) {
            if (scrollTop > 60) {
                masthead.classList.add('nav-shrink');
            } else {
                masthead.classList.remove('nav-shrink');
            }
        }

        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(updateProgress);
            ticking = true;
        }
    });

    // Initial update
    updateProgress();
})();