import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+447475352330"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#20252B] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#19A974]" />
          <span className="text-[11px] font-semibold mt-1">Call</span>
        </a>

        <a
          href="https://wa.me/447475352330?text=Hi%20ShineCraft%20Cleaning%2C%20I%20would%20like%20to%20book%20a%20clean"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#19A974]" />
          <span className="text-[11px] font-semibold mt-1">WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#19A974] hover:bg-[#14875c] text-white transition-colors"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span className="text-[11px] font-semibold mt-1">Book Now</span>
        </button>
      </div>
    </div>
  );
};
