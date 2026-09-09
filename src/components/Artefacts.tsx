import React, { useState } from 'react';
import { ARTEFACTS } from '../data/portfolioData';
import { Artefact } from '../types';
import { Code, Workflow, Table, FileText, LayoutDashboard, Award, X, ExternalLink, Eye } from 'lucide-react';

export const Artefacts: React.FC = () => {
  const [activeArtefact, setActiveArtefact] = useState<Artefact | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'code':
        return Code;
      case 'workflow':
        return Workflow;
      case 'table':
        return Table;
      case 'document':
        return FileText;
      case 'dashboard':
        return LayoutDashboard;
      case 'award':
        return Award;
      default:
        return FileText;
    }
  };

  return (
    <section id="artefacts" className="py-24 bg-[#F8F9FE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#4338CA] mb-2">
            COLLEGE EVIDENCE &amp; PROOF
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Academic &amp; Operational Artefacts
          </h2>
          <p className="text-[#475569] mt-3 text-base">
            Tangible deliverables, schemas, scenario blueprints, and audited commercial logs produced across coursework, competitions, and internships.
          </p>
        </div>

        {/* 6 Rich Interactive Artefact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTEFACTS.map((item) => {
            const IconComponent = getIcon(item.iconType);

            return (
              <div
                key={item.id}
                id={`artefact-card-${item.id}`}
                className="bg-white rounded-3xl p-6 border border-[#E0E7FF] shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Artefact Thumbnail Container */}
                  <div className="w-full h-40 rounded-2xl bg-[#151336] p-4 flex flex-col justify-between text-white mb-4 border border-[#312E81] relative overflow-hidden group-hover:border-[#F59E0B] transition">
                    <div className="flex justify-between text-[10px] font-mono text-[#FBBF24]">
                      <span className="truncate max-w-[170px] uppercase">{item.type}</span>
                      <span className="text-emerald-400 font-bold">{item.badge}</span>
                    </div>

                    {/* Schematic Diagram Preview */}
                    <div className="flex items-center justify-around py-2">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FBBF24]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="h-0.5 w-12 border-t-2 border-dashed border-[#818CF8]" />
                      <div className="text-[10px] font-mono text-center text-[#C7D2FE]">
                        <div className="font-bold text-white">OPERATIONAL LOG</div>
                        <div className="text-[9px] text-[#94A3B8]">{item.meta}</div>
                      </div>
                    </div>

                    <div className="text-[9px] text-[#C7D2FE] text-center font-mono flex items-center justify-between border-t border-white/10 pt-1">
                      <span>Ready for Evidence Image</span>
                      <span className="text-[#FBBF24] font-semibold">Verified</span>
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#EEF2FF] text-[#4338CA] uppercase mb-2">
                    {item.badge}
                  </span>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#4338CA] transition">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-3 gap-1.5 p-2.5 bg-[#F8FAFC] rounded-xl border border-slate-100 text-[10px] text-center mb-4">
                    {item.previewHighlights.map((hl, idx) => (
                      <div key={idx}>
                        <div className="font-bold text-[#312E81] truncate">{hl.value}</div>
                        <div className="text-[#64748B] text-[9px] truncate">{hl.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inspect Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#64748B] truncate max-w-[180px]">
                    {item.meta}
                  </span>
                  <button
                    onClick={() => setActiveArtefact(item)}
                    className="text-xs font-bold text-[#4338CA] hover:text-[#312E81] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Artefact Detail Inspection Modal */}
      {activeArtefact && (
        <div
          id="artefact-preview-modal"
          className="fixed inset-0 z-50 overflow-y-auto bg-[#0F172A]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveArtefact(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E0E7FF]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArtefact(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F172A]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#4338CA] mb-3">
              {activeArtefact.badge}
            </span>

            <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">
              {activeArtefact.title}
            </h3>

            <p className="text-xs font-mono text-[#4338CA] mb-4">{activeArtefact.meta}</p>

            <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-slate-200 space-y-3 mb-6">
              <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wide">
                Artefact Evidence Context:
              </div>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                {activeArtefact.details}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center p-3 bg-[#EEF2FF] rounded-xl border border-[#C7D2FE] mb-6">
              {activeArtefact.previewHighlights.map((hl, i) => (
                <div key={i}>
                  <div className="text-xs font-bold text-[#312E81]">{hl.value}</div>
                  <div className="text-[10px] text-[#475569]">{hl.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#64748B]">Evidence of Practical Learning</span>
              <button
                onClick={() => setActiveArtefact(null)}
                className="px-5 py-2 rounded-full bg-[#4338CA] text-white text-xs font-bold hover:bg-[#312E81] transition"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
