import { Cabin_Sketch, Poppins } from 'next/font/google';

// Cabin Sketch,cursive
export const fontBaloo = Cabin_Sketch({
  variable: '--font-baloo',
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: true,
  display: 'swap',
  adjustFontFallback: true,
});

export const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  preload: true,
  display: 'swap',
  variable: '--font-poppins',
  adjustFontFallback: true,
});
