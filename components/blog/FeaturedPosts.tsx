import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample featured post data
const featuredPosts = [
  {
    id: 1,
    title: "Effective Learning Strategies for Students",
    excerpt: "Discover proven techniques to enhance your learning experience and improve retention.",
    image: "/images/blog/featured-1.jpg",
    category: "Study Tips",
    date: "August 1, 2025",
    slug: "effective-learning-strategies"
  },
  {
    id: 2,
    title: "How Parents Can Support Educational Growth",
    excerpt: "Learn how parents can create an environment that fosters academic success and lifelong learning.",
    image: "/images/blog/featured-2.jpg",
    category: "Parenting",
    date: "July 25, 2025",
    slug: "parents-support-educational-growth"
  },
  {
    id: 3,
    title: "The Future of Digital Education",
    excerpt: "Explore how technology is transforming education and what it means for students worldwide.",
    image: "/images/blog/featured-3.jpg",
    category: "EdTech",
    date: "July 18, 2025",
    slug: "future-digital-education"
  }
];

export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Featured</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
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
      </div>
    </section>
  );
}
