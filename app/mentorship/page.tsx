"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { 
  UserCheck, Compass, Target, Lightbulb, 
  ChevronRight, Quote, Sparkles, Brain, 
  Award, Globe, Zap, MessageSquare, CheckCircle2 
} from "lucide-react";

// --- DYNAMIC MENTOR CONFIGURATION ---
const MENTOR_TIERS = [
  {
    id: "academic",
    title: "Academic Architects",
    focus: "Grades 9th - 12th",
    description: "Subject matter experts focused on Board excellence and deep conceptual clarity. These mentors specialize in institutionalizing the student's study patterns.",
    icon: Target,
    color: "#5051CE",
    accent: "bg-indigo-50/50",
    stats: { selection: "Top 5%", experience: "8+ Years" }
  },
  {
    id: "competitive",
    title: "Entrance Strategists",
    focus: "JEE / NEET / CUET",
    description: "Mentors who have themselves conquered national-level exams. They focus on rank-building, velocity, and high-pressure simulation drills.",
    icon: Zap,
    color: "#FDBA12",
    accent: "bg-amber-50/50",
    stats: { selection: "Top 2%", experience: "IIT/AIIMS Alumni" }
  },
  {
    id: "holistic",
    title: "Cognitive Coaches",
    focus: "Grades 1st - 8th",
    description: "Specialists in foundational neural development. They focus on curiosity, linguistic fluency, and mathematical logic for the 'Junior Foundation' phase.",
    icon: Lightbulb,
    color: "#0F172A",
    accent: "bg-slate-50",
    stats: { selection: "Top 8%", experience: "5+ Years" }
  }
];

