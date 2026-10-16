<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Content rules — read FIRST

Before ANY work that changes user-visible content or numbers (guides, calculators, FAQs, meta titles/descriptions), read `docs/content-rules.md` and follow it. In short: use only the latest (current-edition) primary sources, delete unsourced or hearsay claims (label genuinely common rules of thumb as such), recompute every number, keep guide ↔ calculator ↔ FAQ ↔ meta consistent, and finish with the checklist (dates, lint/tsc/build, history.md, IndexNow).

# Adding a calculator or guide page

Before adding a new `/xxx-calculator` page, read `docs/adding-a-calculator.md`.
Before adding a new `/guides/<slug>` page, read `docs/adding-a-guide.md`.
Both cover the required file structure, the existing-pages conventions, and the places that must be wired up (`Layout.tsx`, `app/page.tsx`, `app/guides/page.tsx`, `app/sitemap.ts`, etc.) — skipping them is the most common source of bugs in this repo.
