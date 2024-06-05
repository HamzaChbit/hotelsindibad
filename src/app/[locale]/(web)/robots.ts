import { MetadataRoute } from 'next';
import { useLocale } from 'next-intl';

export default function robots(): MetadataRoute.Robots {
    const locale = useLocale()
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      
    },
    sitemap: `https://hotelsindibad.ma/${locale}/sitemap.xml`,
   
  }
}