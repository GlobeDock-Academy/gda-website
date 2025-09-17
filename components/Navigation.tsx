"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Container from '@/components/Container';
import Link from 'next/link';
import { HeartHandshake, CreditCard, BookOpen, Menu, X } from 'lucide-react';

interface NavigationProps {
  hidden?: boolean;
}

export default function Navigation({ hidden = false }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  if (hidden) return null;
    return (
        <>
            <style jsx>{`
                .login-button:hover {
                    background-color: rgba(113, 44, 148, 0.1) !important;
                }
            `}</style>
            <nav className="bg-[#FCFCFC] border-b border-gray-200 sticky top-0 z-50">
            <Container>
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        {/* Assumes your logo 'image.png' is in the /public directory */}
                        <Link href="/">
                            <Image src="/images/logo.png" alt="GlobeDock Academy Logo" width={161} height={40} className="h-12 w-auto" />
                        </Link>
                    </div>
                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center space-x-6"> {/* Adjusted spacing for nav items and new button group */}
                        {/* New Button Group - Links removed as per user request */}
                        <div className="flex items-center space-x-2" style={{ display: 'flex' }}>
                            <Button variant="ghost" asChild>
                                <Link href="/blog"><BookOpen className="mr-2 h-4 w-4" /> Blog</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href="/pricing"><CreditCard className="mr-2 h-4 w-4" /> Pricing</Link>
                            </Button>
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
                                    width: '104px',
                                    height: '40px',
                                    minWidth: '100px',
                                    transition: 'all 0.2s ease-in-out'
                                }}
                                asChild
                            >
                                <a href="https://student.gdacademy.et/auth/signin">Log in</a>
                            </Button>
                            <Button 
                                className="rounded-md px-4" 
                                style={{
                                    background: '#3C4852',
                                    color: '#FFFFFF',
                                    border: '1px solid #3C4852',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    width: '104px',
                                    height: '40px',
                                    minWidth: '100px'
                                }}
                                asChild
                            >
                                <a href="https://student.gdacademy.et/auth/signin">Join for free</a>
                            </Button>
                        </div>
                    </div>
                    {/* Mobile menu toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                          type="button"
                          aria-label="Toggle menu"
                          aria-expanded={mobileOpen}
                          onClick={() => setMobileOpen(!mobileOpen)}
                          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </Container>
            {/* Mobile dropdown menu */}
            {mobileOpen && (
              <div className="md:hidden border-t border-gray-200 bg-[#FCFCFC]">
                <Container>
                  <div className="py-2 flex flex-col">
                    <Link href="/blog" className="px-2 py-3 text-gray-800 hover:bg-gray-100 rounded flex items-center" onClick={() => setMobileOpen(false)}>
                      <BookOpen className="mr-2 h-5 w-5" /> Blog
                    </Link>
                    <Link href="/pricing" className="px-2 py-3 text-gray-800 hover:bg-gray-100 rounded flex items-center" onClick={() => setMobileOpen(false)}>
                      <CreditCard className="mr-2 h-5 w-5" /> Pricing
                    </Link>
                    <Link href="/donate" className="px-2 py-3 text-gray-800 hover:bg-gray-100 rounded flex items-center" onClick={() => setMobileOpen(false)}>
                      <HeartHandshake className="mr-2 h-5 w-5" /> Donate
                    </Link>
                    <a href="https://student.gdacademy.et/auth/signin" className="px-2 py-3 text-[#712C94] hover:bg-gray-100 rounded font-semibold" onClick={() => setMobileOpen(false)}>
                      Log in
                    </a>
                    <a href="https://student.gdacademy.et/auth/signin" className="mt-2 mb-3 inline-flex items-center justify-center rounded-md px-4 py-2 bg-[#3C4852] text-white font-semibold" onClick={() => setMobileOpen(false)}>
                      Join for free
                    </a>
                  </div>
                </Container>
              </div>
            )}
        </nav>
        </>
    );
}
