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
    Users
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main content area */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                    {/* Left Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <Link href="/" legacyBehavior>
                                <a>
                                    <Image src="/images/logo.png" alt="GlobeDock Academy Logo" width={161} height={40} className="h-12 w-auto" />
                                </a>
                            </Link>
                            <p className="text-sm text-gray-400 mt-3 max-w-md">
                                GlobeDock is democratising learning, making it accessible to all. Join the revolution, learn on the world's largest learning platform.
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/app-store.svg" alt="Download on the App Store" width={160} height={50} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/google-play.png" alt="Get it on Google Play" width={160} height={50} />
                            </a>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-100 mb-2">Reach out to us</h4>
                            <p className="text-sm text-gray-400 mb-2">
                                Get your questions answered about learning with GlobeDock.
                            </p>
                            <a href="tel:+18001234567" className="flex items-center text-sm text-gray-300 hover:text-white">
                                <Phone size={16} className="mr-2" />
                                Call +1 800 123 4567 (Placeholder)
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Link Columns */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold text-gray-100 mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><Link href="/about-us" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
                                {/* Add other company links here if needed, following Unacademy's example like Shikshodaya, Careers, Blogs, Privacy policy, Terms and conditions */}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-100 mb-4">Help & support</h4>
                            <ul className="space-y-2">
                                <li><Link href="/donation" className="text-gray-400 hover:text-white text-sm">Donation</Link></li>
                                <li><Link href="/contact-us" className="text-gray-400 hover:text-white text-sm">Contact us</Link></li>
                                <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-100 mb-4">Company Apps</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="flex items-center text-gray-400 hover:text-white text-sm">
                                        <GraduationCap size={18} className="mr-2 text-primary" /> Learner app
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="flex items-center text-gray-400 hover:text-white text-sm">
                                        <Users size={18} className="mr-2 text-secondary" /> Parental app
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-gray-400 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Globedock PLC
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><Youtube size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
