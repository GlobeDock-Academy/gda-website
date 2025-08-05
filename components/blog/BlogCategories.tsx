import React from 'react';
import Link from 'next/link';

// Sample categories data
const categories = [
  { id: 1, name: 'All', slug: 'all', count: 45 },
  { id: 2, name: 'Study Tips', slug: 'study-tips', count: 12 },
  { id: 3, name: 'Parenting', slug: 'parenting', count: 8 },
  { id: 4, name: 'EdTech', slug: 'edtech', count: 10 },
  { id: 5, name: 'Exam Preparation', slug: 'exam-preparation', count: 7 },
  { id: 6, name: 'Learning Resources', slug: 'learning-resources', count: 8 }
];

export default function BlogCategories() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Categories</h3>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category.id}>
            <Link 
              href={`/blog/category/${category.slug}`}
              className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-primary/10 transition-colors"
            >
              <span className="text-gray-700 hover:text-primary">{category.name}</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
