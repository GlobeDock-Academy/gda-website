"use client";

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronRight } from 'lucide-react';
import { VideoCard } from '@/components/VideoCard';
import { VideoReview } from '@/lib/testimonials-data';

interface Props {
  testimonials: VideoReview[];
}

export default function HearFromCommunitySection({ testimonials }: Props) {
    if (!testimonials || testimonials.length === 0) return null;

    const PREVIEW_VIDEOS = testimonials.slice(0, 5);
    const autoplay = Autoplay({ delay: 4000, stopOnInteraction: true });

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { align: 'start', loop: true, dragFree: true },
        [autoplay]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [playingId, setPlayingId] = useState<string | null>(null);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
        emblaApi.on('reInit', () => {
            setScrollSnaps(emblaApi.scrollSnapList());
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });
    }, [emblaApi]);

    return (
        <section className="py-20 bg-white overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Hear from the community
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Check out our Wall of Love where GlobeDock Academy community members share highlights of their learning journey.
                </p>
            </div>

            {/* Carousel */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Prev Arrow (Custom SVG from benchmark) */}
                <div 
                  className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-8 flex-shrink-0 flex-grow-0 bg-transparent flex items-center cursor-pointer"
                  onClick={scrollPrev}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: 'rgb(155, 169, 180)' }} className="w-full hover:contrast-75 transition-all">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"></path>
                  </svg>
                </div>

                {/* Next Arrow (Custom SVG from benchmark) */}
                <div 
                  className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 flex-shrink-0 flex-grow-0 bg-transparent flex items-center cursor-pointer"
                  onClick={scrollNext}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: 'rgb(155, 169, 180)' }} className="w-full hover:contrast-75 transition-all">
                    <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
                  </svg>
                </div>

                <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {PREVIEW_VIDEOS.map((video) => (
                            <div
                                key={video.id}
                                className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_45%] md:flex-[0_0_33%] lg:flex-[0_0_19%] pl-4"
                            >
                                <VideoCard
                                    video={video}
                                    playing={playingId === video.id}
                                    onTogglePlay={(id) => setPlayingId(id)}
                                    className="h-80 lg:h-[420px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center mt-8 gap-2">
                    {scrollSnaps.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`rounded-full transition-all duration-300 ${
                                i === selectedIndex
                                    ? 'w-6 h-2 bg-[#0B1D53]'
                                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* See All Reviews CTA (Styled from benchmark) */}
            <div className="flex justify-center mt-12">
                <Link
                    href="/reviews"
                    style={{
                      fontFamily: 'Silka, Inter, Arial, sans-serif',
                      fontSize: '16px',
                      fontWeight: '800',
                      lineHeight: '1',
                      backgroundColor: '#202945',
                      color: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '12px 24px',
                      cursor: 'pointer',
                      boxShadow: 'rgb(92, 112, 121) 0px 1px 6px -2px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    className="hover:bg-[#171C31] transition-colors"
                >
                    See All Reviews
                    <ChevronRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
