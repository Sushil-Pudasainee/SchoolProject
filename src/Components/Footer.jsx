import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  // Function to map link names to paths
  const getLinkPath = (linkName) => {
    switch (linkName) {
      case 'Home':
        return '/';
      case 'About Us':
        return '/about';
      case 'Academics':
        return '/academic';
      case 'Gallery':
        return '/gallery';
      case 'Contact':
        return '/contact';
      default:
        return '/';
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-purple-600 to-indigo-800 text-white overflow-hidden rounded-t-3xl">
      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* School Info Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <img 
                  src="/logo.png" 
                  alt="School Logo" 
                  className="w-27 h-auto object-contain bg-transparent mix-blend-multiply" 
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm leading-6 backdrop-blur-sm bg-white/10 rounded-lg p-4">
              Shree Ghusel Secondary School is committed to providing quality education and shaping the future of our students since 1960(B.S-2017).
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-sm sm:text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Academics', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={getLinkPath(item)} 
                    className="group text-sm hover:text-purple-300 transition-colors duration-300 flex items-center"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-sm sm:text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Ghusel, Lalitpur, Nepal</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 mr-2" />
                <span className="text-sm sm:text-base">+977 9851096784</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 mr-2" />
                <span className="text-sm sm:text-base">ghuselsecondary2017@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Follow Us Section */}
          <div>
            <h3 className="text-sm sm:text-lg font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </Link>
              <Link
                to="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </Link>
              <Link
                to="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm">&copy; 2025 Shree Ghusel Secondary School. All Rights Reserved</p>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs sm:text-sm hover:text-purple-300 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs sm:text-sm hover:text-purple-300 transition-colors duration-300">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
