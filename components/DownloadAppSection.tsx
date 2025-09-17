import Image from 'next/image';
import Container from '@/components/Container';

const DownloadAppSection = () => {
  return (
    <section className="bg-white py-6 md:py-8">
      <Container>
        <div className="bg-primary text-white rounded-[2rem] overflow-hidden py-8 md:py-12 px-4 md:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Get the learning app
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-md">
            Download lessons and learn anytime, anywhere with GlobeDock Academy App
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://apps.apple.com/us/app/globedock-academy/id6459021458" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                <Image 
                  src="/images/app-store.svg" 
                  alt="Download on the App Store" 
                  width={160}
                  height={50}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.globedock.academy.android&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
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
          <div className="flex justify-center md:justify-start mt-8 md:mt-0 origin-center">
            <Image
              src="/images/GDA%20APP.png" 
              alt="Learning App Phone Mockup" 
              width={500}
              height={816}
              priority
              className="h-auto w-full max-w-[240px] sm:max-w-[300px] md:max-w-none md:scale-125 lg:scale-150"
              style={{ objectFit: 'contain' }}
            />
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DownloadAppSection;
