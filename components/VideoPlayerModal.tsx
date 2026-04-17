"use client";

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { VideoReview } from '@/lib/testimonials-data';

interface VideoPlayerModalProps {
    video: VideoReview | null;
    onClose: () => void;
}

export function VideoPlayerModal({ video, onClose }: VideoPlayerModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    // Close on ESC
    useEffect(() => {
        if (!video) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [video, onClose]);

    if (!video) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
            <div className="relative w-full max-w-3xl mx-4 rounded-2xl overflow-hidden shadow-2xl bg-black animate-scaleIn">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="Close video"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                {/* Video player — aspect ratio 16:9 */}
                <div className="relative w-full aspect-video bg-black">
                    <video
                        src={video.videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Video info bar */}
                <div className="px-6 py-4 bg-[#0B1D53]">
                    <p className="text-white font-bold text-lg">{video.name}</p>
                    {video.role && <p className="text-white/70 text-sm">{video.role}</p>}
                </div>
            </div>

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn { animation: fadeIn 0.2s ease forwards; }
                .animate-scaleIn { animation: scaleIn 0.25s ease forwards; }
            `}</style>
        </div>
    );
}
