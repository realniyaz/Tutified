"use client";
import { motion } from "framer-motion";
import { Target, TrendingUp, ShieldCheck, Star, ArrowRight } from "lucide-react";

const whyUs = [
  { title: "Personalized Learning", icon: Target },
  { title: "Better Understanding", icon: TrendingUp },
  { title: "Improved Confidence", icon: ShieldCheck },
  { title: "Higher Performance", icon: Star },
];

export default function ProgramsSection() {
  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- WHY HOME TUITIONS? (The Premium Bento) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#5051CE] rounded-[3rem] p-8 md:p-16 mb-20 relative overflow-hidden"
        >
          {/* Decorative Mesh */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">
            Why Choose <span className="italic font-serif font-light text-[#FDBA12]">Tutified?</span>
          </h2>

          <motion.div 
            variants={containerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {whyUs.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl group transition-all hover:bg-white/20"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FDBA12] flex items-center justify-center mb-6 shadow-lg shadow-[#FDBA12]/20">
                  <item.icon size={24} className="text-[#0F172A]" />
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* --- CLASS SELECTION (The Upgraded Cards) --- */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Card 1: 1st to 10th */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10 }}
            className="relative group bg-slate-50 border border-slate-100 p-10 rounded-[3rem] overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-900/5"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-black tracking-widest text-[#5051CE] uppercase mb-4 block">Foundational</span>
              <h3 className="text-5xl font-black text-[#0F172A] mb-4">1st to 10th</h3>
              <div className="inline-block bg-[#FDBA12] text-[#0F172A] px-4 py-1.5 rounded-full text-xs font-black uppercase mb-8">
                All Subjects
              </div>
              <p className="text-slate-500 max-w-sm mb-8 font-medium leading-relaxed">
                Foundational concepts, board prep, and exam-ready strategies — tailored for each child.
              </p>
              <button className="flex items-center gap-2 font-bold text-[#5051CE] group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={20} />
              </button>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDBA12]/5 rounded-bl-[5rem] group-hover:scale-150 transition-transform duration-700" />
          </motion.div>

          {/* Card 2: 11th & 12th */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10 }}
            className="relative group bg-[#0F172A] p-10 rounded-[3rem] overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#5051CE]/20"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-4 block">Higher Secondary</span>
              <h3 className="text-5xl font-black text-white mb-6">11th & 12th</h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Science', 'Arts', 'Commerce'].map((stream) => (
                  <span key={stream} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider">
                    {stream}
                  </span>
                ))}
              </div>

              <p className="text-slate-400 max-w-sm mb-8 font-medium leading-relaxed">
                Subject-specialist mentors for board exams and competitive entrance preparation.
              </p>
              <button className="flex items-center gap-2 font-bold text-[#FDBA12] group-hover:gap-4 transition-all">
                Explore Streams <ArrowRight size={20} />
              </button>
            </div>
            {/* Background Accent */}
            <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 bg-[#5051CE]/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-700" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}