"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Database, Lock, UserCheck, Mail } from "lucide-react";
import Navbar from "./navbar";
import Footer from "./footer";

interface Section {
  id: string;
  title: string;
  icon: any;
  content: React.ReactNode;
}

export default function PremiumLegalLayout({ 
  title, 
  subtitle, 
  sections 
}: { 
  title: string; 
  subtitle: string; 
  sections: Section[] 
}) {
  const [activeTab, setActiveTab] = useState(sections[0].id);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFF]">
      <Navbar />
      <main className="flex-grow pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-[#0F172A] tracking-tighter mb-4">
              {title} <span className="italic font-serif font-light text-[#5051CE]">Policy.</span>
            </h1>
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">{subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
            {/* --- SIDEBAR --- */}
            <aside className="sticky top-32 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`w-full flex items-center gap-4 px-6 py-5 rounded-3xl transition-all duration-300 ${
                    activeTab === section.id 
                    ? "bg-[#5051CE] text-white shadow-xl shadow-[#5051CE]/20" 
                    : "bg-white text-slate-400 border border-slate-100 hover:bg-white/80"
                  }`}
                >
                  <section.icon size={20} />
                  <span className="font-black text-xs uppercase tracking-widest">{section.title}</span>
                </button>
              ))}
            </aside>

            {/* --- ANIMATED CONTENT PANE --- */}
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-2xl shadow-blue-900/5 min-h-[500px]"
            >
              {sections.find(s => s.id === activeTab)?.content}
              
              {/* Stationary Footer Support */}
              <div className="mt-16 pt-16 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="font-bold text-[#0F172A] mb-1">Privacy Queries?</h4>
                  <p className="text-sm text-slate-400">Our Data Protection Officer is ready to assist.</p>
                </div>
                <a href="mailto:contact.tutifiedtg@gmail.com" className="flex items-center gap-3 bg-[#0F172A] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform active:scale-95">
                  <Mail size={18} className="text-[#FDBA12]" />
                  Contact Support
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}