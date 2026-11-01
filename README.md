# Anjeel Chaudhary — Portfolio ✏️

A hand-drawn, whiteboard-themed portfolio built with Next.js. Education,
experience, projects, and other portfolio details will be added soon.

## Run it

```bash
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing your content

**Everything is in one file:** [`lib/data.ts`](lib/data.ts). No component edits
needed — change text there and the site updates.

- `profile` — name, title, tagline, location, email, socials, intro blurb
- `milestones` — education and work experience (`kind: "education" | "work"`),
  in order. The drawn line and dots are generated automatically from this list.
- `projects` — the sticky notes. Pick a `color`
  (`yellow | pink | blue | green | orange | purple`) and add `tags`.
- `skillGroups` — the toolbox clusters.
- `openSource` / `blogs` — extras. Add real URLs to `blogs[].link`.

## How it works

The site uses reusable scrapbook-style components, doodles, and animations to
present portfolio content. Fonts are loaded via `next/font` in `app/layout.tsx`.

## Theme

Whiteboard palette and tokens live in [`app/globals.css`](app/globals.css)
(`--color-marker-*`, sticky-note colors, the dot-grid board background).

---

Built with Next.js, Tailwind CSS v4, and Framer Motion.