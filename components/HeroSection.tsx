"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Container from '@/components/Container';

export default function HeroSection() {
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined); // State for the full phone number

    return (
        <>
            {/* Custom styles for react-phone-number-input */}
            <style jsx global>{`
                .react-tel-input {
                    font-family: inherit;
                    position: relative;
                    width: 100%;
                }
                
                .react-tel-input .form-control {
                    width: 100%;
                    border: 1px solid #d1d5db;
                    border-radius: 0.5rem;
                    line-height: 1.5rem;
                    height: 3rem;
                    padding: 0.75rem 0.75rem 0.75rem 3.5rem;
                    font-size: 1rem;
                    color: #374151;
                    background-color: #fff;
                    outline: none;
                }
                
                .react-tel-input .flag-dropdown {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    padding: 0 0.5rem;
                    border-radius: 0.5rem 0 0 0.5rem;
                    background-color: transparent;
                    border: none;
                }
                
                /* Explicitly hide any borders from all dropdown elements */
                .react-tel-input .flag-dropdown *,
                .react-tel-input .selected-flag,
                .react-tel-input .selected-flag:focus,
                .react-tel-input .selected-flag:hover,
                .react-tel-input .selected-flag.open,
                .react-tel-input .selected-flag div {
                    border: none !important;
                    border-right: none !important;
                    box-shadow: none !important;
                }
                
                .react-tel-input .selected-flag {
                    outline: none;
                    position: relative;
                    width: 3rem;
                    height: 100%;
                    padding: 0 0 0 0.5rem;
                    display: flex;
                    align-items: center;
                }
                
                .react-tel-input .selected-flag .flag {
                    display: flex;
                    align-items: center;
                }
                
                .react-tel-input .selected-flag .arrow {
                    position: relative;
                    top: 0;
                    left: 0.3rem;
                    width: 0;
                    height: 0;
                    border-left: 3px solid transparent;
                    border-right: 3px solid transparent;
                    border-top: 4px solid #555;
                }
                
                .react-tel-input .form-control:focus {
                    border-color: #6D3D94;
                    box-shadow: 0 0 0 1px rgba(109, 61, 148, 0.2);
                }
                
                .react-tel-input .form-control::placeholder {
                    color: #9ca3af;
                }
                
                /* Remove special-label if it exists */
                .react-tel-input .special-label {
                    display: none;
                }
            `}</style>
        <section className="relative py-20 bg-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-slate-800 mb-4" style={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px', letterSpacing: '-0.01em' }}>
                        Unlock Your Potential with GlobeDock
                        </h1>
                        <p className="text-lg text-slate-600 mb-8">
                        From classroom concepts to exam confidence—<span className="text-[#6D3D94] font-semibold">one platform</span>.
                        </p>
                        <div className="max-w-md">
                            <PhoneInput
                                country={'et'} // Default country for react-phone-input-2
                                value={phoneNumber}
                                onChange={setPhoneNumber} // onChange typically returns the formatted number string
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    placeholder: "Enter your mobile number"
                                }}
                                // containerClass for the main wrapper, inputClass for the input, etc., can be used for more specific styling
                                // The global styles below are an attempt to adapt your existing ones.
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-2 mb-6 max-w-md">
                            We&apos;ll send an OTP for verification
                        </p>
                        <Button 
                            size="lg" 
                            className="bg-slate-800 hover:bg-slate-700 text-white text-lg px-8 py-3 w-full max-w-md rounded-md"
                            asChild
                        >
                            <a href="https://staging-stud.gdacademy.et/auth/verify-phone">Join for free</a>
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-secondary to-primary rounded-3xl p-6 sm:p-8 transform rotate-3 shadow-2xl">
                            <div className="bg-white rounded-2xl p-4 sm:p-6 transform -rotate-3">
                                <Image 
                                    src="/images/two_boys.png" 
                                    alt="Students learning with GlobeDock Academy"
                                    width={500} // Adjusted width slightly for the container
                                    height={400} // Adjusted height slightly for the container
                                    className="w-full h-auto rounded-lg shadow-lg object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </>
    );
}
