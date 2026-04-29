'use client';

import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const followerX = useRef(0);
  const followerY = useRef(0);
  const isHovering = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHovering.current = !!target.closest(
        'a, button, [role="button"], input, select, textarea'
      );
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const animate = () => {
      // Follower lerp (slightly slower for smoother trail)
      followerX.current += (mouseX.current - followerX.current) * 0.12;
      followerY.current += (mouseY.current - followerY.current) * 0.12;

      // Interaction Scales
      const clickScale = isClicking ? 0.8 : 1;
      const hoverScale = isHovering.current ? 1.8 : 1;
      const innerHoverScale = isHovering.current ? 1.2 : 1;
      const rotation = isHovering.current ? 180 : 0;

      // Update Follower (Outer Circle)
      follower.style.transform = `translate3d(${followerX.current}px, ${followerY.current}px, 0) translate(-50%, -50%) scale(${hoverScale * clickScale})`;
      follower.style.backgroundColor = isHovering.current
        ? 'rgba(0, 156, 255, 0.15)'
        : 'transparent';
      follower.style.borderColor = isHovering.current
        ? 'rgba(0, 156, 255, 0.6)'
        : 'rgba(0, 156, 255, 0.3)';
      follower.style.borderStyle = isHovering.current ? 'solid' : 'dashed';

      // Update Main Cursor (Star)
      cursor.style.transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0) translate(-50%, -50%) scale(${innerHoverScale * clickScale}) rotate(${rotation}deg)`;
      cursor.style.filter = isHovering.current
        ? 'hue-rotate(15deg) drop-shadow(0 0 15px rgba(0, 156, 255, 0.9))'
        : 'none';

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(raf);
    };
  }, [mounted, isVisible, isClicking]);

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-9999 hidden lg:block ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
    >
      {/* Outer Follower */}
      <div
        ref={followerRef}
        className="absolute top-0 left-0 size-8 rounded-full border-2 transition-[background-color,border-color,border-style] duration-500 ease-out"
        style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform' }}
      />

      {/* Main Cursor (Star) */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 flex size-6 items-center justify-center transition-transform duration-500 ease-out"
        style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform' }}
      >
        <div className="relative flex h-full w-full items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="fill-primary relative z-10 h-full w-full drop-shadow-[0_2px_8px_rgba(0,156,255,0.4)]"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          {/* Subtle trail/glow */}
          <div className="bg-primary/30 absolute inset-0 animate-pulse rounded-full blur-xl" />
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
