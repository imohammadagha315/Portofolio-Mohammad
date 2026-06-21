import React from 'react';
import { X, ExternalLink, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          id="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#020202]/90 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Card content wrapper */}
        <motion.div
          id={`modal-content-${project.id}`}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative w-full max-w-4xl bg-gradient-to-b from-[#111111] to-[#0c0c0c] border border-white/10 rounded-sm overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row shadow-2xl shadow-[#00D2FF]/5"
        >
          {/* Close button top right */}
          <button
            id="modal-close-trigger"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left Column: Rich image & floating labels */}
          <div className="w-full md:w-1/2 relative bg-zinc-950 flex items-center justify-center min-h-[250px] md:min-h-full">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center absolute inset-0 opacity-80"
            />
            {/* Dark bottom vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono tracking-widest bg-[#00D2FF]/20 backdrop-blur-md text-[#00D2FF] border border-[#00D2FF]/30">
                {project.category}
              </span>
              <h3 className="font-display font-semibold text-white text-2xl tracking-tight mt-2">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Right Column: Descriptions & Details */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-4 h-4 text-[#edb1ff]" />
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                  Featured Case Study
                </span>
              </div>

              <h4 className="font-display font-medium text-lg text-white mb-2 leading-snug">
                {project.subtitle}
              </h4>

              <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-2.5">
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-sm bg-white/5 border border-white/10 text-zinc-300 hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Live preview & checkout metrics */}
            <div className="pt-6 border-t border-white/5 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) {
                    onClose();
                    setTimeout(() => {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }
                }}
                className="w-full text-center py-3 rounded-sm bg-white hover:bg-zinc-200 text-black font-mono font-medium text-xs tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                DISCUSS A SIMILAR PROJECT
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                id="modal-request-quote"
                onClick={onClose}
                className="w-full py-2.5 rounded-sm bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white border border-white/10 text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer"
              >
                Return to Overview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
