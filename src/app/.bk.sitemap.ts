import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://xn--90aalmgvgdrhcgg.xn--p1ai/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://xn--90aalmgvgdrhcgg.xn--p1ai/catalog.html',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://xn--90aalmgvgdrhcgg.xn--p1ai/about.html',
      lastModified: new Date(),
        changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://xn--90aalmgvgdrhcgg.xn--p1ai/contacts.html',
      lastModified: new Date(),
        changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
