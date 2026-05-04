import { useState } from 'react';
import { Search, Filter, Clock, MapPin, Calendar, TestTube } from 'lucide-react';
import LabTestBooking from '../../components/booking/LabTestBooking';

const LabTests = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTest, setSelectedTest] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const categories = [
    { id: 'all', name: 'All Tests' },
    { id: 'blood', name: 'Blood Tests' },
    { id: 'urine', name: 'Urine Tests' },
    { id: 'imaging', name: 'Imaging' },
    { id: 'cardiac', name: 'Cardiac Tests' },
    { id: 'diabetes', name: 'Diabetes Tests' },
  ];

  const popularTests = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      category: 'blood',
      price: 499,
      duration: '24 hours',
      description: 'Measures different components of blood including red blood cells, white blood cells, and platelets.',
      includes: [
        'Hemoglobin',
        'White Blood Cell Count',
        'Platelet Count',
        'Red Blood Cell Count',
      ],
    },
    {
      id: 2,
      name: 'Lipid Profile',
      category: 'blood',
      price: 699,
      duration: '24 hours',
      description: 'Measures cholesterol and triglyceride levels to assess heart disease risk.',
      includes: [
        'Total Cholesterol',
        'HDL Cholesterol',
        'LDL Cholesterol',
        'Triglycerides',
      ],
    },
    {
      id: 3,
      name: 'Thyroid Function Test',
      category: 'blood',
      price: 899,
      duration: '24 hours',
      description: 'Evaluates thyroid gland function and hormone levels.',
      includes: [
        'TSH',
        'T3',
        'T4',
        'Free T4',
      ],
    },
    {
      id: 4,
      name: 'Urine Analysis',
      category: 'urine',
      price: 299,
      duration: '24 hours',
      description: 'Examines urine for various disorders and diseases.',
      includes: [
        'Physical Examination',
        'Chemical Examination',
        'Microscopic Examination',
      ],
    },
    {
      id: 5,
      name: 'X-Ray Chest',
      category: 'imaging',
      price: 799,
      duration: '2 hours',
      description: 'Imaging test to examine the chest area for various conditions.',
      includes: [
        'PA View',
        'Lateral View',
        'Digital Report',
      ],
    },
    {
      id: 6,
      name: 'ECG',
      category: 'cardiac',
      price: 599,
      duration: '30 minutes',
      description: 'Records electrical activity of the heart.',
      includes: [
        '12-Lead ECG',
        'Digital Report',
        'Expert Analysis',
      ],
    },
  ];

  const filteredTests = popularTests.filter((test) => {
    const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || test.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBookTest = (test) => {
    setSelectedTest(test);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Lab Tests</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Book diagnostic tests from the comfort of your home. Get accurate results with our
              state-of-the-art laboratories and expert technicians.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for tests..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
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
      </div>

      {/* Tests Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <div key={test.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{test.name}</h3>
                  <p className="text-gray-600 mt-1">{test.description}</p>
                </div>
                <TestTube className="h-8 w-8 text-primary-600" />
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Results in {test.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Home Collection Available</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Includes:</h4>
                <ul className="space-y-1">
                  {test.includes.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">₹{test.price}</span>
                <button
                  onClick={() => handleBookTest(test)}
                  className="btn btn-primary"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple and convenient process to get your tests done
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Your Test</h3>
              <p className="text-gray-600">
                Choose from our wide range of tests and select your preferred time slot
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sample Collection</h3>
              <p className="text-gray-600">
                Our trained phlebotomist will collect the sample from your home
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <TestTube className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Results</h3>
              <p className="text-gray-600">
                Receive your test results online within the promised time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedTest && (
        <LabTestBooking
          test={selectedTest}
          onClose={() => {
            setShowBookingModal(false);
            setSelectedTest(null);
          }}
        />
      )}
    </div>
  );
};

export default LabTests; 