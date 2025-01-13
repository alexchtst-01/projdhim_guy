import React, { useEffect } from 'react';

const NotificationMessageBox = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose, duration]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-green-600 text-white px-6 py-3 rounded shadow-lg">
        <p className="text-center font-medium">{message}</p>
      </div>
    </div>
  );
};

export default NotificationMessageBox;
