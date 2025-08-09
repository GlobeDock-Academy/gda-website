"use client";

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { lato, timesNewRoman } from '../fonts';

const DonationForm = () => {
  const [numStudents, setNumStudents] = useState(1);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const studentOptions = [1, 3, 5, 10];
  
  const currency = 'ETB';
  const currencySymbol = 'ETB';
  const yearlyFee = 2500;

  const totalSponsorAmount = numStudents * yearlyFee;
  
  // Format number with commas
  const formatCurrency = (amount: number) => {
    return `${currencySymbol} ${amount.toLocaleString()}`;
  };

  const handleStudentSelect = (students: number) => {
    setNumStudents(students);
    setShowOtherInput(false);
  };

  const handleOtherClick = () => {
    setShowOtherInput(true);
    setNumStudents(0); // Reset to 0 or a custom value indicator
  };

  return (
    <div className="bg-white p-8 rounded-[20px] shadow-md w-[420px] h-auto text-gray-800">
      <h3 className={`text-2xl font-bold mb-6 text-center text-gray-900 ${lato.className}`} style={{fontSize: '24px', fontWeight: 700}}>Support free education</h3>
      
      <div className="space-y-6">
        <div>
          <label className={`block font-bold text-gray-700 mb-3 ${lato.className}`} style={{fontSize: '20px', fontWeight: 700}}>Number of students</label>
          <div className="space-y-2">
            {/* First row: 1 and 3 */}
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant={numStudents === 1 && !showOtherInput ? 'default' : 'outline'}
                onClick={() => handleStudentSelect(1)}
                className={`rounded-lg border font-bold ${lato.className} ${
                  numStudents === 1 && !showOtherInput ? '' : 'hover:bg-gray-50'
                }`}
                style={{
                  fontSize: '20px', 
                  fontWeight: 700,
                  paddingTop: '16px',
                  paddingRight: '8px',
                  paddingBottom: '16px',
                  paddingLeft: '8px',
                  height: '62px',
                  width: '100%'
                }}
              >
                1
              </Button>
              <Button 
                variant={numStudents === 3 && !showOtherInput ? 'default' : 'outline'}
                onClick={() => handleStudentSelect(3)}
                className={`rounded-lg border font-bold ${lato.className} ${
                  numStudents === 3 && !showOtherInput ? '' : 'hover:bg-gray-50'
                }`}
                style={{
                  fontSize: '20px', 
                  fontWeight: 700,
                  paddingTop: '16px',
                  paddingRight: '8px',
                  paddingBottom: '16px',
                  paddingLeft: '8px',
                  height: '62px',
                  width: '100%'
                }}
              >
                3
              </Button>
            </div>
            
            {/* Second row: 5 and 10 */}
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant={numStudents === 5 && !showOtherInput ? 'default' : 'outline'}
                onClick={() => handleStudentSelect(5)}
                className={`rounded-lg border font-bold ${lato.className} ${
                  numStudents === 5 && !showOtherInput ? '' : 'hover:bg-gray-50'
                }`}
                style={{
                  fontSize: '20px', 
                  fontWeight: 700,
                  paddingTop: '16px',
                  paddingRight: '8px',
                  paddingBottom: '16px',
                  paddingLeft: '8px',
                  height: '62px',
                  width: '100%'
                }}
              >
                5
              </Button>
              <Button 
                variant={numStudents === 10 && !showOtherInput ? 'default' : 'outline'}
                onClick={() => handleStudentSelect(10)}
                className={`rounded-lg border font-bold ${lato.className} ${
                  numStudents === 10 && !showOtherInput ? '' : 'hover:bg-gray-50'
                }`}
                style={{
                  fontSize: '20px', 
                  fontWeight: 700,
                  paddingTop: '16px',
                  paddingRight: '8px',
                  paddingBottom: '16px',
                  paddingLeft: '8px',
                  height: '62px',
                  width: '100%'
                }}
              >
                10
              </Button>
            </div>
            
            {/* Third row: Full-width input field */}
            <input
              type="number"
              min="1"
              step="1"
              placeholder="Other"
              className={`w-full rounded-lg border border-gray-300 font-bold ${lato.className} focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400`}
              style={{
                fontSize: '20px',
                fontWeight: 700,
                paddingTop: '16px',
                paddingRight: '8px',
                paddingBottom: '16px',
                paddingLeft: '8px',
                height: '62px'
              }}
              onInput={(e) => {
                // Remove any non-numeric characters
                const target = e.target as HTMLInputElement;
                target.value = target.value.replace(/[^0-9]/g, '');
              }}
              onChange={(e) => {
                const value = Number(e.target.value);
                setNumStudents(value);
                setShowOtherInput(value > 0);
              }}
            />
          </div>
        </div>



        <div className="bg-gray-50 p-4 rounded-md text-center">
          <p className="text-sm text-gray-600 mb-1">Total Donation</p>
          <p className="text-2xl font-semibold text-gray-900">{formatCurrency(totalSponsorAmount)}</p>
        </div>
      </div>

      <Button 
        className="w-full bg-black text-white hover:bg-gray-800 mt-6"
        style={{
          minHeight: '75px',
          backgroundColor: 'black',
          borderRadius: '12px',
          paddingTop: '12px',
          paddingRight: '0px',
          paddingBottom: '12px',
          paddingLeft: '0px',
          fontSize: '20px',
          fontWeight: 700
        }}
      >
        Continue
      </Button>
    </div>
  );
};

