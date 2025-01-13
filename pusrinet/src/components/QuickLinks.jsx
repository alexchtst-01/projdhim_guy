import React, { useState } from 'react';
import { Home, Database, Monitor, MessageSquare, Book, Menu, X, ChevronDown } from 'lucide-react';

const QuickLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { icon: <Home size={20} />, label: 'Direktorat', dropdown: ['Pilihan 1', 'Sublink 2'] },
    { icon: <Database size={20} />, label: 'Non Direktorat', dropdown: ['Sublink 1', 'Sublink 2'] },
    { icon: <Monitor size={20} />, label: 'Info IT', dropdown: ['Sublink 1', 'Sublink 2'] },
    { icon: <MessageSquare size={20} />, label: 'Forum' },
    { icon: <Book size={20} />, label: 'Visi Misi' }
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Quick Links</h2>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              {/* Menu Item */}
              <div 
                className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                onClick={() => item.dropdown && toggleDropdown(index)}
              >
                <div className="flex items-center space-x-3 text-gray-700">
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </div>
                {item.dropdown && (
                  <ChevronDown 
                    size={16} 
                    className={`ml-2 transition-transform duration-200 ${
                      activeDropdown === index ? 'transform rotate-180' : ''
                    }`}
                  />
                )}
              </div>

              {/* Dropdown Menu */}
              {item.dropdown && activeDropdown === index && (
                <ul className="md:absolute md:left-0 md:top-full bg-white md:shadow-lg rounded-md mt-1 w-full md:w-48">
                  {item.dropdown.map((subitem, subIndex) => (
                    <li key={subIndex}>
                      <a 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subitem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default QuickLinks;