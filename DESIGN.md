---
name: Kladde
description: The Laborkladde. User documentation for the FSU Jena electronic lab notebook, set as a squared-paper lab notebook.
colors:
  ink: "#002350"
  ink-soft: "#3a5f91"
  green: "#4e7f0a"
  green-deep: "#3d6d00"
  green-wash: "#dcf0cd"
  gold: "#887440"
  gold-ink: "#6f5b27"
  paper: "#fcfdfe"
  white: "#ffffff"
  grid: "rgb(0 35 80 / 0.075)"
  rule: "rgb(0 35 80 / 0.22)"
  rule-strong: "rgb(0 35 80 / 0.45)"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.6rem, 2.4rem + 6vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.1rem, 1.5rem + 2.4vw, 3.1rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.005em"
  entry-number:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "1.6em"
    fontWeight: 600
    lineHeight: 0.82
    fontFeature: "tnum"
  title:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.22
  subtitle:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.22
  lead:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "112.5%"
    fontWeight: 400
    lineHeight: 1.6
  page-link:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 650
    lineHeight: 1.3
  label:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.2
    fontFeature: "tnum"
  cover-label:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 600
    lineHeight: 1
  index-number:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 0.95
    fontFeature: "tnum"
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "88%"
rounded:
  none: "0"
  hairline: "2px"
spacing:
  cell: "20px"
  print-mat: "6px"
  margin-column: "2.6rem"
  margin-column-wide: "3.5rem"
  measure: "68ch"
  step-gap: "2.75rem"
  print-gap: "2.25rem"
  page-links-gap: "3rem"
components:
  navbar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    height: "3.75rem"
  navbar-cover-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.cover-label}"
    rounded: "{rounded.hairline}"
    padding: "0.28rem 0.7rem 0.22rem"
  search-input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
  menu-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "0.45rem 0.6rem"
  menu-link-active:
    backgroundColor: "{colors.green-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "0.45rem 0.6rem"
  condition-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.3rem 0.65rem 0.25rem"
  language-switch:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.green}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.3rem 0.65rem 0.25rem"
  language-switch-hover:
    textColor: "{colors.green-deep}"
  tick-box:
    backgroundColor: "{colors.white}"
    textColor: "{colors.green-deep}"
    rounded: "{rounded.hairline}"
    size: "1.65rem"
  tick-box-checked:
    backgroundColor: "{colors.green-wash}"
    textColor: "{colors.green-deep}"
    rounded: "{rounded.hairline}"
    size: "1.65rem"
  print-frame:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "{spacing.print-mat}"
  index-entry:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 0.6rem"
    height: "4.25rem"
  index-entry-number:
    textColor: "{colors.green}"
    typography: "{typography.index-number}"
  page-link:
    textColor: "{colors.green}"
    typography: "{typography.page-link}"
    rounded: "{rounded.hairline}"
    padding: "0.6rem 0.35rem"
  page-link-hover:
    textColor: "{colors.green-deep}"
  note-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
  untranslated-notice:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1rem"
  table-cell:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    padding: "0.55rem 0.75rem"
  inline-code:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.hairline}"
---

# Design System: Kladde

## Overview

**Creative North Star: "The Laborkladde"**

The documentation is the squared-paper lab notebook that Kladde replaces. Every page is a notebook entry: white paper with a faint 5 mm grid under everything, FSU-blue ink for type, faculty green for whatever can be followed or done, a thin gold margin rule, and screenshots and recordings taped in with strips of masking tape. Guides are numbered entries (00 for the home page, 01 to 08 for the workflow) and open with a condition line of ruled boxes: entry number, last update, translation state, and a link to the other language.

The reading scene is a phone or tablet on the lab bench under bright light, so the world is light only, high in contrast and generous in size (an 18px root, a 68ch measure, tick boxes with a padded tap area). Density stays calm: one heading, one print, one paragraph at a time, separated by ruled lines and whitespace rather than cards. The notebook's own devices carry the identity (ruled boxes, tabular figures, the margin column, tape); decoration that a notebook would not have stays out.

