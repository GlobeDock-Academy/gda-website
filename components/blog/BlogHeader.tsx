import React from 'react';
import { shantellSans } from '../../app/fonts';

export default function BlogHeader() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#F4F2FB' }}
    >
      {/* Pattern background like uLesson */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 md:h-28 lg:h-36"
        style={{
          backgroundImage: "url(/images/Patternuv.png)",
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center bottom',
          opacity: 0.6,
        }}
      />

      <div className="container mx-auto px-4 py-14 md:py-20 lg:py-24 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A1B4C]">GlobeDock Academy Blog</h1>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-1 w-24 rounded-full bg-[#CFCAFF]"></span>
            <span className="h-2 w-2 rounded-full bg-[#CFCAFF]"></span>
            <span className="h-1 w-24 rounded-full bg-[#CFCAFF]"></span>
          </div>
          <p className={`mt-6 text-base md:text-lg text-[#6B6B8A] ${shantellSans.className}`}>
            Insights, tips, and resources to help students, parents, and educators excel in their educational journey.
          </p>
        </div>
      </div>
    </section>
  );
}
