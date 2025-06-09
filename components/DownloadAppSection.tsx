import Image from 'next/image';
import Container from '@/components/Container';

const DownloadAppSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get the learning app
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-md">
              Download lessons and learn anytime, anywhere with the Unacademy app
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                <Image 
                  src="/images/app-store.svg" 
                  alt="Download on the App Store" 
                  width={160}
                  height={50}
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                <Image 
                  src="/images/google-play.png" 
                  alt="Get it on Google Play" 
                  width={180} 
                  height={54}
                />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center md:justify-start mt-8 md:mt-0">
            <Image 
              src="/images/phone-mockup.png" 
              alt="Learning App Phone Mockup" 
              width={380}
              height={620}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DownloadAppSection;
