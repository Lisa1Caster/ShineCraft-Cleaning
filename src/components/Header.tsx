import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Calendar, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top micro-bar with Leeds location and hours */}
      <div className="bg-[#20252B] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#19A974]" />
            <span>56 Nowell Place, Leeds LS9 6HT</span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="hidden sm:inline text-slate-400">Serving Leeds & Surrounding Areas</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden md:inline">Mon–Sat: 08:00 – 18:00</span>
            <a
              href="tel:+447475352330"
              className="hover:text-white flex items-center gap-1 font-medium text-slate-200 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#19A974]" />
              <span>07475 352330</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className={`bg-white/95 backdrop-blur-md transition-shadow duration-200 ${isScrolled ? 'shadow-md border-b border-slate-200/80' : 'border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#19A974] flex items-center justify-center text-white shadow-sm shadow-[#19A974]/30 group-hover:bg-[#14875c] transition-colors">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-[#20252B] font-display">ShineCraft</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#19A974] bg-[#E8F7F1] px-1.5 py-0.5 rounded">Leeds</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-none mt-0.5">Professional Cleaning Services</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#services" className="hover:text-[#19A974] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#19A974] transition-colors">About Us</a>
            <a href="#standards" className="hover:text-[#19A974] transition-colors">Quality Standard</a>
            <a href="#service-area" className="hover:text-[#19A974] transition-colors">Leeds Coverage</a>
            <a href="#faq" className="hover:text-[#19A974] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#19A974] transition-colors">Contact</a>
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/447475352330?text=Hi%20ShineCraft%20Cleaning%2C%20I%20would%20like%20to%20inquire%20about%20a%20cleaning%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-emerald-50 hover:text-[#19A974] border border-slate-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#19A974] hover:bg-[#14875c] shadow-sm shadow-[#19A974]/20 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#19A974] hover:bg-[#14875c]"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#19A974] rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              <a
                href="tel:+447475352330"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-50 text-[#20252B] text-xs font-medium border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#19A974]" />
                <span>Call 07475 352330</span>
              </a>
              <a
                href="https://wa.me/447475352330?text=Hi%20ShineCraft%20Cleaning%2C%20I%20would%20like%20to%20inquire%20about%20a%20cleaning%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#19A974]" />
                <span>WhatsApp</span>
              </a>
            </div>
            <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded hover:bg-slate-50 hover:text-[#19A974]"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded hover:bg-slate-50 hover:text-[#19A974]"
              >
                About Us
              </a>
              <a
                href="#standards"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded hover:bg-slate-50 hover:text-[#19A974]"
              >
                Quality Standard
              </a>
              <a
                href="#service-area"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded hover:bg-slate-50 hover:text-[#19A974]"
              >
                Leeds Coverage
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded hover:bg-slate-50 hover:text-[#19A974]"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded hover:bg-slate-50 hover:text-[#19A974]"
              >
                Contact & Directions
              </a>
            </nav>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#19A974] hover:bg-[#14875c] text-white text-sm font-semibold text-center shadow-sm"
              >
                Book a Clean
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
