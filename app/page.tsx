import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import WhyGlobedockWorksSection from '@/components/WhyGlobedockWorksSection';
import GradeGridSection from '@/components/GradeGridSection';
import DownloadAppSection from '@/components/DownloadAppSection';
import FactsSection from '@/components/FactsSection';
import ContentTypesSection from '@/components/ContentTypesSection';
import ParentFeaturesSection from '@/components/ParentFeaturesSection';
import HearFromCommunitySection from '@/components/HearFromCommunitySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GovernmentPartnershipSection from '@/components/GovernmentPartnershipSection';
import ContactUsSection from '@/components/ContactUsSection';
import Footer from '@/components/Footer';

import { fetchTestimonials } from '@/lib/testimonials-api';

export default async function HomePage() {
    const testimonials = await fetchTestimonials();

    return (
        <div className="min-h-screen bg-gradient-to-br from-secondary/10 via-white to-white">
            <HeroSection />
            <GradeGridSection />
            <WhyGlobedockWorksSection />
            <StatsSection /> 
            <DownloadAppSection />
            {/* ContentTypesSection hidden but code preserved */}
            {/* <ContentTypesSection /> */}
            <ParentFeaturesSection />
            <HearFromCommunitySection testimonials={testimonials} />
            <TestimonialsSection />
            <FactsSection />
            <GovernmentPartnershipSection />
            <ContactUsSection />
            {/* Moved StatsSection below ContactUsSection */}
            <Footer />
        </div>
    );
}
