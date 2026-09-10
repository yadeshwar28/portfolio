import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const { details } = project;

  return (
    <div
      id="project-detail-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0F172A]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E0E7FF] p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F172A] transition cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE]">
              {project.category}
            </span>
            {project.product && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                Product: {project.product}
              </span>
            )}
          </div>
          <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-[#475569] mt-1.5">{project.tagline}</p>
        </div>

        {/* Metrics Banner if Available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center p-2">
                <div className="text-lg font-extrabold text-[#312E81]">{m.value}</div>
                <div className="text-[11px] font-semibold text-[#475569] mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Information */}
        <div className="space-y-6 text-sm text-[#334155]">
          {details?.context && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] mb-1.5">
                Overview &amp; Context
              </h4>
              <p className="leading-relaxed bg-[#EEF2FF]/60 p-4 rounded-xl border border-[#E0E7FF]">
                {details.context}
              </p>
            </div>
          )}

          {details?.myRole && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#D97706] mb-1">
                Role &amp; Responsibility
              </h4>
              <p className="font-semibold text-[#0F172A]">{details.myRole}</p>
            </div>
          )}

          {details?.whatIDid && details.whatIDid.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] mb-2">
                Key Practical Execution
              </h4>
              <ul className="space-y-2">
                {details.whatIDid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4338CA] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] mb-2">
                Documented Capabilities &amp; Workflows
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-[#1E293B]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.tools && project.tools.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] mb-2">
                Tools &amp; Infrastructure
              </h4>
              <p className="text-sm font-semibold text-[#0F172A] bg-[#EEF2FF]/70 p-3.5 rounded-xl border border-[#C7D2FE]">
                {project.tools.join(' • ')}
              </p>
            </div>
          )}

          {project.information && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] mb-1.5">
                Verified Information
              </h4>
              <p className="leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                {project.information}
              </p>
            </div>
          )}

          {/* Outcome */}
          {(details?.outcome || project.outcome) && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
                Key Outcome
              </h4>
              <p className="font-bold text-emerald-950 bg-emerald-50/90 p-4 rounded-xl border border-emerald-200 leading-relaxed">
                {details?.outcome || project.outcome}
              </p>
            </div>
          )}
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-[#475569] hover:bg-slate-50 transition cursor-pointer"
          >
            Close Details
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-extrabold text-xs uppercase tracking-wider shadow transition"
            >
              <span>{project.liveButtonText || 'Live Project'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
