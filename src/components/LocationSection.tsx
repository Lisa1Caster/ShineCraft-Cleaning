import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, MessageCircle, Check, Search } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [postcodeInput, setPostcodeInput] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = postcodeInput.trim().toUpperCase();
    if (!clean) return;

    if (clean.startsWith('LS') || clean.includes('LEEDS') || clean.startsWith('WF') || clean.startsWith('BD')) {
      setSearchResult(`Yes! We fully cover ${clean} from our central base at 56 Nowell Place with no additional travel fees.`);
    } else {
      setSearchResult(`We primarily operate in Leeds (LS postcodes) and adjacent West Yorkshire areas. Contact us directly at 07475 352330 to check custom scheduling.`);
    }
  };

  const coverageAreas = [
    { code: 'LS9', name: 'East End Park, Harehills, Burmantofts (Home Base)', status: 'Immediate Priority' },
    { code: 'LS1 & LS2', name: 'Leeds City Centre, Financial Quarter, Docklands', status: 'Daily Route' },
    { code: 'LS6', name: 'Headingley, Hyde Park, Meanwood', status: 'Daily Route' },
    { code: 'LS7 & LS8', name: 'Chapel Allerton, Roundhay, Oakwood', status: 'Daily Route' },
    { code: 'LS14 & LS15', name: 'Cross Gates, Seacroft, Whinmoor', status: 'Daily Route' },
    { code: 'LS10 & LS11', name: 'Hunslet, Beeston, Holbeck, South Bank', status: 'Daily Route' },
  ];

  return (
    <section id="service-area" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#19A974] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Local Presence</span>
            <span aria-hidden="true">·</span>
            <span>Leeds LS9 6HT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#20252B] tracking-tight mt-2 font-display">
            Based in Leeds, Servicing All Surrounding Communities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Our operational hub is located at 56 Nowell Place, Leeds, LS9 6HT. From here, our cleaning teams are dispatched throughout Leeds for prompt domestic, commercial, and tenancy callouts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Hours, Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-6">
              
              {/* Full Address */}
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Registered Operational Address
                </span>
                <div className="flex items-start gap-3 mt-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-[#19A974] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#20252B]">ShineCraft Cleaning</h3>
                    <p className="text-sm text-slate-700 leading-snug mt-0.5">
                      56 Nowell Place<br />
                      Leeds, England<br />
                      <span className="font-semibold text-slate-900">LS9 6HT</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="border-t border-slate-200/80 pt-5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  Standard Operating Hours
                </span>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#19A974]" />
                      <span>Monday – Friday:</span>
                    </span>
                    <span className="font-semibold text-slate-900">08:00 – 18:00</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#19A974]" />
                      <span>Saturday:</span>
                    </span>
                    <span className="font-semibold text-slate-900">08:00 – 16:00</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Sunday:</span>
                    </span>
                    <span>By Prior Arrangement</span>
                  </div>
                </div>
              </div>

              {/* Direct Navigation / Action links */}
              <div className="border-t border-slate-200/80 pt-5 space-y-2.5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=56+Nowell+Place,+Leeds,+England,+LS9+6HT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-white hover:bg-slate-100 text-[#20252B] text-xs font-semibold border border-slate-300 flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#19A974]" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="tel:+447475352330"
                    className="py-2 px-3 rounded-lg bg-[#20252B] hover:bg-[#19A974] text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>07475 352330</span>
                  </a>
                  <a
                    href="https://wa.me/447475352330?text=Hi%20ShineCraft%20Cleaning%2C%20do%20you%20cover%20my%20area%20in%20Leeds%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-medium border border-emerald-200 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3 h-3 text-[#19A974]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Leeds Interactive Postcode Checker & Area Table */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Postcode checker tool */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#20252B] font-display mb-1">
                Check Availability for Your Leeds Postcode
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Enter your postcode to verify service availability and typical dispatch windows.
              </p>

              <form onSubmit={handlePostcodeCheck} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={postcodeInput}
                    onChange={(e) => setPostcodeInput(e.target.value)}
                    placeholder="e.g. LS9 6HT, LS1, LS6..."
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900 uppercase font-medium"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#19A974] hover:bg-[#14875c] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Check Area
                </button>
              </form>

              {searchResult && (
                <div className="mt-3 p-3 rounded-lg bg-[#E8F7F1] border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#19A974] shrink-0 mt-0.5" />
                  <span>{searchResult}</span>
                </div>
              )}
            </div>

            {/* Coverage List Table */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/70">
                <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Core Leeds Coverage Zones
                </h4>
              </div>
              <div className="divide-y divide-slate-100">
                {coverageAreas.map((area, idx) => (
                  <div key={idx} className="px-6 py-3.5 flex items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-[#20252B] mr-2 text-slate-900 font-mono">{area.code}</span>
                      <span className="text-slate-600">{area.name}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded shrink-0">
                      {area.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Also covering all other LS postcodes (LS3, LS4, LS5, LS12, LS13, LS16, LS17, LS18, LS28)</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
