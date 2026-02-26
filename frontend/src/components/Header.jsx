import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone, Mail } from 'lucide-react';
import { contactInfo } from '@/mockData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="Vrinaa Occasions Logo" 
              className="h-20 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-20">
            <div className="flex items-center gap-16">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-semibold transition-all duration-300 relative group px-4 ${
                    isActive(item.path)
                      ? 'text-amber-700'
                      : 'text-gray-700 hover:text-amber-700'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-amber-600 transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Contact Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="p-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-br from-amber-50 to-orange-50 border-t border-amber-200 animate-accordion-down">
          <nav className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 text-lg font-semibold transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-amber-700'
                    : 'text-gray-700 hover:text-amber-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-6 border-t border-amber-200">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-white hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="p-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:scale-110 transition-all duration-300"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
