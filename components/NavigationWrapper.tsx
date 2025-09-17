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
  
  // Only hide on specific donate subpages; show on blog pages for mobile menu access
  if (hideNavigation) {
    return null;
  }
  
  return <Navigation />;
}
