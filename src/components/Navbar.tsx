import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-black/60 backdrop-blur-md border-b border-white/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Name */}
          <button
            id="nav-logo"
            onClick={() => onNavigate('hero')}
            className="flex flex-col text-left group cursor-pointer"
          >
            <span className="font-display font-semibold tracking-wider text-white text-base md:text-lg group-hover:text-[#00D2FF] transition-colors duration-300">
              MOHAMMAD AGHA IBRAHIMI
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#00D2FF]/80 uppercase -mt-0.5">
              Portfolio
            </span>
          </button>

          {/* Desktop Navigation Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                id={`nav-link-${item.target}`}
                onClick={() => onNavigate(item.target)}
                className={`font-mono text-xs tracking-wider transition-all duration-300 relative py-1 cursor-pointer hover:text-white ${
                  activeSection === item.target ? 'text-[#00D2FF]' : 'text-zinc-400'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.target && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00D2FF]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <button
              id="nav-cta-button"
              onClick={() => onNavigate('contact')}
              className="group flex items-center gap-1.5 px-4 py-2 rounded-sm border border-[#00D2FF]/30 hover:border-[#00D2FF] bg-[#00D2FF]/5 hover:bg-[#00D2FF]/10 text-white font-mono text-[11px] tracking-wider transition-all duration-300 cursor-pointer"
            >
              INITIATE PROJECT
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00D2FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white p-1 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#050505]/95 backdrop-blur-lg md:hidden z-30 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 text-left">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.target}
                  id={`mobile-nav-link-${item.target}`}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    // Add delay to let exit animation look clean
                    setTimeout(() => onNavigate(item.target), 200);
                  }}
                  className={`font-display text-4xl font-bold tracking-tight text-left cursor-pointer transition-colors duration-300 ${
                    activeSection === item.target
                      ? 'text-[#00D2FF]'
                      : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.15 }}
                className="mt-12 pt-8 border-t border-white/5"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#edb1ff]/70 mb-3">
                  Let's Create Extraordinary
                </div>
                <button
                  id="mobile-nav-cta"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => onNavigate('contact'), 200);
                  }}
                  className="w-full flex items-center justify-between py-4 border-b border-white/10 text-white font-display text-xl font-medium cursor-pointer hover:text-[#00D2FF] transition-colors"
                >
                  Initiate Project
                  <ArrowUpRight className="w-5 h-5 text-[#00D2FF]" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
