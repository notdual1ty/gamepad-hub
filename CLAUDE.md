# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Gamepad Hub** is a static HTML gamepad review website written in Russian. The site provides honest, hands-on reviews of game controllers with real-world testing data, setup guides for specific games, and a driver/utility catalog. The site is built without a framework — vanilla HTML, CSS, and JavaScript only.

## Architecture

### Data-Driven Design

The site uses **data.js** as the single source of truth for all gamepad reviews and drivers.js for the driver catalog. These JavaScript files export structured data that renders dynamically on pages:

- `GAMEPADS` array: gamepad reviews with metadata (price, purchase date, usage months, genres, specs)
- `CATEGORIES` object: filtering logic for genres and certification status
- `DRIVERS` array: driver/firmware/utility catalog entries with compatibility info

**Do not hardcode gamepad data into HTML**. All new reviews must be added to `data.js` first, then rendered via the existing JavaScript rendering functions.

### File Structure

- **index.html**: Homepage with hero, search, stats chips, category grid, latest reviews, popular games, changelog
- **reviews.html**: Full gamepad listing with filtering by search query and category
- **guides.html**: List of game setup guides
- **drivers.html**: Driver/firmware/utility catalog with type filters
- **about.html**: About page
- **style.css**: Global styles with CSS custom properties for theming
- **data.js**: Gamepad review data and rendering logic
- **drivers.js**: Driver catalog data and filtering
- **gamepad-template.html**: Template for full review pages (sidebar layout)
- **data-form.md**: Structured template for collecting review data

### Rendering Pattern

Pages use vanilla ES5 JavaScript with IIFEs (Immediately Invoked Function Expressions):

```javascript
(function() {
  // rendering logic here
})();
```

Data flows from `GAMEPADS` → `filterGamepads()` → `renderGamepads()` → DOM insertion. Use `renderCard()` for individual cards.

### URL Parameters

- `?q=<query>` — search filter (matches name, description, verdict)
- `?cat=<category>` — category filter (racing, shooter, fighting, arcade, certified)

## How to Add a New Gamepad Review

1. **Fill out data-form.md** with all review details
2. **Add entry to `data.js`** in the `GAMEPADS` array:
   ```javascript
   {
     id: "gamepad-slug",
     name: "Gamepad Name",
     price: 2490,
     purchaseDate: "март 2026",
     usageMonths: 8,
     genres: ["racing", "shooter"],
     isMicrosoftCertified: false,
     hasGyro: false,
     hasHallEffect: false,
     isWireless: true,
     isCrossPlatform: false,
     description: "Short description for card",
     verdict: "One-sentence honest verdict",
     image: "images/gamepad.jpg",
     fullReview: "gamepad-slug.html"
   }
   ```
3. **Create full review HTML** from `gamepad-template.html`, filling in specs, pros/cons, game tests, alternatives, and verdict
4. **Add image** to repository (if available) — use placeholder SVG if missing
5. **Update category counters** by running the site locally and confirming categories count correctly

**Placeholder gamepads** (with `price: 0`) are filtered out from the main listing and rendered as non-clickable cards.

## How to Add a Driver/Utility

Add an entry to the `DRIVERS` array in **drivers.js**:

```javascript
{
  id: "slug",
  name: "Driver Name",
  type: "driver" | "firmware" | "utility",
  version: "1.0.0",
  size: "10 МБ",
  date: "2026-11-22",
  compatible: ["Gamepad 1", "Gamepad 2"],
  os: ["Windows 10", "Windows 11"],
  description: "What it does and why it's needed",
  url: "https://download-link.com",
  discussion: "https://github.com/user/repo/discussions/1"
}

## UI & Design System (Engineering Dark UI)

### Environment & Token Efficiency
- **OS:** Windows 11 (PowerShell). Never use Linux shell commands (`wc`, `grep`, `sed`, `awk`).
- **Editing strategy:** Edit only targeted CSS/HTML blocks; avoid rewriting entire large files (`style.css`, `index.html`) from scratch to minimize token usage.

### Visual Tokens & Surfaces
- **Base background:** `#0b0d10` (with full-bleed background wallpaper on `body`; never add opaque or semi-transparent full-width horizontal bands to `<section>` elements that cut across the wallpaper).
- **Card surface (Brushed Metal):**
  - `background: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.014) 0px, rgba(255, 255, 255, 0.014) 1px, transparent 1px, transparent 3px), linear-gradient(155deg, rgba(31, 36, 46, 0.94) 0%, rgba(15, 18, 24, 0.96) 100%);`
  - `border: 1px solid rgba(255, 255, 255, 0.08);`
  - `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 12px 28px -8px rgba(0, 0, 0, 0.75);`
- **Card `:hover` state:** `transform: translateY(-2px); border-color: rgba(56, 189, 248, 0.45);`
- **Telemetry typography:** Use monospace (`JetBrains Mono` / `monospace`) with `font-variant-numeric: tabular-nums` for latency (ms), polling rate (Hz), deadzones, and counters.
- **Layout alignment:** Header, main content sections, and footer must share the exact same `max-width` container and horizontal padding.

### Strict DOM & JS Constraints
- **Never delete or rename** existing `id`, `data-*` attributes, or classes bound to JavaScript logic (`data.js`, `drivers.js`, gamepad tester, Forza Hall, and shared header/footer snippets).
- **Vanilla ES5:** Keep all JavaScript compatible with existing ES5 IIFE patterns (`var`, `function() {}`) unless explicitly requested otherwise.