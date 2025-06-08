"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function HeroSection() {
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined); // State for the full phone number

    return (
        <>
            {/* Custom styles for react-phone-number-input */}
            <style jsx global>{`
                .form-control { /* react-phone-input-2 uses 'form-control' for the input */
                    border: 1px solid #e2e8f0; /* slate-300 */
                    border-radius: 0.375rem; /* rounded-md */
                    padding: 0.625rem 0.75rem; /* py-2.5 px-3 */
                    font-size: 0.875rem; /* text-sm */
                    line-height: 1.25rem; /* text-sm */
                    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                    flex: 1; /* Allow input to take available space */
                    min-width: 0; /* Important for flex items */
                }
                .form-control:focus {
                    border-color: #00c0a3; /* secondary brand color */
                    outline: 0;
                    box-shadow: 0 0 0 0.2rem rgba(52, 211, 153, 0.25); /* focus ring */
                }
                .flag-dropdown { /* Styles for the flag dropdown container */
                    margin-right: 0.5rem;
                    /* Vertically center the flag and dropdown arrow */
                    display: flex;
                    align-items: center;
                }
                .flag-dropdown .arrow {
                    opacity: 0.7;
                }
                /* Container for the phone input to help with sizing and border */
                .phone-input-custom-container {
                    display: flex;
                    border: 1px solid #e2e8f0; /* slate-300, same as input for unified look */
                    border-radius: 0.375rem; /* rounded-md */
                    background-color: white; /* Ensure background for the container */
                }
                .phone-input-custom-container:focus-within {
                    border-color: #00c0a3; /* secondary brand color */
                    box-shadow: 0 0 0 0.2rem rgba(52, 211, 153, 0.25); /* focus ring */
                }
                .phone-input-custom-container .form-control {
                    border: none; /* Remove border from internal input as container has it */
                    box-shadow: none; /* Remove shadow from internal input */
                    /* Significantly increase left padding to make space for the country selector */
                    /* The value (e.g., 3.5rem) might need tweaking based on the actual width of the country selector */
                    padding-left: 3.5rem !important; 
                }
                .phone-input-custom-container .form-control:focus {
                    border: none;
                    box-shadow: none;
                }
            `}</style>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight">
                            Achieve your learning goals with top educators
                        </h1>
                        <p className="text-lg text-slate-600 mb-8">
                            Millions trust us for their exam preparation.
                        </p>
                        <div className="max-w-md phone-input-custom-container">
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
                        >
                            Join for free
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
            </div>
        </section>
        </>
    );
}
