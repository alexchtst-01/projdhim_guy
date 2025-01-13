import React, { useState, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';
import logo from '../assets/emblempusri.png';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-70 backdrop-blur-md' : 'bg-white shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            {/* Logo with image, using imported logo */}
            <img
              src={logo}
              alt="Pusri Logo"
              className="h-8 w-auto"
            />
            <h1 className="text-xl font-bold">
              PT. Pupuk Sriwidjaja
            </h1>
          </div>
          
          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search bar */}
            <div className="flex relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-md py-1 px-2"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2" size={16} />
            </div>
            <Bell size={16} />
            <User size={16} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;