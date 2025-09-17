import React from 'react';
import Footer from '@/components/Footer';
import BlogCategoriesNav from '@/components/blog/BlogCategoriesNav';
import BlogPostGrid from '@/components/blog/BlogPostGrid';

export const metadata = {
  title: 'GDA Blog - GlobeDock Academy',
  description: 'Explore educational insights, tips, and resources on the GlobeDock Academy blog.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        {/* Categories Navigation */}
        <BlogCategoriesNav />
        
        {/* Main Content */}
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 py-12">
          <BlogPostGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
