'use client';

import NoInternet from '@/components/NoInternet';
import useNetworkStatus from '@/hooks/useNetworkStatus';

export default function NetworkGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const isOnline = useNetworkStatus();

  if (!isOnline) {
    return <NoInternet />;
  }

  return <>{children}</>;
}
