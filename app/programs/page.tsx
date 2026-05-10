"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { 
  X, Phone, MessageCircle, ChevronRight, 
  BookOpen, Trophy, Rocket, Sparkles, Star,
  CheckCircle2, ArrowUpRight, GraduationCap, 
  Beaker, Landmark, Palette, Zap
} from "lucide-react";

// --- UPDATED PROGRAM DATA WITH STREAM INTELLIGENCE ---
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
        focus: "JEE (Mains/Adv), NEET, BITSAT, KVPY", 
        details: "Intensive focus on Physics derivations, Organic chemistry logic, and Biology diagnostics." 
      },
      { 
        name: "Commerce (W/WO Maths)", 
        icon: Landmark, 
        focus: "CUET, CA Foundation, IPMAT", 
        details: "Mastery in Accountancy, Economics, and Applied Mathematics with industry-case studies." 
      },
      { 
        name: "Humanities (Arts)", 
        icon: Palette, 
        focus: "CUET, CLAT, Liberal Arts Entrance", 
        details: "Deep dive into Political Science, History, and Psychology with critical answer drafting." 
      }
    ],
    outcomes: ["Entrance Readiness", "Stream Specialization", "University Roadmap"],
    phone: "+91 9315956745"
  }
];

export default function FinalProgramsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const activeData = useMemo(() => PROGRAMS.find(p => p.id === selectedId), [selectedId]);

  return (
    <div className="min-h-screen bg-white font-jakarta selection:bg-[#5051CE]/20">
      <Navbar />

      {/* --- HERO --- */}
      <section className="relative pt-44 pb-24 px-6 bg-[#F8FAFF] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-100 mb-8 shadow-sm">
             <Zap size={14} className="text-[#FDBA12]" fill="#FDBA12" />
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Institutional Curricula</p>
          </motion.div>
          <h1 className="text-6xl md:text-[9.5rem] font-black text-[#0F172A] tracking-tighter leading-[0.8] mb-12">
            Academic <br />
            <span className="font-serif italic font-light text-[#5051CE]">Programs.</span>
          </h1>
        </div>
      </section>

      {/* --- PROGRAM GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROGRAMS.map((program) => (
          <motion.div
            layoutId={`card-${program.id}`}
            key={program.id}
            onClick={() => setSelectedId(program.id)}
            whileHover={{ y: -12 }}
            className={`${program.accent} group cursor-pointer p-10 rounded-[3.5rem] border border-transparent hover:border-[#5051CE]/10 transition-all relative overflow-hidden flex flex-col justify-between h-[480px] shadow-sm`}
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-10 group-hover:rotate-[12deg] transition-transform">
                <program.icon size={28} style={{ color: program.color }} />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{program.grade}</p>
              <h3 className="text-3xl font-black text-[#0F172A] tracking-tighter leading-none mb-6">{program.title}</h3>
              
              {program.isSpecial && (
                <div className="flex flex-wrap gap-2 mb-6">
                   {["Science", "Commerce", "Arts"].map(s => (
                     <span key={s} className="px-3 py-1 bg-white/60 rounded-full text-[8px] font-black uppercase text-[#3B82F6] border border-sky-100">{s}</span>
                   ))}
                </div>
              )}
            </div>
            
            <div className="relative z-10">
              <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#0F172A] shadow-sm group-hover:bg-[#5051CE] group-hover:text-white transition-all">
                Click for Guidance <ArrowUpRight size={14} />
              </button>
            </div>

            <program.icon size={200} className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity" />
          </motion.div>
        ))}
      </section>

      {/* --- CINEMATIC MODAL --- */}
      <AnimatePresence>
        {selectedId && activeData && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedId(null)} className="absolute inset-0 bg-[#0F172A]/95 backdrop-blur-xl" />
            
            <motion.div layoutId={`card-${selectedId}`} className="bg-white w-full max-w-6xl rounded-[4rem] overflow-hidden relative shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
              {/* Sidebar */}
              <div className={`${activeData.accent} lg:w-[380px] p-12 flex flex-col justify-between border-r border-slate-100`}>
                <div>
                   <activeData.icon size={56} style={{ color: activeData.color }} className="mb-10" />
                   <h2 className="text-5xl font-black text-[#0F172A] tracking-tighter leading-[0.9] mb-4">{activeData.title}</h2>
                   <p className="text-[#5051CE] font-bold text-xs tracking-widest uppercase mb-12">{activeData.grade}</p>
                   
                   <div className="space-y-4">
                      {activeData.outcomes.map(o => (
                        <div key={o} className="flex items-center gap-3">
                           <CheckCircle2 size={16} className="text-[#5051CE]" />
                           <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">{o}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="pt-10 border-t border-slate-200/50">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">Triarch Audited 2026</span>
                   </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-10 md:p-20 overflow-y-auto no-scrollbar relative bg-white">
                <button onClick={() => setSelectedId(null)} className="absolute top-10 right-10 p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all"><X size={20} /></button>

                {activeData.isSpecial ? (
                  /* 11th & 12th SPECIAL VIEW */
                  <div className="max-w-3xl">
                    <h4 className="text-xs font-black text-[#3B82F6] uppercase tracking-[0.4em] mb-4">Stream Mastery Protocols</h4>
                    <p className="text-2xl font-black text-[#0F172A] tracking-tighter mb-12 leading-tight">Master your stream with <br/> competitive exam alignment.</p>
                    
                    <div className="grid gap-6">
                      {activeData.streams?.map((stream, i) => (
                        <div key={i} className="p-8 rounded-[2.5rem] border border-slate-100 bg-[#F8FAFF] group hover:bg-white hover:shadow-xl transition-all">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#3B82F6]"><stream.icon size={20}/></div>
                            <h5 className="text-xl font-black text-[#0F172A]">{stream.name}</h5>
                          </div>
                          <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">{stream.details}</p>
                          <div className="flex items-center gap-3 py-3 px-5 bg-sky-50 rounded-xl w-fit">
                             <GraduationCap size={16} className="text-[#3B82F6]"/>
                             <span className="text-[10px] font-black uppercase text-[#3B82F6] tracking-widest">{stream.focus}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* REGULAR VIEW */
                  <div className="max-w-xl">
                    <p className="text-xl text-slate-500 font-medium leading-relaxed italic mb-10">"{activeData.tagline}"</p>
                    <p className="text-slate-600 font-medium mb-12 leading-relaxed">{activeData.description}</p>
                    <div className="grid gap-6 mb-16">
                      {activeData.curriculum?.map((item, i) => (
                        <div key={i} className="flex gap-6 p-6 rounded-3xl border border-slate-50 bg-slate-50/30">
                          <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#5051CE] font-black text-xs shrink-0">0{i+1}</div>
                          <div>
                            <h5 className="font-bold text-[#0F172A] mb-1">{item.goal}</h5>
                            <p className="text-xs text-slate-400 font-medium">{item.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SHARED CTAs */}
                <div className="grid sm:grid-cols-2 gap-4 mt-16">
                  <a href={`https://wa.me/919315956745`} className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:scale-105 transition-all"><MessageCircle size={18} /> WhatsApp Support</a>
                  <a href={`tel:+919315956745`} className="flex items-center justify-center gap-3 bg-[#0F172A] text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:scale-105 transition-all"><Phone size={18} /> Inquire Fee</a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- FINAL CTA --- */}
      <section className="py-40 px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto bg-[#0F172A] rounded-[5rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <GraduationCap className="text-[#FDBA12] mx-auto mb-10" size={56} />
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-12 leading-[0.8]">Ready to <br/><span className="text-[#5051CE]">Ascend?</span></h2>
            <a href="/contact" className="inline-flex items-center gap-4 bg-white text-[#0F172A] px-14 py-7 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] hover:scale-110 transition-transform">Begin Engagement <ChevronRight size={18} /></a>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#5051CE]/10 to-transparent pointer-events-none" />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}