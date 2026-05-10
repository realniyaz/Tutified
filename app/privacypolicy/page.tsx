"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { 
  ShieldCheck, Database, Lock, Share2, 
  UserCheck, Bell, Activity, HelpCircle 
} from "lucide-react";

// --- 1. THE AUTOMATED DATA ENGINE ---
// Add or edit sections here; the UI handles the rest.
const PRIVACY_CONFIG = [
  {
    id: "sovereignty",
    title: "Institutional Commitment",
    icon: ShieldCheck,
    heading: "Data Sovereignty.",
    subheading: "Triarch Group Global Standards",
    body: "Tutified, a subsidiary of Triarch Group (triarchgroup.in), operates under a mechanical necessity framework. We collect data only to fuel academic excellence.",
    stats: [
      { label: "Entity", value: "Triarch Group" },
      { label: "Jurisdiction", value: "Delhi-NCR" },
      { label: "Standard", value: "DPDP 2023" },
      { label: "Encryption", value: "AES-256" }
    ]
  },
  {
    id: "usage",
    title: "Usage & Purpose",
    icon: Activity,
    heading: "Processing Intent.",
    subheading: "Operational Utility",
    points: [
      { title: "Transactions", desc: "Processing enrollments via encrypted PCI-DSS tunnels." },
      { title: "Mentor Matching", desc: "Using local data to find the perfect verified mentor." },
      { title: "Optimization", desc: "Analyzing interaction metadata for dashboard refinement." }
    ]
  },
  {
    id: "sharing",
    title: "Disclosure Protocols",
    icon: Share2,
    heading: "Zero-Sale Policy.",
    subheading: "Data Confidentiality",
    checkmarks: [
      "No data is sold to third-party marketing firms.",
      "Data shared only with Razorpay/Stripe for payments.",
      "Minimal student data shared with assigned mentors for curriculum planning."
    ]
  },
  {
    id: "security",
    title: "Security & Retention",
    icon: Lock,
    heading: "Safety Shield.",
    subheading: "Retention Protocols",
    darkBox: {
      title: "AES-256 Architecture",
      desc: "Data is retained for 36 months post-termination for legal and tax compliance. Our ecosystem is audited monthly by Triarch Security Labs.",
      tags: ["2FA Enabled", "SSL Tunnels", "Encrypted Backups"]
    }
  },
  {
    id: "rights",
    title: "User Rights",
    icon: UserCheck,
    heading: "Digital Rights.",
    subheading: "Control & Sovereignty",
    cards: [
      { title: "Access & Export", desc: "Request a full data dump of your profile." },
      { title: "Right to Erasure", desc: "Request the permanent deletion of your data." },
      { title: "Rectification", desc: "Correct inaccurate academic or contact info." }
    ]
  },
  {
    id: "updates",
    title: "Policy Evolution",
    icon: Bell,
    heading: "Version Control.",
    subheading: "Communication Flow",
    list: [
      "Email alerts for significant policy changes.",
      "Dashboard notifications for UI/UX data updates.",
      "Public archival on the Tutified legal hub."
    ]
  }
];

