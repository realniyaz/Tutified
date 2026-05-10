"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { 
  Compass, Target, Lightbulb, 
  ChevronRight, Quote, Sparkles, Brain, 
  Award, Zap, CheckCircle2 
} from "lucide-react";

const MENTOR_TIERS = [
  {
    id: "academic",
    title: "Academic Architects",
    focus: "Grades 9th - 12th",
    description: "Subject matter experts focused on Board excellence and deep conceptual clarity.",
    icon: Target,
    color: "#5051CE",
    accent: "bg-indigo-50/50",
    stats: { selection: "Top 5%", experience: "8+ Yrs" }
  },
  {
    id: "competitive",
    title: "Entrance Strategists",
    focus: "JEE / NEET / CUET",
    description: "Mentors who have conquered national exams. Focus on velocity and pressure drills.",
    icon: Zap,
    color: "#FDBA12",
    accent: "bg-amber-50/50",
    stats: { selection: "Top 2%", experience: "Alumni" }
  },
  {
    id: "holistic",
    title: "Cognitive Coaches",
    focus: "Grades 1st - 8th",
    description: "Specialists in foundational neural development, curiosity, and mathematical logic.",
    icon: Lightbulb,
    color: "#0F172A",
    accent: "bg-slate-50",
    stats: { selection: "Top 8%", experience: "5+ Yrs" }
  }
];

