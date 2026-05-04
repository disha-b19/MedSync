import { Search, HelpCircle, Phone, Mail, MessageSquare, BookOpen, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment through our website, mobile app, or by calling our appointment line. Simply select your preferred doctor, choose an available time slot, and confirm your booking.',
    },
    {
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans including Medicare, Medicaid, and private insurance providers. Please contact our billing department to verify your specific insurance coverage.',
    },
    {
      question: 'How do I access my medical records?',
      answer: 'You can access your medical records through our patient portal. Simply log in with your credentials and navigate to the "Medical Records" section. If you need assistance, our support team is available 24/7.',
    },
    {
      question: 'What are your operating hours?',
      answer: 'Our main facility is open Monday through Friday from 8:00 AM to 8:00 PM, and Saturday from 9:00 AM to 5:00 PM. Emergency services are available 24/7.',
    },
    {
      question: 'How do I get a prescription refill?',
      answer: 'You can request prescription refills through our patient portal, by calling our pharmacy directly, or by asking your doctor during your appointment. Please allow 24-48 hours for processing.',
    },
  ];

  const supportOptions = [
    {
      icon: Phone,
      title: 'Call Support',
      description: '24/7 phone support for urgent matters',
      contact: '(555) 123-4567',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get a response within 24 hours',
      contact: 'support@1pshealthcare.com',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 8 AM - 8 PM EST',
    },
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Patient Guides',
      description: 'Comprehensive guides for patients',
      link: '/resources/patient-guides',
    },
    {
      icon: BookOpen,
      title: 'Insurance Information',
      description: 'Details about insurance coverage',
      link: '/resources/insurance',
    },
    {
      icon: BookOpen,
      title: 'Forms & Documents',
      description: 'Downloadable forms and documents',
      link: '/resources/forms',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you?</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Find answers to common questions or get in touch with our support team.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <option.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="text-primary-600 font-medium">{option.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and policies.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive collection of guides, forms, and information.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <resource.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to assist you with any questions or concerns.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter; 