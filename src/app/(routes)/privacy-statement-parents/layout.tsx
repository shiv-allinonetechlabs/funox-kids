import { allRoute } from '@/constants/allRoutes';
import { generatePageMetadata } from '@/utils/generatePageMetadata';

export async function generateMetadata() {
  return generatePageMetadata(allRoute.privacyStatementParents);
}

export default function PrivacyStatementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
