import { Microscope, Pill, Stethoscope, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from '../../assets/hero-image.png';

const HomePage = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Doctor Consultation",
      description:
        "Connect with experienced doctors for online and offline consultations.",
      path: "/services/consultation",
    },
    {
      icon: Microscope,
      title: "Lab Tests",
      description:
        "Book diagnostic tests and get samples collected from your home.",
      path: "/services/lab-tests",
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description:
        "Order medicines online and get them delivered to your doorstep.",
      path: "/services/pharmacy",
    },
    {
      icon: UserPlus,
      title: "Health Packages",
      description:
        "Comprehensive health check-up packages at affordable prices.",
      path: "/services/health-packages",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Health, Our Priority
              </h1>
              <p className="text-lg md:text-xl text-primary-100">
                Access quality healthcare services from the comfort of your
                home. Connect with top doctors, book lab tests, and order
                medicines online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="btn bg-white text-primary-600 hover:bg-primary-50"
                >
                  Explore Services
                </Link>
                <Link
                  to="/register"
                  className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Register Now
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src={heroImage}
                alt="Healthcare professionals"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to meet all your
              medical needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied patients who trust 1PS Healthcare for
              their medical needs
            </p>
            <Link to="/register" className="btn btn-primary text-lg px-8 py-3">
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
