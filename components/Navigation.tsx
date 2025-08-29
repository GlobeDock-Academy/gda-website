"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Container from '@/components/Container';
import Link from 'next/link';
// Simplified navigation per request: logo on left, subscribe button on right

export default function Navigation() {
    return (
        <>
            <style jsx>{`
                .login-button:hover {
                    background-color: rgba(113, 44, 148, 0.1) !important;
                }
            `}</style>
            {/* Purple-toned background like uLesson header; simplified bar */}
            <nav className="bg-[#F4F2FB] z-40">
            <Container>
                <div className="flex justify-between items-center h-20">
                    {/* Left: Logo */}
                    <div className="flex items-center">
                        <Link href="/" aria-label="GlobeDock Academy Home">
                            <Image src="/images/logo.png" alt="GlobeDock Academy Logo" width={161} height={40} className="h-12 w-auto" />
                        </Link>
                    </div>

                    {/* Right: Subscribe button */}
                    <div className="flex items-center">
                        <Button
                            asChild
                            className="rounded-md px-5 h-10 text-white font-semibold"
                            style={{ backgroundColor: '#F57143' }}
                        >
                            <a href="/blog#subscribe">Subscribe</a>
                        </Button>
                    </div>
                </div>
            </Container>
        </nav>
        </>
    );
}
