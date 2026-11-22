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
