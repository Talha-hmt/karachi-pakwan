# Karachi Pakwan

A React + Vite rebuild of the Karachi Pakwan ordering page — same menu, same
WhatsApp/call ordering flow, redesigned as a proper component-based site
instead of one long HTML file.

## Design direction

- **Palette**: deep maroon signage red, turmeric gold, chutney green, and warm
  "kaghazi" paper for the menu cards — pulled from Karachi dhaba menu boards
  rather than a generic light theme.
- **Type**: Bricolage Grotesque for headings, Work Sans for body copy, Space
  Mono for prices and receipt-style labels.
- **Signature elements**: menu items are styled as torn "order chits" (paper
  ticket cards with a perforated top edge), and the hero has an animated
  delivery route — a scooter travelling from "Kitchen" to "Your Door" — which
  reinforces the free-delivery promise. Both respect `prefers-reduced-motion`.

## Structure

```
karachi-pakwan/
├── index.html                  # Vite entry HTML, Google Fonts + favicon
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                 # React root
│   ├── App.jsx                  # Renders the Home screen
│   ├── index.css                # Design tokens, reset, shared classes
│   ├── screens/
│   │   └── Home.jsx              # Composes the full page
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── DeliveryRoute.jsx / .css   # animated hero signature
│   │   ├── MenuSection.jsx / .css
│   │   ├── MenuCard.jsx / .css        # "order chit" card
│   │   ├── HowItWorks.jsx / .css
│   │   ├── ContactSection.jsx / .css
│   │   ├── BottomBar.jsx / .css       # sticky mobile call/WhatsApp bar
│   │   └── Footer.jsx / .css
│   └── data/
│       └── menu.js               # menu items, prices, phone/WhatsApp links
```

All prices, the phone number, and the address are unchanged from the
original page. Item descriptions and the spice-level marks are new
placeholder copy — edit `src/data/menu.js` to adjust wording or add more
items later.

## Run it

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serve the dist/ build locally to check it
```
