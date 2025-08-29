import React from 'react';
import Link from 'next/link';

// Sample categories data - updated to match uLesson's style
const categories = [
  { id: 1, name: 'All', slug: 'all', count: 45 },
  { id: 2, name: '1 to 1', slug: 'one-to-one', count: 15 },
  { id: 3, name: 'Premium', slug: 'premium', count: 12 },
  { id: 4, name: 'Company News', slug: 'company-news', count: 8 },
  { id: 5, name: 'Exam Tips', slug: 'exam-tips', count: 10 },
  { id: 6, name: 'uLesson App', slug: 'ulesson-app', count: 8 }
];

export default function BlogCategories() {
  return (
    <div className="w-full border-b border-gray-100">
      <ul className="flex flex-nowrap gap-4 sm:gap-6 md:gap-8 pb-3 overflow-x-auto scrollbar-hide px-4 sm:px-6">
        {categories.map((category) => (
          <li key={category.id} className="flex-shrink-0">
            <Link 
              href={`/blog/category/${category.slug}`}
              className={`block font-sans text-sm font-medium transition-colors whitespace-nowrap pb-2.5 px-1
                ${category.slug === 'all' 
                  ? 'text-primary border-b-2 border-primary font-semibold' 
                  : 'text-gray-500 hover:text-gray-800'}`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
