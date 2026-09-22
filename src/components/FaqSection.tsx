import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need to be at home while the cleaners work?',
      answer:
        'No, you do not need to be present. Many of our Leeds clients arrange key collection or provide secure lockbox codes. We are fully insured and our cleaners are thoroughly vetted for complete peace of mind.',
    },
    {
      question: 'Do you provide your own cleaning supplies and equipment?',
      answer:
        'Yes, our team arrives fully equipped with professional vacuums, microfiber systems, and eco-safe sanitising products. If you prefer us to use specific products for specialist surfaces or sensitive family members, simply let us know.',
    },
    {
      question: 'What is your End of Tenancy deposit return guarantee?',
      answer:
        'Our checkout clean follows standardized inventory inspection checklists used by Leeds letting agents. In the unlikely event that your landlord or inventory clerk notes an issue within 24 hours of the clean, we will re-clean the specific area completely free of charge.',
    },
    {
      question: 'How do payments work? Are there hidden fees?',
      answer:
        'We offer transparent, fixed pricing agreed upon before we start. You can pay conveniently via direct bank transfer or card upon invoice completion. There are never hidden agency fees, travel surcharges, or surprise add-ons.',
    },
    {
      question: 'How fast can you book a clean in Leeds?',
      answer:
        'Because our base is centrally situated at 56 Nowell Place (LS9), we can often accommodate short-notice bookings within 24–48 hours, subject to availability. Contact us via phone (07475 352330) or WhatsApp for emergency slots.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-[#19A974] uppercase tracking-wider block mb-1">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#20252B] tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Clear, honest answers about our cleaning operations across Leeds.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl transition-colors overflow-hidden ${
                  isOpen ? 'border-[#19A974] bg-[#F3FBF7]/30' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#20252B]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#19A974]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
