# Umarika Café — website concept

A private redesign concept for **Umarika Café** in Damilag, Manolo Fortich, Bukidnon. This is a proposed design for presentation. It is not an official website, and it is not commissioned or approved work.

The project is a static React + Vite site. It does not take orders, bookings, or payments.

## Setup

Requires Node.js 20 or newer.

```bash
cd umarika-cafe-concept
npm install
npm run dev
```

Open the local address Vite prints, usually `http://localhost:5173`.

Production build:

```bash
npm run build
npm run preview
```

`npm run build` writes the site to `dist/`. Do not publish that folder unless the owner asks for it. `robots.txt` and the page metadata ask crawlers not to index the concept. Remove those only if this is later approved for a public launch.

Routes use the browser history API. Vite’s dev and preview servers handle that. On a static host, send unknown paths to `index.html`. A Netlify `_redirects` file is included for that fallback.

## Where to edit

- Business name, address, email, Facebook, and the map search: `src/data/business.js`
- Menu names, notes, and prices: `src/data/menu.js`
- Menu artwork paths: `src/data/images.js` and `public/menus/`

Prices on the home page are read from the same menu file.

## Owner-confirmation checklist

Confirm each item with Umarika Café before treating this as a live site.

- [ ] Current menu and prices
- [ ] Preferred phone number
- [ ] Operating hours
- [ ] Original logo
- [ ] High-resolution food and venue photos
- [ ] Exact map pin
- [ ] Existing domain and hosting arrangements

### Phone numbers

Two numbers were supplied and they do not match. Neither is shown on the site, and there is no public telephone button.

- Facebook details: 0992 257 3468
- Printed menu: 0993 783 5264

### Operating hours

Hours are not shown. An “Open now” label in a Facebook screenshot is not an operating schedule. Ask for the days and hours the café wants published.

### Logo

No separate high-resolution logo file was included. The header uses a temporary text wordmark, “Umarika”. Please request the original logo. The cup mark printed on the menu was not redrawn or replaced with a new logo.

### Photos still needed

The supplied files are menu composites at 1024×622 pixels. Dish photos inside them are too small to use as site photography, so they were not cropped into heroes or category panels. The menus appear only as framed artwork and in the original-menu viewer.

For a final version, ask for:

- The original logo (vector or a high-resolution PNG)
- The café exterior
- Interior and seating
- Arika Breakfast Plate
- Suman-Sikwate Set
- Hot sikwate / tablea
- Kuro-Hakata Ramen and the other ramen bowls, if they should be pictured
- Japanese Curry-Katsu
- Sushi, maki, and salads
- Espresso and matcha drinks in the café’s own cups
- Frappes and milk teas, if those should be pictured

Do not replace this list with stock food photos presented as Umarika’s dishes.

### Map

“Search Location on Google Maps” searches for:

`Umarika Café, Purok 16, Damilag, Manolo Fortich, Bukidnon, Philippines`

That is a map search, not a verified pin. Ask the owner for the exact pin before embedding a map.

### Domain and hosting

The café’s Facebook details list `umarika.com.ph`. This concept does not claim the business has no website. Confirm whether that domain is active, who manages it, and whether a future site should replace or sit beside it. Nothing in this project was deployed.

## Development notes

Menu text and prices were transcribed from the two supplied menu images. Where the print is ambiguous, the site keeps the printed wording instead of guessing.

1. **Cafe Americano, hot.** The hot column prints `110 / 125` and has no size label. The iced column is labeled `(12oz / 16oz)` at `115 / 135`. The hot pair is shown as `Hot — ₱110 / ₱125`. It is not labeled 12oz and 16oz.
2. **Cappuccino.** Hot is ₱140. The iced cell is blank, so no iced cappuccino was added.
3. **Espresso iced drinks.** The menu labels iced espresso as `(12oz / 16oz)`. Prices are shown in that order. Example: Cafe Latte is Hot ₱140, Iced 12oz ₱145, Iced 16oz ₱155.
4. **Matcha, fruit teas, and milk teas.** These sections print a slash pair, such as `155 / 170`, and do not print size labels. They are shown as `₱155 / ₱170`. Ask whether the pair means 12oz and 16oz.
5. **Frappes.** The section is labeled `(12oz / 16oz)`. Prices follow that order.
6. **Asterisks.** “Cookies & Cream \*” and “Biscoff Cream \*” carry an asterisk. The menu does not explain it. The asterisk is kept. Ask what it means.
7. **Pork Tonkotso Ramen.** The food menu spells it “Tonkotso”, not “Tonkotsu”. Confirm whether to keep or correct it. Other katsu dishes use “Tonkatsu”.
8. **Kuro- Hakata Ramen.** The printed name has a space after the hyphen.
9. **Pistacchio Cream.** The frappe name is spelled with two c’s on the menu. Confirm the preferred spelling.
10. **Passion Fruit n Green Tea.** The printed name uses “n”.
11. **Hot Sikwate.** It is printed with the breakfast sets, so it stays in Breakfast rather than in a drinks category.
12. **Affogato.** It is under Sweet & Savory Bites. Classic, Caramel, and Mocha are choices at one price, ₱120.
13. **Katsudon (Pork/Chicken).** Pork and chicken are printed as one item at ₱220.

Public pages do not include ordering, a cart, checkout, a contact form, a telephone button, operating hours, or an “Open now” status.
