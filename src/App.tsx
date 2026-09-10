import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreAreas } from './components/CoreAreas';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { CareerDirection } from './components/CareerDirection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = [
      'hero',
      'focus',
      'about',
      'experience',
      'projects',
      'skills',
      'education',
      'direction',
      'contact',
    ];

    const handleScroll = () => {
      // If user has reached the bottom of the page, activate contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // Check sections from bottom to top to find the first one whose top is within view
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFCFE] text-[#0F172A] flex flex-col font-sans selection:bg-[#F59E0B] selection:text-white overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Core Areas: WHAT I WORK WITH */}
        <CoreAreas />

        {/* 3. About Section: WHO I AM & WHAT I CARE ABOUT */}
        <About />

        {/* 4. Experience: HANDS-ON EXPERIENCE */}
        <Experience />

        {/* 6. Projects Showcase: SELECTED WORK */}
        <Projects />

        {/* 7. Skills: TOOLS & CAPABILITIES */}
        <Skills />

        {/* 9. Education, Certifications & Leadership */}
        <Education />

        {/* 10. Professional Intent: NEXT FRONTIER: SPORTS & SUPPLY CHAIN */}
        <CareerDirection />

        {/* 11. Closing Call to Action: LET'S CONNECT */}
        <Contact />
      </main>

      {/* Global Minimal Professional Footer */}
      <Footer />
    </div>
  );
}
