"use client";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { 
  Cpu, 
  Globe, 
  GraduationCap, 
  ExternalLink, 
  Star, 
  LayoutDashboard, 
  ArrowRight 
} from "lucide-react";

// --- ANIMATION VARIANTS (Fixed for TypeScript) ---
const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
  }
};

const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax and rotation effects for the Hero Hub
  const hubRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white font-jakarta selection:bg-[#5051CE]/20 overflow-x-hidden">
      <Navbar />

      {/* --- HERO: THE SYSTEM ENGINE --- */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-[#F8FAFF]">
        {/* Cinematic Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 right-0 w-[300px] md:w-[900px] h-[300px] md:h-[900px] bg-[#5051CE]/10 rounded-full blur-[80px] md:blur-[140px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FDBA12]/5 rounded-full blur-[80px] md:blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-20 items-center">
          <motion.div style={{ y: contentY }} initial="hidden" animate="visible" variants={FADE_UP}>
            <p className="text-[#5051CE] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] mb-6 md:mb-8 flex items-center gap-3">
              <span className="w-6 md:w-8 h-[1px] bg-[#5051CE]" /> Institutional Pedigree
            </p>
            <h1 className="text-5xl md:text-[9rem] font-black text-[#0F172A] tracking-tighter leading-[0.9] md:leading-[0.8] mb-8 md:mb-12">
              TG <br />
              <span className="font-serif italic font-light text-[#5051CE]">Tutified.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-xl">
              Tutified is a high-performance ecosystem engineered under the 
              <span className="text-[#0F172A] font-bold"> Triarch Group</span> framework to institutionalize 
              mentorship through mechanical excellence.
            </p>
          </motion.div>

          {/* RIGHT SIDE: THE TRIARCH HUB (ORBITAL ANIMATION) */}
          <div className="flex justify-center items-center relative mt-12 lg:mt-0">
            <motion.div 
              style={{ rotate: hubRotate }}
              className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full border border-dashed border-slate-200 flex items-center justify-center relative"
            >
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center border border-slate-50"
                  animate={{ rotate: -angle - 360 }}
                  style={{
                    top: `calc(50% - 16px + ${(200) * Math.sin((angle * Math.PI) / 180)}px)`,
                    left: `calc(50% - 16px + ${(200) * Math.cos((angle * Math.PI) / 180)}px)`,
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="text-[#FDBA12] w-3 h-3 md:w-4 md:h-4" fill="#FDBA12" />
                </motion.div>
              ))}
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-48 h-48 md:w-72 md:h-72 bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-[0_30px_60px_-15px_rgba(80,81,206,0.15)] flex items-center justify-center p-8 md:p-10 border border-slate-100 relative z-10 rotate-[-10deg] transition-transform"
              >
                 <Image 
                    src="/tutified-logo.png" 
                    alt="Tutified Logo"
                    width={220}
                    height={220}
                    className="object-contain"
                    priority
                 />
              </motion.div>
            </motion.div>
            
            <div className="absolute -bottom-4 md:-bottom-6 right-0 md:-right-6 bg-[#0F172A] text-white px-5 md:px-8 py-3 md:py-4 rounded-xl md:rounded-[2rem] text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-2xl border border-white/10">
                Institutional Core
            </div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP: THE FOUNDING TRIAD --- */}
      <section className="py-24 md:py-44 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-28 text-center md:text-left">
            <h2 className="text-5xl md:text-8xl font-black text-[#0F172A] tracking-tighter mb-4 leading-none">The <span className="font-serif italic font-light text-[#5051CE]">Triad.</span></h2>
            <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px]">Architecting the Tutified Ecosystem</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER_CONTAINER} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                name: "Mukul Sagar", 
                role: "Faculty & Curriculum", 
                desc: "Institutionalizing pedagogical rigor and syllabus architecture.", 
                icon: GraduationCap, 
                color: "bg-[#5051CE]" 
              },
              { 
                name: "Niyaz Ahmed", 
                role: "Operations Strategy", 
                desc: "Managing the mechanical efficiency of the NCR-wide deployment.", 
                icon: Globe, 
                color: "bg-[#0F172A]" 
              },
              { 
                name: "Sachin Maurya", 
                role: "Tech Infrastructure", 
                desc: "Engineering the digital brain and AI-driven dashboard systems.", 
                icon: Cpu, 
                color: "bg-[#3B82F6]" 
              }
            ].map((leader, i) => (
              <motion.div 
                key={i} 
                variants={FADE_UP} 
                whileHover={{ y: -15 }} 
                className="group p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-[#F8FAFF] border border-slate-100 transition-all hover:bg-white hover:shadow-2xl relative overflow-hidden"
              >
                <div className={`${leader.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-8 md:mb-10 text-white shadow-lg transition-transform group-hover:scale-110`}>
                  <leader.icon strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-2 md:mb-3 tracking-tighter leading-tight">{leader.name}</h3>
                <p className="text-[#5051CE] font-bold text-[9px] md:text-[10px] uppercase tracking-widest mb-6 md:mb-8">{leader.role}</p>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-4">{leader.desc}</p>
                
                {/* Decorative Icon Background (Desktop only for performance) */}
                <div className="absolute -bottom-10 -right-10 text-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none hidden md:block">
                  <leader.icon size={200} strokeWidth={0.5} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- TRIARCH GROUP: THE INSTITUTIONAL PARENT --- */}
      <section className="py-12 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto bg-[#0F172A] rounded-[3rem] md:rounded-[5rem] p-10 md:p-28 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 md:gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-8 md:mb-10">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                   <LayoutDashboard className="text-[#FDBA12] w-6 h-6 md:w-7 md:h-7" />
                </div>
                <p className="text-white font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[10px] md:text-[11px]">The Parent Organization</p>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 md:mb-10 leading-tight">
                Engineered by <br className="hidden md:block" />
                <span className="text-[#FDBA12]">Triarch Group.</span>
              </h2>
              <p className="text-white/60 font-medium text-lg md:text-xl leading-relaxed mb-10 md:mb-12 max-w-xl mx-auto lg:mx-0">
                Tutified is the educational expression of <strong className="text-white">Triarch Group</strong>. We leverage industrial-grade vetting labs to ensure our mentors are the top 10% in the country.
              </p>
              <a href="https://triarchgroup.in" target="_blank" className="bg-white text-[#0F172A] px-10 py-5 md:px-12 md:py-6 rounded-2xl md:rounded-3xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] inline-flex items-center gap-4 hover:scale-105 transition-transform shadow-2xl">
                Visit triarchgroup.in <ExternalLink size={16} />
              </a>
            </div>

            {/* Institutional Seal Visual */}
            <div className="flex justify-center items-center">
                <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#5051CE]/20 rounded-full animate-pulse blur-3xl" />
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-t-2 border-b-2 border-white/10 rounded-full" 
                    />
                    <div className="relative z-10 w-48 h-48 md:w-72 md:h-72 bg-white rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(253,186,18,0.2)] p-10 md:p-12 border-[12px] md:border-[16px] border-slate-900/40">
                        <Image 
                            src="/triarch logo.jpeg" 
                            alt="Triarch Seal" 
                            width={180} 
                            height={180} 
                            className="object-contain grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                        />
                    </div>
                </div>
            </div>
          </div>
          {/* System Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '50px 50px' }} />
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="relative py-24 md:py-48 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-tr from-[#5051CE] to-[#FDBA12] rounded-full blur-[120px] md:blur-[180px]" />
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-50 border border-slate-100 rounded-full mb-8 md:mb-12 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#FDBA12] animate-pulse" />
            <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] md:tracking-[0.4em]">
              Admission Protocol / Triarch Group
            </p>
          </div>

          <h2 className="text-5xl md:text-[9.5rem] font-black text-[#0F172A] tracking-tighter mb-12 md:mb-20 leading-[0.9] md:leading-[0.8] selection:bg-[#5051CE] selection:text-white">
            Join the <br />
            <span className="font-serif italic font-light text-[#5051CE]">Academy.</span>
          </h2>

          <motion.div className="relative inline-block group w-full md:w-auto">
            <motion.a 
              href="/contact" 
              className="relative flex items-center justify-center gap-4 md:gap-6 bg-[#0F172A] text-white px-10 py-6 md:px-20 md:py-10 rounded-2xl md:rounded-[2.5rem] font-black text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] shadow-2xl transition-all overflow-hidden z-10 border border-white/5"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10">Begin Engagement</span>
              <ArrowRight size={22} className="text-[#FDBA12]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </motion.a>
          </motion.div>

          <div className="mt-12 md:mt-16 flex items-center justify-center gap-4 md:gap-8 opacity-40">
            <div className="h-[1px] w-8 md:w-12 bg-slate-200" />
            <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              Institutional Tier Access
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-slate-200" />
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}