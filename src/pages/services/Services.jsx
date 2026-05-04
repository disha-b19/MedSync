import { Link } from 'react-router-dom';
import { Video, TestTube, Package, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'consultation',
      icon: Video,
      title: 'Doctor Consultation',
      description: 'Connect with experienced doctors through video, audio, or chat consultations.',
      features: [
        '24/7 Availability',
        'Multiple Specialties',
        'Secure Communication',
        'Digital Prescriptions',
      ],
      path: '/services/consultation',
    },
    {
      id: 'lab-tests',
      icon: TestTube,
      title: 'Lab Tests',
      description: 'Book diagnostic tests online and get samples collected from your home.',
      features: [
        'Home Sample Collection',
        'Accurate Results',
        'Digital Reports',
        'Expert Analysis',
      ],
      path: '/services/lab-tests',
    },
    {
      id: 'pharmacy',
      icon: Package,
      title: 'Online Pharmacy',
      description: 'Order medicines online and get them delivered to your doorstep.',
      features: [
        'Genuine Medicines',
        'Fast Delivery',
        'Prescription Management',
        'Medicine Reminders',
      ],
      path: '/services/pharmacy',
    },
    {
      id: 'health-packages',
      icon: Heart,
      title: 'Health Packages',
      description: 'Comprehensive health checkup packages for individuals and families.',
      features: [
        'Preventive Health Checks',
        'Customized Packages',
        'Expert Consultation',
        'Detailed Reports',
      ],
      path: '/services/health-packages',
    },
  ];

  const benefits = [
    {
      title: 'Convenient Healthcare',
      description: 'Access healthcare services from the comfort of your home.',
    },
    {
      title: 'Expert Doctors',
      description: 'Consult with qualified and experienced healthcare professionals.',
    },
    {
      title: 'Affordable Prices',
      description: 'Quality healthcare services at competitive prices.',
    },
    {
      title: 'Digital Records',
      description: 'Maintain your health records digitally for easy access.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Healthcare Services</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed to make your life easier. Access quality
              healthcare services anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mt-1">{service.description}</p>
                </div>
                <service.icon className="h-8 w-8 text-primary-600" />
              </div>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-primary-600 font-medium">
                Learn More
                <ArrowRight className="h-5 w-5 ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the best healthcare experience for our patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Choose the service that best suits your needs and take the first step towards better health.
          </p>
          <Link to="/contact" className="btn btn-white">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services; 