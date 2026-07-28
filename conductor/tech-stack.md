# Technology Stack

## Core

- **HTML5** — Semantic markup for structure and SEO. No templating engine or preprocessor.
- **CSS3** — Vanilla CSS with CSS Custom Properties (variables) for theming, glassmorphism, and gradient effects. No preprocessors (Sass/Less) or utility frameworks.
- **JavaScript (ES6+)** — Vanilla JS with modern syntax (modules, async/await, template literals). No frameworks or transpilers.

## Styling Approach

- **CSS Custom Properties** — Theme variables for dual-mode (dark/light) support with seamless toggling.
- **CSS Animations & Transitions** — Native CSS for hover effects, gradient shifts, and micro-interactions.
- **Intersection Observer API** — Vanilla JS for scroll-triggered reveal animations (no library needed).
- **CSS `backdrop-filter`** — Native support for glassmorphism effects.

## Fonts

- **Google Fonts** — Space Grotesk (headings), Inter (body), JetBrains Mono (code/tech tags). Loaded via `<link>` tags.

## Icons

- **Lucide Icons (CDN)** — Clean, lightweight SVG icons loaded via CDN or inline SVG.

## Contact Form

- **EmailJS** — Send emails directly from the client via their JavaScript SDK (loaded via CDN). No backend required.

## Deployment

- **Vercel / Netlify / GitHub Pages** — Static site hosting with zero build step. Drag-and-drop or Git-based deployment.

## Development Tools

- **Git** — Version control (already initialized).
- **Live Server** — VS Code extension or `npx serve` for local development with hot reload.

---

## Architecture Overview

```
PORTFOLIO/
├── index.html           # Main HTML file (single-page structure)
├── css/
│   ├── variables.css    # CSS custom properties (theme colors, spacing, fonts)
│   ├── base.css         # Reset, typography, global styles
│   ├── components.css   # Reusable components (glass cards, buttons, nav)
│   ├── sections.css     # Section-specific styles (hero, projects, skills, etc.)
│   └── animations.css   # Keyframes and animation utilities
├── js/
│   ├── main.js          # App initialization, theme toggle, navigation
│   ├── animations.js    # Intersection Observer scroll reveals
│   ├── projects.js      # Project data and modal rendering
│   └── contact.js       # EmailJS form handling
├── assets/
│   ├── images/          # Project screenshots, profile photo
│   └── icons/           # Custom SVG icons (if any)
├── conductor/           # Conductor project management
└── README.md            # Project documentation
```

## Key Technical Notes

- **No build step required** — All files are served directly. Open `index.html` in a browser to run.
- **Module-based JS** — Use `<script type="module">` for clean ES6 imports between JS files.
- **CSS file organization** — Separate concerns into multiple CSS files, loaded in sequence via `<link>` tags for maintainability.
- **Progressive enhancement** — Core content is accessible without JavaScript; animations and interactivity enhance the experience.
