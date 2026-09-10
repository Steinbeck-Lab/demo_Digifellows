# Kladde documentation

User documentation for **Kladde**, the electronic lab notebook (ELN) used at Friedrich Schiller
University Jena. Kladde is built on the open-source [cheminfo](https://cheminfo.github.io/)
platform. These pages are written for Bachelor chemistry students in their first
synthetic-chemistry lab practical and combine step-by-step guides, annotated screenshots and
short screen recordings.

- Site: <https://kladde.uni-jena.de> (custom domain, currently not assigned; see
  [Known gaps](#known-gaps))
- GitHub Pages project URL: <https://steinbeck-lab.github.io/demo_Digifellows/>
- Repository: <https://github.com/Steinbeck-Lab/demo_Digifellows>

The site is static: [MkDocs](https://www.mkdocs.org/) with the
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme, no backend and no
database.

## Contents

| Navigation | Source | What it covers |
|---|---|---|
| Welcome | `docs/index.md` | Who the site is for, the suggested workflow, credits |
| About › What is ELN? | `docs/eln.md` | ELNs, the FAIR principles, what Kladde is |
| About › Meet our team | `docs/christoph.md`, `docs/kevin.md`, `docs/kohulan.md`, `docs/soyee.md` | One page per team member: role, photo, bio |
| About › License | `docs/license.md` | The licensing terms in plain language |
| How to start › New Entry | `docs/new-entry.md` | The main walkthrough in six steps: open an entry, title it, add reagents and the reaction, calculate amounts (*Ansatzberechnung*), look up GHS hazard data, set the status |
| How to start › Adding chemical equation | `docs/adding-chemical-equation.md` | Toolbar reference for the *OpenChemLib* structure editor |
| How to start › Snippets | `docs/snippets.md` | Shortcuts for the reaction description: predefined sentences, `_metainfo` keys, reagent references |
| Analysis › Sample Analysis | `docs/sample-analysis.md` | Not written yet (recording results such as melting point, GC and IR spectra) |
| Analysis › IR, NMR, MS | `docs/ir.md`, `docs/nmr.md`, `docs/ms.md` | Not written yet |
| Report | `docs/report.md` | Not written yet |

The order of the navigation comes from `nav:` in `mkdocs.yml`. Pages that are not written yet,
including the Soyee Chan bio, show the line `brewing in progress... ☕`.

Three pages were renamed in September 2026. Their old URLs redirect to the new ones:
`/how-to-start/` → `/new-entry/`, `/chemicaleditor/` → `/adding-chemical-equation/`,
`/scheme/` → `/snippets/`.

## Local development

Requires Python 3 (the site is currently built with Python 3.12). Install the tools into a
virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install mkdocs-material==9.7.7 mkdocs-redirects==1.2.2
```

- `mkdocs-redirects` is required by `mkdocs.yml`. Installing `mkdocs-material` alone does not
  pull it in, and the build then stops with `The "redirects" plugin is not installed`.
- Keep `mkdocs-redirects` at 1.2.2. Version 1.2.3 adds a dependency on `properdocs`, a fork of
  MkDocs 1.x, and prints a banner asking you to switch tools.
- Material 9.7.7 requires `mkdocs<2`, so the boxed MkDocs 2.0 warning that Material prints on
  every build is informational.
- There is no `.gitignore` yet, so make sure `.venv/` does not end up in a commit.

Then:

```bash
mkdocs serve                                        # live preview at http://127.0.0.1:8000
mkdocs build --strict --site-dir /tmp/kladde-site   # full build; fails on any warning
```

`--strict` catches links to pages that don't exist and nav entries without a file. It does
**not** check the `src` and `poster` paths inside raw HTML, which is how every image and video
on this site is embedded, so look at every page you touched in the preview. `--site-dir` keeps
the build out of `site/`, which is still tracked in git (see [Deployment](#deployment)).

## Deployment

Nothing deploys automatically; there is no CI. The live site is the `gh-pages` branch, and
`mkdocs gh-deploy` rebuilds it from your working tree and replaces its contents:

```bash
git status                                              # clean, and main is pushed
mkdocs gh-deploy --strict --site-dir /tmp/kladde-site
```

- Deploy from a committed and pushed `main`. Each deploy is a commit on `gh-pages` named
  `Deployed <sha> with MkDocs version: 1.6.1`, and that sha should exist on GitHub.
- `docs/CNAME` holds the custom domain (`kladde.uni-jena.de`, one line, no trailing newline).
  MkDocs copies it into the build; without it, a deploy removes the domain from `gh-pages`.
- Afterwards, open the pages you changed on the live site. GitHub Pages usually publishes
  within a minute.
- Renaming or deleting a page changes a public URL. Add the old file name to `redirect_maps` in
  `mkdocs.yml` so the old address keeps working.
- `site/` on `main` is **not** the deployed site. It is a build from before the September 2026
  restructure and is out of date; don't commit new builds into it.

## Repository layout

```
mkdocs.yml               Site name and URL, theme, plugins, redirects, navigation
docs/
  *.md                   One file per page (see Contents)
  CNAME                  Custom domain for GitHub Pages
  assets/
    images/              Screenshots, toolbar icons, team photos
    videos/              Screen recordings (*.mp4) and their poster images (thumbnail_*.png)
  javascripts/
    extra.js             seekVideo(id, seconds): jumps an embedded video to a timestamp
site/                    Old build output, still tracked; not deployed
LICENSE                  CC BY 4.0 for the content, MIT for the site code
```

## Front end

### Current state

The theme is Material for MkDocs 9.7.7 without customization: `theme:` in `mkdocs.yml` sets only
`name: material`.

- **Look:** the default indigo palette (`--md-primary-fg-color: #4051b5`), light scheme only,
  default logo and favicon. Roboto and Roboto Mono are loaded from Google Fonts.
- **Layout:** no `theme.features` are enabled. The top-level sections (About, How to start,
  Analysis, Report) are collapsible groups in the left sidebar, and the right sidebar is the
  page's table of contents. There are no navigation tabs, no previous/next links in the footer,
  no back-to-top button and no instant (single-page) navigation.
- **Custom code:** no stylesheet (`extra_css` is empty) and no template overrides (`custom_dir`
  is unset). The only script is `docs/javascripts/extra.js`.
- **Markdown:** the MkDocs defaults (`toc`, `tables`, `fenced_code`) plus `footnotes` and
  `md_in_html`, which renders Markdown inside HTML elements that carry a `markdown` attribute.
  Admonitions, attribute lists (`attr_list`) and the `pymdownx.*` extensions are installed along
  with Material but not enabled.
- **Plugins:** `search` and `redirects`.

Most visual decisions live in the pages themselves, as inline HTML:

- 53 inline `style=` attributes size the toolbar icons: 37 in `adding-chemical-equation.md`
  (mostly its 22-row button table), 15 in `new-entry.md` and 1 in `snippets.md`.
- Two more inline styles align the links to the next and previous page at the bottom of
  `new-entry.md` and `snippets.md`.
- Screenshots, team photos and videos are sized with `width="…%"`.
- Three classes exist with no CSS behind them yet, all in `new-entry.md`: `screenshot` on
  screenshots, and `icon` and `hazard` on inline SVG icons.
- Tips and notes are plain `>` blockquotes.
- A few colors are hard-coded: a `<font color="red">` in `snippets.md`, and SVG strokes and
  fills in `new-entry.md`.

### Where customization goes

| To change | Use |
|---|---|
| Colors, light/dark mode | `theme.palette` in `mkdocs.yml`, or override the `--md-*` CSS variables |
| Fonts | `theme.font`; Material's `privacy` plugin can download Google Fonts and serve them from the site itself |
| Logo, favicon | `theme.logo`, `theme.favicon`, with the files in `docs/assets/images/` |
| Navigation and header behavior | `theme.features`, for example `navigation.tabs`, `navigation.footer`, `navigation.top`, `search.suggest` |
| Styles | a stylesheet such as `docs/stylesheets/extra.css`, listed under `extra_css` |
| Scripts | `extra_javascript` (currently `javascripts/extra.js`) |
| Page templates | `theme.custom_dir: overrides`, then an `overrides/main.html` that extends blocks of Material's `base.html` (`extrahead`, `announce`, `header`, `hero`, `tabs`, `content`, `footer`, …) or copies of files from `material/templates/partials/` |
| Markdown features | `markdown_extensions`, for example `admonition`, `attr_list`, `pymdownx.tabbed` |

### Things to keep in mind

- Every image and video is embedded as raw HTML, and MkDocs neither rewrites nor checks those
  paths. Pages are served as directories (`docs/new-entry.md` → `/new-entry/`), so asset paths
  in a page start with `../assets/`. `docs/index.md` is served at the root and needs `assets/…`
  instead: `../assets/…` happens to work at a domain root but breaks under the project URL
  (`/demo_Digifellows/`).
- `seekVideo` is a global function called from inline `onclick` handlers, so it keeps working if
  `navigation.instant` is enabled. Scripts that must run on every page load would then have to
  subscribe to Material's `document$`, because instant navigation swaps pages without reloading
  scripts.
- The media is heavy. The largest videos are 33 MB (`snippets-preset.mp4`), 18 MB, 14 MB, 13 MB
  and 11 MB, and three short clips autoplay. `kevin-jablonka.jpg` is a 3024×3024 photo displayed
  at 20% width.
- Material's MkDocs 2.0 warning says theme overrides will not carry over to MkDocs 2.0. The
  versions pinned above keep the site on MkDocs 1.6.

## Writing content

**A new page**

1. Create `docs/<kebab-case-name>.md` starting with a single `#` title.
2. Add it to `nav:` in `mkdocs.yml`.
3. Link to it from related pages with a relative Markdown link, such as `[Snippets](snippets.md)`.
   For a heading on the same page, link its anchor:
   `[Method 1](#method-1-recommended-first-data-entry-then-chemical-equation)`.
4. Run `mkdocs build --strict --site-dir /tmp/kladde-site`.

**Renaming or removing a page:** add `old-name.md: new-name.md` under `redirect_maps` in
`mkdocs.yml`, then fix the links that the strict build reports.

**A screenshot or icon:** save it in `docs/assets/images/` as `img_<feature>_<descriptor>.png`
and always give it `alt` text:

```html
<img class="screenshot" width="70%" alt="Customized entry title" src="../assets/images/img_title1.png"/>
```

Toolbar icons inside running text use `style="width:1.5em; vertical-align:top;"` instead of a
percentage width.

**A tutorial video:** save it as `docs/assets/videos/<page>-<step>.mp4` with a poster image of
the same size, `thumbnail_<page>-<step>.png`, and embed it with controls:

```html
<video controls muted width="100%" poster="../assets/videos/thumbnail_how-to-start-3-4.png">
  <source src="../assets/videos/how-to-start-3-4.mp4" type="video/mp4">
</video>
```

Short silent clips use `autoplay muted loop playsinline` instead of `controls`. Older files keep
the names they had before the rename: `how-to-start-*` for New Entry, `img_chemicaleditor_*`
for Adding chemical equation, `img_scheme_*` for Snippets.

**A link to a moment in a video:** give the `<video>` an `id` and call `seekVideo` with that id
and the time in seconds:

```html
<video id="snippets-preset" controls muted width="100%" poster="…">…</video>
<a href="javascript:void(0)" onclick="seekVideo('snippets-preset', 172)">▶ 02:52</a>
```

**Links to the next and previous page:** write them as Markdown links inside a `<p>` with
`markdown="span"`, so the strict build still checks them and turns them into page URLs (links
written as plain `<a href>` are never checked). Previous and next on one line:

```html
<p style="display: flex; justify-content: space-between" markdown="span">[← New Entry](new-entry.md) [Sample Analysis →](sample-analysis.md)</p>
```

A single link to the next page uses `style="text-align: right"` instead.

**House style**

- One `#` title per page, `##` for numbered steps, `###` for alternatives. Pages under How to
  start use breadcrumb titles such as `# How to start > New Entry`.
- Imperative voice: "Click", "Enter", "Add".
- UI labels in single quotes ('Prefs', 'Save Data'); column names, fields and typed keys in
  backticks (`mmoles`, `r1`, `_metainfo`).
- `>` blockquotes for tips and warnings.
- German lab terms (*Ansatzberechnung*, *Versuchsanleitung*, *H- & P-Sätze*) are intentional.
- A page that isn't written yet contains only `brewing in progress... ☕`.

## Known gaps

- **Custom domain:** since the repository moved to Steinbeck-Lab, `kladde.uni-jena.de` is not
  assigned in the repository's GitHub Pages settings and shows "Site not found". Its DNS record
  still points at `soyeechan230126.github.io`. The site is live at the
  [project URL](https://steinbeck-lab.github.io/demo_Digifellows/). Clones made before the move
  can update their remote with
  `git remote set-url origin https://github.com/Steinbeck-Lab/demo_Digifellows.git`.
- **Unwritten pages:** Sample Analysis, IR, NMR, MS, Report and the Soyee Chan bio.
- **No dependency file, `.gitignore` or CI:** the tool versions are recorded only in this README,
  and `site/` is still tracked although it is out of date.
- **Media:** see the sizes under [Things to keep in mind](#things-to-keep-in-mind). The three
  team photos have no `alt` text, and the three autoplay clips have no poster.
- **Unused files:** `docs/assets/images/img_chemicaleditor_topright.png`,
  `docs/assets/images/img_hexagon.png`, `docs/assets/videos/tipsandtricks_1.mp4`.
- **Copy and markup:** typos on several pages (for example "gradtitude", "Ansatztberechnung",
  "Assistent"); `playinline` instead of `playsinline` and a `<font>` tag in `snippets.md`; an
  invalid `background-color: b8b8b8` in `new-entry.md`; `eln.md` has two `#` titles;
  two decorative `[Jump to ](#)` links.
- **License attribution:** `LICENSE` still names the work "ELN Documentation".

## License

The documentation content (text, screenshots, videos) is licensed under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), the site code (`mkdocs.yml`,
`docs/javascripts/extra.js`) under [MIT](https://opensource.org/licenses/MIT). Screenshots and
videos show third-party software (the ELN and *OpenChemLib*) whose interfaces and trademarks
remain with their owners. The full terms are in [`LICENSE`](LICENSE) and on the site's
[License page](docs/license.md).
