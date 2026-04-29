import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NODE_ENV === 'production';

  // Disallow all crawlers in non-production environments
  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  // Production environment: allow crawling but disallow sensitive routes
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/preview/', '/_next/'],
    },
    sitemap: 'https://kids.funox.com/sitemap.xml',
  };
}
