import { Shield, Lock, Eye, FileText, User, Server } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number)',
        'Medical history and health information',
        'Insurance information',
        'Payment details',
        'Device and usage information',
      ],
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        'To provide healthcare services',
        'To process payments and insurance claims',
        'To communicate with you about your care',
        'To improve our services',
        'To comply with legal obligations',
      ],
    },
    {
      icon: Eye,
      title: 'Information Sharing',
      content: [
        'With healthcare providers involved in your care',
        'With insurance companies for billing purposes',
        'With service providers who assist in our operations',
        'When required by law',
        'With your explicit consent',
      ],
    },
    {
      icon: FileText,
      title: 'Your Rights',
      content: [
        'Access your personal information',
        'Correct inaccurate information',
        'Request deletion of your information',
        'Opt-out of marketing communications',
        'File a complaint about our data practices',
      ],
    },
    {
      icon: User,
      title: 'Data Security',
      content: [
        'Encryption of sensitive information',
        'Regular security assessments',
        'Access controls and authentication',
        'Secure data storage',
        'Employee training on data protection',
      ],
    },
    {
      icon: Server,
      title: 'Data Retention',
      content: [
        'Medical records as required by law',
        'Financial records for accounting purposes',
        'Communication records for service quality',
        'Analytics data for service improvement',
        'User preferences until changed or deleted',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              At 1PS Healthcare, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our services. Please read this
              privacy policy carefully. If you do not agree with the terms of this privacy policy, please
              do not access the site.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-6">
                  <section.icon className="h-8 w-8 text-primary-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-4">
              <p className="text-primary-600 font-medium">privacy@1pshealthcare.com</p>
              <p className="text-gray-600">1PS Healthcare</p>
              <p className="text-gray-600">123 Healthcare Street</p>
              <p className="text-gray-600">Medical City, MC 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 