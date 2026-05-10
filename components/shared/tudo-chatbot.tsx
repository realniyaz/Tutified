"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const PREDEFINED_QA = [
  { 
    id: 1, 
    question: "How do you select mentors?", 
    answer: "We follow a 4-step process: Subject Audits, Pedagogy Tests, Background Checks, and a Senior Mentor Demo. Only 1 in 10 pass." 
  },
  { 
    id: 2, 
    question: "Is there a free trial?", 
    answer: "Yes! We offer a complimentary 1-on-1 diagnostic session at your home to match the right mentor." 
  },
  { 
    id: 3, 
    question: "What grades do you cover?", 
    answer: "We cover all subjects from 1st to 10th, and Science, Arts, and Commerce for 11th & 12th." 
  },
  { 
    id: 4, 
    question: "How do I track progress?", 
    answer: "Parents get a digital dashboard with weekly 'Performance Audits' and real-time attendance tracking." 
  }
];

export default function TudoChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user', text: string }[]>([
    { role: 'bot', text: "Hi! I'm Tudo. How can I help you with your child's education today?" }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleOptionClick = (qa: typeof PREDEFINED_QA[0]) => {
    setMessages(prev => [...prev, { role: 'user', text: qa.question }]);
    
    // Simulate thinking
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: qa.answer }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-[#5051CE] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold leading-none">Tudo</h3>
                  <p className="text-[10px] opacity-70 uppercase tracking-widest mt-1">AI Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50 scroll-smooth">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#5051CE] text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {/* Option Chips */}
              <div className="pt-4 flex flex-wrap gap-2">
                {PREDEFINED_QA.map((qa) => (
                  <button
                    key={qa.id}
                    onClick={() => handleOptionClick(qa)}
                    className="text-[11px] font-bold py-2 px-4 rounded-full border border-slate-200 bg-white text-[#5051CE] hover:bg-[#5051CE] hover:text-white transition-all shadow-sm"
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Simple Footer */}
            <div className="p-4 bg-white border-t border-slate-100 text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                By Triarch Group
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#5051CE] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95 group relative"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute right-20 bg-[#0F172A] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Talk to Tudo!
          </span>
        )}
      </button>
    </div>
  );
}