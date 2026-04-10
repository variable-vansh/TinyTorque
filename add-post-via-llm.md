# Instructions for LLMs: add a Tiny Torque blog post

Share this file (and your draft) with any LLM. Ask it to **output one complete HTML file** ready to save as `posts/<slug>.html`, plus a **small snippet** to add to the site index.

## Site context

- **Name:** Tiny Torque (two words, title case in the UI).
- **Stack:** Plain static HTML. No React, no build step. Styles: `../style.css`, script: `../script.js`, logo: `../logo.png`.
- **X link:** `https://x.com/tiny_torque` (unchanged in every post).

## What you (the human) provide the LLM

1. This instruction file.
2. Paste from Google Docs (or export as plain text / copy-paste). Say the **publication date** you want (or ask the LLM to infer and you will correct).

## What the LLM must deliver

### A) One file: `posts/<slug>.html`

- **Filename / slug:** Lowercase, words separated by hyphens, only `a-z`, `0-9`, hyphens. Example: `why-i-rewired-the-garage.html`.
- **`<title>`:** `Article title — Tiny Torque`
- **`<meta name="description">:** One short sentence; can match or tighten the summary.
- **Reading bar:** Include exactly this as the first element inside `<body>` (before the header):

```html
<div id="reading-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Reading progress"></div>
```

- **Header block:** Same on every post — first a `<div class="header-spacer" aria-hidden="true"></div>` (balances the layout), then the brand link (logo + “Tiny Torque” in a centered white capsule — styled in CSS), then `header-actions` with theme button and X link. Brand links to `../index.html`. Use `width="76" height="76"` on the header logo. `aria-label="Tiny Torque on X"` on the X link. Do not change the SVG path.
- **Article:**
  - `<h1 class="post-title">` — the post title (plain text, escape `&`, `<`, `>` in content).
  - `<p class="post-summary">` — **2–4 sentences** distilled from the top of the doc or an editor’s note; this is the blurb under the title.
  - `<div class="post-body">` — all main content.

### Mapping Google Docs → HTML (inside `.post-body` only)

| Doc | HTML |
|-----|------|
| Normal paragraph | `<p>...</p>` |
| Title line | Already in `<h1 class="post-title">`; do **not** repeat as first body heading unless it is a subtitle |
| Heading 1 / large heading | `<h2>...</h2>` (first section heading after title) |
| Heading 2 | `<h3>...</h3>` |
| Bulleted list | `<ul><li>...</li></ul>` |
| Numbered list | `<ol><li>...</li></ol>` |
| Block quote | `<blockquote><p>...</p></blockquote>` |
| Code / monospace block | `<pre><code>...</code></pre>` (escape `<`, `>`, `&` inside code) |
| Inline code | `<code>...</code>` inside a paragraph |
| Image | `<img src="RELATIVE_OR_FULL_URL" alt="descriptive alt" />` — prefer hosting images yourself under the repo later; if the doc only has a URL, use it and note for the human |

Do **not** add author line, tags, comments, related posts, or newsletter blocks.

- **Footer:** `<footer class="post-footer">` with:
  - `<time class="post-date" datetime="YYYY-MM-DD">D Month YYYY</time>` — e.g. `datetime="2026-04-11"` and visible `11 April 2026`.
  - `<hr />`
  - Link to index: `<a href="../index.html" class="footer-brand">` with small logo `width="22" height="22"`, text `Tiny Torque`, then `<span class="arrow" aria-hidden="true">↗</span>`.

- **End of file:** `<script src="../script.js"></script>` before `</body>`.

### B) Index list row (for `index.html`)

The index lists posts **newest first**. Output a copy-paste block like:

```html
<li>
  <div class="post-row">
    <a href="posts/your-slug.html">Exact title as shown on index</a>
    <time datetime="YYYY-MM-DD">DD Mon YYYY</time>
  </div>
</li>
```

Use **English month abbreviations** for the visible date: `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`.

Tell the human: **insert this `<li>` as the first item** inside `<ul class="post-list">` in `index.html`.

## Full HTML skeleton (fill placeholders)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>TITLE — Tiny Torque</title>
    <meta name="description" content="ONE_LINE_SUMMARY" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../style.css" />
  </head>
  <body>
    <div id="reading-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Reading progress"></div>

    <header class="site-header">
      <div class="header-spacer" aria-hidden="true"></div>
      <a href="../index.html" class="brand">
        <img src="../logo.png" alt="" width="76" height="76" />
        Tiny Torque
      </a>
      <div class="header-actions">
        <button type="button" class="theme-toggle" aria-label="Toggle theme">◐</button>
        <a
          href="https://x.com/tiny_torque"
          class="icon-link"
          aria-label="Tiny Torque on X"
          rel="me noopener noreferrer"
          target="_blank"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </a>
      </div>
    </header>

    <article class="post">
      <h1 class="post-title">TITLE</h1>
      <p class="post-summary">SUMMARY_TWO_TO_FOUR_SENTENCES</p>
      <div class="post-body">
        <!-- paragraphs, h2, h3, lists, blockquotes, pre/code, images -->
      </div>

      <footer class="post-footer">
        <time class="post-date" datetime="YYYY-MM-DD">D Month YYYY</time>
        <hr />
        <a href="../index.html" class="footer-brand">
          <img src="../logo.png" alt="" width="22" height="22" />
          Tiny Torque
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
      </footer>
    </article>

    <script src="../script.js"></script>
  </body>
</html>
```

## Checklist before the LLM finishes

- [ ] Valid HTML5, UTF-8, all asset paths use `../` from `posts/`.
- [ ] No duplicate `<h1>` inside `.post-body`.
- [ ] Special characters in text escaped where needed.
- [ ] `datetime` on `<time>` matches the ISO date used in the index row.
- [ ] Filename slug matches the `href` in the index snippet.

## One-line prompt you can paste

> Using the instructions in the attached markdown, convert my draft below into (1) a complete `posts/<slug>.html` file for the Tiny Torque static site and (2) the `<li>` block to insert at the top of `index.html`. Output the HTML file in a single fenced code block named with the filename, then the index snippet in a second block.
