import React from 'react';
import { Sparkles, MapPin, Phone, MessageCircle, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#20252B] text-slate-400 text-xs pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#19A974] flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight font-display">ShineCraft Cleaning</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Professional residential and commercial cleaning company based at 56 Nowell Place, Leeds LS9 6HT. Fully insured, systematic room-by-room checklists, and dependable service.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Public Liability Insurance</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Domestic Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">End of Tenancy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Deep Clean & Spring Refresh</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial & Office</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Carpet Care</a></li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Leeds Locations</h4>
            <ul className="space-y-2 text-slate-400">
              <li><span>LS9 (Harehills / East End Park)</span></li>
              <li><span>LS1 & LS2 (City Centre)</span></li>
              <li><span>LS6 (Headingley / Hyde Park)</span></li>
              <li><span>LS7 & LS8 (Chapel Allerton)</span></li>
              <li><span>LS14 & LS15 (Cross Gates)</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#19A974] shrink-0 mt-0.5" />
                <span>56 Nowell Place, Leeds, England, LS9 6HT</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#19A974] shrink-0" />
                <a href="tel:+447475352330" className="text-white hover:text-[#19A974] transition-colors font-medium">
                  07475 352330
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#19A974] shrink-0" />
                <a
                  href="https://wa.me/447475352330?text=Hi%20ShineCraft%20Cleaning%2C%20I%20would%20like%20to%20book%20a%20clean"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#19A974] transition-colors font-medium flex items-center gap-1"
                >
                  <span>WhatsApp Message</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Mon–Sat: 08:00 – 18:00</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} ShineCraft Cleaning. All rights reserved. 56 Nowell Place, Leeds LS9 6HT.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=56+Nowell+Place,+Leeds,+England,+LS9+6HT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Google Maps Location
            </a>
            <span aria-hidden="true">·</span>
            <span>Leeds, West Yorkshire, UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
