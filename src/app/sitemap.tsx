

export default function sitemap() {
  return [
    {
      url: 'https://hotelsindibad.ma',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://hotelsindibad.ma/en',
          fr: 'https://hotelsindibad.ma/fr',
        },
      },
    },
    {
      url: 'https://hotelsindibad.ma/about',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://hotelsindibad.ma/en/about',
          fr: 'https://hotelsindibad.ma/fr/about',
        },
      },
    },
    {
      url: 'https://hotelsindibad.ma/blog',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://hotelsindibad.ma/en/blog',
          fr: 'https://hotelsindibad.ma/fr/blog',
        },
      },
    },
  ]
}
