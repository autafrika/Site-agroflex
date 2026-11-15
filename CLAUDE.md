
# Project Guidelines

## Project Context
- This is a React + Vite application.
- Tailwind CSS is the styling framework.
- Preserve the existing project architecture.
- Inspect package.json before adding dependencies.
- Identify the installed Tailwind version before changing its configuration.

## UI/UX Design Principles

- Create visually distinctive, professional interfaces.
- Avoid generic AI-generated dashboard aesthetics.
- Establish a clear visual identity for the application.
- Use deliberate typography and consistent spacing.
- Build strong visual hierarchy.
- Use colors that complement the product identity.
- Prefer clean, elegant and functional layouts.
- Use subtle animations where they improve the experience.
- Avoid unnecessary gradients, shadows and decorations.

## Responsive Design

- Use a mobile-first approach.
- Support mobile, tablet and desktop.
- Avoid horizontal overflow.
- Make navigation intuitive on every screen.
- Ensure forms and interactive elements work on mobile.

## React Development

- Build reusable components.
- Keep components maintainable.
- Avoid unnecessary dependencies.
- Reuse existing components and utilities.
- Separate business logic from presentation.
- Preserve existing functionality.

## Design Workflow

Before implementing a new interface:

1. Understand the purpose of the page.
2. Identify its users and primary actions.
3. Inspect existing components and design tokens.
4. Establish a visual direction.
5. Implement the interface.
6. Run the application.
7. Inspect it with Playwright.
8. Fix visual and responsive issues.
9. Verify that existing functionality still works.

## Browser Testing

- Use Playwright to inspect implemented interfaces.
- Test desktop and mobile viewports.
- Check navigation, forms and interactions.
- Inspect browser console errors when possible.
- Take screenshots after major UI changes.

## Important Rules

- Do not redesign unrelated pages without permission.
- Do not replace the existing styling system unnecessarily.
- Do not change backend contracts without permission.
- Do not delete existing functionality to simplify the UI.
- Ask before introducing major architectural changes.
