# Jasper A. Fernandez — Personal Portfolio

A premium, minimalist personal portfolio built with **vanilla HTML, CSS, and JavaScript**. Designed to convert visitors — freelance clients, startup founders, and business owners — into inquiries.

## ✨ Features

- **Dual Theme** — Dark & Light mode with smooth transitions and localStorage persistence
- **Glassmorphism UI** — Frosted-glass effects on cards, navigation, and modals
- **Gradient Accents** — Vibrant purple→cyan, pink→orange, and blue→violet gradients
- **Animated Hero** — Typed role effect, floating stat cards, and staggered entrance animations
- **Projects Gallery** — Filterable cards with glassmorphism hover effects and detail modals
- **Skills Section** — Animated gradient progress bars with Intersection Observer
- **Experience Timeline** — Vertical timeline with gradient line and scroll-triggered reveals
- **Contact Form** — Client-side validation with EmailJS integration
- **Fully Responsive** — Mobile-first design from 375px to 1440px+
- **Accessible** — WCAG 2.1 AA compliant, keyboard navigation, ARIA labels, reduced-motion support

## 🗂️ Project Structure

```
PORTFOLIO/
├── index.html             # Main single-page HTML
├── css/
│   ├── variables.css      # Design tokens (colors, spacing, fonts, gradients)
│   ├── base.css           # CSS reset, typography, global utilities
│   ├── animations.css     # Keyframes and scroll-reveal utility classes
│   ├── components.css     # Glass cards, buttons, modals, badges
│   └── sections.css       # Section-specific styles (nav, hero, projects, etc.)
├── js/
│   ├── main.js            # Theme toggle, nav, smooth scroll, typed effect
│   ├── animations.js      # Intersection Observer scroll reveals & skill bars
│   ├── projects.js        # Project data, card rendering, and modal system
│   └── contact.js         # Form validation and EmailJS integration
├── assets/
│   ├── images/            # Profile photo, project screenshots
│   └── icons/             # Custom SVG icons (if any)
└── conductor/             # Project planning and task tracking
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- [VS Code](https://code.visualstudio.com/) with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension (recommended)

### Running Locally

**Option 1 — VS Code Live Server (Recommended):**
1. Open the project folder in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Your browser opens automatically at `http://127.0.0.1:5500`

**Option 2 — npx serve:**
```bash
npx serve .
# Opens at http://localhost:3000
```

**Option 3 — Direct file:**
Simply open `index.html` in your browser. (Note: ES6 modules require a local server — options 1 or 2 recommended.)

## ⚙️ Configuration

### Personal Information
Update the following in `index.html`:
- Your name, title, and tagline in the hero section
- About section text and statistics
- Experience timeline entries (roles, companies, dates, descriptions)
- Contact section email and social media links

### Projects
Edit the `PROJECTS` array in `js/projects.js`:
```js
{
  id: 'proj-1',
  title: 'Your Project Name',
  description: 'Short description for the card.',
  longDescription: 'Full description for the modal.',
  emoji: '🚀',
  tags: ['React', 'Node.js'],
  liveUrl: 'https://yourproject.com',
  githubUrl: 'https://github.com/you/project',
  featured: true,
}
```

### EmailJS Integration
1. Create a free account at [EmailJS](https://emailjs.com)
2. Create a service and email template
3. In `js/contact.js`, replace the placeholder comment with:
```js
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY');
```
4. Add the EmailJS SDK to `index.html` before the main script:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>emailjs.init('YOUR_PUBLIC_KEY');</script>
```

### Adding Your Photo
Replace the initials fallback in `index.html`:
```html
<!-- Replace: -->
<div class="hero__avatar-img">
  <span>JF</span>
</div>

<!-- With: -->
<div class="hero__avatar-img">
  <img src="assets/images/profile.jpg" alt="Jasper A. Fernandez" loading="lazy" />
</div>
```

## 🎨 Customizing the Design

All design tokens are in `css/variables.css`. The most common customizations:

### Changing Colors
```css
/* In css/variables.css */
--gradient-1: linear-gradient(135deg, #your-color-1, #your-color-2);
```

### Changing Fonts
Replace the Google Fonts link in `index.html` and update:
```css
--font-heading: 'Your Heading Font', sans-serif;
--font-body: 'Your Body Font', sans-serif;
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel
```

### Netlify
1. Drag and drop the project folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo for automatic deployments

### GitHub Pages
1. Push the project to a GitHub repository
2. Go to **Settings → Pages → Source → Deploy from branch (main)**
3. Your site will be live at `https://username.github.io/repo-name`

## 📊 Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |

## 📄 License

MIT — Feel free to use this as a base for your own portfolio.

---

Built with ☕ by **Jasper A. Fernandez**
