import { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/constants';
import { STATIC_PAGE_METADATA } from '@/constants/pageMetadata';

/**
 * Generate metadata for pages using static data
 *
 * @param path - The route path (e.g., '/', '/parents', etc.)
 * @param _params - Next.js params (ignored in funox-kids as no i18n/dynamic API metadata needed yet)
 * @returns Metadata
 */
export function generatePageMetadata(path: string, _params?: any): Metadata {
  const pageData = STATIC_PAGE_METADATA[path] || STATIC_PAGE_METADATA['/'];

  const title = pageData.title;
  const description = pageData.description;
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title,
      description,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
