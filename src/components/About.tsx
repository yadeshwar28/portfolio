import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Briefcase, Rocket, Sparkles, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const journeyStages = [
    {
      step: '01',
      title: 'Undergraduate Foundation',
      subtitle: 'B.Com & Business Administration',
      institution: 'D.G. Vaishnav College',
      badgeColor: 'bg-indigo-50 text-[#4338CA] border-indigo-200',
      icon: GraduationCap,
    },
    {
      step: '02',
      title: 'Hands-On Operations & Logistics',
      subtitle: 'Doodlez, VYBN & Vels Solution Internships',
      institution: 'Shopify / 3PL Dispatch / MIS',
      badgeColor: 'bg-amber-50 text-[#B45309] border-amber-200',
      icon: Briefcase,
    },
    {
      step: '03',
      title: 'Ventures & Tech Prototyping',
      subtitle: 'StockFlow AI, Team Taara (₹97k Rev), Make.com',
      institution: 'Venture & Automation Execution',
      badgeColor: 'bg-indigo-50 text-[#3730A3] border-indigo-200',
      icon: Rocket,
    },
    {
      step: '04',
      title: 'Specialized Sports Management',
      subtitle: 'PGP in Sports Management & Gaming',
      institution: 'Masters’ Union, Gurugram',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: Sparkles,
    },
    {
      step: '05',
      title: 'Target Career Direction',
      subtitle: 'Sports & Athletic Supply Chain & Operations',
      institution: 'Open to All Core SCM Roles',
      badgeColor: 'bg-[#312E81] text-[#FBBF24] border-white/20',
      icon: Compass,
      isTarget: true,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual 5-Stage Progression Pipeline (Pure Abstract Visual Architecture - NO PERSONAL PHOTO) */}
          <div
            id="about-visual-progression"
            className="lg:col-span-6 bg-[#F1F0FB] p-8 sm:p-10 rounded-3xl border border-[#E0E7FF] relative shadow-sm"
          >
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] mb-6 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4338CA]" />
                Portfolio Progression System
              </span>
              <span className="text-[#475569] font-mono text-[11px]">College → Industry</span>
            </div>

            {/* Stages Stack */}
            <div className="space-y-4">
              {journeyStages.map((stage, idx) => {
                const IconComponent = stage.icon;
                return (
                  <React.Fragment key={stage.step}>
                    <div
                      className={`flex items-center space-x-4 p-3.5 rounded-2xl shadow-sm border transition-transform duration-200 hover:scale-[1.01] ${
                        stage.isTarget
                          ? 'bg-[#312E81] text-white border-[#4338CA]'
                          : 'bg-white text-[#0F172A] border-slate-100'
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl font-black flex items-center justify-center text-xs shrink-0 ${
                          stage.isTarget
                            ? 'bg-[#F59E0B] text-[#0F172A]'
                            : 'bg-indigo-50 text-[#4338CA]'
                        }`}
                      >
                        {stage.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className={`text-sm font-bold truncate ${
                            stage.isTarget ? 'text-white' : 'text-[#0F172A]'
                          }`}
                        >
                          {stage.title}
                        </div>
                        <div
                          className={`text-xs truncate ${
                            stage.isTarget ? 'text-[#C7D2FE]' : 'text-[#475569]'
                          }`}
                        >
                          {stage.subtitle}
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-md border shrink-0 ${stage.badgeColor}`}
                      >
                        {stage.institution}
                      </span>
                    </div>

                    {idx < journeyStages.length - 1 && (
                      <div className="flex justify-center -my-2.5">
                        <div className="w-0.5 h-5 border-l-2 border-dashed border-[#C7D2FE]" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Bottom Insight Footer */}
            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-[#475569]">
              <span className="font-medium">Primary Focus:</span>
              <span className="font-extrabold text-[#4338CA]">
                Supply Chain &amp; Operations in Sports
              </span>
            </div>
          </div>

          {/* Right Column: Authentic Personal Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#4338CA] flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#F59E0B] inline-block" />
              <span>ABOUT ME</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
              Learning by Doing, <br />
              Improving by Experience.
            </h2>

            {/* Exact Content Quotation Box */}
            <div className="p-6 rounded-2xl bg-[#EEF2FF] border-l-4 border-[#4338CA] text-[#0F172A] shadow-sm">
              <p className="text-sm sm:text-base font-medium italic text-[#151336] leading-relaxed">
                {PERSONAL_INFO.aboutQuote}
              </p>
            </div>

            {/* Exact Body Content */}
            <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
              <p>{PERSONAL_INFO.aboutParagraphs[0]}</p>
              <p>{PERSONAL_INFO.aboutParagraphs[1]}</p>
            </div>

            {/* Authentic Summary Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 bg-[#F8FAFC] rounded-2xl border border-slate-200">
                <div className="text-xl font-black text-[#4338CA]">150+</div>
                <div className="text-[11px] font-bold text-[#475569] mt-0.5">SKUs Managed</div>
              </div>
              <div className="p-3.5 bg-[#F8FAFC] rounded-2xl border border-slate-200">
                <div className="text-xl font-black text-[#D97706]">₹97k</div>
                <div className="text-[11px] font-bold text-[#475569] mt-0.5">Team Drop-Ship Rev</div>
              </div>
              <div className="p-3.5 bg-[#F8FAFC] rounded-2xl border border-slate-200">
                <div className="text-xl font-black text-[#4338CA]">Shopify</div>
                <div className="text-[11px] font-bold text-[#475569] mt-0.5">&amp; 3PL Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
