# Track: Complete Portfolio Build

**Goal:** Build a premium, minimalist personal portfolio with all 5 core sections, dual theme support, glassmorphism UI, gradient accents, and smooth animations.

---

## Phase 1: Foundation & Design System
*Set up the HTML skeleton, CSS design system, and core infrastructure.*

- [ ] **1.1** Create `index.html` with semantic HTML5 structure, meta tags, SEO essentials, and Google Fonts links
- [ ] **1.2** Create `css/variables.css` with complete CSS custom properties (color tokens for dark/light modes, spacing scale, typography scale, gradient definitions, glass properties)
- [ ] **1.3** Create `css/base.css` with CSS reset, global typography, body styling, and smooth scroll behavior
- [ ] **1.4** Create `css/animations.css` with keyframe definitions (fade-in, slide-up, scale-in, gradient-shift) and utility classes for scroll-reveal
- [ ] **1.5** Create `css/components.css` with reusable component styles (glass cards, gradient buttons, gradient borders, section containers)
- [ ] **1.6** Create `js/main.js` with theme toggle functionality (dark/light mode with localStorage persistence) and smooth scroll navigation

## Phase 2: Navigation & Hero Section
*Build the sticky glass navigation bar and the impactful hero section.*

- [ ] **2.1** Build sticky navigation bar with glassmorphism effect, section anchor links, and theme toggle button
- [ ] **2.2** Create hero section HTML with name, professional title, tagline, and CTA buttons
- [ ] **2.3** Style hero section with gradient text, staggered entrance animations, and responsive layout
- [ ] **2.4** Create `js/animations.js` with Intersection Observer for scroll-triggered reveal animations
- [ ] **2.5** Add mobile hamburger menu with animated open/close and glass overlay

## Phase 3: Projects Gallery
*Build the project showcase with cards and detail modals.*

- [ ] **3.1** Create `js/projects.js` with project data structure (title, description, image, tech tags, live demo URL, GitHub URL)
- [ ] **3.2** Build project cards with glassmorphism styling, gradient border hover effects, and tech tag badges
- [ ] **3.3** Implement project detail modal with glass overlay, project screenshots, full description, and external links
- [ ] **3.4** Add project filtering by technology tag (optional enhancement)
- [ ] **3.5** Ensure responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)

## Phase 4: Skills & Tech Stack Section
*Visual representation of technical proficiencies.*

- [ ] **4.1** Build skills section HTML with categorized skill groups (Frontend, Backend, Tools)
- [ ] **4.2** Create gradient progress bars or radial indicators for proficiency levels
- [ ] **4.3** Add skill icons using Lucide Icons (CDN) with hover animations
- [ ] **4.4** Implement scroll-triggered animation for skill bars (animate from 0 to target width on reveal)

## Phase 5: Work Experience Timeline
*Professional history with scroll-animated timeline.*

- [ ] **5.1** Build vertical timeline HTML structure with alternating left/right entries
- [ ] **5.2** Style timeline with gradient line, glass cards for each entry, and connecting dots
- [ ] **5.3** Add scroll-triggered staggered reveal animations for timeline entries
- [ ] **5.4** Ensure responsive layout (single column on mobile, alternating on desktop)

## Phase 6: Contact Section & Footer
*Contact form with EmailJS integration and social links.*

- [ ] **6.1** Build contact form HTML (name, email, subject, message fields) with glass card styling
- [ ] **6.2** Create `js/contact.js` with form validation (client-side) and EmailJS integration
- [ ] **6.3** Add social media links section with icon hover effects and gradient accents
- [ ] **6.4** Build footer with copyright, quick links, and subtle gradient divider
- [ ] **6.5** Add form submission success/error states with animated feedback

## Phase 7: Polish & Optimization
*Final refinements, performance, and deployment readiness.*

- [ ] **7.1** Cross-browser testing and fixes (Chrome, Firefox, Safari, Edge)
- [ ] **7.2** Performance optimization (image compression, font loading strategy, CSS/JS minification approach)
- [ ] **7.3** Accessibility audit (keyboard navigation, ARIA labels, color contrast verification)
- [ ] **7.4** Add `prefers-reduced-motion` media query support for all animations
- [ ] **7.5** Create README.md with project description, setup instructions, and deployment guide
- [ ] **7.6** Final visual polish pass (spacing consistency, animation timing, gradient coherence across all sections)
