"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, fetchBlogPosts } from '@/lib/api';

export default function BlogPostGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Fetch posts from API using the fetchBlogPosts function
        const blogPosts = await fetchBlogPosts();
        
        setPosts(blogPosts);
        setVisibleCards(new Array(blogPosts.length).fill(false));
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, posts.length);
  }, [posts]);

  // Initialize the visibility state for each card
  useEffect(() => {
    setVisibleCards(new Array(posts.length).fill(false));
  }, [posts]);

  // Set up Intersection Observer
  useEffect(() => {
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
  }, [posts]);

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Latest Articles</h2>
          <div className="flex space-x-2">
            <button disabled className="p-2 rounded-full bg-gray-100 text-gray-400 cursor-not-allowed">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button disabled className="p-2 rounded-full bg-gray-100 text-gray-400 cursor-not-allowed">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6" style={{ fontFamily: 'Montserrat, InterVariable, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
                <div className="mt-4 h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-red-800">Error Loading Blog Posts</h3>
            <div className="mt-2 text-sm text-red-700">
              <p>We couldn`t load the blog posts. This might be due to a network issue or the blog service being temporarily unavailable.</p>
              <div className="mt-4">
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-900">No blog posts yet</h3>
        <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">We couldn`t find any blog posts. Please check back later or contact support if this issue persists.</p>
        <div className="mt-6">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2
          className="text-[56px] leading-[56px] font-semibold text-[#171717]"
          style={{
            fontFamily:
              'Montserrat, InterVariable, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          }}
        >
          Blog
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {posts.map((post, index) => (
          <div 
            key={post.id} 
            ref={(el) => { cardRefs.current[index] = el; }}
            className={`blog-card ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              width: '424px',
              height: '492.75px',
              margin: '0 auto',
              transition: 'all 0.5s ease',
              transform: visibleCards[index] ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            <div 
              className="card h-100"
              style={{
                textShadow: 'none',
                boxShadow: 'none',
                border: '1px solid var(--border-color, #e2e8f0)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                minWidth: '0px',
                overflowWrap: 'break-word',
                backgroundColor: 'rgb(255, 255, 255)',
                backgroundClip: 'border-box',
                borderRadius: '0.75rem',
                height: '100%',
                boxSizing: 'border-box',
                color: '#525252',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 420,
                letterSpacing: '0.32px',
              }}
            >
              <div className="card-img-top" style={{ height: '200px', position: 'relative' }}>
                <Image
                  src={post.imageUrl}
                  alt={`${post.title} - Cover Image`}
                  fill
                  className="object-cover"
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = '1';
                    setLoadedImages(prev => new Set([...prev, post.id]));
                  }}
                  style={{ opacity: 0 }} // Start with 0 opacity, will be set to 1 on load
                />
                <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-sm">
                  {index + 1}/{posts.length}
                </div>
              </div>
              <div className="card-body" style={{ padding: '1rem', flex: '1 1 auto' }}>
                <div>
                  <div className="text-muted small text-uppercase">
                    <span>{post.categories && post.categories.length > 0 ? post.categories[0] : 'GENERAL INFO'}</span>
                  </div>
                  <h5 className="mt-1">
                    <span className="text-dark">
                      {post.title}
                    </span>
                  </h5>
                  <p className="post-description text-muted line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="mt-3">
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
              <Link href={`/blog/${encodeURIComponent(post.slug)}`} className="stretched-link" aria-label={post.title}></Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination removed as requested */}
    </div>
  );
}
