/**
 * animations.js
 * Intersection Observer — Scroll-triggered reveal animations
 * Jasper A. Fernandez Portfolio
 */

/**
 * Initialize scroll reveal animations using IntersectionObserver.
 * Watches elements with the .reveal class and adds .is-visible when they enter the viewport.
 */
export function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Unobserve after reveal — only animate once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/**
 * Animate skill bar fills when they enter the viewport.
 * Reads a data-w attribute from the fill element.
 */
export function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');

  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const width = target.dataset.w || '80%';
          // Delay slightly for visual effect
          setTimeout(() => {
            target.style.width = width;
          }, 150);
          observer.unobserve(target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  bars.forEach((bar) => observer.observe(bar));
}

/**
 * Animate the timeline items with staggered entrance.
 */
export function initTimelineReveal() {
  const items = document.querySelectorAll('.timeline-item');

  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  items.forEach((item) => {
    item.classList.add('reveal');
    observer.observe(item);
  });
}

/**
 * Animate number counters in the About section.
 */
export function initNumberCounters() {
  const counters = document.querySelectorAll('.stat-number');

  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const update = () => {
      current += step;
      if (current < target) {
        el.innerText = Math.ceil(current) + (el.innerText.includes('+') ? '+' : (el.innerText.includes('%') ? '%' : ''));
        requestAnimationFrame(update);
      } else {
        el.innerText = target + (el.getAttribute('data-count') === '99' ? '%' : '+'); // Keep suffix logic simple for this specific portfolio
      }
    };
    
    update();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
}
