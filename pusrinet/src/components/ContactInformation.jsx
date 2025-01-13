import React from 'react';

const ContactInformation = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mt-8 w-full">
            <h2 className="font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3 text-sm text-gray-600">
                <p>Jl. Mayor Zen, Sei Selayur</p>
                <p>Phone: (123) 456-7890</p>
                <p className="break-words">Email: contact@example.com</p>
            </div>
        </div>
    );
};

export default ContactInformation;