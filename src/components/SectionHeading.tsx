import React from 'react';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  highlightWord?: string;
  icon?: string;
  showLine?: boolean;
  className?: string;
  variant?: 'default' | 'gradient';
}

const SectionHeading: React.FC<SectionHeadingProps> = React.memo(
  ({
    title,
    highlightWord,
    icon,
    showLine = true,
    className,
    variant = 'gradient',
  }) => {
    // If highlighted word exists, split the title
    const parts = highlightWord ? title.split(highlightWord) : [title];

    return (
      <div className={cn('mb-8 md:mb-12', className)}>
        <div className="flex items-center gap-4">
          {/* Title and Icon Group */}
          <div className="flex shrink-0 items-center gap-4">
            {icon && <span className="text-3xl md:text-4xl">{icon}</span>}
            <h2
              className={cn(
                'font-baloo text-3xl font-black md:text-5xl',
                variant === 'gradient'
                  ? 'from-primary via-secondary to-primary bg-linear-to-r bg-clip-text text-transparent'
                  : 'text-foreground'
              )}
            >
              {parts[0]}
              {highlightWord && (
                <span className="text-primary">{highlightWord}</span>
              )}
              {parts[1]}
            </h2>
          </div>

          {/* Right Line */}
          {showLine && (
            <div className="to-primary/10 from-primary/20 h-1 grow rounded-full bg-linear-to-r" />
          )}
        </div>
      </div>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';

export default SectionHeading;
