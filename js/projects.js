/**
 * projects.js
 * Project data and card/modal rendering
 * Jasper A. Fernandez Portfolio
 */

/** @type {Array<{id: string, title: string, description: string, longDescription: string, emoji: string, tags: string[], liveUrl: string, githubUrl: string, featured: boolean}>} */
export const PROJECTS = [
  {
    id: 'proj-1',
    title: 'NovaPay Dashboard',
    description: 'A real-time financial analytics dashboard for SMEs — tracking revenue, expenses, and cash flow with beautiful visualisations.',
    longDescription: 'NovaPay is a full-stack financial management platform built for small-to-medium enterprises. It features real-time data streaming, customisable reporting modules, role-based access control, and automated invoice generation. The frontend was built with a focus on clarity and speed, rendering complex datasets in under 200ms.',
    emoji: '💳',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'D3.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Luminary UI Kit',
    description: 'An open-source component library with 80+ accessible, glassmorphism-styled components for modern web applications.',
    longDescription: 'Luminary is a production-ready UI component library built with TypeScript and CSS Custom Properties. It ships with 80+ components, a built-in theming engine supporting dark and light modes, full WCAG 2.1 AA accessibility compliance, and zero runtime dependencies. Used by over 1,200 developers on GitHub.',
    emoji: '✨',
    tags: ['TypeScript', 'CSS', 'Storybook', 'Rollup', 'Jest'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Terroir',
    description: 'A wine discovery platform that uses machine learning to match users with wines based on their taste profile and budget.',
    longDescription: 'Terroir combines a recommendation engine trained on 50,000+ wine reviews with a clean, approachable UI that makes wine discovery fun. Features include personalised tasting notes, cellar management, and social pairing suggestions. The ML model achieves an 87% preference-match accuracy score.',
    emoji: '🍷',
    tags: ['Next.js', 'Python', 'FastAPI', 'Redis', 'TailwindCSS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 'proj-4',
    title: 'DevLink',
    description: 'A developer-first link-in-bio tool with custom domains, analytics, and code snippet showcases.',
    longDescription: 'DevLink was built as an alternative to generic link-in-bio tools, designed specifically for developers. It supports syntax-highlighted code embeds, GitHub activity graphs, tech stack showcases, and real-time visitor analytics. Deployed on Cloudflare Workers for sub-50ms response times globally.',
    emoji: '🔗',
    tags: ['SvelteKit', 'Cloudflare Workers', 'Turso', 'Drizzle ORM'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 'proj-5',
    title: 'Orbital CMS',
    description: 'A headless CMS built for speed — delivering content via a GraphQL API with sub-10ms query times at scale.',
    longDescription: 'Orbital is a developer-centric headless CMS that prioritises query performance above all else. It uses a hybrid storage model (PostgreSQL for relations + Redis for caching) to achieve consistent sub-10ms API response times under load. Includes a visual content modelling interface, webhooks, and a pluggable field type system.',
    emoji: '🛰️',
    tags: ['Go', 'GraphQL', 'Redis', 'PostgreSQL', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'proj-6',
    title: 'Focusly',
    description: 'A minimalist productivity app with Pomodoro timer, distraction blocking, and focus analytics.',
    longDescription: 'Focusly is a cross-platform productivity app focused on deep work. The distraction blocker integrates with system DNS settings, the Pomodoro engine supports custom session structures, and focus analytics surface patterns in your most productive hours. Rebuilt the entire app as a PWA with offline support.',
    emoji: '🎯',
    tags: ['Vue 3', 'Electron', 'PWA', 'IndexedDB', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

/**
 * Render project cards into the grid container.
 * @param {string} filter - Tag to filter by, or 'all'
 */
export function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.some((t) => t.toLowerCase() === filter.toLowerCase()));

  grid.innerHTML = filtered.map((project) => createProjectCardHTML(project)).join('');

  // Attach click handlers for modals
  grid.querySelectorAll('.proj-card').forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.dataset.projectId;
      const project = PROJECTS.find((p) => p.id === id);
      if (project) openProjectModal(project);
    });
    // Keyboard accessibility
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Re-run scroll reveal on new cards
  if (window.initScrollReveal) window.initScrollReveal();
}

/**
 * Create HTML string for a project card.
 * @param {object} project
 * @returns {string}
 */
function createProjectCardHTML(project) {
  const tagsHTML = project.tags
    .slice(0, 4)
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join('');

  return `
    <article
      class="proj-card reveal"
      data-project-id="${project.id}"
      tabindex="0"
      role="button"
      aria-label="View ${project.title} project details"
    >
      <div class="proj-thumb">
        <div style="font-size: 4rem;" aria-hidden="true">${project.emoji}</div>
        <div class="proj-overlay" aria-hidden="true">
          <span class="btn btn-sm btn-primary">View Details</span>
        </div>
      </div>
      <div class="proj-body">
        <h3 class="proj-title">${project.title}</h3>
        <p class="proj-desc">${project.description}</p>
        <div class="proj-tags">
          ${tagsHTML}
        </div>
      </div>
    </article>
  `;
}

/**
 * Extract unique tags from all projects for filter buttons.
 * @returns {string[]}
 */
export function getUniqueTags() {
  const tags = new Set();
  PROJECTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return ['All', ...Array.from(tags)];
}

/**
 * Render filter buttons.
 */
export function renderFilterButtons() {
  const container = document.getElementById('filter-bar');
  if (!container) return;

  // Curated filter list
  const filters = ['All', 'React', 'Node.js', 'TypeScript', 'Next.js', 'Go'];

  container.innerHTML = filters
    .map(
      (f) => `
      <button
        class="filter-btn ${f === 'All' ? 'active' : ''}"
        data-filter="${f === 'All' ? 'all' : f}"
        aria-pressed="${f === 'All'}"
      >
        ${f}
      </button>
    `
    )
    .join('');

  container.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.filter-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      renderProjects(btn.dataset.filter);
    });
  });
}

/**
 * Open project detail modal.
 * @param {object} project
 */
export function openProjectModal(project) {
  const overlay = document.getElementById('modal-backdrop');
  const modal = document.getElementById('modal-box');
  if (!overlay || !modal) return;

  const tagsHTML = project.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join('');

  modal.querySelector('.modal-head').innerHTML = `
    <div>
      <h2 style="font-size: var(--text-2xl); margin-bottom: var(--space-2);">
        ${project.title}
      </h2>
      <p style="color: var(--text-secondary); font-size: var(--text-sm);">
        ${project.description}
      </p>
    </div>
    <button class="modal-close" id="modal-close-btn" aria-label="Close modal">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;

  modal.querySelector('.modal-body').innerHTML = `
    <div class="modal-thumb">
      <div style="height: 100%; display: flex; align-items: center; justify-content: center;" aria-hidden="true">
        ${project.emoji}
      </div>
    </div>
    <p style="font-size: var(--text-base); color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-4);">${project.longDescription}</p>
    <div style="display: flex; flex-wrap: wrap; gap: var(--space-2); margin-top: var(--space-6);">
      ${tagsHTML}
    </div>
    <div style="display: flex; gap: var(--space-3); flex-wrap: wrap; margin-top: var(--space-6);">
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        Live Demo
      </a>
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        GitHub
      </a>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Close handlers
  const closeModal = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Close on Escape
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}
