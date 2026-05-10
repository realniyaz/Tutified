"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { 
  RefreshCcw, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  HelpCircle,
  FileText
} from "lucide-react";

// --- 1. REFUND CONFIGURATION ENGINE ---
const REFUND_CONFIG = [
  {
    id: "guarantee",
    title: "The Trust Guarantee",
    icon: ShieldCheck,
    heading: "Risk-Free Trial.",
    subheading: "Institutional Quality Assurance",
    body: "At Tutified, we prioritize the student-mentor synergy. Our 'Trust Guarantee' ensures that your initial investment is protected during the matching phase.",
    highlightBox: {
      title: "First-Session 100% Refund",
      desc: "If you are not satisfied with the assigned mentor after the first session, we offer a complete refund of the initial deposit or a complimentary replacement mentor.",
      tags: ["Full Refund", "No Questions Asked"]
    }
  },
  {
    id: "eligibility",
    title: "Refund Eligibility",
    icon: CheckCircle2,
    heading: "Fair Use Logic.",
    subheading: "Eligibility Matrix",
    matrix: [
      { label: "Unused Sessions", value: "100% Refundable" },
      { label: "Conducted Sessions", value: "Non-Refundable" },
      { label: "Processing Fee", value: "Zero (Internal)" },
      { label: "Time Limit", value: "30 Days from Payment" }
    ],
    points: [
      { title: "Pro-Rata Calculation", desc: "Refunds for discontinued monthly packages are calculated based on the remaining unused hours." },
      { title: "No-Show Policy", desc: "Sessions missed by the student without a 4-hour notice are marked as 'Conducted' and are not eligible for refund." }
    ]
  },
  {
    id: "process",
    title: "Refund Pipeline",
    icon: RefreshCcw,
    heading: "The Journey.",
    subheading: "Step-by-Step Resolution",
    pipeline: [
      { step: "01", title: "Request Initiation", desc: "Submit a refund request via the Parent Dashboard or email." },
      { step: "02", title: "Audit & Review", desc: "Our academic counselors review the session logs and attendance." },
      { step: "03", title: "Approval & Transfer", desc: "Funds are released back to the original payment source." }
    ]
  },
  {
    id: "timeline",
    title: "Processing Time",
    icon: Clock,
    heading: "Swift Credits.",
    subheading: "Financial Timelines",
    darkBox: {
      title: "5-7 Business Days",
      desc: "While we initiate refunds within 48 hours, bank processing cycles typically take 5-7 business days to reflect in your account.",
      tags: ["Bank Standard", "Direct Credit", "UPI/Card Support"]
    }
  },
  {
    id: "non-refundable",
    title: "Non-Refundable Items",
    icon: AlertCircle,
    heading: "Exclusions.",
    subheading: "Policy Boundaries",
    list: [
      "Completed mentorship sessions and performance audits.",
      "Custom curriculum design fees (if explicitly charged).",
      "Termination due to breach of the Student Code of Conduct.",
      "Promotional bundles or limited-time scholarships."
    ]
  }
];

// --- 2. THE MAIN EXPORTED COMPONENT ---
export default function RefundPolicyPage() {
  const [activeTab, setActiveTab] = useState(REFUND_CONFIG[0].id);

  const activeData = useMemo(() => 
    REFUND_CONFIG.find(s => s.id === activeTab), [activeTab]
  );

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-jakarta selection:bg-[#5051CE]/20">
      <Navbar />

      <main className="pt-32 md:pt-44 pb-24 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-slate-200 pb-12">
          <div className="w-full md:w-auto">
            <h1 className="text-5xl md:text-8xl font-black text-[#0F172A] tracking-tighter leading-[0.85]">
              Refund <br />
              <span className="font-serif italic font-light text-[#5051CE]">Policy.</span>
            </h1>
            <p className="mt-8 text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]">
              Tutified Transparency Framework / Triarch Group
            </p>
          </div>
          <div className="hidden md:block bg-white px-8 py-5 rounded-3xl border border-slate-100 shadow-sm">
             <RefreshCcw size={24} className="text-[#5051CE] mb-2" />
             <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Code: TFD-REF-2026</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">
          {/* Navigation Sidebar (Horizontal Scroll on Mobile) */}
          <aside className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 sticky top-24 lg:top-32 no-scrollbar">
            {REFUND_CONFIG.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex-shrink-0 flex items-center justify-between px-8 py-5 rounded-[2rem] transition-all duration-500 lg:w-full ${
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

                  {/* Highlight Box (Trust Guarantee) */}
                  {activeData?.highlightBox && (
                    <div className="p-8 bg-[#5051CE]/5 rounded-[2.5rem] border border-[#5051CE]/10 mb-10">
                      <h4 className="font-black text-[#5051CE] text-xl mb-3 tracking-tight">{activeData.highlightBox.title}</h4>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                        {activeData.highlightBox.desc}
                      </p>
                      <div className="flex gap-2">
                        {activeData.highlightBox.tags.map(t => (
                          <span key={t} className="px-4 py-1.5 bg-white rounded-full text-[9px] font-black uppercase text-[#5051CE] shadow-sm">{t}</span>
                        ))}
                      </div>
                    </div>
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

                  {/* Pipeline Stepper */}
                  {activeData?.pipeline && (
                    <div className="space-y-6">
                      {activeData.pipeline.map((p, i) => (
                        <div key={i} className="flex gap-6 relative group">
                          <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center shrink-0 z-10 font-black text-xs">
                            {p.step}
                          </div>
                          <div className="pt-2">
                            <h4 className="font-bold text-[#0F172A] mb-1">{p.title}</h4>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Dark Box (Timeline) */}
                  {activeData?.darkBox && (
                    <div className="bg-[#0F172A] p-10 md:p-14 rounded-[3.5rem] text-white relative overflow-hidden mb-10">
                      <div className="relative z-10">
                        <h4 className="text-[#FDBA12] font-black text-3xl mb-4 tracking-tighter">
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
                      <RefreshCcw size={180} className="absolute -bottom-10 -right-10 opacity-5" />
                    </div>
                  )}

                  {/* List for Exclusions */}
                  {activeData?.list && (
                    <div className="grid gap-3">
                      {activeData.list.map(l => (
                        <div key={l} className="flex items-center gap-4 p-5 bg-red-50/50 rounded-2xl text-[13px] font-bold text-red-900/70 border border-red-100/50">
                          <AlertCircle size={16} className="text-red-400" />
                          {l}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Points for Eligibility */}
                  {activeData?.points && (
                    <div className="space-y-4">
                      {activeData.points.map((pt, i) => (
                        <div key={i} className="p-6 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors">
                          <h4 className="font-bold text-[#0F172A] text-sm mb-1">{pt.title}</h4>
                          <p className="text-xs text-slate-500 font-medium">{pt.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pane Footer */}
                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300">
                      <HelpCircle size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-[#5051CE] uppercase tracking-widest">Support Desk</p>
                      <a href="mailto:contact.tutifiedtg@gmail.com" className="text-xs font-bold text-[#0F172A] hover:underline transition-all">contact.tutifiedtg@gmail.com</a>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Institutional File</p>
                    <p className="text-[11px] font-black text-slate-400 tracking-tighter">TRIARCH-TFD-REFUND-2026</p>
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