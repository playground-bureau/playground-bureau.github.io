# Design Document — Government Agency Redesign (2026)

## Overview

The Playground Bureau website has been redesigned from a "90s personal blog" aesthetic to a **colorful 90s government website** aesthetic. The Bureau is a fictional government agency under the "Ministry of Happiness," and the design now reflects that — institutional structure with a playful, colorful palette.

## Design Philosophy

- **Government website structure** — official header banners, bulleted navigation links, section headers with underlines, horizontal rules, official footers, "PUBLIC ADVISORY" notices
- **Colorful and playful** — NOT a drab gray government site. Uses bright yellows, greens, and light blues. The humor comes from the contrast between the deadpan institutional framing and the absurd content
- **90s web** — still retro, still old-school. Georgia/Times New Roman fonts, basic HTML layout, no modern CSS frameworks. Looks like you found a forgotten government intranet from 1997, but one belonging to a very unusual agency

## Color Palette

### Primary
- **Yellow**: `#FFDB5D` — accents, subheader stripe, highlights, badges
- **Light Blue**: `#DFFFF4` — page background, callout boxes

### Greens (various roles)
| Hex | CSS Variable | Usage |
|-----|-------------|-------|
| `#0f470b` | `--gov-green-dark` | Header banner background, darkest text |
| `#174d12` | `--gov-green-deep` | Footer background |
| `#24551b` | `--gov-green-forest` | Subtle text, seal label |
| `#226b07` | `--gov-green-primary` | Links, menu title background, borders |
| `#2b710f` | `--gov-green-mid` | Available for variety |
| `#348a0e` | `--gov-green-bright` | Link hover, NEW badge, active elements |
| `#367011` | `--gov-green-vivid` | Available for variety |
| `#4e7313` | `--gov-green-olive` | Available for variety |
| `#5d7514` | `--gov-green-sage` | Available for variety |
| `#5d9230` | `--gov-green-light` | Lighter accents |
| `#72852c` | `--gov-green-muted` | Borders on notices |

### Festival Colors (defined in `festival-base.css`)
| Hex | CSS Variable | Used by |
|-----|-------------|---------|
| `#0016BE` | `--festival-blue` | Ticket links |
| `#FFBC00` | `--festival-yellow` | Festival 2024 background |
| `#FF00AC` | `--festival-magenta` | Available |
| `#52CCFF` | `--festival-cyan` | Available |
| `#FFA1E3` | `--festival-pink` | Available |
| `#00A448` | `--festival-green` | Ticket link hover |
| `#F9ECB6` | `--festival-vanilla` | Available |
| `#7EC86E` | `--festival-sage` | Festival 2025 background |

## Page Structure

### Government Header (all gov-portal pages)

The header is injected by `gov-layout.js` from a `<div id="gov-header">` placeholder with `data-lang` and optional `data-lang-url` attributes. Single source of truth for the header template.

```
┌─────────────────────────────────────────────────┐
│ [seal] PLAYGROUND BUREAU          English | CA  │  ← dark green bg, yellow title
│        Ministry of Happiness                    │
├─────────────────────────────────────────────────┤
│ ═══════════════════════════════════════════════  │  ← gradient hr (green → yellow)
│ An Official Website of the Playground Bureau    │  ← yellow subheader stripe
└─────────────────────────────────────────────────┘
```

### Homepage Layout
```
Welcome to the Official Playground Bureau Web Portal
Your trusted authority on citizen Goodtimes levels
───────────────────────────────────────────────────
[Spinning Logo]    │ BUREAU SERVICES & INFORMATION
Official Bureau    │ ● Monkey Business 3 — Annual Operations [NEW]
    Seal           │ ● Archive of Past Operations
                   │ ● Bureau History & Mission
                   │ ● Official Bureau Instagran
                   │ ● Public Inquiries & Correspondence

▎ You are visitor # [counter]

PUBLIC ADVISORY: The Separatoxin epidemic is ongoing...
```

### Navigation Style
- Left-bordered link list (border appears on hover)
- Green text links, hover highlights with light blue background
- No more Windows 95 button style — replaced with clean government link list

### Footer
Dark green background with light green text. Includes copyright notice with bureaucratic humor ("Unauthorized measurement of Goodtimesium levels is a violation of Bureau Directive 12.7(b)").

## CSS Architecture

### Government Portal Design System
- `base.css` — shared reset, utilities, `--gov-*` color variables, image helpers
- `gov-portal.css` — header, footer, nav, layout, typography (Georgia/serif), alert marquee, animations
- `gov-content.css` — text-block containers, navigation buttons, section headings for content pages

### Festival Design System
- `festival-base.css` — shared Comic Sans font-face, `--festival-*` color palette, layout containers, ticket links, program lists, language toggle
- `festival-2024.css` — 2024-specific: yellow background, sold-out color
- `festival-2025.css` — 2025-specific: sage background, shining text animation, image overrides, final ticket link styles
- `workshops-2025.css` — workshop page layout

### Archived
- `home-2024.css` — old 2024 homepage design (retro blog aesthetic)

### JS
- `gov-layout.js` — injects gov header + hr + subheader from template, configured by data attributes
- `random-logo.js` — randomly selects one of 15 spinning logo GIFs
- `important-reminder-2.js` — checkbox/consent gate for ticket link

## Typography
- **Gov pages**: Georgia, serif (feels institutional but readable)
- **Festival pages**: Comic Sans via custom @font-face (CustomComicSans / CustomComicSansBold)

## Key Design Elements
- **Gradient HR**: `linear-gradient(to right, dark green, bright green, yellow)` — colorful but official
- **Left-border accent**: Counter boxes and notices use `border-left: 4px solid green` — classic government callout pattern
- **NEW badge**: Green background with yellow text, still blinks (some things never change)
- **"Official Bureau Seal" label**: Below the spinning logo — deadpan humor
- **Print CSS**: "Printing government documents without authorization may violate Bureau Directive 7.3.2"

## Non-deployed Pages
- `_archive/hq.html` — community space project page, excluded from GitHub Pages by Jekyll's `_` prefix convention
