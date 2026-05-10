"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { X, ArrowUpRight, MessageCircle } from "lucide-react";

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
    content: "Tutified's 2026 audit framework moves beyond standard grading. We've developed a multi-layered diagnostic that measures cognitive speed, interest retention, and pedagogical friction. By institutionalizing these metrics, we ensure that mentorship isn't just a session—it's a managed growth cycle.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "avgc-future",
    title: "Preparing for the AVGC Revolution",
    category: "New Skills",
    date: "May 05, 2026",
    content: "The recent 2026 budget allocations for school-level AVGC labs signal a shift in India's human capital strategy. Tutified is leading the transition by training our mentors to integrate creative logic and spatial reasoning into the standard Science and Maths curricula.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "ncr-trends",
    title: "Delhi-NCR 2026: The Trust Deficit",
    category: "Market Insights",
    date: "April 28, 2026",
    content: "Safety and vetting are no longer optional. Our latest market audit shows that 82% of parents in Noida and South Delhi now prefer 'Managed Tuition Services' where a parent company handles background forensics and mentor reliability.",
    image: "https://plus.unsplash.com/premium_photo-1697730429201-381b71f61427?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: "cuet-sync",
    title: "Synchronizing Boards with CUET 2026",
    category: "Entrance Prep",
    date: "April 20, 2026",
    content: "In 2026, we utilize a dual-track strategy. Every theoretical concept learned for the board exam is immediately stress-tested against CUET-style MCQ banks, ensuring zero conceptual leak between school and entrance prep.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "psychometric-align",
    title: "Beyond Grades: Psychometric Alignment",
    category: "Mentorship",
    date: "April 12, 2026",
    content: "The most common reason for tuition failure is mentor-student friction. Using psychometric tools, we match the temperament of our mentors with the learning personality of the student to build a pedagogical bridge.",
    image: "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: "early-foundation",
    title: "Junior Foundation: Logic vs Tradition",
    category: "Foundation",
    date: "March 25, 2026",
    content: "The Junior years shouldn't be about memorizing facts. We focus on building the cognitive operating system through logic-driven play and linguistic fluency labs.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop",
  }
];

export default function BlogPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const activePost = POSTS.find(p => p.id === selectedId);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedId) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedId]);

  const handleWhatsAppUpdate = () => {
    const msg = encodeURIComponent("Hello Tutified! I want to join the WhatsApp Intelligence Hub.");
    window.open(`https://wa.me/919315956745?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-jakarta selection:bg-[#5051CE]/20 overflow-x-hidden">
      <Navbar />

      {/* --- HERO: FLUID TYPOGRAPHY --- */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-20 px-6 bg-[#F8FAFF] relative overflow-hidden">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#5051CE] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] mb-6 text-center">
            The Educational Intelligence Hub
          </motion.p>
          <h1 className="text-5xl md:text-[9.5rem] font-black text-[#0F172A] tracking-tighter leading-[0.9] md:leading-[0.8] mb-12 text-center">
            The <br className="md:hidden" />
            <span className="font-serif italic font-light text-[#5051CE]">Blog.</span>
          </h1>
      </section>

      {/* --- BLOG GRID: ADJUSTED PADDING AND GAP --- */}
      <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {POSTS.map((post) => (
          <motion.div
            layoutId={`container-${post.id}`}
            key={post.id}
            onClick={() => setSelectedId(post.id)}
            className="group cursor-pointer bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
          >
            <div className="h-48 md:h-64 overflow-hidden relative">
              <motion.img 
                layoutId={`image-${post.id}`}
                src={post.image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={post.title} 
              />
              <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-white/90 backdrop-blur-md rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#0F172A] shadow-sm">
                {post.category}
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
              <motion.div layoutId={`content-${post.id}`}>
                <p className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3 md:mb-4">{post.date}</p>
                <h3 className="text-xl md:text-2xl font-black text-[#0F172A] mb-4 md:mb-6 group-hover:text-[#5051CE] transition-colors leading-tight">
                  {post.title}
                </h3>
              </motion.div>
              <div className="flex items-center justify-between text-[#0F172A] font-black text-[9px] md:text-[10px] uppercase tracking-widest">
                Read Analysis <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* --- MODAL: MOBILE UI OVERHAUL --- */}
      <AnimatePresence>
        {selectedId && activePost && (
          <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedId(null)} 
              className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-xl" 
            />
            
            <motion.div 
              layoutId={`container-${selectedId}`} 
              className="bg-white w-full max-w-6xl h-[92vh] md:h-[85vh] rounded-t-[3rem] md:rounded-[4rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row z-10"
            >
              <div className="h-[30vh] md:h-full md:w-[400px] lg:w-[450px] relative overflow-hidden shrink-0">
                <motion.img 
                  layoutId={`image-${selectedId}`}
                  src={activePost.image} 
                  className="w-full h-full object-cover" 
                  alt="" 
                />
                <button 
                  onClick={() => setSelectedId(null)} 
                  className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-black/20 md:bg-white/20 backdrop-blur-md text-white md:hover:bg-white md:hover:text-black rounded-2xl transition-all z-20"
                >
                  <X size={20}/>
                </button>
              </div>

              <div className="flex-1 p-8 md:p-16 lg:p-20 overflow-y-auto bg-white no-scrollbar">
                <motion.div layoutId={`content-${selectedId}`} className="max-w-2xl mx-auto">
                  <div className="flex items-center gap-4 text-[#5051CE] text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-6 md:mb-8">{activePost.category}</div>
                  <h2 className="text-3xl md:text-6xl font-black text-[#0F172A] tracking-tighter mb-8 md:mb-12 leading-[1.1] md:leading-none italic font-serif">{activePost.title}</h2>
                  <div className="prose prose-slate max-w-none text-slate-500 font-medium leading-relaxed mb-12 md:mb-16 text-base md:text-lg">
                    {activePost.content}
                  </div>
                  
                  <div className="bg-[#F8FAFF] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-5 md:gap-6 w-full lg:w-auto">
                      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#0077B5] rounded-xl md:rounded-2xl flex items-center justify-center text-white"><LinkedinIcon className="w-6 h-6 md:w-7 md:h-7" /></div>
                      <div>
                        <h4 className="font-black text-[#0F172A] text-sm md:text-base">Discuss on LinkedIn</h4>
                        <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">Connect with our System Architect</p>
                      </div>
                    </div>
                    <a href="https://linkedin.com" target="_blank" className="w-full lg:w-auto bg-[#0F172A] text-white px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                      Follow <ArrowUpRight size={14} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- CTA: RESPONSIVE PADDING AND FONT --- */}
      <section className="py-20 md:py-40 px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto bg-[#0F172A] rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
{/* Before: <MessageCircle size={40} md:size={48} ... /> */}

<MessageCircle 
  className="text-[#FDBA12] mx-auto mb-8 md:mb-10 w-10 h-10 md:w-12 md:h-12" 
/>            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-10 md:mb-12 leading-tight md:leading-[0.8]">
              Join the <br/>
              <span className="italic font-serif font-light text-[#5051CE]">Intelligence Hub.</span>
            </h2>
            <button 
              onClick={handleWhatsAppUpdate}
              className="w-full md:w-auto bg-white text-[#0F172A] px-10 md:px-14 py-5 md:py-7 rounded-[1.5rem] md:rounded-[2rem] font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-3 mx-auto"
            >
              WhatsApp Updates <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#5051CE]/10 blur-[80px] md:blur-[100px] rounded-full" />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}