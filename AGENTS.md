# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## OneLaser V2 decisions

- This is an independent comparison concept. Do not modify or replace `/Users/yongyuan/Documents/XRF Gen2 网页` or its deployed homepage.
- The selected visual at `references/source-visual.png` is the layout, density, typography, and hierarchy source of truth.
- The core page logic is promise → audience path → guided machine match → machine comparison → project outcomes → trust → one next step.
- Reuse official OneLaser machine renders and official `1laser.com` destinations. Do not invent commercial facts.
- Reuse the published OneLaser homepage header, accessible Mega Menu behavior, announcement bar, and full footer rather than creating V2-only global chrome.
- Do not show section progress labels such as `02 / 05`. Keep major section titles on one line at desktop widths; allow responsive wrapping below the desktop navigation breakpoint.
- Project proof must make the decision logic explicit: product → material → production goal → best-fit machine.
