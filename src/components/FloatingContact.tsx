'use client';

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const FloatingContact = () => {
    const phoneNumber = '971568978100';

    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-in fade-in zoom-in duration-300"
                aria-label="Contact via WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </a>

            {/* Call Button */}
            <a
                href={`tel:+${phoneNumber}`}
                className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-in fade-in zoom-in duration-300 delay-75"
                aria-label="Call Now"
            >
                <Phone className="w-6 h-6" />
            </a>
        </div>
    );
};
