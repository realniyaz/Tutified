"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { 
  Scale, BookOpen, CreditCard, ShieldAlert, 
  Handshake, FileWarning, HelpCircle, ArrowRight
} from "lucide-react";

// --- 1. TERMS CONFIGURATION ENGINE ---
const TERMS_CONFIG = [
  {
    id: "engagement",
    title: "Engagement",
    icon: Handshake,
    heading: "The Partnership.",
    subheading: "Institutional Framework",
    body: "Engagement with Tutified constitutes a legal agreement. We provide the infrastructure for elite 1-on-1 mentorship, bridging the gap between verified expertise and student potential.",
    matrix: [
      { label: "Contractor", value: "Tutified / Triarch" },
      { label: "Notice", value: "48 Hours" },
      { label: "Service", value: "1-on-1" },
      { label: "Verification", value: "4-Step" }
    ]
  },
  {
    id: "conduct",
    title: "Conduct",
    icon: ShieldAlert,
    heading: "Mutual Respect.",
    subheading: "Standard Operating Procedures",
    rules: [
      { title: "Mentor Safety", desc: "Zero tolerance for misconduct towards our mentors." },
      { title: "Student Integrity", desc: "Academic honesty remains the student's responsibility." },
      { title: "Environment", desc: "A professional space must be provided for learning." }
    ]
  },
  {
    id: "billing",
    title: "Billing",
    icon: CreditCard,
    heading: "Financial Logic.",
    subheading: "Transactional Transparency",
    darkBox: {
      title: "Direct Payment Prohibition",
      desc: "Payments must be processed exclusively through the Tutified Parent Dashboard. No direct cash or personal UPI transactions are permitted with mentors.",
      tags: ["Razorpay Secured", "Tax Compliant"]
    },
    list: [
      "Invoices are generated on the 1st of every month.",
      "A 5% late fee applies after 5 business days.",
      "Advance payments are held in escrow."
    ]
  },
  {
    id: "intellect",
    title: "Intellect",
    icon: BookOpen,
    heading: "Proprietary Assets.",
    subheading: "Triarch IP Protection",
    cards: [
      { title: "Curriculum Material", desc: "Materials are for single-student use only." },
      { title: "AI Ecosystem", desc: "Reproduction of Tudo AI logic is prohibited." },
      { title: "Brand Identity", desc: "Trademarks are protected globally." }
    ]
  },
  {
    id: "termination",
    title: "Termination",
    icon: FileWarning,
    heading: "Service Dissolution.",
    subheading: "Exit Protocols",
    body: "Either party may terminate the engagement with a 7-day notice period. Immediate termination occurs if the Code of Conduct is breached.",
    statusBox: {
      color: "bg-red-50 text-red-700 border-red-100",
      text: "Tutified reserves the right to suspend access if institutional standards are not met."
    }
  }
];

