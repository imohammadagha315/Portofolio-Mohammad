import React from 'react';
import { Award, BookOpen, Fingerprint, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { CORE_VALUES_DATA, EDUCATION_DATA } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative border-t border-white/5 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-2">
            01 / Digital Craftsmanship
          </span>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-white tracking-tight">
            About Mohammad Agha Ibrahimi
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-[#00D2FF] to-[#edb1ff] mt-4" />
        </div>

        {/* content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Decorative frames */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              id="about-portrait-frame"
              whileHover={{ scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[360px] aspect-[4/5] rounded-sm overflow-hidden border border-white/10 group cursor-crosshair shadow-2xl shadow-black/80"
            >
              {/* Animated glowing decorative background accents */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-30" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#00d2ff] via-transparent to-[#edb1ff] rounded-sm opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40" />

              {/* Portrait Image */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb2ioRcA4W2xJeaeoUos5ZXCXzp0mGiegjZYpnQVfConsCtT76HZFh5zxKUwuUFNlX-W8gKBgyovhbqX1-eYVBxYPtaGy19pezRwzxVPgdaaG7uYOHPvJzkkr2AF6vh-mAkb2XtACj-cfRxSEPRb2ThTNZzZr37v_KcvlpnNb8k6pjw7lfnGttBPGS-0pcCbeKHASKj0mEk_QTRLlVIibYazYek2elyHitHdqNzT4OanKlnHPaN2Ft1KjRzsr0iRqaQGbA1qmq_cs"
                alt="Mohammad Agha Ibrahimi Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
              />

              {/* Minimal coordinates overlay */}
              <div className="absolute top-4 left-4 font-mono text-[9px] text-[#00D2FF]/60 cursor-default select-none z-10">
                PORTRAIT // SYSTEM CORE
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-[#edb1ff]/60 cursor-default select-none z-10">
                LAT. 31.629 | LONG. 65.737
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio details, values & education */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Bio text */}
            <div className="text-left space-y-4">
              <p className="font-sans text-base text-zinc-300 leading-relaxed">
                As a dedicated <strong className="text-[#00D2FF] font-medium">Computer Science Graduate</strong>, web developer, and digital solutions specialist, I craft fast, responsive, and secure custom applications. I understand that web craftsmanship extends far beyond client-side layouts — it lives in pixel alignment, rigorous state management, and reliable server architectures.
              </p>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                By synthesizing rigorous theoretical foundations with modern tools, my process ensures your users experience minimal friction. From launching complex Shopify themes to writing durable relational data queries, I build standard-setting tools which scale seamlessly as your business scales.
              </p>
            </div>

            {/* Core Values Rows */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#edb1ff] mb-4 text-left">
                Core Engineering Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CORE_VALUES_DATA.map((value, idx) => {
                  const isCyan = value.colorTheme === 'cyan';
                  return (
                    <div
                      key={value.title}
                      className="p-5 bg-white/[0.02] border border-white/5 rounded-sm flex items-start gap-4 hover:border-[#00D2FF]/20 hover:bg-white/[0.04] transition-all duration-300"
                    >
                      <div className={`p-2 rounded-sm bg-black/60 border ${isCyan ? 'bg-[#00D2FF]/10 border-[#00D2FF]/20 text-[#00D2FF]' : 'bg-[#edb1ff]/10 border-[#edb1ff]/20 text-[#edb1ff]'}`}>
                        {idx === 0 ? <Fingerprint className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                      </div>
                      <div className="text-left">
                        <h4 className="font-display font-medium text-sm text-white mb-1.5">
                          {value.title}
                        </h4>
                        <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Academic Credentials Section */}
            <div className="pt-6 border-t border-white/5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 text-left">
                Education & Achievements
              </h3>
              <div className="flex flex-col gap-3">
                {EDUCATION_DATA.map((edu) => (
                  <div
                    key={edu.degree}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white/[0.01] border border-white/5 rounded-sm hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div className="p-2 bg-black/40 text-zinc-400">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-display font-medium text-sm text-white">
                          {edu.degree}
                        </h4>
                        <p className="font-sans text-xs text-zinc-400">
                          {edu.school}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mt-2 sm:mt-0 sm:text-right bg-black/40 px-2 py-0.5 border border-white/5 self-start sm:self-auto">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
