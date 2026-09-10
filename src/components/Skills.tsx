import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Check,
  Database,
  FileSpreadsheet,
  Layers,
  PackageCheck,
  Presentation,
  RotateCcw,
  ShoppingBag,
  Truck,
  UsersRound,
} from 'lucide-react';
import { SKILLS_DATA, SOFTWARE_TOOLS, SoftwareTool } from '../data/portfolioData';

type Capability = {
  id: string;
  number: string;
  title: string;
  skills: string[];
  icon: React.ElementType;
};

const CAPABILITIES: Capability[] = [
  {
    id: 'procure',
    number: '01',
    title: 'PROCURE',
    skills: ['Procurement', 'Vendor Management'],
    icon: UsersRound,
  },
  {
    id: 'control',
    number: '02',
    title: 'CONTROL',
    skills: [
      'Inventory Management',
      'Inventory Control',
      'Inventory Planning',
      'Stock Replenishment',
    ],
    icon: PackageCheck,
  },
  {
    id: 'fulfill',
    number: '03',
    title: 'FULFILL',
    skills: ['Order Management', 'Order Fulfillment', '3PL Coordination'],
    icon: Truck,
  },
  {
    id: 'reverse',
    number: '04',
    title: 'REVERSE',
    skills: ['Reverse Logistics'],
    icon: RotateCcw,
  },
];

const EXPECTED_SKILLS = CAPABILITIES.flatMap((capability) => capability.skills);

