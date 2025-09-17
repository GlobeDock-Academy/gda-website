'use client';

import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';

export default function NavigationWrapper() {
  const pathname = usePathname();
  
  // Hide navigation on specific pages
  const hideNavigation = ['/donate/form', '/donate/thank-you'].includes(pathname);
  
  // Debug log
  console.log('Current path:', pathname);
  console.log('Hide navigation:', hideNavigation);
  
  // Don't render Navigation on blog pages
  if (pathname === '/blog' || pathname?.startsWith('/blog/') || hideNavigation) {
    return null;
  }
  
  return <Navigation />;
}
