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
            title: 'GlobeDock Academy Insights ™ Assessment',
            description: 'Our comprehensive assessment system evaluates your child\'s learning style, strengths, and areas for improvement to create a personalized learning experience.',
        },
        {
            number: '2',
            title: 'Adaptive Learning Plans',
            description: 'Dynamic learning paths that adjust in real-time based on your child\'s progress, ensuring they\'re always challenged at the right level.',
        },
        {
            number: '3',
            title: 'Child-Centered Learning',
            description: 'Every lesson is designed around your child\'s unique needs, interests, and learning pace to maximize engagement and retention.',
        },
        {
            number: '4',
            title: 'Periodic Evaluation',
            description: 'Regular assessments and progress checks ensure your child stays on track and help identify areas that need additional focus.',
        },
        {
            number: '5',
            title: 'Progress Reports & Reviews',
            description: 'Detailed reports and regular reviews keep you informed about your child\'s academic journey and achievements.',
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
                    <p className="text-yellow-400 font-semibold text-xl mb-4 font-daily-memo">
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
                        <h3 className="text-xl font-semibold text-white mb-6 font-daily-memo">
                            Our Innovative Approach Ensures Your Child Achieves Stellar Results
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
