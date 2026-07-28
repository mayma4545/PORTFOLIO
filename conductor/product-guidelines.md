# Product Guidelines

## 1. Voice & Tone

### Writing Style: Polished & Corporate

- **Register:** Professional, refined, and confident. Every word should feel deliberate.
- **Sentence Structure:** Favor concise, well-constructed sentences. Avoid jargon unless it demonstrates expertise.
- **First Person:** Use first person sparingly and with authority: *"I architect solutions that scale"* rather than *"I like coding."*
- **CTAs:** Action-oriented and dignified: *"Explore My Work,"* *"Start a Conversation,"* *"View Case Study."*
- **Avoid:** Slang, excessive exclamation marks, filler words, or overly casual phrasing.

### Content Principles

- Lead with outcomes and impact, not just tasks performed.
- Quantify achievements where possible (e.g., *"Reduced load time by 40%"*).
- Keep project descriptions to 2–3 sentences for cards; expand in detail modals.

---

## 2. Visual Identity

### Signature Style: Glassmorphism

- **Primary Technique:** Frosted-glass effect (`backdrop-filter: blur()`) on cards, modals, navigation, and overlay elements.
- **Glass Properties:**
  - Background: semi-transparent (rgba with 10–20% opacity).
  - Blur radius: 12–20px for cards, 8–12px for smaller elements.
  - Border: 1px solid with low-opacity white (`rgba(255, 255, 255, 0.15)`).
- **Layering:** Use glass layers to create visual depth. Overlapping panels should feel like stacked translucent sheets.
- **Gradient Integration:** Gradient accents should glow *through* glass elements, creating a luminous, premium feel.

### Color System

| Token | Dark Mode | Light Mode | Usage |
|---|---|---|---|
| `--bg-primary` | `#0a0a0f` | `#fafafa` | Page background |
| `--bg-secondary` | `#12121a` | `#f0f0f5` | Section backgrounds |
| `--bg-glass` | `rgba(255,255,255,0.05)` | `rgba(0,0,0,0.03)` | Glass card fills |
| `--text-primary` | `#e8e8ed` | `#1a1a2e` | Headings, body text |
| `--text-secondary` | `#8888a0` | `#6b6b80` | Captions, meta text |
| `--gradient-1` | `#7c3aed → #06b6d4` | `#8b5cf6 → #22d3ee` | Primary accent (purple → cyan) |
| `--gradient-2` | `#ec4899 → #f97316` | `#f472b6 → #fb923c` | Secondary accent (pink → orange) |
| `--gradient-3` | `#3b82f6 → #8b5cf6` | `#60a5fa → #a78bfa` | Tertiary accent (blue → violet) |
| `--border-glass` | `rgba(255,255,255,0.12)` | `rgba(0,0,0,0.08)` | Glass element borders |

---

## 3. Typography

### Font Family: Sans-Serif Modern

- **Headings:** **Space Grotesk** (700 weight) — geometric, distinctive, modern.
- **Body:** **Inter** (400/500 weight) — highly legible, optimized for screens.
- **Monospace (code snippets):** **JetBrains Mono** (400 weight) — for inline code or tech tags.

### Scale

| Element | Size (Desktop) | Size (Mobile) | Weight |
|---|---|---|---|
| Hero Title | 4rem (64px) | 2.5rem (40px) | 700 |
| Section Heading | 2.5rem (40px) | 1.75rem (28px) | 700 |
| Subheading | 1.5rem (24px) | 1.25rem (20px) | 600 |
| Body Text | 1.125rem (18px) | 1rem (16px) | 400 |
| Caption / Meta | 0.875rem (14px) | 0.8125rem (13px) | 400 |

### Rules

- Line height: 1.6 for body text, 1.2 for headings.
- Letter spacing: `-0.02em` for headings, `0` for body.
- Maximum line width: `65ch` for readability.

---

## 4. Animation & Motion

### Intensity: Smooth & Subtle

- **Philosophy:** Animations should feel like natural extensions of the interface — guiding attention, not demanding it.
- **Preferred motion:** Fade-ins, soft directional slides (Y-axis 20–30px), and gentle scale transitions (0.95 → 1.0).

### Specifications

| Interaction | Duration | Easing | Effect |
|---|---|---|---|
| Scroll reveal (sections) | 500ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Fade up + translate Y 20px |
| Card hover | 300ms | `ease-out` | Scale 1.02 + border glow |
| Button hover | 250ms | `ease-in-out` | Gradient shift + subtle lift |
| Modal open | 400ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Fade in + scale from 0.95 |
| Page load (hero) | 800ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Staggered text fade-in |
| Theme toggle | 300ms | `ease-in-out` | Cross-fade colors + icon rotate |

### Rules

- **Respect `prefers-reduced-motion`:** All animations must be disabled or minimized when this media query is active.
- **No animation on scroll-up:** Elements animate only on first appearance.
- **Stagger limit:** No more than 5 staggered items per group (100ms intervals).
- **No layout shift:** Animated elements must have reserved space to prevent CLS.

---

## 5. UX Principles

- **Performance First:** Target Lighthouse score ≥ 90. Lazy-load images, optimize fonts, minimize JavaScript.
- **Accessibility:** WCAG 2.1 AA compliance. Sufficient color contrast (4.5:1 minimum), keyboard navigation, ARIA labels on interactive elements.
- **Mobile-First Responsive:** Design for mobile viewports first, then enhance for tablet and desktop.
- **Progressive Disclosure:** Show essential information upfront; let users drill into details via modals/expand actions.
- **Consistent Spacing:** Use an 8px base grid. All padding, margins, and gaps should be multiples of 8.

---

## 6. Component Standards

- **Cards:** Glassmorphism with gradient border on hover. Rounded corners (`12px`). Consistent padding (`24px`).
- **Buttons:** Pill-shaped or rounded (`8px`). Primary buttons use gradient fill. Secondary buttons use gradient border with transparent fill.
- **Navigation:** Sticky top bar, semi-transparent glass effect. Active section highlighted with gradient underline.
- **Icons:** Use a consistent icon set (Lucide or Phosphor Icons). Size: 20–24px. Monochrome, inheriting `--text-secondary`.
