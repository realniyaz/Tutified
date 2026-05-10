"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Users, GraduationCap } from "lucide-react";
import Image from "next/image";

const processSteps = [
  {
    title: "Diagnostic Assessment",
    desc: "We start with a deep-dive into the student's current standing to identify core gaps.",
  },
  {
    title: "Mentor Matching",
    desc: "We assign a subject-matter expert from our elite pool who fits the student's learning style.",
  },
  {
    title: "Weekly Performance Audits",
    desc: "Detailed progress reports shared with parents every weekend to ensure transparency.",
  },
];

export default function MentorshipEdge() {
  return (
    <section className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* --- LEFT: The Visual Trust Block --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          {/* Main Image with Premium Border */}
          <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl shadow-blue-900/10 aspect-[4/5]">
            <Image 
              src="/mentor-girl.jpg" 
              alt="Tutified Mentors" 
              fill 
              className="object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
            
            {/* Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <p className="text-white font-black text-2xl">500+</p>
                <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Verified Mentors</p>
              </div>
              <div className="bg-[#FDBA12] p-4 rounded-2xl shadow-lg">
                <p className="text-[#0F172A] font-black text-2xl">4.9/5</p>
                <p className="text-[#0F172A]/60 text-[10px] uppercase font-bold tracking-widest">Parent Rating</p>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#5051CE]/10 rounded-full flex items-center justify-center">
                <GraduationCap className="text-[#5051CE]" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pedagogy</p>
                <p className="font-bold text-slate-800 tracking-tight">IIM/IIT Standard</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- RIGHT: The Process Content --- */}
        <div className="flex flex-col items-start">
          <span className="text-[11px] font-black tracking-[0.2em] text-[#5051CE] uppercase mb-4">
            The Tutified Method
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-8 tracking-tight">
            Not just teaching. <br/>
            <span className="italic font-serif font-light text-[#5051CE]">Strategic Mentorship.</span>
          </h2>

          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#5051CE]/20 flex items-center justify-center text-[#5051CE] font-bold text-sm group-hover:bg-[#5051CE] group-hover:text-white transition-all">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0F172A] mb-2">{step.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="mt-12 group flex items-center gap-2 text-[#5051CE] font-bold text-lg">
            See how we track progress 
            <CheckCircle2 size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}