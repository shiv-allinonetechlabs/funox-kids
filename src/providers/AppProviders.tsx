import { ReactNode } from 'react';

import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';
import NetworkGuard from '@/providers/NetworkGuard';

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <NetworkGuard>
      <CustomCursor />
      <ScrollToTop />
      {children}
    </NetworkGuard>
  );
}
