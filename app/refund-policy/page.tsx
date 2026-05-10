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
  HelpCircle
} from "lucide-react";

// --- 1. REFUND CONFIGURATION ENGINE ---
const REFUND_CONFIG = [
  {
    id: "guarantee",
    title: "Guarantee",
    icon: ShieldCheck,
    heading: "Risk-Free Trial.",
    subheading: "Quality Assurance",
    body: "At Tutified, we prioritize the student-mentor synergy. Our 'Trust Guarantee' ensures that your initial investment is protected during the matching phase.",
    highlightBox: {
      title: "First-Session 100% Refund",
      desc: "If you are not satisfied after the first session, we offer a complete refund or a complimentary replacement.",
      tags: ["Full Refund", "No Questions"]
    }
  },
  {
    id: "eligibility",
    title: "Eligibility",
    icon: CheckCircle2,
    heading: "Fair Use Logic.",
    subheading: "Eligibility Matrix",
    matrix: [
      { label: "Unused Sessions", value: "100% Refundable" },
      { label: "Conducted", value: "Non-Refundable" },
      { label: "Processing", value: "Zero Fee" },
      { label: "Time Limit", value: "30 Days" }
    ],
    points: [
      { title: "Pro-Rata Calculation", desc: "Refunds for packages are calculated based on unused hours." },
      { title: "No-Show Policy", desc: "Sessions missed without 4-hour notice are non-refundable." }
    ]
  },
  {
    id: "process",
    title: "Pipeline",
    icon: RefreshCcw,
    heading: "The Journey.",
    subheading: "Step-by-Step Resolution",
    pipeline: [
      { step: "01", title: "Request", desc: "Submit via Dashboard or email." },
      { step: "02", title: "Audit", desc: "Counselors review session logs and attendance." },
      { step: "03", title: "Transfer", desc: "Funds released to original payment source." }
    ]
  },
  {
    id: "timeline",
    title: "Timeline",
    icon: Clock,
    heading: "Swift Credits.",
    subheading: "Financial Timelines",
    darkBox: {
      title: "5-7 Business Days",
      desc: "We initiate within 48 hours; bank processing typically takes 5-7 business days.",
      tags: ["Bank Standard", "UPI/Card Support"]
    }
  },
  {
    id: "non-refundable",
    title: "Exclusions",
    icon: AlertCircle,
    heading: "Exclusions.",
    subheading: "Policy Boundaries",
    list: [
      "Completed mentorship sessions.",
      "Custom curriculum design fees.",
      "Breach of Student Code of Conduct.",
      "Promotional bundles or scholarships."
    ]
  }
];

