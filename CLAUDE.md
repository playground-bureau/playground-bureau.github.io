# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Playground Bureau, an organization that hosts community events and festivals. The site uses vanilla HTML, CSS, and JavaScript with two distinct visual design systems: a satirical government agency portal and retro Comic Sans festival pages.

## Architecture & Structure

- **Static HTML Site**: No build process or framework - pure HTML/CSS/JS served via GitHub Pages (Jekyll)
- **Page Structure**: Each page is a standalone HTML file in the root directory
- **Assets Organization**:
  - `/assets/css/`: Stylesheets organized by design system and page
  - `/assets/js/`: JavaScript files for interactive features
  - `/assets/images/`: Images organized by section/feature
  - `/assets/fonts/`: Custom fonts (Comic Sans)
- **Non-deployed files**: `_archive/` directory is excluded by Jekyll on GitHub Pages (underscore prefix)

## CSS Architecture

Two design systems coexist:

### Government Portal (current site design)
- `base.css` — shared reset, utilities, `--gov-*` color variables
- `gov-portal.css` — header, footer, nav, layout, typography (Georgia/serif)
- `gov-content.css` — text-block components for content pages

### Festival Pages (per-edition, archived after event)
- `base.css` — shared reset and utilities
- `festival-base.css` — shared Comic Sans styles, `--festival-*` color palette, layout components
- `festival-2024.css` / `festival-2025.css` — edition-specific overrides (background color, animations, etc.)
- `workshops-2025.css` — workshop page styles

### Archived
- `home-2024.css` — the old 2024 homepage design (used only by `index-2024.html`)

## Key Features

- **Gov Layout Injection**: `gov-layout.js` injects the government header/subheader from a single template, configured via `data-lang` and `data-lang-url` attributes on a `<div id="gov-header">` placeholder
- **Random Logo System**: `random-logo.js` randomly selects from 15 spinning logo GIFs on page load
- **Two Design Systems**: Gov-portal pages use institutional green/yellow/serif design; festival pages use Comic Sans and bright colors
- **Festival Pages**: Multiple pages for different festival editions with ticket info, lineups, and details

## Development Guidelines

- **No Build Process**: Edit HTML/CSS/JS files directly
- **Browser Compatibility**: Site intentionally mimics old browser constraints while functioning in modern browsers
- **Image Optimization**: Banner images should be optimized (e.g., `banner-2025-optimized.png`)
- **Gov pages**: Load `base.css` + `gov-portal.css` (+ `gov-content.css` for content pages) + `gov-layout.js`
- **Festival pages**: Load `base.css` + `festival-base.css` + edition-specific CSS

## Common Tasks

- **Add New Gov Page**: Create HTML file in root with `<div id="gov-header" data-lang="en" data-lang-url="..."></div>` placeholder, link `base.css`, `gov-portal.css`, `gov-content.css`, and `gov-layout.js`
- **Add New Festival Page**: Create HTML file, link `base.css`, `festival-base.css`, and edition CSS
- **Update Gov Header**: Edit `assets/js/gov-layout.js` (single source of truth)
- **Add Images**: Place in appropriate `/assets/images/` subdirectory
- **Hide Page from Deployment**: Move to `_archive/` directory
