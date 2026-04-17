"use client";

import { useRef, useState } from 'react';
import { Loader2, Play } from 'lucide-react';
import { VideoReview } from '@/lib/testimonials-data';

interface VideoCardProps {
    video: VideoReview;
    onClick?: (video: VideoReview) => void;
    className?: string;
    playing?: boolean;
    onTogglePlay?: (id: string | null) => void;
    aspectRatio?: string;
}

export function VideoCard({ video, onClick, className = '', playing = false, onTogglePlay, aspectRatio }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [thumbReady, setThumbReady] = useState(false);
    const [playReady, setPlayReady] = useState(false);

    const handlePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onTogglePlay) {
            onTogglePlay(playing ? null : String(video.id));
        } else if (onClick) {
            onClick(video);
        }
    };

    const useAdaptive = !!aspectRatio;

    return (
        <div
            className={`testimonial-card relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition-colors group cursor-pointer ${useAdaptive ? 'w-full' : className}`}
            style={useAdaptive ? { aspectRatio } : undefined}
            onClick={handlePlay}
        >
            {/* Thumbnail: always rendered — stays visible while the play video buffers */}
            <video
                src={`${video.videoUrl}#t=0.1`}
                preload="metadata"
                muted
                playsInline
                aria-label={`${video.name} testimonial`}
                onLoadedData={() => setThumbReady(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${playing ? '' : 'group-hover:scale-105'}`}
            />

            {/* Playing video: overlays the thumbnail, fades in once actually playing */}
            {playing && (
                <video
                    ref={videoRef}
                    src={video.videoUrl}
                    autoPlay
                    loop
                    playsInline
                    onPlaying={() => setPlayReady(true)}
                    className={`absolute inset-0 w-full h-full object-contain bg-[#f1f1f3] transition-opacity duration-300 ${playReady ? 'opacity-100' : 'opacity-0'}`}
                    onClick={handlePlay}
                >
                    Your browser does not support the video tag.
                </video>
            )}

            {/* Loading spinner — visible until thumbnail or play video is ready */}
            {((playing && !playReady) || (!playing && !thumbReady)) && (
                <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none">
                    <Loader2 className="w-8 h-8 text-black/40 animate-spin" />
                </div>
            )}

            {/* Pre-play overlays: only when NOT playing (hidden as soon as user clicks) */}
            {!playing && (
                <>
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/85" />

                    {/* Play button — 72px brand-purple circle, 60% opacity, hover scale */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#9D00FF]/40 flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition">
                            <Play className="w-8 h-8 text-white ml-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]" fill="currentColor" />
                        </div>
                    </div>

                    {/* Bottom bar with name (max 60% width) + role */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
                        <div className="flex flex-col text-left max-w-[60%]">
                            <p className="text-white font-bold text-lg leading-tight truncate">{video.name}</p>
                            {video.role && (
                                <p className="text-white/75 text-sm mt-0.5 truncate">{video.role}</p>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
