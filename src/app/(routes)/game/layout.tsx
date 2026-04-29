import { ReactNode } from 'react';

interface GameLayoutProps {
  children: ReactNode;
}

const GameLayout = ({ children }: GameLayoutProps) => {
  return <>{children}</>;
};

export default GameLayout;
