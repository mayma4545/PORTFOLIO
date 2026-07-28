/**
 * main.js
 * App entry point — Theme toggle, navigation, smooth scroll
 * Jasper A. Fernandez Portfolio
 */

import { initScrollReveal, initSkillBars, initTimelineReveal, initNumberCounters } from './animations.js';
import { renderProjects, renderFilterButtons } from './projects.js';
import { initContactForm } from './contact.js';

/* ──────────────────────────────────────────────────────────
   THEME MANAGEMENT
   ────────────────────────────────────────────────────────── */

const THEME_KEY = 'jaf-portfolio-theme';

/**
 * Apply a theme to the document root.
 * @param {'dark'|'light'} theme
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);

  // Update toggle icon
  const knob = document.querySelector('.theme-knob');
  if (knob) {
    knob.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
}

/**
 * Get the user's preferred theme from localStorage or system preference.
 * @returns {'dark'|'light'}
 */
function getInitialTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

/**
 * Initialize theme toggle button.
 */
function initTheme() {
  const theme = getInitialTheme();
  applyTheme(theme);

  const toggleBtn = document.getElementById('theme-btn');
  toggleBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

/* ──────────────────────────────────────────────────────────
   NAVIGATION
   ────────────────────────────────────────────────────────── */

/**
 * Add glass background to nav when user scrolls past threshold.
 */
function initNavScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const SCROLL_THRESHOLD = 60;

  const handleScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run on init
}

/**
 * Highlight active nav link based on current scroll position.
 */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    {
      rootMargin: '-30% 0px -60% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * Initialize mobile hamburger menu.
 */
function initMobileMenu() {
  const hamburger = document.getElementById('ham-btn');
  const mobileMenu = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!hamburger || !mobileMenu) return;

  const toggleMenu = () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', toggleMenu);

  // Close on link click
  mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* ──────────────────────────────────────────────────────────
   SMOOTH SCROLL (for anchor links)
   ────────────────────────────────────────────────────────── */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ──────────────────────────────────────────────────────────
   TYPED EFFECT (Hero subtitle cycling)
   ────────────────────────────────────────────────────────── */

/**
 * Simple text cycling effect for the hero subtitle tag.
 */
function initTypedEffect() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const roles = [
    'Fullstack Developer',
    'UI/UX Enthusiast',
    'API Architect',
    'Performance Optimizer',
    'Problem Solver',
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function type() {
    const currentRole = roles[roleIndex];

    if (isPaused) {
      isPaused = false;
      setTimeout(type, 1200);
      return;
    }

    if (isDeleting) {
      el.textContent = currentRole.slice(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 40);
    } else {
      el.textContent = currentRole.slice(0, ++charIndex);
      if (charIndex === currentRole.length) {
        isDeleting = true;
        isPaused = true;
        setTimeout(type, 100);
        return;
      }
      setTimeout(type, 80);
    }
  }

  // Start after hero entrance animation
  setTimeout(type, 1000);
}

/* ──────────────────────────────────────────────────────────
   INITIALIZE
   ────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // Core
  initTheme();
  initNavScroll();
  initActiveNavLinks();
  initMobileMenu();
  initSmoothScroll();

  // Hero
  initTypedEffect();

  // Projects
  renderFilterButtons();
  renderProjects('all');

  // Animations
  initScrollReveal();
  initSkillBars();
  initTimelineReveal();
  initNumberCounters();

  // Contact
  initContactForm();

  // Expose for re-init after dynamic renders
  window.initScrollReveal = initScrollReveal;
});
