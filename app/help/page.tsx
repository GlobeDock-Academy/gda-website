import { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Help & FAQ | GlobeDock Academy',
  description: 'Find answers to frequently asked questions about GlobeDock Academy services and platform.',
};

export default function HelpPage() {
  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'To create an account, click on the "Sign Up" button in the top-right corner of the homepage. You can sign up using your email address or through your Google or Facebook account.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards, mobile money, and bank transfers. All payments are processed securely through our payment partners.'
    },
    {
      question: 'Can I access courses offline?',
      answer: 'Yes, you can download course materials for offline viewing through our mobile app. Simply tap the download icon next to the content you want to save.'
    },
    {
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page and enter your email address. We\'ll send you a link to reset your password.'
    },
    {
      question: 'What if I need help with a specific course?',
      answer: 'Each course has a discussion forum where you can ask questions. You can also contact the instructor directly through the messaging system on our platform.'
    },
    {
      question: 'Do you offer certificates?',
      answer: 'Yes, we offer certificates of completion for most courses. To earn a certificate, you need to complete all required coursework and pass the final assessment with a minimum passing grade.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'We offer a 14-day money-back guarantee for all courses. If you\'re not satisfied with your purchase, please contact our support team within 14 days of purchase for a full refund.'
    },
    {
      question: 'How can I become an instructor?',
      answer: 'We welcome experienced educators to join our platform. Please visit our "Become an Instructor" page and submit your application along with your credentials and course proposal.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
        <p className="text-xl text-gray-600">Find answers to common questions about GlobeDock Academy</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg text-gray-900 hover:text-blue-600">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Our support team is here to help you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@globedockacademy.com" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Email Us
            </a>
            <a 
              href="tel:+251741" 
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Call Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
