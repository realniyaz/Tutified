"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { 
  ShieldCheck, Zap, Fingerprint, Search, X,
  BarChart3, Layers, Microscope, ArrowRight, Star,
  CheckCircle2, TrendingUp, FileText
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const FADE_UP = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

export default function WhyChooseUsPage() {
  const [showAudit, setShowAudit] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scanY = useTransform(scrollYProgress, [0, 1], ["-10%", "110%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white font-jakarta selection:bg-[#5051CE]/20">
      <Navbar />

      {/* --- SECTION 1: HERO MANIFESTO --- */}
      <section className="relative pt-44 pb-32 overflow-hidden bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={FADE_UP}>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-100 mb-8 shadow-sm">
              <Fingerprint size={14} className="text-[#5051CE]" />
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">The Verification Standard</p>
            </div>
            <h1 className="text-6xl md:text-[9rem] font-black text-[#0F172A] tracking-tighter leading-[0.8] mb-12">
              Beyond <br />
              <span className="font-serif italic font-light text-[#5051CE]">Tuition.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
              We don't just find tutors. We engineer success through a proprietary 
              <span className="text-[#0F172A] font-bold"> Audit Framework</span> built in collaboration with Triarch Group.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-10 w-24 h-24 border border-slate-200 rounded-3xl rotate-12 flex items-center justify-center"><Search size={20} className="text-slate-300" /></div>
            <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-slate-200 rounded-[2rem] -rotate-12 flex items-center justify-center"><BarChart3 size={32} className="text-slate-300" /></div>
        </div>
      </section>

      {/* --- SECTION 2: THE 10% AUDIT --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
            <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] tracking-tighter mb-8 leading-[0.9]">
              The 1-in-10 <br /> <span className="text-[#5051CE]">Protocol.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12">
              Most platforms are marketplaces; we are an institution. Every mentor undergoes the **Triarch Quality Audit**—a four-stage vetting process that ensures pedagogical mastery and safety.
            </p>
            <div className="space-y-6">
              {[
                { title: "Psychometric Evaluation", desc: "Assessing mentor temperament and student empathy." },
                { title: "Pedagogical Demo", desc: "Live session audit by our Faculty Board." },
                { title: "Background Forensic", desc: "Multi-layer address and document verification." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#5051CE] group-hover:bg-[#5051CE] group-hover:text-white transition-all">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#0F172A] text-sm uppercase tracking-widest">{item.title}</h4>
                    <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative bg-[#0F172A] rounded-[4rem] h-[600px] overflow-hidden p-12 border-[12px] border-slate-100 shadow-2xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '30px 30px' }} />
            <motion.div style={{ top: scanY }} className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FDBA12] to-transparent z-20 shadow-[0_0_20px_#FDBA12]" />
            <div className="relative z-10 flex flex-col justify-center h-full">
               <div className="space-y-8">
                  {[0.1, 0.4, 0.7].map((delay, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay }} className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                      <div className="w-8 h-2 bg-white/20 rounded-full mb-3" />
                      <div className="w-full h-4 bg-white/5 rounded-full" />
                    </motion.div>
                  ))}
                  <div className="text-center pt-10">
                    <p className="text-6xl font-black text-[#FDBA12] mb-2 tracking-tighter">10%</p>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.3em]">Selection Rate</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TRIARCH GROUP SYNERGY --- */}
      <section className="py-32 px-6 bg-[#0F172A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 mb-10 mx-auto">
              <Layers className="text-[#FDBA12]" size={32} />
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
              Institutionalized by <br /> <span className="text-[#5051CE]">Triarch Group.</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-16">
              Tutified is powered by the operational infrastructure of **Triarch Group**. This synergy allows us to provide industrial-grade security for your home tuition and data.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 w-full">
              {[
                { label: "Data Architecture", desc: "Triarch-secured encryption for all residential data.", icon: ShieldCheck },
                { label: "Pedagogical Labs", desc: "Curriculum developed by Triarch Academic Board.", icon: Microscope },
                { label: "System Uptime", desc: "99.9% uptime for the Tutified Parent Dashboard.", icon: Zap }
              ].map((box, i) => (
                <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] text-left hover:bg-white/10 transition-all">
                  <box.icon className="text-[#FDBA12] mb-6" size={28} />
                  <h4 className="text-white font-black text-lg mb-2">{box.label}</h4>
                  <p className="text-white/40 text-sm font-medium leading-relaxed">{box.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute -bottom-20 -right-20 opacity-[0.02]">
           <Star size={600} strokeWidth={0.5} className="text-white" />
        </div>
      </section>

      {/* --- SECTION 4: THE RESULT ENGINE --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
                <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] tracking-tighter mb-8 leading-[0.9]">
                  Monthly <br /> <span className="text-[#5051CE]">Audit Reports.</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                  Transparency is our product. Every month, you receive a detailed **Performance Audit** highlighting your child's progress, learning gaps, and upcoming strategy.
                </p>
                {/* FUNCTIONAL BUTTON */}
                <button 
                  onClick={() => setShowAudit(true)}
                  className="inline-flex items-center gap-4 bg-[#0F172A] text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                >
                  View Sample Audit <ArrowRight size={14} className="text-[#FDBA12]" />
                </button>
             </motion.div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             <div className="space-y-4 pt-12">
               <div className="h-64 bg-slate-50 rounded-[3rem] border border-slate-100 p-8 flex flex-col justify-end">
                  <BarChart3 className="text-[#5051CE] mb-4" size={32} />
                  <p className="text-xs font-black text-[#0F172A] uppercase tracking-widest">Growth Metrics</p>
               </div>
               <div className="h-48 bg-[#FDBA12] rounded-[3rem] p-8 flex flex-col justify-end">
                  <Star className="text-[#0F172A] mb-4" size={32} fill="#0F172A" />
                  <p className="text-xs font-black text-[#0F172A] uppercase tracking-widest">Parent Choice</p>
               </div>
             </div>
             <div className="space-y-4">
               <div className="h-48 bg-[#5051CE] rounded-[3rem] p-8 flex flex-col justify-end text-white">
                  <Zap className="text-white mb-4" size={32} />
                  <p className="text-xs font-black uppercase tracking-widest">Insta-Connect</p>
               </div>
               <div className="h-64 bg-[#0F172A] rounded-[3rem] p-8 flex flex-col justify-end text-white">
                  <ShieldCheck className="text-[#FDBA12] mb-4" size={32} />
                  <p className="text-xs font-black uppercase tracking-widest">Verified 100%</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- THE SAMPLE AUDIT MODAL --- */}
      <AnimatePresence>
        {showAudit && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowAudit(false)} className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-xl" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 40 }} className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
              {/* Sidebar: Institutional Branding */}
              <div className="bg-[#0F172A] md:w-[300px] p-10 text-white flex flex-col justify-between border-r border-white/5">
                <div>
                   <ShieldCheck className="text-[#FDBA12] mb-10" size={42} />
                   <h3 className="text-2xl font-black tracking-tighter leading-none mb-4">Academic <br/>Audit Dossier.</h3>
                   <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-10">Triarch Governance v2.6</p>
                   <div className="space-y-6">
                      {[ { label: "ID", val: "TFD-9921" }, { label: "Auditor", val: "M. Sagar" }, { label: "Status", val: "Finalized" } ].map(item => (
                        <div key={item.label}>
                           <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">{item.label}</p>
                           <p className="text-xs font-bold text-white/90">{item.val}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-8 md:p-16 overflow-y-auto no-scrollbar bg-white">
                <button onClick={() => setShowAudit(false)} className="absolute top-8 right-8 p-3 hover:bg-slate-50 rounded-2xl transition-all"><X size={20} /></button>
                <div className="grid grid-cols-3 gap-4 mb-10">
                   {[ { label: "Mastery", val: "88.4%", icon: Star, col: "text-amber-500" }, { label: "Attendance", val: "100%", icon: CheckCircle2, col: "text-emerald-500" }, { label: "Velocity", val: "+12.2%", icon: TrendingUp, col: "text-blue-500" } ].map(stat => (
                     <div key={stat.label} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <stat.icon size={16} className={`${stat.col} mb-3`} />
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-xl font-black text-[#0F172A]">{stat.val}</p>
                     </div>
                   ))}
                </div>
                <h4 className="text-[10px] font-black text-[#5051CE] uppercase tracking-[0.3em] mb-6">Learning Matrix</h4>
                <div className="h-40 w-full bg-slate-50 rounded-[2rem] flex items-end justify-around p-8 mb-10 border border-slate-100">
                  {[80, 65, 90, 75, 85].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.5 + (i*0.1) }} className="w-8 md:w-12 bg-[#5051CE] rounded-t-xl" />
                  ))}
                </div>
                <div className="space-y-6">
                   <h4 className="text-[10px] font-black text-[#0F172A] uppercase tracking-[0.3em] border-b border-slate-100 pb-4">Observations</h4>
                   <p className="text-sm text-slate-500 font-medium leading-relaxed italic">"The student has shown exceptional growth in Algebraic Logic. We recommend focusing on Answer-Writing Aesthetics for the upcoming June simulation exams."</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}