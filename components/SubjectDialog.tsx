"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface SubjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  subject: string;
  grade: string;
}

export default function SubjectDialog({ isOpen, onClose, subject, grade }: SubjectDialogProps) {
  const [activeTab, setActiveTab] = useState<'Lectures' | 'Quiz' | 'Notes'>('Lectures');

  if (!isOpen) return null;

  // Placeholder data for demonstration
  const chapterCount = 19;
  const unitTitle = "Unit 1 - Physical Characteristics of the Earth";
  
  // Placeholder lectures data
  const lectures = [
    { title: "Introduction", duration: "11:49", completed: false },
    { title: "1.1 Origin of the Earth and the Solar System", duration: "24:13", completed: true },
    { title: "1.2.1. External Components of the Earth", duration: "19:40", completed: true },
    { title: "1.2.2. Internal Structure and Sources Information about the Internal Parts of the Earth", duration: "13:55", completed: true },
    { title: "1.3 & 1.4 Materials Forming the Crust of the Earth & The Distribution and Economic Value of the Different Rock Types in Ethiopia", duration: "25:43", completed: true }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header with close button */}
        <div className="relative p-6 bg-white">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close dialog"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <h2 className="text-3xl font-bold text-gray-800">{subject}</h2>
          <p className="text-gray-600 mt-1">{unitTitle}</p>
        </div>
        
        {/* Tab navigation */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          <button 
            className={`py-3 px-8 text-center ${activeTab === 'Lectures' ? 'bg-orange-200 text-orange-600 font-medium border-b-2 border-orange-500' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('Lectures')}
          >
            Lectures
          </button>
          <button 
            className={`py-3 px-8 text-center ${activeTab === 'Quiz' ? 'bg-orange-200 text-orange-600 font-medium border-b-2 border-orange-500' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('Quiz')}
          >
            Quiz
          </button>
          <button 
            className={`py-3 px-8 text-center ${activeTab === 'Notes' ? 'bg-orange-200 text-orange-600 font-medium border-b-2 border-orange-500' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('Notes')}
          >
            Notes
          </button>
        </div>
        
        {/* Tab content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'Lectures' && (
            <div className="space-y-6">
              {lectures.map((lecture, index) => (
                <div key={index} className="flex items-start border-b border-gray-100 pb-6 last:border-b-0 mb-6">
                  {/* Lecture thumbnail with play button and duration */}
                  <div className="relative w-32 h-24 bg-gray-200 rounded-md mr-4 flex-shrink-0 overflow-hidden">
                    {/* Use an image of a person teaching if available */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                      {lecture.duration}
                    </div>
                  </div>
                  
                  {/* Lecture details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{lecture.title}</h3>
                    <p className="text-gray-600 text-sm">{lecture.title}</p>
                    
                    {lecture.completed && (
                      <div className="flex items-center mt-2 text-green-600 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        Completed
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'Quiz' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Quiz Content</h3>
              <p className="text-gray-600 mt-2">Quiz content will be available here once integrated with the backend.</p>
            </div>
          )}
          
          {activeTab === 'Notes' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Notes Content</h3>
              <p className="text-gray-600 mt-2">Notes content will be available here once integrated with the backend.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
