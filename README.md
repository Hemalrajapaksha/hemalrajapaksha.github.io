# Personal Bio

A simple personal bio site built with [Astro](https://astro.build), [Tailwind CSS 4](https://tailwindcss.com) and TypeScript.

## Requirements

Node.js 20 or newer (`.nvmrc` pins 22).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Editing your details

All content lives in [`src/data/bio.ts`](src/data/bio.ts) — name, title, summary, social links, experience, skills and education. To use a photo, put it at `public/avatar.jpg` and set `avatar: "/avatar.jpg"`.

## Build

```bash
npm run build     # outputs a static site to dist/
npm run preview   # serves the built site locally
```

The `dist/` folder can be deployed to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
