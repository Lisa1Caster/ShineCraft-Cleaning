import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (serviceName?: string, estimateDetails?: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  // Quick quote estimator state
  const [serviceType, setServiceType] = useState<'domestic' | 'tenancy' | 'deep' | 'office'>('domestic');
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const [frequency, setFrequency] = useState<'one-off' | 'weekly' | 'fortnightly'>('fortnightly');

  // Realistic transparent pricing estimate logic for Leeds market
  const calculateEstimate = () => {
    if (serviceType === 'office') {
      return {
        hours: '2 - 4 hrs',
        estimate: 'From £45 / visit',
        desc: 'Custom commercial cleaning tailored to your Leeds workspace',
      };
    }
    if (serviceType === 'tenancy') {
      // End of tenancy is deep & checklist guaranteed
      const baseTenancy = 120 + bedrooms * 35 + (bathrooms - 1) * 30;
      return {
        hours: `${4 + bedrooms} - ${6 + bedrooms} hrs`,
        estimate: `£${baseTenancy} - £${baseTenancy + 40}`,
        desc: 'Deposit-return checklist with comprehensive deep sanitisation',
      };
    }
    if (serviceType === 'deep') {
      const baseDeep = 90 + bedrooms * 25 + (bathrooms - 1) * 20;
      return {
        hours: `${3 + bedrooms} - ${5 + bedrooms} hrs`,
        estimate: `£${baseDeep} - £${baseDeep + 35}`,
        desc: 'Top-to-bottom scrub including limescale, appliances & woodwork',
      };
    }
    // Domestic regular
    const hoursNeeded = Math.max(2, bedrooms * 0.8 + bathrooms * 0.5);
    const hourlyRate = frequency === 'weekly' ? 17.5 : frequency === 'fortnightly' ? 18.5 : 20;
    const estTotal = Math.round(hoursNeeded * hourlyRate);
    return {
      hours: `${hoursNeeded.toFixed(1)} hrs`,
      estimate: `£${estTotal} / clean`,
      desc: `${frequency === 'one-off' ? 'Single one-off home clean' : frequency === 'weekly' ? 'Weekly scheduled maintenance' : 'Fortnightly scheduled maintenance'}`,
    };
  };

  const currentEst = calculateEstimate();

  const handleEstimateBook = () => {
    const serviceLabels = {
      domestic: 'Domestic Home Cleaning',
      tenancy: 'End of Tenancy Cleaning',
      deep: 'Deep Clean & Spring Refresh',
      office: 'Office & Commercial Cleaning',
    };
    onOpenBooking(serviceLabels[serviceType], {
      serviceType,
      bedrooms,
      bathrooms,
      frequency,
      estimate: currentEst.estimate,
    });
  };

  const handleWhatsAppInquiry = () => {
    const serviceLabels = {
      domestic: 'Domestic Home Cleaning',
      tenancy: 'End of Tenancy Cleaning',
      deep: 'Deep Clean & Spring Refresh',
      office: 'Office & Commercial Cleaning',
    };
    const text = encodeURIComponent(
      `Hello ShineCraft Cleaning! I'd like to book ${serviceLabels[serviceType]} in Leeds (${bedrooms} bed, ${bathrooms} bath). Estimated rate: ${currentEst.estimate}. Please let me know your earliest availability.`
    );
    window.open(`https://wa.me/447475352330?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/70 bg-gradient-to-b from-[#F3FBF7]/50 via-white to-white">
      {/* Subtle geometric background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#19A974 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value proposition and conversion triggers */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Local Trust Signal */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1.5 rounded-md">
              <span className="w-2 h-2 rounded-full bg-[#19A974] animate-pulse"></span>
              <span>Locally Based at 56 Nowell Place, Leeds LS9</span>
              <span className="text-slate-400" aria-hidden="true">·</span>
              <span>Fully Insured & Vetted</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#20252B] tracking-tight leading-[1.15] text-balance">
              Professional, Reliable Cleaning for Homes & Workplaces in <span className="text-[#19A974]">Leeds</span>
            </h1>

            {/* Short Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              ShineCraft Cleaning provides high-standard residential and commercial cleaning across Leeds. Whether you need recurring domestic visits, thorough end-of-tenancy deposit-safe cleans, or workspace hygiene, we bring systematic attention to detail and dependable service.
            </p>

            {/* Core practical reassurance points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#19A974] shrink-0" />
                <span>Fixed, Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#19A974] shrink-0" />
                <span>100% Quality Commitment</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <Clock className="w-4 h-4 text-[#19A974] shrink-0" />
                <span>Flexible Mon–Sat Slots</span>
              </div>
            </div>

            {/* Primary and Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#19A974] hover:bg-[#14875c] shadow-md shadow-[#19A974]/25 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href="https://wa.me/447475352330?text=Hi%20ShineCraft%20Cleaning%2C%20I%20would%20like%20to%20inquire%20about%20a%20cleaning%20service%20in%20Leeds"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold text-[#20252B] bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Quote</span>
              </a>

              <a
                href="tel:+447475352330"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#19A974] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#19A974]" />
                <span>Call 07475 352330</span>
              </a>
            </div>

            {/* Service radius footnote */}
            <div className="text-xs text-slate-500 pt-1">
              Serving Central Leeds, Harehills, East End Park, Richmond Hill, Headingley, Chapel Allerton, Roundhay, and all LS postcodes.
            </div>
          </div>

          {/* Right Column: Interactive Modern SaaS Instant Cleaning Calculator */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-7 relative">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-[#20252B] font-display">Instant Leeds Quote Calculator</h3>
                  <p className="text-xs text-slate-500">Calculate estimated scope & book in seconds</p>
                </div>
                <div className="px-2.5 py-1 rounded bg-emerald-50 text-[#19A974] text-xs font-semibold">
                  No hidden fees
                </div>
              </div>

              {/* Service selector segmented control */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    1. Select Service Type
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setServiceType('domestic')}
                      className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                        serviceType === 'domestic'
                          ? 'bg-white text-[#20252B] shadow-sm font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Domestic Home
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceType('tenancy')}
                      className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                        serviceType === 'tenancy'
                          ? 'bg-white text-[#20252B] shadow-sm font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      End of Tenancy
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceType('deep')}
                      className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                        serviceType === 'deep'
                          ? 'bg-white text-[#20252B] shadow-sm font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Deep / Spring Clean
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceType('office')}
                      className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                        serviceType === 'office'
                          ? 'bg-white text-[#20252B] shadow-sm font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Commercial Office
                    </button>
                  </div>
                </div>

                {/* Property Size Controls */}
                {serviceType !== 'office' ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Bedrooms
                      </label>
                      <div className="flex items-center border border-slate-200 rounded-lg p-1 bg-slate-50">
                        {[1, 2, 3, 4].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setBedrooms(num)}
                            className={`flex-1 py-1 text-xs font-medium rounded ${
                              bedrooms === num
                                ? 'bg-[#19A974] text-white font-bold'
                                : 'text-slate-600 hover:bg-slate-200/70'
                            }`}
                          >
                            {num === 4 ? '4+' : num}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Bathrooms
                      </label>
                      <div className="flex items-center border border-slate-200 rounded-lg p-1 bg-slate-50">
                        {[1, 2, 3].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setBathrooms(num)}
                            className={`flex-1 py-1 text-xs font-medium rounded ${
                              bathrooms === num
                                ? 'bg-[#19A974] text-white font-bold'
                                : 'text-slate-600 hover:bg-slate-200/70'
                            }`}
                          >
                            {num === 3 ? '3+' : num}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Workspace Scope
                    </label>
                    <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      Standard office suite, retail space, communal stairway, or consultation rooms. Out-of-hours cleaning available across Leeds.
                    </p>
                  </div>
                )}

                {/* Frequency selector (for domestic) */}
                {serviceType === 'domestic' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Frequency
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'weekly', label: 'Weekly' },
                        { id: 'fortnightly', label: 'Fortnightly' },
                        { id: 'one-off', label: 'One-off' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFrequency(item.id as any)}
                          className={`py-1.5 text-xs rounded-md border font-medium transition-colors ${
                            frequency === item.id
                              ? 'border-[#19A974] bg-[#E8F7F1] text-emerald-900 font-semibold'
                              : 'border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live Estimate Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 mt-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-500 font-medium">Estimated Price:</span>
                    <span className="text-xl font-bold text-[#20252B] font-display tabular-nums text-[#19A974]">
                      {currentEst.estimate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mt-1">
                    <span>Est. Timeframe:</span>
                    <span className="font-semibold text-slate-700">{currentEst.hours}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1.5 border-t border-slate-200/60 pt-1.5">
                    {currentEst.desc}
                  </p>
                </div>

                {/* Actions from calculator */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleEstimateBook}
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-[#19A974] hover:bg-[#14875c] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book With This Spec</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#19A974]" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
