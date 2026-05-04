import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Heart,
  Pill,
  Stethoscope,
  User,
  Activity,
  FileText,
  Bell,
  ChevronRight,
} from 'lucide-react';

const Dashboard = () => {
  const [upcomingAppointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2024-03-20',
      time: '10:00 AM',
      type: 'Video Consultation',
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Medicine',
      date: '2024-03-22',
      time: '2:30 PM',
      type: 'In-person Visit',
    },
  ]);

  const [recentActivities] = useState([
    {
      id: 1,
      type: 'Prescription',
      title: 'New prescription received',
      date: '2024-03-15',
      icon: Pill,
    },
    {
      id: 2,
      type: 'Lab Result',
      title: 'Blood test results available',
      date: '2024-03-14',
      icon: FileText,
    },
    {
      id: 3,
      type: 'Appointment',
      title: 'Appointment scheduled with Dr. Johnson',
      date: '2024-03-13',
      icon: Calendar,
    },
  ]);

  const quickActions = [
    {
      title: 'Book Appointment',
      description: 'Schedule a new consultation',
      icon: Calendar,
      link: '/services/doctor-consultation',
    },
    {
      title: 'Order Medicines',
      description: 'Refill your prescriptions',
      icon: Pill,
      link: '/services/pharmacy',
    },
    {
      title: 'Health Records',
      description: 'View your medical history',
      icon: FileText,
      link: '/health-records',
    },
    {
      title: 'Lab Tests',
      description: 'Book diagnostic tests',
      icon: Activity,
      link: '/services/lab-tests',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">
                Welcome back! Here's an overview of your healthcare status.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <div className="flex items-center">
                <User className="h-8 w-8 text-gray-400" />
                <span className="ml-2 text-sm font-medium text-gray-700">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Health Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-primary-100 text-primary-600">
                <Heart className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-600">Heart Rate</h2>
                <p className="text-2xl font-semibold text-gray-900">72 BPM</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Activity className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-600">Blood Pressure</h2>
                <p className="text-2xl font-semibold text-gray-900">120/80</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-600">Next Visit</h2>
                <p className="text-2xl font-semibold text-gray-900">Mar 20</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <Pill className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-600">Active Meds</h2>
                <p className="text-2xl font-semibold text-gray-900">3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-4">
                  {quickActions.map((action) => (
                    <Link
                      key={action.title}
                      to={action.link}
                      className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="p-2 rounded-full bg-primary-100 text-primary-600">
                        <action.icon className="h-5 w-5" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-500">{action.description}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center p-4 rounded-lg border border-gray-200"
                    >
                      <div className="p-2 rounded-full bg-primary-100 text-primary-600">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{appointment.doctor}</h3>
                        <p className="text-sm text-gray-500">{appointment.specialty}</p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{appointment.date} at {appointment.time}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium text-primary-600 bg-primary-100 rounded-full">
                        {appointment.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow mt-8">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="p-2 rounded-full bg-gray-100 text-gray-600">
                        <activity.icon className="h-5 w-5" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                        <p className="text-sm text-gray-500">{activity.date}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 