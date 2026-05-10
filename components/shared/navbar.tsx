"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const getIcon = (name: string) => {
    const Icon = (Icons as any)[name] || (Icons as any)[`${name}Icon`] || Icons.HelpCircle;
    return Icon;
  };

  const Menu = getIcon('Menu');
  const X = getIcon('X');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/about-tutified" },
    { name: "Our Programs", href: "/programs" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Mentorship", href: "/mentorship" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-8 py-5">
      <div 
        className={`max-w-[1440px] mx-auto flex items-center justify-between px-6 py-3 rounded-2xl md:rounded-[2.5rem] transition-all duration-500 border ${
          scrolled 
          ? "bg-white/90 backdrop-blur-xl border-slate-200 shadow-md" 
          : "bg-white border-transparent shadow-sm"
        }`}
      >
        
        {/* Brand Lockup */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-11 md:h-11 bg-[#F3F0FF] rounded-xl flex items-center justify-center p-2">
            <Image src="/tutified-logo.png" alt="Tutified" width={40} height={40} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base md:text-lg font-[1000] leading-none text-[#002072] tracking-tighter">
              TUTIFIED
            </h1>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              BY TRIARCH GROUP
            </span>
          </div>
        </Link>

        {/* Unified Navigation - Static Active State Only */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`px-5 py-2.5 text-[14px] font-bold transition-all rounded-xl ${
                link.active 
                ? "bg-[#EAF2FF] text-[#002072]" 
                : "text-slate-600 hover:text-[#002072] hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* High-Contrast CTA */}
        <div className="flex items-center gap-4">
          <a 
  href="https://wa.me/919315956745?text=Hi%20Tutified!%20I'd%20like%20to%20book%20a%20free%20demo%20session." 
  target="_blank" 
  rel="noopener noreferrer"
  className="contents" // Ensures the anchor doesn't break your layout spacing
>
  <button className="hidden md:block bg-[#FFC700] hover:bg-[#F0BB00] text-[#002072] px-7 py-3 rounded-full font-[900] text-sm transition-all active:scale-95 shadow-lg shadow-[#FFC700]/20">
    Book Free Demo
  </button>
</a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden xl:hidden p-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`p-4 rounded-2xl font-bold transition-all ${
                    link.active ? "bg-[#EAF2FF] text-[#002072]" : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full bg-[#FFC700] text-[#002072] py-4 mt-2 rounded-2xl font-black text-sm uppercase">
                Book Free Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}