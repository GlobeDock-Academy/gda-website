"use client";

import React, { useState,useEffect } from 'react';
import Container from '@/components/Container';
import SubjectDialog from '@/components/SubjectDialog';
import { fetchGrades, Grade } from '@/lib/api';

export default function GradeGridSection() {
 const [grades, setGrades] = useState<Grade[]>([]);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  
  // Initialize all grade sections as expanded by default
  useEffect(() => {
    if (grades.length > 0) {
      const initialExpandedState: Record<string, boolean> = {};
      grades.forEach(grade => {
        initialExpandedState[grade.id] = true;
      });
      setExpandedItems(initialExpandedState);
    }
  }, [grades]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSubject] = useState('');
  const [selectedGrade] = useState('');
  const [loading, setLoading] = useState(true);
  const [prefilled, setPrefilled] = useState(false);

  // Prefill grades from localStorage cache to reduce perceived load time
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      const cached = localStorage.getItem('gda_grades_cache_v1');
      if (cached) {
        const parsed = JSON.parse(cached);
        const TTL = 1000 * 60 * 60 * 6; // 6 hours
        if (Date.now() - parsed.timestamp < TTL && Array.isArray(parsed.result)) {
          setGrades(parsed.result);
          setLoading(false);
          setPrefilled(true);
        }
      }
    } catch (e) {
      console.warn('Failed to read grades cache', e);
    }
  }, []);

  useEffect(() => {
    async function loadGrades() {
      if (!prefilled) setLoading(true);
      try {
        const data = await fetchGrades();
        if (data && data.result) {
          setGrades(data.result);
          try {
            if (typeof window !== 'undefined') {
              localStorage.setItem(
                'gda_grades_cache_v1',
                JSON.stringify({ timestamp: Date.now(), result: data.result })
              );
            }
          } catch {}
        }
      } catch (err) {
        console.error('Failed to fetch grades', err);
      } finally {
        setLoading(false);
      }
    }
    loadGrades();
  }, [prefilled]);

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
    return (
      <section className="bg-white pt-0 pb-8 md:pb-12" id="grade-grid-section">
        <Container>
          <div className="bg-[#f5f5f5] rounded-md overflow-hidden py-8 px-6 md:px-10 lg:px-16">
            <div className="max-w-5xl mx-auto bg-[#f5f5f5] rounded-md overflow-hidden">
              <div className="grid md:grid-cols-2 md:gap-x-12 animate-pulse">
                <div>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="border-b border-gray-300 last:border-b-0">
                      <div className="w-full py-5 px-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gray-300 mr-4" />
                          <div className="h-5 w-24 bg-gray-300 rounded" />
                        </div>
                        <div className="h-5 w-5 bg-gray-300 rounded" />
                      </div>
                      <div className="py-3 px-12">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                          <div className="h-4 w-28 bg-gray-300 rounded" />
                          <div className="h-4 w-24 bg-gray-300 rounded" />
                          <div className="h-4 w-24 bg-gray-300 rounded" />
                          <div className="h-4 w-20 bg-gray-300 rounded" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="border-b border-gray-300 last:border-b-0">
                      <div className="w-full py-5 px-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gray-300 mr-4" />
                          <div className="h-5 w-24 bg-gray-300 rounded" />
                        </div>
                        <div className="h-5 w-5 bg-gray-300 rounded" />
                      </div>
                      <div className="py-3 px-12">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                          <div className="h-4 w-28 bg-gray-300 rounded" />
                          <div className="h-4 w-24 bg-gray-300 rounded" />
                          <div className="h-4 w-24 bg-gray-300 rounded" />
                          <div className="h-4 w-20 bg-gray-300 rounded" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // Ensure specific alignment: Row1: 7 & 8, Row2: 9 & 10, Row3: 11 & 12
  const desiredOrder = ['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
  const sortedGrades = [...grades].sort((a, b) => desiredOrder.indexOf(a.name) - desiredOrder.indexOf(b.name));
  const leftColumnGrades = sortedGrades.filter((_, idx) => idx % 2 === 0);  // 7, 9, 11
  const rightColumnGrades = sortedGrades.filter((_, idx) => idx % 2 === 1); // 8, 10, 12

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
            <span
              className="text-[20px] font-bold"
              style={{
                fontFamily: 'Lato, Noto Sans, Helvetica, Corbel, sans-serif',
                color: '#21242C',
                lineHeight: '20px',
                fontStyle: 'normal',
              }}
            >
              {item.name}
            </span>
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
          <div className="py-3 pl-20 pr-4 bg-[#f5f5f5]">
            <ul
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[16px] font-normal"
              style={{
                fontFamily: 'Lato, "Noto Sans", Helvetica, Corbel, sans-serif',
                color: 'rgb(33, 36, 44)',
              }}
            >
              {subjects.map((subject, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-blue-600 hover:underline underline-offset-2 transition-colors"
                  onClick={() => handleSubjectClick(item.id)}
                  style={{
                    lineHeight: '20px',
                    fontWeight: 400,
                    padding: '2px 0',
                  }}
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
                <div className="bg-[#f5f5f5] rounded-md overflow-hidden py-8 px-6 md:px-10 lg:px-16">
          <div className="max-w-5xl mx-auto bg-[#f5f5f5] rounded-md overflow-hidden">
            <div className="grid md:grid-cols-2 md:gap-x-12">
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
