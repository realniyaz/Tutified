"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { 
  X, Phone, MessageCircle, ChevronRight, 
  BookOpen, Trophy, Rocket, Sparkles,
  CheckCircle2, ArrowUpRight, GraduationCap, 
  Beaker, Landmark, Palette, Zap
} from "lucide-react";

// --- PROGRAM DATA ---
const PROGRAMS = [
  {
    id: "juniors",
    title: "Junior Foundation",
    grade: "Classes 1st - 5th",
    tagline: "Building Cognitive Sovereignty",
    icon: Sparkles,
    color: "#5051CE",
    accent: "bg-indigo-50/50",
    description: "The most critical phase of neural development. Our Junior Foundation builds the 'Learning OS' through logic and linguistic fluency.",
    curriculum: [
      { goal: "Logic Hub", detail: "Mathematical puzzles and mental math labs." },
      { goal: "Language Lab", detail: "Reading comprehension and expressive vocabulary." }
    ],
    outcomes: ["Analytical Thinking", "Public Speaking", "Math Speed"],
    phone: "+91 9315956745"
  },
  {
    id: "middle",
    title: "Mid-School Mastery",
    grade: "Classes 6th - 8th",
    tagline: "The Logical Transition",
    icon: BookOpen,
    color: "#0F172A",
    accent: "bg-slate-50",
    description: "Bridging elementary curiosity and competitive rigor. We introduce structured note-taking and deep subject specialization.",
    curriculum: [
      { goal: "Advanced Algebra", detail: "Establishing the foundation for higher math." },
      { goal: "Digital Resource", detail: "Curated notes and video context for every unit." }
    ],
    outcomes: ["Note-taking Habits", "Self-Study Protocols", "Unit Mastery"],
    phone: "+91 9315956745"
  },
  {
    id: "prep",
    title: "Board Practice",
    grade: "Classes 9th & 10th",
    tagline: "Institutional Performance",
    icon: Trophy,
    color: "#FDBA12",
    accent: "bg-amber-50/50",
    description: "High-intensity board preparation. We focus on answer-writing aesthetics, speed-drills, and mental conditioning.",
    curriculum: [
      { goal: "PYQ Audits", detail: "10-year paper analysis and trend prediction." },
      { goal: "Speed Drills", detail: "Completing 3-hour papers in 2.5 hours." }
    ],
    outcomes: ["Board Mastery", "Time Management", "Pressure Resilience"],
    phone: "+91 9315956745"
  },
  {
    id: "higher",
    title: "Higher Mastery",
    grade: "Classes 11th & 12th",
    tagline: "Stream Specific Sovereignty",
    icon: Rocket,
    color: "#3B82F6",
    accent: "bg-sky-50/50",
    description: "The peak of school education. We provide stream-specific mentors who have themselves conquered national-level entrance exams.",
    isSpecial: true,
    streams: [
      { 
        name: "Science (PCM/PCB)", 
        icon: Beaker, 
        focus: "JEE, NEET, BITSAT", 
        details: "Intensive focus on Physics derivations, Organic logic, and Biology diagnostics." 
      },
      { 
        name: "Commerce", 
        icon: Landmark, 
        focus: "CUET, CA, IPMAT", 
        details: "Mastery in Accountancy and Economics with industry-case studies." 
      },
      { 
        name: "Humanities", 
        icon: Palette, 
        focus: "CUET, CLAT", 
        details: "Deep dive into Political Science and Psychology with critical answer drafting." 
      }
    ],
    outcomes: ["Entrance Readiness", "University Roadmap"],
    phone: "+91 9315956745"
  }
];