// --- 2. THE PREMIUM PAGE COMPONENT ---
export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState(PRIVACY_CONFIG[0].id);

  const activeData = useMemo(() => 
    PRIVACY_CONFIG.find(s => s.id === activeTab), [activeTab]
  );

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-sans selection:bg-[#5051CE]/20 selection:text-[#5051CE]">
      <Navbar />

      <main className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        {/* Cinematic Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-slate-200 pb-16">
          <div className="text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-black text-[#0F172A] tracking-tighter leading-[0.85]">
              Privacy <br />
              <span className="font-serif italic font-light text-[#5051CE]">Protocols.</span>
            </h1>
            <p className="mt-8 text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]">
              Tutified Institutional Framework / May 2026
            </p>
          </div>
          <div className="hidden md:block bg-white px-8 py-6 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Parent Entity</p>
            <p className="text-sm font-bold text-[#0F172A]">Triarch Group</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">
          {/* Automated Navigation Sidebar */}
          <aside className="sticky top-32 space-y-3">
            {PRIVACY_CONFIG.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`w-full flex items-center justify-between px-8 py-6 rounded-[2.2rem] transition-all duration-500 group ${
                  activeTab === section.id 
                  ? "bg-[#5051CE] text-white shadow-2xl shadow-[#5051CE]/30 scale-105" 
                  : "bg-white text-slate-400 border border-slate-100 hover:border-[#5051CE]/20"
                }`}
              >
                <div className="flex items-center gap-4">
                  <section.icon size={18} strokeWidth={activeTab === section.id ? 3 : 2} />
                  <span className="font-black text-[11px] uppercase tracking-[0.15em]">{section.title}</span>
                </div>
                <div className={`w-1.5 h-1.5 rounded-full transition-all ${activeTab === section.id ? "bg-[#FDBA12] scale-150" : "bg-slate-200 group-hover:bg-[#5051CE]/30"}`} />
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
                className="bg-white rounded-[4rem] p-10 md:p-20 border border-slate-100 shadow-2xl shadow-blue-900/5 min-h-[650px] flex flex-col"
              >
                {/* DYNAMIC CONTENT ENGINE */}
                <div className="flex-grow">
                  <p className="text-[10px] font-black text-[#5051CE] uppercase tracking-widest mb-2">
                    {activeData?.subheading}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tighter mb-8 leading-tight">
                    {activeData?.heading}
                  </h2>

                  {activeData?.body && <p className="text-slate-500 font-medium leading-relaxed mb-8">{activeData.body}</p>}

                  {activeData?.stats && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                      {activeData.stats.map(s => (
                        <div key={s.label} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
                          <p className="text-xs font-black text-[#0F172A]">{s.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.points && (
                    <div className="space-y-4">
                      {activeData.points.map(p => (
                        <div key={p.title} className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 flex gap-5">
                          <Activity size={20} className="text-[#5051CE] mt-1 shrink-0" />
                          <div>
                            <h4 className="font-bold text-sm text-[#0F172A]">{p.title}</h4>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.checkmarks && (
                    <div className="space-y-3">
                      {activeData.checkmarks.map(c => (
                        <div key={c} className="flex gap-4 p-5 bg-emerald-50/50 border border-emerald-100 rounded-2xl text-xs font-bold text-emerald-800">
                          <div className="w-4 h-4 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white text-[8px]">✓</div>
                          {c}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.darkBox && (
                    <div className="bg-[#0F172A] p-8 md:p-12 rounded-[3rem] text-white relative overflow-hidden">
                      <div className="relative z-10">
                        <h4 className="text-[#FDBA12] font-black text-xl mb-4 tracking-tighter">{activeData.darkBox.title}</h4>
                        <p className="text-sm opacity-60 font-medium leading-relaxed mb-8">{activeData.darkBox.desc}</p>
                        <div className="flex flex-wrap gap-3">
                          {activeData.darkBox.tags.map(t => (
                            <span key={t} className="px-4 py-2 bg-white/10 rounded-xl text-[9px] font-black tracking-widest uppercase border border-white/10">{t}</span>
                          ))}
                        </div>
                      </div>
                      <Lock size={150} className="absolute -bottom-10 -right-10 opacity-5" />
                    </div>
                  )}

                  {activeData?.cards && (
                    <div className="grid gap-4">
                      {activeData.cards.map(c => (
                        <div key={c.title} className="p-6 border border-slate-100 rounded-[2rem] hover:border-[#5051CE]/30 transition-all group">
                          <h4 className="font-bold text-sm text-[#0F172A] group-hover:text-[#5051CE] transition-colors">{c.title}</h4>
                          <p className="text-xs text-slate-400 font-medium mt-1">{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.list && (
                    <div className="space-y-3">
                      {activeData.list.map(l => (
                        <div key={l} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl text-xs font-bold text-slate-600">
                          <Bell size={14} className="text-[#5051CE]" />
                          {l}
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
                      <p className="text-[10px] font-black text-[#5051CE] uppercase tracking-widest">Compliance Desk</p>
                      <a href="mailto:contact.tutifiedtg@gmail.com" className="text-xs font-bold text-[#0F172A] hover:underline transition-all">contact.tutifiedtg@gmail.com</a>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Audit Trail</p>
                    <p className="text-[11px] font-black text-slate-400 tracking-tighter">REF: TFD-PRV-2026-V2</p>
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