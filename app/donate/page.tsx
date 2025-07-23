"use client";

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ImpactSection from '@/components/ImpactSection';

const DonationForm = () => {
  const [currency, setCurrency] = useState('ETB');
  const [numStudents, setNumStudents] = useState(1);
  const [numMonths, setNumMonths] = useState(1);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('sponsor'); // 'sponsor' or 'custom'

  const studentOptions = [1, 2, 3, 5, 10];
  const monthOptions = [1, 3, 6, 12];
  
  const currencies = ['ETB', 'USD', 'EUR', 'AUD', 'CAD', 'GBP'];
  const currencySymbols = {
    'ETB': 'Br',
    'USD': '$',
    'EUR': '€',
    'AUD': 'A$',
    'CAD': 'C$',
    'GBP': '£',
  };

  const monthlySubscription = {
    'ETB': 200,
    'USD': 4,
    'EUR': 3.5,
    'AUD': 5.5,
    'CAD': 5,
    'GBP': 3,
  };

  const handleDonationTypeChange = (type) => {
    setDonationType(type);
    if (type === 'sponsor') {
      setCustomAmount('');
    } else {
      setNumStudents(1);
      setNumMonths(1);
    }
  };

  const totalSponsorAmount = numStudents * numMonths * monthlySubscription[currency];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-gray-800">
      <h2 className="text-xl font-bold mb-4">Unlock a Student’s Future—Fuel Their Learning Now.</h2>
      
      <div className="mb-6">
        <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">Choose Currency</label>
        <select
          id="currency"
          name="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="inline-block w-auto pl-3 pr-6 py-2 text-base border-2 border-primary focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {currencies.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <Button 
          variant={donationType === 'sponsor' ? 'default' : 'outline'}
          className="w-full"
          onClick={() => handleDonationTypeChange('sponsor')}
        >
          Sponsor Students
        </Button>
        <Button 
          variant={donationType === 'custom' ? 'default' : 'outline'}
          className="w-full"
          onClick={() => handleDonationTypeChange('custom')}
        >
          Custom Amount
        </Button>
      </div>

      {donationType === 'sponsor' ? (
        <div className="space-y-4">
          <div>
            <label htmlFor="students" className="block text-sm font-medium text-gray-700 mb-1">Number of students</label>
            <select
              id="students"
              value={numStudents}
              onChange={(e) => setNumStudents(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {studentOptions.map(s => <option key={s} value={s}>{s} student{s > 1 ? 's' : ''}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="months" className="block text-sm font-medium text-gray-700 mb-1">Subscription duration</label>
            <select
              id="months"
              value={numMonths}
              onChange={(e) => setNumMonths(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {monthOptions.map(m => <option key={m} value={m}>{m} month{m > 1 ? 's' : ''}</option>)}
            </select>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-gray-600">Total Donation</p>
            <p className="text-2xl font-bold">{currencySymbols[currency]}{totalSponsorAmount.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <div>
          <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">Enter your donation amount</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">{currencySymbols[currency]}</span>
            <input
              id="custom-amount"
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      )}

      <Button className="w-full bg-gray-900 text-white h-14 text-lg hover:bg-gray-800 mt-6">
        Continue
      </Button>
    </div>
  );
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="bg-primary text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-end">
              <DonationForm />
            </div>
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto lg:mx-0">
                <Image 
                  src="/images/sal-khan-placeholder.png" // Placeholder image
                  alt="Founder" 
                  width={256}
                  height={256}
                  className="rounded-full object-cover relative z-10"
                />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-lg transform rotate-12"></div>
              </div>
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
      <ImpactSection />
      <Footer />
    </div>
  );
}
