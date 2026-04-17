export interface VideoReview {
    id: string | number;
    name: string;
    role: string;
    videoUrl: string;
    thumbnailUrl: string;
}

export const VIDEO_REVIEWS: VideoReview[] = [
    {
        id: 1,
        name: "Abel M.",
        role: "Student, Grade 10",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailUrl: "/images/testimonial_abel.png",
    },
    {
        id: 2,
        name: "Sara T.",
        role: "Parent",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailUrl: "/images/testimonial_sara.png",
    },
    {
        id: 3,
        name: "Meron H.",
        role: "Student, Grade 9",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailUrl: "/images/testimonial_meron.png",
    },
    {
        id: 4,
        name: "Bekele A.",
        role: "Parent",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailUrl: "https://placehold.co/400x550/0B1D53/FFFFFF?text=Bekele+A.",
    },
    {
        id: 5,
        name: "Kaleb Y.",
        role: "Student, Grade 11",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailUrl: "https://placehold.co/400x550/1a3a7a/FFFFFF?text=Kaleb+Y.",
    },
    {
        id: 6,
        name: "Tigist B.",
        role: "Parent",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailUrl: "https://placehold.co/400x550/2B4A90/FFFFFF?text=Tigist+B.",
    },
    {
        id: 7,
        name: "Dawit G.",
        role: "Student, Grade 8",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailUrl: "https://placehold.co/400x550/0B1D53/FFFFFF?text=Dawit+G.",
    },
    {
        id: 8,
        name: "Hana L.",
        role: "Parent",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailUrl: "https://placehold.co/400x550/1a3a7a/FFFFFF?text=Hana+L.",
    },
];
