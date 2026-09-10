import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, LEADERSHIP_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Shield, CheckCircle2, Trophy, MapPin, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#F8F9FE] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#4338CA] mb-2">
            ACADEMIC PATHWAY &amp; RECOGNITION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="text-[#475569] mt-3 text-base">
            Formal business education, ongoing postgraduate sports management specialization, certifications, and leadership milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Timeline (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 h-6 mb-2">
              <GraduationCap className="w-4 h-4 text-[#4338CA]" />
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA]">
                Academic Programs
              </h3>
            </div>

            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={edu.institution}
                id={`education-card-${idx}`}
                className={`p-6 sm:p-7 rounded-3xl border transition shadow-xs hover:shadow-md ${
                  idx === 0
                    ? 'bg-white border-[#C7D2FE]'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                  <div className="flex-1 min-w-0">
                    {idx === 0 && (
                      <div className="mb-2">
                        <span className="inline-block bg-[#F59E0B] text-[#0F172A] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs">
                          CURRENT PROGRAM
                        </span>
                      </div>
                    )}
                    <h4 className="text-xl font-extrabold text-[#0F172A] leading-snug">{edu.institution}</h4>
                  </div>

                  {/* Standardized Education Date Box: Exact Dimensions & Style */}
                  <div className="w-[150px] h-[34px] shrink-0 inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-[#4338CA] bg-[#EEF2FF] border border-[#C7D2FE]/70 rounded-xl whitespace-nowrap shadow-2xs self-start">
                    <Calendar className="w-3.5 h-3.5 text-[#4338CA] shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="text-sm font-bold text-[#4338CA] mb-2">{edu.degree}</div>

                <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                  <span>{edu.location}</span>
                </div>

                {edu.highlights && (
                  <ul className="space-y-1.5 text-xs text-[#475569] border-t border-slate-100 pt-3">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA] mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Certifications & Leadership (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 h-6 mb-2">
              <Award className="w-4 h-4 text-[#F59E0B]" />
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA]">
                Professional Certifications &amp; Leadership
              </h3>
            </div>

            {/* Certifications Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4338CA] flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-[#F59E0B]" />
                <span>Professional Certifications</span>
              </h4>

              <div className="space-y-3">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-3.5 bg-[#F8FAFC] rounded-2xl border border-slate-100 flex items-center justify-between hover:border-[#C7D2FE] transition"
                  >
                    <div>
                      <div className="text-xs font-extrabold text-[#0F172A]">{cert.title}</div>
                      <div className="text-[11px] text-[#64748B] font-medium">{cert.issuer}</div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Additional Achievements Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#D97706] flex items-center gap-2 mb-4">
                <Shield className="w-4 h-4 text-[#D97706]" />
                <span>Leadership &amp; Achievements</span>
              </h4>

              {/* Departmental Cultural Committee Role */}
              <div className="p-4 bg-[#EEF2FF] rounded-2xl border border-[#C7D2FE] mb-4">
                <div className="text-xs font-bold uppercase text-[#4338CA] mb-1">
                  {LEADERSHIP_DATA.primary.organization}
                </div>
                <div className="text-sm font-extrabold text-[#0F172A] mb-1">
                  {LEADERSHIP_DATA.primary.role}
                </div>
                <p className="text-xs text-[#334155] italic leading-relaxed">
                  “{LEADERSHIP_DATA.primary.description}”
                </p>
              </div>

              {/* Achievements Badges */}
              <div className="grid grid-cols-2 gap-3">
                {LEADERSHIP_DATA.achievements.map((ach) => (
                  <div
                    key={ach.title}
                    className="p-3 bg-[#F8FAFC] rounded-2xl border border-slate-100 text-center"
                  >
                    <div className="w-8 h-8 mx-auto mb-1.5 rounded-full bg-[#312E81] text-[#FBBF24] flex items-center justify-center">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-black text-[#0F172A]">{ach.title}</div>
                    <div className="text-[10px] text-[#64748B] mt-1 leading-tight">
                      {ach.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
