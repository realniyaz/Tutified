"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Bot, ExternalLink, Send, MessageSquare } from "lucide-react";
import Link from "next/link";

// --- KNOWLEDGE ENGINE ---
const KNOWLEDGE_BASE = [
  { 
    keywords: ["mentor", "teacher", "select", "quality", "who"], 
    question: "How do you select mentors?", 
    answer: "Our 'Surgical Audit' involves 4 stages: Subject Mastery, Pedagogy Tests, Background Forensics, and Senior Demos. We only onboard the top 10%.",
    link: "/why-choose-us",
    linkText: "View Audit Process"
  },
  { 
    keywords: ["trial", "free", "demo", "book", "test"], 
    question: "Can I book a trial?", 
    answer: "Yes. We offer a complimentary 1-on-1 diagnostic session at your home to analyze your child's specific learning gaps.",
    link: "/contact",
    linkText: "Schedule Diagnostic"
  },
  { 
    keywords: ["program", "subject", "class", "grade", "cuet", "science", "commerce"], 
    question: "What do you cover?", 
    answer: "We provide specialized instruction for K-10 (All subjects) and 11th-12th (Science, Commerce, Humanities), plus competitive CUET prep.",
    link: "/programs",
    linkText: "Explore Programs"
  }
];

export default function TudoChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Protocol initiated. I am Tudo. How can I help you today?", hasLinks: false }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const processChat = (userInput: string) => {
    const input = userInput.toLowerCase();
    setMessages(prev => [...prev, { role: 'user', text: userInput, hasLinks: false }]);

    setTimeout(() => {
      const match = KNOWLEDGE_BASE.find(item => 
        item.keywords.some(keyword => input.includes(keyword))
      );

      if (match) {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: match.answer, 
          hasLinks: true, 
          href: match.link, 
          hrefText: match.linkText 
        }]);
      } else {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: "I'm still learning that protocol. For immediate human assistance, please use the WhatsApp link below.", 
          hasLinks: false 
        }]);
      }
    }, 600);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    processChat(inputValue);
    setInputValue("");
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[110] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            /* FIXED SIZING: Uses viewport-based height but caps it to prevent "full screen" feel */
            className="mb-4 w-[calc(100vw-3rem)] md:w-[400px] h-[70vh] max-h-[600px] bg-white rounded-[2.5rem] shadow-[0_30px_90px_-20px_rgba(80,81,206,0.3)] border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 md:p-8 bg-[#5051CE] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-black text-[12px] tracking-widest uppercase">Tudo v2.6</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <p className="text-[8px] font-bold text-white/50 uppercase tracking-widest">Active</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#5051CE] text-white rounded-tr-none shadow-lg shadow-[#5051CE]/10' 
                      : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
                  }`}>
                    {msg.text}
                    {(msg as any).hasLinks && (
                      <Link href={(msg as any).href} className="mt-3 flex items-center justify-between gap-2 p-3 bg-slate-50 rounded-xl text-[#5051CE] font-bold text-[10px] uppercase tracking-widest hover:bg-[#5051CE] hover:text-white transition-all">
                        {(msg as any).hrefText} <ExternalLink size={12} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input & Handover */}
            <div className="p-5 bg-white border-t border-slate-100 gap-3 flex flex-col">
              <form onSubmit={handleSend} className="relative">
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about trials, fees..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-5 pr-12 text-[13px] font-medium focus:outline-none focus:border-[#5051CE] transition-all"
                />
                <button type="submit" className="absolute right-1.5 top-1.5 w-9 h-9 bg-[#5051CE] rounded-xl flex items-center justify-center text-white active:scale-90 transition-transform">
                  <Send size={16} />
                </button>
              </form>

              <button 
                onClick={() => window.open("https://wa.me/919315956745", "_blank")}
                className="w-full bg-[#25D366] text-white py-3.5 rounded-2xl font-black text-[9px] uppercase tracking-[0.2em] flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} /> Human Support (WhatsApp)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-[#5051CE] rounded-2xl flex items-center justify-center text-white shadow-2xl hover:scale-105 active:scale-95 transition-all shadow-[#5051CE]/30"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}