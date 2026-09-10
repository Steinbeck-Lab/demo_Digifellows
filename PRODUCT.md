# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Docusaurus (React), chosen by the user over a custom Vite React app, a Next.js static export and
staying on MkDocs. The site is built to static files and deployed to GitHub Pages. It replaces the
current MkDocs + Material for MkDocs build.

## Users

- Primary: Bachelor chemistry students at Friedrich Schiller University Jena in their first
  synthetic-chemistry lab practical (OC2-Praktikum), documenting their experiments in Kladde.
- Also: researchers at the university who work with Kladde.

## Product Purpose

Kladde is the electronic lab notebook (ELN) used at Friedrich Schiller University Jena, built on the
open-source cheminfo platform and customized for students and researchers there. This site is its
user documentation: step-by-step guides, annotated screenshots and short screen recordings that walk
students through the complete workflow of an ELN entry. The redesign exists to make the site
sustainable to maintain and pleasant to use for students and researchers.

## Positioning

The only documentation written for Kladde as customized at FSU Jena and for the lab practical it
serves: it follows the exact entry workflow students use (reaction code, chemical equation,
*Ansatzberechnung*, GHS data, snippets) and shows it with screenshots and recordings of the real
system.

## Operating Context

- In the practical, students open an ELN entry with a reaction code, add reagents and draw the
  reaction in the *OpenChemLib* editor, calculate amounts (*Ansatzberechnung*) from their
  *Versuchsanleitung*, pull GHS pictograms and H- and P-statements, write the procedure with
  snippets, and set the entry status. Sample analysis (melting point, GC, IR spectra), IR/NMR/MS
  tools and the report follow.
- The workflow uses external services: GESTIS, CAS SciFinder (uni-jena.de login) and PubChem.

## Capabilities and Constraints

- Content: 15 pages. Welcome; About (What is ELN?, team pages for Prof. Dr. Christoph Steinbeck,
  Dr. Kevin Maik Jablonka, Dr. Kohulan Rajan and Soyee Chan, License); How to start (New Entry,
  Adding chemical equation, Snippets); Analysis (Sample Analysis, IR, NMR, MS); Report. Sample
  Analysis, IR, NMR, MS, Report and the Soyee Chan bio are placeholders ("brewing in progress... ☕").
- Media carries the instructions: screenshots and toolbar icons, screen recordings (MP4) with poster
  images, and timestamp links that jump a recording to a moment.
- Hosting: static site on GitHub Pages (repository Steinbeck-Lab/demo_Digifellows) with the custom
  domain kladde.uni-jena.de.
- URLs: existing URLs keep working, including /new-entry/, /adding-chemical-equation/, /snippets/
  and the redirects from /how-to-start/, /chemicaleditor/ and /scheme/.
- Languages: English and German, every page in both. German text does not exist yet: the site gets
  the bilingual structure and a German interface, and German pages show the English content with a
  notice until the team translates them.
- Maintainers: developers comfortable editing React/JSX. Sustainable maintenance is a primary goal.
- Terminology: German lab terms stay inline in English text (*Ansatzberechnung*,
  *Versuchsanleitung*, *H- & P-Sätze*); UI labels are quoted as they appear in Kladde.
- License: documentation content CC BY 4.0, site code MIT. Screenshots and recordings show
  third-party software whose interfaces and trademarks remain with their owners.
- Open decisions: the accessibility target is not decided; reassigning the custom domain in the
  GitHub Pages settings after the repository transfer is deferred.

## Brand Commitments

- Name: Kladde.
- Kladde has its own identity that harmonizes with Friedrich Schiller University Jena and the
  Chemisch-Geowissenschaftliche Fakultät. The university's corporate design is not binding, and the
  official university logo is not used.
- Credits stay: the cheminfo team, Zakodium and the C6H6 NMR Repository.

## Evidence on Hand

- Guides: docs/*.md. Screenshots, icons and team photos: docs/assets/images/. Recordings and poster
  images: docs/assets/videos/.
- License texts: LICENSE and docs/license.md.
- University colour references, read from the live stylesheets of uni-jena.de and
  chemgeo.uni-jena.de on 2026-09-10: FSU blue #002350 (also the sites' theme colour), FSU gold
  #887440, and the Chemisch-Geowissenschaftliche Fakultät colour #74A740. Both sites set type in
  Roboto / Roboto Flex.
- Absent, not to be fabricated: German page text, content for the placeholder pages, a photo and bio
  for Soyee Chan, testimonials or usage figures, and an official university logo.

## Product Principles

1. Maintainable first: content lives in Markdown/MDX, and framework defaults beat custom machinery.
2. The workflow is the structure: pages follow the order students work through an entry.
3. Show the real system: screenshots and recordings of Kladde carry the instructions.
4. Two languages, one structure: English and German share navigation and media, and an untranslated
   page falls back to English visibly rather than disappearing.
5. At home at FSU Jena without copying it: related to the university, recognizably Kladde.
