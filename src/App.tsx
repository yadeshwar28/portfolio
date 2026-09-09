import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreAreas } from './components/CoreAreas';
import { About } from './components/About';
import { Approach } from './components/Approach';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Artefacts } from './components/Artefacts';
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
      'approach',
      'experience',
      'projects',
      'artefacts',
      'skills',
      'education',
      'direction',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFCFE] text-[#0F172A] flex flex-col font-sans selection:bg-[#F59E0B] selection:text-white">
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

        {/* 4. Methodology: HOW I APPROACH OPERATIONS */}
        <Approach />

        {/* 5. Experience: HANDS-ON EXPERIENCE */}
        <Experience />

        {/* 6. Projects Showcase: FEATURED & SUPPORTING PROJECTS */}
        <Projects />

        {/* 7. Course Artefacts: EVIDENCE OF LEARNING */}
        <Artefacts />

        {/* 8. Skills: TOOLS & CAPABILITIES */}
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
