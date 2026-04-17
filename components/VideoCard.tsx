"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { VideoReview } from '@/lib/testimonials-data';

interface VideoCardProps {
    video: VideoReview;
    onClick?: (video: VideoReview) => void;
    className?: string;
    playing?: boolean;
    onTogglePlay?: (id: string | null) => void;
}

export function VideoCard({ video, onClick, className = '', playing = false, onTogglePlay }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onTogglePlay) {
            onTogglePlay(playing ? null : video.id);
        } else if (onClick) {
            onClick(video);
        }
    };

    return (
        <div
            className={`relative overflow-hidden rounded-2xl group cursor-pointer bg-black ${className}`}
            onClick={handlePlay}
        >
            {/* Native Video Playback */}
            {playing ? (
                <video
                    ref={videoRef}
                    src={video.videoUrl}
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    onClick={handlePlay}
                >
                    Your browser does not support the video tag.
                </video>
            ) : (
                <>
                    {/* Thumbnail */}
                    <Image
                        src={video.thumbnailUrl}
                        alt={`${video.name} testimonial`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 25vw"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/85" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/40">
                            <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                        </div>
                    </div>

                    {/* Name & role */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-bold text-sm leading-tight">{video.name}</p>
                        {video.role && (
                            <p className="text-white/75 text-sm mt-0.5">{video.role}</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
