# CLAUDE.md — CallRooterChampion Landing Page Rules

This is a **single-page landing page** for Rooter Champion plumbing, promoting the
**$55 drain cleaning special + free camera inspection**, for the **callrooterchampion** domain.
It is a SEPARATE project from the main rooterchampion.net website (that lives in
`/Users/rooterchampion/Rooter-Champion-website/`). Keep the two repos independent — never
commit one project's changes into the other.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves this project root at `http://localhost:3001`)
- Port is **3001** (the main site uses 3000, so both can run at once).
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Requires `npm install` first (installs puppeteer into `node_modules/`).
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3001`
- Screenshots save to `./temporary screenshots/screenshot-N.png` (auto-incremented).
- Optional label: `node screenshot.mjs http://localhost:3001 label`
- After screenshotting, read the PNG with the Read tool and compare against the goal.
- Be specific when comparing: exact px sizes, hex colors, spacing, alignment.

## Brand Assets
- Always check the `brand_assets/` folder before designing — use real logos/photos, not placeholders.
- Brand colors: rc-navy `#274A6A`, rc-blue `#53A6DC`, rc-green `#81B752`, rc-black `#010000`, rc-light `#EFF0F1`.
- Fonts: Barlow Condensed (headings) / DM Sans (body). Phone: 714-305-9263.
- The card and section styling intentionally mirrors rooterchampion.net so the two sites feel related.

## Output Defaults
- Single `index.html`, shared `styles.css` + `scripts.js` (copied from the main site).
- Tailwind via CDN. Mobile-first responsive.

## Anti-Generic Guardrails (same as main site)
- No default Tailwind palette (no indigo/blue-600). Use the brand colors above.
- No flat `shadow-md`; no `transition-all`. Animate only `transform`/`opacity`.
- Pair display + sans fonts; tight tracking on big headings, generous body line-height.
- Every clickable element needs hover, focus-visible, and active states.

## Deploy (TBD)
- Not yet set up. Domain hosting and GitHub repo are pending — see NOTES.md.
- When configured, expect the same flow as the main site: push to GitHub `main` → deploy on host.
- Remember cache-busting: bump `?v=N` on styles.css/scripts.js after editing them.
