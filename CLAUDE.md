# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Run Commands

```shell
# Install dependencies
npm install

# Start development server with live reload (http://localhost:3000)
npm run dev

# Build for production (outputs to out/)
npm run build
```

There are no automated tests. Test changes manually by running the dev server and visually inspecting the output.

## Architecture

This is **Zikang Xu's academic homepage** — built with [PRISM](https://github.com/xyjoey/PRISM), a Next.js + Tailwind CSS + TypeScript template for academic personal websites.

### Content

All site content lives in `content/` as configuration-driven files:

- **`content/config.toml`** — global site config, author info, social links, navigation
- **`content/about.toml`** — homepage layout (bio, news, featured publications sections)
- **`content/bio.md`** — biography markdown
- **`content/news.toml`** — timeline/news entries
- **`content/publications.bib`** — all publications in BibTeX format
- **`content/services.toml`** — professional services (reviewer roles)
- **`content/teaching.toml`** — teaching experience
- **`content/awards.toml`** — honors and awards
- **`content/cv.md`** — detailed CV markdown

Chinese translations are in `content_zh/` with the same filenames. The site falls back to `content/` if a localized file is missing.

**Adding/changing content means editing files in `content/` (or `content_zh/`).** No code changes required for content updates.

### Pages

Navigation entries are defined in `content/config.toml` as `[[navigation]]` entries. New pages can be added by creating a TOML file in `content/` and adding a nav entry. Three page types:
- `text` — renders Markdown content
- `card` — renders a list of cards
- `publication` — full publication list with filters

### Publication display

Set `selected={true}` in a BibTeX entry to show it in "Selected Publications" on the homepage. Use `code` field for code links, `preview` for thumbnail images, `description` for summaries.

### Internationalization (i18n)

- Default language: `content/` (English)
- Chinese: `content_zh/`
- Configured in `content/config.toml` under `[i18n]`
- Auto-detects browser language, falls back to default if localized file missing

### Layout & components

- **`src/app/`** — Next.js App Router pages
- **`src/components/`** — React components (home page sections, layout, publications list, UI)
- **`src/lib/`** — utility functions (config/bibtex parsers, i18n)
- **`public/`** — static assets (profile photo, favicon, paper PDFs)

### Deployment

Automatically deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `master`. Build generates a static `out/` directory. Requires `.nojekyll` file (already present) since GitHub Pages would otherwise ignore `_next/` directory.

### Google Scholar crawler

A Python script at `google_scholar_crawler/main.py` uses the `scholarly` library to scrape citation data. A GitHub Actions workflow (`.github/workflows/google_scholar_crawler.yaml`) runs this daily at 8:00 UTC and pushes results to the `google-scholar-stats` branch.