export default function RefundPolicyPage() {
  const [activeTab, setActiveTab] = useState(REFUND_CONFIG[0].id);

  const activeData = useMemo(() => 
    REFUND_CONFIG.find(s => s.id === activeTab), [activeTab]
  );

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-jakarta selection:bg-[#5051CE]/20 overflow-x-hidden">
      <Navbar />

      <main className="pt-28 md:pt-44 pb-16 md:pb-24 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-16 border-b border-slate-200 pb-8 md:pb-12">
          <div className="w-full md:w-auto text-left">
            <h1 className="text-4xl md:text-8xl font-black text-[#0F172A] tracking-tighter leading-[1] md:leading-[0.85]">
              Refund <br />
              <span className="font-serif italic font-light text-[#5051CE]">Policy.</span>
            </h1>
            <p className="mt-6 md:mt-8 text-slate-400 font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px]">
              Transparency Framework / Triarch Group
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white px-5 py-4 rounded-2xl border border-slate-100 shadow-sm md:flex-col md:items-end md:gap-2">
             <RefreshCcw className="text-[#5051CE] w-5 h-5 md:w-6 md:h-6" />
             <p className="text-[8px] md:text-[9px] font-black text-slate-300 uppercase tracking-widest">Code: TFD-REF-2026</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
          {/* Navigation Sidebar (Horizontal Scroll on Mobile) */}
          <aside className="sticky top-20 md:top-32 z-20 flex lg:flex-col gap-2 md:gap-3 overflow-x-auto no-scrollbar pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 bg-[#F8FAFF]/80 backdrop-blur-md lg:bg-transparent">
            {REFUND_CONFIG.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex-shrink-0 flex items-center justify-between px-6 md:px-8 py-3.5 md:py-5 rounded-full lg:rounded-[2rem] transition-all duration-300 whitespace-nowrap lg:w-full border ${
                  activeTab === section.id 
                  ? "bg-[#5051CE] text-white shadow-xl shadow-[#5051CE]/20 border-[#5051CE]" 
                  : "bg-white text-slate-400 border-slate-100"
                }`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <section.icon className={`w-4 h-4 md:w-[18px] md:h-[18px] ${activeTab === section.id ? "text-white" : "text-slate-300"}`} strokeWidth={activeTab === section.id ? 3 : 2} />
                  <span className="font-black text-[9px] md:text-[10px] uppercase tracking-widest">{section.title}</span>
                </div>
                <div className={`hidden lg:block w-1.5 h-1.5 rounded-full transition-all ${activeTab === section.id ? "bg-[#FDBA12] scale-150" : "bg-slate-200"}`} />
              </button>
            ))}
          </aside>

          {/* Animated Content Pane */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
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

                  {activeData?.highlightBox && (
                    <div className="p-7 md:p-8 bg-[#5051CE]/5 rounded-[2rem] md:rounded-[2.5rem] border border-[#5051CE]/10 mb-8 md:mb-10">
                      <h4 className="font-black text-[#5051CE] text-lg md:text-xl mb-3 tracking-tight">{activeData.highlightBox.title}</h4>
                      <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                        {activeData.highlightBox.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {activeData.highlightBox.tags.map(t => (
                          <span key={t} className="px-3 md:px-4 py-1.5 bg-white rounded-full text-[8px] md:text-[9px] font-black uppercase text-[#5051CE] shadow-sm border border-slate-100">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}

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

                  {activeData?.pipeline && (
                    <div className="space-y-6">
                      {activeData.pipeline.map((p, i) => (
                        <div key={i} className="flex gap-4 md:gap-6 relative group">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#0F172A] text-white flex items-center justify-center shrink-0 z-10 font-black text-[10px] md:text-xs">
                            {p.step}
                          </div>
                          <div className="pt-1 md:pt-2">
                            <h4 className="font-bold text-sm md:text-base text-[#0F172A] mb-1">{p.title}</h4>
                            <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.darkBox && (
                    <div className="bg-[#0F172A] p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] text-white relative overflow-hidden mb-8 md:mb-10">
                      <div className="relative z-10">
                        <h4 className="text-[#FDBA12] font-black text-2xl md:text-3xl mb-4 tracking-tighter">
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
                      <RefreshCcw className="absolute -bottom-10 -right-10 opacity-5 w-40 h-40 md:w-60 md:h-60" />
                    </div>
                  )}

                  {activeData?.list && (
                    <div className="grid gap-2 md:gap-3">
                      {activeData.list.map(l => (
                        <div key={l} className="flex items-start md:items-center gap-3 md:gap-4 p-4 md:p-5 bg-red-50/50 rounded-xl md:rounded-2xl text-[11px] md:text-[13px] font-bold text-red-900/70 border border-red-100/50">
                          <AlertCircle className="w-4 h-4 md:w-[16px] md:h-[16px] text-red-400 shrink-0 mt-0.5 md:mt-0" />
                          {l}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData?.points && (
                    <div className="space-y-3 md:space-y-4">
                      {activeData.points.map((pt, i) => (
                        <div key={i} className="p-5 md:p-6 border border-slate-100 rounded-2xl md:rounded-3xl hover:bg-slate-50 transition-colors">
                          <h4 className="font-bold text-[#0F172A] text-xs md:text-sm mb-1">{pt.title}</h4>
                          <p className="text-[10px] md:text-xs text-slate-500 font-medium">{pt.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pane Footer */}
                <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 shrink-0">
                      <HelpCircle className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black text-[#5051CE] uppercase tracking-widest">Support Desk</p>
                      <a href="mailto:contact.tutifiedtg@gmail.com" className="text-[10px] md:text-xs font-bold text-[#0F172A] hover:underline">contact.tutifiedtg@gmail.com</a>
                    </div>
                  </div>
                  <div className="text-center sm:text-right w-full sm:w-auto">
                    <p className="text-[8px] md:text-[9px] font-bold text-slate-300 uppercase tracking-widest">Institutional File</p>
                    <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase">TRIARCH-TFD-REFUND-2026</p>
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