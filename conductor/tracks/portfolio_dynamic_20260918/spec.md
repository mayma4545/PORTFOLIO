# Specification: Portfolio Personalization & Dynamic Projects

## Overview
Update the existing static HTML portfolio template with personal details from `MyDetails.txt`. Implement a dynamic project showcase that fetches repository data and READMEs directly from GitHub via the GitHub API. When a project is clicked, a modal will display a preview containing the README, challenges and solutions (stored locally in JS), tech stack badges, and screenshots.

## Functional Requirements
- **Personal Information Update:** Replace placeholder text across the site (headers, about section, contact info) with details from `MyDetails.txt` (Jasper A. Fernandez, Freelancer since 2022, etc.).
- **GitHub API Integration:** Fetch repository metadata and the `README.md` content for the projects listed in `MyDetails.txt` using the GitHub REST API.
- **Project Modal UI:** Implement a responsive modal overlay that triggers upon clicking a project card.
- **Modal Content Display:** The modal must render:
  - Markdown content from the fetched README.
  - A "Challenges and Solutions" section.
  - Technology stack badges.
  - Screenshots or images of the project.
- **Local Data Structure:** Create a JavaScript configuration object that maps each GitHub repository URL to its specific "Challenges", "Solutions", "Tech Stack", and "Screenshots" since this data isn't standard in the READMEs.

## Non-Functional Requirements
- **Responsiveness:** The modal and updated layouts must be fully responsive on mobile, tablet, and desktop.
- **Markdown Rendering:** Use a reliable library (e.g., marked.js) to parse and render the README markdown safely.
- **Error Handling:** Gracefully handle GitHub API rate limits or network errors (e.g., show a loading state or fallback error message).

## Acceptance Criteria
- [ ] The website accurately reflects Jasper's personal and professional information.
- [ ] The projects section lists the GitHub repositories provided.
- [ ] Clicking a project card successfully opens a modal.
- [ ] The modal displays the fetched README, local challenges/solutions, tech stack, and images.
- [ ] The markdown is rendered correctly with appropriate styling.

## Out of Scope
- Backend server development (this remains a static site).
- Authentication or user login.
