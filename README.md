# Zikang Xu's Academic Homepage

This is the source code for my academic homepage, built with [PRISM](https://github.com/xyjoey/PRISM) — a modern, configurable personal website template using Next.js, Tailwind CSS, and TypeScript.

## Development

```bash
npm install
npm run dev       # dev server at http://localhost:3000
npm run build     # production build to out/
```

## Content

All site content is in the `content/` directory:
- `config.toml` — global site config, navigation, social links
- `about.toml` — homepage layout (bio, news, featured publications)
- `bio.md` — biography
- `news.toml` — timeline entries
- `publications.bib` — publication list
- `services.toml` — professional services
- `teaching.toml` — teaching experience
- `awards.toml` — honors and awards
- `cv.md` — detailed CV

Chinese translations are in `content_zh/`. The site auto-detects browser language.

## Deployment

Automatically deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `master`.
