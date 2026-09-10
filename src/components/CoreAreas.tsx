import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Stage {
  num: string;
  title: string;
  flowNode: string;
  description: string;
  capabilities: string[];
}

const STAGES: Stage[] = [
  {
    num: '01',
    title: 'INVENTORY & CONTROL',
    flowNode: 'STOCK',
    description:
      'Tracking stock movement, reconciliation and replenishment to maintain inventory visibility.',
    capabilities: [
      'Inventory Management',
      'Inventory Control',
      'Inventory Planning',
      'Stock Replenishment',
    ],
  },
  {
    num: '02',
    title: 'SOURCING & PARTNERS',
    flowNode: 'SOURCE',
    description:
      'Working with suppliers through pricing analysis, vendor coordination and replenishment requirements.',
    capabilities: ['Procurement', 'Vendor Management'],
  },
  {
    num: '03',
    title: 'FULFILLMENT & LOGISTICS',
    flowNode: 'FULFILL',
    description:
      'Following orders through fulfillment, delivery coordination and reverse logistics.',
    capabilities: [
      'Order Management',
      'Order Fulfillment',
      'Reverse Logistics',
      '3PL Coordination',
    ],
  },
  {
    num: '04',
    title: 'REPORTING & OPERATIONS',
    flowNode: 'IMPROVE',
    description:
      'Using operational reporting and spreadsheet analysis to organize information and support performance tracking.',
    capabilities: [
      'Operational Reporting',
      'Process Improvement',
      'Excel-based Analysis',
      'Power BI',
    ],
  },
];

const FLOW_NODES = [
  { label: 'SUPPLIER', matches: [1] },
  { label: 'SOURCE', matches: [1] },
  { label: 'STOCK', matches: [0] },
  { label: 'FULFILL', matches: [2] },
  { label: 'IMPROVE', matches: [3] },
];

