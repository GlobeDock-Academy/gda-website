import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';

import { Play, GraduationCap, Download } from 'lucide-react';

const features = [
  {
    icon: <Play className="h-8 w-8 text-primary" strokeWidth={2.5} />,
    title: 'Engaging Video Lessons',
    description: 'Fun, expert-led video lessons that make every concept simple and enjoyable.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" strokeWidth={2} />,
    title: 'Competency-Based Learning',
    description: 'Students advance by mastering skills and concepts, ensuring true understanding before moving forward.',
  },
  {
    icon: <Download className="h-8 w-8 text-primary" strokeWidth={2.5} />,
    title: 'Learning Anywhere, Anytime',
    description: 'Download lessons and learn at your own pace, online or offline.',
  },
];

export default function WhyGlobedockWorksSection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <h2 className="text-[2rem] font-bold text-center mb-12 text-[#212121] tracking-[-0.02em] leading-[1.2]">
          Why GlobeDock Academy works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-4">
              <div className="h-[72px] w-[72px] mb-6 mx-auto flex items-center justify-center bg-gray-50 rounded-full shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-[1.125rem] font-bold text-[#212121] mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[#5F6368] text-[1rem] leading-[1.6] tracking-[-0.1px] max-w-[300px] mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
