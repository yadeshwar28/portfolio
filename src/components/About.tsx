import React, { useState } from 'react';

type BuildLogStep = 'learn' | 'test' | 'build' | 'improve';

export const About: React.FC = () => {
  const [isBuildOpen, setIsBuildOpen] = useState(false);
  const [activeBuildStep, setActiveBuildStep] = useState<BuildLogStep>('learn');

  const buildLogItems: Record<BuildLogStep, { label: string; text: string }> = {
    learn: {
      label: 'LEARN',
      text: 'Building stronger Supply Chain & Operations fundamentals through coursework, projects and practical exposure.',
    },
    test: {
      label: 'TEST',
      text: 'Trying ideas through business challenges, workflows and hands-on problem solving.',
    },
    build: {
      label: 'BUILD',
      text: 'Turning what I learn into practical projects, systems and operational work.',
    },
    improve: {
      label: 'IMPROVE',
      text: "Using real experience to understand what worked, what didn't and what I can do better.",
    },
  };

  const journeyStages = [
    {
      step: '01',
      title: 'THE FOUNDATION',
      subtitle: 'B.Com & Business Administration',
      note: 'Education & background',
      isCurrent: false,
    },
    {
      step: '02',
      title: 'ON THE GROUND',
      subtitle: 'Hands-On Operations & Logistics',
      note: 'Real-world operations exposure',
      isCurrent: false,
    },
    {
      step: '03',
      title: 'IN BUILD MODE',
      subtitle: 'Supply Chain, Operations & Practical Projects',
      tag: 'LEARNING • BUILDING • TESTING',
      note: 'Current development',
      isCurrent: true,
      activePoints: [
        'Developing Supply Chain & Operations capabilities',
        'Working on practical projects',
        'Learning tools & frameworks',
        'Applying what I learn',
      ],
    },
    {
      step: '04',
      title: 'THE DIRECTION',
      subtitle: 'Sports Business & Operations Strategy',
      note: 'Sports + operations',
      isCurrent: false,
    },
    {
      step: '05',
      title: 'THE NEXT MOVE',
      subtitle: 'Sports & Athletic Supply Chain & Operations',
      note: 'Future career direction',
      isCurrent: false,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Progression Journey (Not Bulky Cards) */}
          <div
            id="about-visual-progression"
            className="lg:col-span-5 bg-[#F9F9FC] p-6 sm:p-8 rounded-3xl border border-slate-200/80 relative"
          >
            <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#4338CA] mb-6 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4338CA]" />
                <span>PORTFOLIO PROGRESSION SYSTEM</span>
              </span>
              <span className="text-[#64748B] text-[10px]">01 → 05</span>
            </div>

            {/* Editorial Timeline Track */}
            <div className="relative border-l-2 border-slate-200 ml-3.5 pl-6 space-y-6">
              {journeyStages.map((stage) => {
                const isCurrent = stage.isCurrent;

                return (
                  <div key={stage.step} className="relative group">
                    {/* Node on line */}
                    <div
                      className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition ${
                        isCurrent
                          ? 'bg-[#4338CA] border-white ring-4 ring-[#C7D2FE]'
                          : 'bg-white border-slate-300 group-hover:border-[#4338CA]'
                      }`}
                    />

                    {/* Stage Details */}
                    {isCurrent ? (
                      <div className="p-4 rounded-xl bg-white border-l-4 border-[#4338CA] shadow-xs space-y-2">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-baseline gap-2">
                            <span className="font-mono text-xs font-extrabold text-[#4338CA]">
                              {stage.step}
                            </span>
                            <span className="text-sm font-extrabold text-[#0F172A] tracking-tight">
                              {stage.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE]">
                            ACTIVE STAGE
                          </span>
                        </div>

                        <div className="text-xs font-semibold text-[#1E293B]">
                          {stage.subtitle}
                        </div>

                        <div className="text-[11px] font-mono font-bold text-[#D97706] tracking-wider">
                          {stage.tag}
                        </div>

                        <div className="text-[11px] text-[#64748B]">
                          → {stage.note}
                        </div>

                        {stage.activePoints && (
                          <div className="pt-2 border-t border-slate-100 grid grid-cols-1 gap-1 text-[11px] text-[#475569]">
                            {stage.activePoints.map((pt) => (
                              <div key={pt} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA] shrink-0" />
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-0.5 py-0.5">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-xs font-bold text-[#64748B]">
                            {stage.step}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#0F172A]">
                            {stage.title}
                          </span>
                        </div>
                        <div className="text-xs text-[#475569]">
                          {stage.subtitle}
                        </div>
                        <div className="text-[11px] text-[#64748B] italic">
                          → {stage.note}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Editorial Footer Line */}
            <div className="mt-8 pt-4 border-t border-slate-200/70 text-[11px] text-[#64748B] flex items-center justify-between font-mono">
              <span>TRAJECTORY</span>
              <span className="font-bold text-[#4338CA]">Foundation → Field → Build</span>
            </div>
          </div>

          {/* Right Column: Personal Narrative & Editorial Refinement */}
          <div className="lg:col-span-7 space-y-6">
            {/* Section Eyebrow + Subtle Editorial Notebook Annotation */}
            <div className="space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#4338CA] flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#F59E0B] inline-block" />
                <span>ABOUT ME</span>
              </div>

              {/* Small Handwritten / Editorial-Style Annotation (Not a big card) */}
              <div className="inline-flex items-baseline gap-2 py-1 px-2.5 rounded-md bg-[#FEF3C7]/70 border border-[#FDE68A] text-xs">
                <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-[#92400E]">
                  CURRENT NOTE
                </span>
                <span className="text-[#78350F] italic font-serif text-[13px] tracking-tight">
                  “I learn fastest when I have something real to figure out.”
                </span>
              </div>
            </div>

            {/* New About Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Still Building. <br />
              <span className="text-[#4338CA]">Still Figuring Things Out.</span>
            </h2>

            {/* Personal About Copy (Natural, Unpretentious Language) */}
            <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
              <p className="font-medium text-[#0F172A]">
                “I’m comfortable trying things, making mistakes, learning from the experience and doing it better the next time.”
              </p>

              <p>
                My experience so far has given me practical exposure to inventory control, procurement coordination, order fulfillment, reverse logistics, vendor coordination and operational reporting.
              </p>

              <p>
                I’m still early in my career. Sports is the industry I’d most like to work in, while building strong practical capability in Supply Chain &amp; Operations. I’m also open to opportunities across other industries where I can keep learning and contributing.
              </p>
            </div>

            {/* ONE Creative Interaction: What's In The Build? (Compact expand/collapse) */}
            <div className="pt-2">
              <button
                id="whats-in-the-build-btn"
                type="button"
                role="button"
                aria-expanded={isBuildOpen}
                aria-controls="whats-in-the-build-content"
                onClick={() => setIsBuildOpen(!isBuildOpen)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#4338CA] hover:text-[#312E81] transition py-1 focus:outline-none focus:ring-2 focus:ring-[#4338CA] focus:ring-offset-2 rounded cursor-pointer"
              >
                <span>{isBuildOpen ? "WHAT'S IN THE BUILD? ↑" : "WHAT'S IN THE BUILD? ↓"}</span>
              </button>

              {isBuildOpen && (
                <div
                  id="whats-in-the-build-content"
                  className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs text-[#334155] space-y-2.5 transition-all duration-200"
                >
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                    IN ACTIVE DEVELOPMENT
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA] shrink-0" />
                      <span className="font-medium">Supply Chain &amp; Operations skills</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA] shrink-0" />
                      <span className="font-medium">Practical projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA] shrink-0" />
                      <span className="font-medium">Tools and technical learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA] shrink-0" />
                      <span className="font-medium">Real-world problem solving</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Small Interactive Build Log: LEARN → TEST → BUILD → IMPROVE */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center flex-wrap gap-2 text-xs font-mono font-bold">
                {(['learn', 'test', 'build', 'improve'] as BuildLogStep[]).map((step, idx) => {
                  const isActive = activeBuildStep === step;

                  return (
                    <React.Fragment key={step}>
                      <button
                        id={`build-log-step-${step}`}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveBuildStep(step)}
                        className={`pb-0.5 border-b-2 transition cursor-pointer ${
                          isActive
                            ? 'border-[#4338CA] text-[#4338CA] font-extrabold'
                            : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
                        }`}
                      >
                        {buildLogItems[step].label}
                      </button>
                      {idx < 3 && (
                        <span className="text-[#CBD5E1] select-none text-xs">→</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Display one statement at a time beneath */}
              <p
                id="build-log-statement"
                className="mt-3 text-xs sm:text-sm text-[#475569] leading-relaxed bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-100 italic font-medium"
              >
                “{buildLogItems[activeBuildStep].text}”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
