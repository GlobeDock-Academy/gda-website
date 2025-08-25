"use client";

import { useState, useEffect, useCallback } from 'react';
import { Play, GraduationCap, Download, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { lato, timesNewRoman } from '../fonts';

const DonationForm = () => {
  const router = useRouter();
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
        onClick={() => router.push('/donate/form')}
      >
        Donate
      </Button>
    </div>
  );
};

// No fallback FAQs - we'll handle empty state in the UI

const FaqSection = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://app.gdacademy.et/api/v2/faqs');
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        const responseJson = await response.json();
        
        // The API returns a paginated structure with FAQ items in the 'data' array
        if (responseJson && responseJson.data && Array.isArray(responseJson.data)) {
          const formattedFaqs = responseJson.data.map((item: any) => ({
            question: item.question || '',
            // Use answer_html if available, otherwise use answer_md or fallback
            answer: item.answer_html ? 
              // Strip HTML tags for simple rendering
              item.answer_html.replace(/<\/?[^>]+(>|$)/g, '') : 
              item.answer_md || item.answer || '',
            id: item.id || ''
          }));
          
          setFaqs(formattedFaqs);
          console.log('FAQs loaded:', formattedFaqs);
        } else {
          console.warn('Unexpected API response format:', responseJson);
          setFaqs([]);
        }
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError('Failed to load FAQ data');
        setFaqs([]); // Don't use fallback data
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchFaqs();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="w-full border border-gray-200 rounded-lg bg-white p-12">
            <div className="animate-pulse flex flex-col space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="w-full border border-gray-200 rounded-lg bg-white p-8">
            <h2 className="text-xl text-red-600 mb-2">Error loading FAQ section</h2>
            <p className="text-gray-700">Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="w-full border border-gray-200 rounded-lg bg-white">
          <div className="px-6 py-6">
            <h2 className="text-2xl font-semibold text-left text-gray-900">Frequently asked questions</h2>
          </div>
          {faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <div key={faq.id || index} className="border-b border-gray-200 last:border-b-0">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${faq.id || index}`} className="border-0">
                    <AccordionTrigger className="flex flex-1 items-center justify-between py-5 px-6 text-left hover:no-underline [&[data-state=open]]:pb-3">
                      <h3 className="text-lg font-normal text-gray-900 pr-4">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pt-0 px-6">
                      <p className="text-base text-gray-700 leading-normal">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))
          ) : (
            <div className="px-6 py-8 text-center">
              <p className="text-gray-500 text-lg">No frequently asked questions are available at the moment.</p>
              <p className="text-gray-400 mt-2">Please check back later or contact us for more information.</p>
            </div>
          )}
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
                <h1 className="mb-6 text-white font-sans" style={{fontSize: '40px', fontWeight: 700}}>Help us do more</h1>
                <div className="max-w-xl mx-auto lg:mx-0">
                  <p className="text-lg leading-relaxed mb-4 text-white font-normal">
                    Your support unlocks a year of expert lessons, skill-based quizzes, and progress tools aligned with Ethiopia's curriculum.
                  </p>
                  <p className="text-lg leading-relaxed mb-4 text-white font-normal">
                    Partnering with the Ministry of Innovation and Technology, we reach <strong>the most vulnerable students. Donate today</strong>—one subscription can turn an "offline" learner into a <strong>confident, engaged student</strong>.
                  </p>
                  <p className="text-base font-normal text-white">- Kirubel Akalu, Founder and CEO</p>
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
              <a href="mailto:donation@gdacademy.et" className="text-blue-600 hover:underline">donation@gdacademy.et</a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">📞</div>
              <h3 className={`text-lg font-medium mb-2 ${lato.className}`}>Phone</h3>
              <div className="flex flex-col">
                <a href="tel:7421" className="text-blue-600 hover:text-blue-700 text-xl font-semibold">7421</a>
                <span className="text-xs text-gray-500 mt-1">(local calls from within Ethiopia only)</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center">
                <Send className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className={`text-lg font-medium mb-2 ${lato.className}`}>Telegram</h3>
              <a href="https://t.me/globedockacademy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Message Us</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
}
