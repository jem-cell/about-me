# Jem Karaceylan — about-me

Personal site for [Jem Karaceylan](https://github.com/jem-cell), BSc Aerospace Engineering (2.1, Swansea). Operations Manager at [Survey Air](https://github.com/jem-cell), a drone startup. Static, dependency-free, deployed on GitHub Pages.

**Live:** https://jem-cell.github.io/about-me/
**Repo:** https://github.com/jem-cell/about-me

---

## What's in here

```
about-me/
├── index.html        # single page, all content
├── styles.css        # design tokens, layout, light + dark
├── script.js         # year stamp + reveal-on-scroll (no deps)
├── favicon.svg       # monogram mark
├── og.png            # 1200×630 social preview
├── sitemap.xml
├── robots.txt
├── .nojekyll         # tells GitHub Pages not to run Jekyll
└── README.md
```

No build step. No `node_modules`. No framework. Three files of actual content (`index.html`, `styles.css`, `script.js`).

---

## Run it locally

The site is plain static files. Any of these work:

```bash
# Option 1 — Python (already installed on macOS)
python3 -m http.server 8000
# then open http://127.0.0.1:8000

# Option 2 — Node, if you have npx
npx serve .

# Option 3 — open the file directly (some browsers block Google Fonts over file://)
open index.html
```

## Deploy it

This repo is set up for **GitHub Pages** from the `main` branch, root directory.

1. Push to GitHub (see below).
2. On github.com: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"** → branch `main`, folder `/ (root)`.
3. Wait ~60 seconds. The site will be live at `https://<username>.github.io/about-me/`.

There's no custom domain configured. The `.nojekyll` file is included so GitHub Pages doesn't try to run the files through Jekyll.

---

## Design decisions (sensible defaults, documented)

The brief said to make sensible defaults and document them. Here's what I chose and why.

### Stack: vanilla HTML + CSS + tiny JS

Greenfield, so the brief's "no client-side framework unless the project already uses one" landed on **no framework**. Jem's other repos are Next.js / Vite / vanilla — so the personal site being vanilla mirrors the breadth. A small `script.js` handles the year stamp and a single IntersectionObserver for reveal-on-scroll. 32 lines, no dependencies.

### Type pairing: Fraunces (display) + Geist (body) + Geist Mono

- **Fraunces** — variable serif with optical sizing. Confident at display sizes, restrained at body sizes, with italics that have real character. It signals "this person cares about typography" without screaming it.
- **Geist** — for body copy. Neutral, modern, well-hinted, reads beautifully at 16–18px.
- **Geist Mono** — for kickers, metadata, project tags, dates. Keeps the technical detail in its own voice.

The brief banned "Inter or Geist as the *only* font with no second considered choice." Pairing Fraunces with Geist + Geist Mono satisfies the rule (two considered families, with mono as the technical voice) and gives the page a distinct typographic identity rather than a default-developer feel.

### Color: warm off-white + near-black + one restrained accent

- **Light theme base:** `#fafaf7` (warm off-white, paper-like).
- **Ink:** `#16161a` (near-black with a hint of cool — never pure `#000`).
- **Accent:** `#b54a1c` (burnt sienna — warm, not bright, used only on the status dot, link hovers, and selection highlight).

No gradients, no glass, no aurora, no glow.

### Layout

Six sections, in order:

1. **Hero** — name, one-line value prop, one CTA, a three-column meta strip (Based / Training / Currently).
2. **What I do** — three numbered cards for the three areas (AI, aviation, IT systems), with specific copy.
3. **Stack** — three categorised cards (Engineering & analysis, Web & software, UAV & operations). Each has a one-line context sentence and 4–5 specific tools — categorised, not a wall of logos.
4. **Selected work** — five real projects, two private and three public. Tech-stack tag, title, body, link or "available on request" note.
5. **Now** — a short, dated "what I'm paying attention to" section.
6. **Contact** — dark inversion section with email + phone + GitHub + location, plus two CTA buttons.

### Sections deliberately omitted

- No "Interests" section (no coffee/hiking/travel).
- No "Download my CV" CTA (the CV is sent on request).
- No fabricated project entries, no fake employers, no AI headshot.
- No made-up "Testimonials" with quoted reviews.

### Things the brief banned that I checked for

Banned phrases checked: "passionate about", "driven by", "love what I do", "let's connect", "I thrive on", "in today's fast-paced world", "dive deep into", "leverage synergies", "I bring X to the table", "hit the ground running", "on a journey", "navigating the landscape", three-bullet "Integrity. Curiosity. Impact." — **none appear in the final HTML**.

Banned visual patterns checked: no purple/blue/pink gradients, no glassmorphism, no glow on text or buttons, no animated meshes, no rotating 3D hero object, no "aurora" backgrounds, no emoji in copy, no inspirational quote blocks, no stock photos, no Inter-only typography. The accent is a single warm earth tone.

### Accessibility

- Skip-to-content link.
- Real focus rings (`:focus-visible` is blue, not removed).
- Semantic HTML throughout (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, `<dl>` for the meta strip). Every section has `aria-labelledby` pointing to its heading.
- `prefers-color-scheme: dark` is respected.
- `prefers-reduced-motion: reduce` disables scroll-reveal and smooth scrolling.
- All interactive elements are keyboard-navigable.
- Text contrast: body text on background is ~12:1, accent on background is ~5.2:1 — both clear WCAG AA.
- External links carry `rel="noopener"` (or `rel="me noopener"` for the GitHub link).

### Performance

- One CSS file, one JS file (1KB unminified), no dependencies.
- Fonts loaded from Google Fonts with `preconnect` hints. Self-hosting would shave ~150ms — fine to do later if needed.
- No raster images on the page (the OG image is only fetched by social previews).
- Reveal-on-scroll uses IntersectionObserver — no scroll listener, no jank.
- Sitemap.xml included for crawlers.

### Responsive breakpoints tested

- 360px (small mobile) — 0 overflow elements
- 768px (tablet) — 0 overflow elements
- 1440px (desktop) — 0 overflow elements

All three measured with a probe that loads the page in an iframe and reports `body.scrollWidth` and the count of overflowing elements. The contact list goes 4-up on desktop, 2×2 on tablet, and stacks 1-up on small mobile.

---

## Content sources

Built from a research pass on the existing public profile and a CV supplied by the subject.

- **GitHub profile & repos** — `https://github.com/jem-cell` (created March 2025, name set to "Jem Karaceylan", email `jkaraceylan@gmail.com`).
  - `jem-cell/Health-app` — Next.js + TypeScript, Google Fit integration, Gemini AI insights. The README I used to confirm tone: short, factual, no superlatives.
  - `jem-cell/3D_Georeference` — vanilla HTML/JS with Three.js (point clouds, scene/renderer/camera).
  - `jem-cell/georeference` — vanilla HTML/JS with Leaflet (image metadata → map).
  - `jem-cell/dashboard-v2` — vanilla HTML/JS dashboard, updated May 2026.
  - `jem-cell/route-planning` — Vite + React multi-stop route planner (not featured on the page; superseded by stronger project entries).
- **CV** — BSc Aerospace Engineering, 2.1, Swansea University; F1 wing-endplate aerodynamics dissertation (2019); GVC drone licence; ~30 hours glider piloting.
- **Survey Air role** — Operations Manager, 2025–present, drone startup (3-person team). Confirmed directly by subject.

### Defaults made (since the brief said no follow-up questions)

- **Email:** `jkaraceylan@gmail.com` (publicly listed on the GitHub profile).
- **Phone:** `07745 795 585` (UK mobile, supplied directly by subject; click-to-call `tel:+44 7745 795 585`).
- **LinkedIn / "Other" links:** not added. Rather ship with one strong contact row than a half-filled social row. Easy to add later.
- **Profile photo:** none. The brief said "use a clean monogram avatar, not a stock photo" if no headshot exists.
- **Tagline:** "Aerospace engineer, building where AI meets aviation."
- **Now-section content:** written in the same voice as the rest of the page, dated June 2026.

---

## License

MIT, do what you want with it.
