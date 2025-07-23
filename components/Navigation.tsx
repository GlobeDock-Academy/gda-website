"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Container from '@/components/Container';
import Link from 'next/link';
import { HeartHandshake } from 'lucide-react';

export default function Navigation() {
    return (
        <>
            <style jsx>{`
                .login-button:hover {
                    background-color: rgba(113, 44, 148, 0.1) !important;
                }
            `}</style>
            <nav className="bg-[#FCFCFC] border-b border-secondary/20 sticky top-0 z-50">
            <Container>
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        {/* Assumes your logo 'image.png' is in the /public directory */}
                        <Link href="/">
                            <Image src="/images/logo.png" alt="GlobeDock Academy Logo" width={161} height={40} className="h-12 w-auto" />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-6"> {/* Adjusted spacing for nav items and new button group */}
                        {/* New Button Group - Links removed as per user request */}
                        <div className="flex items-center space-x-2">
                            <Button variant="ghost" asChild>
                                <Link href="/donate"><HeartHandshake className="mr-2 h-4 w-4" /> Donate</Link>
                            </Button>
                            <Button 
                                variant="outline" 
                                className="rounded-md px-4 login-button" 
                                style={{
                                    color: '#712C94',
                                    borderColor: '#712C94',
                                    backgroundColor: 'transparent',
                                    fontFamily: 'inherit',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    transition: 'all 0.2s ease-in-out'
                                }}
                                asChild
                            >
                                <a href="https://staging-stud.gdacademy.et/auth/signin">Log in</a>
                            </Button>
                            <Button 
                                className="rounded-md px-4" 
                                style={{
                                    background: '#3C4852',
                                    color: '#FFFFFF',
                                    border: '1px solid #3C4852',
                                    fontSize: '14px',
                                    fontWeight: 700
                                }}
                                asChild
                            >
                                <a href="https://staging-stud.gdacademy.et/auth/verify-phone">Join for free</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
        </>
    );
}
