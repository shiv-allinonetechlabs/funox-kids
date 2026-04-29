'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { allRoute } from '@/constants/allRoutes';
import { cn } from '@/lib/utils';

import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-99 w-full px-4 pt-4 md:px-10 md:pt-6">
      <div
        className={cn(
          'border-glass-border bg-glass-bg mx-auto flex max-w-7xl items-center justify-between rounded-[32px] border-2 p-2 pr-2 pl-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-all duration-500',
          isScrolled ? 'shadow-primary/10 border-primary/10' : ''
        )}
      >
        {/* Logo Section */}
        <Link
          href={allRoute.home}
          className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
        >
          <span className="font-baloo text-deepblue text-2xl font-black md:text-3xl">
            Fun<span className="text-primary">ox</span>
          </span>
        </Link>

        {/* Action Button Section */}
        <div className="flex items-center">
          <Link href={allRoute.home}>
            <Button variant="primary">PLAY NOW 🚀</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
