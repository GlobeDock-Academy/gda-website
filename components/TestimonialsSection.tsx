"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Container from '@/components/Container';

const testimonialsData = [
  {
    quote: 'It is a really nice app. I really enjoyed it, and I learned so much from it.',
    name: 'Inioluwa Oluwafunto',
    stars: 5,
  },
  {
    quote: 'Math had been hard for me, but when I was introduced to uLesson, it was great for me and I got better grades.',
    name: 'Olusola Abayomi',
    stars: 4,
  },
  {
    quote: 'Best app ever! If you ever want to top your class or learn more, I advise you to use this app.',
    name: 'Faleye Bunmi',
    stars: 5,
  },
  {
    quote: 'This app makes learning so easy for me. It’s so understandable and fun to use with the characters.',
    name: 'Mmesoma Onwudinjo',
    stars: 5,
  },
  {
    quote: 'GlobeDock Academy has been a game-changer for my study habits. The platform is intuitive and the content is top-notch.',
    name: 'Chinedu Okoro',
    stars: 5,
  },
  {
    quote: 'I love the bite-sized lessons. They make it easy to learn complex topics without feeling overwhelmed. Highly recommend!',
    name: 'Aisha Bello',
    stars: 4,
  },
  {
    quote: 'The interactive quizzes and progress tracking helped me identify my weak areas and focus on them. My scores have improved significantly!',
    name: 'Kwame Mensah',
    stars: 5,
  },
  {
    quote: 'An excellent resource for students of all levels. The explanations are clear and the examples are very helpful.',
    name: 'Fatima Aliyu',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <Container className="relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Loved by Students, Parents & Educators
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Hear what our community is saying about their GlobeDock Academy experience.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4"> {/* Negative margin to counteract padding on slides */} 
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4 min-w-0">
                <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col">
                  <p className="text-slate-700 text-sm mb-4 flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-slate-800 text-sm mb-1">
                      {testimonial.name}
                    </p>
                    <div className="flex">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                      {[...Array(5 - testimonial.stars)].map((_, i) => (
                        <Star key={`empty-${i}`} className="h-4 w-4 text-slate-300 fill-slate-300" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-0 -translate-y-1/2 transform bg-white p-2 rounded-full shadow-md hover:bg-slate-100 transition-colors z-10 -ml-4 sm:-ml-6"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6 text-slate-700" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 transform bg-white p-2 rounded-full shadow-md hover:bg-slate-100 transition-colors z-10 -mr-4 sm:-mr-6"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6 text-slate-700" />
        </button>
      </Container>
    </section>
  );
}

