import { formatPeso } from '../utils/format.js'

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'bites', label: 'Sweet & Savory Bites' },
  { id: 'espresso', label: 'Espresso-Based' },
  { id: 'matcha', label: 'Matcha' },
  { id: 'fruit-teas', label: 'Fruit Teas & Juices' },
  { id: 'frappes', label: 'Frappes' },
  { id: 'milk-teas', label: 'Milk Teas' },
  { id: 'more-beverages', label: 'More Beverages' },
  { id: 'ramen', label: 'Ramen' },
  { id: 'salad', label: 'Salad & Sushi/Maki' },
  { id: 'specials', label: 'Japanese & Filipino Specials' },
]

export const menuGroups = {
  'coffee-matcha': {
    label: 'Coffee & Matcha',
    categories: ['espresso', 'matcha'],
  },
  'breakfast-bites': {
    label: 'Breakfast & Bites',
    categories: ['breakfast', 'bites'],
  },
  ramen: {
    label: 'Ramen',
    categories: ['ramen'],
  },
  specials: {
    label: 'Japanese & Filipino Specials',
    categories: ['specials'],
  },
  drinks: {
    label: 'Drinks',
    categories: ['espresso', 'matcha', 'fruit-teas', 'frappes', 'milk-teas', 'more-beverages'],
  },
}

export const exploreGroups = [
  {
    group: 'coffee-matcha',
    index: '01',
    title: 'Coffee & Matcha',
    text: 'Espresso-based drinks and the matcha series.',
    tone: 'feature',
  },
  {
    group: 'breakfast-bites',
    index: '02',
    title: 'Breakfast & Bites',
    text: 'Breakfast plates, sikwate, sandwiches, and sweet bites.',
    tone: 'plain',
  },
  {
    group: 'ramen',
    index: '03',
    title: 'Ramen',
    text: 'Six ramen bowls from the food menu.',
    tone: 'plain',
  },
  {
    group: 'specials',
    index: '04',
    title: 'Japanese & Filipino Specials',
    text: 'Katsudon, sizzling plates, katsu, tempura, gyoza, and Filipino dishes from the menu.',
    tone: 'wide',
  },
]

export const highlightIds = [
  'arika-breakfast-plate',
  'suman-sikwate-set',
  'kuro-hakata-ramen',
  'japanese-curry-katsu',
]

