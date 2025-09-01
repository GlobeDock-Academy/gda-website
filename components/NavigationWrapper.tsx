'use client';

import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';

export default function NavigationWrapper() {
  const pathname = usePathname();
  
  // Don't render Navigation on blog pages
  if (pathname === '/blog' || pathname?.startsWith('/blog/')) {
    return null;
  }
  
  return <Navigation />;
}
