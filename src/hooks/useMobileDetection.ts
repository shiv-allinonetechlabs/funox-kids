import { useEffect, useState } from 'react';

/**
 * Custom hook to detect if the user is on a mobile device based on window width and user agent.
 * @param breakpoint The pixel width threshold for mobile detection (default: 768).
 * @returns boolean - true if on mobile, false otherwise.
 */
export const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobileUA = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const mobileWidth = typeof window !== 'undefined' && window.innerWidth < breakpoint;
      setIsMobile(!!(mobileUA || mobileWidth));
    };

    // Initial check
    checkMobile();

    // Resize listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
};
