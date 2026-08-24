"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 flex items-center justify-between",
        scrolled
          ? "bg-[#0B0811]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-transparent border-b border-transparent py-5 md:py-6"
      )}
      style={{
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <a href="#" className="flex flex-col items-start leading-none gap-0.5 group">
        <span className="font-sora font-bold text-xl tracking-widest text-pearl group-hover:text-white transition-colors">
          CHOEAE <span className="text-holo-violet text-sm">✦</span>
        </span>
        <span className="font-kr text-[10px] text-moon-grey tracking-widest">최애</span>
      </a>

      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-pearl/80">
        <a href="#how-it-works" className="hover:text-choeae-pink transition-colors">How it works</a>
        <a href="#drops" className="hover:text-choeae-pink transition-colors">Drops</a>
        <a href="#community" className="hover:text-choeae-pink transition-colors">Community</a>
        <a href="#faq" className="hover:text-choeae-pink transition-colors">FAQ</a>
      </div>

      <div>
        <a
          href="#waitlist"
          className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full font-sora font-semibold text-sm text-midnight-plum bg-pearl hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(255,249,247,0.2)] hover:shadow-[0_0_25px_rgba(255,143,184,0.4)] transition-all duration-300"
        >
          Join waitlist
        </a>
      </div>
    </motion.nav>
  );
}
