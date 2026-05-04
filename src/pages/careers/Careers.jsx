import { Briefcase, Users, Award, Heart, Search, MapPin, Clock, DollarSign } from 'lucide-react';
import { useState } from 'react';

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and mental health support.',
    },
    {
      icon: DollarSign,
      title: 'Financial Security',
      description: 'Competitive salary, 401(k) matching, and performance bonuses.',
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible schedules, paid time off, and remote work options.',
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Training programs, career development, and continuing education support.',
    },
  ];

  const openPositions = [
    {
      title: 'Senior Software Engineer',
      department: 'Technology',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Join our technology team to build innovative healthcare solutions.',
    },
    {
      title: 'Registered Nurse',
      department: 'Clinical',
      location: 'Boston, MA',
      type: 'Full-time',
      description: 'Provide exceptional patient care in our state-of-the-art facility.',
    },
    {
      title: 'Healthcare Data Analyst',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      description: 'Transform healthcare data into actionable insights.',
    },
    {
      title: 'Patient Care Coordinator',
      department: 'Operations',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Ensure smooth patient experiences and coordinate care.',
    },
  ];

  const values = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve the best outcomes for our patients and team.',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We care deeply about our patients and each other.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Be part of a team that's transforming healthcare through innovation and compassion.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search jobs..."
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

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join MedSync?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're building the future of healthcare, and we need passionate individuals to join us on this journey.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <benefit.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{position.location}</span>
                  <span className="mx-2">•</span>
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>{position.department}</span>
                </div>
                <p className="text-gray-600 mb-6">{position.description}</p>
                <button className="text-primary-600 font-medium hover:text-primary-700">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <value.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our team and help us transform healthcare for the better.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors duration-200">
            View All Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers; 