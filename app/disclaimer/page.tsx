"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { 
  AlertTriangle, 
  Scale, 
  Globe, 
  Zap, 
  UserX, 
  HelpCircle,
  ShieldCheck
} from "lucide-react";

const DISCLAIMER_CONFIG = [
  {
    id: "general",
    title: "General",
    icon: Globe,
    heading: "Institutional Scope.",
    subheading: "Triarch Group Framework",
    body: "The information provided by Tutified (triarchgroup.in) is for general educational guidance only. While we strive for absolute accuracy, Tutified assumes no responsibility for errors or omissions.",
    matrix: [
      { label: "Entity", value: "Tutified / Triarch" },
      { label: "Scope", value: "Educational" },
      { label: "Platform", value: "Digital & Home" },
      { label: "Jurisdiction", value: "India" }
    ]
  },
  {
    id: "outcomes",
    title: "Outcomes",
    icon: Zap,
    heading: "No Guarantees.",
    subheading: "Academic Performance Logic",
    body: "Academic success is a multi-variable result involving student effort and prior knowledge. Tutified provides elite tools, but we do not guarantee specific grades.",
    highlightBox: {
      title: "Collaborative Effort",
      desc: "Our mentors are catalysts. Final performance remains the sole responsibility of the student.",
      tags: ["Growth", "Mentor Guide"]
    }
  },
  {
    id: "vetting",
    title: "Vetting",
    icon: UserX,
    heading: "SOP Boundaries.",
    subheading: "Third-Party Conduct",
    points: [
      { title: "Standard Vetting", desc: "Every mentor passes Triarch's 4-Step Verification." },
      { title: "Individual Behavior", desc: "Mentors are independent contractors. Tutified is not liable for conduct outside scheduled sessions." }
    ]
  },
  {
    id: "ai",
    title: "AI Tech",
    icon: AlertTriangle,
    heading: "Tudo AI Limits.",
    subheading: "Machine Logic Disclaimer",
    darkBox: {
      title: "Tudo Accuracy",
      desc: "Our AI assistant, Tudo, is for support. AI can generate inaccuracies. Cross-verify with human mentors.",
      tags: ["Beta Tech", "Non-Binding", "AI Ethics"]
    }
  },
  {
    id: "liability",
    title: "Liability",
    icon: Scale,
    heading: "Legal Shield.",
    subheading: "Limitation of Liability",
    list: [
      "No liability for indirect or incidental damages.",
      "Maximum liability is limited to fees paid for the session in dispute.",
      "Not responsible for user-end technical failures.",
      "No liability for external Triarch Group links."
    ]
  }
];

