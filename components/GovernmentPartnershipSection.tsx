import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';

export default function GovernmentPartnershipSection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="rounded-[2rem] overflow-hidden relative max-w-6xl mx-auto">
          {/* Dark background with image */}
          <div className="absolute inset-0 bg-[#141E33] z-0">
            <div className="absolute inset-0 bg-[url('/images/bg-government.png')] bg-no-repeat bg-cover opacity-70"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col">
            {/* Text content */}
            <div className="text-white p-8 md:p-10 py-16 md:py-20 lg:py-24">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Government + GlobeDock = <br />Societal Transformation
              </h2>
              <p className="text-white/80 text-sm md:text-base mb-8 max-w-2xl mx-auto text-center leading-relaxed">
                Are you interested in making a change with GlobeDock? GlobeDock partners with government bodies to foster initiatives that contribute to societal impact through education.
              </p>
              <div className="flex justify-center mt-4">
                <a href="mailto:info@gdacademy.et">
                  <Button 
                    variant="outline" 
                    className="bg-white text-[#141E33] hover:bg-white/90 hover:text-[#141E33] font-medium rounded-full px-8 py-2"
                  >
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
