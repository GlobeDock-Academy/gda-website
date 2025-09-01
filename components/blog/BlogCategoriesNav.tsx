"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function BlogCategoriesNav() {
  const categories = [
    { name: 'All', count: 24 },
    { name: 'For Students', count: 8 },
    { name: 'For Parents', count: 6 },
    { name: 'Study Tips', count: 10 },
    { name: 'Exam Prep', count: 7 },
    { name: 'Success Stories', count: 5 },
  ];

  const [activeCategory, setActiveCategory] = React.useState('All');

  return (
    <div className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex space-x-1">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.name
                    ? 'bg-[#7B61FF] text-white'
                    : 'text-[#6B6B8A] hover:bg-gray-100'
                }`}
              >
                {category.name}
                <span 
                  className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${
                    activeCategory === category.name ? 'bg-white/20' : 'bg-gray-100'
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="#" 
              className="text-[#7B61FF] text-sm font-medium flex items-center hover:underline"
            >
              View all categories
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
