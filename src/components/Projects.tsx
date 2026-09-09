import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2, Terminal, Activity, FileText } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const featuredProject = PROJECTS.find((p) => p.id === 'stockflow') || PROJECTS[0];
  const supportingProjects = PROJECTS.filter((p) => p.id !== 'stockflow');

  const filteredSupporting = supportingProjects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'challenges') return p.category.includes('Challenge');
    if (activeFilter === 'automation') return p.category.includes('Automation');
    if (activeFilter === 'venture') return p.category.includes('Venture');
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#4338CA] mb-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#F59E0B] inline-block" />
              <span>COLLEGE &amp; APPLIED WORK SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Featured Projects &amp; Ventures
            </h2>
            <p className="text-[#475569] mt-2 text-base max-w-xl">
              Real functional applications, business competitions, campus commerce ventures, and process workflows.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'challenges', label: 'Competitions & Challenges' },
              { id: 'automation', label: 'Workflow Automation' },
              { id: 'venture', label: 'Student Ventures' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#4338CA] text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-[#EEF2FF] text-[#475569]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {/* FEATURED HERO PROJECT: STOCKFLOW */}
          <div
            id="featured-project-stockflow"
            className="bg-[#F1F0FB] rounded-3xl p-8 sm:p-12 border border-[#C7D2FE] shadow-md relative overflow-hidden group hover:shadow-2xl transition duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Visual Terminal / Live Application Schematic Placeholder Container */}
              <div
                className="lg:col-span-6 bg-[#151336] rounded-2xl p-6 border border-[#4338CA] shadow-inner text-white font-mono relative overflow-hidden group-hover:border-[#F59E0B] transition"
                aria-label="StockFlow application interactive placeholder container"
              >
                {/* Terminal Window Chrome */}
                <div className="flex items-center justify-between border-b border-[#312E81] pb-3 mb-4 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-[#C7D2FE] text-[11px] ml-1">stockflow_sports_retail.py</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                    LIVE ON RENDER
                  </span>
                </div>

                {/* Interactive Schematic Data Vis Container */}
                <div className="space-y-3.5">
                  <div className="flex justify-between text-xs text-[#94A3B8]">
                    <span>CATALOG: SPORTS RETAIL</span>
                    <span className="text-[#FBBF24] font-bold">15 ACTIVE SKUs</span>
                  </div>

                  {/* Synthetic Inventory Waveform & Reorder Vector */}
                  <div className="h-28 bg-[#312E81]/60 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden border border-[#4338CA]/60">
                    <svg className="w-full h-16" fill="none" viewBox="0 0 320 60">
                      {/* Safety threshold line */}
                      <line
                        stroke="#F59E0B"
                        strokeDasharray="4 4"
                        strokeWidth="1.5"
                        x1="0"
                        x2="320"
                        y1="30"
                        y2="30"
                      />
                      {/* Movement curves */}
                      <path
                        d="M0,12 Q40,16 80,42 T160,22 T240,46 T320,18"
                        fill="none"
                        stroke="#818CF8"
                        strokeWidth="2.5"
                      />
                      <circle cx="80" cy="42" fill="#F59E0B" r="4" />
                      <circle cx="240" cy="46" fill="#10B981" r="4" />
                    </svg>
                    <div className="flex justify-between text-[10px] text-[#C7D2FE]">
                      <span>Batch Goods Receipt</span>
                      <span className="text-[#FBBF24] font-bold">Smart Reorder Trigger</span>
                      <span>Invoice Settlement</span>
                    </div>
                  </div>

                  {/* Operational Telemetry Highlights */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-[#312E81]/80 p-2 rounded-lg border border-[#4338CA]/50">
                      <div className="text-[10px] text-[#94A3B8]">Workflows</div>
                      <div className="text-sm font-bold text-emerald-400">13 Modules</div>
                    </div>
                    <div className="bg-[#312E81]/80 p-2 rounded-lg border border-[#4338CA]/50">
                      <div className="text-[10px] text-[#94A3B8]">Alerts</div>
                      <div className="text-sm font-bold text-[#FBBF24]">Low-Stock</div>
                    </div>
                    <div className="bg-[#312E81]/80 p-2 rounded-lg border border-[#4338CA]/50">
                      <div className="text-[10px] text-[#94A3B8]">Forecasting</div>
                      <div className="text-sm font-bold text-white">AI Demand</div>
                    </div>
                  </div>

                  {/* Real Screenshot Placeholder Container Indicator */}
                  <div className="p-2 rounded-lg bg-white/5 border border-dashed border-white/20 text-center text-[10px] text-[#C7D2FE]/80">
                    <span>Project Screenshot Container • Production Render Deployment</span>
                  </div>
                </div>
              </div>

              {/* Project Narrative & Details */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#EEF2FF] text-[#4338CA] rounded-full text-xs font-bold uppercase tracking-wider border border-[#C7D2FE]">
                    Featured Technology Project
                  </span>
                  <span className="text-xs font-mono text-[#475569]">Supply Chain / Tech</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
                  {featuredProject.title}
                </h3>

                <p className="text-sm text-[#334155] leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Structured Story Highlights */}
                <div className="space-y-2.5 pt-1 text-xs">
                  <div className="flex items-start gap-2">
                    <strong className="text-[#312E81] min-w-[70px]">Category:</strong>
                    <span className="text-[#475569]">{featuredProject.category}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <strong className="text-[#312E81] min-w-[70px]">Scope:</strong>
                    <span className="text-[#475569]">
                      15 sports SKUs, stock movements, inventory valuation, low-stock alerts, AI demand forecasting, smart reorder, purchase orders, goods receiving, invoices &amp; payments.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <strong className="text-[#312E81] min-w-[70px]">Outcome:</strong>
                    <span className="text-emerald-700 font-bold">
                      Live deployment on Render with interactive procurement cycles and supplier performance tracking.
                    </span>
                  </div>
                </div>

                {/* Project Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  {featuredProject.liveUrl && (
                    <a
                      id="view-live-stockflow-btn"
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-extrabold text-xs uppercase tracking-wider transition shadow-sm"
                    >
                      <span>View Live Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    id="open-stockflow-details-btn"
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-flex items-center space-x-1.5 px-5 py-3 rounded-full bg-white border border-slate-200 hover:border-[#4338CA] text-xs font-bold text-[#4338CA] transition shadow-xs"
                  >
                    <span>Inspect Full Story</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SUPPORTING PROJECTS (Asymmetric Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSupporting.map((project) => {
              const isTaara = project.id === 'drop-shipping-taara';
              const isPropTech = project.id === 'proptech-automation';
              const isBazaar = project.id === 'vaishnav-bazaar';
              const isODC = project.id === 'odc-challenge';

              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className="bg-white rounded-3xl p-8 border border-[#E0E7FF] shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Placeholder / Artefact Graphic Container */}
                    <div
                      className={`w-full h-44 rounded-2xl p-5 flex flex-col justify-between text-white mb-6 border relative overflow-hidden ${
                        isTaara
                          ? 'bg-gradient-to-br from-[#B45309] to-[#F59E0B] border-[#D97706]'
                          : isODC
                          ? 'bg-gradient-to-br from-[#312E81] to-[#4338CA] border-[#3730A3]'
                          : isPropTech
                          ? 'bg-gradient-to-br from-[#1E293B] to-[#334155] border-slate-700'
                          : 'bg-gradient-to-br from-[#2A2770] to-[#151336] border-[#4338CA]'
                      }`}
                    >
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-[#FBBF24] font-bold uppercase">{project.category}</span>
                        <span className="bg-white/20 px-2 py-0.5 rounded text-white text-[10px] font-bold">
                          {isTaara
                            ? 'DLF EVENT'
                            : isODC
                            ? 'GOSTOP ODC'
                            : isPropTech
                            ? 'MAKE.COM'
                            : 'CAMPUS VENTURE'}
                        </span>
                      </div>

                      {/* Graphic Visual Representation */}
                      <div className="text-center py-1">
                        {isTaara && (
                          <div>
                            <div className="text-3xl font-black text-white tracking-tight">₹97,000</div>
                            <div className="text-xs text-[#EEF2FF] font-semibold">
                              Team Revenue in 1 Day (Crystals &amp; Gemstones)
                            </div>
                          </div>
                        )}
                        {isODC && (
                          <div>
                            <div className="text-2xl font-black text-[#FBBF24] tracking-tight">
                              Runner-up / 2nd Place
                            </div>
                            <div className="text-xs text-[#E0E7FF]">Top 20 from Entire Cohort</div>
                          </div>
                        )}
                        {isPropTech && (
                          <div className="space-y-1">
                            <div className="text-lg font-black text-white">Property Visit POC Dispatch</div>
                            <div className="text-[11px] text-[#94A3B8] font-mono">
                              Make.com Automation Flow Modules
                            </div>
                          </div>
                        )}
                        {isBazaar && (
                          <div>
                            <div className="text-2xl font-black text-white tracking-tight">₹44,300</div>
                            <div className="text-xs text-[#C7D2FE]">
                              Revenue • 120+ Customers • 10+ Vendors
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between text-[10px] text-white/80 font-mono">
                        <span>Project Artefact Container</span>
                        <span className="text-[#FBBF24] font-bold">Verified Data</span>
                      </div>
                    </div>

                    {/* Meta Labels */}
                    <div className="flex items-center gap-2 text-xs font-bold text-[#4338CA] uppercase tracking-wider mb-2">
                      <span>{project.category}</span>
                      {project.product && (
                        <>
                          <span>•</span>
                          <span className="text-[#D97706]">{project.product}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4338CA] transition">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#475569] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Contribution or Details snippet */}
                    {project.contribution && (
                      <div className="mb-4">
                        <div className="text-xs font-bold text-[#0F172A] mb-1">My Contribution:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.contribution.map((c) => (
                            <span
                              key={c}
                              className="text-[11px] bg-[#EEF2FF] text-[#4338CA] font-medium px-2 py-0.5 rounded-md"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.outcome && (
                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-900 font-semibold mb-4">
                        <strong>Outcome:</strong> {project.outcome}
                      </div>
                    )}

                    {project.information && (
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-[#334155] mb-4">
                        {project.information}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom CTA Links */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-extrabold uppercase text-[#4338CA] hover:text-[#312E81] flex items-center gap-1"
                    >
                      <span>Story Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] shadow-xs transition"
                      >
                        <span>{project.liveButtonText || 'View Live'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
