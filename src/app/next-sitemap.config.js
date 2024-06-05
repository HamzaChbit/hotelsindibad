// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://hotelsindibad.ma',
  generateRobotsTxt: true, 
  sitemapSize: 7000,
  outDir: './public',
  alternateRefs: [
    {
      href: 'https://hotelsindibad.ma/en',
      hreflang: 'en',
    },
    {
      href: 'https://hotelsindibad.ma/fr',
      hreflang: 'fr',
    },
  ],
};
