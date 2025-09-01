"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FeaturedPostBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Wave pattern at the bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-12 w-full"
        style={{
          backgroundImage: "url(/images/Patternuv.png)",
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center bottom',
          opacity: 0.8,
        }}
      />
      
      {/* Main banner content */}
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="w-full md:w-1/2 py-12 md:py-20 z-10">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-[#2A1B4C]">How Can You </span>
              <span className="text-[#E67E22]">Make<br />Studying Easier</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-[#2A1B4C] mt-2">
              with the GlobeDock App?
            </h3>
            
            <div className="mt-8">
              <Link 
                href="/blog/make-studying-easier" 
                className="inline-flex items-center text-[#2A1B4C] font-medium hover:underline"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2 relative h-64 md:h-96">
            <Image
              src="/images/students-uniform.jpg"
              alt="Students using the GlobeDock app"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="rounded-lg"
            />
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 opacity-70">
              <Image
                src="/images/decorative-dots.svg"
                alt=""
                width={64}
                height={64}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
