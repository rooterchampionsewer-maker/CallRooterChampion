# CallRooterChampion — Project Notes

A standalone **landing page** for Rooter Champion's **$55 drain cleaning + free camera inspection**
special, intended for the **callrooterchampion** domain. Derived from rooterchampion.net but a
separate project / git repo.

## What's built (index.html, single page)
- **Header** — Rooter Champion logo + green "Call" button.
- **Hero** — $55 badge, "$55 DRAIN CLEANING + FREE Camera Inspection" headline, trust pill,
  Call / Our Services CTAs, trust strip, dancutter photo background.
- **Stats strip** — slim navy gradient band (5.0★ / $55 / Same-Day / LA & OC), sits ABOVE services.
- **Services section** — 6-card blueprint dashed grid (matches rooterchampion.net): Drain Cleaning,
  Hydro Jetting, Camera Inspection, Trenchless Sewer Repair, Sewer Robotics, General Plumbing.
  Centered cells, green hover. Background = CAMERA-1.jpg photo with dark navy overlay + soft glow.
- **Final CTA** — navy gradient, "Ready for your $55 drain cleaning?" + call button.
- **Footer** + **mobile sticky call bar**.

## Local workflow
1. `npm install`  (one time — installs puppeteer for screenshots)
2. `node serve.mjs`  → preview at http://localhost:3001
3. `node screenshot.mjs http://localhost:3001 label`  → saves to ./temporary screenshots/

## Still TODO
- [ ] `npm install` in this folder (no node_modules yet).
- [ ] Initial git commit (git is init'd but nothing committed).
- [ ] Create GitHub repo and push.
- [ ] Decide + set up domain hosting for callrooterchampion.
- [ ] Wire up deploy flow + cache-busting once hosting is chosen.

## Notes
- Brand colors / fonts / phone: see CLAUDE.md.
- Port 3001 chosen so this can run at the same time as the main site (port 3000).
