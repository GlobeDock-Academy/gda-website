import React from 'react';
import Container from '@/components/Container';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-white">
      {/* Tilted background - in opposite direction from WhyGlobedockWorksSection */}
      <div className="absolute inset-0 bg-gray-50 skew-y-2 transform origin-top-left z-0" />
      
      <Container className="relative z-10">
        <div className="flex flex-col py-12 px-4 md:px-12 max-w-5xl mx-auto">
          <div className="w-full mb-8">
            <p className="text-slate-700 text-xl md:text-2xl font-light leading-relaxed text-center">
              &quot;I&apos;m from the Amhara region, and I was struggling to prepare for the University Entrance Exam (UEE). B/c of you guys I passed my UEE and now have the chance to attend university.&quot;
            </p>
          </div>
          <div className="w-full flex justify-end">
            <div className="text-right">
              <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                EYASU TOMOLA 
              </div>
              <div className="text-xs text-slate-600 uppercase tracking-wider">
                AMHARA REGION, ETHIOPIA
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

