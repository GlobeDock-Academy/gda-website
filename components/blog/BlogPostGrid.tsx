"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How to Prepare for Final Exams: A Comprehensive Guide",
    excerpt: "Learn effective strategies to prepare for your final exams with our comprehensive guide covering study techniques, time management, and stress reduction.",
    image: "/images/blog/post-1.jpg",
    category: "Exam Preparation",
    date: "July 15, 2025",
    slug: "prepare-for-final-exams"
  },
  {
    id: 2,
    title: "The Benefits of Online Learning for Today's Students",
    excerpt: "Discover how online learning platforms are transforming education and providing students with flexible, personalized learning experiences.",
    image: "/images/blog/post-2.jpg",
    category: "EdTech",
    date: "July 10, 2025",
    slug: "benefits-online-learning"
  },
  {
    id: 3,
    title: "5 Ways Parents Can Support Their Child's Education",
    excerpt: "Explore practical ways parents can actively participate in their child's educational journey and create a supportive learning environment at home.",
    image: "/images/blog/post-3.jpg",
    category: "Parenting",
    date: "July 5, 2025",
    slug: "parents-support-education"
  },
  {
    id: 4,
    title: "Understanding Different Learning Styles",
    excerpt: "Learn about visual, auditory, and kinesthetic learning styles and how to adapt your study methods to match your preferred learning style.",
    image: "/images/blog/post-4.jpg",
    category: "Study Tips",
    date: "June 28, 2025",
    slug: "learning-styles"
  },
  {
    id: 5,
    title: "The Importance of Critical Thinking Skills",
    excerpt: "Discover why critical thinking is essential for academic success and how to develop this crucial skill through various exercises and approaches.",
    image: "/images/blog/post-5.jpg",
    category: "Learning Resources",
    date: "June 20, 2025",
    slug: "critical-thinking-skills"
  },
  {
    id: 6,
    title: "How to Create an Effective Study Schedule",
    excerpt: "Learn how to create a balanced study schedule that maximizes productivity while preventing burnout and maintaining well-being.",
    image: "/images/blog/post-6.jpg",
    category: "Study Tips",
    date: "June 15, 2025",
    slug: "effective-study-schedule"
  }
];

export default function BlogPostGrid() {
  // Create refs for each blog post card
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Initialize refs array
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, blogPosts.length);
  }, []);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  // Initialize the visibility state for each card
  useEffect(() => {
    setVisibleCards(new Array(blogPosts.length).fill(false));
    
    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              // Once the card is visible, stop observing it
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    // Observe all card refs
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Latest Articles</h2>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-primary text-white hover:bg-primary/90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div 
            key={post.id} 
            ref={(el) => { cardRefs.current[index] = el; }}
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image: {post.image}</span>
              </div>
              {/* Uncomment when images are available */}
              {/* <Image 
                src={post.image} 
                alt={post.title}
                fill
                className="object-cover"
              /> */}
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="text-sm text-primary font-medium">{post.category}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <div className="flex items-center space-x-2">
          <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">1</button>
          <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200">2</button>
          <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200">3</button>
          <span className="px-2">...</span>
          <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200">10</button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
