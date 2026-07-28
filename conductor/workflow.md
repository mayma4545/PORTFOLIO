# Project Workflow

## Guiding Principles

1. **The Plan is the Source of Truth:** All work must be tracked in `plan.md`
2. **The Tech Stack is Deliberate:** Changes to the tech stack must be documented in `tech-stack.md` *before* implementation
3. **Visual Quality First:** Every decision should prioritize the user's visual experience and portfolio impact
4. **Manual Verification:** Since this is a static site without a test framework, verification is done through browser testing and visual inspection
5. **Non-Interactive & CI-Aware:** Prefer non-interactive commands where applicable

## Task Workflow

All tasks follow a strict lifecycle:

### Standard Task Workflow

1. **Select Task:** Choose the next available task from `plan.md` in sequential order

2. **Mark In Progress:** Before beginning work, edit `plan.md` and change the task from `[ ]` to `[~]`

3. **Implement the Task:**
   - Write the HTML, CSS, or JavaScript code for the task.
   - Follow the code style guidelines in `code_styleguides/`.
   - Ensure the code adheres to the product guidelines in `product-guidelines.md`.

4. **Visual Verification:**
   - Open the site in a browser (via Live Server or directly).
   - Verify the implementation matches the expected design.
   - Test in both dark and light modes.
   - Check responsive behavior at mobile (375px), tablet (768px), and desktop (1440px) widths.
   - Verify animations are smooth and performant.

5. **Refactor (Optional but Recommended):**
   - Clean up CSS (remove duplication, ensure variables are used).
   - Ensure JavaScript follows ES6+ best practices.
   - Validate HTML with W3C standards.

6. **Document Deviations:** If implementation differs from tech stack:
   - **STOP** implementation
   - Update `tech-stack.md` with new design
   - Add dated note explaining the change
   - Resume implementation

7. **Commit Code Changes:**
   - Stage all code changes related to the task.
   - Propose a clear, concise commit message e.g, `feat(hero): Create hero section with gradient text animation`.
   - Perform the commit.

8. **Attach Task Summary with Git Notes:**
   - **Step 8.1: Get Commit Hash:** Obtain the hash of the *just-completed commit* (`git log -1 --format="%H"`).
   - **Step 8.2: Draft Note Content:** Create a detailed summary for the completed task. This should include the task name, a summary of changes, a list of all created/modified files, and the core "why" for the change.
   - **Step 8.3: Attach Note:** Use the `git notes` command to attach the summary to the commit.
     ```bash
     git notes add -m "<note content>" <commit_hash>
     ```

9. **Get and Record Task Commit SHA:**
    - **Step 9.1: Update Plan:** Read `plan.md`, find the line for the completed task, update its status from `[~]` to `[x]`, and append the first 7 characters of the *just-completed commit's* commit hash.
    - **Step 9.2: Write Plan:** Write the updated content back to `plan.md`.

10. **Commit Plan Update:**
    - **Action:** Stage the modified `plan.md` file.
    - **Action:** Commit this change with a descriptive message (e.g., `conductor(plan): Mark task 'Create hero section' as complete`).

### Phase Completion Verification and Checkpointing Protocol

**Trigger:** This protocol is executed immediately after a task is completed that also concludes a phase in `plan.md`.

1.  **Announce Protocol Start:** Inform the user that the phase is complete and the verification and checkpointing protocol has begun.

2.  **Browser Verification:**
    -   **Step 2.1: Determine Phase Scope:** Read `plan.md` to find the Git commit SHA of the *previous* phase's checkpoint. If no previous checkpoint exists, the scope is all changes since the first commit.
    -   **Step 2.2: List Changed Files:** Execute `git diff --name-only <previous_checkpoint_sha> HEAD` to get a precise list of all files modified during this phase.
    -   **Step 2.3: Verify Against Guidelines:** Check that all changes align with `product-guidelines.md` (colors, typography, animations, glassmorphism specs).

3.  **Propose a Detailed, Actionable Manual Verification Plan:**
    -   Analyze `product.md`, `product-guidelines.md`, and `plan.md` to determine the user-facing goals of the completed phase.
    -   Present the user with step-by-step verification instructions:

        ```
        The phase is complete. For manual verification, please follow these steps:

        **Manual Verification Steps:**
        1.  **Open the site:** Open `index.html` with Live Server or directly in your browser.
        2.  **Test Dark Mode:** Verify all sections render correctly in dark mode with gradient accents.
        3.  **Test Light Mode:** Toggle to light mode and verify colors adapt correctly.
        4.  **Test Mobile:** Resize browser to 375px width and verify responsive layout.
        5.  **Confirm that you see:** [Phase-specific expected outcomes]
        ```

