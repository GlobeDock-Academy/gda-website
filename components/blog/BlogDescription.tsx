"use client";

import React from 'react';
import { shantellSans } from '../../app/fonts';

export default function BlogDescription() {
  return (
    <div className="container mx-auto px-4 py-6">
      <p className={`text-center text-base md:text-lg text-[#6B6B8A] ${shantellSans.className}`}>
        Insights, tips, and resources to help students, parents, and educators excel in their educational journey.
      </p>
    </div>
  );
}
