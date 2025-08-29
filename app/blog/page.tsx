import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogCategories from '@/components/blog/BlogCategories';
import BlogPostGrid from '@/components/blog/BlogPostGrid';

export const metadata = {
  title: 'GDA Blog - GlobeDock Academy',
  description: 'Explore educational insights, tips, and resources on the GlobeDock Academy blog.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Blog Header Section */}
        <BlogHeader />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Categories Horizontal List */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              <BlogCategories />
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <BlogPostGrid />
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
