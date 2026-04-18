"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { VideoCard } from '@/components/VideoCard';
import { VideoReview } from '@/lib/testimonials-data';
import Footer from '@/components/Footer';

interface Props {
    testimonials: VideoReview[];
}

type ProbedVideo = VideoReview & { aspectRatio: string; isPortrait: boolean };

const ROW_UNIT = 8;
const ROW_GAP = 16;

// Each cell's natural height (H) should satisfy H = N*ROW_UNIT + (N-1)*ROW_GAP
// Solved for N: N = ceil((H + ROW_GAP) / (ROW_UNIT + ROW_GAP))
function heightToSpan(h: number) {
    return Math.max(1, Math.ceil((h + ROW_GAP) / (ROW_UNIT + ROW_GAP)));
}

function MasonryCell({ children }: { children: (measureRef: (el: HTMLDivElement | null) => void) => React.ReactNode }) {
    const [span, setSpan] = useState(20);
    const observerRef = useRef<ResizeObserver | null>(null);

    const setRef = (el: HTMLDivElement | null) => {
        observerRef.current?.disconnect();
        if (!el) return;
        const update = () => setSpan(heightToSpan(el.getBoundingClientRect().height));
        update();
        observerRef.current = new ResizeObserver(update);
        observerRef.current.observe(el);
    };

    useEffect(() => () => observerRef.current?.disconnect(), []);

    return <div style={{ gridRow: `span ${span}` }}>{children(setRef)}</div>;
}

export default function ReviewsClient({ testimonials }: Props) {
    const [playingId, setPlayingId] = useState<string | null>(null);
    const [probed, setProbed] = useState<ProbedVideo[] | null>(null);

    const validTestimonials = useMemo(
        () => testimonials.filter(t => t.id && t.name && t.videoUrl),
        [testimonials]
    );

    // Probe all video aspect ratios up-front so the grid renders in its final form once
    useEffect(() => {
        if (validTestimonials.length === 0) {
            setProbed([]);
            return;
        }
        let cancelled = false;
        const probes = validTestimonials.map(v =>
            new Promise<ProbedVideo>(resolve => {
                const el = document.createElement('video');
                el.preload = 'metadata';
                el.muted = true;
                const finish = (w: number, h: number) => {
                    const ratio = w && h ? `${w} / ${h}` : '9 / 16';
                    const portrait = h >= w;
                    resolve({ ...v, aspectRatio: ratio, isPortrait: portrait });
                    el.src = '';
                };
                el.addEventListener('loadedmetadata', () => finish(el.videoWidth, el.videoHeight), { once: true });
                el.addEventListener('error', () => finish(9, 16), { once: true });
                el.src = v.videoUrl;
                el.load();
            })
        );
        Promise.all(probes).then(results => {
            if (cancelled) return;
            // Preserve the backend's order; dense grid-flow packs items tightly as they come.
            setProbed(results);
        });
        return () => { cancelled = true; };
    }, [validTestimonials]);

    return (
        <>
            <main className="min-h-screen bg-white">
                {/* Page header — benchmark typography: heading 60/69 weight 800, paragraph 20/30 weight 500 black/55 */}
                <div
                    className="px-4 sm:px-8 lg:px-16 xl:px-20 pt-24 pb-10 text-center"
                    style={{ fontFamily: 'Silka, Arial, sans-serif' }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold leading-tight lg:leading-[69px] text-black mb-5 tracking-normal">
                        Hear from the community
                    </h1>
                    <p className="text-[20px] font-medium leading-[30px] text-black/55 max-w-[720px] mx-auto">
                        Check out our Wall of Love where GlobeDock Academy community members share highlights of their learning journey.
                    </p>
                </div>

                {/* Bottom vertical spacer (mt4 mt5-ns) */}
                <div className="mt-8 sm:mt-16" aria-hidden="true" />

                {/* Dense masonry grid — CSS Grid with row-spans computed from aspect ratio, packs items into gaps */}
                <div className="px-2 sm:px-4 lg:px-8 xl:px-10 pb-24">
                    {probed === null ? (
                        <div className="min-h-[60vh]" aria-hidden="true" />
                    ) : (
                        <div
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                            style={{ gridAutoRows: `${ROW_UNIT}px`, gridAutoFlow: 'dense' }}
                        >
                            {probed.map((video) => (
                                <MasonryCell key={video.id}>
                                    {(measureRef) => (
                                        <div ref={measureRef}>
                                            <VideoCard
                                                video={video}
                                                playing={playingId === String(video.id)}
                                                onTogglePlay={(id) => setPlayingId(id)}
                                                aspectRatio={video.aspectRatio}
                                            />
                                        </div>
                                    )}
                                </MasonryCell>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}
