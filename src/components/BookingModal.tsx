import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, MessageCircle, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialEstimate?: any;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialEstimate,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    service: initialService || 'Domestic Home Cleaning',
    datePreference: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Hello ShineCraft Cleaning!\nI would like to book a clean in Leeds:\n- Service: ${formData.service}\n- Name: ${formData.name || 'Not provided'}\n- Phone: ${formData.phone || 'Not provided'}\n- Area/Postcode: ${formData.postcode || 'Leeds'}\n- Preferred timing: ${formData.datePreference || 'Flexible'}\n${initialEstimate ? `- Estimator Ref: ${initialEstimate.estimate}` : ''}\n\nPlease confirm booking.`
    );
    window.open(`https://wa.me/447475352330?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#19A974] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ShineCraft Leeds Direct Booking</span>
            </div>
            
            <h3 className="text-xl font-bold text-[#20252B] font-display">
              Book Your Cleaning Service
            </h3>
            <p className="text-xs text-slate-600 mt-1 mb-5">
              56 Nowell Place, Leeds LS9 6HT · Phone: 07475 352330
            </p>

            {initialEstimate && (
              <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-emerald-900 block">Calculator Reference:</span>
                  <span className="text-slate-600">
                    {initialEstimate.bedrooms} Bed, {initialEstimate.bathrooms} Bath
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-emerald-800 tabular-nums">
                    {initialEstimate.estimate}
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. David Smith"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 07475 123456"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Leeds Postcode / Area *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    placeholder="e.g. LS9 6HT, LS6, LS1"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Service Selection
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900 font-medium"
                >
                  <option value="Domestic Home Cleaning">Domestic Home Cleaning</option>
                  <option value="End of Tenancy Cleaning">End of Tenancy Cleaning</option>
                  <option value="Deep Clean & Spring Refresh">Deep Clean & Spring Refresh</option>
                  <option value="Office & Commercial Cleaning">Office & Commercial Cleaning</option>
                  <option value="Carpet & Upholstery Care">Carpet & Upholstery Care</option>
                  <option value="Add-on: Oven Detailing">Add-on: Oven Detailing</option>
                  <option value="Add-on: After-Builders Clean">Add-on: After-Builders Clean</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Date or Day
                </label>
                <input
                  type="text"
                  value={formData.datePreference}
                  onChange={(e) => setFormData({ ...formData, datePreference: e.target.value })}
                  placeholder="e.g. Friday morning or ASAP"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Special Notes / Access
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Key in safe box, parking on driveway..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#19A974] focus:bg-white text-slate-900"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#19A974] hover:bg-[#14875c] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md shadow-[#19A974]/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Booking Request</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold rounded-lg border border-emerald-200 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#19A974]" />
                  <span>Send Request Via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#E8F7F1] text-[#19A974] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#20252B] font-display">
              Booking Request Submitted!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Our Leeds team has recorded your request for <strong>{formData.service}</strong> and will call you at <strong>{formData.phone}</strong> to confirm your slot.
            </p>
            <div className="pt-3 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleWhatsAppInstant}
                className="w-full py-2.5 bg-[#19A974] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notify Leeds Team On WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 text-xs text-slate-500 hover:text-slate-800"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
