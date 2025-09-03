import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogCategories from '@/components/blog/BlogCategories';
import BlogCategoriesNav from '@/components/blog/BlogCategoriesNav';
import BlogPostGrid from '@/components/blog/BlogPostGrid';

export const metadata = {
  title: 'GDA Blog - GlobeDock Academy',
  description: 'Explore educational insights, tips, and resources on the GlobeDock Academy blog.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Categories Navigation */}
        <BlogCategoriesNav />
        
        {/* Main Content */}
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-12">
          <BlogPostGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
