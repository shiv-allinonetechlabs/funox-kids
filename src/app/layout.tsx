import type { Metadata } from 'next';

import { fontBaloo, fontPoppins } from '@/constants/fonts';
import AppProviders from '@/providers/AppProviders';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Funox Kids | Safe & Free Games for Children',
    template: '%s | Funox Kids',
  },
  description:
    'The ultimate safe playground for kids! Play hundreds of free, high-quality games in a secure and fun environment designed specifically for children.',
  keywords: ['kids games', 'free games', 'safe games', 'online games for kids', 'educational games'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
