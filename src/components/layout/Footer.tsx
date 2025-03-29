
import React from 'react';
import { Link } from 'react-router-dom';
import { CloudLightning, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <CloudLightning size={24} className="text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">CUG</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting cloud enthusiasts and professionals to share knowledge, experience, and build a community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Events Archive</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Community Forum</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Resources</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
                <span className="text-gray-400">123 Cloud Avenue, Tech City, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <a href="mailto:info@cugclub.com" className="text-gray-400 hover:text-white transition-colors">info@cugclub.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors">+1 (123) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Cloud User Group (CUG). All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
