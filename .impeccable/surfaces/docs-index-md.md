---
version: 1
slug: "docs-index-md"
primary_target: "docs/index.md"
related_targets: ["docs/new-entry.md"]
---

# Kladde documentation site

## Scope

The whole documentation site built with Docusaurus: home page, the How to start entries, About,
Analysis and Report pages, in English and German. Visitor mode: Read.

## Audience and task

Students in the OC2 practical, reading on a phone or tablet at the bench between steps, plus
researchers. They learn what Kladde is, follow the entry workflow as a path, and later look up any
step fast.

## Proof and content

Existing guides, screenshots, screen recordings with timestamp links, German lab terms. No German
text yet: German pages show English content with a notice.

## Constraints

Light, high-contrast pages for bright lab light; large tap targets; existing URLs keep working;
Docusaurus defaults extended through theme CSS and a few swizzled components rather than a custom
app.

## Direction contract

THESIS: The docs are the Laborkladde that Kladde replaces: every guide is a numbered, dated notebook
entry. It refuses the stock docs arrangement of a blue hero, a "Get started" button and three icon
cards.

OWN-WORLD: White notebook paper with a faint 5 mm cool-blue grid under everything, light enough that ink reads cleanly across it on a phone;
FSU-blue ballpoint ink for type; faculty green for links, the current entry and ticks; a thin
FSU-gold margin rule; screenshots and recordings taped in with tape strips; entry-header boxes for
entry number, last update and language; figures in tabular numerals and ruled columns. No
handwriting fonts.

STORY: The student learns in two lines what Kladde is, opens entry 01, works through the entries
ticking steps off in the margin, and on the next lab day finds any step again from the index.

FIRST VIEWPORT: At 390 px: an entry-header strip on top (entry 00, updated date, EN/DE switch);
"Kladde" set large in ink with a two-line intro; below it the index as full-width entry labels
01-08 (number, title, section) running past the fold, entry 01 the primary action within thumb
reach. Desktop adds the persistent sidebar index and a wider margin column.

FORM: Laborkladde, candidate 5 of 7 on the ordered list; seed key 2959b12f. Signature interaction:
margin ticks on numbered steps, stored on the device and reflected as progress in the index.
Motion: only what is touched moves; nothing animates on load.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Raises kept from declined challengers

- Expedition Ice Press: every page carries a condition line (entry number, last updated, German
  text present or not).
- Exposure Record: amounts, equivalents, H- and P-codes and entry numbers set as data in tabular
  figures and ruled columns.
- Box Archive Wall: on phones the index re-shelves to one column of full-width entry labels.
- Fly-posted Hoarding: each entry opens with its number at display size; everything else stays
  quiet.
- Alphabet Storm: one event per phone viewport; nothing animates on load.

## Unresolved decisions

- Accessibility target (PRODUCT.md open decision).
- Search: a local search plugin replaces the MkDocs search, if one supports Docusaurus 3.10 and German.
