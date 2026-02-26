import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '@/mockData';

const Footer = () => {
  return (
    <footer className="bg-[#1e1919] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Vrinaa Occasions</h3>
            <p className="text-[#bbb5ae] text-sm leading-relaxed">
              Transforming moments into timeless memories through exquisite event decoration in Kolkata.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bbb5ae] hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[#bbb5ae] hover:text-white transition-colors duration-300 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#bbb5ae] hover:text-white transition-colors duration-300 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-[#bbb5ae] hover:text-white transition-colors duration-300 text-sm"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-[#bbb5ae] hover:text-white transition-colors duration-300 text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#bbb5ae] hover:text-white transition-colors duration-300 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-[#bbb5ae] text-sm">Birthday Parties</li>
              <li className="text-[#bbb5ae] text-sm">Anniversary Celebrations</li>
              <li className="text-[#bbb5ae] text-sm">Wedding Decorations</li>
              <li className="text-[#bbb5ae] text-sm">Office Parties</li>
              <li className="text-[#bbb5ae] text-sm">Engagement Ceremonies</li>
              <li className="text-[#bbb5ae] text-sm">Baby Showers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#bbb5ae] flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-[#bbb5ae] hover:text-white transition-colors duration-300 text-sm"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#bbb5ae] flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-[#bbb5ae] hover:text-white transition-colors duration-300 text-sm break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#bbb5ae] flex-shrink-0 mt-0.5" />
                <span className="text-[#bbb5ae] text-sm">{contactInfo.location}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#bbb5ae] flex-shrink-0 mt-0.5" />
                <span className="text-[#bbb5ae] text-sm">{contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#736c64]/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[#bbb5ae] text-sm">
            © {new Date().getFullYear()} Vrinaa Occasions. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <Link
              to="/terms"
              className="text-[#bbb5ae] hover:text-white transition-colors duration-300 text-sm"
            >
              Terms & Conditions
            </Link>
            <p className="text-[#bbb5ae] text-sm">
              Managed by: <span className="text-white font-semibold">YTStack</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
