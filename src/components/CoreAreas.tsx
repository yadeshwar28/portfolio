import React, { useState, useRef } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface SupplyStage {
  id: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  operationalAnchor: string;
}

const SUPPLY_STAGES: SupplyStage[] = [
  {
    id: 'supplier',
    num: '01',
    name: 'SUPPLIER',
    tagline: 'Vendor Management & Reliability',
    description:
      'Maintaining direct vendor communication, verifying supply lead times, and monitoring supplier reliability to secure predictable stock replenishment across partner networks.',
    capabilities: [
      'Vendor Management',
      'Procurement Coordination',
      'Stock Replenishment',
    ],
    operationalAnchor: 'Vendor coordination and replenishment cycles at HealthTrack Sports & Team Taara',
  },
  {
    id: 'procurement',
    num: '02',
    name: 'PROCUREMENT',
    tagline: 'Sourcing & Purchase Orders',
    description:
      'Structuring purchase orders, tracking supplier commitments, and aligning incoming delivery timelines to balance customer demand against replenishment lead times.',
    capabilities: [
      'Procurement',
      'Supplier Coordination',
      'Purchase Orders',
    ],
    operationalAnchor: 'Procurement workflows modeled in StockFlow and vendor operations',
  },
  {
    id: 'inventory',
    num: '03',
    name: 'INVENTORY',
    tagline: 'Inventory Control & Planning',
    description:
      'Tracking physical stock against digital records, calculating buffer thresholds, and logging stock movements to protect order fulfillment from stockouts and dead inventory.',
    capabilities: [
      'Inventory Management',
      'Inventory Control',
      'Inventory Planning',
      'Stock Replenishment',
    ],
    operationalAnchor: '500+ items reconciled at HealthTrack Sports & smart catalog in StockFlow',
  },
  {
    id: 'fulfillment',
    num: '04',
    name: 'FULFILLMENT',
    tagline: 'Order Management & 3PL Logistics',
    description:
      'Managing order dispatches, coordinating 4–6 courier partners, resolving delivery escalations, and processing customer returns through disciplined reverse logistics.',
    capabilities: [
      'Order Management',
      'Order Fulfillment',
      '3PL Coordination',
      'Reverse Logistics',
    ],
    operationalAnchor: '35+ daily orders dispatched & 10–25 weekly escalations resolved at HealthTrack',
  },
];

