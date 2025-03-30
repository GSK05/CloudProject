import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Lightbulb,
  Shield,
  Bell,
  Thermometer,
  Camera,
  Lock
} from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    title: 'Smart Lighting',
    description: 'Control your home lighting from anywhere with automated schedules and scenes.'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: 'Security System',
    description: 'Keep your home safe with 24/7 monitoring and instant alerts.'
  },
  {
    icon: <Bell className="h-8 w-8 text-blue-600" />,
    title: 'Smart Notifications',
    description: 'Get real-time alerts about your home status and security events.'
  },
  {
    icon: <Thermometer className="h-8 w-8 text-blue-600" />,
    title: 'Climate Control',
    description: 'Optimize your home temperature for comfort and energy savings.'
  },
  {
    icon: <Camera className="h-8 w-8 text-blue-600" />,
    title: 'Video Surveillance',
    description: 'Monitor your home with HD cameras and motion detection.'
  },
  {
    icon: <Lock className="h-8 w-8 text-blue-600" />,
    title: 'Smart Locks',
    description: 'Secure your home with keyless entry and remote access control.'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Control Your Smart Home
            <br />
            Anytime, Anywhere
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Transform your home into an intelligent living space with our comprehensive smart home solution.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Control Your Smart Home
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides comprehensive solutions for managing all your smart home devices from a single dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of homeowners who have already made their homes smarter.
          </p>
          <Link
            to="/signup"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;