export default function MentorshipPage() {
  const [activeTier, setActiveTier] = useState(MENTOR_TIERS[0]);

  const handleMentorRequest = (tierTitle: string) => {
    const phoneNumber = "919315956745"; 
    const message = `Hello Tutified Team, I am interested in engaging an ${tierTitle} for my child.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-jakarta selection:bg-[#5051CE]/20 overflow-x-hidden">
      <Navbar />

      {/* --- HERO --- */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6 overflow-hidden bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-100 mb-6 md:mb-8 shadow-sm"
          >
            <Compass size={14} className="text-[#5051CE]" />
            <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">The Human Element</p>
          </motion.div>
          <h1 className="text-5xl md:text-[9rem] font-black text-[#0F172A] tracking-tighter leading-[0.9] md:leading-[0.8] mb-8 md:mb-12">
            Mentors, <br />
            <span className="font-serif italic font-light text-[#5051CE]">Not Tutors.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto px-4">
            Tutified mentors are Handpicked by 
            <span className="text-[#0F172A] font-bold underline decoration-[#FDBA12]"> Triarch Group</span> to ensure pedagogical and psychological alignment.
          </p>
        </div>
      </section>

      {/* --- PATHWAY SELECTOR --- */}
      <section className="py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-10 md:gap-20">
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tighter mb-6 md:mb-10 text-center lg:text-left">
              Choose Your <br className="hidden lg:block"/>Pathway.
            </h2>
            {/* Mobile Scrollable Tabs */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-6 md:pb-0 no-scrollbar snap-x snap-mandatory">
              {MENTOR_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setActiveTier(tier)}
                  className={`flex-shrink-0 snap-center w-[80%] lg:w-full text-left p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] transition-all flex items-center justify-between group border ${
                    activeTier.id === tier.id 
                      ? "bg-[#0F172A] text-white shadow-xl border-[#0F172A]" 
                      : "bg-slate-50 text-slate-400 border-transparent hover:border-slate-200"
                  }`}
                >
                  <div>
                    <p className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-1 ${activeTier.id === tier.id ? "text-[#FDBA12]" : "text-slate-400"}`}>
                      {tier.focus}
                    </p>
                    <h4 className="font-black text-base md:text-lg">{tier.title}</h4>
                  </div>
                  <ChevronRight className={`transition-transform hidden lg:block ${activeTier.id === tier.id ? "rotate-90 text-[#FDBA12]" : "group-hover:translate-x-2"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Animated Hub */}
          <div className={`flex-1 ${activeTier.accent} rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 relative overflow-hidden transition-colors duration-500 border border-slate-100 min-h-[450px]`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <activeTier.icon className="w-12 h-12 md:w-16 md:h-16 mb-8 md:mb-10" style={{ color: activeTier.color }} />
                <h3 className="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tighter mb-4 md:mb-6 leading-tight">{activeTier.title}</h3>
                <p className="text-base md:text-xl text-slate-500 font-medium leading-relaxed mb-8 md:mb-12 max-w-lg">{activeTier.description}</p>
                
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
                   <div className="p-5 md:p-8 bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl border border-slate-100">
                      <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 md:mb-2">Selection</p>
                      <p className="text-2xl md:text-3xl font-black text-[#5051CE]">{activeTier.stats.selection}</p>
                   </div>
                   <div className="p-5 md:p-8 bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl border border-slate-100">
                      <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 md:mb-2">Experience</p>
                      <p className="text-lg md:text-xl font-black text-[#0F172A] leading-tight">{activeTier.stats.experience}</p>
                   </div>
                </div>

                <motion.button 
                  onClick={() => handleMentorRequest(activeTier.title)}
                  className="w-full md:w-auto relative group flex items-center justify-center gap-4 bg-[#0F172A] text-white px-8 md:px-10 py-5 rounded-xl md:rounded-2xl font-black text-[10px] uppercase tracking-widest overflow-hidden shadow-xl"
                >
                  <span className="relative z-10">Request Profile</span>
                  <Sparkles size={16} className="text-[#FDBA12] relative z-10 animate-pulse" />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- TRIARCH AUDIT --- */}
      <section className="py-20 md:py-32 px-6 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
          <div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-6 md:mb-8 text-[#FDBA12]">
               <Award className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 leading-[0.9]">
              The Triarch <br /> <span className="text-[#5051CE]">Audit.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed mb-8 md:mb-12">
              Mentors pass through the <span className="text-white">Triarch Protocol</span> evaluating EQ, pedagogical speed, and conceptual sovereignty.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  "Identity Verification",
                  "Pedagogy Simulation",
                  "EQ Temperament",
                  "Subject Mastery Audit"
                ].map((check, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/5">
                     <CheckCircle2 size={14} className="text-[#FDBA12] shrink-0" />
                     <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/80">{check}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className="relative">
             <div className="relative border border-white/10 bg-white/5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] backdrop-blur-md">
                <Quote className="text-[#FDBA12] mb-6 md:mb-8 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-lg md:text-2xl font-medium leading-relaxed mb-8 md:mb-10 italic">
                  "The goal isn't just to complete the syllabus; it's to master the logic behind it. We build thinkers."
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-700 flex items-center justify-center">
                      <Brain className="text-slate-400 w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <div>
                      <p className="font-black text-xs md:text-sm uppercase tracking-widest">Triarch Board</p>
                      <p className="text-[9px] md:text-[10px] text-white/40 font-bold uppercase tracking-widest">Quality Control</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- MATCH PROTOCOL --- */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-8xl font-black text-[#0F172A] tracking-tighter mb-16 md:mb-24 leading-[0.9]">
          The Match <br/><span className="text-[#5051CE]">Protocol.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
           {[
             { step: "01", title: "Diagnostic", desc: "Cognitive state and academic friction analysis." },
             { step: "02", title: "IQ Match", desc: "Optimal IQ profile mentor selection." },
             { step: "03", title: "Deployment", desc: "Guided session to bridge pedagogical gaps." }
           ].map((item, i) => (
             <motion.div 
               key={i}
               className="relative p-8 md:p-12 bg-slate-50 rounded-[2.5rem] md:rounded-[3.5rem] border border-transparent hover:border-[#5051CE]/20 transition-all group overflow-hidden text-left"
             >
                <div className="text-[8rem] md:text-[12rem] font-black text-[#0F172A]/5 absolute -top-5 md:-top-10 -left-5 md:-left-10 pointer-events-none group-hover:text-[#5051CE]/10 transition-colors">
                  {item.step}
                </div>
                <h4 className="text-xl md:text-2xl font-black text-[#0F172A] mb-3 md:mb-4 relative z-10">{item.title}</h4>
                <p className="text-slate-400 font-medium text-sm leading-relaxed relative z-10">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 md:py-40 px-4 md:px-6">
        <motion.div 
          className="max-w-5xl mx-auto bg-[#0F172A] rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-10 md:mb-12 leading-[0.9]">Meet your <br/><span className="text-[#FDBA12]">Strategist.</span></h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button onClick={() => handleMentorRequest("Academic Strategist")} className="bg-white text-[#0F172A] w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] transition-transform">Book Strategy Call</button>
               <a href="https://wa.me/919315956745" className="bg-white/5 border border-white/10 text-white w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all">WhatsApp Inquiry</a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#5051CE]/10 blur-[80px] md:blur-[100px] rounded-full" />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}