Colours harmonize with Friedrich Schiller University Jena without following its corporate design, and the university logo is not used. The site refuses the stock docs arrangement of a blue hero, a "Get started" button and three icon cards. Nothing moves on load; only what the reader touches responds.

**Key Characteristics:**
- Squared paper (20px grid) under every page; content surfaces are white or paper, never tinted panels.
- FSU-blue ink for all type; green only for links, the current entry, entry numbers and ticks; gold only as a line.
- A condensed label face for what a notebook would print (cover label, entry numbers, condition line, section names, table heads); a hyperlegible text face for everything read.
- A margin column with a gold rule, holding tick boxes beside numbered steps.
- Screenshots and recordings as taped prints: white mat, hairline border, soft lift, two tilted tape strips.
- Square or 2px corners throughout; ruled lines instead of cards.

## Colors

A cool, near-monochrome notebook page in FSU blue, with one green for action and one gold for the margin.

### Primary
- **FSU Ballpoint Ink** (#002350): all type, headings and the navbar (the notebook cover). The same value is kept as the cover colour for the navbar and the mobile sidebar brand bar. White on ink reads at about 15:1.
- **Faded Ink** (#3a5f91): secondary text only: condition-box labels, index descriptions, table-of-contents links, footer copyright, search placeholder, the tick-box border.

### Secondary
- **Faculty Green, text grade** (#4e7f0a): links, the language switch, page links, entry numbers (page title and index), focus outline, progress bar, caret. It is the Chemisch-Geowissenschaftliche Fakultät colour darkened to read as text (4.81:1 on white); Infima's primary scale is generated from it.
- **Deep Green** (#3d6d00): hover state of every green link, the active table-of-contents link, the active sidebar entry number, the tick mark, the index progress count.
- **Green Wash** (#dcf0cd): the fill of the current sidebar entry, a ticked box, text selection, highlighted code lines and dropdown hover; at 60% opacity, the hover fill of index rows. Text on it stays ink or deep green.

### Tertiary
- **FSU Gold** (#887440): a line, never text: the 1px margin rule down each entry and the border of the untranslated-page notice.
- **Gold Ink** (#6f5b27): gold when it has to be read: sidebar entry numbers, index section names, heading anchor links (about 6.4:1 on paper, 5.6:1 where a glyph crosses a grid line).

### Neutral
- **Notebook Paper** (#fcfdfe): the page background beneath the grid, and the fill of condition boxes, notes, the notice, the search field, the mobile table of contents and dropdowns.
- **Print White** (#ffffff): things laid onto the paper: print mats, tables, tick boxes, inline code, the home cover label.
- **Grid Line** (rgb(0 35 80 / 0.075)): the 20px squares drawn on the html element, two 1px linear gradients.
- **Rule** (rgb(0 35 80 / 0.22)): hairlines inside content: table cells, print borders, inline code, horizontal rules, the sidebar and table-of-contents dividers.
- **Strong Rule** (rgb(0 35 80 / 0.45)): structural lines: condition boxes, index row dividers, the page-links rule, the footer rule, dashed note borders, dropdown and mobile table-of-contents borders, scrollbar thumb.

### Named Rules
**The Ink-and-Green Rule.** Type is ink. Green marks only what can be followed or done: a link, the current entry, an entry number, a tick. If it is green and cannot be pressed or is not a number, it is wrong.

**The Readable Green Rule.** The faculty green #74A740 is never used as a colour on the page; it fails text contrast on white (2.86:1). Text and marks use the text-grade green or deep green.

**The Gold Line Rule.** FSU gold is a line (the margin rule, the notice border). Any gold that is read as text uses gold ink.

**The One Paper Rule.** Light theme only; the colour-mode switch is disabled and the system preference is ignored. The grid shows under every page, and nothing sits on tinted panels: surfaces are paper or white.

## Typography

**Display Font:** Barlow Semi Condensed 500 and 600 (with Arial Narrow, sans-serif), self-hosted
**Body Font:** Atkinson Hyperlegible Next, variable (with system-ui, sans-serif), self-hosted
**Label/Mono Font:** Barlow Semi Condensed for labels; ui-monospace stack for code

**Character:** A condensed, slightly technical label face for what a notebook prints or stamps (cover label, numbers, box labels), paired with a hyperlegible text face chosen for reading instructions at arm's length under bright light. No requests go to Google Fonts.

The root is 112.5% (18px at default settings), so every rem below is 18px.

### Hierarchy
- **Display** (Barlow Semi Condensed 600, clamp(3.6rem, 2.4rem + 6vw, 6rem), line-height 0.95): the home page title only, "Kladde" set as a cover label.
- **Headline** (Barlow Semi Condensed 600, clamp(2.1rem, 1.5rem + 2.4vw, 3.1rem), line-height 1.04, -0.005em, balanced): page titles. On a numbered entry the entry number precedes it at 1.6em in green, tabular, line-height 0.82, aligned on the baseline in a two-column grid. Entry titles carry no section prefix.
- **Title** (Atkinson 700, 1.5rem, line-height 1.22, balanced): h2 and numbered steps ("1. Open your ELN Entry"), 2.75rem above.
- **Subtitle** (Atkinson 700, 1.2rem): h3, 2rem above.
- **Lead** (Atkinson 400, 1.3rem, line-height 1.5, max 52ch; 1.18rem at 600px and below): the home page opening line, "Welcome to Kladde, your electronic lab notebook!".
- **Body** (Atkinson 400, 18px, line-height 1.6, max 68ch): paragraphs, lists (0.35rem between items), notes at 1rem.
- **Label** (Barlow Semi Condensed 600, 0.95rem, line-height 1.2, tabular figures): condition-line values and the language switch; box labels at 500 in faded ink. The same face at 600 sets sidebar section names (1.08rem), table heads (1.02rem), footer titles (1.05rem) and sidebar entry numbers; index section names at 500.
- **Index number** (Barlow Semi Condensed 600, 2.25rem, line-height 0.95, tabular; 1.9rem on phones): entry numbers in the home index.
- **Emphasised links** (Atkinson 650): page links at 1.12rem, timestamp links, the active table-of-contents link. Navbar links are Atkinson 600 at 1rem.
- **Code** (ui-monospace stack, 88%): inline keys and field names as typed.

### Named Rules
**The Printed Label Rule.** Barlow Semi Condensed sets only what a notebook would print: the cover label, page titles, entry numbers, box labels, section names, table heads. Anything read as a sentence, including h2 and h3, is Atkinson.

**The Figures-as-Data Rule.** Entry numbers, dates, table figures, step counts and timestamps use tabular figures; entry numbers are always two digits with a leading zero (00 to 08).

**The Printed-Not-Written Rule.** No handwriting or script faces anywhere; the ink metaphor lives in colour, not in letterforms.

## Layout

Docusaurus's three-column docs layout on squared paper: sidebar index, the entry, and the table of contents, collapsing below 997px to a single column with the menu in a drawer and the table of contents in a bordered box at the top of the entry.

- **Grid:** 20px (5 mm) squares on the html element; nothing aligns to it strictly, it is paper, not a layout grid.
- **Margin column:** each doc page is indented by the margin column (2.6rem; 3.5rem from 997px). A 1px gold rule runs the full height of the article 0.8rem left of the text. Numbered steps place their tick box at the outer edge of this column. The page links align with the text, not the margin.
- **Measure:** paragraphs, lists, notes and the notice stop at 68ch; the home lead at 52ch; the home index at 48rem.
- **Rhythm:** h2 and steps 2.75rem above, h3 2rem, prints 2.25rem above and 2rem below (1.75rem above portraits, 1.25rem inside notes), notes 1.5rem, page links 3rem above a strong rule with 1.1rem padding.
- **Condition line:** the first thing in every page, above the mobile table of contents. On wider screens its boxes sit in one right-aligned row sharing borders; at 600px and below they stack into a full-width column, label left and value right.
- **Home index:** full-width rows of number, title, section and description. Wide: number column 3.5rem, section name right-aligned. At 600px and below: number column 2.75rem, section name drops under the title.
- **Page links:** on wider screens previous and next share one row; at 600px and below they stack, previous at the left and next at the right on the row below.
- **Prints on phones:** a print given a percentage width goes full width at 600px and below.
- **Breakpoints:** 600px (phone) and 997px (desktop sidebar, wide margin column).

### Named Rules
**The Margin Column Rule.** Every entry has a margin column with a gold rule, and only tick boxes live in it. Content never enters the margin; the margin never holds decoration.

## Elevation & Depth

Flat paper. Depth comes from ruled lines and from white things laid onto paper; the only resting shadow belongs to the taped print, which is a physical object stuck onto the page. The navbar carries no shadow (a 1px dark bottom line instead), and the progress bar's glow is removed. The locale dropdown, a transient overlay, keeps a small shadow.

### Shadow Vocabulary
- **Taped print lift** (`box-shadow: 0 1px 2px rgb(0 35 80 / 0.1), 0 3px 6px -3px rgb(0 35 80 / 0.16)`): screenshots, portraits and recordings in their white mat.
- **Overlay** (`box-shadow: 0 2px 4px rgb(0 0 0 / 0.2)`): the locale dropdown menu only.

### Named Rules
**The Taped Print Rule.** A shadow means "this is stuck onto the paper". Prints get it; cards, boxes, buttons and headers do not.

## Shapes

Square paper geometry. Corners are square (condition boxes, prints, notes, the notice, index rows, tables) or a 2px hairline radius where Infima draws a control (menu links, page links, tick boxes, inline code, search field, dropdown, mobile table of contents, the navbar label). Borders are 1px rules; the tick box is 1.5px; the home cover label is a 2px ink border with a 1px ink outline 5px outside it, and the navbar label is a 1px ink outline inset 4px, both reading as a label stuck on a notebook cover. Notes use a 1px dashed border. Tape strips are the only irregular silhouettes: rendered PNG strips (440 by 128) with torn ends, placed 13px above the print's top edge, width clamp(54px, 17%, 96px), tilted between -3deg and 3deg. Icons are inline SVG line drawings on a 24px box: round caps and joins, stroke 1.75 (arrows) or 2.4 (check).

### Named Rules
**The Hairline Corner Rule.** Nothing is rounded beyond 2px. No pills, no rounded cards.

## Components

### Buttons
The site has no filled buttons. Actions are green underlined links, and the one pressable control of its own is the tick box.

### Navigation
- **Navbar (the cover):** ink background, 3.75rem tall, a 1px rgb(0 0 0 / 0.25) bottom line, no shadow. The title "Kladde" is a paper label with an inset ink outline in the label face. Links are white Atkinson 600; hover and active turn green wash, hover adds a 1px underline, the active section a 2px underline offset 0.35em. The search field is a paper box with a 2px radius. The mobile drawer is paper with an ink brand bar.
- **Sidebar index:** a ruled right edge; category names in the label face; workflow entries numbered by a CSS counter, two digits in gold ink before the title. Links have no underline until hover. The current entry has a green-wash fill, bold title and deep green number. The sidebar does not animate.
- **Table of contents:** 0.92rem, faded ink links, the active heading in deep green at 650.
- **Footer:** transparent over the grid, a strong top rule, label-face titles, faded ink copyright.

### Condition Line (signature)
The entry-header strip: a row of ruled paper boxes that share borders (1px strong rule, overlapping by 1px), each a label in faded ink (500) and a value in ink (600): Entry (00 on home), Updated (a localized short date), and German or Language (translation state). The last box is the language link: green label-face text with an SVG arrow, deep green and underlined on hover. On German pages still showing English, a notice follows: paper fill, 1px gold border, 1rem ink text, max 68ch.

### Margin Tick Box (signature)
Every numbered step heading ("1. ...") gets a 1.65rem square checkbox in the margin column: white fill, 1.5px faded ink border, 2px radius, a transparent tap area extended 0.55rem on all sides. Hover turns the border green. Checked: green border, green-wash fill, and a deep green check that draws its stroke in 240ms. The state is stored on the device, and the home index shows "n of m steps ticked" in deep green under that entry.

### Taped Print (signature)
Every content image without an inline style and every video is wrapped in a print: white mat with 6px padding, 1px rule border, the print lift shadow, width fitted to the media up to 100%. Two tape strips sit over the top edge, cycling through three arrangements of the three tape PNGs per page so neighbouring prints differ. Portraits are min(15rem, 70%) wide. Inline toolbar icons (images with an inline style) stay untaped in the text. The print itself is never rotated; only the tape tilts.

### Home Index (signature)
An ordered list of the workflow entries between strong rules, one full-width row each, min 4.25rem tall: a large green number, the title in Atkinson 700 at 1.15rem, the section name in gold ink, the description in faded ink. The whole row is the link; it has no underline, and hover lays a 60% green-wash fill over it in 160ms.

### Page Links
Previous and next at the end of each entry, under a strong rule: green Atkinson 650 at 1.12rem, underlined 1px (2px and deep green on hover) with a faint ink hover fill (rgb(0 35 80 / 0.045)), an SVG arrow before the previous title and after the next title. Labels come from the target page title or from `pagination_prev_label` / `pagination_next_label` in front matter. The "Previous" and "Next" sublabels are visually hidden but still read by screen readers.

### Notes and Tables
- **Notes (blockquotes):** a 1px dashed strong-rule box on paper, 0.75rem by 1rem padding, 1rem ink text. There is no coloured side bar.
- **Tables:** white, collapsed 1px rule borders on every cell, 0.55rem by 0.75rem padding, top-aligned, tabular figures, label-face heads with a faint ink tint (rgb(0 35 80 / 0.04)), no stripes.
- **Inline code:** white, 1px rule border, 2px radius, ink text.
- **Timestamp links:** green Atkinson 650 with tabular figures, led by a play-in-circle SVG mask in the current colour; they seek the recording on the page.

### Links and Focus
Links in text are green, underlined 1px offset 0.18em, 2px and deep green on hover. Every focusable element shows a 3px solid green outline offset 2px on keyboard focus.

### Motion
Only what is touched moves: tick border and fill (150ms), check stroke (240ms), page-link fill (150ms), index row fill (160ms), all on cubic-bezier(0.16, 1, 0.3, 1). Nothing animates on load. Reduced motion removes these transitions.

## Do's and Don'ts

### Do:
- **Do** set every page on paper (#fcfdfe) with the 20px grid (rgb(0 35 80 / 0.075)), and lay white (#ffffff) only under things stuck onto it: prints, tables, tick boxes, code.
- **Do** keep type in ink (#002350) and reserve text-grade green (#4e7f0a) for links, entry numbers, the current entry and ticks, with deep green (#3d6d00) on hover.
- **Do** open every doc page with the condition line, and give each workflow entry a two-digit number in tabular figures.
- **Do** wrap screenshots and recordings as taped prints (6px white mat, 1px rule, print lift, two tilted tape strips) and keep the print itself square to the page.
- **Do** separate content with 1px rules (rgb(0 35 80 / 0.22) inside content, rgb(0 35 80 / 0.45) for structure) and whitespace.
- **Do** keep paragraphs to 68ch, the root at 18px and tap targets at least the tick box's padded area.
- **Do** stack the page links at 600px and below (previous left, next right on the row below) and keep them on one row above that.
- **Do** use inline SVG line icons (24px box, round caps, stroke 1.75) coloured by currentColor.

### Don't:
- **Don't** use the faculty green #74A740 as a colour on the page, or FSU gold #887440 as text.
- **Don't** add a dark theme or a colour-mode switch.
- **Don't** use the official university logo or copy the university's corporate design.
- **Don't** build the stock docs arrangement of a blue hero, a "Get started" button and three icon cards.
- **Don't** use handwriting or script faces.
- **Don't** flag notes with a coloured side bar; box them in dashes.
- **Don't** put shadows on anything but taped prints (and the transient locale dropdown), and don't round corners beyond 2px.
- **Don't** put small labels or eyebrows above headings, prefix entry titles with their section ("How to start >"), or use emoji or text glyphs as icons.
- **Don't** animate anything on load; motion answers a touch.
