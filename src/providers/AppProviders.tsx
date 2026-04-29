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
        <ScrollToTop />
        <ThemeSwitcher />
        {children}
      </NetworkGuard>
    </ThemeProvider>
  );
}
