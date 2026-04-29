import { Metadata } from 'next';
import { Fragment } from 'react';

import NotFoundContent from '@/components/NotFoundContent';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description:
    'The page you are looking for could not be found. Please check the URL or return to the homepage.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {},
  openGraph: undefined,
  twitter: undefined,
};

export default function NotFound() {
  return (
    <Fragment>
      <NotFoundContent />
    </Fragment>
  );
}
