"use client";

import React, { useState } from 'react';
import { montserrat, mulish } from '../fonts';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';


const PricingPage = () => {
  // Country selection removed as per user request

  const pricingPlans = [
    {
      duration: '1 Month',
      price: 'ETB 400',
      originalPrice: 'ETB 500',
      validity: '30 days',
      popular: false
    },
    {
      duration: '6 Months',
      price: 'ETB 1,700',
      originalPrice: 'ETB 3,000',
      validity: '180 days',
      popular: true
    },
    {
      duration: '12 Months',
      price: 'ETB 2,500',
      originalPrice: 'ETB 6,000',
      validity: '365 days',
      popular: false
    }
  ];

  const features = [
    {
      title: 'AI-Powered Homework Help',
      description: 'Get instant, personalised, and accurate homework help 24/7 so that you never get stuck on tricky questions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9.5 9h5" />
          <path d="M12 12v5" />
        </svg>
      )
    },
    {
      title: 'Every grade covered',
      description: 'Learners in Primary, Junior Secondary & Senior Secondary school can learn with GDA. There\'s a path for every learner.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M8 13h.01" />
          <path d="M8 17h.01" />
          <path d="M12 17h.01" />
          <path d="M16 17h.01" />
        </svg>
      )
    },
    {
      title: 'Progress Report',
      description: 'Improve your academic performance with detailed reports and analysis on your learning progress.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
          <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
          <path d="m12 12 4 4 6-6" />
          <path d="M16 5h4v4" />
        </svg>
      )
    },
    {
      title: 'Practice Test and Exams',
      description: 'Put all you\'ve learnt to practice so you\'re well on your way to mastering concepts. Practice makes perfect.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
          <path d="M20 10.7C20 9.1 19.4 7.7 18.3 6.7 17.2 5.6 16 5 14.5 5c-1.3 0-2.5.4-3.5 1.2-1-.8-2.2-1.2-3.5-1.2C6 5 4.7 5.6 3.7 6.7 2.6 7.8 2 9.2 2 10.7c0 1.3.3 2.4 1 3.3.7.9 1.6 1.6 2.7 2.1 1.1.5 2.3.8 3.6.9.3 0 .6.1.8.3.2.2.3.5.3.8 0 .2 0 .4-.1.5-.1.2-.2.4-.3.6-.1.2-.3.3-.5.4-.2.1-.4.2-.6.2h-2.1c-.2 0-.3 0-.5.1-.2 0-.3.1-.5.2-.1.1-.2.2-.3.3-.1.1-.2.2-.2.3 0 .1-.1.2-.1.3 0 .1 0 .2.1.3.1.1.1.2.2.3.1.1.2.2.3.3.1.1.3.1.5.2.2 0 .3.1.5.1h8.1c.2 0 .3 0 .5-.1.2 0 .3-.1.5-.2.1-.1.2-.2.3-.3.1-.1.2-.2.2-.3 0-.1.1-.2.1-.3 0-.1 0-.2-.1-.3-.1-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.3-.1-.1-.3-.1-.5-.2-.2 0-.3-.1-.5-.1h-2.1c-.2 0-.4-.1-.6-.2-.2-.1-.4-.2-.5-.4-.1-.2-.2-.4-.3-.6 0-.2-.1-.4-.1-.5 0-.3.1-.6.3-.8.2-.2.5-.3.8-.3 1.3-.1 2.5-.4 3.6-.9 1.1-.5 2-1.2 2.7-2.1.6-.9.9-2 1-3.3z" />
        </svg>
      )
    },
    {
      title: 'Unlimited Video Library',
      description: 'Pause, play, rewind; learn at your own pace with well-illustrated, easy-to-understand video lessons.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      )
    },
    {
      title: 'Expert Tutor Support',
      description: 'Get personalized help from qualified tutors who are experts in their subjects.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <div style={{ backgroundColor: '#F2F2FB' }}>
      <Navigation />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-8 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#2D1B48] text-white rounded-[32px] relative py-8 md:py-12 px-6 md:px-12 overflow-hidden">
              {/* Orange circle background elements */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#FF7B54] to-[#FF5E3A] blur-lg opacity-50 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#FF7B54] to-[#FF5E3A] blur-lg opacity-40 -ml-48 -mb-48"></div>
              
              <div className="flex flex-col md:flex-row items-center relative z-10">
                <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                  <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${montserrat.className}`} style={{ fontWeight: 700 }}>
                    Get unlimited access to <span className="text-[#FF7B54]">our features</span> with a paid subscription.
                  </h1>
                </div>
                
                <div className="md:w-1/2 relative">
                  {/* Device mockups container - left empty as per request */}
                  <div className="relative w-full h-[200px] md:h-[300px]">
                    {/* Device mockups removed as requested */}
                  </div>
                  
                  {/* Floating circular elements */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FF7B54] rounded-full flex items-center justify-center z-40">
                    <span className="text-white font-bold text-xs">LIVE</span>
                  </div>
                  
                  <div className="absolute bottom-12 left-0 w-14 h-14 bg-[#FF7B54] rounded-full flex items-center justify-center -ml-6 z-40">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                      <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                      <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                    </svg>
                  </div>
                  
                  <div className="absolute top-20 right-4 w-14 h-14 bg-[#6B4EE8] rounded-full flex items-center justify-center z-40">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center mb-12">
            <h2 className={`text-3xl font-bold text-gray-800 ${montserrat.className} mb-4`} style={{ fontWeight: 700 }}>
              Choose your Plan
            </h2>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${mulish.className}`}>
              Select the perfect plan that fits your learning needs and budget
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center w-full max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg p-6 relative transition-all hover:scale-105 w-full max-w-xs flex flex-col h-full ${
                    plan.popular ? 'ring-2 ring-blue-500' : 'transform scale-100 md:scale-95'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center flex flex-col h-full">
                    <div>
                      <h3 className={`text-xl font-bold text-gray-800 mb-4 ${montserrat.className}`} style={{ fontWeight: 700 }}>
                        {plan.duration}
                      </h3>
                      
                      <div className="mb-4">
                        <div className={`text-3xl font-bold text-blue-600 mb-2 ${mulish.className}`}>
                          {plan.price}
                        </div>
                        {plan.originalPrice && (
                          <div className="text-lg text-gray-500 line-through">
                            {plan.originalPrice}
                          </div>
                        )}
                      </div>
                      
                      <p className={`text-gray-600 mb-6 ${mulish.className}`}>
                        Valid for {plan.validity}
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-4">
                      <Button 
                        className={`w-full py-3 text-lg font-semibold ${
                          plan.popular 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : 'bg-gray-800 hover:bg-gray-900'
                        }`}
                      >
                        BUY NOW
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className={`text-lg text-gray-600 ${mulish.className} flex items-center justify-center gap-2`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.2467 16.11L16.9267 14.43C17.153 14.2066 17.4393 14.0536 17.7508 13.9897C18.0624 13.9258 18.3858 13.9537 18.6817 14.07L20.7292 14.8875C21.0284 15.0089 21.2848 15.2162 21.4663 15.4831C21.6479 15.75 21.7463 16.0647 21.7492 16.3875V20.1375C21.7475 20.3571 21.7013 20.5741 21.6135 20.7754C21.5257 20.9766 21.3981 21.1581 21.2384 21.3087C21.0786 21.4594 20.89 21.5761 20.6839 21.652C20.4778 21.7278 20.2586 21.7612 20.0392 21.75C5.69175 20.8575 2.79675 8.70753 2.24925 4.05753C2.22383 3.82918 2.24705 3.59804 2.31738 3.37931C2.38771 3.16058 2.50356 2.95923 2.6573 2.78848C2.81104 2.61774 2.99918 2.48148 3.20936 2.38868C3.41954 2.29587 3.64699 2.24862 3.87675 2.25003H7.49925C7.8225 2.25099 8.13808 2.34863 8.40539 2.5304C8.6727 2.71217 8.87952 2.96976 8.99925 3.27003L9.81675 5.31753C9.93694 5.61233 9.9676 5.93601 9.90491 6.24814C9.84222 6.56027 9.68895 6.847 9.46425 7.07253L7.78425 8.75253C7.78425 8.75253 8.75175 15.3 15.2467 16.11Z" fill="#EA7052"></path>
                </svg>
                Call us on <a href="tel:7421" className="text-blue-600 hover:underline">7421</a> to subscribe
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12 mx-auto" style={{ maxWidth: '610px' }}>
              <h2 className={`font-bold mb-4 ${montserrat.className}`} style={{ fontWeight: 700, fontSize: '36px', lineHeight: '43px', color: 'rgb(48, 20, 70)' }}>
                What you get with a subscription?
              </h2>
              <div className="w-20 h-1 bg-[#FF7B54] mx-auto"></div>
            </div>
            
            {/* First row - 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-12 justify-center">
              <div className="flex items-start mx-auto" style={{ maxWidth: '450px' }}>
                <div className="w-16 h-16 rounded-full bg-[#FFA978] flex items-center justify-center mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-bold mb-2 ${montserrat.className}`} style={{ fontWeight: 700, fontSize: '22px', lineHeight: '26px', color: 'rgb(48, 20, 70)' }}>
                    AI-Powered Homework Help
                  </h3>
                  <p className={`${mulish.className}`} style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: 'rgb(48, 20, 70)' }}>
                    Get instant, personalised, and accurate homework help 24/7 so that you never get stuck on tricky questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start mx-auto" style={{ maxWidth: '450px' }}>
                <div className="w-16 h-16 rounded-full bg-[#57C3A4] flex items-center justify-center mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-bold mb-2 ${montserrat.className}`} style={{ fontWeight: 700, fontSize: '22px', lineHeight: '26px', color: 'rgb(48, 20, 70)' }}>
                    Every grade covered
                  </h3>
                  <p className={`${mulish.className}`} style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: 'rgb(48, 20, 70)' }}>
                    Learners in Primary, Junior Secondary & Senior Secondary school can learn with GDA. There's a path for every learner.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Second row - 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-12 justify-center">
              <div className="flex items-start mx-auto" style={{ maxWidth: '450px' }}>
                <div className="w-16 h-16 rounded-full bg-[#F27660] flex items-center justify-center mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-bold mb-2 ${montserrat.className}`} style={{ fontWeight: 700, fontSize: '22px', lineHeight: '26px', color: 'rgb(48, 20, 70)' }}>
                    Progress Report
                  </h3>
                  <p className={`${mulish.className}`} style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: 'rgb(48, 20, 70)' }}>
                    Improve your academic performance with detailed reports and analysis on your learning progress.
                  </p>
                </div>
              </div>

              <div className="flex items-start mx-auto" style={{ maxWidth: '450px' }}>
                <div className="w-16 h-16 rounded-full bg-[#6E84EE] flex items-center justify-center mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21a8 8 0 0 0-16 0" />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-bold mb-2 ${montserrat.className}`} style={{ fontWeight: 700, fontSize: '22px', lineHeight: '26px', color: 'rgb(48, 20, 70)' }}>
                    Practice Test and Exams
                  </h3>
                  <p className={`${mulish.className}`} style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: 'rgb(48, 20, 70)' }}>
                    Put all you've learnt to practice so you're well on your way to mastering concepts. Practice makes perfect.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Third row - 1 centered item */}
            <div className="flex justify-center w-full">
              <div className="flex items-start mx-auto" style={{ maxWidth: '450px' }}>
                <div className="w-16 h-16 rounded-full bg-[#FFA978] flex items-center justify-center mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="m10 10 5 5" />
                    <path d="m10 15 5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-bold mb-2 ${montserrat.className}`} style={{ fontWeight: 700, fontSize: '22px', lineHeight: '26px', color: 'rgb(48, 20, 70)' }}>
                    Unlimited Video Library
                  </h3>
                  <p className={`${mulish.className}`} style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: 'rgb(48, 20, 70)' }}>
                    Pause, play, rewind; learn at your own pace with well-illustrated, easy-to-understand video lessons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
