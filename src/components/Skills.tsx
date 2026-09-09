import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { CheckCircle2, Wrench, Package, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#4338CA] mb-2">
            PRACTICAL COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Tools &amp; Capabilities
          </h2>
          <p className="text-[#475569] mt-3 text-base">
            Verified operational workflows and commercial software applied across inventory management, vendor logistics, and business reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Supply Chain & Operations Card (Span 7) */}
          <div className="lg:col-span-7 bg-[#F8F9FE] rounded-3xl p-8 sm:p-10 border border-[#E0E7FF] shadow-sm hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#4338CA]">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#D97706] uppercase">CORE OPERATIONS</div>
                  <h3 className="text-xl font-extrabold text-[#0F172A]">Supply Chain &amp; Operations</h3>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#4338CA] bg-[#EEF2FF] px-3 py-1 rounded-full">
                10 Competencies
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
              Practical ground-level workflows implemented across inventory replenishment cycles, Shopify order flows, vendor sourcing, and 3PL courier logistics.
            </p>

            {/* Competency Pills Grid (Strictly No Percentage Bars) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILLS_DATA.supplyChain.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center space-x-3 p-3.5 bg-white rounded-2xl border border-[#E0E7FF] shadow-2xs hover:border-[#4338CA] transition"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#4338CA] shrink-0" />
                  <span className="text-xs font-bold text-[#0F172A]">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Software Card (Span 5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#312E81] to-[#2A2770] text-white rounded-3xl p-8 sm:p-10 border border-[#4338CA] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#FBBF24]">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#FBBF24] uppercase">ENTERPRISE TOOLKIT</div>
                    <h3 className="text-xl font-extrabold text-white">Tools &amp; Systems</h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-white bg-white/15 px-3 py-1 rounded-full">
                  6 Systems
                </span>
              </div>

              <p className="text-xs text-[#E0E7FF]/80 leading-relaxed mb-6">
                Software tools leveraged for operational reporting, inventory tracking, e-commerce dispatch, and enterprise resource planning.
              </p>

              {/* Tools List */}
              <div className="space-y-3">
                {SKILLS_DATA.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-between hover:bg-white/15 transition"
                  >
                    <div>
                      <div className="text-sm font-bold text-white">{tool.name}</div>
                      <div className="text-[11px] text-[#C7D2FE]">{tool.category}</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#FBBF24]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#C7D2FE] flex items-center justify-between">
              <span>Applied In Real Contexts</span>
              <span className="font-bold text-[#FBBF24]">Strictly Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
