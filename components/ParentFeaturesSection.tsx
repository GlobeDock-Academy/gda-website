"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ParentFeaturesSection() {
    const [expandedItems, setExpandedItems] = useState<number[]>([]);
    
    const features = [
        {
            number: '1',
            title: 'GlobeDock Competency Checks',
            description: 'We use short quizzes after each lesson to check your child’s understanding. These ongoing checks help highlight strengths and identify where more support may be needed — without blocking their progress.',
        },
        {
            number: '2',
            title: 'Flexible Learning, Built on Competencies',
            description: 'Your child can explore lessons freely, but each one is designed to build specific skills and concepts. This makes it easy for students to follow the curriculum while learning at their own pace — supported, not pressured.',
        },
        {
            number: '3',
            title: 'Engaging & Localized Content',
            description: 'We create high-quality videos with Ethiopian teachers and relatable examples. This helps students stay focused and makes learning feel fun and relevant.',
        },
        {
            number: '4',
            title: 'Parent App for Tracking',
            description: 'With our Parent App, you can see what your child is learning, view their quiz results, and track their weekly activity — all in one place.',
        },
        {
            number: '5',
            title: 'Real Feedback, Real Results',
            description: 'We send regular updates and reports so you always know how your child is doing — what\'s working, what needs help, and how they’re improving.',
        },
    ];
    
    const toggleExpanded = (index: number) => {
        setExpandedItems(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section id="parents" className="pt-16 pb-8" style={{ backgroundColor: '#0B1D53' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Centered header content above the columns */}
                <div className="text-center mb-12">
                    {/* Yellow header text */}
                    <p className="text-yellow-400 font-semibold text-[24px] mb-4 font-['ShantellSans']">
                        We deliver the best results, period.
                    </p>
                    
                    {/* Main heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                        GlobeDock Academy students perform 3x better in class and school exams
                    </h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="flex justify-center lg:justify-start">
                        <Image 
                            src="/images/growth_chart.png" 
                            alt="Growth Chart showing 3x improvement" 
                            width={400} 
                            height={400}
                            className="max-w-full h-auto"
                        />
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="text-white max-w-[85%]">
                        
                        {/* Subheading */}
                        <h3 className="text-[24px] font-semibold text-white mb-6 font-['ShantellSans']">
                        Our Unique Approach Helps Your Child Learn Better
                        </h3>
                        
                        {/* Features list */}
                        <div className="space-y-4 mb-8">
                            {features.map((feature, index) => {
                                const isExpanded = expandedItems.includes(index);
                                return (
                                    <div key={index} className="border-b border-white/20">
                                        <div 
                                            className="flex items-center justify-between py-3 cursor-pointer hover:bg-white/5 transition-colors duration-200 rounded-lg px-2"
                                            onClick={() => toggleExpanded(index)}
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="w-8 h-8 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold text-sm">
                                                    {feature.number}
                                                </div>
                                                <span className="text-white font-medium">
                                                    {feature.title}
                                                </span>
                                            </div>
                                            <ChevronDown 
                                                className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                                                    isExpanded ? 'rotate-180' : ''
                                                }`} 
                                            />
                                        </div>
                                        <div 
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                isExpanded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className="pb-4 pl-12 pr-2">
                                                <p className="text-white/80 text-sm leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        
                        {/* CTA Button */}
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg">
                            Get started today
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
