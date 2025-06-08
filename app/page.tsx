import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import WhyGlobedockWorksSection from '@/components/WhyGlobedockWorksSection'; // Added import
import FeaturesSection from '@/components/FeaturesSection';
import DownloadAppSection from '@/components/DownloadAppSection';
import ContentTypesSection from '@/components/ContentTypesSection';
import PlatformAccessSection from '@/components/PlatformAccessSection';
import ParentFeaturesSection from '@/components/ParentFeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactUsSection from '@/components/ContactUsSection'; // Added import
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-secondary/10 via-white to-primary/10">
            <Navigation />
            <HeroSection />
            <StatsSection />
            <WhyGlobedockWorksSection /> {/* Added new section here */}
            <FeaturesSection />
            <DownloadAppSection />
            <ContentTypesSection />
            <PlatformAccessSection />
            <ParentFeaturesSection />
            <TestimonialsSection />
            <CTASection />
            <ContactUsSection /> {/* Added new section here */}
            <Footer />
        </div>
    );
}
