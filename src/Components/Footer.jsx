import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <div className='flex flex-col h-screen bottom-0'>
      <footer className="bg-gray-800 text-white mt-auto">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Grid Layout for Footer Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">About OpenRoads</h3>
              <p className="text-gray-300">
                Pioneering the future of transportation with innovative solutions
                and sustainable practices since 2020.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-400" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="https://portfoilo-eight-blue.vercel.app/projects" className="text-gray-300 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/utsav-banerjee-844a3a303/" className="text-gray-300 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  West Bengal, Kolkata
                </p>
                <p className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  6290413706
                </p>
                <p className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2" />
                  utv4484@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div>© 2024 OpenRoads. All rights reserved.</div>
              <div className="mt-2 md:mt-0">
                <a href="#" className="hover:text-white mr-4">Terms of Service</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;