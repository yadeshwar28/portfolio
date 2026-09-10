import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#312E81] via-[#2A2770] to-[#151336] rounded-[40px] p-10 sm:p-16 text-white shadow-2xl relative overflow-hidden text-center">
          {/* Background Matrix */}
          <div className="absolute inset-0 bg-grid-mesh opacity-30 pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F59E0B]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            {/* Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-[#FBBF24] uppercase">
              <span>Open to Internships &amp; Roles</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Let’s Connect.
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#E0E7FF]/90 font-normal leading-relaxed max-w-2xl mx-auto">
              “I’m always open to connecting with people working in Supply Chain, Operations, Sports and related industries.”
            </p>

            {/* Direct Connect Buttons */}
            <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
              {/* Primary Email Mailto CTA */}
              <a
                id="contact-email-cta-btn"
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="px-8 py-4 rounded-full bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#F59E0B]/30 transition transform hover:-translate-y-0.5 flex items-center space-x-2.5"
              >
                <Mail className="w-5 h-5 text-[#0F172A]" />
                <span>Email Gnana Yadeswar</span>
              </a>

              {/* Copy Email Button */}
              <button
                id="copy-email-btn"
                type="button"
                onClick={handleCopyEmail}
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm tracking-wider transition flex items-center space-x-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#FBBF24]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Professional Channels Cards */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {/* LinkedIn */}
              <a
                id="contact-linkedin-link"
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-[#0077B5]/30 flex items-center justify-center text-[#38BDF8]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#C7D2FE]">Professional Network</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#FBBF24] transition">
                      LinkedIn Profile
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C7D2FE] group-hover:text-[#FBBF24] transition" />
              </a>

              {/* GitHub */}
              <a
                id="contact-github-link"
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#C7D2FE]">Code &amp; Repositories</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#FBBF24] transition">
                      GitHub Profile
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C7D2FE] group-hover:text-[#FBBF24] transition" />
              </a>
            </div>

            {/* Clear Coordinates Detail (No phone number) */}
            <div className="pt-6 border-t border-white/10 text-xs text-[#C7D2FE] flex flex-wrap justify-center gap-6 sm:gap-8">
              <div>
                Direct Email: <strong className="text-white font-mono">{PERSONAL_INFO.contact.email}</strong>
              </div>
              <div>
                Primary Focus: <strong className="text-white">{PERSONAL_INFO.primaryCareerFocus}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
