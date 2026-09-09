import React from 'react';
import { CORE_AREAS } from '../data/portfolioData';
import { Package, Users, Truck, BarChart3 } from 'lucide-react';

export const CoreAreas: React.FC = () => {
  const iconMap = [Package, Users, Truck, BarChart3];

  return (
    <section id="focus" className="py-24 bg-[#F8F9FE] relative bg-topo-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#4338CA] mb-2 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#F59E0B] inline-block" />
            <span>WHAT I WORK WITH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Core Areas
          </h2>
          <p className="text-[#475569] mt-3 text-base sm:text-lg">
            Practical operational domains built through hands-on reconciliation, vendor liaison, order routing, and reporting.
          </p>
        </div>

        {/* 4 Distinct Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {CORE_AREAS.map((area, index) => {
            const IconComponent = iconMap[index];
            const isPurpleFeature = area.accent === 'purple';

            return (
              <div
                key={area.number}
                id={`core-area-${area.number}`}
                className={`rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 ${
                  index === 0
                    ? 'bg-white border-[#E0E7FF] shadow-sm md:col-span-2 lg:col-span-1'
                    : index === 1
                    ? 'bg-gradient-to-br from-[#312E81] to-[#2A2770] text-white border-[#4338CA] shadow-md md:col-span-2 lg:col-span-1'
                    : 'bg-white border-[#E0E7FF] shadow-sm'
                }`}
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                        index === 1
                          ? 'bg-white/10 text-[#FBBF24]'
                          : 'bg-[#EEF2FF] text-[#4338CA] group-hover:bg-[#4338CA] group-hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                        index === 1
                          ? 'bg-white/15 text-[#FBBF24]'
                          : 'bg-[#EEF2FF] text-[#4338CA]'
                      }`}
                    >
                      {area.number}
                    </span>
                  </div>

                  <div
                    className={`text-[10px] font-extrabold uppercase tracking-wider mb-1.5 ${
                      index === 1 ? 'text-[#FBBF24]' : 'text-[#D97706]'
                    }`}
                  >
                    {area.category}
                  </div>

                  <h3
                    className={`text-xl font-extrabold mb-3 ${
                      index === 1 ? 'text-white' : 'text-[#0F172A]'
                    }`}
                  >
                    {area.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      index === 1 ? 'text-[#E0E7FF]/80' : 'text-[#475569]'
                    }`}
                  >
                    {area.description}
                  </p>
                </div>

                {/* Sub-Items Badges */}
                <div
                  className={`pt-5 border-t flex flex-wrap gap-1.5 ${
                    index === 1 ? 'border-white/10' : 'border-slate-100'
                  }`}
                >
                  {area.items.map((item) => (
                    <span
                      key={item}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg ${
                        index === 1
                          ? 'bg-white/10 text-white border border-white/15'
                          : 'bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE]/50'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
