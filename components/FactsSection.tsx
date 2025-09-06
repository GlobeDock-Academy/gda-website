import Image from 'next/image';
import Link from 'next/link';

export default function FactsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image side with decorative elements */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative w-[500px] h-[400px]">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Yellow background element */}
                <div className="absolute bottom-20 left-16 w-[320px] h-[120px] bg-yellow-400 rounded-md z-0"></div>
                
                {/* Green wavy lines */}
                <svg className="absolute top-12 right-12 w-[320px] h-[100px] z-0" viewBox="0 0 320 100">
                  <path d="M0,50 Q50,30 100,50 T200,50 T300,50 T400,50" fill="none" stroke="#4CAF50" strokeWidth="2" />
                  <path d="M0,65 Q50,45 100,65 T200,65 T300,65 T400,65" fill="none" stroke="#4CAF50" strokeWidth="2" />
                  <path d="M0,80 Q50,60 100,80 T200,80 T300,80 T400,80" fill="none" stroke="#4CAF50" strokeWidth="2" />
                  <path d="M0,95 Q50,75 100,95 T200,95 T300,95 T400,95" fill="none" stroke="#4CAF50" strokeWidth="2" />
                </svg>
                
                {/* Orange X */}
                <div className="absolute top-16 left-16 z-0">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <line x1="0" y1="0" x2="40" y2="40" stroke="#FF5722" strokeWidth="3" />
                    <line x1="40" y1="0" x2="0" y2="40" stroke="#FF5722" strokeWidth="3" />
                  </svg>
                </div>
                
                {/* Orange lines decoration */}
                <div className="absolute bottom-16 left-8 z-0">
                  <svg width="50" height="40" viewBox="0 0 50 40">
                    <line x1="0" y1="10" x2="40" y2="10" stroke="#FF5722" strokeWidth="4" />
                    <line x1="0" y1="25" x2="40" y2="25" stroke="#FF5722" strokeWidth="4" />
                  </svg>
                </div>
              </div>
              
              {/* Child with tablet image */}
              <div className="absolute z-10 w-full h-full flex justify-center items-center">
                <Image
                  src="/images/child-learning.png" 
                  alt="Child learning with a tablet"
                  width={400}
                  height={400}
                  className="relative z-10 object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Text content side */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-gray-600 uppercase tracking-wider font-medium text-sm">TOGETHER WE CAN MAKE A DIFFERENCE</p>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Every Ethiopian child deserves the chance to learn.
            </h2>
            
            <p className="text-gray-600 text-lg">
              Right now, 90% of ten-year-olds cannot read a simple sentence, and more than 7 million school-aged children are out of school. 
              We&apos;re bringing offline classrooms packed with curriculum-aligned lessons to every kebele – but we can&apos;t do it alone. 
              Join us and turn learning poverty into lifelong opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
