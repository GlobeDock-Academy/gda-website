import Image from 'next/image';
import Link from 'next/link';
import {
    Phone,
    Facebook,
    Youtube,
    Twitter,
    Instagram,
    Linkedin,
    GraduationCap,
    Users,
    Building2,
    HeartHandshake,
    Mail,
    ShieldCheck,
    FileText
} from 'lucide-react';
import FooterContainer from '@/components/FooterContainer';

export default function Footer() {
    return (
        <footer className="bg-white text-gray-800 py-8 border-t border-gray-200">
            <FooterContainer>
                {/* Main content area */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                    {/* Left Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <Link href="/" legacyBehavior>
                                <a>
                                    <Image src="/images/logo.png" alt="GlobeDock Academy Logo" width={200} height={50} className="h-16 w-auto" />
                                </a>
                            </Link>
                            <p className="text-base text-gray-600 mt-3 max-w-md">
                                Ethiopia&apos;s largest & most trusted tutoring platform.
                            </p>
                        </div>
                        <div className="flex -mx-1.5">
                            <a href="https://apps.apple.com/us/app/globedock-academy/id6459021458" target="_blank" rel="noopener noreferrer" className="px-1.5">
                                <Image src="/images/app-store.svg" alt="Download on the App Store" width={135} height={40} className="h-10 w-auto" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.globedock.academy.android&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="px-1.5">
                                <Image src="/images/google-play.png" alt="Get it on Google Play" width={135} height={40} className="h-10 w-auto" />
                            </a>
                        </div>
                        {/* Separator line */}
                        <div className="border-t border-gray-200 pt-6 w-[15%]"></div>
                        <div>
                            <h4 className="font-semibold text-black mb-2">Reach out to us</h4>
                            <p className="text-sm text-gray-600 mb-2">
                                Get your questions answered about learning with GlobeDock.
                            </p>
                            <a href="tel:+251741" className="flex items-center text-sm text-gray-800 hover:text-black">
                                <Phone size={16} className="mr-2" />
                                Call 7421
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Link Columns */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold text-black mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/blog" className="flex items-center hover:text-black text-sm" style={{ color: '#2D2D2D' }}>
                                        <FileText size={18} className="mr-2" style={{ color: '#2D2D2D' }} /> Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/about-us" className="flex items-center hover:text-black text-sm" style={{ color: '#2D2D2D' }}>
                                        <Building2 size={18} className="mr-2" style={{ color: '#2D2D2D' }} /> About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-black mb-4">Help & support</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/donate" className="flex items-center hover:text-black text-sm" style={{ color: '#2D2D2D' }}>
                                        <HeartHandshake size={18} className="mr-2" style={{ color: '#2D2D2D' }} /> Donate
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#contact" className="flex items-center hover:text-black text-sm" style={{ color: '#2D2D2D' }}>
                                        <Mail size={18} className="mr-2" style={{ color: '#2D2D2D' }} /> Contact us
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-black mb-4">Company Apps</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="https://student.gdacademy.et" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-black text-sm" style={{ color: '#2D2D2D' }}>
                                        <GraduationCap size={18} className="mr-2" style={{ color: '#2D2D2D' }} /> Student App
                                    </a>
                                </li>
                                <li>
                                    <Link href="#" className="flex items-center hover:text-black text-sm" style={{ color: '#2D2D2D' }}>
                                        <Users size={18} className="mr-2" style={{ color: '#2D2D2D' }} /> Parental app
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div className="flex space-x-4 mb-4 sm:mb-0">
                        <a href="https://web.facebook.com/profile.php?id=61575697366790" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black"><Facebook size={20} /></a>
                        <a href="https://www.youtube.com/@globedockacademy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black"><Youtube size={20} /></a>
                        <a href="https://www.linkedin.com/company/globedock-academy/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black"><Linkedin size={20} /></a>
                        <a href="https://www.instagram.com/globedockacademy/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black"><Instagram size={20} /></a>
                        <a href="https://www.tiktok.com/@globedockacademy?_t=ZM-8zbhqUzdBJQ&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/blog/privacy-policy" className="text-gray-600 hover:text-black">Privacy Policy</Link>
                        <Link href="/blog/terms-of-service" className="text-gray-600 hover:text-black">Terms of Service</Link>
                        <Link href="/blog/helpfaq" className="text-gray-600 hover:text-black">Help/FAQ</Link>
                    </div>
                </div>
            </FooterContainer>
        </footer>
    );
}
