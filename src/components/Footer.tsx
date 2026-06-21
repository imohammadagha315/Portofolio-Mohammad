import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTop }) => {
  return (
    <footer id="main-footer" className="py-12 px-6 border-t border-white/5 bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand name and copy */}
        <div className="text-left">
          <p className="font-display font-medium text-xs tracking-wider text-white">
            MOHAMMAD AGHA IBRAHIMI
          </p>
          <p className="font-sans text-[11px] text-zinc-500 mt-1">
            © {new Date().getFullYear()} All rights reserved. Crafted to showcase digital engineering mastery.
          </p>
        </div>

        {/* Right Side: Back to top button */}
        <button
          id="scroll-top-trigger"
          onClick={onScrollTop}
          className="group flex items-center gap-1.5 px-4 py-2 rounded-sm border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white font-mono text-[10px] tracking-wider transition-colors cursor-pointer"
          aria-label="Scroll back to top of the page"
        >
          BACK TO APEX
          <ArrowUp className="w-3.5 h-3.5 text-zinc-400 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
};
