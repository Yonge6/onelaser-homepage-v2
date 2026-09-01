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
- The machine lineup shows isolated official machine renders by default; desktop hover and keyboard focus reveal the corresponding real-use scene. Keep the pure-machine state available on touch devices.
- The finder result uses the red primary action for the recommended machine.
- Made with OneLaser reuses the full published homepage project library, its segmented material filter, one-row horizontal large-card rail, and accessible project-detail dialog. The rail may run full viewport width while headings remain on the 1360 px content grid.
- Made with OneLaser sits on the shared `#F5F5F7` light surface while keeping the full-width project rail and content-grid heading alignment.
- Why OneLaser uses one dark engineering stage, a three-metric proof rail, two approved evidence images, and one compact four-part system strip. The reading order is engineering system → numeric proof → visible proof → ownership system; avoid a flat wall of equal-weight feature cards or the former long alternating story stack.
- Lineup, Why OneLaser, and Built for Every Ambition use a compact 64 px desktop entry rhythm so adjacent section padding does not create oversized blank bands; Why OneLaser itself stays on white.
- Built for Every Ambition and OneLaser in the Real World use 64 px bottom spacing instead of the default 112 px to prevent oversized gaps before the next module.
- The OneLaser Standard uses the user-supplied compressed U.S. headquarters aerial as its lead visual and the title `Make better with one.`. The section stays white/transparent; its image uses the same inset content width and 24–32 px radius as other primary media.
- OneLaser Standard support and the final machine-shopping action use centered or context-aligned red primary buttons rather than text links or light buttons.
- Campaign and ambition photography must ship as responsive compressed WebP assets; the first campaign image is preloaded and below-fold images remain lazy-loaded.
- Hero campaigns expose previous/next controls at the vertical edges in addition to the bottom story indicators; keep both keyboard accessible.
- Lock the published announcement bar, top navigation, accessible Mega Menu, and full footer unless the user explicitly reopens those areas. Homepage content follows: Hero Campaigns → Meet the OneLaser Lineup (with finder) → Made with OneLaser → Why OneLaser Performs Better → Built for Every Ambition → OneLaser in the Real World → The OneLaser Standard → Explore / Community / final CTA.
