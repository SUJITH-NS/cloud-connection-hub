
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, CloudLightning } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <CloudLightning size={28} className="text-blue-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">CUG</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/about" className="font-medium hover:text-blue-500 transition-colors">About Us</Link>
          <Link to="/team" className="font-medium hover:text-blue-500 transition-colors">Our Team</Link>
          <Link to="/events" className="font-medium hover:text-blue-500 transition-colors">Events</Link>
          <Link to="/contact" className="font-medium hover:text-blue-500 transition-colors">Contact</Link>
          <Button asChild size="sm" className="bg-gradient-to-r from-blue-500 to-purple-500">
            <Link to="/events">Register Now</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          <Link to="/" className="font-medium py-2 hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/about" className="font-medium py-2 hover:text-blue-500 transition-colors">About Us</Link>
          <Link to="/team" className="font-medium py-2 hover:text-blue-500 transition-colors">Our Team</Link>
          <Link to="/events" className="font-medium py-2 hover:text-blue-500 transition-colors">Events</Link>
          <Link to="/contact" className="font-medium py-2 hover:text-blue-500 transition-colors">Contact</Link>
          <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 w-full">
            <Link to="/events">Register Now</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
