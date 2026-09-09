import React from 'react';
import { CAREER_DIRECTION } from '../data/portfolioData';
import { Compass, ArrowUpRight, Zap, Target, Globe, ShieldAlert } from 'lucide-react';

export const CareerDirection: React.FC = () => {
  return (
    <section id="direction" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#312E81] via-[#2A2770] to-[#151336] rounded-[36px] p-8 sm:p-14 text-white relative shadow-2xl overflow-hidden">
          {/* Background Matrix */}
          <div className="absolute inset-0 bg-grid-mesh opacity-25 pointer-events-none" />
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F59E0B]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-[#FBBF24] uppercase">
                <Compass className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>CAREER NORTH STAR &amp; DIRECTION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                {CAREER_DIRECTION.heading}
              </h2>

              <p className="text-base text-[#E0E7FF]/90 leading-relaxed font-normal">
                Applying inventory control, procurement, vendor liaison, and fulfillment logistics within the high-intensity, fast-paced world of sports brands, merchandise drops, and athletic retail.
              </p>

              {/* Core Commitment Banner */}
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20 flex items-start gap-3">
                <Target className="w-5 h-5 text-[#FBBF24] shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed">
                  <span className="font-bold text-white">Versatile Operational Mindset: </span>
                  <span className="text-[#C7D2FE]">“{CAREER_DIRECTION.statement}”</span>
                </div>
              </div>

              {/* Specific Areas of Interest Grid */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
                  Key Focus Segments:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CAREER_DIRECTION.targetAreas.map((area) => (
                    <div
                      key={area.title}
                      className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition"
                    >
                      <div className="text-xs font-extrabold text-white">{area.title}</div>
                      <div className="text-[11px] text-[#C7D2FE] mt-0.5">{area.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Abstract Vector Telemetry Card (Pure Abstract Architecture - NO PHOTO) */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="text-xs font-mono text-[#FBBF24] font-bold">
                  FOCUS_DOMAINS: SPORTS_SCM
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>

              {/* Sports Merchandise & Retail Movement Vector */}
              <div className="p-4 bg-[#151336]/80 rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                <div className="flex justify-between text-[#C7D2FE]">
                  <span>CATEGORY: SPORTS_GOODS</span>
                  <span className="text-emerald-400 font-bold">READY TO DEPLOY</span>
                </div>

                {/* Progress Flow Line */}
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#F59E0B] via-[#4F46E5] to-emerald-400 h-full w-[92%]" />
                </div>

                <div className="flex justify-between text-[10px] text-slate-300">
                  <span>Vendor Sourcing</span>
                  <span>Inventory Control</span>
                  <span className="text-[#FBBF24] font-bold">Store / Consumer</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2">
                <div className="text-white font-bold flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#FBBF24]" />
                  <span>Why Sports &amp; Supply Chain?</span>
                </div>
                <p className="text-[#E0E7FF]/80 leading-relaxed text-[11px]">
                  Athletic gear, sports nutrition, and merchandise operate on razor-sharp seasonal cycles and event surges. Connecting reliable procurement with customer fulfillment in sports is the intersection I am dedicated to building.
                </p>
              </div>

              <div className="text-center pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#FBBF24] hover:text-white transition"
                >
                  <span>Discuss Supply Chain &amp; Operations Opportunities</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
