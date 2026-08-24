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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 flex items-center justify-between",
        scrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-6"
      )}
    >
      <div className="flex flex-col items-start leading-none gap-0.5">
        <span className="font-sora font-bold text-xl tracking-widest">CHOEAE <span className="text-holo-violet text-sm">✦</span></span>
        <span className="font-kr text-[10px] text-moon-grey tracking-widest">최애</span>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-pearl/80">
        <a href="#how-it-works" className="hover:text-pearl transition-colors">How it works</a>
        <a href="#drops" className="hover:text-pearl transition-colors">Drops</a>
        <a href="#community" className="hover:text-pearl transition-colors">Community</a>
        <a href="#faq" className="hover:text-pearl transition-colors">FAQ</a>
      </div>

      <div>
        <a href="#waitlist" className="bg-pearl text-midnight-plum px-5 py-2 rounded-full font-sora font-semibold text-sm hover:scale-105 transition-transform inline-block">
          Join waitlist
        </a>
      </div>
    </motion.nav>
  );
}
