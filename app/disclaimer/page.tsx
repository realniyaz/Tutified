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

// --- 1. DISCLAIMER CONFIGURATION ENGINE ---
const DISCLAIMER_CONFIG = [
  {
    id: "general",
    title: "General Disclaimer",
    icon: Globe,
    heading: "Institutional Scope.",
    subheading: "Triarch Group Framework",
    body: "The information provided by Tutified (triarchgroup.in) is for general educational guidance only. While we strive for absolute accuracy, Tutified assumes no responsibility for errors or omissions in the content provided during mentorship.",
    matrix: [
      { label: "Entity", value: "Tutified / Triarch" },
      { label: "Scope", value: "Educational" },
      { label: "Platform", value: "Digital & Home" },
      { label: "Jurisdiction", value: "India" }
    ]
  },
  {
    id: "outcomes",
    title: "Educational Outcomes",
    icon: Zap,
    heading: "No Guarantees.",
    subheading: "Academic Performance Logic",
    body: "Academic success is a multi-variable result involving student effort, school environment, and prior knowledge. Tutified provides the elite tools, but we do not guarantee specific grades or examination ranks.",
    highlightBox: {
      title: "Collaborative Effort",
      desc: "Our mentors are catalysts. The final academic performance remains the sole responsibility of the student and their consistent engagement with the curriculum.",
      tags: ["Independent Growth", "Mentor as Guide"]
    }
  },
  {
    id: "vetting",
    title: "Mentor Vetting",
    icon: UserX,
    heading: "SOP Boundaries.",
    subheading: "Third-Party Conduct",
    points: [
      { title: "Standard Vetting", desc: "Every mentor passes Triarch's 4-Step Verification (Audit, Pedagogy, Background, Demo)." },
      { title: "Individual Behavior", desc: "Mentors are independent contractors. Tutified is not liable for the personal conduct or opinions of mentors outside of scheduled sessions." }
    ]
  },
  {
    id: "ai",
    title: "AI & Technology",
    icon: AlertTriangle,
    heading: "Tudo AI Limits.",
    subheading: "Machine Logic Disclaimer",
    darkBox: {
      title: "Tudo Assistant Accuracy",
      desc: "Our AI assistant, Tudo, is designed for immediate support. However, AI can generate inaccuracies. All critical academic information should be cross-verified with a human mentor.",
      tags: ["Beta Technology", "Non-Binding Support", "AI Ethics"]
    }
  },
  {
    id: "liability",
    title: "Liability Limits",
    icon: Scale,
    heading: "Legal Shield.",
    subheading: "Limitation of Liability",
    list: [
      "No liability for indirect, incidental, or consequential damages.",
      "Maximum liability is limited to the fees paid for the specific session in dispute.",
      "Tutified is not responsible for data loss due to user-end technical failures.",
      "No liability for external links to the Triarch Group ecosystem or third parties."
    ]
  }
];

