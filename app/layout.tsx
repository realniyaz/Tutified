import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import TudoChatbot from "@/components/shared/tudo-chatbot";

// Premium Sans font for UI and body text
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// Elegant Serif for those editorial headings and italics
const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400", // Instrument Serif typically only has a 400 weight
  style: ["normal", "italic"], // This allows you to use font-serif italic safely
});

export const metadata: Metadata = {
  title: "Tutified | Premium 1-on-1 Home Tuitions in Delhi-NCR",
  description: "Personalized Learning. Stronger Tomorrow. Join Tutified for elite home mentorship powered by Triarch Group.",
  keywords: ["Home Tuitions Delhi", "Personalized Learning", "Noida Tutors", "Triarch Group", "Tutified"],
  authors: [{ name: "Triarch Group" }],
  icons: {
    icon: "/tutified-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${instrument.variable} scroll-smooth`}
    >
      <body className="antialiased bg-white font-jakarta selection:bg-[#5051CE]/20 selection:text-[#5051CE]">
        {/* The main content wrapper */}
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>

        {/* Global Components */}
        <TudoChatbot />
      </body>
    </html>
  );
}