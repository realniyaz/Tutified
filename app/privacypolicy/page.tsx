"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { 
  ShieldCheck, Lock, Share2, 
  UserCheck, Bell, Activity, HelpCircle 
} from "lucide-react";

// --- DYNAMIC PRIVACY CONFIGURATION ---
const PRIVACY_CONFIG = [
  {
    id: "sovereignty",
    title: "Sovereignty",
    icon: ShieldCheck,
    heading: "Data Sovereignty.",
    subheading: "Global Standards",
    body: "Tutified, a subsidiary of Triarch Group, operates under a mechanical necessity framework. We collect data only to fuel academic excellence.",
    stats: [
      { label: "Entity", value: "Triarch" },
      { label: "Jurisdiction", value: "NCR" },
      { label: "Standard", value: "DPDP 23" },
      { label: "Encryption", value: "AES-256" }
    ]
  },
  {
    id: "usage",
    title: "Usage",
    icon: Activity,
    heading: "Processing Intent.",
    subheading: "Operational Utility",
    points: [
      { title: "Transactions", desc: "Processing enrollments via encrypted tunnels." },
      { title: "Mentor Matching", desc: "Finding the perfect verified local mentor." },
      { title: "Optimization", desc: "Analyzing interaction metadata for refinement." }
    ]
  },
  {
    id: "sharing",
    title: "Sharing",
    icon: Share2,
    heading: "Zero-Sale Policy.",
    subheading: "Confidentiality",
    checkmarks: [
      "No data is sold to third-party firms.",
      "Payments via Razorpay/Stripe only.",
      "Minimal data shared with assigned mentors."
    ]
  },
  {
    id: "security",
    title: "Security",
    icon: Lock,
    heading: "Safety Shield.",
    subheading: "Retention Protocols",
    darkBox: {
      title: "AES-256 Architecture",
      desc: "Data is retained for 36 months for compliance. Audited monthly by Triarch Labs.",
      tags: ["2FA", "SSL", "Backups"]
    }
  },
  {
    id: "rights",
    title: "Rights",
    icon: UserCheck,
    heading: "Digital Rights.",
    subheading: "Control & Sovereignty",
    cards: [
      { title: "Access & Export", desc: "Request a full data dump." },
      { title: "Right to Erasure", desc: "Permanent deletion of data." },
      { title: "Rectification", desc: "Correct inaccurate academic info." }
    ]
  },
  {
    id: "updates",
    title: "Updates",
    icon: Bell,
    heading: "Version Control.",
    subheading: "Communication Flow",
    list: [
      "Email alerts for policy changes.",
      "Dashboard notifications for updates.",
      "Public archival on legal hub."
    ]
  }
];

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState(PRIVACY_CONFIG[0].id);

  const activeData = useMemo(() => 
    PRIVACY_CONFIG.find(s => s.id === activeTab), [activeTab]
  );

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-sans selection:bg-[#5051CE]/20 overflow-x-hidden">
      <Navbar />

      <main className="pt-28 md:pt-44 pb-16 md:pb-24 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Responsive Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10 md:mb-20 border-b border-slate-200 pb-10 md:pb-16">
          <div className="text-left w-full">
            <h1 className="text-4xl md:text-8xl font-black text-[#0F172A] tracking-tighter leading-[1] md:leading-[0.85]">
              Privacy <br className="hidden md:block" />
              <span className="font-serif italic font-light text-[#5051CE]">Protocols.</span>
            </h1>
            <p className="mt-6 md:mt-8 text-slate-400 font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px]">
              Institutional Framework / May 2026
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white px-6 py-4 md:px-8 md:py-6 rounded-2xl md:rounded-[2.5rem] border border-slate-100 shadow-sm w-full md:w-auto">
            <ShieldCheck className="text-[#5051CE] w-5 h-5" />
            <div>
              <p className="text-[7px] md:text-[9px] font-black text-slate-300 uppercase tracking-widest mb-0.5">Parent Entity</p>
              <p className="text-xs md:text-sm font-bold text-[#0F172A]">Triarch Group</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
          
          {/* Navigation Sidebar: Horizontal Scroll on Mobile, Vertical Sticky on Desktop */}
          <aside className="sticky top-20 md:top-32 z-20 -mx-4 px-4 md:mx-0 md:px-0 bg-[#F8FAFF]/80 backdrop-blur-md lg:bg-transparent flex lg:flex-col gap-2 md:gap-3 overflow-x-auto no-scrollbar pb-4 lg:pb-0">
            {PRIVACY_CONFIG.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex-shrink-0 flex items-center justify-between px-6 md:px-8 py-4 md:py-6 rounded-full lg:rounded-[2.2rem] transition-all duration-300 border ${
                  activeTab === section.id 
                  ? "bg-[#5051CE] text-white shadow-xl shadow-[#5051CE]/20 border-[#5051CE] scale-105" 
                  : "bg-white text-slate-400 border-slate-100"
                }`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <section.icon className={`${activeTab === section.id ? "text-white" : "text-slate-300"} w-4 h-4 md:w-[18px] md:h-[18px]`} />
                  <span className="font-black text-[9px] md:text-[11px] uppercase tracking-widest">{section.title}</span>
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
                  <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tighter mb-8 leading-tight">
                    {activeData?.heading}
                  </h2>

                  {activeData?.body && <p className="text-slate-500 font-medium leading-relaxed mb-8 text-sm md:text-base">{activeData.body}</p>}

                  {activeData?.stats && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-8">
                      {activeData.stats.map(s => (
                        <div key={s.label} className="p-4 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-100">
                          <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
                          <p className="text-[10px] md:text-xs font-black text-[#0F172A]">{s.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.points && (
                    <div className="space-y-3 md:space-y-4">
                      {activeData.points.map(p => (
                        <div key={p.title} className="p-5 md:p-6 bg-slate-50/50 rounded-2xl md:rounded-3xl border border-slate-100 flex gap-4 md:gap-5">
                          <Activity size={18} className="text-[#5051CE] mt-1 shrink-0" />
                          <div>
                            <h4 className="font-bold text-xs md:text-sm text-[#0F172A]">{p.title}</h4>
                            <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.checkmarks && (
                    <div className="space-y-2 md:space-y-3">
                      {activeData.checkmarks.map(c => (
                        <div key={c} className="flex gap-4 p-4 md:p-5 bg-emerald-50/50 border border-emerald-100 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold text-emerald-800">
                          <div className="w-4 h-4 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white text-[8px]">✓</div>
                          {c}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.darkBox && (
                    <div className="bg-[#0F172A] p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-white relative overflow-hidden">
                      <div className="relative z-10">
                        <h4 className="text-[#FDBA12] font-black text-xl mb-4 tracking-tighter">{activeData.darkBox.title}</h4>
                        <p className="text-xs md:text-sm opacity-60 font-medium leading-relaxed mb-8">{activeData.darkBox.desc}</p>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {activeData.darkBox.tags.map(t => (
                            <span key={t} className="px-3 md:px-4 py-1.5 md:py-2 bg-white/10 rounded-lg md:rounded-xl text-[8px] md:text-[9px] font-black tracking-widest uppercase border border-white/10">{t}</span>
                          ))}
                        </div>
                      </div>
                      <Lock className="absolute -bottom-10 -right-10 opacity-5 w-40 h-40 md:w-60 md:h-60" />
                    </div>
                  )}

                  {activeData?.cards && (
                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                      {activeData.cards.map(c => (
                        <div key={c.title} className="p-5 md:p-6 border border-slate-100 rounded-2xl md:rounded-[2rem] hover:border-[#5051CE]/30 transition-all group">
                          <h4 className="font-bold text-xs md:text-sm text-[#0F172A] group-hover:text-[#5051CE] transition-colors">{c.title}</h4>
                          <p className="text-[10px] md:text-xs text-slate-400 font-medium mt-1">{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.list && (
                    <div className="space-y-2 md:space-y-3">
                      {activeData.list.map(l => (
                        <div key={l} className="flex items-center gap-4 p-4 md:p-5 bg-slate-50 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold text-slate-600">
                          <Bell size={14} className="text-[#5051CE] shrink-0" />
                          {l}
                        </div>
                      ))}
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
                      <p className="text-[8px] md:text-[10px] font-black text-[#5051CE] uppercase tracking-widest">Compliance</p>
                      <a href="mailto:contact.tutifiedtg@gmail.com" className="text-[10px] md:text-xs font-bold text-[#0F172A] hover:underline">contact.tutifiedtg@gmail.com</a>
                    </div>
                  </div>
                  <div className="text-center sm:text-right w-full sm:w-auto">
                    <p className="text-[8px] md:text-[9px] font-bold text-slate-300 uppercase tracking-widest">Audit Trail</p>
                    <p className="text-[10px] md:text-[11px] font-black text-slate-400">REF: TFD-PRV-2026-V2</p>
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