export const menuItems = [
  {
    id: 'arika-breakfast-plate',
    name: 'Arika Breakfast Plate',
    category: 'breakfast',
    price: 230,
    servedWith: '2 pcs eggs and Lettuce-Kamote Salad in Pineapple-Sesame Vinaigrette',
    choices: ['Rice or whole wheat bread', 'Bacon, Chorizo de Cebu, Spam'],
  },
  {
    id: 'suman-sikwate-set',
    name: 'Suman-Sikwate Set',
    category: 'breakfast',
    price: 230,
    note: 'Tablea Drink, Suman & Ripe Mango',
  },
  {
    id: 'hot-sikwate',
    name: 'Hot Sikwate',
    category: 'breakfast',
    price: 100,
  },
  {
    id: 'ajitama-egg-bonito-sandwich',
    name: 'Ajitama Egg & Bonito Sandwich',
    category: 'bites',
    price: 200,
  },
  {
    id: 'ham-cheese-sandwich',
    name: 'Ham & Cheese Sandwich',
    category: 'bites',
    price: 180,
  },
  {
    id: 'grilled-cheese-sandwich',
    name: 'Grilled Cheese Sandwich',
    category: 'bites',
    price: 170,
  },
  {
    id: 'nachos-pork-cheese',
    name: 'Nachos w/ Pork & Cheese',
    category: 'bites',
    price: 195,
  },
  {
    id: 'french-fries',
    name: 'French Fries',
    category: 'bites',
    price: 90,
  },
  {
    id: 'affogato',
    name: 'Affogato - Espresso + Vanilla Ice Cream',
    category: 'bites',
    price: 120,
    note: '(Classic, Caramel, Mocha)',
  },
  {
    id: 'warm-brownie',
    name: 'Warm Brownie w/ Ice Cream',
    category: 'bites',
    price: 130,
  },
  {
    id: 'moist-chocolate-cake',
    name: 'Moist Chocolate Cake (Slice)',
    category: 'bites',
    price: 120,
  },
  {
    id: 'ube-halaya-cake',
    name: 'Ube Halaya Cake (Slice)',
    category: 'bites',
    price: 120,
  },

  // Hot Americano prints 110 / 125 with no size label. Iced is labeled (12oz / 16oz).
  {
    id: 'cafe-americano',
    name: 'Cafe Americano',
    category: 'espresso',
    variants: [
      { label: 'Hot', priceText: '₱110 / ₱125' },
      { label: 'Iced 12oz', price: 115 },
      { label: 'Iced 16oz', price: 135 },
    ],
  },
  {
    id: 'cafe-latte',
    name: 'Cafe Latte',
    category: 'espresso',
    variants: [
      { label: 'Hot', price: 140 },
      { label: 'Iced 12oz', price: 145 },
      { label: 'Iced 16oz', price: 155 },
    ],
  },
  // Blank iced cell on the printed menu. No iced variant is listed.
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'espresso',
    variants: [{ label: 'Hot', price: 140 }],
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    category: 'espresso',
    variants: [
      { label: 'Hot', price: 150 },
      { label: 'Iced 12oz', price: 155 },
      { label: 'Iced 16oz', price: 170 },
    ],
  },
  {
    id: 'dark-choco-mocha',
    name: 'Dark Choco Mocha',
    category: 'espresso',
    variants: [
      { label: 'Hot', price: 150 },
      { label: 'Iced 12oz', price: 155 },
      { label: 'Iced 16oz', price: 170 },
    ],
  },
  {
    id: 'hazelnut-latte',
    name: 'Hazelnut Latte',
    category: 'espresso',
    variants: [
      { label: 'Hot', price: 150 },
      { label: 'Iced 12oz', price: 155 },
      { label: 'Iced 16oz', price: 170 },
    ],
  },
  {
    id: 'vanilla-latte',
    name: 'Vanilla Latte',
    category: 'espresso',
    variants: [
      { label: 'Hot', price: 150 },
      { label: 'Iced 12oz', price: 155 },
      { label: 'Iced 16oz', price: 170 },
    ],
  },
  {
    id: 'spanish-latte',
    name: 'Spanish Latte',
    category: 'espresso',
    variants: [
      { label: 'Hot', price: 150 },
      { label: 'Iced 12oz', price: 155 },
      { label: 'Iced 16oz', price: 170 },
    ],
  },

  // Matcha prices are printed as a slash pair. The section has no size label.
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    category: 'matcha',
    priceText: '₱155 / ₱170',
  },
  {
    id: 'dirty-matcha',
    name: 'Dirty Matcha',
    category: 'matcha',
    priceText: '₱160 / ₱175',
  },
  {
    id: 'pink-guava-matcha',
    name: 'Pink Guava Matcha',
    category: 'matcha',
    priceText: '₱160 / ₱175',
  },
  {
    id: 'strawberry-matcha',
    name: 'Strawberry Matcha',
    category: 'matcha',
    priceText: '₱160 / ₱175',
  },

  // Fruit teas print a slash pair with no size label on that section.
  {
    id: 'passion-fruit-green-tea',
    name: 'Passion Fruit n Green Tea',
    category: 'fruit-teas',
    priceText: '₱100 / ₱115',
  },
  {
    id: 'mango-jasmine-tea',
    name: 'Mango & Jasmine Tea',
    category: 'fruit-teas',
    priceText: '₱100 / ₱115',
  },
  {
    id: 'strawberry-calamansi',
    name: 'Strawberry Calamansi',
    category: 'fruit-teas',
    priceText: '₱105 / ₱120',
  },
  {
    id: 'pineapple-cucumber',
    name: 'Pineapple Cucumber',
    category: 'fruit-teas',
    priceText: '₱95 / ₱110',
  },

  // Frappes are labeled (12oz / 16oz). Asterisks are printed without an explanation.
  {
    id: 'frappe-cafe-latte',
    name: 'Cafe Latte',
    category: 'frappes',
    variants: [
      { label: '12oz', price: 165 },
      { label: '16oz', price: 180 },
    ],
  },
  {
    id: 'frappe-salted-caramel',
    name: 'Salted Caramel',
    category: 'frappes',
    variants: [
      { label: '12oz', price: 165 },
      { label: '16oz', price: 180 },
    ],
  },
  {
    id: 'frappe-cookies-cream',
    name: 'Cookies & Cream *',
    category: 'frappes',
    variants: [
      { label: '12oz', price: 170 },
      { label: '16oz', price: 185 },
    ],
  },
  {
    id: 'frappe-biscoff-cream',
    name: 'Biscoff Cream *',
    category: 'frappes',
    variants: [
      { label: '12oz', price: 170 },
      { label: '16oz', price: 185 },
    ],
  },
  {
    id: 'frappe-pistacchio-cream',
    name: 'Pistacchio Cream',
    category: 'frappes',
    variants: [
      { label: '12oz', price: 170 },
      { label: '16oz', price: 185 },
    ],
  },

  // Milk tea prices are a slash pair. That section does not print a size label.
  {
    id: 'milk-tea-wintermelon',
    name: 'Wintermelon',
    category: 'milk-teas',
    priceText: '₱105 / ₱120',
  },
  {
    id: 'milk-tea-cookies-cream',
    name: 'Cookies & Cream',
    category: 'milk-teas',
    priceText: '₱115 / ₱130',
  },
  {
    id: 'milk-tea-hokkaido',
    name: 'Hokkaido',
    category: 'milk-teas',
    priceText: '₱105 / ₱120',
  },
  {
    id: 'milk-tea-okinawa',
    name: 'Okinawa Brown Sugar',
    category: 'milk-teas',
    priceText: '₱105 / ₱120',
  },
  {
    id: 'milk-tea-caramel',
    name: 'Caramel',
    category: 'milk-teas',
    priceText: '₱105 / ₱120',
  },

  {
    id: 'mocktail-of-the-day',
    name: 'Mocktail of the Day',
    category: 'more-beverages',
    price: 140,
  },
  {
    id: 'cocktail-of-the-day',
    name: 'Cocktail of the Day',
    category: 'more-beverages',
    price: 160,
  },
  {
    id: 'san-miguel-light',
    name: 'San Miguel Beer Light (Bottle)',
    category: 'more-beverages',
    price: 80,
  },
  {
    id: 'san-miguel-pilsen',
    name: 'San Miguel Beer Pilsen in can',
    category: 'more-beverages',
    price: 85,
  },
  {
    id: 'san-miguel-flavored',
    name: 'San Miguel Flavored Beer in can',
    category: 'more-beverages',
    price: 80,
  },
  {
    id: 'tanduay-ice',
    name: 'Tanduay Ice',
    category: 'more-beverages',
    price: 80,
  },
  {
    id: 'softdrinks-can',
    name: 'Softdrinks in Can',
    category: 'more-beverages',
    price: 70,
  },

  // Printed with a space after the hyphen: "Kuro- Hakata Ramen".
  {
    id: 'kuro-hakata-ramen',
    name: 'Kuro- Hakata Ramen',
    category: 'ramen',
    price: 220,
  },
  // Printed spelling is "Tonkotso", not "Tonkotsu".
  {
    id: 'pork-tonkotso-ramen',
    name: 'Pork Tonkotso Ramen',
    category: 'ramen',
    price: 220,
  },
  {
    id: 'spicy-tantanmen',
    name: 'Spicy Tantanmen',
    category: 'ramen',
    price: 220,
  },
  {
    id: 'seafood-shoyu',
    name: 'Seafood Shoyu',
    category: 'ramen',
    price: 260,
  },
  {
    id: 'naruto-ramen',
    name: 'Naruto Ramen',
    category: 'ramen',
    price: 260,
  },
  {
    id: 'chicken-miso-ramen',
    name: 'Chicken Miso Ramen',
    category: 'ramen',
    price: 230,
  },

  {
    id: 'prawn-bonito-maki',
    name: 'Prawn & Bonito Flakes Maki',
    category: 'salad',
    price: 220,
  },
  {
    id: 'furikake-tuna-maki',
    name: 'Furikake Tuna Maki',
    category: 'salad',
    price: 210,
  },
  {
    id: 'spicy-crunchy-roll',
    name: 'Spicy Crunchy Roll Maki',
    category: 'salad',
    price: 210,
  },
  {
    id: 'california-maki',
    name: 'California Maki',
    category: 'salad',
    price: 200,
  },
  {
    id: 'lettuce-kamote-salad',
    name: 'Lettuce & Kamote Salad',
    category: 'salad',
    price: 180,
    note: '(In Pineapple & Sesame Vinaigrette)',
  },
  {
    id: 'green-salad-kani-mango',
    name: 'Green Salad w/ Kani & Mango',
    category: 'salad',
    price: 180,
  },

  {
    id: 'katsudon',
    name: 'Katsudon (Pork/Chicken)',
    category: 'specials',
    price: 220,
  },
  {
    id: 'sizzling-burger-steak',
    name: 'Sizzling Burger Steak Teppanyaki',
    category: 'specials',
    price: 230,
  },
  {
    id: 'sizzling-sisig',
    name: 'Sizzling Sisig',
    category: 'specials',
    price: 195,
  },
  {
    id: 'sizzling-pork-tonkatsu',
    name: 'Sizzling Pork Tonkatsu',
    category: 'specials',
    price: 190,
  },
  {
    id: 'chicken-wings-teriyaki',
    name: 'Chicken Wings Teriyaki',
    category: 'specials',
    price: 220,
  },
  {
    id: 'chicken-torikatsu',
    name: 'Chicken Torikatsu',
    category: 'specials',
    price: 200,
  },
  {
    id: 'pork-tonkatsu',
    name: 'Pork Tonkatsu',
    category: 'specials',
    price: 210,
  },
  {
    id: 'japanese-curry-katsu',
    name: 'Japanese Curry-Katsu',
    category: 'specials',
    price: 230,
  },
  {
    id: 'gyoza-shoyu',
    name: 'Gyoza in Shoyu',
    category: 'specials',
    price: 180,
  },
  {
    id: 'gyoza-chili-garlic',
    name: 'Gyoza in Chili-Garlic Sauce',
    category: 'specials',
    price: 190,
  },
  {
    id: 'prawn-kani-tempura',
    name: 'Prawn & Kani Tempura',
    category: 'specials',
    price: 240,
  },
  {
    id: 'squid-rings',
    name: 'Squid Rings',
    category: 'specials',
    price: 230,
  },
  {
    id: 'pork-bagoong',
    name: 'Pork Bagoong',
    category: 'specials',
    price: 200,
  },
  {
    id: 'pork-sinigang-miso',
    name: 'Pork Sinigang sa Miso',
    category: 'specials',
    price: 210,
  },
]

const categoryLabels = Object.fromEntries(categories.map((category) => [category.id, category.label]))

export function getMenuItem(id) {
  return menuItems.find((item) => item.id === id)
}

export function itemsInCategory(categoryId) {
  return menuItems.filter((item) => item.category === categoryId)
}

export function itemPriceLabel(item) {
  if (item.variants?.length) return ''
  if (item.priceText) return item.priceText
  if (item.price != null) return formatPeso(item.price)
  return ''
}

export function variantPrice(variant) {
  if (variant.priceText) return variant.priceText
  return formatPeso(variant.price)
}

export function itemHaystack(item) {
  const parts = [item.name, categoryLabels[item.category] ?? '']
  if (item.note) parts.push(item.note)
  if (item.servedWith) parts.push(item.servedWith)
  if (item.choices) parts.push(...item.choices)
  if (item.price != null) parts.push(String(item.price), formatPeso(item.price))
  if (item.priceText) parts.push(item.priceText)
  for (const variant of item.variants ?? []) {
    parts.push(variant.label)
    if (variant.price != null) parts.push(String(variant.price), formatPeso(variant.price))
    if (variant.priceText) parts.push(variant.priceText)
  }
  return parts.join(' ').toLowerCase()
}
