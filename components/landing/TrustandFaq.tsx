"use client";

import { useState, useEffect } from "react";
import { Plus, Minus, HelpCircle, Star, Quote, MapPin } from "lucide-react";

import { motion, AnimatePresence, Variants } from "framer-motion";

// ... other imports

const FADE_UP_VARIANT: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] as any // The 'as any' or casting to 'cubic-bezier' equivalent fixes the TS error
    } 
  },
};

// --- PREMIUUM REVIEWS DATA ---
const reviews = [
  {
    quote: "The personalized attention my daughter received for her 10th Boards was exceptional. Her confidence in Math tripled, and her scores reflected it.",
    name: "A. Singh",
    role: "Parent, Noida",
    stars: 5,
  },
  {
    quote: "The mentors are subject experts. Our son's understanding of Physics moved from rote memorization to conceptual clarity. Highly recommended.",
    name: "Dr. K. Sharma",
    role: "Parent, Mayur Vihar",
    stars: 5,
  },
  {
    quote: "We were worried about 10th Board prep. Tutified matched us with an incredible mentor who not only taught but strategically guided our daughter. Outstanding result.",
    name: "Shamshad Ali",
    role: "Parent, Mayur Vihar",
    stars: 5,
  },
  {
    quote: "The verified tutor matching process gave us peace of mind. Regular tracking dashboards are a fantastic feature. We are glad to be with Tutified.",
    name: "S. Khan",
    role: "Parent, Noida",
    stars: 5,
  },
];

const faqs = [
  { question: "How do you select your mentors?", answer: "Our selection process is rigorous. Only 1 in 10 applicants pass our 4-stage evaluation, which includes subject mastery audits, pedagogical psychological testing, and mandatory background verification." },
  { question: "Is there a trial class available?", answer: "Absolutely. We provide a complimentary 1-on-1 diagnostic session at your home. This allows us to assess the student's learning gaps and ensure a perfect mentor match before you commit." },
  { question: "How do you track student progress?", answer: "Transparency is our priority. Parents receive a weekly 'Performance Audit' via our portal, covering conceptual clarity, assignment scores, and a mentor's strategic feedback for the upcoming week." },
  { question: "What is the Triarch Group assurance?", answer: "As a subsidiary of Triarch Group, Tutified operates with enterprise-grade quality control, ensuring consistent professional standards and institutional reliability in every session." },
];

// --- FADE UP ANIMATION HELPER ---

export default function TrustAndFaq() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  const [reviewIdx, setReviewIdx] = useState(0);

  // --- REVIEW TIMING LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIdx((prev) => (prev + 1) % reviews.length);
    }, 6000); // Change review every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 bg-[#FCFCFD]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[440px_1fr] gap-16 lg:gap-24 items-start">
        
        {/* --- LEFT: The Automated Trust Engine (The upgraded dark panel) --- */}
        <motion.div 
          className="relative sticky top-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Header */}
          <motion.div variants={FADE_UP_VARIANT} className="flex items-start flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5051CE]/5 border border-[#5051CE]/10 mb-6">
              <HelpCircle size={14} className="text-[#5051CE]" />
              <span className="text-[10px] font-black tracking-widest text-[#5051CE] uppercase">Common Queries</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-[#0F172A] leading-[0.9] tracking-tighter mb-8">
              Still have <br />
              <span className="italic font-serif font-light text-[#5051CE]">Questions?</span>
            </h2>
          </motion.div>

          {/* Premium Animated Testimonial Card */}
          <motion.div 
            variants={FADE_UP_VARIANT}
            className="relative p-10 rounded-[3rem] bg-[#0A0B1A] text-white overflow-hidden shadow-2xl shadow-[#5051CE]/10 min-h-[380px] flex flex-col justify-between"
          >
            {/* Background Accent Mesh */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5051CE]/10 blur-[90px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-[#FDBA12]/5 blur-[70px] rounded-full" />
            
            <div className="relative z-10">
              <Quote className="w-16 h-16 text-white/5 absolute -top-8 -left-8" />
              
              {/* Review Fader (Appearing and Disappearing) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={reviewIdx} // Essential for AnimatePresence
                  initial={{ opacity: 0, scale: 1.02, filter: "blur(5px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(reviews[reviewIdx].stars)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FDBA12] text-[#FDBA12]" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-slate-100 tracking-tight">
                    "{reviews[reviewIdx].quote}"
                  </p>

                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#5051CE] to-[#FDBA12] p-[2px] shadow-lg shadow-[#5051CE]/20">
                      <div className="w-full h-full rounded-full bg-[#0A0B1A] flex items-center justify-center font-bold text-slate-300">
                        {reviews[reviewIdx].name.split(' ').map(n=>n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-white">{reviews[reviewIdx].name}</p>
                      <p className="text-[11px] text-white/50 font-extrabold uppercase tracking-widest flex items-center gap-1.5 mt-1">
                        <MapPin size={12} className="text-[#FDBA12]" />
                        {reviews[reviewIdx].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* --- RIGHT: The Elegant Accordion Stack (minimalist surface) --- */}
        <motion.div 
          className="space-y-4 lg:pt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
        >
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              variants={FADE_UP_VARIANT}
              className={`group rounded-[2.2rem] border transition-all duration-500 ${
                activeIdx === i 
                  ? "border-[#5051CE]/20 bg-[#F8F9FF] shadow-2xl shadow-blue-900/5" 
                  : "border-slate-100 bg-white hover:border-slate-200"
              }`}
            >
              <button 
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-8 md:p-10 text-left"
              >
                <span className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-300 ${
                  activeIdx === i ? "text-[#5051CE]" : "text-[#0F172A]"
                }`}>
                  {faq.question}
                </span>
                
                <div className={`flex-shrink-0 ml-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-inner ${
                  activeIdx === i ? "bg-[#5051CE] text-white rotate-0 shadow-[#5051CE]/20" : "bg-slate-50 text-slate-400 rotate-90"
                }`}>
                  {activeIdx === i ? <Minus size={22} /> : <Plus size={22} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, filter: "blur(3px)" }}
                    animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                    exit={{ height: 0, opacity: 0, filter: "blur(3px)" }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 md:px-10 pb-10 text-slate-500 font-medium leading-relaxed text-lg max-w-3xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}