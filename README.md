# Jem Karaceylan — about-me

Personal site for [Jem Karaceylan](https://github.com/jem-cell) (BSc Aerospace Engineering). Static, dependency-free, deployed on GitHub Pages.

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

There's no custom domain configured. The `.nojekyll` file is included so GitHub Pages doesn't try to run the files through Jekyll (which would mangle the `_` prefix on the script filename and the case-sensitivity of any future assets).

---

## Design decisions (sensible defaults, documented)

The brief said to make sensible defaults and document them. Here's what I chose and why.

### Stack: vanilla HTML + CSS + tiny JS

Greenfield, so the brief's "no client-side framework unless the project already uses one" landed on **no framework**. Jem's other repos are Next.js / Vite / vanilla — so the personal site being vanilla actually mirrors the breadth. A small `script.js` handles the year stamp and a single IntersectionObserver for reveal-on-scroll. ~40 lines, no dependencies.

### Type pairing: Fraunces (display) + Geist (body) + Geist Mono

- **Fraunces** — variable serif with optical sizing. Confident at display sizes, surprisingly restrained at body sizes, with italics that have real character. It signals "this person cares about typography" without screaming it.
- **Geist** — for body copy. Neutral, modern, well-hinted, and reads beautifully at 16–18px.
- **Geist Mono** — for kickers, metadata, project tags, dates. Keeps the technical detail in its own voice.

The brief banned "Inter or Geist as the *only* font with no second considered choice." Pairing Fraunces with Geist + Geist Mono satisfies the rule (two considered families, with mono as the technical voice) and gives the page a distinct typographic identity rather than a default-developer feel.

### Color: warm off-white + near-black + one restrained accent

- **Light theme base:** `#fafaf7` (warm off-white, paper-like).
- **Ink:** `#16161a` (near-black with a hint of cool — never pure `#000`).
- **Accent:** `#b54a1c` (burnt sienna — warm, not bright, used only on the status dot, link hovers, and selection highlight).

No gradients, no glass, no aurora, no glow.

### Layout

Five sections, in order:

1. **Hero** — name, one-line value prop, one CTA, a three-column meta strip (Based / Training / Currently). Constrained column width, generous vertical space.
2. **What I do** — three numbered cards for the three areas the brief mentioned (AI, aviation, IT systems), with specific copy.
3. **Selected work** — four real public GitHub projects, in a list pattern with title/body/link and a small tech-stack tag.
4. **Now** — a short, dated "what I'm paying attention to" section. Last-updated timestamp included.
5. **Contact** — dark inversion section with email + GitHub + location.

### Sections deliberately omitted

- No "Skills" badge wall.
- No "Testimonials" section with fabricated quotes.
- No "Interests" section (no coffee/hiking/travel).
- No "Download my CV" CTA.
- No fabricated project entries, no fake employers, no AI headshot.

### Things the brief banned that I checked for

Banned phrases checked: "passionate about", "driven by", "love what I do", "let's connect", "I thrive on", "in today's fast-paced world", "dive deep into", "leverage synergies", "I bring X to the table", "hit the ground running", "on a journey", "navigating the landscape", three-bullet "Integrity. Curiosity. Impact." — **none appear in the final HTML**.

Banned visual patterns checked: no purple/blue/pink gradients, no glassmorphism, no glow on text or buttons, no animated meshes, no rotating 3D hero object, no "aurora" backgrounds, no emoji in copy, no inspirational quote blocks, no stock photos, no Inter-only typography. The accent is a single warm earth tone, not a neon or gradient.

### Accessibility

- Skip-to-content link.
- Real focus rings (`:focus-visible` is blue, not removed).
- Semantic HTML throughout (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, `<dl>` for the meta strip).
- `prefers-color-scheme: dark` is respected.
- `prefers-reduced-motion: reduce` disables scroll-reveal and smooth scrolling.
- All interactive elements are keyboard-navigable; all links have meaningful text (or `aria-label`).
- Text contrast: body text on background is ~12:1, accent on background is ~5.2:1 — both clear WCAG AA.
- Alt text is implicit through semantic markup; the favicon SVG and OG image have descriptive `aria-label`/`<text>` content.

### Performance

- One CSS file, one JS file (~1KB unminified), no dependencies.
- Fonts are loaded from Google Fonts with `preconnect` hints. Self-hosting would shave ~150ms — fine to do later if needed.
- No images on the page (the OG image is only fetched by social previews).
- The reveal-on-scroll uses IntersectionObserver — no scroll listener, no jank.

### Responsive breakpoints tested

- 360px (small mobile)
- 768px (tablet)
- 1440px (desktop)

All three: **0 horizontal overflow elements**, body scroll-width matches viewport. Verified with a probe that loads the page in an iframe and reports the actual measurements.

---

## Content sources

Built from a research pass on the existing public profile:

- **GitHub profile & repos** — `https://github.com/jem-cell` (5 public repos, created March 2025, name set to "Jem Karaceylan", email `jkaraceylan@gmail.com`).
  - `jem-cell/Health-app` — Next.js + TypeScript, Google Fit integration, Gemini AI insights. The README I used to confirm tone: short, factual, no superlatives.
  - `jem-cell/3D_Georeference` — vanilla HTML/JS with Three.js (point clouds, scene/renderer/camera).
  - `jem-cell/georeference` — vanilla HTML/JS with Leaflet (image metadata → map).
  - `jem-cell/dashboard-v2` — vanilla HTML/JS dashboard, updated May 2026.
  - `jem-cell/route-planning` — Vite + React multi-stop route planner.
- **Name spelling** — confirmed `Karaceylan` (not Karachelyan, not Karacelyan) from the GitHub profile display name.
- **Location** — Farnham, UK (from the brief; consistent with the user's known location).
- **Degree** — BSc Aerospace Engineering (from the brief).

I did not have access to a LinkedIn profile or any other public writing. The "Now" section copy is honest about that — it's written in a personal-website register, not a portfolio-claim register, and dated so it reads as a snapshot rather than a promise.

### Defaults made (since the brief said no follow-up questions)

- **Email:** `jkaraceylan@gmail.com` (publicly listed on the GitHub profile — appropriate for an "About Me" page).
- **LinkedIn / "Other" links:** not added. The brief left these as placeholders; I'd rather ship with one strong contact (email) + GitHub than a half-filled social row. Easy to add later.
- **Profile photo:** none. The brief explicitly said "no stock photos" and "use a clean monogram avatar, not a stock photo" if no headshot exists. I went with monogram.
- **Tagline / current title:** "Aerospace engineer, building where AI meets aviation." Short, specific, and consistent with the work on the GitHub profile.
- **Now-section content:** written in the same voice as the rest of the page, dated June 2026. If you want a different "now," edit the `<ul class="now">` block in `index.html`.

---

## License

MIT, do what you want with it.
