# CLAUDE.md

## Dev Server

```
bin/dev  # starts on http://localhost:8766
```

## Translations

Pages have English (default) and Catalan (`-ca` suffix) versions. When updating copy on any page, always update the corresponding translation too (e.g. `index.html` ↔ `index-ca.html`).

## Key Non-Obvious Details

- `assets/js/gov-layout.js` is the single source of truth for the gov header/subheader — it injects into `<div id="gov-header">` placeholders
- `_archive/` is excluded from deployment (Jekyll ignores underscore-prefixed dirs)
- `aftermovie-liva.html` and `aftermovie-franz.html` are StatiCrypt-encrypted. The password prompt (HTML/CSS before `<script>`) is freely editable. The post-password content is an encrypted blob—changing it requires re-encrypting with `staticrypt`
- See `.claude/about.md` for project context, lore, and narrative universe
