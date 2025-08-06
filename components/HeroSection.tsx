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
    const [error, setError] = useState<boolean>(false); // State to track validation errors

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
        <section className="relative pt-20 pb-8 bg-white">
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
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                    if (error) setError(false); // Clear error when user types
                                }}
                                error={error}
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
                                            borderColor: error ? '#FF0000' : '#3C4852',
                                            borderWidth: error ? '2px' : '1px'
                                        },
                                        '&:hover fieldset': {
                                            borderColor: error ? '#FF0000' : '#3C4852'
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: error ? '#FF0000' : '#6D3D94',
                                            boxShadow: error ? '0 0 0 2px rgba(255, 0, 0, 0.1)' : '0 0 0 2px rgba(109, 61, 148, 0.1)'
                                        },
                                        '&.Mui-error fieldset': {
                                            borderColor: '#FF0000'
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
                        <p className={`mt-2 mb-6 font-normal ${error ? 'text-red-500' : 'text-slate-500'}`} style={{ fontSize: '14px', maxWidth: '520px' }}>
                            {error ? 'Enter a valid mobile number' : 'We\'ll send an OTP for verification'}
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
                            onClick={(e) => {
                                // Validate phone number
                                if (!phoneNumber.trim()) {
                                    e.preventDefault();
                                    setError(true);
                                }
                                // For production, add more sophisticated validation if needed
                                // e.g., check if phone number follows expected format
                            }}
                            asChild
                        >
                            <a href="https://app.gdacademy.et/register">Join for free</a>
                        </Button>
                    </div>
                    <div className="relative">
                        <Image 
                            src="/images/hero_img.png" 
                            alt="Students learning with GlobeDock Academy"
                            width={600} // Increased by 20% from 500
                            height={480} // Increased by 20% from 400
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </Container>
        </section>
        </>
    );
}
