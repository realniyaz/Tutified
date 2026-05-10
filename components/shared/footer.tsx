"use client";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  ArrowUpRight 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social Icons as direct SVG components to guarantee visibility
  const SocialIcons = {
    Instagram: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ),
    Linkedin: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    ),
    Facebook: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ),
    X: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
    )
  };

  const socialLinks = [
    { Component: SocialIcons.Instagram, href: "#" },
    { Component: SocialIcons.Linkedin, href: "#" },
    { Component: SocialIcons.Facebook, href: "#" },
    { Component: SocialIcons.X, href: "#" },
  ];

  return (
    <footer className="relative pt-24 pb-12 px-6 overflow-hidden bg-[#5051CE]">
      {/* Premium Mesh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FDBA12]/30 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* 1. Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl p-2.5 shadow-2xl flex items-center justify-center">
                <img src="/tutified-logo.png" alt="Tutified" className="object-contain" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tighter italic font-serif leading-none">TUTIFIED</h2>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mt-1.5">By Triarch Group</p>
              </div>
            </div>
            <p className="text-white/70 font-medium leading-relaxed mb-8 text-sm">
              Empowering the next generation of leaders through elite 1-on-1 mentorship.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, i) => (
                <NextLink 
                  key={i} 
                  href={social.href} 
                  className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#FDBA12] hover:border-[#FDBA12] transition-all group"
                >
                  <div className="text-white group-hover:text-[#0F172A] transition-colors">
                    <social.Component />
                  </div>
                </NextLink>
              ))}
            </div>
          </div>

          {/* 2. Navigation */}
          <div>
            <h4 className="font-bold text-[#FDBA12] mb-8 text-xs uppercase tracking-[0.3em]">Quick Access</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Programs', 'Mentorship', 'Contact'].map((item) => (
                <li key={item}>
                  <NextLink href="#" className="text-white/80 hover:text-white text-sm font-semibold transition-all flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 bg-[#FDBA12] rounded-full scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Details */}
          <div>
            <h4 className="font-bold text-[#FDBA12] mb-8 text-xs uppercase tracking-[0.3em]">Support</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10"><Phone size={18} /></div>
                <div className="text-sm font-bold">
                  <p>+91 9315956745</p>
                  <p className="opacity-70 font-medium">+91 8800783457</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10"><Mail size={18} /></div>
                <p className="text-sm font-bold pt-2">contact.tutifiedtg@gmail.com</p>
              </div>
            </div>
          </div>

          {/* 4. WhatsApp Premium Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20 shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h4 className="font-bold text-white mb-2 text-lg">Instant Help?</h4>
                <p className="text-xs text-white/60 mb-6 font-medium">Chat with our counselors now.</p>
                <a 
                  href="https://wa.me/919315956745" 
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full bg-[#FDBA12] text-[#0F172A] font-black py-4 rounded-2xl transition-all shadow-xl shadow-[#FDBA12]/30 hover:scale-[1.03]"
                >
                  <MessageCircle size={20} fill="currentColor" />
                  WHATSAPP
                </a>
             </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
          <div className="flex flex-wrap justify-center gap-8">
            {['Privacy Policy', 'Terms of Service', 'Refunds'].map((link) => (
              <NextLink key={link} href="#" className="text-[10px] font-black text-white/40 hover:text-[#FDBA12] uppercase tracking-[0.2em] transition-all">
                {link}
              </NextLink>
            ))}
          </div>

          <div className="flex flex-col items-center lg:items-end gap-3">
             <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white text-[#5051CE] shadow-2xl">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60">Subsidiary of</span>
                <span className="text-xs font-black tracking-widest uppercase">TRIARCH GROUP</span>
             </div>
             <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
                © {currentYear} Tutified. All Rights Reserved.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}