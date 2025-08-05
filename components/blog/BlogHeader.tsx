import React from 'react';
import { dailyMemo } from '../../app/fonts';

export default function BlogHeader() {
  return (
    <div 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/blog_bg.png)'
      }}
    >
      <div className="absolute inset-0 bg-primary/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-[#0B1D53] p-8 rounded-[40px] max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg inline-block">GlobeDock Academy Blog</h1>
            <p className={`text-lg md:text-xl text-yellow-400 mt-6 drop-shadow-md ${dailyMemo.className}`}>
              Insights, tips, and resources to help students, parents, and educators excel in their educational journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
