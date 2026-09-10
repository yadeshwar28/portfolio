import React from 'react';
import { SKILLS_DATA, SOFTWARE_TOOLS, SoftwareTool } from '../data/portfolioData';
import {
  CheckCircle2,
  FileSpreadsheet,
  Presentation,
  BarChart3,
  Layers,
  ShoppingBag,
  Cpu,
  Database,
  PackageCheck,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getSoftwareIcon = (iconName: SoftwareTool['iconName']) => {
    switch (iconName) {
      case 'excel':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
      case 'powerpoint':
        return <Presentation className="w-5 h-5 text-orange-600" />;
      case 'powerbi':
        return <BarChart3 className="w-5 h-5 text-amber-600" />;
      case 'zoho':
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'shopify':
        return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'sap':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'oracle':
        return <Database className="w-5 h-5 text-red-600" />;
      default:
        return <Layers className="w-5 h-5 text-[#4338CA]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#4338CA] mb-2">
            PRACTICAL COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Supply Chain &amp; Operations Capabilities
          </h2>
          <p className="text-[#475569] mt-3 text-base">
            Core functional competencies across inventory planning, procurement, and fulfillment operations, supported by working software proficiency.
          </p>
        </div>

        {/* Core Competencies: Clean 2-Column Equal-Height System */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-[#4338CA]" />
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA]">
                Core Competencies (10)
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-[#64748B]">
              Supply Chain &amp; Operations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {SKILLS_DATA.supplyChain.map((skill) => (
              <div
                key={skill}
                className="h-[52px] px-4 flex items-center gap-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:border-[#4338CA] transition"
              >
                <CheckCircle2 className="w-4 h-4 text-[#4338CA] shrink-0" />
                <span className="text-sm font-bold text-[#0F172A] truncate">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6 & 7: SOFTWARE & SYSTEMS (Editorial Grid) */}
        <div className="max-w-5xl mx-auto pt-12 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#4338CA] mb-2">
              APPLIED TOOLKIT
            </div>
            <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
              SOFTWARE &amp; SYSTEMS
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Self-assessed working knowledge and operational tool proficiency applied across coursework, internships, and projects.
            </p>
          </div>

          {/* Software Grid: Identical Height, Identical Progress Bar, Coherent System */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SOFTWARE_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="p-5 rounded-2xl bg-[#FCFCFE] border border-slate-200/90 shadow-2xs hover:border-[#C7D2FE] transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-2xs flex items-center justify-center shrink-0 mb-3.5">
                    {getSoftwareIcon(tool.iconName)}
                  </div>

                  <div className="text-sm font-extrabold text-[#0F172A] truncate mb-3">
                    {tool.name}
                  </div>
                </div>

                <div>
                  {/* Subtle Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-200/70 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-[#4338CA] rounded-full transition-all duration-500"
                      style={{ width: `${tool.percent}%` }}
                    />
                  </div>

                  {/* Small Proficiency Label */}
                  <div className="text-[11px] font-mono font-semibold text-[#64748B]">
                    {tool.proficiencyLevel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
