// src/app/page.tsx
import Navbar from "@/components/shared/navbar";
import Hero from "@/components/landing/hero";

import ProgramsSection from "@/components/landing/ProgramsSection";
import MentorshipEdge from "@/components/landing/mentorship-edge";
import ExperienceSection from "@/components/landing/ExperienceSection";
import TrustAndFaq from "@/components/landing/TrustandFaq";
import Footer from "@/components/shared/footer";


/**
 * Tutified Landing Page
 * Powered by Triarch Group
 * * This page orchestrates the premium ed-tech experience using 
 * modular components for better performance and scalability.
 */

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-brand-primary selection:text-white overflow-x-hidden">
      {/* Navigation Layer */}
      <Navbar />
      
      {/* 1. Brand Identity & Main Value Proposition */}
      <Hero />
      <ProgramsSection/>
      <MentorshipEdge/>
      <ExperienceSection/>
      <TrustAndFaq/>
      <Footer/>
    </main>
  );
}