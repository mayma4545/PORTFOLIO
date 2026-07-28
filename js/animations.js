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
 * Reads a data-width attribute from the fill element.
 */
export function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');

  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const width = target.dataset.width || '80%';
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
  const items = document.querySelectorAll('.timeline__item');

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
