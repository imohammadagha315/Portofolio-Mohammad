import React, { useState } from 'react';
import { Send, MapPin, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Focus states for input fields to trigger elegant float label animations
  const [focusFields, setFocusFields] = useState<Record<string, boolean>>({});

  const servicesList = [
    'Website Development',
    'Shopify Development',
    'IT Support',
    'Digital Solutions',
    'Technical Training',
  ];

  const handleToggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((item) => item !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleFocus = (field: string) => {
    setFocusFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setFocusFields((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate high-security server API handshake
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setSelectedServices([]);
      // Reset submit message after 6 seconds
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative border-t border-white/5 bg-black overflow-hidden">
      {/* Decorative ambient glowing grids */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#00D2FF]/[0.02] blur-3xl pointer-events-none -z-10" />
      <div className="absolute left-0 top-0 w-80 h-80 bg-[#edb1ff]/[0.02] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        {/* Left Columns: Text CTA and communications metadata */}
        <div className="lg:col-span-5 text-left flex flex-col justify-center h-full">
          <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-2">
            04 / Collaborate or Hire
          </span>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Let's Create<br />Extraordinary
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-[#00D2FF] to-[#edb1ff] mt-4 mb-8" />

          <p className="font-sans text-sm text-zinc-400 leading-relaxed mb-10 max-w-sm">
            Whether you are planning a high-end custom e-commerce solution, scaling technical workshops, or setting up robust IT integrations, I am here to help map and construct standard-setting platforms.
          </p>

          {/* Symmetrical contact card details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-zinc-950 border border-white/5 rounded-sm text-[#00D2FF] group-hover:border-[#00D2FF]/30 transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                  Secure Electronic Mail
                </span>
                <a
                  href="mailto:imohammadagha@gmail.com"
                  className="font-display text-sm font-medium text-white hover:text-[#00D2FF] transition-colors"
                >
                  imohammadagha@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-zinc-950 border border-white/5 rounded-sm text-[#edb1ff] group-hover:border-[#edb1ff]/30 transition-all">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                  Global Coordinate Office
                </span>
                <span className="font-display text-sm font-medium text-white">
                  Kandahar, Afghanistan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Columns: Fully Interactive Form wrapper */}
        <div className="lg:col-span-7 bg-zinc-950/40 border border-white/5 rounded-sm p-6 md:p-10 relative">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#00D2FF] animate-pulse" />
              <span className="font-mono text-[10px] uppercase text-zinc-400 tracking-widest">
                Construct Session Bid
              </span>
            </div>

            {/* Custom interactive service selectors */}
            <div className="space-y-3">
              <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-2.5 text-left">
                Select Desired Deliverables
              </label>
              <div className="flex flex-wrap gap-2 text-left">
                {servicesList.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() => handleToggleService(service)}
                      className={`px-3 py-1.5 rounded-sm font-mono text-[10px] uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#00D2FF]/10 text-[#00D2FF] border-[#00D2FF]'
                          : 'bg-white/[0.02] text-zinc-400 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic float input fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="relative">
                <label
                  htmlFor="contact-name"
                  className={`absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[11px] text-zinc-500 tracking-wider pointer-events-none transition-all duration-300 ${
                    focusFields.name || formData.name
                      ? 'left-2 top-0 text-[9px] text-[#00D2FF] bg-[#0c0c0c] px-1 md:-translate-y-1/2'
                      : ''
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name', formData.name)}
                  required
                  className="w-full px-4 py-3.5 bg-black/60 border border-white/5 focus:border-[#00D2FF]/40 text-sm text-white rounded-sm outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="contact-email"
                  className={`absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[11px] text-zinc-500 tracking-wider pointer-events-none transition-all duration-300 ${
                    focusFields.email || formData.email
                      ? 'left-2 top-0 text-[9px] text-[#00D2FF] bg-[#0c0c0c] px-1 md:-translate-y-1/2'
                      : ''
                  }`}
                >
                  Your Email Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email', formData.email)}
                  required
                  className="w-full px-4 py-3.5 bg-black/60 border border-white/5 focus:border-[#00D2FF]/40 text-sm text-white rounded-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div className="relative pt-4">
              <label
                htmlFor="contact-message"
                className={`absolute left-4 top-12 font-mono text-[11px] text-zinc-500 tracking-wider pointer-events-none transition-all duration-300 ${
                  focusFields.message || formData.message
                    ? 'left-2 top-0 text-[9px] text-[#00D2FF] bg-[#0c0c0c] px-1'
                    : ''
                }`}
              >
                Outline Project Goals
              </label>
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message', formData.message)}
                required
                rows={5}
                className="w-full px-4 py-3.5 bg-black/60 border border-white/5 focus:border-[#00D2FF]/40 text-sm text-white rounded-sm outline-none transition-colors resize-none pt-4"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-sm bg-white hover:bg-zinc-200 text-black font-mono font-medium text-xs tracking-wider transition-all duration-300 transform hover:translate-y-[-1px] cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  INITIATING HANDSHAKE...
                </>
              ) : (
                <>
                  TRANSMIT SPECIFICATIONS
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          {/* Dynamic confirmation feedback popup toast */}
          <AnimatePresence>
            {submitSuccess && (
              <motion.div
                id="contact-success-toast"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10 p-5 bg-[#0e1f13] border border-[#22c55e]/20 rounded-sm flex items-start gap-3.5 text-left z-20 shadow-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-medium text-sm text-white mb-1">
                    Transmission Acknowledged
                  </h4>
                  <p className="font-sans text-xs text-zinc-400 leading-normal">
                    Specifications securely captured. Mohammad Agha Ibrahimi will respond over email within 24 hours to schedule our mapping session.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