export const CoreAreas: React.FC = () => {
  // 01 is open by default
  const [activeStage, setActiveStage] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveStage((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="focus"
      className="py-16 bg-[#FAFAFC] relative border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Minimal Vertical Footprint */}
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

          {/* Small Editorial Flow Annotation */}
          <div
            className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-white border border-slate-200/80 text-[11px] font-mono font-bold text-[#64748B] self-start md:self-end"
            aria-label="Supply chain flow"
          >
            <span className="text-[10px] uppercase text-[#94A3B8] font-mono tracking-wider pr-1">
              FLOW:
            </span>
            {FLOW_NODES.map((node, i) => {
              const isNodeActive =
                activeStage !== null && node.matches.includes(activeStage);

              return (
                <React.Fragment key={node.label}>
                  <span
                    className={`transition-colors ${
                      isNodeActive
                        ? 'text-[#4338CA] font-black underline decoration-[#F59E0B] decoration-2 underline-offset-4'
                        : 'text-[#64748B]'
                    }`}
                  >
                    {node.label}
                  </span>
                  {i < FLOW_NODES.length - 1 && (
                    <span className="text-slate-300 select-none">→</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: HORIZONTAL MAP + COMPACT ACCORDION DETAIL DIRECTLY UNDERNEATH */}
        {/* ========================================================================= */}
        <div className="hidden md:block">
          {/* Connector line behind stages */}
          <div className="relative">
            <div
              className="absolute top-1/2 left-10 right-10 -translate-y-1/2 h-0.5 bg-slate-200 z-0"
              aria-hidden="true"
            />

            {/* 4 Connected Stages */}
            <div className="grid grid-cols-4 gap-3 relative z-10" role="tablist">
              {STAGES.map((stage, idx) => {
                const isOpen = activeStage === idx;

                return (
                  <button
                    key={stage.num}
                    id={`ops-stage-btn-desktop-${idx}`}
                    type="button"
                    role="button"
                    aria-expanded={isOpen}
                    aria-controls="ops-desktop-panel"
                    tabIndex={0}
                    onClick={() => handleToggle(idx)}
                    className={`text-left p-3.5 rounded-xl transition-all duration-150 cursor-pointer flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4338CA] focus-visible:ring-offset-2 ${
                      isOpen
                        ? 'bg-white border-2 border-[#4338CA] shadow-sm'
                        : 'bg-white/90 hover:bg-white border border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`font-mono text-xl font-black transition-colors ${
                          isOpen ? 'text-[#4338CA]' : 'text-[#94A3B8]'
                        }`}
                      >
                        {stage.num}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isOpen ? 'bg-[#F59E0B]' : 'bg-slate-200'
                        }`}
                      />
                    </div>

                    <div className="text-xs font-extrabold text-[#0F172A] tracking-tight leading-tight">
                      {stage.title}
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                      <span className="uppercase text-[#D97706] font-bold">
                        {stage.flowNode}
                      </span>
                      <span>{isOpen ? 'Close ↑' : 'Open ↓'}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Compact Accordion Detail Panel (Appears directly below the 4 stages) */}
          {activeStage !== null && (
            <div
              id="ops-desktop-panel"
              role="region"
              aria-labelledby={`ops-stage-btn-desktop-${activeStage}`}
              className="mt-3 p-5 bg-white rounded-2xl border border-[#C7D2FE] shadow-2xs relative transition-all duration-200"
            >
              {/* Subtle Pointer Indicator on Active Stage */}
              <div
                className="absolute -top-1.5 w-3 h-3 bg-white border-t border-l border-[#C7D2FE] rotate-45 transition-all duration-200"
                style={{
                  left: `calc(${activeStage * 25}% + 12.5% - 6px)`,
                }}
              />

              <div className="flex items-start justify-between gap-6">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-[#4338CA]">
                      {STAGES[activeStage].num}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] tracking-tight">
                      {STAGES[activeStage].title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    “{STAGES[activeStage].description}”
                  </p>
                </div>

                {/* Inline Capabilities */}
                <div className="text-right shrink-0 border-l border-slate-100 pl-6 space-y-1">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748B]">
                    Capabilities
                  </div>
                  <div className="text-xs text-[#0F172A] font-semibold flex flex-wrap justify-end gap-x-2 gap-y-0.5 max-w-xs">
                    {STAGES[activeStage].capabilities.map((cap, i) => (
                      <span key={cap} className="inline-flex items-center gap-1.5">
                        <span>{cap}</span>
                        {i < STAGES[activeStage].capabilities.length - 1 && (
                          <span className="text-slate-300 font-normal">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: VERTICAL CONNECTED ACCORDION */}
        {/* ========================================================================= */}
        <div className="block md:hidden space-y-2.5">
          {STAGES.map((stage, idx) => {
            const isOpen = activeStage === idx;

            return (
              <div
                key={stage.num}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs"
              >
                <button
                  id={`ops-stage-btn-mobile-${idx}`}
                  type="button"
                  role="button"
                  aria-expanded={isOpen}
                  aria-controls={`ops-mobile-panel-${idx}`}
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left p-3.5 flex items-center justify-between gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4338CA]"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`font-mono text-base font-black ${
                        isOpen ? 'text-[#4338CA]' : 'text-[#94A3B8]'
                      }`}
                    >
                      {stage.num}
                    </span>
                    <div>
                      <div className="text-xs font-extrabold text-[#0F172A]">
                        {stage.title}
                      </div>
                      <div className="text-[10px] font-mono text-[#D97706] font-bold">
                        {stage.flowNode}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#64748B]">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#4338CA]" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`ops-mobile-panel-${idx}`}
                    role="region"
                    aria-labelledby={`ops-stage-btn-mobile-${idx}`}
                    className="px-3.5 pb-4 pt-1 border-t border-slate-100 text-xs text-[#334155] space-y-2 bg-[#F8FAFC]"
                  >
                    <p className="leading-relaxed">“{stage.description}”</p>

                    <div className="pt-2 border-t border-slate-200/80">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748B] mb-1">
                        Capabilities:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {stage.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-medium text-[#0F172A]"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
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
