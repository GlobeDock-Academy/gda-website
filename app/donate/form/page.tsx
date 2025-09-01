'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { lato } from '../../fonts';

export default function DonationFormPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState(() => {
    const students = searchParams.get('students') || '1';
    const amount = searchParams.get('amount') || '2500';
    const total = searchParams.get('total') || amount;
    
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

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      name: !formData.name ? 'Name is required' : '',
      email: !formData.email ? 'Email is required' : 
             !emailRegex.test(formData.email) ? 'Please enter a valid email' : '',
      phone: !formData.phone ? 'Phone number is required' : ''
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
            phone: formData.phone.trim(),
            // Include any additional required fields that the API might need
            email: formData.email.trim(),
            currency: 'ETB',
            tx_ref: `donation-${Date.now()}`,
            return_url: `${window.location.origin}/donate/thank-you?name=${encodeURIComponent(formData.name.trim())}&email=${encodeURIComponent(formData.email.trim())}`,
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
        } else {
          // If no redirect URL, go to thank you page
          router.push('/donate/thank-you');
        }
      } catch (error) {
        console.error('Payment Error:', error);
        alert(error instanceof Error ? error.message : 'Failed to process payment. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation hidden />
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="flex items-center">
            <Image
              alt="GlobeDock Academy Logo" 
              src="/images/logo.png"
              className="h-12 w-auto"
              height="600"
              width="600"
              priority
            />
          </a>
        </div>
      </header>

      <main className="lg:flex lg:min-h-[calc(100vh-49px)]">
        {/* Left Column: Payment Form */}
        <div className="w-full lg:w-1/2 bg-white px-4 sm:px-6 lg:px-8 pt-4 pb-6">
          <div className="max-w-xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Donation Form</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
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
                  className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
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
                  className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 h-12 text-base font-medium rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Donation'}
                </Button>
              </div>
            </form>
            
            <div className="mt-8 flex items-center space-x-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Transactions are secure and encrypted.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="hidden lg:block lg:w-1/2 bg-gray-50 p-8 border-l border-gray-200">
          <div className="sticky top-0 pt-8">
            <h2 className="text-xl font-semibold mb-6">Donation Summary</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Number of Students</span>
                  <span className="font-medium">{formData.numberOfStudents || '0'}</span>
                </div>
                <div className="flex justify-between text-lg font-medium">
                  <span>Amount per Student</span>
                  <span>ETB {parseInt(formData.amount || '0').toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-200 my-4"></div>
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>ETB {(parseInt(formData.amount || '0') * parseInt(formData.numberOfStudents || '0')).toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Your donation helps</h3>
              <p className="text-sm text-blue-700">
                Your generous contribution will help provide quality education to students in need. 
                Thank you for supporting our cause!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
