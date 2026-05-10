"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { 
  Phone, Mail, MessageCircle, 
  CheckCircle2, Sparkles, User,
  BookOpen, GraduationCap, ArrowRight
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    studentGrade: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919315956745"; 
    const waMessage = `*New Admission Inquiry - Tutified 2026*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Grade:* ${formData.studentGrade}%0A` +
      `*Subject/Program:* ${formData.subject}%0A` +
      `*Note:* ${formData.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${waMessage}`, "_blank");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white font-jakarta selection:bg-[#5051CE]/20 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          
          {/* LEFT SIDE: THE INTEL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#5051CE] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] mb-6 md:mb-8 flex items-center gap-3">
              <span className="w-6 md:w-8 h-[1px] bg-[#5051CE]" /> Admission Gateway
            </p>
            <h1 className="text-5xl md:text-8xl font-black text-[#0F172A] tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-12">
              Begin your <br />
              <span className="font-serif italic font-light text-[#5051CE]">Ascension.</span>
            </h1>

            <div className="space-y-6 md:space-y-10">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#5051CE] group-hover:bg-[#5051CE] group-hover:text-white transition-all shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest mb-0.5 md:mb-1">Institutional Line</p>
                  <p className="text-lg md:text-xl font-bold text-[#0F172A]">+91 8800783457</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#5051CE] group-hover:bg-[#5051CE] group-hover:text-white transition-all shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest mb-0.5 md:mb-1">Dossier Submission</p>
                  <p className="text-lg md:text-xl font-bold text-[#0F172A] break-all">contact.tutifiedtg@gmail.com</p>
                </div>
              </div>

              <div className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-[#0F172A] text-white relative overflow-hidden mt-10 md:mt-16">
                 <Sparkles className="absolute top-4 right-4 md:top-6 md:right-6 text-[#FDBA12] opacity-50 w-5 h-5 md:w-6 md:h-6" />
                 <p className="text-base md:text-lg font-medium leading-relaxed italic mb-6">
                   "Tutified operates as a Managed Mentorship Service under Triarch Group, ensuring every engagement is backed by an institutional audit."
                 </p>
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/40">Triarch Governance v2.6 Active</span>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: THE PROTOCOL (FORM) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-6 md:p-14 rounded-[3rem] md:rounded-[4rem] border border-slate-100 shadow-xl md:shadow-2xl shadow-slate-200/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2.5 md:space-y-3">
                  <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2 flex items-center gap-2">
                    <User size={12} /> Parent/User Name
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter full name"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 text-sm font-bold text-[#0F172A] outline-none focus:border-[#5051CE] focus:ring-4 focus:ring-[#5051CE]/5 transition-all"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2.5 md:space-y-3">
                  <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2 flex items-center gap-2">
                    <GraduationCap size={12} /> Student Grade
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Class 10th"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 text-sm font-bold text-[#0F172A] outline-none focus:border-[#5051CE] focus:ring-4 focus:ring-[#5051CE]/5 transition-all"
                    onChange={(e) => setFormData({...formData, studentGrade: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2.5 md:space-y-3">
                <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2 flex items-center gap-2">
                  <BookOpen size={12} /> Primary Subject/Program
                </label>
                <div className="relative">
                  <select 
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 text-sm font-bold text-[#0F172A] outline-none focus:border-[#5051CE] transition-all appearance-none cursor-pointer"
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Select Protocol</option>
                    <option value="Junior Foundation">Junior Foundation (1st - 5th)</option>
                    <option value="Mid-School Mastery">Mid-School Mastery (6th - 8th)</option>
                    <option value="Board Practice">Board Practice (9th - 10th)</option>
                    <option value="Higher Mastery - Science">Higher Mastery - Science</option>
                    <option value="Higher Mastery - Commerce">Higher Mastery - Commerce</option>
                    <option value="Higher Mastery - Arts">Higher Mastery - Arts</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                    <ArrowRight size={14} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 md:space-y-3">
                <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Additional Specifications</label>
                <textarea 
                  rows={4}
                  placeholder="Share specific learning friction points..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl px-5 md:px-6 py-4 md:py-5 text-sm font-bold text-[#0F172A] outline-none focus:border-[#5051CE] transition-all resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#0F172A] text-white py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] flex items-center justify-center gap-3 shadow-xl hover:bg-[#5051CE] transition-all"
              >
                Submit Details <MessageCircle size={18} className="text-[#FDBA12]" />
              </motion.button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center text-center gap-2 text-emerald-500 font-bold text-[9px] md:text-[10px] uppercase tracking-widest mt-4"
                  >
                    <CheckCircle2 size={14} /> Redirecting to Secure WhatsApp Server...
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Cinematic Mesh Gradient - Scaled for mobile */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#5051CE]/5 rounded-full blur-[80px] md:blur-[140px] -z-10" />
      </section>

      <Footer />
    </div>
  );
}