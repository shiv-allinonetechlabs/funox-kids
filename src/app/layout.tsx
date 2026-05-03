import { Metadata } from 'next';

import { SITE_MASK_ICON, SITE_NAME, SITE_URL } from '@/constants';
import { fontBaloo, fontPoppins } from '@/constants/fonts';
import AppProviders from '@/providers/AppProviders';

import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    keywords: [
      'kids games',
      'free games',
      'safe games',
      'online games for kids',
      'educational games',
    ],
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    referrer: 'strict-origin-when-cross-origin',
    formatDetection: {
      telephone: false,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
      title: SITE_NAME,
    }, // Note: canonical and alternates are defined by each page, not the layout
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
    },
    // Icons defined only in <head> below with theme-aware media queries (no duplicate icons from metadata)
    icons: {
      other: [
        {
          rel: 'mask-icon',
          url: SITE_MASK_ICON,
          color: '#009cff',
        },
      ],
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0b1220',
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      translate="no"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body
        suppressHydrationWarning
        className={`${fontBaloo.variable} ${fontPoppins.variable} antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
