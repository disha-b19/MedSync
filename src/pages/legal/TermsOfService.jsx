import { Scale, AlertTriangle, FileText, Shield, User, Server } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      icon: Scale,
      title: 'Agreement to Terms',
      content: [
        'By accessing or using our services, you agree to be bound by these Terms of Service',
        'You must be at least 18 years old to use our services',
        'You must provide accurate and complete information',
        'You are responsible for maintaining the security of your account',
        'You agree to comply with all applicable laws and regulations',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Prohibited Activities',
      content: [
        'Unauthorized access to our systems',
        'Sharing of account credentials',
        'Posting of false or misleading information',
        'Attempting to interfere with service operation',
        'Using the service for illegal purposes',
      ],
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      content: [
        'All content and materials are owned by 1PS Healthcare',
        'You may not copy or reproduce our content',
        'Trademarks and logos are protected',
        'User content remains your property',
        'We may use your feedback to improve services',
      ],
    },
    {
      icon: Shield,
      title: 'Disclaimer of Warranties',
      content: [
        'Services are provided "as is" without warranties',
        'We do not guarantee uninterrupted service',
        'Medical information is not a substitute for professional advice',
        'We are not responsible for third-party content',
        'You use our services at your own risk',
      ],
    },
    {
      icon: User,
      title: 'User Responsibilities',
      content: [
        'Maintain accurate account information',
        'Protect your account credentials',
        'Report security concerns immediately',
        'Comply with our policies and guidelines',
        'Use the service responsibly and ethically',
      ],
    },
    {
      icon: Server,
      title: 'Service Modifications',
      content: [
        'We may modify or discontinue services',
        'Changes will be communicated to users',
        'Continued use implies acceptance of changes',
        'We may update these terms periodically',
        'Users can terminate service if terms change',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
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
              Welcome to 1PS Healthcare. These Terms of Service govern your use of our website and services.
              By accessing or using our services, you agree to be bound by these terms. If you disagree with
              any part of the terms, you may not access our services.
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

      {/* Additional Terms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Terms</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Governing Law</h3>
                <p className="text-gray-600">
                  These terms shall be governed by and construed in accordance with the laws of the state
                  of [State], without regard to its conflict of law provisions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Severability</h3>
                <p className="text-gray-600">
                  If any provision of these terms is found to be unenforceable or invalid, that provision
                  will be limited or eliminated to the minimum extent necessary so that the terms will
                  otherwise remain in full force and effect.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Entire Agreement</h3>
                <p className="text-gray-600">
                  These terms constitute the entire agreement between you and 1PS Healthcare regarding our
                  services and supersede all prior agreements and understandings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="space-y-4">
              <p className="text-primary-600 font-medium">legal@1pshealthcare.com</p>
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

export default TermsOfService; 