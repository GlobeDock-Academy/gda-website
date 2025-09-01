"use client";

import { useState, useEffect, useCallback } from 'react';
import { Play, GraduationCap, Download, Send, Mail } from 'lucide-react';
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
    setNumStudents(0);
  };

  const handleContinue = () => {
    if (numStudents > 0) {
      router.push(`/donate/form?students=${numStudents}&amount=${yearlyFee}&total=${totalSponsorAmount}`);
    }
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
              <button 
                onClick={() => handleStudentSelect(1)}
                className={`inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 rounded-lg border font-bold ${lato.className} ${
                  numStudents === 1 && !showOtherInput 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'border-input bg-background hover:text-accent-foreground hover:bg-gray-50'
                }`}
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  padding: '16px 8px',
                  height: '62px',
                  width: '100%'
                }}
              >
                1
              </button>
              <button 
                onClick={() => handleStudentSelect(3)}
                className={`inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 rounded-lg border font-bold ${lato.className} ${
                  numStudents === 3 && !showOtherInput 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'border-input bg-background hover:text-accent-foreground hover:bg-gray-50'
                }`}
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  padding: '16px 8px',
                  height: '62px',
                  width: '100%'
                }}
              >
                3
              </button>
            </div>
            
            {/* Second row: 5 and 10 */}
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => handleStudentSelect(5)}
                className={`inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 rounded-lg border font-bold ${lato.className} ${
                  numStudents === 5 && !showOtherInput 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'border-input bg-background hover:text-accent-foreground hover:bg-gray-50'
                }`}
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  padding: '16px 8px',
                  height: '62px',
                  width: '100%'
                }}
              >
                5
              </button>
              <button 
                onClick={() => handleStudentSelect(10)}
                className={`inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 rounded-lg border font-bold ${lato.className} ${
                  numStudents === 10 && !showOtherInput 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'border-input bg-background hover:text-accent-foreground hover:bg-gray-50'
                }`}
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  padding: '16px 8px',
                  height: '62px',
                  width: '100%'
                }}
              >
                10
              </button>
            </div>
            
            {/* Other input field */}
            {showOtherInput ? (
              <input
                type="number"
                min="1"
                step="1"
                value={numStudents || ''}
                onChange={(e) => setNumStudents(parseInt(e.target.value) || 0)}
                placeholder="Other"
                className="w-full rounded-lg border border-gray-300 font-bold focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  padding: '16px 8px',
                  height: '62px',
                  textAlign: 'center' as const
                }}
                autoFocus
              />
            ) : (
              <button 
                onClick={handleOtherClick}
                className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full rounded-lg border border-gray-300 bg-white font-bold text-gray-700 hover:bg-gray-50 ${lato.className}"
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  padding: '16px 8px',
                  height: '62px'
                }}
              >
                Other
              </button>
            )}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md text-center">
          <p className="text-sm text-gray-600 mb-1">Total Donation</p>
          <p className="text-2xl font-semibold text-gray-900">{formatCurrency(totalSponsorAmount)}</p>
        </div>
      </div>

      <button 
        onClick={handleContinue}
        disabled={numStudents <= 0}
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-black text-white hover:bg-gray-800 mt-6 ${lato.className}`}
        style={{
          minHeight: '75px',
          borderRadius: '12px',
          padding: '12px 0',
          fontSize: '20px',
          fontWeight: 700
        }}
      >
        Donate
      </button>
    </div>
  );
};

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

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
                <h1 className={`mb-6 text-white ${lato.className}`} style={{fontSize: '40px', fontWeight: 700}}>Help us do more</h1>
                <div className="max-w-xl mx-auto lg:mx-0">
                  <p className="text-lg leading-relaxed mb-4 text-white font-normal">
                    From the very first tap, your support unlocks a full year of learning: expert-taught video lessons, skill-based quizzes, and daily progress tools — all aligned with Ethiopia's curriculum.
                  </p>
                  <p className="text-lg leading-relaxed mb-4 text-white font-normal">
                    Through our partnership with the Ministry of Innovation and Technology, we identify students who need it most. Whether they're in remote areas or recovering from interrupted schooling, your support means they don't fall behind.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-white font-normal">
                    Donate today and help an 'offline' learner become an engaged, confident student — one subscription, one future at a time.
                  </p>
                  <p className="text-base font-normal text-white">- Kirubel Akalu, Founder and CEO of GlobeDock Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div className="bg-white py-16">
        {/* Contact Section */}
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className={`text-2xl font-semibold mb-4 text-gray-900 ${lato.className}`} style={{fontSize: '28px', fontWeight: 700}}>Still have questions?</h2>
          <p className="text-lg text-gray-700 mb-8">We're here to help. Reach out to our team anytime.</p>
          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Email */}
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Email</h3>
              <a href="mailto:donation@gdacademy.et" className="text-blue-600 hover:text-blue-800">
                donation@gdacademy.et
              </a>
            </div>
            
            {/* Phone */}
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Phone</h3>
              <div className="text-gray-600">
                <a href="tel:7421" className="font-medium text-base hover:text-blue-600">7421</a>
                <div className="text-xs text-gray-500 mt-1">(local calls from within Ethiopia only)</div>
              </div>
            </div>
            
            {/* Telegram */}
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Send className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Telegram</h3>
              <a href="https://t.me/globedock_academy_support_bot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                Click to Chat
              </a>
            </div>
          </div>
        </div>
        
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
}
