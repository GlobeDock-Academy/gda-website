"use client";

import React, { useState } from 'react';
import Container from '@/components/Container';
import SubjectDialog from '@/components/SubjectDialog';

interface GradeItem {
  id: string;
  name: string;
  icon: string;
  iconBgColor: string;
}

export default function GradeGridSection() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');

  const handleSubjectClick = (grade: string, subject: string) => {
    // Convert grade name to number (e.g., 'Grade 7' -> '7')
    const gradeNumber = grade.replace('Grade ', '');
    // Encode the subject for URL
    const encodedSubject = encodeURIComponent(subject);
    // Redirect to the staging URL
    window.location.href = `https://staging-stud.gdacademy.et/?guest=true&grade=${gradeNumber}&subject=${encodedSubject}`;
  };

  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const leftColumnGrades: GradeItem[] = [
    {
      id: 'grade7',
      name: 'Grade 7',
      icon: '7',
      iconBgColor: '#FFB900'
    },
    {
      id: 'grade9',
      name: 'Grade 9',
      icon: '9',
      iconBgColor: '#FFB900'
    },
    {
      id: 'grade11',
      name: 'Grade 11',
      icon: '11',
      iconBgColor: '#FFB900'
    }
  ];

  const rightColumnGrades: GradeItem[] = [
    {
      id: 'grade8',
      name: 'Grade 8',
      icon: '8',
      iconBgColor: '#FFB900'
    },
    {
      id: 'grade10',
      name: 'Grade 10',
      icon: '10',
      iconBgColor: '#FFB900'
    },
    {
      id: 'grade12',
      name: 'Grade 12',
      icon: '12',
      iconBgColor: '#FFB900'
    }
  ];

  // Define subjects for each grade
  const gradeSubjects: Record<string, string[]> = {
    'grade7': [
      'Social Studies',
      'Citizenship',
      'Math',
      'General Science'
    ],
    'grade8': [
      'Math',
      'General Science',
      'Citizenship',
      'Social Studies'
    ],
    'grade9': [
      'Chemistry',
      'Geography',
      'Math',
      'Biology',
      'Physics',
      'Citizenship',
      'Economics'
    ],
    'grade10': [
      'Geography',
      'Physics',
      'Math',
      'Economics',
      'Biology',
      'Citizenship',
      'Chemistry'
    ],
    'grade11': [
      'Chemistry',
      'Geography',
      'Economics',
      'Math',
      'Biology',
      'Physics'
    ],
    'grade12': [
      'Geography',
      'Physics',
      'Math',
      'Biology',
      'Economics',
      'Chemistry'
    ]
  };

  const renderGradeItem = (item: GradeItem) => {
    const isExpanded = expandedItems[item.id] || false;
    const subjects = gradeSubjects[item.id] || [];
    
    return (
      <div key={item.id} className="border-b border-gray-300 last:border-b-0">
        <button
          onClick={() => toggleItem(item.id)}
          className="w-full py-5 px-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-150 text-left"
          aria-expanded={isExpanded}
        >
          <div className="flex items-center">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white font-bold text-lg"
              style={{ backgroundColor: item.iconBgColor }}
            >
              {item.icon}
            </div>
            <span className="text-lg font-medium text-gray-900">{item.name}</span>
          </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={`transition-transform duration-200 text-gray-500 ${isExpanded ? 'transform rotate-180' : ''}`}
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
        
        {isExpanded && (
          <div className="py-4 px-16 bg-white">
            <ul className="space-y-2">
              {subjects.map((subject, index) => (
                <li 
                  key={index} 
                  className="text-gray-700 cursor-pointer hover:text-primary hover:underline"
                  onClick={() => handleSubjectClick(item.name, subject)}
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="bg-white pt-0 pb-8 md:pb-12" id="grade-grid-section">
      <Container>
                <div className="bg-white rounded-[2rem] overflow-hidden py-8 px-6 md:px-10 lg:px-16">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 md:divide-x divide-gray-200">
              <div>
                {leftColumnGrades.map(renderGradeItem)}
              </div>
              <div>
                {rightColumnGrades.map(renderGradeItem)}
              </div>
            </div>
          </div>
        </div>
        
        {/* Subject Dialog - Keeping it in case needed for other functionality */}
        <SubjectDialog 
          isOpen={dialogOpen}
          onClose={() => setDialogOpen(false)}
          subject={selectedSubject}
          grade={selectedGrade}
        />
      </Container>
    </section>
  );
}
