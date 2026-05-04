import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  Menu,
  X,
  Home,
  Calendar,
  Users,
  Settings,
  LogOut,
  Package,
  FileText,
  DollarSign,
  ShoppingCart,
  Microscope,
  Pill,
  ChevronRight,
  Bell,
  Search,
} from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getRoleBasedMenuItems = () => {
    const commonItems = [
      { icon: Home, label: 'Dashboard', path: '/dashboard' },
      { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    ];

    const roleSpecificItems = {
      patient: [
        { icon: Calendar, label: 'Appointments', path: '/dashboard/appointments' },
        { icon: FileText, label: 'Medical Records', path: '/dashboard/records' },
        { icon: ShoppingCart, label: 'Orders', path: '/dashboard/orders' },
      ],
      doctor: [
        { icon: Calendar, label: 'Appointments', path: '/dashboard/appointments' },
        { icon: Users, label: 'Patients', path: '/dashboard/patients' },
        { icon: FileText, label: 'Medical Records', path: '/dashboard/records' },
        { icon: DollarSign, label: 'Earnings', path: '/dashboard/earnings' },
      ],
      pharmacy: [
        { icon: Package, label: 'Inventory', path: '/dashboard/inventory' },
        { icon: ShoppingCart, label: 'Orders', path: '/dashboard/orders' },
        { icon: DollarSign, label: 'Revenue', path: '/dashboard/revenue' },
      ],
      diagnostic: [
        { icon: Microscope, label: 'Tests', path: '/dashboard/tests' },
        { icon: Calendar, label: 'Appointments', path: '/dashboard/appointments' },
        { icon: FileText, label: 'Reports', path: '/dashboard/reports' },
        { icon: DollarSign, label: 'Revenue', path: '/dashboard/revenue' },
      ],
      admin: [
        { icon: Users, label: 'Users', path: '/dashboard/users' },
        { icon: FileText, label: 'Reports', path: '/dashboard/reports' },
        { icon: Settings, label: 'System Settings', path: '/dashboard/system-settings' },
      ],
    };

    return [...commonItems, ...(roleSpecificItems[user.role] || [])];
  };

  const menuItems = getRoleBasedMenuItems();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link to="/dashboard" className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-200">
            MedSync
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-gray-500 hover:text-gray-700 transition-colors duration-200"
            aria-label="Close sidebar"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all duration-200 ${location.pathname === item.path
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 transition-colors duration-200 ${location.pathname === item.path
                    ? 'text-primary-600'
                    : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                />
                {item.label}
                {location.pathname === item.path && (
                  <ChevronRight className="ml-auto h-4 w-4 text-primary-600" />
                )}
              </Link>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 w-full border-t p-4">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
          >
            <LogOut className="mr-3 h-5 w-5 text-gray-400" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:pl-64">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label="Open sidebar"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="relative ml-4 md:ml-6">
                <div className="flex items-center">
                  <Search className="h-5 w-5 text-gray-400 absolute left-3" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-3 focus:outline-none"
                >
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-medium">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-700">{user.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                  </div>
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                    <Link
                      to="/dashboard/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/dashboard/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 