"use client";
import { motion } from "framer-motion";
import { LineChart, ClipboardCheck, LayoutDashboard, ShieldCheck,ArrowUpRight, MessageSquare } from "lucide-react";
 import Link from "next/link";

const features = [
  {
    title: "Progress Dashboard",
    desc: "A dedicated portal for parents to track daily attendance and topic coverage in real-time.",
    icon: LayoutDashboard,
    color: "bg-blue-500",
  },
  {
    title: "Weekly Assessments",
    desc: "Rigorous testing every Sunday to ensure the week's concepts are permanently locked in.",
    icon: ClipboardCheck,
    color: "bg-amber-500",
  },
  {
    title: "Performance Analytics",
    desc: "Visual growth charts that pinpoint strengths and areas requiring more focus.",
    icon: LineChart,
    color: "bg-[#5051CE]",
  },
  {
    title: "Verified Safety",
    desc: "Every mentor undergoes a multi-level background check for absolute peace of mind.",
    icon: ShieldCheck,
    color: "bg-emerald-500",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-black tracking-[0.2em] text-[#5051CE] uppercase mb-4 block">
              Beyond the Classroom
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-[0.95] tracking-tight">
              A smarter way to <br />
              <span className="italic font-serif font-light text-[#5051CE]">measure success.</span>
            </h2>
          </div>
          <p className="text-slate-400 font-medium max-w-xs md:text-right">
            We combine traditional teaching with modern data to ensure no student is left behind.
          </p>
        </div>

        {/* --- Feature Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-[2.5rem] bg-[#F8FAFF] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-8 shadow-lg shadow-blue-900/10 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- THE CTA STRIP (Banner Style) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-[#0F172A] rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5051CE]/20 blur-[80px] rounded-full" />
          
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to transform your child's future?</h4>
            <p className="text-white/50 font-medium">Join 500+ families who trust Tutified for excellence.</p>
          </div>

         


<div className="flex flex-col sm:flex-row gap-4 items-center">
  {/* 1. PRIMARY ACTION: BOOK FREE DEMO (WhatsApp Link) */}
  <Link 
    href="https://wa.me/919315956745?text=Hello%20Tutified!%20I%20would%20like%20to%20book%20a%20FREE%20pedagogical%20demo%20session%20for%20my%20child."
    target="_blank"
    className="w-full sm:w-auto"
  >
    <button className="w-full bg-[#FDBA12] text-[#0F172A] px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#FDBA12]/20 flex items-center justify-center gap-3">
      Book Free Demo <MessageSquare size={16} />
    </button>
  </Link>

  {/* 2. SECONDARY ACTION: VIEW PROGRAMS */}
  {/* 2. SECONDARY ACTION: VIEW PROGRAMS */}
<motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="w-full sm:w-auto"
>
  <Link 
    href="/programs" 
    className="w-full border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
  >
    View Programs <ArrowUpRight size={16} className="opacity-50" />
  </Link>
</motion.div>
</div>
        </motion.div>
      </div>
    </section>
  );
}