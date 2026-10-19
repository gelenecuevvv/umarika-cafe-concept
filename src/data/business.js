const mapQuery = 'Umarika Café, Purok 16, Damilag, Manolo Fortich, Bukidnon, Philippines'

export const business = {
  name: 'Umarika Café',
  shortName: 'Umarika',
  placeLabel: 'Damilag, Bukidnon',
  eyebrow: 'UMARIKA CAFÉ · DAMILAG, BUKIDNON',
  addressLines: ['Purok 16, Damilag,', 'Manolo Fortich, Bukidnon,', 'Philippines.'],
  addressSingle: 'Purok 16, Damilag, Manolo Fortich, Bukidnon, Philippines',
  email: 'umarikacafe@gmail.com',
  facebookUrl: 'https://www.facebook.com/p/Umarika-Cafe-100086616964508/',
  mapSearchUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
  conceptCredit: 'Independent website concept by Angelene Cuevo.',
}

export const mailtoUrl = `mailto:${business.email}`
