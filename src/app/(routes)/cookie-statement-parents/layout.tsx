import { allRoute } from '@/constants/allRoutes';
import { generatePageMetadata } from '@/utils/generatePageMetadata';

export async function generateMetadata() {
  return generatePageMetadata(allRoute.cookieStatementParents);
}

export default function CookieStatementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
