import React, { useState, useEffect } from 'react';
import { ArrowDown, CornerDownRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_TYPING_WORDS } from '../data';

interface HeroSectionProps {
  onLearnMore: () => void;
  onInitiateProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLearnMore, onInitiateProject }) => {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeWord = HERO_TYPING_WORDS[wordIdx];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < activeWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(activeWord.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Hold for 2 seconds before start deleting
        timer = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(activeWord.substring(0, displayedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % HERO_TYPING_WORDS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start py-20 px-6 overflow-hidden md:py-32"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        {/* Left Columns: Introductory details */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Accent greeting chip */}
          <motion.div
            id="hero-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-sm bg-[#00D2FF]/10 border border-[#00D2FF]/20 text-white mb-6"
          >
            <Zap className="w-3.5 h-3.5 text-[#00D2FF] animate-pulse" />
            <span className="font-mono text-[10px] uppercase font-semibold tracking-wider text-[#00D2FF]">
              SYSTEMS ACTIVE: SECURE CLOUD WORKSPACE
            </span>
          </motion.div>

          {/* Core Name */}
          <motion.h1
            id="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[0.95]"
          >
            MOHAMMAD<br />AGHA IBRAHIMI
          </motion.h1>

          {/* Cycling Typing Element Subtitle */}
          <div className="mt-6 min-h-[40px] md:min-h-[50px] flex items-center">
            <span className="font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-widest mr-2 flex items-center gap-1">
              <CornerDownRight className="w-4 h-4 text-[#edb1ff]" /> I am a
            </span>
            <span className="font-display font-medium text-lg md:text-2xl text-white tracking-wide border-r-2 border-[#00D2FF] pr-1 animate-blink select-none">
              {displayedText}
            </span>
          </div>

          <motion.p
            id="hero-intro"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-zinc-400 font-sans text-sm md:text-base leading-relaxed max-w-xl"
          >
            Bridging hardware, computer science architecture, and web aesthetics together. 
            Designing digital spaces where clean algorithms meet premium visuals, helping high-growth 
            brands create extraordinary outcomes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            id="hero-ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              id="hero-cta-initiate"
              onClick={onInitiateProject}
              className="px-8 py-3.5 rounded-sm bg-[#00D2FF] hover:bg-[#00D2FF]/80 text-black font-mono font-medium text-xs tracking-wider transition-all duration-300 transform hover:translate-y-[-1px] shadow-lg shadow-[#00D2FF]/10 cursor-pointer"
            >
              INITIATE PROJECT
            </button>
            <button
              id="hero-cta-explore"
              onClick={onLearnMore}
              className="px-8 py-3.5 rounded-sm bg-transparent hover:bg-white/5 text-white border border-white/10 hover:border-white/30 font-mono text-xs tracking-wider transition-all duration-300 cursor-pointer"
            >
              EXPLORE CASE STUDIES
            </button>
          </motion.div>

          {/* Stats indicators */}
          <motion.div
            id="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8 md:gap-12"
          >
            <div>
              <div className="font-mono text-[9px] tracking-widest text-[#00D2FF] uppercase mb-1">
                E-Commerce Delivery
              </div>
              <div className="font-display font-semibold text-2xl text-white">
                100% Satisfied
              </div>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-widest text-[#edb1ff] uppercase mb-1">
                Completed Deliverables
              </div>
              <div className="font-display font-semibold text-2xl text-white">
                15+ Live Apps
              </div>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase mb-1">
                Architecture Standard
              </div>
              <div className="font-display font-semibold text-2xl text-white">
                Next-Gen Custom
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Columns: Left blank or empty space on desktop to let the stunning rotating Dodecahedron cage show through beautifully! */}
        <div className="hidden lg:col-span-5 lg:flex h-full items-center justify-center pointer-events-none">
          {/* Symmetrical placeholder wrapper to ensure alignment is completely consistent with the Dodecahedron coordinates */}
          <div className="w-full h-80" />
        </div>
      </div>

      {/* Floating Scroll indicator badge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10" onClick={onLearnMore}>
        <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="p-1 rounded-full border border-white/10"
        >
          <ArrowDown className="w-3.5 h-3.5 text-zinc-400" />
        </motion.div>
      </div>
    </section>
  );
};
