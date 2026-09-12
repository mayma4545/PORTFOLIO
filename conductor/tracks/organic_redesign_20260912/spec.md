# Specification: Portfolio Redesign - "Organic Editorial"

## Overview
A complete redesign of the personal portfolio to break away from generic layouts and heavy gradient aesthetics. The new design will focus on a "Sophisticated & Story-Driven" vibe with an "Earthy & Organic" visual language. It will showcase your unique personality through unconventional layouts, personalized content sections, and interactive Easter eggs, targeting employers and clients who value creativity, taste, and technical execution.

## Functional Requirements
- **Layout Structure:** Implement an "Asymmetrical Collage" layout for sections (especially the Projects Gallery) instead of traditional grids, allowing elements to organically overlap and flow.
- **Scroll Experience:** Implement cinematic, story-driven scrolling that guides the user through the narrative smoothly.
- **Content Additions:**
  - **'My Philosophy':** A dedicated section highlighting a bold statement about your coding and design approach.
  - **'Beyond Code':** A visual section showcasing hobbies, workspace, and outside interests.
  - **Interactive Easter Eggs:** Hidden features or interactions scattered throughout the site to delight visitors.
- **Theme/Styling:** 
  - Transition from gradient-heavy colors to an "Earthy & Organic" palette (warm/natural tones).
  - Use soft, fluid shapes and containers instead of rigid, sharp boxes.
  - Typography should reflect an elegant, editorial style (e.g., pairing a refined serif with a clean sans-serif).
- **Responsive Design:** Ensure the asymmetrical collage and organic shapes adapt well and remain readable on mobile devices.

## Non-Functional Requirements
- **Performance:** Complex layouts and scroll animations must not compromise load times or framerates (target 60fps).
- **Accessibility:** Ensure the unconventional layout still follows a logical DOM structure and tab order for screen readers. Maintain WCAG 2.1 AA color contrast.
- **Tech Stack:** Remain strictly within the defined vanilla tech stack (HTML/CSS/JS without frameworks). Use CSS Grid/Flexbox and absolute positioning creatively for the collage effect, and native `IntersectionObserver` for scroll events.

## Acceptance Criteria
- [ ] The portfolio utilizes an asymmetrical collage layout for key sections.
- [ ] The color scheme and shapes follow the new earthy/organic design language.
- [ ] Typography is updated to an elegant, editorial style.
- [ ] 'My Philosophy' and 'Beyond Code' sections are fully implemented.
- [ ] At least one interactive Easter egg is implemented and discoverable.
- [ ] The site is fully responsive across desktop, tablet, and mobile.

## Out of Scope
- Backend integrations (EmailJS remains as-is).
- Migrating to a frontend framework (e.g., React, Vue, Svelte).
- Complex WebGL/3D canvas rendering (animations will rely on CSS/JS DOM manipulation).
