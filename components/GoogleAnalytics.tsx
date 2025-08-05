'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Declare global gtag function
declare global {
  interface Window {
    gtag: (command: string, id: string, config?: any) => void;
    dataLayer: any[];
  }
}

// PageView analytics component that doesn't use searchParams
function PageViewAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && typeof window.gtag !== 'undefined') {
      // Send page view with the new URL (without search params to avoid SSR issues)
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname, GA_MEASUREMENT_ID]);

  return null;
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID = 'G-Q9XG4TJVR9' }: { GA_MEASUREMENT_ID?: string }) {

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      
      {/* Page view tracking without search params to avoid SSR issues */}
      <PageViewAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
    </>
  );
}
