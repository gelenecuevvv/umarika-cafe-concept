const mapQuery = 'Umarika Café, Purok 16, Damilag, Manolo Fortich, Bukidnon, Philippines'

export const business = {
  name: 'Umarika Café',
  shortName: 'Umarika',
  placeLabel: 'Damilag, Bukidnon',
  eyebrow: 'DAMILAG, BUKIDNON',
  addressLines: ['Purok 16, Damilag,', 'Manolo Fortich, Bukidnon,', 'Philippines.'],
  addressSingle: 'Purok 16, Damilag, Manolo Fortich, Bukidnon, Philippines',
  email: 'umarikacafe@gmail.com',
  hoursLabel: 'Store hours',
  hours: '10:00 AM–10:00 PM',
  facebookUrl: 'https://www.facebook.com/p/Umarika-Cafe-100086616964508/',
  mapsUrl: 'https://maps.app.goo.gl/yEfu782oV3RBfPaR7',
  mapSearchUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
  // Paste the iframe src from Google Maps → Share → Embed a map.
  // Leave this empty until that URL is supplied. Do not put the maps.app.goo.gl short link here.
  mapEmbedUrl: '',
  conceptCredit: 'Independent website concept by Angelene Cuevo.',
}

export const mailtoUrl = `mailto:${business.email}`

export function mapEmbedSrc() {
  const url = business.mapEmbedUrl.trim()
  if (!url || url.includes('maps.app.goo.gl')) return ''
  if (!url.startsWith('https://www.google.com/maps/embed')) return ''
  return url
}
