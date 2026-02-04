const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

class FlambeEffect {
  constructor(card) {
    this.card = card;
    this.media = card.querySelector(".dish__media");
    this.canvas = document.createElement("canvas");
    this.canvas.className = "flambe-canvas";
    this.media.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.running = false;
    this.raf = null;
    this.lastTime = 0;
    this.phase = Math.random() * Math.PI * 2;
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.media);
    this.resize();
    this.seedParticles();
  }

  resize() {
    const rect = this.media.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.width = rect.width;
    this.height = rect.height;
    this.dpr = dpr;
  }

  seedParticles() {
    this.particles = Array.from({ length: 12 }, () => this.spawnParticle());
  }

  spawnParticle() {
    const radius = 1 + Math.random() * 2.6;
    return {
      x: this.width * (0.35 + Math.random() * 0.3),
      y: this.height * (0.65 + Math.random() * 0.3),
      radius,
      alpha: 0.25 + Math.random() * 0.35,
      speed: 0.08 + Math.random() * 0.12,
      drift: (Math.random() - 0.5) * 0.12,
      wobble: 1 + Math.random() * 2,
      offset: Math.random() * Math.PI * 2,
    };
  }

  setActive(active) {
    if (active && !this.running) {
      this.start();
    } else if (!active && this.running) {
      this.stop();
    }
  }

  start() {
    this.running = true;
    this.lastTime = performance.now();
    this.loop(this.lastTime);
  }

  stop() {
    this.running = false;
    if (this.raf) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
    }
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  loop(timestamp) {
    if (!this.running) {
      return;
    }
    const delta = Math.min((timestamp - this.lastTime) / 1000, 0.05);
    this.lastTime = timestamp;
    this.draw(timestamp, delta);
    this.raf = requestAnimationFrame((time) => this.loop(time));
  }

  draw(timestamp, delta) {
    const ctx = this.ctx;
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, this.width, this.height);

    const t = timestamp * 0.001;
    const flicker =
      0.7 +
      Math.sin(t * 3.4 + this.phase) * 0.12 +
      Math.sin(t * 8.1) * 0.05;
    const cx = this.width * (0.6 + Math.sin(t * 1.4 + this.phase) * 0.04);
    const cy = this.height * (0.74 + Math.sin(t * 1.2 + this.phase) * 0.03);
    const radius = Math.max(this.width, this.height) * 0.6;

    const glow = ctx.createRadialGradient(
      cx,
      cy,
      radius * 0.05,
      cx,
      cy,
      radius
    );
    glow.addColorStop(0, `rgba(255, 212, 154, ${0.35 * flicker})`);
    glow.addColorStop(0.4, `rgba(255, 170, 98, ${0.18 * flicker})`);
    glow.addColorStop(1, "rgba(36, 16, 10, 0)");

    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.globalCompositeOperation = "source-over";

    this.particles.forEach((particle) => {
      particle.y -= particle.speed * delta * this.height;
      particle.x +=
        Math.sin(t * particle.wobble + particle.offset) *
        particle.drift *
        delta *
        this.width;
      particle.alpha -= delta * 0.1;

      if (particle.y < -particle.radius || particle.alpha <= 0) {
        Object.assign(particle, this.spawnParticle());
        particle.y = this.height * (0.6 + Math.random() * 0.3);
        return;
      }

      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 190, 122, ${particle.alpha})`;
      ctx.shadowBlur = 12;
      ctx.shadowColor = "rgba(255, 155, 88, 0.6)";
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.shadowBlur = 0;
  }
}

const specialCards = Array.from(document.querySelectorAll(".dish--special"));
const effects = new Map();

specialCards.forEach((card) => {
  const effect = new FlambeEffect(card);
  effects.set(card, effect);

  const setHover = (isHovered) => {
    card.classList.toggle("is-hovered", isHovered);
    updateActive(card);
  };

  card.addEventListener("mouseenter", () => setHover(true));
  card.addEventListener("mouseleave", () => setHover(false));
  card.addEventListener("focusin", () => setHover(true));
  card.addEventListener("focusout", () => setHover(false));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-in-view", entry.isIntersecting);
      updateActive(entry.target);
    });
  },
  {
    threshold: 0.35,
  }
);

specialCards.forEach((card) => observer.observe(card));

function updateActive(card) {
  const isActive =
    card.classList.contains("is-in-view") ||
    card.classList.contains("is-hovered");
  card.classList.toggle("is-flambe-on", isActive);
  const effect = effects.get(card);
  if (effect) {
    effect.setActive(isActive && !prefersReducedMotion);
  }
}
