<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Adding a calculator or guide page

Before adding a new `/xxx-calculator` page, read `docs/adding-a-calculator.md`.
Before adding a new `/guides/<slug>` page, read `docs/adding-a-guide.md`.
Both cover the required file structure, the existing-pages conventions, and the places that must be wired up (`Layout.tsx`, `app/page.tsx`, `app/guides/page.tsx`, `app/sitemap.ts`, etc.) — skipping them is the most common source of bugs in this repo.
