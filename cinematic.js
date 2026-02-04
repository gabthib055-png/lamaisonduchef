(() => {
  const init = () => {
    const items = Array.from(document.querySelectorAll("[data-cine]"));
    if (!items.length) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const getNumber = (value, fallback) => {
      const parsed = parseFloat(value);
      return Number.isFinite(parsed) ? parsed : fallback;
    };

    const defaults = {
      distance: 56,
      scale: 0.98,
      opacity: 0,
      start: 0.9,
      end: 0.2,
      delay: 0,
    };

    const configs = new Map();
    items.forEach((el) => {
      const start = getNumber(el.dataset.cineStart, defaults.start);
      const end = getNumber(el.dataset.cineEnd, defaults.end);
      configs.set(el, {
        distance: getNumber(el.dataset.cineDistance, defaults.distance),
        scale: getNumber(el.dataset.cineScale, defaults.scale),
        opacity: getNumber(el.dataset.cineOpacity, defaults.opacity),
        start: Math.min(Math.max(start, 0), 1),
        end: Math.min(Math.max(end, 0), 1),
        delay: Math.min(Math.max(getNumber(el.dataset.cineDelay, defaults.delay), 0), 0.8),
      });
    });

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const lerp = (from, to, t) => from + (to - from) * t;
    const ease = (t) => t * t * (3 - 2 * t);

    const applyFinalState = () => {
      items.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translate3d(0, 0, 0) scale(1)";
      });
    };

    let ticking = false;

    const update = () => {
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      items.forEach((el) => {
        const config = configs.get(el);
        if (!config) {
          return;
        }

        const rect = el.getBoundingClientRect();
        const startPx = viewport * config.start;
        const endPx = viewport * config.end;
        const range = startPx - endPx || 1;
        let progress = (startPx - rect.top) / range;
        progress = clamp(progress, 0, 1);
        if (config.delay > 0) {
          progress = clamp((progress - config.delay) / (1 - config.delay), 0, 1);
        }

        const eased = ease(progress);
        const translateY = lerp(config.distance, 0, eased);
        const scale = lerp(config.scale, 1, eased);
        const opacity = lerp(config.opacity, 1, eased);

        el.style.opacity = opacity.toFixed(3);
        el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
      });
    };

    const requestUpdate = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(() => {
        if (mediaQuery.matches) {
          applyFinalState();
        } else {
          update();
        }
        ticking = false;
      });
    };

    if (mediaQuery.matches) {
      applyFinalState();
      return;
    }

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("orientationchange", requestUpdate);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", requestUpdate);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(requestUpdate);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
