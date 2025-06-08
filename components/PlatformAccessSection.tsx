import { Button } from '@/components/ui/button';
import { Monitor, Smartphone, Download, ArrowRight } from 'lucide-react';

export default function PlatformAccessSection() {
    return (
        <section id="platforms" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Learn Anytime, Anywhere</h2>
                        <p className="text-xl mb-8 leading-relaxed">
                            Access GlobeDock Academy on your preferred device. Our platform is optimized for web and mobile, ensuring a seamless learning experience whether you&apos;re at home or on the go. Download lessons for offline study and never miss a beat.
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center">
                                <Monitor className="h-6 w-6 mr-3 text-white" />
                                <span>Full-featured Web Platform</span>
                            </div>
                            <div className="flex items-center">
                                <Smartphone className="h-6 w-6 mr-3 text-white" />
                                <span>Dedicated Mobile Apps (iOS & Android)</span>
                            </div>
                            <div className="flex items-center">
                                <Download className="h-6 w-6 mr-3 text-white" />
                                <span>Offline Content Access</span>
                            </div>
                        </div>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white text-secondary hover:bg-secondary/10 border-white hover:border-secondary/20 text-lg px-8 py-3"
                        >
                            Explore Platform Features
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                    <div className="relative mt-10 lg:mt-0">
                        <img 
                            src="/images/mobile_pc_mockup.png" 
                            alt="Platform Showcase on multiple devices" 
                            className="rounded-lg shadow-2xl transform transition-transform hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
