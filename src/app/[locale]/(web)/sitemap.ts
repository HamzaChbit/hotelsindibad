
 
export default function sitemap() {
    return [
      {
        url: 'https://sindibad.ma',
        lastModified: new Date(),
        alternates: {
          languages: {
            en: 'https://sindibad.ma/en',
            fr: 'https://sindibad.ma/fr',
          },
        },
      },
      {
        url: 'https://sindibad.ma/rooms',
        lastModified: new Date(),
        alternates: {
          languages: {
            en: 'https://sindibad.ma/en/rooms',
            fr: 'https://sindibad.ma/fr/rooms',
          },
        },
      },
      {
        url: 'https://sindibad.ma/contact',
        lastModified: new Date(),
        alternates: {
          languages: {
            en: 'https://sindibad.ma/en/contact',
            fr: 'https://sindibad.ma/fr/contact',
          },
        },
      },
    ]
  }