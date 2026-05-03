// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
    // =========================
    // Industries mobile toggle
    // =========================
    const toggle = document.getElementById("industriesToggle");
    const submenu = document.getElementById("industriesSubmenu");
    const icon = document.getElementById("industriesIcon");

    if (toggle && submenu && icon) {
        toggle.addEventListener("click", function () {
            submenu.classList.toggle("open");
            icon.classList.toggle("open");

            const isOpen = submenu.classList.contains("open");
            toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
    }

    // =========================
    // Tech background canvas
    // =========================
    const techCanvas = document.getElementById("tech-bg");
    const techCtx = techCanvas ? techCanvas.getContext("2d") : null;

    if (techCanvas && techCtx) {
        techCanvas.style.pointerEvents = "none";

        let techParticles = [];

        function resizeTechCanvas() {
            techCanvas.width = window.innerWidth;
            techCanvas.height = window.innerHeight;
        }

        function initTechParticles() {
            techParticles = [];
            for (let i = 0; i < 75; i++) {
                techParticles.push({
                    x: Math.random() * techCanvas.width,
                    y: Math.random() * techCanvas.height,
                    vx: (Math.random() - 0.5) * 0.25,
                    vy: (Math.random() - 0.5) * 0.25
                });
            }
        }

        function drawTechBackground() {
            techCtx.clearRect(0, 0, techCanvas.width, techCanvas.height);

            techParticles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > techCanvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > techCanvas.height) p.vy *= -1;

                techCtx.beginPath();
                techCtx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
                techCtx.fillStyle = "rgba(37, 99, 235, 0.38)";
                techCtx.fill();
            });

            for (let i = 0; i < techParticles.length; i++) {
                for (let j = i + 1; j < techParticles.length; j++) {
                    const dx = techParticles[i].x - techParticles[j].x;
                    const dy = techParticles[i].y - techParticles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 130) {
                        techCtx.beginPath();
                        techCtx.moveTo(techParticles[i].x, techParticles[i].y);
                        techCtx.lineTo(techParticles[j].x, techParticles[j].y);
                        techCtx.strokeStyle = "rgba(37, 99, 235, 0.08)";
                        techCtx.lineWidth = 1;
                        techCtx.stroke();
                    }
                }
            }

            requestAnimationFrame(drawTechBackground);
        }

        resizeTechCanvas();
        initTechParticles();
        drawTechBackground();

        window.addEventListener("resize", function () {
            resizeTechCanvas();
            initTechParticles();
        });
    }

    // =========================
    // Blob canvas
    // =========================
    const blobCanvas = document.getElementById("blob-canvas");
    const blobCtx = blobCanvas ? blobCanvas.getContext("2d") : null;

    if (blobCanvas && blobCtx) {
        blobCanvas.style.pointerEvents = "none";

        const blobs = [
            {
                x: 140,
                y: 150,
                r: 130,
                dx: 0.18,
                dy: 0.12,
                color1: "rgba(126, 98, 255, 0.16)",
                color2: "rgba(126, 98, 255, 0.02)"
            },
            {
                x: window.innerWidth - 180,
                y: 170,
                r: 150,
                dx: -0.16,
                dy: 0.10,
                color1: "rgba(110, 210, 255, 0.15)",
                color2: "rgba(110, 210, 255, 0.02)"
            },
            {
                x: 120,
                y: window.innerHeight - 180,
                r: 140,
                dx: 0.12,
                dy: -0.14,
                color1: "rgba(110, 226, 217, 0.15)",
                color2: "rgba(110, 226, 217, 0.02)"
            },
            {
                x: window.innerWidth - 200,
                y: window.innerHeight - 160,
                r: 170,
                dx: -0.13,
                dy: -0.11,
                color1: "rgba(100, 120, 255, 0.18)",
                color2: "rgba(100, 120, 255, 0.02)"
            },
            {
                x: window.innerWidth * 0.5,
                y: window.innerHeight - 80,
                r: 145,
                dx: 0.10,
                dy: -0.08,
                color1: "rgba(135, 225, 230, 0.14)",
                color2: "rgba(135, 225, 230, 0.02)"
            }
        ];

        function resizeBlobCanvas() {
            blobCanvas.width = window.innerWidth;
            blobCanvas.height = window.innerHeight;
        }

        function drawBlob(blob) {
            const gradient = blobCtx.createRadialGradient(
                blob.x, blob.y, blob.r * 0.25,
                blob.x, blob.y, blob.r
            );

            gradient.addColorStop(0, blob.color1);
            gradient.addColorStop(1, blob.color2);

            blobCtx.beginPath();
            blobCtx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
            blobCtx.fillStyle = gradient;
            blobCtx.fill();
        }

        function updateBlob(blob) {
            blob.x += blob.dx;
            blob.y += blob.dy;

            if (blob.x - blob.r < -80 || blob.x + blob.r > blobCanvas.width + 80) {
                blob.dx *= -1;
            }

            if (blob.y - blob.r < -80 || blob.y + blob.r > blobCanvas.height + 80) {
                blob.dy *= -1;
            }
        }

        function animateBlobs() {
            blobCtx.clearRect(0, 0, blobCanvas.width, blobCanvas.height);
            blobCtx.filter = "blur(26px)";

            for (const blob of blobs) {
                updateBlob(blob);
                drawBlob(blob);
            }

            blobCtx.filter = "none";
            requestAnimationFrame(animateBlobs);
        }

        resizeBlobCanvas();
        animateBlobs();

        window.addEventListener("resize", function () {
            resizeBlobCanvas();
        });
    }
});