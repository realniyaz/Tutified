"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, Star, CheckCircle2, Sparkles } from "lucide-react";

export default function Hero() {
  const FADE_UP_ANIMATION = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    // CHANGE: Removed min-h-screen, added specific pt for the floating navbar
    <section className="relative flex flex-col pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#F8FAFF]">
      
      {/* Premium Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#5051CE]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] right-[-5%] w-[500px] h-[500px] bg-[#FDBA12]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* CHANGE: Added items-start instead of items-center to prevent "floating" in middle */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-6 items-start">
          
          {/* Left Column: Content */}
          <motion.div 
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.08 }}
            className="flex flex-col items-start pt-4" // Minor internal padding to align with image top
          >
            <motion.div 
              variants={FADE_UP_ANIMATION}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#5051CE]/10 shadow-sm mb-8"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#5051CE]" />
              <span className="text-[10px] font-black text-[#5051CE] uppercase tracking-[0.2em]">
                Delhi-NCR Premium Mentorship
              </span>
            </motion.div>

            <motion.h1 
              variants={FADE_UP_ANIMATION}
              className="text-6xl md:text-8xl lg:text-[100px] font-[1000] text-[#0F172A] leading-[0.85] tracking-[-0.04em] mb-8"
            >
              ELITE HOME <br />
              <span className="text-[#5051CE] italic">TUITIONS.</span>
            </motion.h1>

            <motion.p 
              variants={FADE_UP_ANIMATION}
              className="text-lg text-slate-500 max-w-[500px] leading-relaxed mb-10 font-medium"
            >
              Excellence delivered to your doorstep. We bridge the gap between potential and performance with Ivy-League standard personal mentoring.
            </motion.p>

            <motion.div 
  variants={FADE_UP_ANIMATION}
  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
>
  {/* Call Button - Linked to Phone */}
  <a href="tel:+919315956745" className="w-full sm:w-auto">
    <button className="w-full group flex items-center justify-center gap-3 bg-[#5051CE] text-white px-9 py-4.5 rounded-2xl font-bold transition-all hover:bg-[#3F40A8] shadow-xl shadow-[#5051CE]/20 active:scale-95">
      Book Free Trial
      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
    </button>
  </a>
  
  {/* WhatsApp Button - Linked with Pre-filled Message */}
  <a 
    href="https://wa.me/919315956745?text=Hi%20Tutified!%20I'm%20interested%20in%20booking%20a%20free%20home%20tuition%20trial." 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 px-9 py-4.5 rounded-2xl font-bold hover:bg-slate-50 hover:border-[#25D366]/30 transition-all shadow-sm active:scale-95">
      <MessageCircle size={18} className="text-[#25D366]" />
      WhatsApp Us
    </button>
  </a>
</motion.div>

            <motion.div 
              variants={FADE_UP_ANIMATION}
              className="mt-14 flex flex-wrap gap-x-10 gap-y-4"
            >
              <div className="flex items-center gap-2 text-slate-400 font-bold">
                <CheckCircle2 size={16} className="text-[#5051CE]" />
                <span className="text-[10px] uppercase tracking-widest">Background Verified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-bold">
                <CheckCircle2 size={16} className="text-[#5051CE]" />
                <span className="text-[10px] uppercase tracking-widest">Targeted Results</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Component */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] w-full max-w-[440px] ml-auto bg-white rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(80,81,206,0.12)] border-[10px] border-white overflow-hidden group">
              <Image 
                src="/hero-tutoring.jpg" 
                alt="Tutoring Session" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* Social Proof Overlap */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 -left-12 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-xl border border-white/50 z-20 flex items-center gap-4"
            >
               <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#5051CE] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">AJ</div>
                  <div className="w-10 h-10 rounded-full bg-amber-400 border-2 border-white" />
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-[10px] font-black text-[#0F172A] uppercase tracking-tighter">500+ Happy Parents</p>
                </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}