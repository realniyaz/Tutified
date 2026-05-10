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
    title: "Service Engagement",
    icon: Handshake,
    heading: "The Partnership.",
    subheading: "Institutional Framework",
    body: "Engagement with Tutified (a Triarch Group subsidiary) constitutes a legal agreement. We provide the infrastructure for elite 1-on-1 mentorship, bridging the gap between verified expertise and student potential.",
    matrix: [
      { label: "Contractor", value: "Tutified / Triarch" },
      { label: "Notice Period", value: "48 Hours" },
      { label: "Service Mode", value: "Home / 1-on-1" },
      { label: "Verification", value: "4-Step Vetting" }
    ]
  },
  {
    id: "conduct",
    title: "Code of Conduct",
    icon: ShieldAlert,
    heading: "Mutual Respect.",
    subheading: "Standard Operating Procedures",
    rules: [
      { title: "Mentor Safety", desc: "Zero tolerance for any verbal or physical misconduct towards our mentors." },
      { title: "Student Integrity", desc: "Mentors will provide guidance; academic honesty in exams remains the student's responsibility." },
      { title: "Home Environment", desc: "A quiet, professional space must be provided to ensure learning efficacy." }
    ]
  },
  {
    id: "billing",
    title: "Billing & Finance",
    icon: CreditCard,
    heading: "Financial Logic.",
    subheading: "Transactional Transparency",
    darkBox: {
      title: "Direct Payment Prohibition",
      desc: "Payments must be processed exclusively through the Tutified Parent Dashboard. No direct cash or personal UPI transactions are permitted with mentors.",
      tags: ["Razorpay Secured", "Automated Invoicing", "Tax Compliant"]
    },
    list: [
      "Invoices are generated on the 1st of every month.",
      "A 5% late fee applies to payments delayed beyond 5 business days.",
      "Advance payments for session bundles are held in escrow until conducted."
    ]
  },
  {
    id: "intellect",
    title: "Intellectual Property",
    icon: BookOpen,
    heading: "Proprietary Assets.",
    subheading: "Triarch IP Protection",
    cards: [
      { title: "Curriculum Material", desc: "Worksheets and notes provided are for single-student use only." },
      { title: "AI Ecosystem", desc: "Reproduction of 'Tudo AI' logic or interaction patterns is strictly prohibited." },
      { title: "Brand Identity", desc: "The 'Tutified' and 'Triarch' trademarks are protected globally." }
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

// --- 2. THE MAIN EXPORTED COMPONENT ---
export default function TermsOfServicePage() {
  const [activeTab, setActiveTab] = useState(TERMS_CONFIG[0].id);

  const activeData = useMemo(() => 
    TERMS_CONFIG.find(s => s.id === activeTab), [activeTab]
  );

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-jakarta selection:bg-[#5051CE]/20">
      <Navbar />

      <main className="pt-32 md:pt-44 pb-24 px-6 max-w-7xl mx-auto">
        {/* Cinematic Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-slate-200 pb-12">
          <div className="w-full md:w-auto">
            <h1 className="text-5xl md:text-8xl font-black text-[#0F172A] tracking-tighter leading-[0.85]">
              Terms of <br />
              <span className="font-serif italic font-light text-[#5051CE]">Service.</span>
            </h1>
            <p className="mt-8 text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]">
              Institutional Governance / Triarch Group
            </p>
          </div>
          <div className="hidden md:flex gap-4">
             <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center">
                <Scale size={24} className="text-[#5051CE] mb-2" />
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Version 2.4</p>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">
          {/* Responsive Navigation Sidebar */}
          <aside className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 sticky top-24 lg:top-32 no-scrollbar scroll-smooth">
            {TERMS_CONFIG.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex-shrink-0 flex items-center justify-between px-8 py-5 rounded-[2rem] transition-all duration-500 whitespace-nowrap lg:w-full ${
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

                  {/* Dynamic Rendering Logic */}
                  {activeData?.body && (
                    <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">
                      {activeData.body}
                    </p>
                  )}

                  {activeData?.matrix && (
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {activeData.matrix.map(m => (
                        <div key={m.label} className="p-5 bg-slate-50 rounded-3xl border border-slate-100">
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
                          <p className="text-sm font-black text-[#0F172A]">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.rules && (
                    <div className="space-y-4">
                      {activeData.rules.map((rule, i) => (
                        <div key={i} className="p-6 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 flex gap-6 group hover:bg-white transition-all">
                          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#5051CE] shrink-0 border border-slate-100">
                            <span className="text-xs font-black">0{i+1}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0F172A] mb-1">{rule.title}</h4>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{rule.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.darkBox && (
                    <div className="bg-[#0F172A] p-10 md:p-14 rounded-[3.5rem] text-white relative overflow-hidden mb-10">
                      <div className="relative z-10">
                        <h4 className="text-[#FDBA12] font-black text-2xl mb-4 tracking-tighter">
                          {activeData.darkBox.title}
                        </h4>
                        <p className="text-sm opacity-60 font-medium leading-relaxed mb-10 max-w-xl">
                          {activeData.darkBox.desc}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {activeData.darkBox.tags.map(t => (
                            <span key={t} className="px-5 py-2 bg-white/10 rounded-xl text-[9px] font-black tracking-widest uppercase border border-white/10">{t}</span>
                          ))}
                        </div>
                      </div>
                      <CreditCard size={180} className="absolute -bottom-10 -right-10 opacity-5" />
                    </div>
                  )}

                  {activeData?.list && (
                    <div className="space-y-3">
                      {activeData.list.map(l => (
                        <div key={l} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl text-[13px] font-bold text-slate-600 border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5051CE]" />
                          {l}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.cards && (
                    <div className="grid gap-4">
                      {activeData.cards.map(c => (
                        <div key={c.title} className="p-8 border border-slate-100 rounded-[2.5rem] hover:border-[#5051CE]/30 transition-all group flex justify-between items-center bg-slate-50/20">
                          <div>
                            <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#5051CE] transition-colors">{c.title}</h4>
                            <p className="text-xs text-slate-400 font-medium mt-1">{c.desc}</p>
                          </div>
                          <ArrowRight className="text-slate-200 group-hover:text-[#5051CE] transition-all" size={20} />
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.statusBox && (
                    <div className={`p-8 rounded-[2.5rem] border ${activeData.statusBox.color} font-bold text-sm leading-relaxed`}>
                      {activeData.statusBox.text}
                    </div>
                  )}
                </div>

                {/* Footer Section in Pane */}
                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300">
                      <HelpCircle size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-[#5051CE] uppercase tracking-widest">Legal Desk</p>
                      <a href="mailto:legal@triarchgroup.in" className="text-xs font-bold text-[#0F172A] hover:underline transition-all font-jakarta">legal@triarchgroup.in</a>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Internal ID</p>
                    <p className="text-[11px] font-black text-slate-400 tracking-tighter">TFD-TOS-2026</p>
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