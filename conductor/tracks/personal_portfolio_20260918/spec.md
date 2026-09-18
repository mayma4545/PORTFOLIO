# Specification: Portfolio Enhancement with Dynamic GitHub Projects

## Overview
Transform the current template HTML into Jasper A. Fernandez's personalized portfolio. The site will act as a digital resume and freelance portfolio, dynamically fetching and displaying GitHub repositories, parsing READMEs, and showing project-specific challenges and solutions.

## Functional Requirements
- **Personal Information:** Update the hero and about sections with Jasper's details (age 24, born Oct 14, 2001, from Brgy. Pating, Masbate City, freelancing since 2022).
- **GitHub Projects Integration:**
  - Display the list of 8 projects provided in `MyDetails.txt`.
  - Clicking a project will open a **Modal/Popup overlay** containing the project's brief info.
  - Dynamically fetch the `README.md` content from the respective GitHub repository using the GitHub API or raw content URL and render it within the modal (converting Markdown to HTML).
- **Challenges & Solutions:**
  - Create a local JSON data file to store the "Challenges" and "Solutions" for each project.
  - The modal will fetch and display this JSON data alongside the README content.
- **Additional Sections:**
  - Add a "Skills & Technologies" section.
  - Add a "Contact Me" section with email and social links.
  - Add a "Downloadable Resume/CV" button.
  - Add a "Freelance Client Testimonials" section.

## Non-Functional Requirements
- **Performance:** Asynchronous data fetching for GitHub READMEs to avoid blocking page load.
- **Responsiveness:** Modals and new sections must be fully responsive (mobile, tablet, desktop) using Tailwind CSS.
- **Maintainability:** Separation of data (JSON file) and presentation (HTML/Vanilla JS).

## Acceptance Criteria
- Personal details reflect the content of `MyDetails.txt`.
- All 8 projects are listed as clickable cards.
- Clicking a project card opens a modal.
- Modal successfully loads and displays the GitHub README content.
- Modal successfully loads and displays specific Challenges and Solutions from a local JSON file.
- The 4 new sections (Skills, Contact, Resume, Testimonials) are present and styled properly.

## Out of Scope
- Backend server or database implementation (strictly static site with Vanilla JS).
- Automatic synchronization of Challenges/Solutions to GitHub (stored locally in JSON instead).
