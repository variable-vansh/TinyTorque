# tinytorque — Design Vision

## Philosophy

Blank white. No noise. The writing is the only thing that matters.
Every element earns its place or it doesn't exist.

---

## Colour & Theme

- Default: **light mode** — pure white (`#ffffff`) background, near-black text (`#111111`)
- **Dark mode** — deep dark (`#0f0f0f`) background, off-white text (`#e8e8e8`)
- Toggle switches instantly, preference stored in `localStorage`
- Accent: TBD — one single accent colour used sparingly (links, hover states, progress bar)
- No gradients. No shadows. No decoration.

---

## Index Page (`/`)

### Header

```
[ logo ]  tinytorque                    [◐ toggle]  [𝕏]
```

- Logo + name anchored to the **left** — clicking returns to index
- Right side: **dark/light mode toggle** + **Twitter/X link** — icon only, no label
- Header is not sticky — it scrolls away with the page
- A single thin `1px` rule separates the header from the content below

### Post List

- Clean vertical list — nothing else on the page
- Each row: **post title** on the left, **date** (`DD Mon YYYY`) on the right
- A subtle `1px` rule between each row
- Title links to the post — no underline by default, underline on hover
- No excerpts. No tags. No images. No author. Just title and date.
- Newest post at the top

```
On building things slowly                      12 Apr 2025
The problem with perfect                       03 Mar 2025
Notes on small engines                         18 Jan 2025
```

---

## Post Page (`/posts/post-slug.html`)

### Reading Progress Bar

- Fixed at the very **top of the viewport** — above everything
- Thin: `3px` tall
- Fills left → right as the reader scrolls through the article
- Uses the accent colour
- Disappears (or resets) when back at the top
- Pure CSS + minimal JS — no libraries

### Post Header

- **Title** — large, centred or left-aligned (decide at build time)
- Below it: a short **summary block** — 2–4 sentences, visually distinct
  (slightly muted colour, maybe italic, or a left border rule in accent colour)
- No author name. No hero image. No tags.

### Post Body

- Single column, generous line-height (`1.85`)
- Max-width capped for readability (~`640px–680px`), centred on page
- Headings, blockquotes, code blocks styled minimally — no boxes, no colour backgrounds
- Images (if any) are full-width within the column, no captions unless necessary

### Post Footer

- **Date** — centred, muted, alone on its line. That's the end of the article.
- Below: a thin `1px` rule
- Then: **logo + name + link back to index** — centred, small, quiet

```
                        12 April 2025

          ─────────────────────────────────────

               [ logo ]  tinytorque  ↗
```

### No comments. No "related posts". No newsletter signup. Nothing.

---

## Typography

- One font family — a clean, readable serif or a refined sans (decide at build time)
- Load from Google Fonts or go system-stack for zero requests
- Body size: `~18px`, comfortable for long reading
- Line length naturally constrained by `max-width`

---

## Interactions

| Action | Behaviour |
|---|---|
| Toggle dark/light | Instant switch, saves to `localStorage` |
| Click post title (index) | Navigate to post |
| Scroll post | Progress bar fills |
| Click logo (post footer) | Return to index |
| Hover post row | Title underlines |

---

## What this site does NOT have

- Navigation menu
- Search
- Categories / tags
- Sidebar
- Comments
- Newsletter / email capture
- Social share buttons
- "Read time" estimate
- Hero images or thumbnails
- Pagination (all posts on one page unless list grows very long)

---

## File Structure

```
tinytorque/
├── index.html
├── style.css
├── script.js          ← theme toggle + progress bar only
└── posts/
    ├── post-template.html
    └── your-post-slug.html
```

---

## GitHub Pages Notes

- Repo name: `tinytorque.github.io` (or custom domain later)
- No build step. No dependencies. Plain HTML/CSS/JS.
- Custom domain: add `CNAME` file with domain, point DNS to GitHub's IPs
