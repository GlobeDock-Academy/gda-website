import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | GlobeDock Academy',
  description: 'Learn about how GlobeDock Academy handles your personal information and protects your privacy.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <p className="text-gray-600 mb-6">
          Last updated: September 8, 2024
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-700">
              We collect information that you provide directly to us, such as when you create an account, 
              subscribe to our services, or contact us for support. This may include your name, email address, 
              phone number, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, send you related information, and respond to your comments 
              and questions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="text-gray-700">
              We do not share your personal information with third parties except as described in this 
              Privacy Policy. We may share information with service providers who perform services on our behalf.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Security</h2>
            <p className="text-gray-700">
              We take reasonable measures to help protect your personal information from loss, theft, 
              misuse, and unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
            <p className="text-gray-700">
              You may update, correct, or delete information about you at any time by logging into your 
              online account or by emailing us at privacy@globedockacademy.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at 
              <a href="mailto:privacy@globedockacademy.com" className="text-blue-600 hover:underline">
                privacy@globedockacademy.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
