import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock, Calendar, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    addressOrPostcode: '',
    service: initialService || 'Domestic Home Cleaning',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ShineCraft Cleaning!\n\nI'd like to book a clean in Leeds:\n- Name: ${formData.name || 'Not specified'}\n- Phone: ${formData.phone || 'Not specified'}\n- Location: ${formData.addressOrPostcode || 'Leeds'}\n- Service: ${formData.service}\n- Preferred Date: ${formData.preferredDate || 'Flexible'}\n- Details: ${formData.notes || 'None'}\n\nPlease confirm availability and fixed quote.`
    );
    window.open(`https://wa.me/447475352330?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#19A974] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for a Spotless Space?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#20252B] tracking-tight mt-2 font-display">
            Book Your Clean or Request a Free Quote
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Contact ShineCraft Cleaning today. Call directly, send a WhatsApp message, or complete our quick request form below for prompt confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Action Hub */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Phone Call Card */}
            <a
              href="tel:+447475352330"
              className="group block p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#19A974] hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#19A974] flex items-center justify-center shrink-0 group-hover:bg-[#19A974] group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Direct Telephone
                  </span>
                  <div className="text-xl font-bold text-[#20252B] mt-0.5 font-display group-hover:text-[#19A974] transition-colors">
                    07475 352330
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Tap to speak directly with our Leeds team. Mon–Sat 08:00 – 18:00.
                  </p>
                </div>
              </div>
            </a>

            {/* Primary WhatsApp Card */}
            <a
              href="https://wa.me/447475352330?text=Hi%20ShineCraft%20Cleaning%2C%20I%20would%20like%20to%20book%20a%20clean%20or%20get%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-[#E8F7F1]/60 rounded-2xl border border-emerald-200/80 shadow-sm hover:border-[#19A974] hover:bg-emerald-50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#19A974] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                    Instant Messaging
                  </span>
                  <div className="text-xl font-bold text-[#20252B] mt-0.5 font-display">
                    WhatsApp Message
                  </div>
                  <p className="text-xs text-slate-700 mt-1">
                    Send photos of your property, request fast quotes, or book in minutes.
                  </p>
                </div>
              </div>
            </a>

            {/* Address Info Card */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#19A974]" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Our Location
                  </span>
                  <div className="text-sm font-bold text-[#20252B] mt-0.5">
                    56 Nowell Place, Leeds, LS9 6HT
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Dispatched daily throughout East Leeds, City Centre, and North/West Leeds.
                  </p>
                </div>
              </div>
            </div>

            {/* Operational Commitment Box */}
            <div className="p-4 bg-slate-100/80 rounded-xl border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-slate-800">
                <Clock className="w-3.5 h-3.5 text-[#19A974]" />
                <span>Fast Response Commitment</span>
              </div>
              <p>
                Phone calls and WhatsApp messages are typically acknowledged within 15–30 minutes during business hours.
              </p>
            </div>

          </div>

          {/* Right Column: Booking / Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-8">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-lg font-bold text-[#20252B] font-display">
                      Book a Clean or Request a Quote
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill out this quick form and we'll confirm your price and slot.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 07123 456789"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900 font-medium"
                      >
                        <option value="Domestic Home Cleaning">Domestic Home Cleaning (Regular)</option>
                        <option value="End of Tenancy Cleaning">End of Tenancy Cleaning (Deposit Standard)</option>
                        <option value="Deep Clean & Spring Refresh">Deep Clean & Spring Refresh</option>
                        <option value="Office & Commercial Cleaning">Office & Commercial Cleaning</option>
                        <option value="Carpet & Upholstery Care">Carpet & Upholstery Care</option>
                        <option value="Oven Deep Clean Add-On">Oven Deep Clean Add-On</option>
                        <option value="After-Builders Clean">After-Builders Clean</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Leeds Address or Postcode
                      </label>
                      <input
                        type="text"
                        value={formData.addressOrPostcode}
                        onChange={(e) => setFormData({ ...formData, addressOrPostcode: e.target.value })}
                        placeholder="e.g. LS9 6HT or Chapel Allerton"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Date / Time Window
                    </label>
                    <input
                      type="text"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      placeholder="e.g. This Thursday morning, or Next Monday"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Property Details or Specific Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. 2 bed flat, need oven and inside fridge cleaned, keys can be collected..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-5 bg-[#19A974] hover:bg-[#14875c] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md shadow-[#19A974]/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Booking Request</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#19A974]" />
                      <span>Send to WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    No upfront charges. All quotes are free and verified against your requirements.
                  </p>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#E8F7F1] text-[#19A974] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#20252B] font-display">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    We have received your request for <strong>{formData.service}</strong>. Our Leeds office will contact you shortly at <strong>{formData.phone}</strong> to confirm your slot and details.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="px-5 py-2.5 bg-[#19A974] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Fast-Track via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 text-xs text-slate-600 hover:text-slate-900 font-medium"
                    >
                      Edit Booking Details
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
