"use client";

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight } from 'lucide-react';
import { VideoCard } from '@/components/VideoCard';
import { VideoReview } from '@/lib/testimonials-data';

interface Props {
  testimonials: VideoReview[];
}

export default function HearFromCommunitySection({ testimonials }: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { align: 'start', loop: true, slidesToScroll: 'auto' }
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

    if (!testimonials || testimonials.length === 0) return null;

    const PREVIEW_VIDEOS = testimonials;

    return (
        <section className="py-20 bg-white overflow-hidden" style={{ fontFamily: 'Silka, Arial, sans-serif' }}>
            {/* Header — benchmark typography: 60/69 weight 800, paragraph 20/30 weight 500 black/55 */}
            <div className="px-4 sm:px-8 lg:px-16 xl:px-20 text-center mb-20 lg:mb-24">
                <h2 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold leading-tight lg:leading-[69px] text-black mb-5 tracking-normal">
                    Hear From the Community
                </h2>
                <p className="text-[20px] font-medium leading-[30px] text-black/55 max-w-[720px] mx-auto">
                    Check out our Wall of Love where GlobeDock Academy community members share highlights of their learning journey.
                </p>
            </div>

            {/* Carousel — full width */}
            <div className="relative w-full px-4 sm:px-8 lg:px-12 xl:px-16">
                {/* Prev Arrow (Custom SVG from benchmark) */}
                <div
                  className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-8 flex-shrink-0 flex-grow-0 bg-transparent flex items-center cursor-pointer"
                  onClick={scrollPrev}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: 'rgb(155, 169, 180)' }} className="w-full hover:contrast-75 transition-all">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"></path>
                  </svg>
                </div>

                {/* Next Arrow (Custom SVG from benchmark) */}
                <div
                  className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-8 flex-shrink-0 flex-grow-0 bg-transparent flex items-center cursor-pointer"
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
                                className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4"
                            >
                                <VideoCard
                                    video={video}
                                    playing={playingId === String(video.id)}
                                    onTogglePlay={(id) => setPlayingId(id)}
                                    className="aspect-[4/3] w-full"
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

            {/* See All Reviews CTA — exact benchmark spec */}
            <div className="flex justify-center mt-12">
                <Link
                    href="/reviews"
                    style={{
                      fontFamily: 'Silka, Arial, sans-serif',
                      fontSize: '16px',
                      fontWeight: 800,
                      lineHeight: '16px',
                      backgroundColor: '#202945',
                      color: '#FFFFFF',
                      borderColor: '#171C31',
                      borderRadius: '12px',
                      padding: '18px 32px',
                      cursor: 'pointer',
                      boxShadow: 'rgb(92, 112, 121) 0px 1px 6px -2px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    className="hover:bg-[#171C31] transition-colors"
                >
                    See All Reviews
                    <ChevronRight style={{ width: 14, height: 14, color: '#FFFFFF' }} />
                </Link>
            </div>
        </section>
    );
}
