"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Syncing with your current sitemap
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Why Us", href: "/why-choose-us" },
    { name: "Mentorship", href: "/mentorship" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-10 py-6">
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-[2rem] transition-all duration-700 border ${
          scrolled 
          ? "bg-white/80 backdrop-blur-2xl border-slate-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.05)]" 
          : "bg-white border-transparent shadow-sm"
        }`}
      >
        
        {/* Brand Architecture */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 bg-[#F3F0FF] rounded-2xl flex items-center justify-center p-2 group-hover:rotate-6 transition-transform duration-500">
            <Image src="/tutified-logo.png" alt="Tutified" width={40} height={40} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-black leading-none text-[#002072] tracking-[-0.04em]">
              TUTIFIED
            </h1>
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">
              TRIARCH GROUP
            </span>
          </div>
        </Link>

        {/* The "Architect" Dock - Desktop Only */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-50/50 p-1 rounded-2xl border border-slate-100">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`relative px-5 py-2 text-[12px] font-black uppercase tracking-widest transition-all rounded-xl flex flex-col items-center group ${
                  isActive ? "text-[#5051CE]" : "text-slate-500 hover:text-[#002072]"
                }`}
              >
                {link.name}
                {/* Micro-Interaction Active Dot */}
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-1 w-1 h-1 bg-[#5051CE] rounded-full"
                  />
                )}
                {!isActive && (
                  <div className="absolute -bottom-1 w-1 h-1 bg-[#5051CE] rounded-full scale-0 group-hover:scale-100 transition-transform" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Lockup */}
        <div className="flex items-center gap-3">
          <a 
            href="https://wa.me/919315956745?text=Hi%20Tutified!%20I'd%20like%20to%20book%20a%20free%20demo%20session." 
            target="_blank" 
            className="hidden md:flex items-center gap-2 bg-[#5051CE] hover:bg-[#3F40A8] text-white px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-[#5051CE]/20"
          >
            Book Demo <ArrowUpRight size={14} />
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-slate-600 bg-slate-50 rounded-2xl border border-slate-100 active:scale-90 transition-all"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Surgical Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed inset-0 bg-white z-[90] lg:hidden flex flex-col p-8 pt-32"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black text-[#002072] tracking-tighter flex items-center justify-between group"
                  >
                    {link.name}
                    <ArrowUpRight className="opacity-20 group-hover:opacity-100 transition-opacity" size={32} />
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto pb-10 flex flex-col gap-8">
               <div className="h-[1px] w-full bg-slate-100" />
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Governance Core: Triarch Group</p>
               <a href="tel:+919315956745" className="bg-[#FFC700] text-[#002072] py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest text-center shadow-2xl shadow-[#FFC700]/20">
                  Direct Admission Line
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}