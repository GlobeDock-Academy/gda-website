'use client';

import React, { useState, useEffect, useRef } from 'react';
import Container from '@/components/Container';
import Image from 'next/image';
import { LearnersIcon, TimeIcon, CountriesIcon, CoursesIcon, VideoIcon } from './StatIcons';

// Custom hook for count-up animation
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const endValue = end;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          const increment = endValue / totalFrames;

          const counter = () => {
            start += increment;
            if (start < endValue) {
              setCount(Math.ceil(start));
              requestAnimationFrame(counter);
            } else {
              setCount(endValue);
            }
          };
          requestAnimationFrame(counter);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  borderColor: string;
  isLowered?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, borderColor, isLowered = false }) => {
  const isMillion = value.includes('M+');
  const isPlus = value.endsWith('+');
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const { count, ref } = useCountUp(numericValue);

  const formatCount = (num: number) => {
    if (isMillion) {
      return `${num}M+`;
    }
    return `${num.toLocaleString()}${isPlus ? '+' : ''}`;
  };

  return (
    <div className={`flex h-[280px] w-full max-w-[220px] items-center justify-center flex-col relative bg-white rounded-lg shadow-sm border-b-4 ${isLowered ? 'mt-12' : ''}`} style={{ borderBottomColor: borderColor }}>
      {/* Half circle background behind icon */}
      <div className="relative w-20 h-20 flex items-center justify-center mb-8 mt-8">
        <div className="absolute inset-0 w-full h-full bg-gray-100 rounded-full opacity-60"></div>
        <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
          {icon}
        </div>
      </div>
      
      {/* Stats number */}
      <p ref={ref} className="text-3xl font-bold text-gray-900 mb-3">
        {formatCount(count)}
      </p>
      
      {/* Label */}
      <p className="text-sm text-gray-600 text-center px-4 mb-6">{label}</p>
    </div>
  );
};

const stats = [
    {
        icon: <LearnersIcon />,
        value: '200,000+',
        label: 'Learners served',
        borderColor: '#3B82F6', // Blue
        isLowered: false,
    },
    {
        icon: <VideoIcon />,
        value: '25M+',
        label: 'Views on YouTube & app',
        borderColor: '#F59E0B', // Orange
        isLowered: true,
    },
    {
        icon: <TimeIcon />,
        value: '100M+',
        label: 'Learning Minutes',
        borderColor: '#10B981', // Green
        isLowered: false,
    },
    {
        icon: <CoursesIcon />,
        value: '5000+',
        label: 'Video Lessons',
        borderColor: '#EF4444', // Red
        isLowered: true,
    },
];

export default function StatsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <Container>
        <div className="relative max-w-7xl mx-auto">
          {/* Connecting line behind the stats - positioned higher to match reference */}
          <div className="absolute top-[30px] left-0 w-full h-2 flex items-center justify-center">
            <div className="w-full h-[2px] bg-blue-300 relative">
              {/* Connection dots on the line */}
              <div className="absolute left-[12.5%] top-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute left-[37.5%] top-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute left-[62.5%] top-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute left-[87.5%] top-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
            </div>
          </div>
          
          {/* Stats grid with proper spacing */}
          <div className="relative flex justify-between items-start gap-8 pt-16">
            {stats.map((stat, index) => (
              <StatCard 
                key={index} 
                icon={stat.icon} 
                value={stat.value} 
                label={stat.label} 
                borderColor={stat.borderColor}
                isLowered={stat.isLowered}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

