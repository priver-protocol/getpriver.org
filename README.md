# getpriver.org

The landing site for **Priver** — a serverless, end-to-end encrypted messaging protocol.

> *Your message. Nobody else's.*

Built with **Astro v6** + **Tailwind v4** + **TypeScript**. Pages are markdown
files whose YAML frontmatter declares an ordered list of reusable block
components.

## Stack

- [Astro](https://astro.build) v6 (static)
- [Tailwind CSS](https://tailwindcss.com) v4 (CSS-first config in `src/styles/global.css`)
- TypeScript (strict)
- Astro v6 Fonts API (self-hosted Inter)
- [astro-icon](https://www.astroicon.dev/) + iconify (Lucide + Simple Icons)
- [`marked`](https://marked.js.org/) for inline markdown rendering of YAML strings

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
```

Other scripts:

```bash
npm run build        # produces dist/
npm run preview      # serves dist/ locally
npm run check        # astro check (TS + content schema validation)
```

Requires Node ≥ 22.12.

## Project layout

```
src/
├── content.config.ts          # collection schema entrypoint
├── content/pages/             # one markdown file per page
│   ├── index.md
│   └── threat-model.md
├── data/                      # site-wide static data (nav, footer, status stripe)
├── layouts/Layout.astro       # html/head + header + status stripe + footer
├── components/
│   ├── ui/                    # atoms: Button, Heading, Markdown, Verdict, …
│   ├── layout/                # Header, Footer, StatusStripe
│   └── blocks/                # one folder per page-level block
├── lib/
│   ├── schemas.ts             # zod discriminated-union for blocks
│   ├── BlockRenderer.astro    # registry + dispatch via import.meta.glob
│   └── markdown.ts            # configured marked instance
├── pages/
│   ├── [...slug].astro        # one dynamic route renders every page
│   └── 404.astro
└── styles/global.css          # @import "tailwindcss" + @theme + @utility
```

## Adding a page

Create a new file in `src/content/pages/` — for example `src/content/pages/about.md`:

```markdown
---
title: "About — Priver"
seo:
  description: "About the Priver protocol."
blocks:
  - _component: hero
    heading: "About **Priver.**"
    description: "..."
  - _component: feature-grid
    label: "What we believe"
    columns: 3
    cards:
      - { icon: "lucide:lock", title: "...", description: "..." }
---
```

The file becomes `/about/`. Each entry under `blocks:` references a component
folder under `src/components/blocks/<name>/<name>.astro`. The Zod schema in
`src/lib/schemas.ts` validates every block at build time.

## Adding a new block component

1. Create `src/components/blocks/<name>/<name>.astro`.
2. Add a Zod object schema for it in `src/lib/schemas.ts` and add it to the
   `blockSchema` discriminated union.
3. Reference it in any markdown page as `_component: <name>`.

The block name is derived from the folder/file name — no manual registration.

## License

MIT.
