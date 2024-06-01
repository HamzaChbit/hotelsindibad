import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'img.clerk.com',
      'cf.bstatic.com',
      'cdn.sanity.io'
    ],
  },
};

export default withNextIntl(nextConfig);
