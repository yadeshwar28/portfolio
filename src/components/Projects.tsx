import React, { useState } from 'react';
import { ExternalLink, ArrowRight, ChevronUp } from 'lucide-react';

interface ProjectDetailItem {
  id: string;
  num: string;
  title: string;
  category: string;
  categoryFilter: 'challenges' | 'automation' | 'venture' | 'supply-chain';
  flowAnnotation: string;
  shortContext: string;
  primaryMetric: {
    value: string;
    label: string;
    sublabel?: string;
  };
  details: string[];
  liveUrl?: string;
  liveButtonText?: string;
  extraMeta?: string;
}

const SUPPORTING_PROJECTS: ProjectDetailItem[] = [
  {
    id: 'drop-shipping-taara',
    num: '01',
    title: 'Team Taara | Drop-Shipping Challenge',
    category: 'Competitions & Challenges',
    categoryFilter: 'challenges',
    flowAnnotation: 'SOURCE → STORE → PAY → SELL',
    shortContext:
      'High-intensity business challenge focused on crystals and gemstones. Managed product sourcing, e-commerce storefront development, and payment gateway integration.',
    primaryMetric: {
      value: '₹97K',
      label: 'TEAM REVENUE',
      sublabel: 'GENERATED IN ONE DAY',
    },
    details: [
      'Product sourcing and vendor/supplier coordination',
      'Built an e-commerce website for the venture',
      'Integrated Razorpay as the payment gateway',
      'Generated ₹97,000 team revenue in one day (Team Revenue)',
    ],
    extraMeta: 'Product: Crystals & Gemstones',
  },
  {
    id: 'stockflow',
    num: '02',
    title: 'StockFlow | AI-Powered Smart Inventory',
    category: 'Supply Chain & Operations',
    categoryFilter: 'supply-chain',
    flowAnnotation: 'INVENTORY → FORECAST → REORDER → PROCUREMENT',
    shortContext:
      'Dedicated smart inventory & procurement management system specifically modeled around sports retail dynamics, covering stock movement and automated reorders.',
    primaryMetric: {
      value: '15',
      label: 'SKUs MODELED',
      sublabel: 'SPORTS RETAIL DYNAMICS',
    },
    details: [
      'AI-powered inventory/procurement management system designed around sports retail inventory',
      'Covered 15 SKUs with stock movement and inventory valuation',
      'Low-stock alerts, AI demand forecasting & AI reorder recommendations',
      'Purchase orders, goods receiving, supplier invoices, payments & supplier management',
      'Inventory reports and analytics dashboards',
    ],
    liveUrl: 'https://stockflow-inventory-gfw0.onrender.com/',
    liveButtonText: 'Live Project',
  },
  {
    id: 'proptech-automation',
    num: '03',
    title: 'PropTech Automation Workflow',
    category: 'Workflow Automation',
    categoryFilter: 'automation',
    flowAnnotation: 'WEBHOOK → FILTER → POC MATCH → NOTIFY',
    shortContext:
      'Team project as part of Sector Map activity. Built and ran a Make.com event-driven automation scenario based on the PropTech sector.',
    primaryMetric: {
      value: 'Make.com',
      label: 'AUTOMATION SCENARIO',
      sublabel: 'EVENT-DRIVEN DISPATCH',
    },
    details: [
      'Team project as part of Sector Map activity',
      'Built a Make.com automation workflow based on the PropTech sector',
      'Created and ran the workflow',
      'Demonstrated the workflow and explained the modules/nodes',
    ],
    liveUrl:
      'https://eu1.make.com/public/shared-scenario/UIApBIQz0dG/property-visit-notify-customer-of-poc',
    liveButtonText: 'View Workflow',
  },
  {
    id: 'vaishnav-bazaar',
    num: '04',
    title: 'Vaishnav Bazaar | Student Business Venture',
    category: 'Student Ventures',
    categoryFilter: 'venture',
    flowAnnotation: 'VENDOR SOURCING → 80% BILLING → LEFTOVER REDUCTION',
    shortContext:
      'Hands-on student business venture managing wholesale vendor pricing analysis, inventory leftover minimization, and verified purchase-bill documentation.',
    primaryMetric: {
      value: '₹44.3K',
      label: 'REVENUE',
      sublabel: '120+ CUSTOMERS · 20% REPEAT',
    },
    details: [
      'Negotiated with 10+ vendors by analyzing supplier pricing',
      'Maintained 80% purchase-bill records for customer transactions',
      'Reduced inventory leftovers through supplier coordination/product selection',
      'Generated ₹44,300 revenue from 120+ customers',
      '20% repeat customers',
    ],
    extraMeta: 'Role: Founder & Operations Lead',
  },
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  const isOdcVisible = activeFilter === 'all' || activeFilter === 'challenges';

  const visibleSupporting = SUPPORTING_PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'challenges') return p.categoryFilter === 'challenges';
    if (activeFilter === 'automation') return p.categoryFilter === 'automation';
    if (activeFilter === 'venture') return p.categoryFilter === 'venture';
    return false;
  });

  const filterTabs = [
    { id: 'all', label: 'ALL PROJECTS', testId: 'project-filter-all' },
    {
      id: 'challenges',
      label: 'COMPETITIONS & CHALLENGES',
      testId: 'project-filter-challenges',
    },
    {
      id: 'automation',
      label: 'WORKFLOW AUTOMATION',
      testId: 'project-filter-automation',
    },
    {
      id: 'venture',
      label: 'STUDENT VENTURES',
      testId: 'project-filter-venture',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-[#FAFAFC] relative border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-[#F59E0B] inline-block" />
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#4338CA]">
                PORTFOLIO
              </span>
              <span className="text-slate-300">/</span>
              <span className="text-[11px] font-mono text-[#64748B] tracking-wider uppercase">
                FEATURED WORK &amp; SELECTED PROJECTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Projects &amp; Case Studies
            </h2>
            <p className="text-[#475569] mt-2 text-base leading-relaxed">
              Real problem-solving, strategic challenges, and practical initiatives demonstrating analytical and operational execution.
            </p>
          </div>

          {/* Real Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter portfolio projects"
            className="flex flex-wrap gap-2 self-start lg:self-end"
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  id={tab.testId}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4338CA] ${
                    isActive
                      ? 'bg-[#4338CA] text-white shadow-xs'
                      : 'bg-white text-[#475569] hover:text-[#0F172A] border border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FEATURED PROJECT: ODC CHALLENGE — GOSTOP */}
        {/* ========================================================================= */}
        {isOdcVisible && (
          <div className="mb-14">
            <div
              id="featured-odc-project"
              className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-2xs relative overflow-hidden"
            >
              {/* Subtle top edge accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4338CA] via-[#6366F1] to-[#F59E0B]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Project & Artefact details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#4338CA]">
                      FEATURED PROJECT
                    </span>
                    <span className="text-slate-300">/</span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D97706]">
                      Top 20 — Entire Cohort
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                    ODC Challenge — GoStop
                  </h3>

                  <p className="text-base text-[#475569] leading-relaxed max-w-2xl">
                    A strategy project developed for goSTOPS around creating incremental demand during the July–September period.
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-mono font-bold text-[#0F172A]">
                        15-Slide Strategy Presentation
                      </div>
                    </div>

                    <a
                      id="view-odc-presentation-btn"
                      href="https://drive.google.com/drive/folders/1hr-5nku4zTMqReztNyktp06uk8wN5pzT?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#4338CA] hover:text-[#312E81] transition-colors cursor-pointer group"
                    >
                      <span className="group-hover:underline">VIEW PRESENTATION →</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Editorial Achievement Focal Point */}
                <div className="lg:col-span-5 bg-[#F8FAFC] p-6 sm:p-8 rounded-xl border border-slate-200/90 flex items-center justify-between relative overflow-hidden">
                  <div className="space-y-1 z-10">
                    <div className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                      RUNNER-UP
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-[#4338CA] tracking-tight">
                      2ND PLACE
                    </div>
                    <div className="pt-2 text-xs sm:text-sm font-mono font-bold text-[#D97706]">
                      Top 20 — Entire Cohort
                    </div>
                  </div>

                  {/* Strong Editorial "02" Visual Element */}
                  <div
                    className="font-mono text-7xl sm:text-8xl font-black text-[#4338CA]/15 leading-none select-none pl-4 shrink-0"
                    aria-hidden="true"
                  >
                    02
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. SELECTED PROJECTS (Varied Editorial Grid for Remaining Work) */}
        {/* ========================================================================= */}
        {visibleSupporting.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#64748B]">
                SELECTED WORK
              </span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visibleSupporting.map((project) => {
                const isExpanded = expandedProjectId === project.id;

                return (
                  <div
                    key={project.id}
                    id={`project-card-${project.id}`}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-xs transition duration-150 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Number, Category, and Flow Annotation */}
                      <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-base font-black text-[#4338CA]">
                            {project.num}
                          </span>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748B]">
                            {project.category}
                          </span>
                        </div>
                        {project.extraMeta && (
                          <span className="text-[11px] font-mono text-[#D97706] font-bold">
                            {project.extraMeta}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight mb-2">
                        {project.title}
                      </h3>

                      {/* Small Editorial System-Flow Annotation */}
                      <div className="text-[10px] font-mono font-bold text-[#4338CA] tracking-wider mb-3 bg-[#F8FAFC] px-2.5 py-1 rounded inline-block border border-slate-200/60">
                        {project.flowAnnotation}
                      </div>

                      {/* Short Context */}
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                        {project.shortContext}
                      </p>

                      {/* Single Strong Evidence Metric Box */}
                      <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between mb-4">
                        <div>
                          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748B]">
                            {project.primaryMetric.label}
                          </div>
                          {project.primaryMetric.sublabel && (
                            <div className="text-[10px] font-mono text-[#94A3B8]">
                              {project.primaryMetric.sublabel}
                            </div>
                          )}
                        </div>
                        <div className="text-lg sm:text-xl font-mono font-black text-[#0F172A]">
                          {project.primaryMetric.value}
                        </div>
                      </div>
                    </div>

                    {/* Actions & Inline Expandable Details */}
                    <div>
                      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <button
                          id={`toggle-details-${project.id}-btn`}
                          type="button"
                          aria-expanded={isExpanded}
                          aria-controls={`project-details-${project.id}`}
                          onClick={() => toggleDetails(project.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold text-[#4338CA] hover:text-[#3730A3] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4338CA]"
                        >
                          <span>{isExpanded ? 'HIDE DETAILS' : 'VIEW DETAILS'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {project.liveUrl && (
                          <a
                            id={`live-url-${project.id}-btn`}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#F8FAFC] hover:bg-slate-100 text-[11px] font-mono font-bold text-[#0F172A] border border-slate-200 transition-colors"
                          >
                            <span>{project.liveButtonText || 'Open Project'}</span>
                            <ExternalLink className="w-3 h-3 text-[#64748B]" />
                          </a>
                        )}
                      </div>

                      {/* Inline Expanded Detail Box */}
                      {isExpanded && (
                        <div
                          id={`project-details-${project.id}`}
                          role="region"
                          aria-labelledby={`toggle-details-${project.id}-btn`}
                          className="mt-4 pt-4 border-t border-slate-200/80 text-xs text-[#334155] space-y-2 bg-[#F8FAFC] p-4 rounded-xl animate-fadeIn"
                        >
                          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4338CA]">
                            Project Breakdown &amp; Facts:
                          </div>
                          <ul className="space-y-1.5">
                            {project.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-[#4338CA] mt-1.5 shrink-0" />
                                <span className="leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