export default function TermsOfServicePage() {
  const [activeTab, setActiveTab] = useState(TERMS_CONFIG[0].id);

  const activeData = useMemo(() => 
    TERMS_CONFIG.find(s => s.id === activeTab), [activeTab]
  );

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-jakarta selection:bg-[#5051CE]/20 overflow-x-hidden">
      <Navbar />

      <main className="pt-28 md:pt-44 pb-16 md:pb-24 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Responsive Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-16 border-b border-slate-200 pb-8 md:pb-12">
          <div className="w-full md:w-auto">
            <h1 className="text-4xl md:text-8xl font-black text-[#0F172A] tracking-tighter leading-[1] md:leading-[0.85]">
              Terms of <br />
              <span className="font-serif italic font-light text-[#5051CE]">Service.</span>
            </h1>
            <p className="mt-6 text-slate-400 font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px]">
              Institutional Governance / Triarch Group
            </p>
          </div>
          <div className="flex items-center gap-4 md:flex-col md:items-end">
             <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center">
                <Scale className="text-[#5051CE] w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
                <p className="text-[7px] md:text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">Version 2.4</p>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
          
          {/* Navigation Sidebar (Horizontal Scroll on Mobile) */}
          <aside className="sticky top-20 md:top-32 z-20 flex lg:flex-col gap-2 md:gap-3 overflow-x-auto no-scrollbar pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 bg-[#F8FAFF]/80 backdrop-blur-md lg:bg-transparent">
            {TERMS_CONFIG.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex-shrink-0 flex items-center justify-between px-6 md:px-8 py-3.5 md:py-5 rounded-full lg:rounded-[2rem] transition-all duration-300 whitespace-nowrap lg:w-full border ${
                  activeTab === section.id 
                  ? "bg-[#5051CE] text-white shadow-xl shadow-[#5051CE]/20 border-[#5051CE] scale-105" 
                  : "bg-white text-slate-400 border-slate-100 hover:border-[#5051CE]/20"
                }`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <section.icon className={`w-4 h-4 md:w-[18px] md:h-[18px] ${activeTab === section.id ? "text-white" : "text-slate-300"}`} strokeWidth={activeTab === section.id ? 3 : 2} />
                  <span className="font-black text-[9px] md:text-[10px] uppercase tracking-widest">{section.title}</span>
                </div>
                <div className={`hidden lg:block w-1.5 h-1.5 rounded-full ${activeTab === section.id ? "bg-[#FDBA12] scale-125" : "bg-slate-200"}`} />
              </button>
            ))}
          </aside>

          {/* Animated Content Pane */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 border border-slate-100 shadow-xl shadow-blue-900/5 flex flex-col h-full"
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

                  {activeData?.matrix && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                      {activeData.matrix.map(m => (
                        <div key={m.label} className="p-4 md:p-5 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100">
                          <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
                          <p className="text-xs md:text-sm font-black text-[#0F172A]">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.rules && (
                    <div className="space-y-3 md:space-y-4">
                      {activeData.rules.map((rule, i) => (
                        <div key={i} className="p-5 md:p-6 bg-slate-50/50 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 flex gap-4 md:gap-6 group hover:bg-white transition-all">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#5051CE] shrink-0 border border-slate-100">
                            <span className="text-[10px] md:text-xs font-black">0{i+1}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm md:text-base text-[#0F172A] mb-1">{rule.title}</h4>
                            <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-relaxed">{rule.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.darkBox && (
                    <div className="bg-[#0F172A] p-8 md:p-14 rounded-[2rem] md:rounded-[3.5rem] text-white relative overflow-hidden mb-8 md:mb-10">
                      <div className="relative z-10">
                        <h4 className="text-[#FDBA12] font-black text-2xl md:text-3xl mb-4 tracking-tighter">
                          {activeData.darkBox.title}
                        </h4>
                        <p className="text-xs md:text-sm opacity-60 font-medium leading-relaxed mb-8 md:mb-10 max-w-xl">
                          {activeData.darkBox.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {activeData.darkBox.tags.map(t => (
                            <span key={t} className="px-3 md:px-5 py-1.5 md:py-2 bg-white/10 rounded-lg md:rounded-xl text-[8px] md:text-[9px] font-black tracking-widest uppercase border border-white/10">{t}</span>
                          ))}
                        </div>
                      </div>
                      <CreditCard className="absolute -bottom-10 -right-10 opacity-5 w-40 h-40 md:w-60 md:h-60" />
                    </div>
                  )}

                  {activeData?.list && (
                    <div className="grid gap-2 md:gap-3">
                      {activeData.list.map(l => (
                        <div key={l} className="flex items-start md:items-center gap-3 md:gap-4 p-4 md:p-5 bg-slate-50 rounded-xl md:rounded-2xl text-[11px] md:text-[13px] font-bold text-slate-600 border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5051CE] shrink-0 mt-1.5 md:mt-0" />
                          {l}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.cards && (
                    <div className="grid gap-3 md:gap-4">
                      {activeData.cards.map(c => (
                        <div key={c.title} className="p-6 md:p-8 border border-slate-100 rounded-[1.5rem] md:rounded-[2.5rem] hover:border-[#5051CE]/30 transition-all flex justify-between items-center bg-slate-50/20">
                          <div>
                            <h4 className="font-bold text-sm md:text-base text-[#0F172A]">{c.title}</h4>
                            <p className="text-[10px] md:text-xs text-slate-400 font-medium mt-1">{c.desc}</p>
                          </div>
                          <ArrowRight className="text-slate-200 w-4 h-4 md:w-5 md:h-5" />
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.statusBox && (
                    <div className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border ${activeData.statusBox.color} font-bold text-xs md:text-sm leading-relaxed`}>
                      {activeData.statusBox.text}
                    </div>
                  )}
                </div>

                {/* Mobile-Adjusted Panel Footer */}
                <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 shrink-0">
                      <HelpCircle className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black text-[#5051CE] uppercase tracking-widest">Legal Desk</p>
                      <a href="mailto:legal@triarchgroup.in" className="text-[10px] md:text-xs font-bold text-[#0F172A] hover:underline">legal@triarchgroup.in</a>
                    </div>
                  </div>
                  <div className="text-center sm:text-right w-full sm:w-auto">
                    <p className="text-[8px] md:text-[9px] font-bold text-slate-300 uppercase tracking-widest">Internal ID</p>
                    <p className="text-[10px] md:text-[11px] font-black text-slate-400">TFD-TOS-2026</p>
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