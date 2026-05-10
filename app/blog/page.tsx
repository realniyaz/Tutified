"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { X, ArrowUpRight, Clock, Sparkles, MessageCircle } from "lucide-react";

// --- THE MANUALLY ARCHITECTED LINKEDIN ICON ---
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const POSTS = [
  {
    id: "pedagogical-audit",
    title: "The 2026 Pedagogical Audit Protocol",
    category: "System Logic",
    date: "May 10, 2026",
    readTime: "6 min read",
    excerpt: "How Triarch Group's quality standards are redefining home-based instruction.",
    content: "Tutified's 2026 audit framework moves beyond standard grading. We've developed a multi-layered diagnostic that measures cognitive speed, interest retention, and pedagogical friction. By institutionalizing these metrics, we ensure that mentorship isn't just a session—it's a managed growth cycle.",
    // NEW SEAMLESS IMAGE URL
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "avgc-future",
    title: "Preparing for the AVGC Revolution",
    category: "New Skills",
    date: "May 05, 2026",
    readTime: "5 min read",
    excerpt: "Why Animation and Visual Effects are becoming core academic subjects in India.",
    content: "The recent 2026 budget allocations for school-level AVGC labs signal a shift in India's human capital strategy. Tutified is leading the transition by training our mentors to integrate creative logic and spatial reasoning into the standard Science and Maths curricula.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "ncr-trends",
    title: "Delhi-NCR 2026: The Trust Deficit",
    category: "Market Insights",
    date: "April 28, 2026",
    readTime: "7 min read",
    excerpt: "Why parents in Delhi and Noida are prioritizing institutional safety over marketplaces.",
    content: "Safety and vetting are no longer optional. Our latest market audit shows that 82% of parents in Noida and South Delhi now prefer 'Managed Tuition Services' where a parent company handles background forensics and mentor reliability.",
    // NEW SEAMLESS IMAGE URL
    image: "https://plus.unsplash.com/premium_photo-1697730429201-381b71f61427?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGklMjBuY3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "cuet-sync",
    title: "Synchronizing Boards with CUET 2026",
    category: "Entrance Prep",
    date: "April 20, 2026",
    readTime: "8 min read",
    excerpt: "The Integrated Study model for achieving 99th percentile across all streams.",
    content: "In 2026, we utilize a dual-track strategy. Every theoretical concept learned for the board exam is immediately stress-tested against CUET-style MCQ banks, ensuring zero conceptual leak between school and entrance prep.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "psychometric-align",
    title: "Beyond Grades: Psychometric Alignment",
    category: "Mentorship",
    date: "April 12, 2026",
    readTime: "4 min read",
    excerpt: "Matching students with mentors based on EQ profiles, not just availability.",
    content: "The most common reason for tuition failure is mentor-student friction. Using psychometric tools, we match the temperament of our mentors with the learning personality of the student to build a pedagogical bridge.",
    image: "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXhhbSUyMGdyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "early-foundation",
    title: "Junior Foundation: Logic vs Tradition",
    category: "Foundation",
    date: "March 25, 2026",
    readTime: "6 min read",
    excerpt: "Why 1st to 5th grade is about 'Learning OS' development, not rote memory.",
    content: "The Junior years shouldn't be about memorizing facts. We focus on building the cognitive operating system through logic-driven play and linguistic fluency labs.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop",
  }
];

export default function BlogPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const activePost = POSTS.find(p => p.id === selectedId);

  const handleWhatsAppUpdate = () => {
    const msg = encodeURIComponent("Hello Tutified! I want to join the WhatsApp Intelligence Hub for pedagogical updates.");
    window.open(`https://wa.me/919315956745?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-jakarta selection:bg-[#5051CE]/20">
      <Navbar />

      <section className="pt-48 pb-20 px-6 bg-[#F8FAFF] relative overflow-hidden text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#5051CE] font-black uppercase tracking-[0.5em] text-[10px] mb-8">
            The Educational Intelligence Hub
          </motion.p>
          <h1 className="text-7xl md:text-[9.5rem] font-black text-[#0F172A] tracking-tighter leading-[0.8] mb-12">
            The <br /><span className="font-serif italic font-light text-[#5051CE]">Blog.</span>
          </h1>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {POSTS.map((post) => (
          <motion.div
            layoutId={`container-${post.id}`}
            key={post.id}
            onClick={() => setSelectedId(post.id)}
            className="group cursor-pointer bg-white rounded-[3.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            <div className="h-64 overflow-hidden relative">
              <motion.img 
                layoutId={`image-${post.id}`}
                src={post.image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                alt={post.title} 
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-[#0F172A]">{post.category}</div>
            </div>
            <div className="p-10 flex flex-col justify-between flex-1">
              <motion.div layoutId={`content-${post.id}`}>
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">{post.date}</p>
                <h3 className="text-2xl font-black text-[#0F172A] mb-6 group-hover:text-[#5051CE] transition-colors leading-tight">{post.title}</h3>
              </motion.div>
              <div className="flex items-center justify-between text-[#0F172A] font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                Read Analysis <ArrowUpRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <AnimatePresence>
        {selectedId && activePost && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedId(null)} className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-xl" />
            
            <motion.div 
              layoutId={`container-${selectedId}`} 
              className="bg-white w-full max-w-6xl h-[85vh] rounded-[4rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row"
            >
              <div className="h-1/3 md:h-full md:w-[450px] relative overflow-hidden">
                <motion.img 
                  layoutId={`image-${selectedId}`}
                  src={activePost.image} 
                  className="w-full h-full object-cover" 
                  alt="" 
                />
                <button onClick={() => setSelectedId(null)} className="absolute top-8 right-8 p-3 bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-black rounded-2xl transition-all z-20"><X size={20}/></button>
              </div>

              <div className="flex-1 p-10 md:p-20 overflow-y-auto bg-white no-scrollbar">
                <motion.div layoutId={`content-${selectedId}`} className="max-w-2xl mx-auto">
                  <div className="flex items-center gap-4 text-[#5051CE] text-[10px] font-black uppercase tracking-[0.4em] mb-8">{activePost.category}</div>
                  <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter mb-12 leading-none italic font-serif">{activePost.title}</h2>
                  <div className="prose prose-slate max-w-none text-slate-500 font-medium leading-relaxed mb-16 text-lg">{activePost.content}</div>
                  
                  <div className="bg-[#F8FAFF] p-10 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-[#0077B5] rounded-2xl flex items-center justify-center text-white"><LinkedinIcon className="w-7 h-7" /></div>
                      <div>
                        <h4 className="font-black text-[#0F172A]">Discuss on LinkedIn</h4>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Connect with our System Architect</p>
                      </div>
                    </div>
                    <a href="https://linkedin.com" target="_blank" className="bg-[#0F172A] text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all">Follow <ArrowUpRight size={14} /></a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="py-40 px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto bg-[#0F172A] rounded-[5rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <MessageCircle className="text-[#FDBA12] mx-auto mb-10" size={48} />
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12 leading-[0.8]">Join the <br/><span className="italic font-serif font-light text-[#5051CE]">Intelligence Hub.</span></h2>
            <button 
              onClick={handleWhatsAppUpdate}
              className="bg-white text-[#0F172A] px-14 py-7 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] hover:scale-110 transition-transform shadow-2xl flex items-center gap-3 mx-auto"
            >
              Get WhatsApp Updates <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5051CE]/10 blur-[100px] rounded-full" />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}