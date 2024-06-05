import { MetadataRoute } from 'next'
import { useLocale } from 'next-intl'
 
export default function sitemap(): MetadataRoute.Sitemap {
    const locale = useLocale()
  return [
  
    {
      url: `https://hotelsindibad.ma/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `https://hotelsindibad.ma/${locale}/rooms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
   
    {
      url: `https://hotelsindibad.ma/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
   
  ]
}