import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://buildcalc.pro'
  const routes = ['', '/concrete-calculator', '/concrete-bags', '/tile-calculator', '/brick-calculator', '/paint-calculator', '/rebar-calculator', '/unit-converter']
  return routes.map(r => ({ url: `${base}${r}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: r === '' ? 1 : 0.8 }))
}
