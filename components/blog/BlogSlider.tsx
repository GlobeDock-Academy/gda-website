"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

// Define the slide type
interface Slide {
  id: number;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  image: string;
  link: string;
  color: string;
}

// Sample slides data
const slides: Slide[] = [
  {
    id: 1,
    title: "Maximise Your Learning with",
    titleHighlight: "GlobeDock's 5-Day Free Trial",
    subtitle: "Experience personalized learning that adapts to your needs",
    image: "/images/students-uniform.jpg",
    link: "/blog/maximise-learning",
    color: "#7B61FF"
  },
  {
    id: 2,
    title: "How Can You Make",
    titleHighlight: "Studying Easier",
    subtitle: "with the GlobeDock App?",
    image: "/images/placeholder-blog.jpg",
    link: "/blog/studying-easier",
    color: "#E67E22"
  },
  {
    id: 3,
    title: "Education in Ethiopia:",
    titleHighlight: "A Practical Technology Integration Guide",
    subtitle: "for Schools and Educators",
    image: "/images/placeholder-blog.jpg",
    link: "/blog/education-ethiopia",
    color: "#2A1B4C"
  }
];

export default function BlogSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoPlay({ delay: 5000, stopOnInteraction: false })
  ]);
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden bg-[#F4F2FB]">
      {/* Wave pattern at the bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-12 w-full z-10"
        style={{
          backgroundImage: "url(/images/Patternuv.png)",
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center bottom',
          opacity: 0.8,
        }}
      />
      
      {/* Embla carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              className="flex-[0_0_100%] min-w-0"
            >
              <div className="container mx-auto px-4">
                <div className="relative flex flex-col md:flex-row items-center py-12 md:py-16">
                  {/* Text content */}
                  <div className="w-full md:w-1/2 z-10 pr-0 md:pr-8">
                    <h2 className="text-3xl md:text-5xl font-bold">
                      <span className="text-[#2A1B4C]">{slide.title} </span>
                      <span style={{ color: slide.color }}>{slide.titleHighlight}</span>
                    </h2>
                    <h3 className="text-xl md:text-2xl font-medium text-[#2A1B4C] mt-3">
                      {slide.subtitle}
                    </h3>
                    
                    <div className="mt-8">
                      <Link 
                        href={slide.link}
                        className="inline-flex items-center text-[#2A1B4C] font-medium hover:underline"
                      >
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="w-full md:w-1/2 relative h-64 md:h-80 mt-6 md:mt-0">
                    <Image
                      src={slide.image}
                      alt={slide.title}
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
          ))}
        </div>
      </div>
      
      {/* Dots navigation */}
      <div className="flex justify-center gap-2 pb-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex 
                ? "bg-[#7B61FF] w-6" 
                : "bg-[#CFCAFF]"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
