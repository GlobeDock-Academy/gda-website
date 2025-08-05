import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogHeader from '@/components/blog/BlogHeader';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import BlogCategories from '@/components/blog/BlogCategories';
import BlogPostGrid from '@/components/blog/BlogPostGrid';
import BlogSubscribe from '@/components/blog/BlogSubscribe';

export const metadata = {
  title: 'GDA Blog - GlobeDock Academy',
  description: 'Explore educational insights, tips, and resources on the GlobeDock Academy blog.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Blog Header Section */}
        <BlogHeader />
        
        {/* Featured Posts Section */}
        <FeaturedPosts />
        
        {/* Categories and Posts Section */}
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <BlogCategories />
            </div>
            
            {/* Blog Posts Grid */}
            <div className="lg:w-3/4">
              <BlogPostGrid />
            </div>
          </div>
        </div>
        
        {/* Subscribe Section */}
        <BlogSubscribe />
      </main>
      
      <Footer />
    </div>
  );
}
