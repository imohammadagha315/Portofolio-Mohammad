import React from 'react';
import { Code, Store, ArrowUpRight, Cpu, Layers, HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ServicesSectionProps {
  onInitiateProject: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInitiateProject }) => {
  // Map index or string to relevant Lucide icons
  const renderIcon = (iconName: string, colorTheme: 'cyan' | 'violet') => {
    const isCyan = colorTheme === 'cyan';
    const classes = `w-6 h-6 ${isCyan ? 'text-[#00D2FF]' : 'text-[#edb1ff]'}`;
    switch (iconName) {
      case 'code':
        return <Code className={classes} />;
      case 'storefront':
        return <Store className={classes} />;
      case 'integration_instructions':
        return <Cpu className={classes} />;
      case 'model_training':
        return <Layers className={classes} />;
      case 'support_agent':
        return <HelpCircle className={classes} />;
      default:
        return <Code className={classes} />;
    }
  };

  return (
    <section id="services" className="py-24 px-6 relative border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="font-mono text-xs text-[#edb1ff] uppercase tracking-widest block mb-2">
            02 / Functional Capabilities
          </span>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-white tracking-tight">
            Comprehensive Digital Services
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-[#edb1ff] to-[#00D2FF] mt-4" />
        </div>

        {/* Services interactive cards dynamic container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const isCyan = service.colorTheme === 'cyan';
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative h-full flex flex-col justify-between p-6 md:p-8 bg-zinc-950/40 border border-white/5 hover:border-white/10 rounded-sm hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Background glow shadow effect */}
                <div
                  className={`absolute inset-0 -z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 blur-2xl rounded-sm ${
                    isCyan
                      ? 'bg-[#00D2FF]/[0.02]'
                      : 'bg-[#edb1ff]/[0.02]'
                  }`}
                />

                {/* Top Row: Icon + Indicator */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-3 rounded-sm ${isCyan ? 'bg-[#00D2FF]/5 border border-[#00D2FF]/10' : 'bg-[#edb1ff]/5 border border-[#edb1ff]/10'}`}>
                      {renderIcon(service.iconName, service.colorTheme)}
                    </div>
                    <span className="font-mono text-[9px] text-zinc-600 group-hover:text-zinc-400 uppercase tracking-widest transition-colors">
                      Service ID // {service.id.substring(0, 4).toUpperCase()}
                    </span>
                  </div>

                  {/* Title and description */}
                  <h3 className="font-display font-medium text-lg text-white mb-3 text-left">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed text-left mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Row Tags */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1">
                    {service.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider rounded-sm bg-white/5 text-zinc-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={onInitiateProject}
                    className="p-1 rounded-sm text-zinc-500 hover:text-white transition-colors cursor-pointer"
                    aria-label={`Initiate request for ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Sizing grid anchor to draw dynamic request quote CTA inside bento layout */}
          <div className="group relative flex flex-col justify-between p-6 md:p-8 bg-gradient-to-b from-[#111111] to-[#0a0a0a] border border-[#00D2FF]/10 hover:border-[#00D2FF]/30 rounded-sm transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
                <span className="font-mono text-[9px] text-[#00D2FF] uppercase tracking-widest">
                  Enterprise Request Form
                </span>
              </div>
              <h3 className="font-display font-medium text-xl text-white mb-3 text-left leading-snug">
                Have a Complex System in Mind?
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed text-left">
                Let's scope your technical architecture. I deliver meticulous layout specifications, API pathways, and timeline milestones before we write a single line of state.
              </p>
            </div>

            <button
              id="services-initiate-panel-cta"
              onClick={onInitiateProject}
              className="mt-8 w-full py-3.5 rounded-sm bg-[#00D2FF]/5 hover:bg-[#00D2FF] border border-[#00D2FF]/30 hover:border-transparent text-white hover:text-black font-mono font-medium text-xs tracking-wider transition-all cursor-pointer text-center"
            >
              REQUEST COMPREHENSIVE ESTIMATE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
