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

  // Compute a short description from API 'intro' field (preferred)
  const resolvedDescription = (() => {
    const raw: any = (post as any)._raw || {};
    const intro = typeof raw.intro === 'string' ? raw.intro.trim() : '';
    if (intro.length > 0) return intro;
    // Fallback to excerpt only if intro is missing
    const ex = (post.excerpt || '').trim();
    return ex;
  })();

  // Hide related section for the Privacy Policy post only
  const isPrivacyPolicy = (post.slug || '').toLowerCase() === 'privacy-policy';

  // Fetch related posts (most recent 2 posts)
  const allPosts = await fetchBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Header section removed; header moved below into the content container */}
        
        {/* Blog Post Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Post Header (moved above image) */}
            <div className="mb-6">
              <div className="mb-4">
                <Link href="/blog" className="text-primary hover:underline flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Blog
                </Link>
              </div>
              {/* Breadcrumb: Blog / {Category} */}
              <div className="mb-2 flex items-center text-base md:text-lg">
                <span className="font-bold text-gray-900">Blog</span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-600 lowercase">{post.slug}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-3 leading-tight">{post.title}</h1>
              {/* Intro placed directly under the title */}
              {resolvedDescription && (
                <p className="text-gray-700 mb-3">{resolvedDescription}</p>
              )}
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
            <div className="prose prose-lg max-w-none blog-content">
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
            {/* Related Articles removed per requirements */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