export default function FinalProgramsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const activeData = useMemo(() => PROGRAMS.find(p => p.id === selectedId), [selectedId]);

  // Prevent background scroll on mobile when modal is open
  useEffect(() => {
    if (selectedId) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-white font-jakarta selection:bg-[#5051CE]/20 overflow-x-hidden">
      <Navbar />

      {/* --- HERO --- */}
      <section className="relative pt-32 md:pt-44 pb-12 md:pb-24 px-6 bg-[#F8FAFF] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-100 mb-6 md:mb-8 shadow-sm">
             <Zap size={12} className="text-[#FDBA12]" fill="#FDBA12" />
             <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Institutional Curricula</p>
          </motion.div>
          <h1 className="text-5xl md:text-[9.5rem] font-black text-[#0F172A] tracking-tighter leading-[0.9] md:leading-[0.8] mb-8">
            Academic <br />
            <span className="font-serif italic font-light text-[#5051CE]">Programs.</span>
          </h1>
        </div>
      </section>

      {/* --- PROGRAM GRID --- */}
      <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROGRAMS.map((program) => (
          <motion.div
            layoutId={`card-${program.id}`}
            key={program.id}
            onClick={() => setSelectedId(program.id)}
            whileHover={{ y: -8 }}
            className={`${program.accent} group cursor-pointer p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border border-transparent hover:border-[#5051CE]/10 transition-all relative overflow-hidden flex flex-col justify-between min-h-[380px] md:h-[480px] shadow-sm`}
          >
            <div className="relative z-10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 md:mb-10 group-hover:rotate-[12deg] transition-transform">
<program.icon 
  style={{ color: program.color }} 
  className="w-6 h-6 md:w-7 md:h-7" 
/>              </div>
              <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{program.grade}</p>
              <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] tracking-tighter leading-tight mb-6">{program.title}</h3>
              
              {program.isSpecial && (
                <div className="flex flex-wrap gap-2 mb-6">
                   {["Science", "Commerce", "Arts"].map(s => (
                     <span key={s} className="px-3 py-1 bg-white/60 rounded-full text-[7px] md:text-[8px] font-black uppercase text-[#3B82F6] border border-sky-100">{s}</span>
                   ))}
                </div>
              )}
            </div>
            
            <div className="relative z-10 mt-auto">
              <button className="flex items-center gap-3 bg-white px-5 md:px-6 py-3 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#0F172A] shadow-sm group-hover:bg-[#5051CE] group-hover:text-white transition-all">
                View Details <ArrowUpRight size={14} />
              </button>
            </div>

            <program.icon className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity w-32 h-32 md:w-48 md:h-48" />
          </motion.div>
        ))}
      </section>

      {/* --- RESPONSIVE MODAL --- */}
      <AnimatePresence>
        {selectedId && activeData && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedId(null)} className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-md md:backdrop-blur-xl" />
            
            <motion.div 
              layoutId={`card-${selectedId}`} 
              className="bg-white w-full max-w-6xl rounded-t-[2.5rem] md:rounded-[4rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row h-[92vh] md:h-auto md:max-h-[85vh] z-10"
            >
              {/* Sidebar/Top Header on Mobile */}
              <div className={`${activeData.accent} p-8 md:p-12 lg:w-[380px] flex flex-col justify-between border-r border-slate-100 shrink-0`}>
                <div>
                   <div className="flex justify-between items-start mb-6 md:mb-10">
<activeData.icon 
  style={{ color: activeData.color }} 
  className="w-10 h-10 md:w-14 md:h-14" 
/>                    <button onClick={() => setSelectedId(null)} className="md:hidden p-2 bg-white/50 rounded-full"><X size={20} /></button>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tighter leading-[0.9] mb-3 md:mb-4">{activeData.title}</h2>
                   <p className="text-[#5051CE] font-bold text-[10px] md:text-xs tracking-widest uppercase mb-6 md:mb-12">{activeData.grade}</p>
                   
                   <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
                      {activeData.outcomes.map(o => (
                        <div key={o} className="flex items-center gap-2 md:gap-3">
                           <CheckCircle2 size={14} className="text-[#5051CE] shrink-0" />
                           <span className="text-[8px] md:text-[10px] font-black uppercase text-slate-500 tracking-wider leading-none">{o}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="hidden md:block pt-10 border-t border-slate-200/50 mt-10">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">Triarch Audited 2026</span>
                   </div>
                </div>
              </div>

              {/* Main Scrollable Content */}
              <div className="flex-1 p-8 md:p-20 overflow-y-auto no-scrollbar relative bg-white pb-32 md:pb-20">
                <button onClick={() => setSelectedId(null)} className="hidden md:block absolute top-10 right-10 p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all"><X size={20} /></button>

                {activeData.isSpecial ? (
                  <div className="max-w-3xl">
                    <h4 className="text-[9px] md:text-xs font-black text-[#3B82F6] uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4">Stream Mastery Protocols</h4>
                    <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] tracking-tighter mb-8 md:mb-12 leading-tight">Master your stream with competitive alignment.</h3>
                    
                    <div className="space-y-4 md:space-y-6">
                      {activeData.streams?.map((stream, i) => (
                        <div key={i} className="p-6 md:p-8 rounded-[2rem] border border-slate-100 bg-[#F8FAFF] group">
                          <div className="flex items-center gap-4 mb-3 md:mb-4 text-[#3B82F6]">
                            <stream.icon size={20}/>
                            <h5 className="text-lg md:text-xl font-black text-[#0F172A]">{stream.name}</h5>
                          </div>
                          <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed mb-5">{stream.details}</p>
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 rounded-lg text-[9px] font-black uppercase tracking-widest text-[#3B82F6]">
                             <GraduationCap size={14}/> {stream.focus}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="max-w-xl">
                    <p className="text-lg md:text-xl text-slate-400 font-medium italic mb-8 md:mb-10 leading-relaxed">"{activeData.tagline}"</p>
                    <p className="text-slate-600 text-sm md:text-base font-medium mb-10 md:mb-12 leading-relaxed">{activeData.description}</p>
                    <div className="space-y-4 md:space-y-6">
                      {activeData.curriculum?.map((item, i) => (
                        <div key={i} className="flex gap-4 md:gap-6 p-5 md:p-6 rounded-[1.5rem] md:rounded-3xl border border-slate-50 bg-slate-50/30">
                          <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#5051CE] font-black text-xs shrink-0">0{i+1}</div>
                          <div>
                            <h5 className="font-bold text-sm md:text-base text-[#0F172A] mb-1">{item.goal}</h5>
                            <p className="text-[10px] md:text-xs text-slate-400 font-medium leading-normal">{item.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile Floating Sticky Action Bar */}
                <div className="fixed md:static bottom-0 left-0 right-0 p-6 md:p-0 bg-white/80 backdrop-blur-lg md:bg-transparent border-t md:border-0 border-slate-100 grid grid-cols-2 gap-3 mt-12 md:mt-16 z-50">
                  <a href={`https://wa.me/919315956745`} className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 md:py-6 rounded-xl md:rounded-[2rem] font-black text-[9px] md:text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-all">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                  <a href={`tel:+919315956745`} className="flex items-center justify-center gap-2 bg-[#0F172A] text-white py-4 md:py-6 rounded-xl md:rounded-[2rem] font-black text-[9px] md:text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-all">
                    <Phone size={16} /> Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- FINAL CTA --- */}
      <section className="py-20 md:py-40 px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto bg-[#0F172A] rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <GraduationCap className="text-[#FDBA12] mx-auto mb-8 md:mb-10 w-12 h-12 md:w-16 md:h-16" />
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 md:mb-12 leading-[0.9] md:leading-[0.8]">Ready to <br/><span className="text-[#5051CE]">Ascend?</span></h2>
            <a href="/contact" className="inline-flex items-center justify-center w-full md:w-auto gap-4 bg-white text-[#0F172A] px-10 md:px-14 py-5 md:py-7 rounded-2xl md:rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] active:scale-105 transition-transform">Begin Engagement <ChevronRight size={18} /></a>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#5051CE]/10 to-transparent pointer-events-none" />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}