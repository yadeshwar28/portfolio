import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, CheckCircle2, TrendingUp, Layers, PackageCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#312E81] via-[#2A2770] to-[#151336] text-white overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32"
    >
      {/* Grid Matrix Overlay */}
      <div className="absolute inset-0 bg-grid-mesh pointer-events-none opacity-40" />

      {/* Ambient Luminous Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#4F46E5]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[460px] h-[460px] bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Warm Orange Flow Vector Wave */}
      <div className="absolute top-14 right-1/3 hidden lg:block opacity-40 pointer-events-none">
        <svg
          className="w-24 h-24 text-[#F59E0B]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 100 100"
        >
          <path d="M15,50 Q45,10 65,45 T95,35" strokeLinecap="round" />
          <polygon fill="currentColor" points="90,30 98,35 92,42" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Narrative & Value Pitch */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold tracking-widest text-[#FBBF24] uppercase">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>COLLEGE COURSE &amp; PROFESSIONAL PORTFOLIO</span>
            </div>

            {/* Candidate Identity Header */}
            <div>
              <div className="text-[#C7D2FE] font-bold text-sm tracking-wider uppercase mb-1 flex items-center gap-2">
                <span>{PERSONAL_INFO.name}</span>
                <span className="text-white/30">•</span>
                <span className="text-[#FBBF24] font-medium text-xs">Gurugram, India</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.14]">
                Building a Career at the <br className="hidden sm:inline" />
                <span className="text-[#FBBF24]">Intersection of Sports</span> &amp; Supply Chain.
              </h1>
            </div>

            {/* Supporting text directly from user prompt */}
            <p className="text-base sm:text-lg text-[#E0E7FF]/90 max-w-2xl font-normal leading-relaxed">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* CTA Action Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-view-work-btn"
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-extrabold text-sm tracking-wide shadow-lg shadow-[#F59E0B]/30 transition transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-[#0F172A]" />
              </a>
              <a
                id="hero-connect-btn"
                href="#contact"
                className="px-6 py-3.5 rounded-full border border-white/25 hover:border-white text-white font-semibold text-sm hover:bg-white/10 transition flex items-center space-x-2"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Real Metrics Ticker Ribbon */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-xl">
              <div className="p-2">
                <div className="text-2xl lg:text-3xl font-black text-[#FBBF24] tracking-tight">150+</div>
                <div className="text-xs text-[#E0E7FF]/70 uppercase font-medium mt-1">SKUs Managed</div>
              </div>
              <div className="p-2 border-l border-white/10">
                <div className="text-2xl lg:text-3xl font-black text-white tracking-tight">98%</div>
                <div className="text-xs text-[#E0E7FF]/70 uppercase font-medium mt-1">Stock Accuracy</div>
              </div>
              <div className="p-2 border-l border-white/10">
                <div className="text-2xl lg:text-3xl font-black text-emerald-400 tracking-tight">95%+</div>
                <div className="text-xs text-[#E0E7FF]/70 uppercase font-medium mt-1">On-Time Dispatch</div>
              </div>
            </div>
          </div>

          {/* Hero Abstract Supply Node Matrix Diagram (Pure Vector Architecture - Strictly No Personal Photo) */}
          <div
            id="hero-abstract-supply-chain"
            className="lg:col-span-5 relative flex justify-center items-center py-6"
            aria-label="Abstract supply chain value-flow diagram: Supplier to Procurement, Inventory, Fulfillment, and Customer"
          >
            {/* Outer Orbital Rotating Ring */}
            <div className="w-[330px] h-[330px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-white/20 relative flex items-center justify-center animate-slow-spin">
              {/* Orbital Node: Supplier */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F59E0B] shadow-lg shadow-[#F59E0B]/50" />
              {/* Orbital Node: Fulfillment */}
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              {/* Orbital Node: Customer */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#C7D2FE]" />
              {/* Orbital Node: Procurement */}
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#FBBF24]" />
            </div>

            {/* Inner Counter Ring */}
            <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full border border-[#818CF8]/30 animate-reverse-spin">
              <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-[#FBBF24]" />
              <div className="absolute top-6 left-6 w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>

            {/* Central Core Operations Hub Glyph */}
            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-[#4338CA] via-[#3730A3] to-[#151336] p-1.5 shadow-2xl shadow-[#151336] flex flex-col items-center justify-center text-center border border-white/25 z-20">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-1.5">
                <Layers className="w-6 h-6 text-[#FBBF24]" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-white">Operations Hub</span>
              <span className="text-[10px] text-[#C7D2FE]/90 font-mono mt-0.5">Physical &amp; Digital Flow</span>
              <div className="mt-1.5 flex items-center gap-1 text-[9px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                <CheckCircle2 className="w-2.5 h-2.5" />
                <span>Active Reconciliations</span>
              </div>
            </div>

            {/* Floating Glassmorphic Telemetry Chips */}

            {/* Currently Card (Requested specifically in prompt) */}
            <div className="absolute -top-5 sm:-top-8 left-0 sm:left-2 bg-[#0F172A]/95 border border-[#F59E0B]/40 rounded-2xl p-3 sm:p-3.5 shadow-2xl backdrop-blur-md z-30 max-w-[210px]">
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#FBBF24] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-ping" />
                <span>CURRENTLY</span>
              </div>
              <div className="text-xs font-bold text-white mt-1 leading-snug">
                {PERSONAL_INFO.currently.program}
              </div>
              <div className="text-[11px] font-medium text-[#C7D2FE] mt-0.5">
                {PERSONAL_INFO.currently.institution}
              </div>
            </div>

            {/* Value Chain Stages Strip (Supplier -> Procurement -> Inventory -> Fulfillment -> Customer) */}
            <div className="absolute -bottom-6 sm:-bottom-8 right-0 sm:right-2 bg-[#0F172A]/95 border border-white/20 rounded-2xl px-4 py-3 shadow-2xl backdrop-blur-md z-30 max-w-[260px]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <PackageCheck className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span className="text-[10px] font-extrabold text-[#FBBF24] uppercase tracking-wider">
                  Value Chain Flow
                </span>
              </div>
              <div className="flex items-center text-[10px] font-mono text-white/90 gap-1">
                <span>Supplier</span>
                <span className="text-[#FBBF24]">→</span>
                <span>Procure</span>
                <span className="text-[#FBBF24]">→</span>
                <span>Stock</span>
                <span className="text-[#FBBF24]">→</span>
                <span>Dispatch</span>
              </div>
              <div className="text-[9px] text-emerald-400 font-mono mt-1">
                SLA: 95%+ On-Time Delivery
              </div>
            </div>

            {/* Floating Telemetry Indicator */}
            <div className="absolute -right-2 top-1/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 shadow-xl z-30 hidden sm:block">
              <div className="flex items-center gap-1 text-[10px] text-[#FBBF24] font-extrabold uppercase tracking-wider">
                <TrendingUp className="w-3 h-3 text-[#FBBF24]" />
                <span>Sports Retail SCM</span>
              </div>
              <div className="text-xs font-black text-white mt-0.5">15 SKUs Modeled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
