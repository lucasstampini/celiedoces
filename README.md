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
- `styles-v3.css` — all styling (wine/cream artesanal theme matching the logo, responsive).
- `app-v3.js` — WhatsApp links, menu category filter, mobile menu.
- `assets/` — official logo (`Logo.svg`), tab icon (`LogoTab.svg`), hero photo
  (`bolo.webp` + `bolo-480.webp` for phones + `bolo.jpg` fallback), owners photo (`celie-lu.webp`)
  and the product photos (`bolo-*.webp`, `brigadeiro.webp`, `beijinho.webp`). The original
  high-res `.jpeg`/`.png` source files are kept alongside the optimized `.webp`.

## Brand
- Color: **wine `#6B1A29`** (from the logo) with soft-pink accents `#EECCCD` / `#F9E9E9`.
  All brand colors live in `styles-v3.css` `:root` (`--rose`, `--rose-deep`, `--pink-*`).
- Logo: `Logo.svg` (wordmark, in the nav), `LogoTab.svg` (favicon).

## Menu (current, real)
- **Bolos confeitados 1 kg — R$ 90:** Brigadeiro c/ Leite Ninho · Leite Ninho c/ Morangos ·
  Leite Ninho c/ Abacaxi.
- **Docinhos — R$ 115 o cento:** Brigadeiro · Beijinho.
- Plus a "Outros sabores sob encomenda" card (WhatsApp CTA, `data-cat="encomenda"` so it only
  shows under *Todos*).

Each product is an `<article class="product-card" data-cat="…">`. The **"Pedir" button reads the
item's name and price straight from the card** (`app-v3.js`), so just edit `.product-name` and
`.product-price` — the WhatsApp message updates itself. `data-cat` (`bolos` / `docinhos`) drives the
filter chips.

## Adding / replacing photos
Optimize to WebP first (keeps the page fast). With Node installed: `npm i sharp --no-save` then a
short script (see how the current assets were generated). Product images are 5:4, the Sobre photo
is 4:5. Markup pattern:
```html
<img class="product-photo" src="assets/x.webp" width="500" height="400" loading="lazy" alt="…">
```

## iFood / 99Food links
Live in the "Onde pedir" cards and the footer (search `ifood.com.br` and `99app.com` in
`index.html`).

## WhatsApp number
Set once in `app-v3.js`: `var WA_NUMBER = "5511972105640";` (= (11) 97210-5640). Per-button messages live
in each element's `data-msg`.

## Notes
- Web fonts: Parisienne, Spectral, Nunito Sans (Google Fonts).
- Built from a Claude Design handoff; the design-tool scaffolding (drag-drop image component, live
  theme panel) was intentionally removed for a fast, dependency-free production page.
