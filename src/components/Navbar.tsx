import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const isLinkActive = (linkId: string) => {
    if (activeSection === linkId) return true;
    if (linkId === 'hero' && activeSection === 'focus') return true;
    if (linkId === 'about' && activeSection === 'approach') return true;
    if (linkId === 'education' && activeSection === 'direction') return true;
    return false;
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#312E81]/95 border-b border-[#4338CA]/70 shadow-xl'
          : 'backdrop-blur-md bg-[#312E81]/90 border-b border-[#4338CA]/50 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Monogram & Collegiate Identity */}
          <a
            id="brand-identity-link"
            href="#hero"
            className="flex items-center space-x-3.5 group focus:outline-none focus:ring-2 focus:ring-[#F59E0B] rounded-xl p-1"
          >
            <Logo className="w-11 h-11 shrink-0 shadow-md shadow-[#1E1B4B]/30 group-hover:scale-105 transition-transform duration-300" />
            <div>
              <div className="text-white font-extrabold tracking-tight text-lg leading-tight">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[#C7D2FE]/80 text-xs font-medium tracking-wide">
                Sports &amp; Supply Chain Operations
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav-menu"
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-xs font-semibold tracking-wide text-[#E0E7FF] uppercase"
          >
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.id);
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#FBBF24] font-bold'
                      : 'hover:text-[#FBBF24] text-[#E0E7FF]/90'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FBBF24] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Nav Action CTAs */}
          <div className="flex items-center space-x-3">
            <a
              id="nav-cta-connect"
              href="#contact"
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#FBBF24] hover:to-[#F59E0B] text-[#0F172A] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-[#F59E0B]/25 transition-all duration-300 transform active:scale-95"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4 text-[#0F172A]" />
            </a>

            {/* Mobile Navigation Dropdown Button */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden py-4 border-t border-[#4338CA]/70 flex flex-col space-y-3 text-sm font-semibold text-[#E0E7FF] bg-[#312E81] px-2 rounded-b-2xl mb-2"
          >
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.id);
              return (
                <a
                  key={link.id}
                  id={`mobile-link-${link.id}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-white/15 text-[#FBBF24] font-bold'
                      : 'hover:bg-white/10 hover:text-[#FBBF24]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2 border-t border-[#4338CA]/50">
              <a
                id="mobile-cta-connect"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#F59E0B] text-[#0F172A] font-bold text-xs uppercase tracking-wider shadow"
              >
                Let's Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
