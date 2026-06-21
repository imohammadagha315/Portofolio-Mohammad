import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, Code, Zap } from 'lucide-react';

// Import local modularized assets
import { AmbientCanvas } from './components/AmbientCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS_DATA } from './data';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Monitor grid scroll sections to keep the Navbar indicator active mapping synchronized
  useEffect(() => {
    const handleObserver = () => {
      const sections = ['hero', 'about', 'services', 'experience', 'projects', 'contact'];
      let currentActive = 'hero';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element's top is mostly in viewport, use it
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleObserver);
    return () => window.removeEventListener('scroll', handleObserver);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  return (
    <div className="relative min-h-screen text-zinc-300 font-sans selection:bg-[#00D2FF]/20 selection:text-[#00D2FF]">
      {/* Dynamic particles and wireframe rotating dodecahedron backdrop */}
      <AmbientCanvas />

      {/* Lagging interactive cursor elements */}
      <CustomCursor />

      {/* Synchronized sticky top menu block */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main scrolling sections stage */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* HERO GREETING CONTAINER */}
        <HeroSection
          onLearnMore={() => handleNavigate('about')}
          onInitiateProject={() => handleNavigate('contact')}
        />

        {/* DETAILS PROFILE BIOGRAPHY CONTAINER */}
        <AboutSection />

        {/* FUNCTIONAL CAPABILITIES SERVICES BENTO GRID */}
        <ServicesSection onInitiateProject={() => handleNavigate('contact')} />

        {/* PROFESSIONAL WORK PROGRESS TIMELINE */}
        <ExperienceSection />

        {/* EXPERIMENTAL PORFLIO PROJECTS GALLERY SECTION */}
        <section id="projects" className="py-24 px-6 relative border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <div className="text-left mb-16">
              <span className="font-mono text-xs text-[#edb1ff] uppercase tracking-widest block mb-2">
                04 / Architectural Highlights
              </span>
              <h2 className="font-display font-medium text-3xl md:text-5xl text-white tracking-tight">
                Selected Work & Prototypes
              </h2>
              <div className="w-12 h-[1px] bg-gradient-to-r from-[#edb1ff] to-[#00D2FF] mt-4" />
            </div>

            {/* Portfolios custom layout card grid mapping */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS_DATA.map((project) => (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="group relative flex flex-col justify-between bg-zinc-950/60 border border-white/5 hover:border-white/15 rounded-sm overflow-hidden transition-all duration-500 cursor-pointer shadow-xl hover:shadow-[#00D2FF]/5"
                >
                  {/* Image container frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center border-b border-white/5">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 brightness-90 group-hover:brightness-105"
                    />
                    {/* Hover fade reveal action overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full text-white font-mono text-[10px] uppercase tracking-widest transition-all">
                        <Eye className="w-4 h-4 text-[#00D2FF]" />
                        Inspect Case Study
                      </div>
                    </div>
                  </div>

                  {/* Descriptions block */}
                  <div className="p-6 text-left flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#00D2FF] bg-[#00D2FF]/5 border border-[#00D2FF]/10 px-2 py-0.5 rounded-sm">
                          {project.category}
                        </span>
                        <span className="font-mono text-[9px] text-zinc-500 uppercase">
                          Featured // 0{project.id === 'luxury-fashion' ? '1' : project.id === 'fintech-dashboard' ? '2' : '3'}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-[#00D2FF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Footer tech tags */}
                    <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 font-mono text-[9px] rounded-sm bg-white/[0.02] border border-white/5 text-zinc-500 group-hover:text-zinc-300 group-hover:border-white/10 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNICATE COLLABORATION FORM PANEL */}
        <ContactSection />
      </main>

      {/* CORE BRAND METADATA FOOTER */}
      <Footer onScrollTop={handleScrollTop} />

      {/* Glassmorphic Sliding Detail Study Modal popup overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
