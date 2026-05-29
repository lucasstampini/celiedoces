# Cêlie Doces — landing page

Static landing page for **Cêlie Doces**, a home bakery (confeitaria artesanal) that takes orders by
WhatsApp. No build step, no framework — just open or deploy the files.

## Run / deploy
- **Locally:** open `index.html` in any browser. (To test as it'll be served, run a tiny static
  server from this folder, e.g. `python -m http.server 8000`, then visit `http://localhost:8000`.)
- **Deploy:** drop the whole folder on any static host — Netlify, GitHub Pages, Vercel, Cloudflare
  Pages. No server-side code.

## Files
- `index.html` — the page.
- `styles.css` — all styling (rose/cream artesanal theme, responsive).
- `app.js` — WhatsApp links, menu category filter, mobile menu.
- `assets/` — hero photo (`bolo.webp` + `bolo-480.webp` for phones + `bolo.jpg` fallback).

## Two things to set up (owner)
1. **iFood / 99Food store links.** They currently point to the apps' generic sites. Replace the
   `href`s in the "Onde pedir" cards and in the footer (search `ifood.com.br` and `99app.com` in
   `index.html`) with your real store URLs.
2. **Product photos.** The 9 menu items and the "Sobre" photo are dashed placeholder boxes. To add a
   real photo, replace a placeholder block:
   ```html
   <div class="ph" role="img" aria-label="foto · bolo de cenoura">…</div>
   ```
   with an image (keep the proportions — products are 5:4, the Sobre photo is 1:1):
   ```html
   <img src="assets/bolo-de-cenoura.webp" width="500" height="400" loading="lazy"
        alt="Bolo de cenoura com brigadeiro" style="width:100%;aspect-ratio:5/4;object-fit:cover">
   ```
   Optimize photos to WebP first (keeps the page fast) — same as the hero.

## Editing the menu
Each product is an `<article class="product-card" data-cat="…">`. The **"Pedir" button reads the
item's name and price straight from the card** (`app.js`), so just edit `.product-name` and
`.product-price` — the WhatsApp message updates itself. `data-cat` (`bolos` / `tortas` / `docinhos`)
drives the filter chips.

## WhatsApp number
Set once in `app.js`: `var WA_NUMBER = "5511972105640";` (= (11) 97210-5640). Per-button messages live
in each element's `data-msg`.

## Notes
- Web fonts: Parisienne, Spectral, Nunito Sans (Google Fonts).
- Built from a Claude Design handoff; the design-tool scaffolding (drag-drop image component, live
  theme panel) was intentionally removed for a fast, dependency-free production page.
