import React from 'react';
import { shantellSans } from '../../app/fonts';

export default function BlogHeader() {
  return (
    <section className="bg-[#F4F2FB] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A1B4C] mb-6">GlobeDock Academy Blog</h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="h-1 w-12 md:w-24 rounded-full bg-[#CFCAFF]"></span>
            <span className="h-2 w-2 rounded-full bg-[#CFCAFF]"></span>
            <span className="h-1 w-12 md:w-24 rounded-full bg-[#CFCAFF]"></span>
          </div>
          <p className={`text-base md:text-lg text-[#6B6B8A] ${shantellSans.className}`}>
            Insights, tips, and resources to help students, parents, and educators excel in their educational journey.
          </p>
        </div>
      </div>
    </section>
  );
}
