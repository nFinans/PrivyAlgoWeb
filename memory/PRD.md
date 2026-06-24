# PrivyAlgo Hybrid Terminal — BIST + WallStreet Landing Page

## Original Problem Statement
Merge two existing GitHub repos (`nFinans/BistTerminal` — "Privy Neural Algo v2.0 BIST" landing + `nFinans/WallStreet-Terminal` — "PrivyAlgo WallStreet Terminal v3.0" landing) into a **single hybrid page** preserving the same tech stack (React 19 + Tailwind + craco + FastAPI).

## User Choices (Jun 2026)
1. **Tech stack**: keep the existing React + Tailwind + craco stack from the two repos.
2. **Data sources**: use the same mocked/curated data that both repos already shipped with (BIST Kings, Sentiment, GEX bars, IV surface, partner cards, plan IDs).
3. **Layout style**: hybrid Bloomberg-like dark terminal aesthetic (NOT a tab-only split — sections blend BIST + WS together but a **market switcher** in the Hero toggles the live mockup; Pricing also uses BIST/WS tabs).
4. **Design**: new hybrid modern terminal design — deep black background, amber #f59e0b primary (Bloomberg), teal #26a69a for BIST market color, amber+purple for WS, glassmorphism cards, cyber grid background, particle drift, JetBrains Mono + Outfit + Inter fonts.
5. **Scope**: just the unified landing — no extra auth / no extra backend logic.

## Architecture
- **Frontend**: React 19 + Tailwind + craco (same stack as both source repos).
- **Single route** `/` rendering `pages/Landing.jsx`.
- **No backend changes** — server.py untouched.
- **Whop integration** via official embed loader (`https://js.whop.com/static/checkout/loader.js`) — same as both source repos, all 4 plan IDs preserved (BIST 6m `plan_g4J6Wi1MAafMB`, BIST yıllık `plan_JeXSEXRXPoExb`, WS 6m `plan_Qbox6n2EjRRLY`, WS yıllık `plan_QbVjw794ciU1n`).

## File Structure
```
/app/frontend/src/
├── App.js                                (renders <Landing />)
├── App.css                               (minimal — body bg)
├── index.css                             (unified hybrid theme: cyber grid, particles, glass, fonts, animations, market pills)
├── pages/Landing.jsx                     (orchestrator)
└── components/landing/
    ├── CyberBackground.jsx               (fixed animated grid + particles + scan-line)
    ├── Navbar.jsx                        (PrivyAlgo brand + nav + dropdown CTA → BIST / WS apps)
    ├── Hero.jsx                          (dual headline, dual CTA, combined ticker tape, market switcher → swaps live mockup)
    ├── BistTerminal.jsx                  (THYAO chart mockup w/ TF AL/SAT, Hedge Wall, MaxBuy/Sell, volume panel)
    ├── WallStreetTerminal.jsx            (Opus Wall · Cockpit w/ Net GEX bars, KPI strip, Greeks heatmap)
    ├── VolatilitySurface.jsx             (3D-ish wireframe — accepts market prop, recolors for BIST sentiment / WS IV)
    ├── MarketsInsights.jsx               (Kings table + Sentiment buyers/sellers panels — all BIST data)
    ├── Features.jsx                      (8 modules grid: 4 BIST + 4 WS with market badge per card)
    ├── Technology.jsx                    (combined infra: Opra, Alpaca, Deribit, Yahoo, MS SQL · BIST, Lightweight Charts + 4 KPI stats)
    ├── Pricing.jsx                       (tabbed market switcher → 2 BIST plans + 2 WS plans, opens WhopModal)
    ├── WhopModal.jsx                     (unified — themes amber for WS / teal for BIST, embeds Whop checkout)
    ├── Community.jsx                     (nFinans YouTube / X / Instagram + proof strip + quote)
    └── FooterSection.jsx                 (dual brand, dual system status: BIST · MS SQL + WS · WebSocket, disclaimer)
```

## Implemented (Jun 2026 — Hybrid MVP)
- Single-page hybrid landing that merges Privy Neural Algo BIST + WallStreet Terminal into one cohesive site.
- **Bloomberg-style dark theme**: pure black background, amber primary, teal for BIST accents, purple for WS data accents, JetBrains Mono + Outfit + Inter fonts.
- **Unified navbar** with brand "PrivyAlgo BIST + WallStreet" and dropdown CTA exposing both terminal login URLs.
- **Hero** with dual headline "İki piyasa. Tek terminal." (Borsa İstanbul × Wall Street), two CTA buttons + Eğitim CTA, combined live ticker tape (BIST + US + Crypto symbols), and a **market switcher** that toggles the live mockup between BIST DashboardMockup and WS GEX cockpit. Volatility Surface panel recolors based on the selected market.
- **Markets Insights** section: BIST "Algoritmanın Kralları" table (Son 10 Gün, with Algo / Hisse / Reel) + Güçlü Alıcılar / Güçlü Satıcılar Sentiment panels.
- **Features** grid: 8 cards (4 BIST modules + 4 WS modules) each tagged with a market badge.
- **Technology** section: combined data provider cards (Opra, Alpaca, Deribit, Yahoo, MS SQL · BIST, Lightweight Charts) + 4 KPI stats.
- **Pricing** with tabbed BIST / WallStreet switcher → 4 Whop-backed plans (BIST 6m 5.400 TL, BIST yıllık 9.600 TL "En Popüler", WS 6m 12.000 TRY, WS yıllık 16.000 TRY "33% Tasarruf · En Popüler") + bonus banner.
- **WhopModal** unified embed checkout — themes per market accent color, ESC + click-outside close, "Yeni Sekmede Aç" fallback.
- **Community** section with real nFinans YouTube / X / Instagram links + proof + quote.
- **Footer** with both `bist.privyalgo.com` & `wallstreet.privyalgo.com` links, dual system status (BIST · MS SQL · AKTİF + WS · WebSocket · AKTİF + Opra + Alpaca + Deribit) and combined finansal risk disclaimer.
- All interactive elements carry `data-testid` attributes.

## Environment Fix
- Pinned `webpack-dev-server@4.15.2` in `frontend/package.json` resolutions (replaced the default 5.2.4 to satisfy `react-scripts@5.0.1` middleware schema).

## Verified
- Frontend HTTP 200 on the external preview URL.
- Hero, Markets Insights, Features, Technology, Pricing (both tabs), Community and Footer all render cleanly at 1920×1000 — confirmed via screenshots.
- Market switcher correctly swaps BistTerminal ↔ WallStreetTerminal mockup AND recolors VolatilitySurface (teal sentiment for BIST / amber IV surface for WS).
- Pricing tab switch correctly swaps the two card sets and updates accent.

## Prioritized Backlog
- **P1**: Mobile-specific QA pass (responsive breakpoints look correct but no device matrix testing).
- **P2**: Wire OG / Twitter card meta for social sharing, plus favicons per market.
- **P2**: A lead-capture form (e-bülten + demo isteği) → MongoDB.
- **P2**: i18n switch TR ⇄ EN.
- **P3**: Real WebGL volatility surface (three.js) instead of the SVG mock for added depth.

## Next Tasks
- [ ] End-to-end live test of all 4 Whop checkout flows.
- [ ] Decide on optional lead-capture component.
- [ ] Add posthog conversion events on each CTA / plan-click.
