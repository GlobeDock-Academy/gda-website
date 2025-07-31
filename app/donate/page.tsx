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
  const currencySymbol = 'Br';
  const yearlyFee = 2000;

  const totalSponsorAmount = numStudents * yearlyFee;

  const handleStudentSelect = (students: number) => {
    setNumStudents(students);
    setShowOtherInput(false);
  };

  const handleOtherClick = () => {
    setShowOtherInput(true);
    setNumStudents(0); // Reset to 0 or a custom value indicator
  };

  return (
    <div className="bg-white p-8 rounded-[20px] shadow-md w-[420px] h-[692px] text-gray-800">
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
          <p className="text-2xl font-semibold text-gray-900">{currencySymbol}{totalSponsorAmount.toFixed(2)}</p>
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
    question: "Is this donation tax deductible?",
    answer: "Yes, GlobeDock is a 501(c)(3) nonprofit organization, and all donations are tax-deductible to the extent allowable by law."
  },
  {
    question: "How do I give by check?",
    answer: "You can mail a check to our office at [Your Address Here]. Please make the check payable to GlobeDock."
  },
  {
    question: "Do you accept employee matching gifts?",
    answer: "Yes, many employers will match your donation. Please check with your HR department for more information."
  },
  {
    question: "Can I donate stock or make my donation by wire transfer?",
    answer: "Yes, we accept stock donations and wire transfers. Please contact us at [Your Contact Email] for instructions."
  },
  {
    question: "Do you accept cryptocurrency donations?",
    answer: "Yes, we accept donations in various cryptocurrencies. Please visit our crypto donation page for more details."
  },
  {
    question: "Can I donate in a currency other than US dollars?",
    answer: "Yes, our donation form supports multiple currencies. Simply select your preferred currency from the dropdown menu."
  },
  {
    question: "How do I manage my recurring donation?",
    answer: "You can manage your recurring donation through the link provided in your initial donation receipt email."
  }
];

const FaqSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="bg-primary text-white">
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
                  <p className="text-lg leading-relaxed mb-6 text-white opacity-90 font-normal">
                    &ldquo;From the very first tap, your support unlocks daily guidance from expert teachers, builds confidence through bite-sized mastery checks, and turns long commutes or candle-lit study sessions into moments of empowered discovery. Donate today and watch an &lsquo;offline&rsquo; learner shift to &lsquo;on track&rsquo;&mdash;one subscription, one future at a time.&rdquo;
                  </p>
                  <p className="text-base font-normal text-white opacity-80">- Kirubel Akalu, Founder and CEO of GlobeDock Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FaqSection />
      <Footer />
    </div>
  );
}