export const Skills: React.FC = () => {
  const [activeId, setActiveId] = useState('control');
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [signalVisible, setSignalVisible] = useState(true);

  const sourceSkills = SKILLS_DATA.supplyChain;
  const allCoreSkillsPresent = useMemo(
    () => EXPECTED_SKILLS.every((skill) => sourceSkills.includes(skill)),
    [sourceSkills]
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSignalVisible(false);
      window.setTimeout(() => setSignalVisible(true), 180);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const getSoftwareIcon = (iconName: SoftwareTool['iconName']) => {
    switch (iconName) {
      case 'excel':
        return <FileSpreadsheet className="w-4 h-4" />;
      case 'powerpoint':
        return <Presentation className="w-4 h-4" />;
      case 'powerbi':
        return <BarChart3 className="w-4 h-4" />;
      case 'zoho':
        return <Layers className="w-4 h-4" />;
      case 'shopify':
        return <ShoppingBag className="w-4 h-4" />;
      case 'sap':
        return <Database className="w-4 h-4" />;
      case 'oracle':
        return <Database className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const displayedTools = SOFTWARE_TOOLS.filter((tool) =>
    ['Advanced Excel', 'PowerPoint', 'Shopify', 'Power BI', 'Zoho ERP', 'SAP', 'Oracle'].includes(tool.name)
  );

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <style>{`
        @keyframes skills-flow {
          0% { left: 0%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes skills-pulse {
          0%, 100% { transform: scale(1); opacity: .55; }
          50% { transform: scale(1.35); opacity: 1; }
        }
        @keyframes tool-flow {
          0% { transform: translateX(-4px); opacity: .35; }
          50% { transform: translateX(4px); opacity: 1; }
          100% { transform: translateX(-4px); opacity: .35; }
        }
        .skills-flow-signal {
          animation: skills-flow 4.2s cubic-bezier(.65,0,.35,1) infinite;
        }
        .skills-node-pulse {
          animation: skills-pulse 2.4s ease-in-out infinite;
        }
        .skills-tool-flow {
          animation: tool-flow 2.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .skills-flow-signal,
          .skills-node-pulse,
          .skills-tool-flow {
            animation: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-8 sm:mb-10">
          <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#4338CA] mb-2">
            <span className="w-7 h-px bg-[#4338CA]" />
            Supply Chain &amp; Operations
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
              How I Work
            </h2>
            <p className="max-w-xl text-sm text-[#64748B] leading-relaxed lg:text-right">
              Inventory, procurement, fulfillment and logistics — connected through practical tools and hands-on experience.
            </p>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden sm:block absolute left-[7%] right-[7%] top-[47px] h-px bg-slate-200" aria-hidden="true" />
          <div
            className={`hidden sm:block absolute top-[44px] left-[7%] w-2 h-2 rounded-full bg-[#F59E0B] skills-flow-signal ${signalVisible ? '' : 'opacity-0'}`}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 sm:gap-3">
            {CAPABILITIES.map((capability) => {
              const active = activeId === capability.id;
              const Icon = capability.icon;

              return (
                <button
                  key={capability.id}
                  type="button"
                  onClick={() => setActiveId(capability.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                      event.preventDefault();
                      const nextIndex = (CAPABILITIES.findIndex((item) => item.id === capability.id) + 1) % CAPABILITIES.length;
                      setActiveId(CAPABILITIES[nextIndex].id);
                    }
                    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                      event.preventDefault();
                      const currentIndex = CAPABILITIES.findIndex((item) => item.id === capability.id);
                      const previousIndex = (currentIndex - 1 + CAPABILITIES.length) % CAPABILITIES.length;
                      setActiveId(CAPABILITIES[previousIndex].id);
                    }
                  }}
                  className={`group relative text-left min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4338CA] focus-visible:ring-offset-4 rounded-xl`}
                  aria-pressed={active}
                >
                  <div className="flex items-center gap-3 sm:block">
                    <div
                      className={`relative z-10 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                        active
                          ? 'bg-[#4338CA] border-[#4338CA] text-white'
                          : 'bg-white border-slate-300 text-[#4338CA] group-hover:border-[#4338CA]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {active && <span className="absolute -inset-1 rounded-full border border-[#4338CA]/25 skills-node-pulse" />}
                    </div>

                    <div className="sm:pt-4 min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[10px] font-mono font-bold text-[#94A3B8]">{capability.number}</span>
                        <span className={`text-xs font-extrabold tracking-[0.14em] transition-colors ${active ? 'text-[#4338CA]' : 'text-[#0F172A]'}`}>
                          {capability.title}
                        </span>
                      </div>

                      <div className="mt-2 space-y-1">
                        {capability.skills.map((skill) => (
                          <div
                            key={skill}
                            className={`text-sm leading-snug transition-all duration-300 ${
                              active ? 'text-[#0F172A] font-semibold translate-x-1' : 'text-[#64748B]'
                            }`}
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 sm:mt-12 pt-6 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-4">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#4338CA]">
                Toolkit
              </h3>
            </div>
            <div className="hidden sm:block h-px flex-1 bg-slate-200" />
            <p className="text-[11px] text-[#64748B]">
              Tools used across coursework, internships and projects
            </p>
          </div>

          <div className="relative">
            <div className="hidden sm:block absolute top-5 left-3 right-3 h-px bg-slate-200" aria-hidden="true" />
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-3 gap-y-4 relative">
              {displayedTools.map((tool) => {
                const active = activeTool === tool.name;
                return (
                  <button
                    key={tool.name}
                    type="button"
                    onClick={() => setActiveTool(active ? null : tool.name)}
                    className={`group min-w-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4338CA] focus-visible:ring-offset-2 rounded-lg`}
                    aria-pressed={active}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`relative z-10 w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          active
                            ? 'bg-[#FFF7ED] border-[#F59E0B] text-[#4338CA]'
                            : 'bg-white border-slate-200 text-[#475569] group-hover:border-[#4338CA]'
                        }`}
                      >
                        {getSoftwareIcon(tool.iconName)}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-extrabold text-[#0F172A] truncate">{tool.name}</span>
                        <span className={`block text-[10px] font-mono mt-0.5 ${active ? 'text-[#4338CA]' : 'text-[#94A3B8]'}`}>
                          {tool.proficiencyLevel}
                        </span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 text-[10px] text-[#94A3B8]">
            <ArrowRight className="w-3 h-3 shrink-0 skills-tool-flow" />
            <span>Working levels based on hands-on use across coursework, internships and projects.</span>
          </div>
        </div>

        {!allCoreSkillsPresent && (
          <p className="sr-only">
            Some configured skills are missing from the source data.
          </p>
        )}
      </div>
    </section>
  );
};
