import React from 'react';
import Navigation from './components/Navigation';
import Calendar from './components/Calendar';
import ContactInformation from './components/ContactInformation';
import Dashboard from './components/Dashboard';
import QuickLinks from './components/Quicklinks';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-4 gap-6">
          {/* kolom calendar dan contact information */}
          <div className="col-span-1">
            <Calendar />
            <ContactInformation />
          </div>
          {/* kolom punya quicklinks sama dashboard */}
          <div className="col-span-3">
            <QuickLinks />
            <div className="mt-8">
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
