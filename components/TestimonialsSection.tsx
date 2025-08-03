'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Container from '@/components/Container';

const testimonials = [
  {
    quote: "The lessons have been very productive. My son's grades have really improved, and even his school teachers commend his new confidence. He now answers questions in class, and scores higher than most of his class mates.",
    name: "Mrs. Alice",
    location: "Uyo, Akwaibom",
    rating: 5
  },
  {
    quote: "I'm from the Amhara region, and I was struggling to prepare for the University Entrance Exam (UEE). B/c of you guys I passed my UEE and now have the chance to attend university.",
    name: "Eyasu Tomola",
    location: "Amhara Region, Ethiopia",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to advance to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    // Clear any existing timers
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Only set up timer if not paused
    if (!isPaused) {
      // Set up a new timer to advance testimonials every 5 seconds
      timerRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    // Clean up on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, isPaused]); // Re-run effect when currentIndex or isPaused changes

  // Pause auto-slide when user interacts with controls
  const handleManualNavigation = (callback: () => void) => {
    setIsPaused(true); // Pause auto-sliding
    callback(); // Call the navigation function (next or prev)
    
    // Resume auto-sliding after 10 seconds of inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0B1D53' }}>
      <Container>
        <div className="relative max-w-4xl mx-auto px-8">
          {/* Quote Icon - Positioned top left */}
          <div className="absolute left-8 top-0">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white/30 flex-shrink-0 opacity-70">
              <path d="M12 21C12 16.0294 16.0294 12 21 12V8C13.8203 8 8 13.8203 8 21V32C8 35.3137 10.6863 38 14 38H18C21.3137 38 24 35.3137 24 32V24C24 20.6863 21.3137 18 18 18H14C12.8954 18 12 18.8954 12 20V21Z" fill="currentColor"/>
              <path d="M36 21C36 16.0294 40.0294 12 45 12V8C37.8203 8 32 13.8203 32 21V32C32 35.3137 34.6863 38 38 38H42C45.3137 38 48 35.3137 48 32V24C48 20.6863 45.3137 18 42 18H38C36.8954 18 36 18.8954 36 20V21Z" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Centered Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Parents love Tuteria
            </h2>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => handleManualNavigation(prevTestimonial)}
            className="absolute left-0 md:left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button 
            onClick={() => handleManualNavigation(nextTestimonial)}
            className="absolute right-0 md:right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Testimonial Content */}
          <div className="mb-10 px-12">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 text-center">
              {currentTestimonial.quote}
            </p>

            {/* Star Rating */}
            <div className="flex justify-center mb-2">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mx-0.5" />
              ))}
            </div>

            {/* Attribution */}
            <div className="text-center">
              <div className="text-white font-semibold text-lg mb-0.5">
                {currentTestimonial.name}
              </div>
              <div className="text-white/70 text-sm">
                {currentTestimonial.location}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleManualNavigation(() => setCurrentIndex(index));
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

