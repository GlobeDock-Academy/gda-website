import React from 'react';
import Image from 'next/image';

const ImpactSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Your Donation, Their Future</h2>
            <p className="text-lg text-slate-600 mb-6">
              In many parts of the world, quality education is a luxury. Millions of bright, motivated students lack the resources to achieve their dreams. Your contribution, no matter the size, can change that. By donating to GlobeDock, you are not just giving money; you are providing a lifeline to a better future.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span><strong>Access to Knowledge:</strong> Your donation provides students with access to a world-class online learning platform, filled with resources that are otherwise out of reach.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span><strong>Empowerment Through Education:</strong> Education is the most powerful tool for breaking the cycle of poverty. Your support empowers students to build a brighter future for themselves and their communities.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span><strong>A Global Community:</strong> Join a community of donors who are passionate about making a difference. Together, we can create a world where every student has the opportunity to succeed.</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image 
              src="/images/impact-placeholder.png" // Placeholder image
              alt="Impact of Donation" 
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
