# IT 2030 — Future Intelligence

A futuristic, content-rich React platform exploring how information technology,
careers, and human skills are expected to evolve by 2030.

**All five pages are complete.** This is the final stage of the build:
Enter 2030 → The Great IT Transformation → The 2030 Job Market → The Human
Backup Plan → Your 2030, an interactive builder that turns everything from
the first four pages into a personal profile, roadmap, and saved plan.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Stack

- React 18 + Vite
- React Router (client-side routing across 5 pages)
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- react-icons (Feather + Heroicons sets)
- Plain JS/JSX only — no TypeScript, no backend, no fake APIs

## Project structure

```
src/
  components/       Reusable UI: Navbar, Footer, SectionHeader, GlowCard,
                     Timeline, TechRadar, SkillMeter
    transformation/  Page 2 interactive pieces (job simulator, dev timeline, etc.)
    jobmarket/       Page 3 interactive pieces (skill calculator, resilience index, etc.)
    humanbackup/     Page 4 interactive pieces (Aari roadmap, dual-path diagram, etc.)
    your2030/        Page 5 interactive pieces (identity, skills, path, profile,
                     roadmap, statement, plan form, community wall)
  hooks/
    useReveal.js     Scroll-reveal IntersectionObserver hook
  utils/
    profileEngine.js Live scoring logic for the Page 5 "Your 2030 Profile" card
  data/
    technologies.js   Data for the 2030 Technology Radar
    futureTrends.js   Data for the 2026→2030 timeline + Future Signal meters
    transformation.js Data for Page 2
    jobMarket.js       Data for Page 3
    humanBackup.js      Data for Page 4
    your2030.js          Data for Page 5 (roles, skills, paths, roadmap, statements)
  pages/
    Home2030.jsx        PAGE 1 — Enter 2030
    Transformation.jsx  PAGE 2 — The Great IT Transformation
    JobMarket.jsx        PAGE 3 — The 2030 Job Market
    HumanBackup.jsx       PAGE 4 — The Human Backup Plan
    Your2030.jsx           PAGE 5 — Your 2030 (build-your-future experience)
  App.jsx
  main.jsx
  index.css
```

## Page 5 — Your 2030

An 8-section, fully interactive closing experience:

1. **Build Your 2030 Identity** — pick a current role (React state).
2. **Select Your Skills** — multi-select chips across technical / AI / human
   categories.
3. **Choose Your Future Path** — six career-direction cards.
4. **Your 2030 Profile** — Skill Strength, Adaptability, AI Readiness, and
   Human Skills scores, all computed live in `utils/profileEngine.js` from
   Sections 1–3 — nothing is hardcoded.
5. **Your Future Roadmap** — a 5-milestone, 2026→2030 roadmap whose content
   changes per selected path.
6. **Personal Future Statement** — an editable statement, pre-filled per path.
7. **My 2030 Plan** — a validated form saved to `localStorage`
   (`myFuturePlan`), reloaded automatically on return visits.
8. **Community Future Wall** — "If IT is not there, what will you do?" — a
   fully functional, no-backend community board saved to `localStorage`
   (`futurePlans`), newest first, with safe handling of malformed storage
   and deletable entries.

## Design system

- Palette: `void #050816`, `abyss #07142F`, `deep #0B1F3A`, `steel #2C5EAD`,
  `signal #1591DC`, `sky #4BB8FA`, `violet #7C3AED`, `orchid #A855F7`,
  `cyan #22D3EE`, `mist #E2E8F0` — all defined as Tailwind color tokens.
- Type: **Sora** (display/headlines), **Inter** (body), **IBM Plex Mono**
  (data readouts only — radar labels, meter values, source tags).
- Blue tones (signal/sky/cyan) mark machine/systems content; violet/orchid
  mark the human-centric sections (Section 7, footer accents) — a deliberate
  color language carried through later stages too.

## Content approach

All copy is original and avoids inventing statistics. Where a claim leans on
a real research direction (WEF, Stanford HAI, McKinsey, Gartner, IBM
Research), it's attributed by name in the Tech Radar detail panel and the
site footer, and framed as "expected direction" / "emerging trend" rather
than guaranteed fact.
