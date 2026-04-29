import type { ReactNode } from 'react';

interface GameDetailLayoutProps {
  children: ReactNode;
}

const GameDetailLayout = ({ children }: GameDetailLayoutProps) => {
  return <>{children}</>;
};

export default GameDetailLayout;