const faqs = [
  {
    question: "What does my donation of ETB 2,500 cover?",
    answer: "Your donation sponsors one child’s full access to GlobeDock Academy’s platform for an entire year. This includes curriculum-aligned video lessons, interactive quizzes, offline learning access, and parent tracking via the Parent App."
  },
  {
    question: "Who receives the support?",
    answer: "We work with the Ministry of Innovation and Technology to identify deserving students, especially those from low-income families, rural areas, or schools impacted by conflict or displacement."
  },
  {
    question: "Do I get updates on the students I support?",
    answer: "Yes. We send quarterly impact reports showing how your support is helping students — including usage data, learning milestones, and stories from the field when available."
  },
  {
    question: "Can I choose the number of students I want to sponsor?",
    answer: "Absolutely. You can sponsor 1, 3, 5, 10, or enter your own number. Every student matters — and even one subscription can change a child’s future."
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "At this time, donations are not tax-deductible. However, we are actively exploring partnerships and compliance to enable this in the future."
  },
  {
    question: "Can I sponsor as an organization or business?",
    answer: "Yes. We welcome support from businesses, NGOs, schools, and religious groups. For bulk sponsorships or CSR partnerships, please contact us for a customized package."
  },
  {
    question: "What makes GlobeDock Academy different?",
    answer: "We offer Ethiopia-specific digital learning that’s accessible on mobile, aligned with the national curriculum, and supported by real teachers. Our platform is competency-based, bilingual, and built for both students and parents."
  }
];

const FaqSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="w-full border border-gray-200 rounded-lg bg-white">
          <div className="px-6 py-6">
            <h2 className="text-2xl font-semibold text-left text-gray-900">Frequently asked questions</h2>
          </div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`} className="border-0">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-5 px-6 text-left hover:no-underline [&[data-state=open]]:pb-3">
                    <h3 className="text-lg font-normal text-gray-900 pr-4">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pt-0 px-6">
                    <p className="text-base text-gray-700 leading-normal">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="text-white" style={{backgroundColor: '#0B1D53'}}>
        <div className="container mx-auto px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="flex items-start justify-center w-full">
              <DonationForm />
            </div>
            <div className="relative w-full max-w-2xl -ml-8">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/KQp-2bNCGPM" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full aspect-video rounded-lg"

              ></iframe>
              <div className="mt-12 text-center lg:text-left">
                <h1 className={`mb-6 text-white ${timesNewRoman.className}`} style={{fontSize: '40px', fontWeight: 700}}>Help us do more</h1>
                <div className="max-w-xl mx-auto lg:mx-0">
                  <p className="text-lg leading-relaxed mb-4 text-white font-normal">
                    From the very first tap, your support unlocks a full year of learning: expert-taught video lessons, skill-based quizzes, and daily progress tools — all aligned with Ethiopia’s curriculum.
                  </p>
                  <p className="text-lg leading-relaxed mb-4 text-white font-normal">
                    Through our partnership with the Ministry of Innovation and Technology, we identify students who need it most. Whether they&apos;re in remote areas or recovering from interrupted schooling, your support means they don&apos;t fall behind.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-white font-normal">
                    Donate today and help an ‘offline’ learner become an engaged, confident student — one subscription, one future at a time.
                  </p>
                  <p className="text-base font-normal text-white">- Kirubel Akalu, Founder and CEO of GlobeDock Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className={`text-2xl font-semibold mb-4 text-gray-900 ${lato.className}`} style={{fontSize: '28px', fontWeight: 700}}>Still have questions?</h2>
          <p className="text-lg text-gray-700 mb-8">We&apos;re here to help. Reach out to our team anytime.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">📧</div>
              <h3 className={`text-lg font-medium mb-2 ${lato.className}`}>Email</h3>
              <a href="mailto:support@globedocket.com" className="text-blue-600 hover:underline">support@globedocket.com</a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">📞</div>
              <h3 className={`text-lg font-medium mb-2 ${lato.className}`}>Phone</h3>
              <p className="text-gray-700">+251-XXX-XXX-XXX</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">💬</div>
              <h3 className={`text-lg font-medium mb-2 ${lato.className}`}>WhatsApp</h3>
              <a href="https://wa.me/251XXXXXXXXX" className="text-blue-600 hover:underline">Click to Chat</a>
            </div>
          </div>
          
          <Button 
            className={`rounded-lg font-bold ${lato.className}`}
            style={{
              fontSize: '18px', 
              fontWeight: 600,
              padding: '12px 32px',
              backgroundColor: '#0B1D53',
              color: 'white'
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      <FaqSection />
      <Footer />
    </div>
  );
}
