# Personal site

A minimal, build-free personal site (three pages) modeled on the layout of
[shud.in](https://shud.in/). No frameworks, no build step — just HTML and one
CSS file. Drop it into a repo and edit the text.

## Files

| File            | What it is                                            |
| --------------- | ----------------------------------------------------- |
| `index.html`    | About / home page                                     |
| `thoughts.html` | Writing index (title + date list)                     |
| `projects.html` | Projects, with section headings and lists             |
| `style.css`     | All styling, shared by every page                     |

## Editing content

Open the `.html` files and replace the placeholder text. Everything between the
`<article class="article"> … </article>` tags is your page content. Standard
HTML applies: `<p>` for paragraphs, `<a href="…">` for links, `<em>` for
emphasis, `<code>` for inline code.

- **Add a thought:** copy one `<li> … </li>` block in `thoughts.html`. Keep the
  newest at the top. The dotted line and date alignment are automatic.
- **Add a project:** copy a `<h2 class="section"> … </h2>` + `<p>` pair in
  `projects.html`. Give each `<h2>` a unique `id` so its hover `#` link works.

## Navigation

Because there's no build step, the nav menu is repeated in all three files. To
add or rename a link, edit the `<nav>` block in **each** file, and put
`class="active"` on the link for the current page.

## Colors

All colors are CSS variables at the top of `style.css`, under `:root`. Edit them
in one place. The scale is named `rurikon` (lighter = lower number). These are an
approximation of the original's deep-indigo greys; tweak `--rurikon-500` (body
text) and `--rurikon-600` (headings) first if you want a different feel.

## Fonts

Loaded from Google Fonts via the `<link>` in each file's `<head>`:
**Inter** (body/headings) and **Lora** italic (used for `<em>`). To change them,
swap that link and update `--font-sans` / `--font-serif` in `style.css`.

Inline code uses your system's monospace font by default. The original uses
*Iosevka*; if you want it, self-host the font or load it (e.g. from
`fontsource`) and set `--font-mono` accordingly.

## Publishing on GitHub Pages

1. Create a repo and add these files at its root.
2. Commit and push.
3. In the repo: **Settings → Pages → Build and deployment**, set
   **Source = Deploy from a branch**, **Branch = main**, **Folder = / (root)**.
4. Save. Your site appears at `https://<username>.github.io/<repo>/` within a
   minute or two.

Tip: to use a custom domain, add it under Settings → Pages, and create a file
named `CNAME` containing just your domain.

## Notes on fidelity

This is a close visual approximation, not a byte-for-byte copy. The exact color
values and one custom layout breakpoint live in the original's compiled
stylesheet, which isn't public; sensible equivalents are used here. The
structure, spacing rhythm, typography scale, sticky side nav, hairline divider,
hover underlines, and the thoughts/projects patterns all mirror the original.
