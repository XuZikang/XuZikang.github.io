/**
 * Particle background for academic homepage
 * Sparse, subtle floating particles with theme-aware colors
 * 20 particles, slow drift, no interaction to keep it minimal
 */
(function(){
    'use strict';

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const body = document.body;

    canvas.id = 'bg-particles';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.6';

    body.prepend(canvas);

    let particles = [];
    const PARTICLE_COUNT = 20;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function getTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }

    function getParticleColor(alpha) {
        const theme = getTheme();
        if (theme === 'dark') {
            return `rgba(180, 200, 255, ${alpha})`;  // subtle blue-white in dark mode
        }
        return `rgba(80, 120, 200, ${alpha})`;  // deeper blue in light mode
    }

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.life = Math.random() * 200 + 100;
            this.maxLife = this.life;
            this.pulse = Math.random() * Math.PI * 2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.pulse += 0.02;

            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;

            // Fade in/out
            if (this.life < 30) {
                this.opacity *= 0.98;
            }
            this.life--;
            if (this.life <= 0) {
                this.reset();
                this.life = this.maxLife;
            }
        }
        draw() {
            const pulseOpacity = this.opacity * (0.85 + 0.15 * Math.sin(this.pulse));
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = getParticleColor(pulseOpacity);
            ctx.fill();
        }
    }

    // Initialize
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();

    // Adjust opacity on theme change
    const observer = new MutationObserver(() => {
        // Re-draw color changes opacity slightly
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

})();