import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';

const features = [
  {
    iconSrc: '/images/personalized.png',
    title: 'Personalized Learning Paths',
    description: 'Tailored educational journeys that adapt to each student\'s pace and learning style, ensuring understanding.',
  },
  {
    iconSrc: '/images/trusted-content.png',
    title: 'Expert-Crafted Content',
    description: 'Access a rich library of lessons and resources, all created by subject matter experts and educators.',
  },
  {
    iconSrc: '/images/tools.png',
    title: 'Tools for Success',
    description: 'Interactive tools and analytics to help students track progress and educators to support learning effectively.',
  },
];

export default function WhyGlobedockWorksSection() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-white">
      {/* Tilted background */}
      <div className="absolute inset-0 bg-gray-50 -skew-y-2 transform origin-top-right z-0" />
      
      <Container className="relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Why Globedock Academy works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="h-[70px] w-[70px] mb-4 mx-auto relative">
                <Image 
                  src={feature.iconSrc}
                  alt={feature.title}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