export const CoreAreas: React.FC = () => {
  // Default stage is INVENTORY (index 2) as requested for Operations & Supply Chain positioning
  const [activeStageIdx, setActiveStageIdx] = useState<number>(2);
  const stageRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeStage = SUPPLY_STAGES[activeStageIdx];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIdx = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIdx = (index + 1) % SUPPLY_STAGES.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIdx = (index - 1 + SUPPLY_STAGES.length) % SUPPLY_STAGES.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIdx = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIdx = SUPPLY_STAGES.length - 1;
    }
    if (nextIdx !== index) {
      setActiveStageIdx(nextIdx);
      stageRefs.current[nextIdx]?.focus();
    }
  };

  return (
    <section
      id="focus"
      className="py-16 bg-[#FAFAFC] relative border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#4338CA] mb-1.5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#F59E0B] inline-block" />
              <span>OPERATIONS, IN PRACTICE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Where I Work in the Supply Chain
            </h2>
            <p className="text-[#475569] mt-1.5 text-sm sm:text-base leading-relaxed">
              Practical operational domains built through hands-on reconciliation, vendor coordination,
              order fulfillment, reverse logistics and reporting.
            </p>
          </div>

          {/* System Status Editorial Detail */}
          <div
            id="system-status-detail"
            className="inline-flex items-center gap-2.5 py-1.5 px-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs self-start md:self-end"
            aria-label="Supply Chain View: Follow the movement"
          >
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97706]" />
              </span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#312E81]">
                SUPPLY CHAIN VIEW
              </span>
            </div>
            <span className="text-slate-300 select-none">|</span>
            <span className="text-[11px] font-medium text-[#64748B]">
              Trace the flow
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP EXPERIENCE: “SUPPLY CHAIN IN MOTION” HORIZONTAL PATHWAY */}
        {/* ========================================================================= */}
        <div className="hidden md:block">
          <div className="relative pt-4 pb-2">
            {/* SVG Connecting Flow Track */}
            <div className="absolute top-[38px] left-[12.5%] right-[12.5%] h-6 -translate-y-1/2 pointer-events-none z-0">
              <svg
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 24"
              >
                {/* Base passive track */}
                <line
                  x1="0"
                  y1="12"
                  x2="100"
                  y2="12"
                  stroke="#E2E8F0"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Animated Flow Motion Track */}
                <line
                  x1="0"
                  y1="12"
                  x2="100"
                  y2="12"
                  stroke="#C7D2FE"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  className="animate-flow-dash"
                  strokeLinecap="round"
                />

                {/* Progress line up to active stage */}
                <line
                  x1="0"
                  y1="12"
                  x2={`${(activeStageIdx / (SUPPLY_STAGES.length - 1)) * 100}%`}
                  y2="12"
                  stroke="#312E81"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="transition-all duration-300 ease-out"
                />
              </svg>
            </div>

            {/* 4 Connected Stages */}
            <div
              className="grid grid-cols-4 gap-4 relative z-10"
              role="tablist"
              aria-label="Supply chain stages"
            >
              {SUPPLY_STAGES.map((stage, idx) => {
                const isActive = activeStageIdx === idx;

                return (
                  <button
                    key={stage.id}
                    ref={(el) => {
                      stageRefs.current[idx] = el;
                    }}
                    id={`supply-chain-node-${stage.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="ops-stage-detail-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveStageIdx(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className={`text-left p-4 rounded-2xl transition-all duration-200 cursor-pointer flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#312E81] focus-visible:ring-offset-2 ${
                      isActive
                        ? 'bg-white border-2 border-[#312E81] shadow-md shadow-indigo-950/5 scale-[1.02]'
                        : 'bg-white/80 hover:bg-white border border-slate-200/90 hover:border-slate-300 opacity-75 hover:opacity-100'
                    }`}
                  >
                    {/* Top Node Indicator & Stage Step */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-black transition-all ${
                            isActive
                              ? 'bg-[#312E81] text-[#FBBF24] ring-4 ring-[#F59E0B]/30 shadow-xs'
                              : 'bg-slate-100 text-slate-500 border border-slate-200'
                          }`}
                        >
                          {stage.num}
                        </div>
                        {isActive && (
                          <span className="inline-block w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                        )}
                      </div>

                      <span
                        className={`text-[11px] font-mono font-bold uppercase tracking-wider transition-colors ${
                          isActive ? 'text-[#D97706]' : 'text-[#94A3B8]'
                        }`}
                      >
                        STAGE {idx + 1}
                      </span>
                    </div>

                    {/* Stage Name & Tagline */}
                    <div>
                      <div
                        className={`font-black text-base tracking-tight transition-colors ${
                          isActive ? 'text-[#0F172A]' : 'text-[#475569]'
                        }`}
                      >
                        {stage.name}
                      </div>
                      <div
                        className={`text-xs mt-0.5 line-clamp-1 transition-colors ${
                          isActive ? 'text-[#4338CA] font-semibold' : 'text-[#64748B]'
                        }`}
                      >
                        {stage.tagline}
                      </div>
                    </div>

                    {/* Bottom Status Ribbon */}
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                      <span
                        className={`font-bold transition-colors ${
                          isActive ? 'text-[#312E81]' : 'text-[#94A3B8]'
                        }`}
                      >
                        {isActive ? 'Active Stage' : 'Select to trace'}
                      </span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isActive
                            ? 'text-[#F59E0B] translate-x-0.5'
                            : 'text-slate-300 group-hover:translate-x-0.5'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Compact Information Area */}
          <div
            id="ops-stage-detail-panel"
            role="tabpanel"
            aria-labelledby={`supply-chain-node-${activeStage.id}`}
            className="mt-3 p-6 bg-white rounded-2xl border border-[#C7D2FE] shadow-sm relative transition-all duration-300"
          >
            {/* Subtle Triangular Pointer Notch Aligned to Active Node */}
            <div
              className="absolute -top-2 w-4 h-4 bg-white border-t border-l border-[#C7D2FE] rotate-45 transition-all duration-300 ease-out"
              style={{
                left: `calc(${activeStageIdx * 25}% + 12.5% - 8px)`,
              }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Stage Detail & Operational Perspective */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-2 py-0.5 rounded-md bg-[#EEF2FF] text-[#312E81] font-mono text-xs font-black border border-[#C7D2FE]">
                    STAGE {activeStage.num}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#0F172A] tracking-tight">
                    {activeStage.name} — {activeStage.tagline}
                  </h3>
                </div>

                <p className="text-sm text-[#334155] leading-relaxed">
                  {activeStage.description}
                </p>

                {/* Practical Portfolio Anchor */}
                <div className="pt-2 flex items-start gap-2 text-xs text-[#4338CA] font-medium bg-[#F8F9FE] p-3 rounded-xl border border-[#E0E7FF]">
                  <span className="font-mono font-bold uppercase text-[10px] text-[#D97706] tracking-wider shrink-0 mt-0.5">
                    PRACTICE:
                  </span>
                  <span>{activeStage.operationalAnchor}</span>
                </div>
              </div>

              {/* Right Column: Key Factual Capabilities */}
              <div className="lg:col-span-5 lg:border-l lg:border-slate-100 lg:pl-6 space-y-2.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748B] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                  <span>CORE CAPABILITIES IN PRACTICE</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeStage.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-slate-200/90 text-xs font-semibold text-[#0F172A] shadow-2xs hover:border-[#312E81] transition-colors"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                <div className="text-[11px] text-[#64748B] pt-1">
                  Connected directly with live portfolio workflows and verified operational metrics.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE EXPERIENCE: COMPACT VERTICAL PATHWAY (ZERO HORIZONTAL OVERFLOW) */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          <div className="relative pl-6 space-y-3">
            {/* Continuous Vertical Connecting Line */}
            <div
              className="absolute top-4 bottom-4 left-3 w-0.5 bg-slate-200 z-0"
              aria-hidden="true"
            >
              {/* Progress Line */}
              <div
                className="w-full bg-[#312E81] transition-all duration-300"
                style={{
                  height: `${((activeStageIdx + 1) / SUPPLY_STAGES.length) * 100}%`,
                }}
              />
            </div>

            {/* Stage Accordion Items */}
            {SUPPLY_STAGES.map((stage, idx) => {
              const isActive = activeStageIdx === idx;

              return (
                <div
                  key={stage.id}
                  className={`relative rounded-xl transition-all duration-200 overflow-hidden ${
                    isActive
                      ? 'bg-white border-2 border-[#312E81] shadow-xs'
                      : 'bg-white/90 border border-slate-200/90'
                  }`}
                >
                  {/* Absolute Timeline Dot */}
                  <div
                    className={`absolute -left-6 top-4 -translate-x-1/2 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors z-10 ${
                      isActive
                        ? 'bg-[#312E81] border-[#F59E0B]'
                        : 'bg-white border-slate-300'
                    }`}
                  >
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />}
                  </div>

                  <button
                    id={`supply-chain-node-mobile-${stage.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`ops-mobile-detail-${stage.id}`}
                    onClick={() => setActiveStageIdx(idx)}
                    className="w-full text-left p-3.5 flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#312E81]"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-sm font-black ${
                          isActive ? 'text-[#312E81]' : 'text-[#94A3B8]'
                        }`}
                      >
                        {stage.num}
                      </span>
                      <div>
                        <div
                          className={`text-xs font-black tracking-tight ${
                            isActive ? 'text-[#0F172A]' : 'text-[#475569]'
                          }`}
                        >
                          {stage.name}
                        </div>
                        <div className="text-[11px] text-[#64748B]">
                          {stage.tagline}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[10px] font-mono font-bold uppercase ${
                          isActive ? 'text-[#D97706]' : 'text-[#94A3B8]'
                        }`}
                      >
                        {isActive ? 'Active' : 'Tap'}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'rotate-90 text-[#312E81]' : 'text-slate-400'
                        }`}
                      />
                    </div>
                  </button>

                  {/* Active Panel Details Inline */}
                  {isActive && (
                    <div
                      id={`ops-mobile-detail-${stage.id}`}
                      role="tabpanel"
                      aria-labelledby={`supply-chain-node-mobile-${stage.id}`}
                      className="px-3.5 pb-4 pt-1 border-t border-slate-100 bg-[#F8FAFC] space-y-2.5 text-xs text-[#334155]"
                    >
                      <p className="leading-relaxed">{stage.description}</p>

                      <div className="pt-2 border-t border-slate-200/70">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                          Capabilities in Practice:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {stage.capabilities.map((cap) => (
                            <span
                              key={cap}
                              className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-[#0F172A]"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-[10px] text-[#4338CA] font-medium bg-white p-2 rounded-lg border border-slate-200/80">
                        <span className="font-bold text-[#D97706] uppercase mr-1">Anchor:</span>
                        {stage.operationalAnchor}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
