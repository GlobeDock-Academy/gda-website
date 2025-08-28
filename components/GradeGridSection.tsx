"use client";

import React, { useState,useEffect } from 'react';
import Container from '@/components/Container';
import SubjectDialog from '@/components/SubjectDialog';
import { fetchGrades, Grade } from '@/lib/api';

export default function GradeGridSection() {
 const [grades, setGrades] = useState<Grade[]>([]);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSubject] = useState('');
  const [selectedGrade] = useState('');
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function loadGrades() {
      setLoading(true);
      try {
        const data = await fetchGrades();
        if (data && data.result) setGrades(data.result);
      } catch (err) {
        console.error('Failed to fetch grades', err);
      } finally {
        setLoading(false);
      }
    }
    loadGrades();
  }, []);

  const handleSubjectClick = (grade: string) => {
    window.location.href = `https://staging-stud.gdacademy.et/?guest=true&grade=${grade}`;
  };

  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) {
    return <div className="text-center py-8">Loading grades...</div>;
  }

  const midpoint = Math.ceil(grades.length / 2);
  const leftColumnGrades = grades.slice(0, midpoint);
  const rightColumnGrades = grades.slice(midpoint);

  const gradeSubjects: Record<string, string[]> = {
    'Grade 7': ['Social Studies', 'Citizenship', 'Math', 'General Science'],
    'Grade 8': ['Math', 'General Science', 'Citizenship', 'Social Studies'],
    'Grade 9': ['Chemistry', 'Geography', 'Math', 'Biology', 'Physics', 'Citizenship', 'Economics'],
    'Grade 10': ['Geography', 'Physics', 'Math', 'Economics', 'Biology', 'Citizenship', 'Chemistry'],
    'Grade 11': ['Chemistry', 'Geography', 'Economics', 'Math', 'Biology', 'Physics'],
    'Grade 12': ['Geography', 'Physics', 'Math', 'Biology', 'Economics', 'Chemistry']
  };

  const renderGradeItem = (item: Grade) => {
    const isExpanded = expandedItems[item.id] || false;
    const subjects = gradeSubjects[item.name] || [];
    
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
              style={{ backgroundColor: '#FFB900' }}
            >
              {item.grade_level}
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
                  onClick={() => handleSubjectClick(item.id)}
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
        <div className="bg-gray-100 rounded-[2rem] overflow-hidden py-8 px-6 md:px-10 lg:px-16">
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