export default function DisclaimerPage() {
  const [activeTab, setActiveTab] = useState(DISCLAIMER_CONFIG[0].id);

  const activeData = useMemo(() => 
    DISCLAIMER_CONFIG.find(s => s.id === activeTab), [activeTab]
  );

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-jakarta selection:bg-[#5051CE]/20 overflow-x-hidden">
      <Navbar />

      <main className="pt-28 md:pt-44 pb-16 md:pb-24 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-16 border-b border-slate-200 pb-8 md:pb-12">
          <div className="w-full md:w-auto">
            <h1 className="text-4xl md:text-8xl font-black text-[#0F172A] tracking-tighter leading-[0.9] md:leading-[0.85]">
              Legal <br />
              <span className="font-serif italic font-light text-[#5051CE]">Disclaimer.</span>
            </h1>
            <p className="mt-6 text-slate-400 font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px]">
              Institutional Policy / Triarch Group
            </p>
          </div>
          <div className="flex items-center md:items-end gap-4 md:flex-col">
              <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-slate-100 shadow-sm">
                <ShieldCheck className="text-[#5051CE] w-5 h-5 md:w-6 md:h-6" />
              </div>
              <p className="text-[8px] md:text-[9px] font-black text-slate-300 uppercase tracking-widest">Ref: TFD-DIS-2026</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
          
          {/* Navigation: Horizontal scroll on Mobile, Vertical Sticky on Desktop */}
          <aside className="flex lg:flex-col gap-2 md:gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 sticky top-20 md:top-32 no-scrollbar z-20 bg-[#F8FAFF]/80 backdrop-blur-md lg:bg-transparent -mx-4 px-4 lg:mx-0 lg:px-0">
            {DISCLAIMER_CONFIG.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex-shrink-0 flex items-center justify-between px-6 md:px-8 py-3.5 md:py-5 rounded-full lg:rounded-[2.2rem] transition-all duration-300 whitespace-nowrap lg:w-full border ${
                  activeTab === section.id 
                  ? "bg-[#5051CE] text-white shadow-xl shadow-[#5051CE]/20 border-[#5051CE]" 
                  : "bg-white text-slate-400 border-slate-100 hover:border-[#5051CE]/20"
                }`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <section.icon className={`${activeTab === section.id ? "text-white" : "text-slate-300"} w-4 h-4 md:w-[18px] md:h-[18px]`} />
                  <span className="font-black text-[9px] md:text-[10px] uppercase tracking-widest">{section.title}</span>
                </div>
                <div className={`hidden lg:block w-1.5 h-1.5 rounded-full ${activeTab === section.id ? "bg-[#FDBA12] scale-125" : "bg-slate-200"}`} />
              </button>
            ))}
          </aside>

          {/* Content Area */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 border border-slate-100 shadow-xl shadow-blue-900/5 flex flex-col"
              >
                <div className="flex-grow">
                  <p className="text-[9px] md:text-[10px] font-black text-[#5051CE] uppercase tracking-widest mb-2">
                    {activeData?.subheading}
                  </p>
                  <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tighter mb-8 md:mb-10 leading-tight">
                    {activeData?.heading}
                  </h2>

                  {activeData?.body && (
                    <p className="text-slate-500 font-medium leading-relaxed mb-8 md:mb-10 text-base md:text-lg">
                      {activeData.body}
                    </p>
                  )}

                  {/* Matrix Grid: 1 column on mobile */}
                  {activeData?.matrix && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                      {activeData.matrix.map(m => (
                        <div key={m.label} className="p-5 md:p-6 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100">
                          <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
                          <p className="text-xs md:text-sm font-black text-[#0F172A]">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.highlightBox && (
                    <div className="p-8 md:p-10 bg-[#5051CE]/5 rounded-[2rem] md:rounded-[3rem] border border-[#5051CE]/10 mb-8 md:mb-10">
                      <h4 className="font-black text-[#5051CE] text-lg md:text-xl mb-3">{activeData.highlightBox.title}</h4>
                      <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed mb-6 italic">
                        {activeData.highlightBox.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {activeData.highlightBox.tags.map(t => (
                          <span key={t} className="px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-lg md:rounded-xl text-[8px] md:text-[9px] font-black uppercase text-[#5051CE] border border-[#5051CE]/10">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeData?.darkBox && (
                    <div className="bg-[#0F172A] p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] text-white relative overflow-hidden mb-8 md:mb-10">
                      <div className="relative z-10">
                        <h4 className="text-[#FDBA12] font-black text-2xl md:text-3xl mb-4 tracking-tighter uppercase">
                          {activeData.darkBox.title}
                        </h4>
                        <p className="text-xs md:text-sm opacity-60 font-medium leading-relaxed mb-8 md:mb-10 max-w-lg">
                          {activeData.darkBox.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {activeData.darkBox.tags.map(t => (
                            <span key={t} className="px-4 py-1.5 md:px-5 md:py-2 bg-white/10 rounded-lg md:rounded-xl text-[8px] md:text-[9px] font-black tracking-widest uppercase border border-white/10">{t}</span>
                          ))}
                        </div>
                      </div>
                      <AlertTriangle className="absolute -bottom-10 -right-10 opacity-5 w-40 h-40 md:w-60 md:h-60" />
                    </div>
                  )}

                  {activeData?.list && (
                    <div className="grid gap-2 md:gap-3">
                      {activeData.list.map(l => (
                        <div key={l} className="flex items-start md:items-center gap-4 p-5 md:p-6 bg-slate-50/50 rounded-xl md:rounded-2xl text-[11px] md:text-[13px] font-bold text-slate-600 border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5051CE] mt-1.5 md:mt-0 shrink-0" />
                          {l}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.points && (
                    <div className="space-y-3 md:space-y-4">
                      {activeData.points.map((pt, i) => (
                        <div key={i} className="p-6 md:p-8 border border-slate-100 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col md:flex-row justify-between md:items-center gap-4">
                          <div className="max-w-xl">
                            <h4 className="font-black text-[#0F172A] text-xs md:text-sm mb-1">{pt.title}</h4>
                            <p className="text-[10px] md:text-xs text-slate-400 font-medium leading-relaxed">{pt.desc}</p>
                          </div>
                          <Scale className="text-slate-100 hidden md:block w-5 h-5" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Section of Panel */}
                <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 shrink-0">
                      <HelpCircle className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black text-[#5051CE] uppercase tracking-widest">Compliance Officer</p>
                      <a href="mailto:contact.tutifiedtg@gmail.com" className="text-[10px] md:text-xs font-bold text-[#0F172A] hover:underline">contact.tutifiedtg@gmail.com</a>
                    </div>
                  </div>
                  <div className="text-center sm:text-right w-full sm:w-auto">
                    <p className="text-[8px] md:text-[9px] font-bold text-slate-300 uppercase tracking-widest">System Architect</p>
                    <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase">Triarch Group Ecosystem</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}