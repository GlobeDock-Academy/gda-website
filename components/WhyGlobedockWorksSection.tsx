import React from 'react';
import { Users, BookOpenCheck, BarChartBig } from 'lucide-react'; // Example icons
import Container from '@/components/Container';

const features = [
  {
    icon: <Users className="h-12 w-12 text-secondary mb-4 mx-auto" />,
    title: 'Personalized Learning Paths',
    description: 'Tailored educational journeys that adapt to each student\'s pace and learning style, ensuring understanding.',
  },
  {
    icon: <BookOpenCheck className="h-12 w-12 text-secondary mb-4 mx-auto" />,
    title: 'Expert-Crafted Content',
    description: 'Access a rich library of lessons and resources, all created by subject matter experts and educators.',
  },
  {
    icon: <BarChartBig className="h-12 w-12 text-secondary mb-4 mx-auto" />,
    title: 'Tools for Success',
    description: 'Interactive tools and analytics to help students track progress and educators to support learning effectively.',
  },
];

export default function WhyGlobedockWorksSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Why Globedock Academy works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {feature.icon}
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
