"use client";

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DonationForm = () => {
  const [numStudents, setNumStudents] = useState(1);
  const [numMonths, setNumMonths] = useState(6);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const studentOptions = [1, 3, 5, 10];
  const monthOptions = [6, 12];
  
  const currency = 'ETB';
  const currencySymbol = 'Br';
  const monthlySubscription = 200;

  const totalSponsorAmount = numStudents * numMonths * monthlySubscription;

  const handleStudentSelect = (students: number) => {
    setNumStudents(students);
    setShowOtherInput(false);
  };

  const handleOtherClick = () => {
    setShowOtherInput(true);
    setNumStudents(0); // Reset to 0 or a custom value indicator
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-gray-800 font-averta">
      <h2 className="text-xl font-bold mb-4 text-center">Support Free Education</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of students</label>
          <div className="grid grid-cols-3 gap-3">
            {studentOptions.map(s => (
              <Button 
                key={s} 
                variant={numStudents === s && !showOtherInput ? 'default' : 'outline'}
                onClick={() => handleStudentSelect(s)}
              >
                {s} Student{s > 1 ? 's' : ''}
              </Button>
            ))}
            <Button variant={showOtherInput ? 'default' : 'outline'} onClick={handleOtherClick}>Other</Button>
          </div>
          {showOtherInput && (
            <input
              type="number"
              placeholder="Enter number of students"
              className="w-full p-2 border border-gray-300 rounded-md mt-3"
              onChange={(e) => setNumStudents(Number(e.target.value))}
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Subscription duration</label>
          <div className="grid grid-cols-2 gap-3">
            {monthOptions.map(m => (
              <Button 
                key={m} 
                variant={numMonths === m ? 'default' : 'outline'}
                onClick={() => setNumMonths(m)}
              >
                {m === 12 ? '1 Year' : `${m} Months`}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-600">Total Donation</p>
          <p className="text-2xl font-bold">{currencySymbol}{totalSponsorAmount.toFixed(2)}</p>
        </div>
      </div>

      <Button className="w-full bg-gray-900 text-white h-14 text-lg hover:bg-gray-800 mt-6">
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
        <div className="container mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-end">
              <DonationForm />
            </div>
            <div className="relative">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/BWHB_o_q-vA" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full aspect-video rounded-lg"
              ></iframe>
              <div className="mt-12 text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-4">From Offline to On Track: Power a Child’s First Online Lesson.</h2>
                <p className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
                  From the very first tap, your support unlocks daily guidance from expert teachers, builds confidence through bite-sized mastery checks, and turns long commutes or candle-lit study sessions into moments of empowered discovery. Donate today and watch an “offline” learner shift to “on track”—one subscription, one future at a time.
                </p>
                <p className="mt-6 font-semibold">- GlobeDock Founder and CEO</p>
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
