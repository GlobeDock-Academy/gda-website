import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { fetchBlogPost, fetchBlogPosts, BlogPost } from '@/lib/api';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - GlobeDock Academy',
      description: 'The blog post you\'re looking for doesn\'t exist or has been removed.'
    };
  }
  
  return {
    title: `${post.title} - GlobeDock Academy Blog`,
    description: post.excerpt || 'Read this article on the GlobeDock Academy blog.',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.imageUrl }]
    }
  };
}

// This is a dynamic page that will be generated for each blog post
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Fetch the blog post that matches the slug
  const post = await fetchBlogPost(params.slug);
  
  // If no post is found, show a 404 page
  if (!post) {
    notFound();
  }

  // Compute content with fallbacks in case upstream mapper missed a field
  const resolvedContent = (() => {
    const raw: any = (post as any)._raw || {};
    const c = (post.content || '').trim();
    if (c.length > 0) return c;
    const fallbacks = [raw.content, raw.content_html, raw.html, raw.content_md, raw.body, raw.body_html, raw.description, raw.details, raw.detail, raw.intro, raw.excerpt]
      .map((x: any) => (typeof x === 'string' ? x.trim() : ''))
      .filter(Boolean);
    return fallbacks[0] || '';
  })();

  // Fetch related posts (most recent 2 posts)
  const allPosts = await fetchBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Blog Post Header */}
        <div className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <Link href="/blog" className="text-primary hover:underline flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Blog
                </Link>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
              <div className="flex items-center text-sm">
                <span className="text-primary font-medium">
                  {post.categories && post.categories.length > 0 ? post.categories[0] : 'GENERAL INFO'}
                </span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-600">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Post Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden">
              <Image 
                src={post.imageUrl} 
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Author Info */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                <span className="text-gray-600 font-bold">{post.author?.name?.charAt(0) || 'G'}</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{post.author?.name || 'GDA Team'}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
            
            {/* Post Content */}
            <div className="prose prose-lg max-w-none">
              {resolvedContent && resolvedContent.trim().length > 0 ? (
                // If the API content includes HTML tags, render it as HTML. Otherwise, render as Markdown.
                /<[^>]+>/.test(resolvedContent) ? (
                  <div dangerouslySetInnerHTML={{ __html: resolvedContent }} />
                ) : (
                  <ReactMarkdown>
                    {resolvedContent}
                  </ReactMarkdown>
                )
              ) : (
                <p>No content available for this post.</p>
              )}
            </div>
            
            {/* Share Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative h-48 w-full">
                        <Image 
                          src={relatedPost.imageUrl} 
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-sm text-primary font-medium">
                            {relatedPost.categories && relatedPost.categories.length > 0 
                              ? relatedPost.categories[0] 
                              : 'GENERAL INFO'}
                          </span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">
                            {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">
                          <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <Link href={`/blog/${relatedPost.slug}`} className="text-primary font-medium hover:underline">
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
