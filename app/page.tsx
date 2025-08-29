import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import WhyGlobedockWorksSection from '@/components/WhyGlobedockWorksSection';
import GradeGridSection from '@/components/GradeGridSection';
import DownloadAppSection from '@/components/DownloadAppSection';
import FactsSection from '@/components/FactsSection';
import ContentTypesSection from '@/components/ContentTypesSection';
import ParentFeaturesSection from '@/components/ParentFeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GovernmentPartnershipSection from '@/components/GovernmentPartnershipSection';
import ContactUsSection from '@/components/ContactUsSection';
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-secondary/10 via-white to-primary/10">
            <HeroSection />
            <GradeGridSection />
            <WhyGlobedockWorksSection />
            <StatsSection /> {/* Moved StatsSection here */}
            <DownloadAppSection />
            <FactsSection />
            {/* ContentTypesSection hidden but code preserved */}
            {/* <ContentTypesSection /> */}
            <ParentFeaturesSection />
            <TestimonialsSection />
            <GovernmentPartnershipSection />
            <ContactUsSection />
            <Footer />
        </div>
    );
}
