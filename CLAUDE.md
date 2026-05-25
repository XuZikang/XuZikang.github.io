# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Run Commands

```shell
# Install dependencies (requires Ruby + Bundler 2.2.19)
gem install bundler -v 2.2.19
bundle install

# Start development server with live reload (http://localhost:4000)
bash run_server.sh
# or directly:
bundle exec jekyll serve -l

# Build for production (outputs to _site/)
bundle exec jekyll build
```

There are no automated tests. Test changes manually by running the dev server and visually inspecting the output.

## Architecture

This is **Zikang Xu's academic homepage** — a **single-page site** built with Jekyll and hosted on GitHub Pages. It derives from the [acad-homepage](https://github.com/RayeRen/acad-homepage.github.io) project, which itself is a customized fork of the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) Jekyll theme.

### Content: One page, one file

All content lives in **`_pages/about.md`**. The site has no blog posts and no subpages. The navigation bar links to anchor IDs within this single page.

**Adding/changing content means editing `_pages/about.md`.** The file uses YAML front matter (`permalink: /`) and is organized into sections separated by `---` horizontal rules with heading IDs (e.g., `#about-me`, `#-news`, `#-publications`).

Navigation entries are defined in **`_data/navigation.yml`** as anchor links. When you add a new section heading with an ID to `about.md`, add a corresponding entry here.

### Layout & partials

- **`_layouts/default.html`** — the only layout; extends Minimal Mistakes `compress` layout with a sidebar + main content structure
- **`_includes/`** — partials for `<head>`, masthead (nav bar), sidebar (author profile card), analytics, SEO meta tags, and dynamic Google Scholar stats

### Customizations on top of the Minimal Mistakes theme

- Single-page layout (blog/post features stripped out)
- Custom styles in `assets/css/main.scss` (`.paper-box` for publication entries, anchor scroll offsets, badges)
- `collapse.js` / `collapse.css` for accordion/collapsible widgets
- `academicons` icon font for academic social links (ORCID, Google Scholar)
- MathJax 2.7.4 for LaTeX rendering (configured in `_includes/head/custom.html`)
- Google Scholar citation stats fetched client-side from jsDelivr CDN
- Base target `_blank` for all external links

### Google Scholar crawler

A Python script at `google_scholar_crawler/main.py` uses the `scholarly` library to scrape citation data. A GitHub Actions workflow (`.github/workflows/google_scholar_crawler.yaml`) runs this daily at 8:00 UTC and pushes results to the `google-scholar-stats` branch. The site reads these stats via jsDelivr CDN (`google_scholar_stats_use_cdn: true` in `_config.yml`).

This directory is excluded from the Jekyll build.

### Key config (`_config.yml`)

- **Markdown**: kramdown with GFM input, Rouge for syntax highlighting
- **Sass**: compressed output, source in `_sass/`
- **Excluded from build**: `google_scholar_crawler`, `.github`, `docs`, and various dev artifacts
- **Included**: `_pages` directory, `.htaccess`, `files`
- **Plugins**: jekyll-paginate, jekyll-sitemap, jekyll-gist, jekyll-feed, jekyll-redirect-from
