'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { CreditCard, Building2, Banknote } from 'lucide-react';

export default function DonationFormPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount') || '2500';
  const [selectedPayment, setSelectedPayment] = useState('card');

  return (
    <div className="min-h-screen bg-gray-50" style={{ minWidth: '350px' }}>
      {/* Header with Logo */}
      <header className="bg-white py-4 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <a 
            href="/" 
            className="inline-flex items-center"
            title="GlobeDock Academy Home"
          >
            <img 
              alt="GlobeDock Academy Logo" 
              src="/images/logo.png"
              className="h-10 md:h-12 w-auto"
              height="600"
              width="600"
            />
          </a>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Payment Form */}
            <div className="lg:w-2/3">
              {/* Progress Navigation */}
              <nav className="mb-8" aria-label="progress">
                <ol className="flex items-center space-x-2 text-sm">
                  <li className="text-gray-900 font-medium" aria-current="step">Payment</li>
                  <span className="text-gray-400">/</span>
                  <li className="text-gray-400">Options</li>
                  <span className="text-gray-400">/</span>
                  <li className="text-gray-400">Information</li>
                </ol>
              </nav>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-7">
                  <h2 className="text-xl font-semibold">Payment Method</h2>
                </div>

                <div className="space-y-4 mb-8">
                  {/* Credit/Debit Card Option */}
                  <label className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment_method"
                      value="card"
                      checked={selectedPayment === 'card'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="w-9 h-9 bg-gray-100 rounded flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="font-medium">Debit or Credit</span>
                    </div>
                  </label>

                  {/* Card Details Form - Show when card is selected */}
                  {selectedPayment === 'card' && (
                    <div className="ml-12 space-y-4 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            CVC
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bank Transfer Option */}
                  <label className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment_method"
                      value="bank"
                      checked={selectedPayment === 'bank'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="w-9 h-9 bg-gray-100 rounded flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="font-medium">Bank Transfer</span>
                    </div>
                  </label>

                  {/* PayPal Option */}
                  <label className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment_method"
                      value="paypal"
                      checked={selectedPayment === 'paypal'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="w-9 h-9 bg-gray-100 rounded flex items-center justify-center">
                        <Banknote className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="font-medium">PayPal</span>
                    </div>
                  </label>
                </div>

                {/* Continue Button and Security Message */}
                <div className="space-y-4">
                  <div className="text-sm text-gray-600 text-center">
                    {selectedPayment === 'card' && 'Next you\'ll add your payment details'}
                    {selectedPayment === 'bank' && 'Next you\'ll add your bank details'}
                    {selectedPayment === 'paypal' && 'Next you\'ll login to your PayPal account'}
                  </div>
                  
                  <Button 
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 h-12 text-base font-medium rounded-full"
                    onClick={() => router.push('/donate')}
                  >
                    Continue to options
                  </Button>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span>Transactions are secure and encrypted.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Donation Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <div className="mb-10">
                  <h2 className="text-xl font-semibold mb-6">Donation Summary</h2>
                </div>
                
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold mr-3">ETB {parseInt(amount).toLocaleString()}</h2>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">Monthly</span>
                  </div>
                </div>

                <hr className="border-gray-200 mb-5" />
                
                <div className="flex justify-between mb-5">
                  <span className="text-gray-700">Donation Monthly</span>
                  <span className="font-medium">ETB {parseInt(amount).toLocaleString()}</span>
                </div>

                <hr className="border-gray-200 mb-5" />
                
                <div className="flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">ETB {parseInt(amount).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
