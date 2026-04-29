'use client';

import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  icon,
  defaultOpen = false,
  isOpen: externalIsOpen,
  onToggle,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div
      className={`border-glass-border bg-card-bg group overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
        isOpen
          ? 'bg-primary/3 scale-[1.005] shadow-lg dark:bg-white/5'
          : 'hover:bg-primary/2 dark:hover:bg-white/2'
      }`}
    >
      <button
        onClick={handleToggle}
        className="font-baloo text-deepblue flex w-full cursor-pointer items-center justify-between p-4 text-left text-lg font-bold transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${isOpen ? 'bg-primary scale-105 rotate-6 text-white' : 'bg-primary/10 text-primary dark:bg-white/10 dark:text-white/90'}`}
            >
              <div className="scale-90">{icon}</div>
            </div>
          )}
          <span className="flex-1 leading-tight">{title}</span>
        </div>

        <div
          className={`bg-primary/10 text-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-500 dark:bg-white/10 dark:text-white/90 ${isOpen ? 'bg-primary dark:bg-primary rotate-180 text-white dark:text-white' : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-deepblue/70 border-glass-border/30 border-t p-5 pt-1 text-sm leading-relaxed md:text-base dark:text-white/60">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
