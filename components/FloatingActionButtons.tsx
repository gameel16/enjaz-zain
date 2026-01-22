
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActionButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
      <a
        href="https://wa.me/966563637670"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      <a
        href="tel:0563637670"
        className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        aria-label="Call Enjaz Zain"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default FloatingActionButtons;
