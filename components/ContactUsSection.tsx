import React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';
import Container from '@/components/Container';

// A simple SVG for the 'talk' accent, trying to mimic the two small dashes/sparkles
const TalkAccent = () => (
  <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-1 right-0 transform translate-x-1/2 -translate-y-1/2">
    <path d="M2 2L5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 2L10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-slate-700" />,
    title: 'Email Us',
    lines: [<span key="email" className="text-[24px] font-semibold">info@gdacademy.et</span>, <a key="mail-link" href="mailto:info@gdacademy.et" className="text-purple-600 hover:text-purple-700 underline text-[24px] font-semibold">Mail Us &rarr;</a>],
  },
  {
    icon: <Phone className="w-6 h-6 text-slate-700" />,
    title: 'Get In Touch',
    lines: [
      <div key="phone1" className="flex flex-col">
        <a href="tel:+2517421" className="text-purple-600 hover:text-purple-700 text-[24px] font-semibold">7421</a>
        <span className="text-xs text-slate-500 mt-1">(local calls from within Ethiopia only)</span>
      </div>,
    ],
  },
];

export default function ContactUsSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white overflow-hidden mb-8 sm:mb-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with decorative background */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-full">
            {/* Dotted background - using a pseudo-element for simplicity */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 182, 193, 0.3) 1px, transparent 0)',
                backgroundSize: '20px 20px',
              }}
            />
            {/* Taller image container */}
            <div className="absolute inset-x-4 sm:inset-x-8 -top-12 -bottom-12 sm:-top-16 sm:-bottom-16 lg:left-12 lg:right-0 bg-pink-100/50 rounded-3xl z-10 overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/images/Contactusimg.png"
                  alt="GlobeDock Team"
                  fill
                  className="object-cover w-full h-full"
                  style={{ objectPosition: 'center' }}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="relative z-10">
            <div className="mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 leading-tight">
                Contact Us
              </h2>
              <p className="text-lg text-slate-600">
                Need more clarification? Connect with our Learning Advisors.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1.5">{item.title}</h3>
                    {item.lines.map((line, i) => (
                      <div key={i} className="text-sm text-slate-600 leading-relaxed">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
