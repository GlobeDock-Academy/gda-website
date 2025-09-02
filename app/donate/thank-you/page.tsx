"use client";

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  const router = useRouter();
  

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Donation!</h1>
        
        <p className="text-gray-600 mb-8">
          Your generous contribution will help provide quality education to students in need. 
          You`ll receive a confirmation email with your donation details shortly.
        </p>
        
        <div className="space-y-4">
          <Button 
            onClick={() => router.push('/')}
            className="w-full bg-black hover:bg-gray-800"
          >
            Return to Home
          </Button>
          
        </div>
      </div>
    </div>
  );
}
