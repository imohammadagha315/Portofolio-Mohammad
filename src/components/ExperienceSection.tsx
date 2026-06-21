import React, { useState } from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';

export const ExperienceSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 px-6 relative border-t border-white/5 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-2">
            03 / Professional Milestones
          </span>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-white tracking-tight">
            Work Experience Timeline
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-[#00D2FF] to-[#edb1ff] mt-4" />
        </div>

        {/* Timeline structural layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central vertical line axis */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#00D2FF]/40 via-white/10 to-[#edb1ff]/40 transform -translate-x-1/2" />

          {/* Timeline cards map loops */}
          <div className="flex flex-col gap-12 relative">
            {EXPERIENCE_DATA.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const isCyan = exp.colorTheme === 'cyan';
              const isHovered = hoveredId === exp.id;

              return (
                <div
                  key={exp.id}
                  id={`experience-timeline-node-${exp.id}`}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setHoveredId(exp.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Outer Pulsing Timeline Dot Icon Anchor */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-6 z-10 flex items-center justify-center">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      {/* Interactive breathing aura glow */}
                      <div
                        className={`absolute inset-0 rounded-full transition-all duration-300 ${
                          isHovered
                            ? isCyan
                              ? 'bg-[#00D2FF]/20 scale-125'
                              : 'bg-[#edb1ff]/20 scale-125'
                            : 'bg-white/5'
                        }`}
                      />
                      <div
                        className={`w-3.5 h-3.5 rounded-full border border-black transition-colors duration-300 z-10 ${
                          isCyan ? 'bg-[#00D2FF]' : 'bg-[#edb1ff]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Left Blank Spacer and Right Box or visa-versa */}
                  <div className="hidden md:block md:w-1/2 px-12" />

                  {/* Card panel container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div
                      className={`relative p-6 bg-zinc-950/80 border rounded-sm transition-all duration-300 text-left ${
                        isHovered
                          ? isCyan
                            ? 'border-[#00D2FF]/30 scale-[1.01] shadow-lg shadow-[#00D2FF]/5'
                            : 'border-[#edb1ff]/30 scale-[1.01] shadow-lg shadow-[#edb1ff]/5'
                          : 'border-white/5'
                      }`}
                    >
                      {/* Dynamic accent triangle header */}
                      <div
                        className={`absolute top-6 w-2 h-2 rotate-45 border-t border-l hidden md:block ${
                          isEven
                            ? 'left-[-5px] border-white/5 bg-[#080808] border-[#080808]'
                            : 'right-[-5px] border-white/5 bg-[#080808] border-[#080808]'
                        }`}
                      />

                      {/* Period Header */}
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span className="font-mono text-[10px] uppercase text-zinc-400 tracking-widest font-semibold">
                          {exp.period}
                        </span>
                      </div>

                      {/* Role & Company info */}
                      <h3 className="font-display font-medium text-lg text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <Briefcase className="w-3.5 h-3.5 text-[#00D2FF]/70" />
                        <span className="font-sans text-xs font-medium text-[#00D2FF]">
                          {exp.company}
                        </span>
                      </div>

                      {/* Position Roles description */}
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Interactive chip tags */}
                      <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-sm font-mono text-[9px] uppercase tracking-wider bg-white/5 text-zinc-400 border border-white/5 hover:text-white hover:border-white/20 transition-all"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
