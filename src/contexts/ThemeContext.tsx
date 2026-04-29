'use client';

import React, {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  hue: number;
  setHue: (hue: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'theme';
const HUE_STORAGE_KEY = '--hue';
const THEME_CHANGE_EVENT = 'funox-kids:theme-change';

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // ignore read errors
  }

  // Always return 'light' as the default theme
  return 'light';
}

function getHueSnapshot(): number {
  if (typeof window === 'undefined') return 203;
  try {
    const saved = window.localStorage.getItem(HUE_STORAGE_KEY);
    if (saved) return Number(saved);
  } catch {
    // ignore read errors
  }
  return 203;
}

function getServerSnapshot<T>(defaultValue: T): () => T {
  return () => defaultValue;
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === 'undefined') return () => {};
  const handler = () => onStoreChange();

  window.addEventListener('storage', handler);
  window.addEventListener(THEME_CHANGE_EVENT, handler);

  const mql = window.matchMedia?.('(prefers-color-scheme: dark)');
  if (mql?.addEventListener) {
    mql.addEventListener('change', handler);
  } else if (mql?.addListener) {
    mql.addListener(handler);
  }

  return () => {
    window.removeEventListener('storage', handler);
    window.removeEventListener(THEME_CHANGE_EVENT, handler);
    if (mql?.removeEventListener) {
      mql.removeEventListener('change', handler);
    } else if (mql?.removeListener) {
      mql.removeListener(handler);
    }
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerSnapshot<Theme>('light')
  );
  const hue = useSyncExternalStore(
    subscribe,
    getHueSnapshot,
    getServerSnapshot<number>(203)
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    // Apply dark class
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Apply hue variable
    root.style.setProperty('--hue', hue.toString());
  }, [theme, hue, mounted]);

  const setTheme = (newTheme: Theme) => {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // ignore write errors
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  const setHue = (newHue: number) => {
    try {
      window.localStorage.setItem(HUE_STORAGE_KEY, newHue.toString());
    } catch {
      // ignore write errors
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <ThemeContext.Provider
      value={{ theme, resolvedTheme: theme, setTheme, hue, setHue }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