// --- 2. THE MAIN EXPORTED COMPONENT ---
export default function DisclaimerPage() {
  const [activeTab, setActiveTab] = useState(DISCLAIMER_CONFIG[0].id);

  const activeData = useMemo(() => 
    DISCLAIMER_CONFIG.find(s => s.id === activeTab), [activeTab]
  );

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-jakarta selection:bg-[#5051CE]/20">
      <Navbar />

      <main className="pt-32 md:pt-44 pb-24 px-6 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-slate-200 pb-12">
          <div className="w-full md:w-auto">
            <h1 className="text-5xl md:text-8xl font-black text-[#0F172A] tracking-tighter leading-[0.85]">
              Legal <br />
              <span className="font-serif italic font-light text-[#5051CE]">Disclaimer.</span>
            </h1>
            <p className="mt-8 text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]">
              Tutified Institutional Policy / Triarch Group
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end">
             <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                <ShieldCheck size={24} className="text-[#5051CE]" />
             </div>
             <p className="mt-3 text-[9px] font-black text-slate-300 uppercase tracking-widest">Doc Ref: TFD-DIS-2026</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">
          {/* Mobile-Responsive Navigation Sidebar */}
          <aside className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 sticky top-24 lg:top-32 no-scrollbar scroll-smooth">
            {DISCLAIMER_CONFIG.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex-shrink-0 flex items-center justify-between px-8 py-5 rounded-[2.2rem] transition-all duration-500 whitespace-nowrap lg:w-full ${
                  activeTab === section.id 
                  ? "bg-[#5051CE] text-white shadow-2xl shadow-[#5051CE]/30 scale-105" 
                  : "bg-white text-slate-400 border border-slate-100 hover:border-[#5051CE]/20"
                }`}
              >
                <div className="flex items-center gap-4">
                  <section.icon size={18} strokeWidth={activeTab === section.id ? 3 : 2} />
                  <span className="font-black text-[10px] uppercase tracking-[0.15em]">{section.title}</span>
                </div>
                <div className={`hidden lg:block w-1.5 h-1.5 rounded-full transition-all ${activeTab === section.id ? "bg-[#FDBA12] scale-150" : "bg-slate-200"}`} />
              </button>
            ))}
          </aside>

          {/* Animated Content Pane */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(20px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[4rem] p-8 md:p-20 border border-slate-100 shadow-2xl shadow-blue-900/5 min-h-[600px] flex flex-col"
              >
                <div className="flex-grow">
                  <p className="text-[10px] font-black text-[#5051CE] uppercase tracking-widest mb-2">
                    {activeData?.subheading}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tighter mb-10 leading-tight">
                    {activeData?.heading}
                  </h2>

                  {/* Body Text */}
                  {activeData?.body && (
                    <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">
                      {activeData.body}
                    </p>
                  )}

                  {/* Matrix Grid */}
                  {activeData?.matrix && (
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {activeData.matrix.map(m => (
                        <div key={m.label} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
                          <p className="text-sm font-black text-[#0F172A]">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlight Box */}
                  {activeData?.highlightBox && (
                    <div className="p-10 bg-[#5051CE]/5 rounded-[3rem] border border-[#5051CE]/10 mb-10">
                      <h4 className="font-black text-[#5051CE] text-xl mb-3 tracking-tight">{activeData.highlightBox.title}</h4>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6 italic">
                        {activeData.highlightBox.desc}
                      </p>
                      <div className="flex gap-2">
                        {activeData.highlightBox.tags.map(t => (
                          <span key={t} className="px-4 py-2 bg-white rounded-xl text-[9px] font-black uppercase text-[#5051CE] border border-[#5051CE]/10">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dark Mode Callouts (Liability/AI) */}
                  {activeData?.darkBox && (
                    <div className="bg-[#0F172A] p-10 md:p-14 rounded-[3.5rem] text-white relative overflow-hidden mb-10">
                      <div className="relative z-10">
                        <h4 className="text-[#FDBA12] font-black text-3xl mb-4 tracking-tighter uppercase">
                          {activeData.darkBox.title}
                        </h4>
                        <p className="text-sm opacity-60 font-medium leading-relaxed mb-10 max-w-lg">
                          {activeData.darkBox.desc}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {activeData.darkBox.tags.map(t => (
                            <span key={t} className="px-5 py-2 bg-white/10 rounded-xl text-[9px] font-black tracking-widest uppercase border border-white/10">{t}</span>
                          ))}
                        </div>
                      </div>
                      <AlertTriangle size={180} className="absolute -bottom-10 -right-10 opacity-5" />
                    </div>
                  )}

                  {/* Bullet Lists */}
                  {activeData?.list && (
                    <div className="grid gap-3">
                      {activeData.list.map(l => (
                        <div key={l} className="flex items-center gap-4 p-6 bg-slate-50/50 rounded-2xl text-[13px] font-bold text-slate-600 border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5051CE]" />
                          {l}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Standard Points */}
                  {activeData?.points && (
                    <div className="space-y-4">
                      {activeData.points.map((pt, i) => (
                        <div key={i} className="p-8 border border-slate-100 rounded-[2.5rem] hover:bg-slate-50 transition-all flex flex-col md:flex-row justify-between md:items-center gap-4">
                          <div className="max-w-xl">
                            <h4 className="font-black text-[#0F172A] text-sm mb-1">{pt.title}</h4>
                            <p className="text-xs text-slate-400 font-medium leading-relaxed">{pt.desc}</p>
                          </div>
                          <Scale size={20} className="text-slate-100 hidden md:block" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Constant Pane Footer */}
                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300">
                      <HelpCircle size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-[#5051CE] uppercase tracking-widest">Compliance Officer</p>
                      <a href="mailto:contact.tutifiedtg@gmail.com" className="text-xs font-bold text-[#0F172A] hover:underline transition-all">contact.tutifiedtg@gmail.com</a>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">System Architect</p>
                    <p className="text-[11px] font-black text-slate-400 tracking-tighter uppercase">Triarch Group Ecosystem</p>
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