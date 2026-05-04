import { useState } from 'react';
import { CheckCircle2, Star, Clock, Users, Heart, Brain, Shield } from 'lucide-react';

const HealthPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Packages' },
    { id: 'basic', name: 'Basic Health' },
    { id: 'comprehensive', name: 'Comprehensive' },
    { id: 'specialized', name: 'Specialized' },
    { id: 'senior', name: 'Senior Citizen' },
    { id: 'corporate', name: 'Corporate' },
  ];

  const healthPackages = [
    {
      id: 1,
      name: 'Basic Health Checkup',
      category: 'basic',
      price: 999,
      duration: '2-3 hours',
      tests: 40,
      description: 'Essential health screening for adults',
      features: [
        'Complete Blood Count',
        'Blood Sugar',
        'Lipid Profile',
        'Liver Function',
        'Kidney Function',
        'Urine Analysis',
      ],
      popular: true,
    },
    {
      id: 2,
      name: 'Comprehensive Health Checkup',
      category: 'comprehensive',
      price: 2499,
      duration: '4-5 hours',
      tests: 80,
      description: 'Detailed health assessment for complete wellness',
      features: [
        'All Basic Tests',
        'Thyroid Profile',
        'Vitamin D',
        'B12 Level',
        'ECG',
        'Chest X-Ray',
        'Ultrasound Abdomen',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Cardiac Health Package',
      category: 'specialized',
      price: 3999,
      duration: '3-4 hours',
      tests: 60,
      description: 'Comprehensive heart health assessment',
      features: [
        'ECG',
        'Echo',
        'Stress Test',
        'Lipid Profile',
        'Cardiac Markers',
        'Consultation',
      ],
      popular: false,
    },
    {
      id: 4,
      name: 'Senior Citizen Package',
      category: 'senior',
      price: 3499,
      duration: '4-5 hours',
      tests: 70,
      description: 'Specialized health checkup for elderly',
      features: [
        'All Basic Tests',
        'Bone Density',
        'Arthritis Screening',
        'Memory Assessment',
        'Eye Checkup',
        'Dental Checkup',
      ],
      popular: false,
    },
    {
      id: 5,
      name: 'Corporate Wellness',
      category: 'corporate',
      price: 1999,
      duration: '2-3 hours',
      tests: 50,
      description: 'Health screening for working professionals',
      features: [
        'Basic Health Tests',
        'Stress Assessment',
        'BMI Analysis',
        'Nutrition Consultation',
        'Fitness Assessment',
      ],
      popular: false,
    },
    {
      id: 6,
      name: 'Women\'s Health Package',
      category: 'specialized',
      price: 2999,
      duration: '3-4 hours',
      tests: 65,
      description: 'Comprehensive health checkup for women',
      features: [
        'Basic Health Tests',
        'Hormonal Profile',
        'Breast Screening',
        'Bone Density',
        'Gynecological Checkup',
      ],
      popular: true,
    },
  ];

  const filteredPackages = healthPackages.filter(
    (pkg) => selectedCategory === 'all' || pkg.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Health Packages</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive health checkup packages designed to keep you healthy and prevent
              diseases. Choose the package that best suits your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden ${
                pkg.popular ? 'ring-2 ring-primary-600' : ''
              }`}
            >
              {pkg.popular && (
                <div className="bg-primary-600 text-white text-center py-2">
                  <Star className="h-5 w-5 inline-block mr-2" />
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                    <p className="text-gray-600 mt-1">{pkg.description}</p>
                  </div>
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Duration: {pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{pkg.tests} Tests Included</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">₹{pkg.price}</span>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Regular Health Checkups?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Early detection and prevention are key to maintaining good health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Early Detection</h3>
              <p className="text-gray-600">
                Identify health issues before they become serious problems
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Preventive Care</h3>
              <p className="text-gray-600">
                Take proactive steps to maintain your health and wellness
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
              <p className="text-gray-600">
                Regular checkups help you stay informed about your health status
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPackages; 