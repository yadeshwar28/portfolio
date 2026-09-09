import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0F172A] text-[#94A3B8] py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand Monogram & Persona */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#4338CA] flex items-center justify-center text-[#FBBF24] font-black shadow-md">
              <svg
                className="w-5 h-5 text-[#FBBF24]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3" />
                <circle cx="18" cy="6" r="3" />
                <path d="M8.5 7.5L15.5 7.5" />
              </svg>
            </div>
            <div>
              <div className="text-white font-extrabold tracking-tight text-base">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-[#94A3B8] mt-0.5">
                {PERSONAL_INFO.headline}
              </div>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#94A3B8]">
            <a href="#hero" className="hover:text-white transition">
              Home
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#education" className="hover:text-white transition">
              Education
            </a>
            <a href="#contact" className="hover:text-[#FBBF24] transition">
              Contact
            </a>
          </div>

          {/* External Profile Links & Scroll to top */}
          <div className="flex items-center space-x-4 text-xs font-bold">
            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C7D2FE] hover:text-white transition"
            >
              LinkedIn
            </a>
            <span className="text-slate-700">•</span>
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C7D2FE] hover:text-white transition"
            >
              GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="text-[#FBBF24] hover:text-white transition"
            >
              Email
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Status */}
        <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. College &amp; Professional Portfolio.
          </div>
          <div className="text-[11px]">
            Designed with Pure Abstract Vectors &amp; Hands-On Operational Rigor
          </div>
        </div>
      </div>
    </footer>
  );
};
