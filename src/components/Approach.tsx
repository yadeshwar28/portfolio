import React from 'react';
import { APPROACH_STAGES } from '../data/portfolioData';
import { ArrowRight, Search, Activity, Share2, Sparkles } from 'lucide-react';

export const Approach: React.FC = () => {
  const iconList = [Search, Activity, Share2, Sparkles];

  return (
    <section id="approach" className="py-24 bg-[#F1F0FB] border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#4338CA] mb-2">
            OPERATIONAL METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            How I Approach Operations
          </h2>
          <p className="text-[#475569] mt-3 text-base">
            A practical, four-stage workflow developed through day-to-day warehouse reconciliations, dispatch management, and vendor coordination.
          </p>
        </div>

        {/* 4 Connected Process Nodes with Flow Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {APPROACH_STAGES.map((stage, idx) => {
            const IconComponent = iconList[idx];
            const isLast = idx === APPROACH_STAGES.length - 1;

            return (
              <div
                key={stage.stage}
                id={`approach-step-${stage.stage}`}
                className={`rounded-3xl p-7 border transition-all duration-300 relative group hover:shadow-xl hover:-translate-y-1 ${
                  isLast
                    ? 'bg-[#312E81] text-white border-[#4338CA] shadow-lg'
                    : 'bg-white text-[#0F172A] border-[#E0E7FF] shadow-sm'
                }`}
              >
                {/* Header with Stage Number and Code */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`w-12 h-12 rounded-2xl font-black text-base flex items-center justify-center shadow-md ${
                      isLast
                        ? 'bg-[#F59E0B] text-[#0F172A]'
                        : 'bg-[#4338CA] text-white shadow-[#4338CA]/25'
                    }`}
                  >
                    {stage.stage}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded ${
                      isLast
                        ? 'text-[#FBBF24] bg-white/10'
                        : 'text-[#4338CA] bg-[#EEF2FF]'
                    }`}
                  >
                    {stage.code}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <IconComponent
                    className={`w-5 h-5 ${isLast ? 'text-[#FBBF24]' : 'text-[#4338CA]'}`}
                  />
                  <h3
                    className={`text-lg font-bold ${isLast ? 'text-white' : 'text-[#0F172A]'}`}
                  >
                    {stage.title}
                  </h3>
                </div>

                <p
                  className={`text-xs sm:text-sm font-medium leading-relaxed mb-4 ${
                    isLast ? 'text-[#E0E7FF]' : 'text-[#334155]'
                  }`}
                >
                  {stage.description}
                </p>

                <p
                  className={`text-[11px] leading-relaxed pt-3 border-t ${
                    isLast ? 'border-white/15 text-[#C7D2FE]' : 'border-slate-100 text-[#64748B]'
                  }`}
                >
                  {stage.detail}
                </p>

                {/* Desktop Connection Indicator */}
                {!isLast && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-[#4338CA] bg-white p-1 rounded-full shadow border border-slate-200">
                    <ArrowRight className="w-3.5 h-3.5" />
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
