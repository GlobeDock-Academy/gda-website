'use client';

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import ContentTypesSection from './components/ContentTypesSection';
import PlatformAccessSection from './components/PlatformAccessSection';
import ParentFeaturesSection from './components/ParentFeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div
            className={`min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            data-oid="zb4tofi"
        >
            <Navigation data-oid="5r-78d0" />
            <HeroSection data-oid=":xybj5r" />
            <StatsSection data-oid="46jl-7g" />
            <FeaturesSection data-oid="l5g.qn8" />
            <ContentTypesSection data-oid="u95n2dy" />
            <PlatformAccessSection data-oid="e-6fc_6" />
            <ParentFeaturesSection data-oid="ng3f3yd" />
            <TestimonialsSection data-oid=":a6rar3" />
            <CTASection data-oid="7gyt45n" />
            <Footer data-oid="57x5gr8" />
        </div>
    );
}
