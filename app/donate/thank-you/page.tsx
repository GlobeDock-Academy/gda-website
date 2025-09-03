"use client";

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  const router = useRouter();

  // Prefilled mailto link
  const mailtoHref = (() => {
    const to = 'donation@gdacademy.et';
    const subject = encodeURIComponent('Thank you for your donation');
    const body = encodeURIComponent(
      'Hello GlobeDock Academy team,\n\nI just completed a donation. Please let me know if you need any additional information.\n\nThank you!'
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  })();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 pt-10 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#6D3D94] mb-5">
            Thank You for Your Generosity
          </h1>

          <div className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            <p className="whitespace-normal sm:whitespace-nowrap">Your support is making education accessible for students who need it most.</p>
            <p>
              Because of you, another learner can access quality <span className="font-semibold">education</span> and grow
              with confidence.
            </p>
            <p className="mt-4">
              If you have any questions, please reach us at{' '}
              <a href={mailtoHref} className="text-[#6D3D94] underline hover:text-[#5a2f7a]">
                donation@gdacademy.et
              </a>
            </p>
          </div>

          <div className="flex justify-center mt-2">
            <Button
              onClick={() => router.push('/')}
              className="bg-[#6D3D94] hover:bg-[#5a2f7a] text-white px-6 py-6 rounded-lg"
              style={{ minWidth: 220 }}
            >
              Return to Homepage
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        GlobeDock Academy 2025
      </footer>
    </div>
  );
}
