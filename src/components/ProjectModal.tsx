import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { details } = project;

  return (
    <div
      id="project-detail-modal"
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
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F172A] transition"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE] mb-2">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-[#475569] mt-1">{project.tagline}</p>
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

        {/* Storytelling Structure: CONTEXT, MY ROLE, WHAT I DID, OUTCOME, LEARNING */}
        <div className="space-y-6 text-sm text-[#334155]">
          {details?.context && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] mb-1">
                Context
              </h4>
              <p className="leading-relaxed bg-[#EEF2FF]/60 p-3.5 rounded-xl border border-[#E0E7FF]">
                {details.context}
              </p>
            </div>
          )}

          {details?.myRole && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#D97706] mb-1">
                My Role
              </h4>
              <p className="font-semibold text-[#0F172A]">{details.myRole}</p>
            </div>
          )}

          {details?.whatIDid && details.whatIDid.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] mb-2">
                What I Did
              </h4>
              <ul className="space-y-2">
                {details.whatIDid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4338CA] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] mb-2">
                Documented Features
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-[#0F172A] rounded-lg"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.contribution && project.contribution.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] mb-2">
                My Contribution
              </h4>
              <ul className="space-y-1.5">
                {project.contribution.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.information && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] mb-1">
                Challenge Information
              </h4>
              <p className="leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                {project.information}
              </p>
            </div>
          )}

          {/* Outcome */}
          {(details?.outcome || project.outcome) && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-1">
                Outcome
              </h4>
              <p className="font-bold text-emerald-900 bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 leading-relaxed">
                {details?.outcome || project.outcome}
              </p>
            </div>
          )}

          {/* Key Learning */}
          {details?.learning && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] mb-1">
                Key Learning
              </h4>
              <p className="italic text-[#1E293B] bg-indigo-50/70 p-3.5 rounded-xl border border-indigo-100 leading-relaxed">
                “{details.learning}”
              </p>
            </div>
          )}
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-[#475569] hover:bg-slate-50 transition"
          >
            Close Story
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-extrabold text-xs uppercase tracking-wider shadow transition"
            >
              <span>{project.liveButtonText || 'View Live'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
