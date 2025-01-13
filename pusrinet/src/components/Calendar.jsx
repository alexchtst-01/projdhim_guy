import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

const Calendar = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  return (
    <div className="bg-white rounded-lg shadow-md p-2 sm:p-3 md:p-4 mb-3 sm:mb-4 md:mb-6 w-full max-w-sm mx-auto">
      <div className="bg-gray-100 rounded-md p-1.5 sm:p-2 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center space-x-1 sm:space-x-2">
        <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        <h2 className="font-semibold text-sm sm:text-base md:text-lg">
          {`${day} ${month} ${year}`}
        </h2>
      </div>
      <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
        <li className="flex items-center space-x-1.5 sm:space-x-2">
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 bg-gray-300 rounded-full flex-shrink-0"></span>
          <p className="text-sm sm:text-base">Makan Malam</p>
        </li>
        <li className="flex items-center space-x-1.5 sm:space-x-2">
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 bg-gray-300 rounded-full flex-shrink-0"></span>
          <p className="text-sm sm:text-base">Makan Pagi</p>
        </li>
        <li className="flex items-center space-x-1.5 sm:space-x-2">
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 bg-gray-300 rounded-full flex-shrink-0"></span>
          <p className="text-sm sm:text-base">Makan Siang</p>
        </li>
      </ul>
    </div>
  );
};

export default Calendar;