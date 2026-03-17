# Ningsen Wang - Personal Academic Website

Modern multi-page personal research site built with Astro + TypeScript + Tailwind CSS, designed for static deployment on GitHub Pages.

## Stack

- Astro (static output)
- TypeScript
- Tailwind CSS
- Astro Content Collections (`blog`, `projects`, `publications`, `news`)
- Markdown + MDX blog posts
- RSS feed (`/rss.xml`)
- Sitemap generation

## Local Development

Prerequisites:

- Node.js 20.19+ (or 22+)
- npm

Install and run:

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Project Structure

- `src/pages/` - route pages (`/`, `/projects`, `/publications`, `/blog`, `/about`, `404`)
- `src/components/` - reusable UI components
- `src/layouts/` - shared page layout + SEO tags
- `src/data/site.ts` - centralized site/profile/navigation data
- `src/content/blog/` - blog posts (`.md` / `.mdx`)
- `src/content/projects/` - project entries (`.json`)
- `src/content/publications/` - publication entries (`.json`)
- `src/content/news/` - news entries (`.json`)
- `public/assets/` - static assets (CV, headshot, etc.)

## Content Editing Guide

### Update profile/header/navigation

Edit:

- `src/data/site.ts`

This controls:

- Name, role line, short bio
- Affiliation pills
- CTA links (CV, email, GitHub, LinkedIn)
- Navbar links
- Footer links
- About page narrative/timeline/collaboration note

### Add a blog post

Create a new file in `src/content/blog/`:

- `my-new-post.md` or `my-new-post.mdx`

Required frontmatter:

```yaml
title: "Post title"
date: 2026-03-17
summary: "1-2 sentence summary"
tags:
  - tag1
  - tag2
readingTime: "5 min read" # optional
sample: false # optional
draft: false
```

### Add a project

Create a JSON file in `src/content/projects/`, example:

```json
{
  "title": "Project Title",
  "summary": "Short summary",
  "tags": ["Medical AI", "VLM"],
  "period": "2026.01 - 2026.06",
  "role": "Your role",
  "sortDate": "2026-06-01",
  "featured": false,
  "isPlaceholder": false,
  "links": {
    "paper": "https://...",
    "code": "https://..."
  }
}
```

### Add a publication

Create a JSON file in `src/content/publications/`, example:

```json
{
  "title": "Paper Title",
  "authors": ["Author A", "Author B"],
  "venue": "ICLR",
  "year": 2026,
  "status": "Accepted",
  "type": "Conference",
  "summary": "Optional summary",
  "featured": true,
  "isPlaceholder": false,
  "links": {
    "paper": "https://...",
    "code": "https://..."
  }
}
```

### Add a news item

Create a JSON file in `src/content/news/`, example:

```json
{
  "date": "2026-03-17",
  "title": "Short headline",
  "detail": "One concise sentence",
  "link": "https://..."
}
```

## GitHub Pages Deployment

Workflow file:

- `.github/workflows/deploy.yml`

What it does on push to `main`/`master`:

1. Installs dependencies
2. Builds the static site with Astro
3. Uploads `dist/` as Pages artifact
4. Deploys using `actions/deploy-pages`

GitHub settings required once:

1. Go to repository `Settings -> Pages`
2. Set **Source** to **GitHub Actions**

## Notes

- This site is fully static and GitHub Pages compatible.
- Existing known facts from the original homepage are reused.
- Missing details are intentionally represented with explicit placeholders (instead of invented content).


