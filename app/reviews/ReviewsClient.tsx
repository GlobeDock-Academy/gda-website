"use client";

import { useState } from 'react';
import { VideoCard } from '@/components/VideoCard';
import { VideoReview } from '@/lib/testimonials-data';
import Footer from '@/components/Footer';

interface Props {
    testimonials: VideoReview[];
}

export default function ReviewsClient({ testimonials }: Props) {
    const [playingId, setPlayingId] = useState<string | null>(null);

    // Filter out duplicates and invalid data
    const validTestimonials = testimonials.filter(t => t.id && t.name);

    // Grouping for masonry effect
    const cols = 2; // Default for mobile
    const desktopCols = 4; // Masonry columns for desktop
    
    const getMasonryCols = (count: number) => {
      const result: VideoReview[][] = Array.from({ length: count }, () => []);
      validTestimonials.forEach((v, i) => result[i % count].push(v));
      return result;
    };

    const columns = getMasonryCols(desktopCols);

    return (
        <>
            <main className="min-h-screen bg-white">
                {/* Page header */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
                        Hear from the community
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Check out our Wall of Love where GlobeDock Academy community members share highlights of their learning journey.
                    </p>
                </div>

                {/* Mixed Sizes Masonry Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* We'll use a vertical flex approach for each column to simulate masonry */}
                        {columns.map((colVideos, colIdx) => (
                            <div key={colIdx} className="flex flex-col gap-4">
                                {colVideos.map((video, rowIdx) => {
                                    // Mix sizes: first items in some columns are larger, etc.
                                    let heightClass = "h-64 sm:h-72";
                                    if ((colIdx + rowIdx) % 3 === 0) heightClass = "h-80 sm:h-96";
                                    if ((colIdx * 2 + rowIdx) % 5 === 0) heightClass = "h-[400px] sm:h-[500px]";
                                    
                                    return (
                                        <VideoCard
                                            key={video.id}
                                            video={video}
                                            playing={playingId === video.id}
                                            onTogglePlay={(id) => setPlayingId(id)}
                                            className={heightClass}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