4.  **Await Explicit User Feedback:**
    -   Ask the user: "**Does this meet your expectations? Please confirm with yes or provide feedback on what needs to be changed.**"
    -   **PAUSE** and await the user's response. Do not proceed without an explicit yes or confirmation.

5.  **Create Checkpoint Commit:**
    -   Stage all changes. If no changes occurred in this step, proceed with an empty commit.
    -   Perform the commit (e.g., `conductor(checkpoint): Checkpoint end of Phase X`).

6.  **Attach Auditable Verification Report using Git Notes:**
    -   **Step 6.1: Draft Note Content:** Create a detailed verification report including the manual verification steps and the user's confirmation.
    -   **Step 6.2: Attach Note:** Use the `git notes` command to attach the full report to the checkpoint commit.

7.  **Get and Record Phase Checkpoint SHA:**
    -   **Step 7.1: Get Commit Hash:** Obtain the hash of the *just-created checkpoint commit*.
    -   **Step 7.2: Update Plan:** Find the heading for the completed phase and append the first 7 characters of the commit hash in the format `[checkpoint: <sha>]`.
    -   **Step 7.3: Write Plan:** Write the updated content back to `plan.md`.

8. **Commit Plan Update:**
    - Stage the modified `plan.md` file.
    - Commit with a message following the format `conductor(plan): Mark phase '<PHASE NAME>' as complete`.

9.  **Announce Completion:** Inform the user that the phase is complete and the checkpoint has been created.

### Quality Gates

Before marking any task complete, verify:

- [ ] HTML is semantic and valid
- [ ] CSS follows the design system (uses custom properties, correct spacing)
- [ ] JavaScript is clean ES6+ with no console errors
- [ ] Glassmorphism effects render correctly
- [ ] Gradient borders and accents display properly
- [ ] Animations are smooth (60fps target)
- [ ] `prefers-reduced-motion` is respected
- [ ] Works correctly on mobile (375px+)
- [ ] Both dark and light themes work correctly
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 minimum)
- [ ] All interactive elements are keyboard accessible
- [ ] No layout shift (CLS) from animations
- [ ] Documentation updated if needed

## Development Commands

### Setup
```bash
# No build step required - open index.html directly or use Live Server
# If using VS Code Live Server extension, right-click index.html > "Open with Live Server"
# Alternatively:
npx serve .
```

### Daily Development
```bash
# Start local server
npx serve .

# Validate HTML
npx html-validate index.html

# Check for accessibility issues (optional)
npx pa11y http://localhost:3000
```

### Before Committing
```bash
# Visual check in browser (both themes, mobile + desktop)
# Validate HTML structure
# Check console for JavaScript errors
# Test all interactive elements
```

## Commit Guidelines

### Message Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, CSS changes
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `chore`: Maintenance tasks

### Examples
```bash
git commit -m "feat(hero): Add animated gradient text reveal"
git commit -m "fix(nav): Correct glass blur on mobile Safari"
git commit -m "style(cards): Adjust gradient border opacity in light mode"
git commit -m "feat(projects): Add modal for project detail view"
```

## Definition of Done

A task is complete when:

1. All code implemented to specification
2. Visual verification passed in both themes
3. Responsive design works across breakpoints
4. Animations are smooth and accessible
5. Code follows style guides
6. Implementation notes added to `plan.md`
7. Changes committed with proper message
8. Git note with task summary attached to the commit

## Deployment Workflow

### Pre-Deployment Checklist
- [ ] All sections complete and visually verified
- [ ] Both themes work correctly
- [ ] Mobile responsive across breakpoints
- [ ] Contact form functional
- [ ] All links work (projects, social media)
- [ ] Images optimized
- [ ] Performance acceptable (Lighthouse ≥ 90)

### Deployment Steps
1. Push to GitHub repository
2. Connect to Vercel / Netlify / GitHub Pages
3. Verify deployment at production URL
4. Test all sections on live site
5. Test on actual mobile device
6. Share portfolio URL

## Continuous Improvement

- Review design against latest portfolio trends
- Update project screenshots as needed
- Refresh content regularly
- Optimize for performance
- Gather feedback from peers and potential clients
