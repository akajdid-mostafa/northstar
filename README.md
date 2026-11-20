<div align="center">

# NORTHSTAR

### Strategic clarity. Measurable momentum.

> **northstar** _/ˈnɔːθ.stɑː/_ — a fixed point used for guidance.  
> A consulting & training practice that helps organizations find direction, then move with confidence.

[Overview](#01--overview) · [Highlights](#02--highlights) · [Stack](#03--stack) · [Getting started](#04--getting-started) · [Structure](#05--structure) · [Contact](#06--contact)

</div>

---

## 01 — Overview

**Northstar** is a production-ready marketing website for a strategic business consulting and training practice. It brings together services, success stories, insights, pricing, and conversion-focused calls to action in one fast, responsive, statically generated Next.js experience.

The site is built to feel like a trusted advisor: calm typography, generous spacing, motion with purpose, and content that leads visitors from curiosity to conversation.

### Where to go

- `/` — home, story, services, process, stats, testimonials, FAQ, CTA
- `/about` — mission, story, team, values
- `/services` and `/services/[slug]` — consulting offers and detail pages
- `/case-study` and `/case-study/[slug]` — client results and stories
- `/blog` and `/blog/[slug]` — strategic insights and articles
- `/pricing` · `/changelog` · `/contact` · `/terms` · `/404`

---

## 02 — Highlights

- **Brand-first** — Northstar identity applied consistently across every page, title, and meta description.
- **SEO-ready** — per-page `<title>` and description metadata, semantic headings, descriptive image alt text.
- **Motion, carefully used** — GSAP + ScrollTrigger reveals and Lenis smooth scrolling.
- **Rich interactions** — Swiper-powered case-study slider, accordion FAQ, animated service cards.
- **Fully static** — all 14 routes prerendered at build time for speed and reliability.
- **Responsive by design** — Tailwind utility system with mobile-first layouts.

---

## 03 — Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 14 · React 18 |
| Styling | Tailwind CSS · PostCSS · Autoprefixer |
| Motion | GSAP · ScrollTrigger · Lenis |
| UI | Swiper · Lucide React · Iconify |
| Language | JavaScript (JSX) |
| Tooling | ESLint · npm scripts |

---

## 04 — Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# create the optimized production build
npm run build

# serve the production build
npm start
```

The dev server runs at `http://localhost:3000`.

---

## 05 — Structure

```text
src/
├── components/
│   ├── about/        # mission, story, values, CTA
│   ├── blog/         # article cards and detail blocks
│   ├── casestudy/    # case-study cards and testimonials
│   ├── contact/      # form and map/address block
│   ├── home/         # hero, services, process, stats, FAQ, CTA
│   ├── layout/       # navbar, footer, shared layout
│   ├── pricing/      # plans and comparison
│   └── services/     # service cards and detail sections
├── pages/            # file-system routes + _app, _document, 404
└── styles/           # global Tailwind entry and base styles

public/
├── images/webp/      # optimized imagery
└── videos/           # hero background
```

---

## 06 — Contact

<div align="center">

**Built & maintained by MOSTAFA AKAJDID**  
_Full-Stack Developer · React · Next.js · TypeScript · Node.js · Spring Boot_  
Casablanca, Morocco

[Portfolio](https://akajdidm.vercel.app) · [GitHub](https://github.com/akajdid-mostafa) · [LinkedIn](https://www.linkedin.com/in/mostafa-akajdid) · [Email](mailto:mostafaakajdid6@gmail.com)

</div>
