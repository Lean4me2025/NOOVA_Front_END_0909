# NOVA + NAVI Integrated Bundle

This bundle contains:
- `index.html` — Nova → Navi flow, audio wired and tested.
- `traits.html` — simple working page so the Continue button routes somewhere valid.
- `assets/css/styles.css` — UI styles.
- `assets/js/app.js` — event handling for Play/Stop/Continue.
- `assets/audio/` — place your audio files here.

## Audio Files
Expected filenames:
- `assets/audio/nova_intro.m4a` — NOVA welcome (you can also keep the included `nova_intro.wav` as fallback/sanity check).
- `assets/audio/navi_intro.m4a` — NAVI welcome (included from your upload, renamed correctly).

If you also want MP3 fallbacks, add:
- `assets/audio/nova_intro.mp3`
- `assets/audio/navi_intro.mp3`

## Deploy
1. Upload entire folder to a fresh GitHub repo.
2. Deploy to Vercel as a static site (root = repository root).
3. Visit the site, tap ▶ Play on each screen to confirm audio.
4. Press **Begin** to move to NAVI; **Continue** routes to `traits.html`.