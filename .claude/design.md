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

### Legacy Colors
The original `--color-1` through `--color-8` CSS variables are **preserved unchanged** in `base.css` so that festival-2024 and festival-2025 pages (which use them) remain unaffected.

## Page Structure

### Government Header (all redesigned pages)
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
Your trusted authority on Goodtimes mass-production since 1980
───────────────────────────────────────────────────
[Spinning Logo]    │ BUREAU SERVICES & INFORMATION
Official Bureau    │ ● Monkey Business 3 — Annual Operations [NEW]
    Seal           │ ● Archive of Past Operations
                   │ ● Bureau History & Mission
                   │ ● Official Bureau Instagran
                   │ ● Public Inquiries & Correspondence

▎ You are visitor # [counter]

PUBLIC ADVISORY: This web portal has been under construction since 1999...
```

### Navigation Style
- Left-bordered link list (border appears on hover)
- Green text links, hover highlights with light blue background
- No more Windows 95 button style — replaced with clean government link list

### Footer
Dark green background with light green text. Includes copyright notice with bureaucratic humor ("Unauthorized production of Goodtimesium is a violation of Bureau Directive 12.7(b)").

## Files Changed

### CSS
- `base.css` — New `--gov-*` CSS variables added; legacy `--color-*` variables preserved; `.clickable` now uses green; Georgia font
- `home-2025.css` — Complete rewrite: government header, nav link list, counter box, construction notice, footer
- `text-blocks.css` — Restyled: green headings with underline borders, green nav buttons
- `about-us.css` — Restyled to match government theme
- `festival-2026.css` — Background color updated to `--gov-blue`

### HTML (structural changes)
- `index.html` / `index-ca.html` — New gov header, restructured nav, bureaucratic copy
- `bureau-history.html` / `bureau-history-ca.html` — Gov header added, footer updated
- `our-events.html` — Gov header added, title changed to "Archive of Bureau Operations"
- `about-us.html` — Gov header added, footer updated
- `festival-2026.html` / `festival-2026-ca.html` — Gov header added, subheader text

### NOT Changed (deliberately)
- `festival-2024.html` and its CSS — old festival page, kept as-is
- `festival-2025.html` / `festival-2025-ca.html` and `festival-2025.css` — kept as-is
- `workshops-2025.css` — kept as-is
- `important-reminder-*.html` — kept as-is (they use festival-2025.css)
- `festival-2025-helping-hands.html` — kept as-is
- `hq.html` — kept as-is (uses festival-2025.css)
- `index-2024.html` — old homepage, kept as-is
- All images and JS files — unchanged

## Typography
- **Headings**: Georgia, serif (feels institutional but readable)
- **Body**: Georgia, 'Times New Roman', serif
- **Old festival pages**: Still use Comic Sans (their own CSS overrides)

## Key Design Elements
- **Gradient HR**: `linear-gradient(to right, dark green, bright green, yellow)` — colorful but official
- **Left-border accent**: Counter boxes and notices use `border-left: 4px solid green` — classic government callout pattern
- **NEW badge**: Green background with yellow text, still blinks (some things never change)
- **"Official Bureau Seal" label**: Below the spinning logo — deadpan humor
- **Print CSS**: "Printing government documents without authorization may violate Bureau Directive 7.3.2"
