import { ReactNode } from 'react';

import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { ThemeProvider } from '@/contexts/ThemeContext';
import NetworkGuard from '@/providers/NetworkGuard';

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <NetworkGuard>
        <CustomCursor />
        <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col items-end md:right-6 md:bottom-6">
          <ThemeSwitcher />
          <ScrollToTop />
        </div>
        {children}
      </NetworkGuard>
    </ThemeProvider>
  );
}
