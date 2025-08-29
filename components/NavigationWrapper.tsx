'use client';

import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';

export default function NavigationWrapper() {
  const pathname = usePathname();
  
  // Don't render Navigation on the donate page
  if (pathname === '/donate' || pathname?.startsWith('/donate/')) {
    return null;
  }
  
  return <Navigation />;
}
