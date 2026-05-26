/**
 * Enhanced particle background for academic homepage
 * Animated gradient mesh with mouse interaction and connection lines
 * Theme-aware colors with warm-purple (light) and cool-cyan (dark) palettes
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
    canvas.style.opacity = '0.5';

    body.prepend(canvas);

    let particles = [];
    const PARTICLE_COUNT = 60;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let mouseActive = false;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function getTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }

    function getColor(alpha) {
        const theme = getTheme();
        if (theme === 'dark') {
            return {
                primary: `rgba(88, 166, 255, ${alpha})`,
                secondary: `rgba(139, 92, 246, ${alpha})`,
                accent: `rgba(56, 189, 248, ${alpha})`,
                connection: `rgba(88, 166, 255, ${alpha * 0.3})`,
                bg: 'rgba(13, 17, 23, 0.5)'
            };
        }
        return {
            primary: `rgba(102, 126, 234, ${alpha})`,
            secondary: `rgba(118, 75, 162, ${alpha})`,
            accent: `rgba(45, 123, 217, ${alpha})`,
            connection: `rgba(102, 126, 234, ${alpha * 0.2})`,
            bg: 'rgba(255, 255, 255, 0.3)'
        };
    }

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.4 + 0.2;
            this.life = Math.random() * 200 + 100;
            this.maxLife = this.life;
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = 0.02 + Math.random() * 0.02;
            this.colorVariant = Math.random();
        }
        update() {
            // Mouse interaction - particles subtly attracted to cursor
            if (mouseActive) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) {
                    const force = (200 - dist) / 200;
                    this.speedX += dx * force * 0.001;
                    this.speedY += dy * force * 0.001;
                }
            }

            this.x += this.speedX;
            this.y += this.speedY;
            this.pulse += this.pulseSpeed;

            // Damping
            this.speedX *= 0.99;
            this.speedY *= 0.99;

            // Wrap around edges with margin
            if (this.x < -50) this.x = canvas.width + 50;
            if (this.x > canvas.width + 50) this.x = -50;
            if (this.y < -50) this.y = canvas.height + 50;
            if (this.y > canvas.height + 50) this.y = -50;

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
            const pulseOpacity = this.opacity * (0.75 + 0.25 * Math.sin(this.pulse));
            const colors = getColor(pulseOpacity);
            const color = this.colorVariant < 0.33 ? colors.primary :
                         this.colorVariant < 0.66 ? colors.secondary :
                         colors.accent;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();

            // Subtle glow
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = color.replace('1)', '0.1)');
            ctx.fill();
        }
    }

    // Initialize
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function drawConnections() {
        const maxDist = 120;
        const colors = getColor(1);
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = colors.connection.replace('1)', alpha + ')');
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Background gradient overlay
        const colors = getColor(0.03);
        ctx.fillStyle = colors.bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        drawConnections();
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseActive = true;
    });

    document.addEventListener('mouseleave', () => {
        mouseActive = false;
    });

    // Adjust on theme change
    const observer = new MutationObserver(() => {
        // Trigger re-color on theme change
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

})();