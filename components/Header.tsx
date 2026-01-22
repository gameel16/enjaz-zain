
import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'عن المكتب', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-blue-900" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-none ${isScrolled ? 'text-blue-900' : 'text-blue-900 md:text-white'}`}>إنجاز زين</span>
              <span className={`text-[10px] font-medium ${isScrolled ? 'text-slate-500' : 'text-slate-500 md:text-blue-100'}`}>للخدمات الكهربائية</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-yellow-500 ${isScrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:0563637670"
              className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-500 transition-all transform hover:scale-105"
            >
              <Phone size={18} />
              اتصل الآن
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-blue-900' : 'text-blue-900'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-slate-100 absolute top-full left-0 w-full animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-lg font-medium text-slate-700 border-b border-slate-50 hover:bg-slate-50"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="tel:0563637670"
                className="w-full bg-blue-900 text-white flex items-center justify-center gap-3 py-4 rounded-xl font-bold"
              >
                <Phone size={20} />
                0563637670
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