export default function MentorshipPage() {
  const [activeTier, setActiveTier] = useState(MENTOR_TIERS[0]);

  // Lead Generation Engine
  const handleMentorRequest = (tierTitle: string) => {
    const phoneNumber = "919315956745"; 
    const message = `Hello Tutified Team, I am interested in engaging an ${tierTitle} for my child. Please share the institutional profile and vetting details.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-jakarta selection:bg-[#5051CE]/20">
      <Navbar />

      {/* --- HERO: THE GUIDANCE MANIFESTO --- */}
      <section className="relative pt-44 pb-24 px-6 overflow-hidden bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-100 mb-8 shadow-sm"
          >
            <Compass size={14} className="text-[#5051CE]" />
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">The Human Element</p>
          </motion.div>
          <h1 className="text-6xl md:text-[9rem] font-black text-[#0F172A] tracking-tighter leading-[0.8] mb-12">
            Mentors, <br />
            <span className="font-serif italic font-light text-[#5051CE]">Not Tutors.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            Tutified mentors are more than teachers—they are academic architects. Handpicked by 
            <span className="text-[#0F172A] font-bold underline decoration-[#FDBA12]"> Triarch Group</span> to ensure pedagogical and psychological alignment.
          </p>
        </div>
      </section>

      {/* --- PATHWAY SELECTOR: DYNAMIC ENGINE --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-20">
          
          {/* Navigation Sidebar */}
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-[#0F172A] tracking-tighter mb-10">Choose Your <br/>Pathway.</h2>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 no-scrollbar">
              {MENTOR_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setActiveTier(tier)}
                  className={`flex-shrink-0 lg:w-full text-left p-8 rounded-[2.5rem] transition-all flex items-center justify-between group ${
                    activeTier.id === tier.id 
                      ? "bg-[#0F172A] text-white shadow-2xl scale-[1.02]" 
                      : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                  }`}
                >
                  <div>
                    <p className={`text-[9px] font-black uppercase tracking-widest mb-1 ${activeTier.id === tier.id ? "text-[#FDBA12]" : "text-slate-400"}`}>
                      {tier.focus}
                    </p>
                    <h4 className="font-black text-lg">{tier.title}</h4>
                  </div>
                  <ChevronRight className={`transition-transform hidden lg:block ${activeTier.id === tier.id ? "rotate-90 text-[#FDBA12]" : "group-hover:translate-x-2"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Animated Display Hub */}
          <div className={`flex-1 ${activeTier.accent} rounded-[4rem] p-10 md:p-20 relative overflow-hidden transition-colors duration-500 border border-slate-100`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier.id}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <activeTier.icon size={64} className="mb-10" style={{ color: activeTier.color }} />
                <h3 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tighter mb-6 leading-none">{activeTier.title}</h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-lg">{activeTier.description}</p>
                
                <div className="grid grid-cols-2 gap-6 mb-12">
                   <div className="p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-sm border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Selection Tier</p>
                      <p className="text-3xl font-black text-[#5051CE]">{activeTier.stats.selection}</p>
                   </div>
                   <div className="p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-sm border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Requirement</p>
                      <p className="text-xl font-black text-[#0F172A]">{activeTier.stats.experience}</p>
                   </div>
                </div>

                <motion.button 
                  onClick={() => handleMentorRequest(activeTier.title)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group flex items-center gap-4 bg-[#0F172A] text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest overflow-hidden shadow-2xl shadow-slate-900/20"
                >
                  <span className="relative z-10">Request {activeTier.title}</span>
                  <Sparkles size={16} className="text-[#FDBA12] relative z-10 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>
              </motion.div>
            </AnimatePresence>
            <activeTier.icon size={300} className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* --- TRIARCH AUDIT: THE SELECTION PROTOCOL --- */}
      <section className="py-32 px-6 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-8">
               <Award className="text-[#FDBA12]" size={28} />
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
              The Triarch <br /> <span className="text-[#5051CE]">Audit.</span>
            </h2>
            <p className="text-white/50 text-lg font-medium leading-relaxed mb-12">
              Tutified mentors pass through the Triarch Psychometric Protocol. We evaluate 
              <span className="text-white"> Emotional Intelligence</span>, <span className="text-white">Pedagogical Speed</span>, and <span className="text-white">Conceptual Sovereignty</span>.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
               {[
                 "VAPT Identity Verification",
                 "Live Pedagogy Simulation",
                 "EQ & Temperament Scoping",
                 "Subject Mastery Audit"
               ].map((check, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <CheckCircle2 size={16} className="text-[#FDBA12]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{check}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
             <div className="relative border border-white/10 bg-white/5 p-12 rounded-[4rem] backdrop-blur-md">
                <Quote size={48} className="text-[#FDBA12] mb-8" />
                <p className="text-2xl font-medium leading-relaxed mb-10 italic">
                  "The goal isn't just to complete the syllabus; it's to master the logic behind it. We build thinkers, not repeaters."
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
                      <Brain size={24} className="text-slate-400" />
                   </div>
                   <div>
                      <p className="font-black text-sm uppercase tracking-widest">Triarch Board</p>
                      <p className="text-[10px] text-white/40 font-bold">Academic Quality Control</p>
                   </div>
                </div>
             </div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#5051CE]/20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* --- THE MATCHING PROTOCOL --- */}
      <section className="py-40 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-8xl font-black text-[#0F172A] tracking-tighter mb-24 leading-[0.8]">
          The Match <br/><span className="text-[#5051CE]">Protocol.</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { step: "01", title: "Diagnostic", desc: "We analyze the student's cognitive state and academic friction points." },
             { step: "02", title: "Algorithmic Match", desc: "Triarch matching algorithms find the mentor with the optimal EQ-IQ profile." },
             { step: "03", title: "Deployment", desc: "A guided session commences to establish the pedagogical bridge." }
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="relative p-12 bg-slate-50 rounded-[3.5rem] border border-transparent hover:border-[#5051CE]/20 transition-all group overflow-hidden"
             >
                <div className="text-[12rem] font-black text-[#0F172A]/5 absolute -top-10 -left-10 group-hover:text-[#5051CE]/10 transition-all pointer-events-none">
                  {item.step}
                </div>
                <h4 className="text-2xl font-black text-[#0F172A] mb-4 relative z-10">{item.title}</h4>
                <p className="text-slate-400 font-medium text-sm leading-relaxed relative z-10">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* --- FINAL CTA: ADMISSION --- */}
      <section className="py-40 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-[#0F172A] rounded-[5rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12 leading-[0.8]">Meet your <br/><span className="text-[#FDBA12]">Strategist.</span></h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button onClick={() => handleMentorRequest("Academic Strategist")} className="bg-white text-[#0F172A] px-12 py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:scale-110 transition-transform">Book Strategy Call</button>
               <a href="https://wa.me/919315956745" className="bg-white/5 border border-white/10 text-white px-12 py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#0F172A] transition-all">WhatsApp Inquiry</a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5051CE]/10 blur-[100px] rounded-full" />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}