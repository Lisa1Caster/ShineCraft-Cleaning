import React, { useState } from 'react';
import { Home, Sparkles, Building2, Key, Layers, Flame, Eye, Check, ArrowUpRight, HelpCircle } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'main' | 'secondary' | 'checklist'>('main');
  const [selectedServiceChecklist, setSelectedServiceChecklist] = useState<string>('domestic');

  const mainServices = [
    {
      id: 'domestic',
      title: 'Regular Domestic Cleaning',
      subtitle: 'Weekly or fortnightly scheduled home care',
      icon: Home,
      description:
        'Continuous housekeeping tailored to your household routine. Includes dusting, floor vacuuming and mopping, bathroom sanitisation, and kitchen surface degreasing.',
      features: [
        'Same trusted regular cleaner where possible',
        'Kitchen worktops, hob & splashbacks sanitized',
        'Limescale removal on taps and shower screens',
        'Bins emptied, floors mopped & carpets vacuumed',
      ],
      idealFor: 'Busy households, professionals, and families in Leeds',
      popular: true,
    },
    {
      id: 'tenancy',
      title: 'End of Tenancy Cleaning',
      subtitle: 'Deposit-standard checkout deep clean',
      icon: Key,
      description:
        'A comprehensive, inventory-approved deep clean designed to meet the strict inspection standards of Leeds letting agents, landlords, and property managers.',
      features: [
        'Full room-by-room inventory checklist adherence',
        'Inside kitchen cupboards, drawers & fridge cleaned',
        'Skirting boards, switches, plugs & doorframes wiped',
        'Free re-clean within 24h if inspector flags any item',
      ],
      idealFor: 'Tenants moving out, letting agents & buy-to-let owners',
      popular: false,
    },
    {
      id: 'deep',
      title: 'Deep Clean & Spring Refresh',
      subtitle: 'Intensive restorative top-to-bottom scrub',
      icon: Sparkles,
      description:
        'An intensive overhaul tackling built-up grime, heavy scale, and overlooked nooks. Recommended before special occasions or as a seasonal home reset.',
      features: [
        'Detailed descaling of bathrooms & stubborn water spots',
        'Grease clearing on cooker hoods and exterior appliances',
        'Deep dusting behind furniture and high ledges',
        'Radiators, doors, window sills & woodwork sanitized',
      ],
      idealFor: 'Annual spring cleans, pre-event prep, or new move-ins',
      popular: false,
    },
    {
      id: 'office',
      title: 'Office & Commercial Cleaning',
      subtitle: 'Reliable workplace hygiene & sanitation',
      icon: Building2,
      description:
        'Discreet, reliable cleaning for local Leeds offices, studios, clinics, retail stores, and communal residential blocks. Flexible early morning or evening hours.',
      features: [
        'Workstation sanitation, telephone & peripheral wipe-down',
        'Communal kitchen sanitisation & waste management',
        'Restroom restocking & anti-bacterial disinfection',
        'Flexible contracts: daily, bi-weekly, or weekly',
      ],
      idealFor: 'Leeds City Centre & suburban offices, surgeries, studios',
      popular: false,
    },
    {
      id: 'carpet',
      title: 'Carpet & Upholstery Care',
      subtitle: 'Deep extraction & fabric renewal',
      icon: Layers,
      description:
        'Professional deep hot-water extraction that reaches into carpet fibres to lift ground-in dirt, pet hair, dust mites, and persistent everyday stains.',
      features: [
        'Pre-spray treatment for high-traffic zones',
        'Professional extraction rinsing leaving minimal moisture',
        'Neutralises pet odours and refreshes fabric pile',
        'Safe for synthetic and wool blend carpets',
      ],
      idealFor: 'Stained carpets, pet owners & tenancy agreements',
      popular: false,
    },
  ];

  const secondaryServices = [
    {
      title: 'Oven & Cooker Detailing',
      icon: Flame,
      desc: 'Complete non-caustic degreasing of ovens, racks, trays, glass door inserts, and hob burners to remove burnt carbon deposits.',
      rate: 'Add-on from £45',
    },
    {
      title: 'After-Builders Clean',
      icon: Sparkles,
      desc: 'Specialist fine dust removal following renovations or building work. Multi-stage surface dusting, paint splatter clearing, and final shine.',
      rate: 'Custom quote per job',
    },
    {
      title: 'Interior Window & Mirror Polish',
      icon: Eye,
      desc: 'Streak-free cleaning of all reachable interior window panes, frames, sills, and large mirrors for maximum natural light.',
      rate: 'Add-on from £25',
    },
  ];

  const checklists: Record<string, { title: string; tasks: { area: string; items: string[] }[] }> = {
    domestic: {
      title: 'Regular Domestic Checklist',
      tasks: [
        {
          area: 'All Living & Bedrooms',
          items: ['Dust all reachable surfaces & ornaments', 'Vacuum carpets and rugs thoroughly', 'Mop hard floor surfaces', 'Empty waste bins and replace liners', 'Make beds / straighten cushions upon request'],
        },
        {
          area: 'Kitchen Area',
          items: ['Wipe all worktops & splashbacks', 'Sanitise sink, basin & polish taps', 'Wipe exterior of fridge, microwave & oven', 'Clean hob surface and remove spills', 'Wipe dining table and chairs'],
        },
        {
          area: 'Bathrooms & Toilets',
          items: ['Scrub and disinfect toilet inside and out', 'Wash and rinse bathtub & shower cabin', 'Remove soap scum and polish chrome fixtures', 'Clean mirror and vanity surfaces', 'Mop and disinfect bathroom flooring'],
        },
      ],
    },
    tenancy: {
      title: 'End of Tenancy Checklist (Deposit-Return Spec)',
      tasks: [
        {
          area: 'Kitchen Deep Clean',
          items: ['Clean inside and outside of all cupboards & drawers', 'Defrost & clean inside and outside of fridge/freezer', 'Deep clean oven exterior, hob, extractor filter', 'Descale sink, taps, and drain plugs', 'Wipe wall tiles and clean tile grout lines'],
        },
        {
          area: 'Bathrooms & En-suites',
          items: ['Remove heavy limescale from shower heads & glass screens', 'Disinfect and polish toilet bowl, seat, and cistern', 'Clean radiator / heated towel rail', 'Wipe extractor fan vents and light fittings', 'Deep scrub floor and wall tiles'],
        },
        {
          area: 'All Rooms & Hallways',
          items: ['Wipe tops of doors, doorframes and handles', 'Wipe all skirting boards, plug sockets and switches', 'Dust cobwebs from ceilings and high corners', 'Clean inside windows, frames, and window sills', 'Deep vacuum edges and behind moved furniture'],
        },
      ],
    },
    office: {
      title: 'Commercial & Office Specification',
      tasks: [
        {
          area: 'Desks & Workstations',
          items: ['Disinfect desktop surfaces and touchpoints', 'Wipe telephone handsets and accessories', 'Empty individual recycling & waste bins', 'Vacuum under desks and around cable trays'],
        },
        {
          area: 'Communal Restrooms & Breakrooms',
          items: ['Sanitise all toilet fixtures, basins & soap dispensers', 'Replenish consumables (towels, toilet tissue, hand wash)', 'Clean microwave interior, kettle area, and kitchen counters', 'Disinfect handles, banisters, and keypad entry points'],
        },
      ],
    },
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#19A974] tracking-wide uppercase">
            <span>Our Service Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>Leeds LS9 & Surrounding Areas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#20252B] tracking-tight mt-2 font-display">
            Comprehensive Cleaning Solutions, Executed With Precision
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            From regular scheduled housekeeping to thorough move-out cleans and commercial premises care, every service is carried out by vetted professionals adhering to systematic quality checklists.
          </p>
        </div>

        {/* Segmented view switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-md mb-8">
          <button
            onClick={() => setActiveTab('main')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'main'
                ? 'bg-white text-[#20252B] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Main Services
          </button>
          <button
            onClick={() => setActiveTab('secondary')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'secondary'
                ? 'bg-white text-[#20252B] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Specialist Add-Ons
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'checklist'
                ? 'bg-white text-[#20252B] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Task Checklist
          </button>
        </div>

        {/* Tab 1: Main Services Grid */}
        {activeTab === 'main' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all hover:border-[#19A974]/60 hover:shadow-lg ${
                    service.popular ? 'border-[#19A974] ring-1 ring-[#19A974]/20' : 'border-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-lg bg-[#E8F7F1] flex items-center justify-center text-[#19A974]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      {service.popular && (
                        <span className="text-[11px] font-semibold text-[#19A974] bg-[#E8F7F1] px-2.5 py-1 rounded">
                          Most Requested
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-[#20252B] font-display mb-1">{service.title}</h3>
                    <p className="text-xs font-medium text-slate-500 mb-3">{service.subtitle}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4 mb-5">
                      <span className="text-xs font-semibold text-slate-700 block">Key Inclusions:</span>
                      {service.features.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-[#19A974] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-2">
                    <div className="text-[11px] text-slate-500 mb-3">
                      <strong className="text-slate-700">Best For:</strong> {service.idealFor}
                    </div>
                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-[#20252B] hover:bg-[#19A974] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Book {service.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Secondary Specialist Add-ons */}
        {activeTab === 'secondary' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryServices.map((addon, index) => {
              const IconComp = addon.icon;
              return (
                <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#19A974] mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#20252B] font-display mb-1">{addon.title}</h3>
                    <p className="text-xs font-semibold text-[#19A974] mb-3">{addon.rate}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{addon.desc}</p>
                  </div>
                  <button
                    onClick={() => onOpenBooking(`Add-on: ${addon.title}`)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-emerald-50 hover:text-[#19A974] border border-slate-200 transition-colors"
                  >
                    Request Add-On
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Interactive Task Checklist */}
        {activeTab === 'checklist' && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-[#20252B] font-display">Systematic Cleaning Specification</h3>
                <p className="text-xs text-slate-500 mt-0.5">Explore our exact room-by-room tasks so you know exactly what is included.</p>
              </div>

              {/* Sub-selector for checklist type */}
              <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg self-start sm:self-auto">
                <button
                  onClick={() => setSelectedServiceChecklist('domestic')}
                  className={`px-3 py-1.5 text-xs font-medium rounded ${
                    selectedServiceChecklist === 'domestic' ? 'bg-[#19A974] text-white font-semibold' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Domestic
                </button>
                <button
                  onClick={() => setSelectedServiceChecklist('tenancy')}
                  className={`px-3 py-1.5 text-xs font-medium rounded ${
                    selectedServiceChecklist === 'tenancy' ? 'bg-[#19A974] text-white font-semibold' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  End of Tenancy
                </button>
                <button
                  onClick={() => setSelectedServiceChecklist('office')}
                  className={`px-3 py-1.5 text-xs font-medium rounded ${
                    selectedServiceChecklist === 'office' ? 'bg-[#19A974] text-white font-semibold' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Commercial Office
                </button>
              </div>
            </div>

            {/* Checklist details display */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {checklists[selectedServiceChecklist]?.tasks.map((section, idx) => (
                <div key={idx} className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-[#20252B] font-display mb-3 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#19A974]"></span>
                    <span>{section.area}</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {section.items.map((task, tidx) => (
                      <li key={tidx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#19A974] shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                <span>Need custom tasks (like inside microwave or balcony sweep)? Simply mention during booking.</span>
              </span>
              <button
                onClick={() => onOpenBooking(checklists[selectedServiceChecklist]?.title)}
                className="px-4 py-2 rounded-lg bg-[#19A974] hover:bg-[#14875c] text-white font-semibold text-xs transition-colors shrink-0"
              >
                Book This Specification
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
