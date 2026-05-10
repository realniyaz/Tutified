"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Fingerprint, MapPin, SearchCheck, Rocket } from "lucide-react";

// --- TYPES & INTERFACES ---
interface Slide {
  id: number;
  label: string;
  icon: React.ElementType;
  iconColor?: string;
  titleHtml: string;
  excerpt: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    label: "Institutional Identity",
    icon: Fingerprint,
    titleHtml: "We don't match tutors; <br/> we blueprint <span class='font-serif italic font-light text-[#5051CE]'>Intellect.</span>",
    excerpt: "Tutified bridges potential and performance using forensic auditing protocols to build intellectual sovereignty."
  },
  {
    id: 2,
    label: "Market Forensics",
    icon: MapPin,
    iconColor: "#FDBA12",
    titleHtml: "Delhi and Noida’s answer to <br/> unstoppable <span class='font-serif italic font-light text-[#5051CE]'>Chaos.</span>",
    excerpt: "The NCR marketplace is starving for managed consistency. We deliver Ivy-League standard instruction to your doorstep."
  },
  {
    id: 3,
    label: "System Safety",
    icon: SearchCheck,
    titleHtml: "The audited, vetted, and <br/> reliable alternative to <span class='font-serif italic font-light text-[#5051CE]'>Marketplaces.</span>",
    excerpt: "Safety is not optional. We run deeper forensics on our mentors than any standard agency, verified by Triarch Group governance."
  },
  {
    id: 4,
    label: "Future Architecture",
    icon: Rocket,
    titleHtml: "Early development for the <br/> future-ready <span class='font-serif italic font-light text-[#5051CE]'>Mind.</span>",
    excerpt: "From Junior Foundation to Competitive Mastery (CUET), our protocols are optimized for cognitive load, not rote memory."
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-Slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hello Tutified! I want to initiate the pedagogical onboarding protocol.");
    window.open(`https://wa.me/919315956745?text=${msg}`, "_blank");
  };

  // Extract current slide data for cleaner JSX
  const currentSlide = SLIDES[index];
  const IconComponent = currentSlide.icon;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-[#0F172A]">
      
      {/* 1. Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#5051CE]/10 via-transparent to-transparent opacity-60" />
      </div>

      {/* 2. The Slideshow Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center w-full"
          >
            {/* Label Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-10 backdrop-blur-xl">
              <div style={{ color: currentSlide.iconColor || "#FDBA12" }}>
                <IconComponent size={16} />
              </div>
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
                {currentSlide.label}
              </span>
            </div>

            {/* Cinematic Headline */}
            <h1 
              className="text-5xl md:text-7xl lg:text-[100px] font-[1000] text-white tracking-[-0.05em] leading-[0.85] mb-12 max-w-6xl"
              dangerouslySetInnerHTML={{ __html: currentSlide.titleHtml }}
            />
            
            {/* Humane Excerpt */}
            <p className="text-white/50 text-lg md:text-xl max-w-[650px] leading-relaxed mb-16 font-medium">
              {currentSlide.excerpt}
            </p>
          </motion.div>
        </AnimatePresence>
        
        {/* 3. Global CTA (Static) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <button 
            onClick={handleWhatsApp}
            className="w-full bg-[#5051CE] text-white px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#5051CE]/20 flex items-center justify-center gap-3"
          >
            Book Demo <ArrowRight size={16} />
          </button>
          
          <Link href="/programs" className="w-full sm:w-auto">
            <button className="w-full border border-white/10 text-white px-12 py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white/5 transition-all active:scale-95">
              The Programs
            </button>
          </Link>
        </div>

        {/* 4. Slide Progress Dots */}
        <div className="flex items-center gap-3 mt-24">
          {SLIDES.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-white' : 'w-1.5 bg-white/20'}`}
            />
          ))}
        </div>
      </div>

      {/* 5. FIXED SYSTEM STATUS: 2026 */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm bg-white p-2 rounded-full shadow-2xl border border-slate-100 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none">System Live / NCR</span>
        </div>
        <div className="w-[1px] h-4 bg-slate-100" />
        <span className="text-[10px] font-black text-[#5051CE] uppercase tracking-widest">Tutified 2026</span>
      </div>
    </section>
  );
}