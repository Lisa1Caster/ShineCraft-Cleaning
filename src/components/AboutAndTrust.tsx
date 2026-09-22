import React from 'react';
import { ShieldCheck, CheckCircle2, MapPin, Clock, FileCheck2, UserCheck, RefreshCw, KeyRound, Sparkles } from 'lucide-react';

interface AboutAndTrustProps {
  onOpenBooking: () => void;
}

export const AboutAndTrust: React.FC<AboutAndTrustProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-16 sm:py-24 bg-[#FBFDFB]">
      {/* SECTION 3: ABOUT SHINECRAFT CLEANING */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#19A974] tracking-wide uppercase">
              <span>About ShineCraft Cleaning</span>
              <span aria-hidden="true">·</span>
              <span>Leeds, West Yorkshire</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#20252B] tracking-tight font-display text-balance">
              Locally Operated, Dedicated to Impeccable Standards
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Headquartered at <strong>56 Nowell Place in Leeds (LS9 6HT)</strong>, ShineCraft Cleaning was founded with a straightforward mission: to provide Leeds homeowners, tenants, and business managers with a cleaning service they can genuinely depend on.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We know inviting someone into your home or commercial space requires absolute confidence. That is why we focus on consistency: vetted team members, detailed task checklists for every single visit, and clear, respectful communication from initial quote to final walkthrough.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200">
                <MapPin className="w-4 h-4 text-[#19A974]" />
                <span>Leeds LS9 Based</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#19A974]" />
                <span>Fully Insured Operation</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200">
                <Clock className="w-4 h-4 text-[#19A974]" />
                <span>Prompt Arrival Windows</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#19A974]/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F7F1] flex items-center justify-center text-[#19A974]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#20252B] font-display">The ShineCraft Promise</h3>
                  <p className="text-xs text-slate-500">How we operate on every job across Leeds</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#19A974]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#20252B]">No Untrained Agency Rotation</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      For regular cleans, we aim for the same dedicated cleaner so they get to know your property and specific preferences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#19A974]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#20252B]">Professional Grade Equipment & Safe Detergents</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      We bring all required vacuums, microfiber systems, and eco-friendly or targeted cleaners. If you have specific surfaces or product preferences, we gladly accommodate them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#19A974]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#20252B]">Direct Accountable Contact</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      No automated bots or endless ticket queues. You can speak directly to our Leeds team via phone (07475 352330) or WhatsApp anytime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#20252B] hover:bg-[#19A974] text-white text-xs font-semibold text-center transition-colors cursor-pointer"
                >
                  Schedule Your First Clean
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: TRUST / WHY CHOOSE US */}
      <section id="standards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#19A974] uppercase tracking-wider mb-2">
            <span>Practical Reliability</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#20252B] tracking-tight font-display">
            Why Leeds Residents & Businesses Rely On Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Clear standards, vetted team members, and transparent terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm hover:border-[#19A974]/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#E8F7F1] flex items-center justify-center text-[#19A974] mb-4">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#20252B] font-display mb-1.5">Vetted & Trained Personnel</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every cleaner is identity-checked and trained on systematic cleaning techniques, surface safety, and respectful customer etiquette.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm hover:border-[#19A974]/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#E8F7F1] flex items-center justify-center text-[#19A974] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#20252B] font-display mb-1.5">Public Liability Covered</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Full public liability insurance coverage on every domestic and commercial property we service in Leeds, giving you complete reassurance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm hover:border-[#19A974]/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#E8F7F1] flex items-center justify-center text-[#19A974] mb-4">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#20252B] font-display mb-1.5">Task-By-Task Checklist</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No skipped corners. We work through a structured checklist covering every specified room, from skirtings to appliances.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm hover:border-[#19A974]/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#E8F7F1] flex items-center justify-center text-[#19A974] mb-4">
              <KeyRound className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#20252B] font-display mb-1.5">Secure Key-Holding</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Can't be home during daytime cleaning hours? We provide secure, coded key management so your home is pristine by the time you return.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: CREDIBILITY & REASSURANCE GUARANTEE (Replacing fake reviews with concrete policy) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#20252B] text-white rounded-2xl p-7 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#19A974] bg-[#19A974]/15 px-3 py-1 rounded-md">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Our Quality Reassurance Commitment</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
                24-Hour Satisfaction Re-Clean Guarantee
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                We take accountability seriously. If any agreed task from your cleaning specification is not completed to standard, notify us within 24 hours of completion. We will send a cleaner back to rectify the specific area at no additional cost.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#19A974]" />
                  <span>No questions asked resolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#19A974]" />
                  <span>Inventory deposit support for tenancies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#19A974]" />
                  <span>Direct contact with local Leeds management</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="tel:+447475352330"
                className="py-3 px-5 rounded-lg bg-[#19A974] hover:bg-[#14875c] text-white text-xs font-semibold text-center transition-colors shadow-md shadow-[#19A974]/20"
              >
                Speak Directly: 07475 352330
              </a>
              <a
                href="https://wa.me/447475352330?text=Hi%20ShineCraft%20Cleaning%2C%20I%20have%20a%20question%20about%20your%20Leeds%20cleaning%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center border border-slate-700 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
