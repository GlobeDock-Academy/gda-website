'use client';

import { useState, FormEvent, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { lato } from '../../fonts';
import { Calendar, ShieldCheck, ChevronDown, CreditCard } from 'lucide-react';

function DonationFormPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // Test mode: enable by appending ?test=1 or ?test=true to the URL
  const isTestMode = (searchParams.get('test') || '').toLowerCase() === '1' ||
                     (searchParams.get('test') || '').toLowerCase() === 'true';
  const [formData, setFormData] = useState(() => {
    const students = searchParams.get('students') || '1';
    const defaultAmount = '2500';
    const amount = isTestMode ? '5' : (searchParams.get('amount') || defaultAmount);
    const total = isTestMode ? '5' : (searchParams.get('total') || amount);
    
    return {
      name: '',
      email: '',
      phone: '',
      // These are read from URL and not editable
      numberOfStudents: students,
      amount: amount,
      total: total
    };
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMobileSummary, setShowMobileSummary] = useState(false);

  // Normalize Ethiopian phone numbers into local 10-digit format 09xxxxxxxx
  const normalizePhone = (input: string) => {
    const digits = (input || '').replace(/\D/g, ''); // remove non-digits
    // Handle +251 or 251 country code
    if (digits.startsWith('251')) {
      // Expect 12 digits: 2519xxxxxxxx -> 09xxxxxxxx
      if (digits.length >= 12) {
        return '0' + digits.slice(3, 12);
      }
      // Partial typing fallback
      return '0' + digits.slice(3);
    }
    // Handle numbers starting with 9 -> add leading 0
    if (digits.startsWith('9')) {
      return '0' + digits.slice(0, 9);
    }
    // Already starts with 0: keep first 10 digits
    if (digits.startsWith('0')) {
      return digits.slice(0, 10);
    }
    // Fallback (unrecognized start): return first 10 digits
    return digits.slice(0, 10);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const normalizedPhone = normalizePhone(formData.phone);
    const newErrors = {
      name: !formData.name ? 'Name is required' : '',
      email: !formData.email ? 'Email is required' : 
             !emailRegex.test(formData.email) ? 'Please enter a valid email' : '',
      phone: !normalizedPhone ? 'Phone number is required' :
             !/^0\d{9}$/.test(normalizedPhone) ? 'Enter a valid phone (e.g., 09xxxxxxxx)' : ''
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const normalizedPhone = normalizePhone(formData.phone);
        // keep UI in sync so users see the accepted format
        if (normalizedPhone !== formData.phone) {
          setFormData(prev => ({ ...prev, phone: normalizedPhone }));
        }
        const response = await fetch('https://app.gdacademy.et/api/v2/donor/chapa/pay_start?donation=true', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            number_of_students: formData.numberOfStudents,
            amount: formData.total,
            phone: normalizedPhone,
            email: formData.email.trim(),
          }),
        });

        const responseData = await response.json();
        
        if (!response.ok) {
          throw new Error(responseData.message || 'Failed to process payment');
        }

        console.log('API Response:', responseData);
        
        // If the API returns a redirect URL, navigate to it
        if (responseData.checkout_url) {
          window.location.href = responseData.checkout_url;
        } else if (responseData.data && responseData.data.checkout_url) { // Keep old logic as a fallback
          window.location.href = responseData.data.checkout_url;
        }
      } catch (error) {
        console.error('Payment Error:', error);
        alert(error instanceof Error ? error.message : 'Failed to process payment. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Helpers for sidebar summary formatting
  const studentsCount = parseInt(formData.numberOfStudents || '0');
  const amountPerStudent = parseInt(formData.amount || '0');
  const totalAmount = parseInt(formData.total || String(studentsCount * amountPerStudent)) || 0;
  const formatETB = (n: number) => `ETB ${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const frequencyLabel = 'One Time';

  return (
    <div className="flex flex-col min-h-screen lg:h-screen bg-gray-50 lg:overflow-hidden">
      <Navigation hidden />
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center">
            <Image
              alt="GlobeDock Academy Logo" 
              src="/images/logo.png"
              className="h-12 w-auto"
              height="600"
              width="600"
              priority
            />
          </Link>
        </div>
      </header>

      <main className="lg:flex flex-1 overflow-hidden lg:overflow-y-hidden">
        {/* Left Column: Payment Form */}
        <div className="w-full lg:w-1/2 bg-white px-4 sm:px-6 lg:px-8 pt-4 pb-4 lg:pt-3 lg:pb-2">
          {/* Progress Indicator at the very top of the left column */}
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 mb-4">
            <h2 className="text-base font-medium text-gray-700 font-sans">
              <span className="font-bold">Form</span> / Options / Payment
            </h2>
          </div>
          
          <div className="w-full max-w-xl lg:mx-0 lg:ml-auto lg:w-[46%] lg:max-w-md lg:pt-0">
            {/* Mobile Summary Toggle - inside width container so width matches form */}
            <button
              type="button"
              aria-label="View summary"
              aria-expanded={showMobileSummary}
              aria-controls="mobile-summary-panel"
              onClick={() => setShowMobileSummary(v => !v)}
              className="lg:hidden w-full flex items-center justify-between py-3 mb-2 bg-transparent border-0 rounded-none hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:rounded-md"
            >
              <div className="flex items-center gap-2 text-[15px] font-medium text-gray-800">
                View summary
                <ChevronDown className={`w-5 h-5 transition-transform ${showMobileSummary ? 'rotate-180' : ''}`} />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-gray-700">{formatETB(totalAmount)}</span>
                <span className="text-gray-500">/ {frequencyLabel}</span>
                <CreditCard className="w-8 h-5 text-gray-700" aria-hidden="true" />
              </div>
            </button>
            {showMobileSummary && (
              <div id="mobile-summary-panel" className="lg:hidden mt-1 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Donation Summary</h2>
                <div className="mb-4 flex items-center gap-3">
                  <div className="text-2xl font-bold text-gray-700 tracking-tight">{formatETB(totalAmount)}</div>
                  <span className="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-1 text-[13px] font-medium text-gray-700">
                    {frequencyLabel}
                    <Calendar className="w-4 h-4" />
                  </span>
                </div>
                <hr className="border-gray-200 mb-3" />
                <div className="flex items-center justify-between text-[15px] text-gray-700 mb-2">
                  <span>Donation {frequencyLabel}</span>
                  <span>{formatETB(totalAmount)}</span>
                </div>
                <hr className="border-gray-200 my-2" />
                <div className="flex items-center justify-between text-[16px] text-gray-900">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">{formatETB(totalAmount)}</span>
                </div>
              </div>
            )}
            {isTestMode && (
              <div className="mb-4 rounded-md border border-yellow-300 bg-yellow-50 p-3 text-sm text-yellow-800">
                <strong className="font-semibold">Test Mode:</strong> Using ETB 5 for amount and total. Remove <code>?test=1</code> to disable.
              </div>
            )}
            <h1 className="text-2xl font-bold text-gray-700 mb-6 lg:mb-4">Donation Form</h1>
            
            <form onSubmit={handleSubmit} className="pr-4">
              <div className="space-y-6 bg-white p-6 rounded-xl border border-gray-200 mb-6 lg:mb-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 h-12 text-base font-medium rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loader-dots" aria-label="Loading">
                      <span />
                      <span />
                      <span />
                    </span>
                  ) : (
                    'Continue to options'
                  )}
                </Button>
                <div className="mt-4 lg:mt-3 text-center text-sm text-gray-500">
                  <ShieldCheck className="w-5 h-5 text-green-600 inline-block mr-2" aria-hidden="true" />
                  <span>Transactions are secure and encrypted.</span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Donation Summary */}
        <div className={`hidden lg:block lg:w-1/2 bg-gray-50 pl-12 pr-8 py-4 border-l border-gray-200 ${lato.className}`}>
          <div className="sticky top-0 pt-4">
            <h2 className="text-[28px] leading-8 font-semibold text-gray-700 mb-6 mt-2 text-left">Donation Summary</h2>

            {/* Amount + Frequency */}
            <div className="mb-6 flex items-center gap-3">
              <div className="text-[24px] leading-7 font-bold text-gray-700 tracking-tight">
                {formatETB(totalAmount)}
              </div>
              <span className="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-1 text-[14px] font-medium text-gray-700">
                One Time
                <Calendar className="h-4 w-4 text-gray-500" aria-hidden="true" />
              </span>
            </div>

            <div className="border-t border-gray-200/80 my-4 w-1/2" />

            {/* Line item: Students supported */}
            <div className="space-y-2.5 text-[16px]">
              <div className="flex items-center justify-between text-gray-700 w-1/2 font-sans">
                <span>Students Supported</span>
                <span className="font-medium">{studentsCount.toLocaleString()}</span>
              </div>
            </div>

            <div className="border-t border-gray-200/80 my-4 w-1/2" />

            <div className="flex items-center justify-between text-[16px] w-1/2 font-sans">
              <span className="font-semibold text-gray-800">Total</span>
              <span className="font-semibold text-gray-800">{formatETB(totalAmount)}</span>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer: empty white strip, no text */}
      <footer className="bg-white border-t border-gray-200 py-2 mt-auto" />
      
      <style jsx>{`
        .loader-dots {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .loader-dots span {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: white;
          opacity: 0.9;
          animation: loader-bounce 1.2s infinite ease-in-out;
        }
        .loader-dots span:nth-child(2) { animation-delay: 0.15s; }
        .loader-dots span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes loader-bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.6; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default function DonationFormPage() {
  return (
    <Suspense>
      <DonationFormPageInner />
    </Suspense>
  );
}
