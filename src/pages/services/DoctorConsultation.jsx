import { useState } from 'react';
import { Calendar, Clock, Video, Phone, MessageSquare, CheckCircle2, Search, Star } from 'lucide-react';
import AppointmentBooking from '../../components/booking/AppointmentBooking';

const DoctorConsultation = () => {
  const [selectedType, setSelectedType] = useState('video');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const consultationTypes = [
    {
      id: 'video',
      icon: Video,
      title: 'Video Consultation',
      description: 'Connect with doctors through secure video calls',
      features: [
        'HD quality video calls',
        'Secure and private',
        'Screen sharing for reports',
        'Recording available',
      ],
    },
    {
      id: 'audio',
      icon: Phone,
      title: 'Audio Consultation',
      description: 'Speak with doctors over a phone call',
      features: [
        'Clear audio quality',
        'No video required',
        'Quick and convenient',
        'Available 24/7',
      ],
    },
    {
      id: 'chat',
      icon: MessageSquare,
      title: 'Chat Consultation',
      description: 'Text-based consultation with doctors',
      features: [
        'Real-time messaging',
        'Share images and reports',
        'Detailed responses',
        'Chat history saved',
      ],
    },
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'General Physician',
      experience: '15 years',
      rating: 4.8,
      reviews: 245,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
      available: true,
      fee: 500,
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Cardiologist',
      experience: '12 years',
      rating: 4.9,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
      available: true,
      fee: 800,
    },
    {
      id: 3,
      name: 'Dr. Emily Brown',
      specialty: 'Dermatologist',
      experience: '10 years',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
      available: true,
      fee: 600,
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Pediatrician',
      experience: '18 years',
      rating: 4.9,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
      available: true,
      fee: 550,
    },
  ];

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Doctor Consultation</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Connect with experienced healthcare professionals from the comfort of your home.
              Choose from video, audio, or chat consultations based on your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Consultation Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consultationTypes.map((type) => (
            <div
              key={type.id}
              className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-200 ${
                selectedType === type.id
                  ? 'ring-2 ring-primary-600 transform scale-105'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              <div className="flex items-center mb-4">
                <type.icon className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">{type.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Doctors List Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Doctors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Book an appointment with our experienced healthcare professionals
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{doctor.name}</h3>
                      <p className="text-gray-600">{doctor.specialty}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {doctor.rating} ({doctor.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">
                      <span className="font-medium">Experience:</span> {doctor.experience}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Consultation Fee:</span> ₹{doctor.fee}
                    </p>
                  </div>
                  <button
                    onClick={() => handleBookAppointment(doctor)}
                    className="w-full btn btn-primary"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Consultation?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience healthcare that's convenient, accessible, and professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">
                Consult with qualified and experienced healthcare professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Quick Access</h3>
              <p className="text-gray-600">
                Get medical advice within minutes, no matter where you are.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your health information is protected with end-to-end encryption.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedDoctor && (
        <AppointmentBooking
          doctor={selectedDoctor}
          onClose={() => {
            setShowBookingModal(false);
            setSelectedDoctor(null);
          }}
        />
      )}
    </div>
  );
};

export default DoctorConsultation; 