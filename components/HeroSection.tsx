"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import { TextField, InputAdornment, MenuItem, Select } from '@mui/material';
import ReactCountryFlag from 'react-country-flag';
import Container from '@/components/Container';

export default function HeroSection() {
    const [phoneNumber, setPhoneNumber] = useState<string>(''); // State for the phone number
    const [countryCode, setCountryCode] = useState<string>('+251'); // Default to Ethiopia

    // Helper function to get country code for flag display
    const getCountryCodeForFlag = (phoneCode: string) => {
        switch (phoneCode) {
            case '+251': return 'ET';
            case '+91': return 'IN';
            case '+1': return 'US';
            case '+44': return 'GB';
            default: return 'ET';
        }
    };

    return (
        <>
        <section className="relative py-20 bg-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-slate-800 mb-4" style={{ color:'#3C4852', fontSize: '52px', fontWeight: 700, lineHeight: '60px', letterSpacing: '-0.01em', paddingRight: '0', marginRight: '0' }}>
                        Top-Quality Learning for <span style={{ color: '#FFB900' }}>Ethiopian Students</span>
                        </h1>
                        <p className="text-slate-600 mb-8 font-semibold" style={{ fontSize: '16px' }}>
                        Amharic, offline, and curriculum-aligned — <span className="text-[#6D3D94] font-semibold">built for results.</span>
                        </p>
                        <div style={{ maxWidth: '520px' }}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Enter your mobile number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <div className="flex items-center gap-2 pr-2">
                                                <Select
                                                    value={countryCode}
                                                    onChange={(e) => setCountryCode(e.target.value)}
                                                    variant="standard"
                                                    disableUnderline
                                                    renderValue={(value) => (
                                                        <div className="flex items-center gap-2">
                                                            <ReactCountryFlag 
                                                                countryCode={getCountryCodeForFlag(value)} 
                                                                svg 
                                                                style={{ width: '20px', height: '15px' }} 
                                                            />
                                                            <span>{value}</span>
                                                        </div>
                                                    )}
                                                    sx={{
                                                        '& .MuiSelect-select': {
                                                            padding: '0 24px 0 0',
                                                            fontSize: '14px',
                                                            fontWeight: 600,
                                                            color: '#374151',
                                                            minWidth: '80px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '4px'
                                                        },
                                                        '& .MuiSelect-icon': {
                                                            display: 'none'
                                                        }
                                                    }}
                                                >
                                                    <MenuItem value="+251">
                                                        <div className="flex items-center gap-2">
                                                            <ReactCountryFlag countryCode="ET" svg style={{ width: '20px', height: '15px' }} />
                                                            <span>+251</span>
                                                        </div>
                                                    </MenuItem>
                                                    <MenuItem value="+91">
                                                        <div className="flex items-center gap-2">
                                                            <ReactCountryFlag countryCode="IN" svg style={{ width: '20px', height: '15px' }} />
                                                            <span>+91</span>
                                                        </div>
                                                    </MenuItem>
                                                    <MenuItem value="+1">
                                                        <div className="flex items-center gap-2">
                                                            <ReactCountryFlag countryCode="US" svg style={{ width: '20px', height: '15px' }} />
                                                            <span>+1</span>
                                                        </div>
                                                    </MenuItem>
                                                    <MenuItem value="+44">
                                                        <div className="flex items-center gap-2">
                                                            <ReactCountryFlag countryCode="GB" svg style={{ width: '20px', height: '15px' }} />
                                                            <span>+44</span>
                                                        </div>
                                                    </MenuItem>
                                                </Select>
                                            </div>
                                        </InputAdornment>
                                    ),
                                    style: {
                                        height: '48px',
                                        fontSize: '16px',
                                        borderRadius: '8px'
                                    }
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#3C4852',
                                            borderWidth: '1px'
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#3C4852'
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#6D3D94',
                                            boxShadow: '0 0 0 2px rgba(109, 61, 148, 0.1)'
                                        }
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: '#6b7280',
                                        fontSize: '14px',
                                        fontWeight: 'normal',
                                        opacity: 1
                                    }
                                }}
                            />
                        </div>
                        <p className="text-slate-500 mt-2 mb-6 font-normal" style={{ fontSize: '14px', maxWidth: '520px' }}>
                            We&apos;ll send an OTP for verification
                        </p>
                        <Button 
                            className="font-bold"
                            style={{
                                padding: '10px 24px',
                                boxSizing: 'border-box',
                                borderRadius: '8px',
                                background: '#3C4852',
                                border: '1px solid #3C4852',
                                fontSize: '14px',
                                color: '#FFFFFF',
                                lineHeight: '20px',
                                fontWeight: 700,
                                height: '48px',
                                width: '100%',
                                maxWidth: '520px'
                            }}

                            asChild
                        >
                            <a href="https://staging-stud.gdacademy.et/auth/verify-phone">Join for free</a>
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-secondary to-primary rounded-3xl p-6 sm:p-8 transform rotate-3 shadow-2xl">
                            <div className="bg-white rounded-2xl p-4 sm:p-6 transform -rotate-3">
                                <Image 
                                    src="/images/hero_img.png" 
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
