import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { MapPin, Calendar, CheckCircle, TrendingUp, ChevronDown } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  const toggleExpand = (company: string) => {
    setExpandedCompany((prev) => (prev === company ? null : company));
  };

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#4338CA] mb-2">
            PRACTICAL TRACK RECORD
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Hands-On Experience
          </h2>
          <p className="text-[#475569] mt-3 text-base">
            Grounded operational exposure in inventory reconciliation, vendor coordination, Shopify fulfillment, and 3PL courier management.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp) => {
            const isDoodlez = exp.company === 'DOODLEZ';
            const cardId = exp.company.toLowerCase().replace(/\s+/g, '-');
            const isExpanded = expandedCompany === exp.company;

            return (
              <div
                key={exp.company}
                id={`experience-card-${cardId}`}
                className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 shadow-sm hover:shadow-xl ${
                  isDoodlez
                    ? 'bg-[#F1F0FB] border-[#C7D2FE] hover:border-[#4338CA]'
                    : 'bg-white border-slate-200 hover:border-[#C7D2FE]'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div className="flex-1 min-w-0">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
                        isDoodlez
                          ? 'bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE]'
                          : 'bg-slate-100 text-[#475569]'
                      }`}
                    >
                      {exp.typeBadge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] flex flex-wrap items-baseline gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-300 font-normal">|</span>
                      <span className="text-base sm:text-lg font-bold text-[#4338CA]">{exp.role}</span>
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-[#475569] mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="w-[160px] h-[36px] shrink-0 inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-[#4338CA] bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs whitespace-nowrap self-start">
                    <Calendar className="w-3.5 h-3.5 text-[#4338CA] shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Real Metrics Badges Ribbon */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="my-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-xs">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#D97706] mb-2 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>Verified Operational Metrics</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                      {exp.metrics.map((m) => (
                        <div key={m.label} className="p-2 rounded-xl bg-[#F8FAFC] text-center border border-slate-100">
                          <div className="text-base font-black text-[#312E81]">{m.value}</div>
                          <div className="text-[10px] font-semibold text-[#475569] mt-0.5 leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expand / Collapse Action Button */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    id={`experience-btn-${cardId}`}
                    type="button"
                    onClick={() => toggleExpand(exp.company)}
                    aria-expanded={isExpanded}
                    aria-controls={`experience-details-${cardId}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider text-[#4338CA] hover:text-[#312E81] bg-[#EEF2FF] hover:bg-[#E0E7FF] border border-[#C7D2FE] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4338CA] focus:ring-offset-2"
                  >
                    <span>{isExpanded ? 'HIDE DETAILS' : 'VIEW DETAILS'}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <span className="text-[11px] font-mono text-[#64748B]">
                    {isExpanded ? 'Deliverables Expanded' : `${exp.responsibilities.length} Deliverables`}
                  </span>
                </div>

                {/* Collapsible Key Practical Deliverables Section */}
                <div
                  id={`experience-details-${cardId}`}
                  role="region"
                  aria-labelledby={`experience-btn-${cardId}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? 'max-h-[800px] opacity-100 pt-4 mt-4 border-t border-slate-200/80'
                      : 'max-h-0 opacity-0 pt-0 mt-0 border-t-0'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                      Key Practical Deliverables:
                    </div>
                    <ul className="space-y-2.5 text-sm text-[#334155] leading-relaxed">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-[#4338CA] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
