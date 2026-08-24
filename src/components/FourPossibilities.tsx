"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const possibilities = [
  { id: 'pull', title: 'PULL', desc: 'Open a fandom-specific pack.' },
  { id: 'keep', title: 'KEEP', desc: 'Add the card to your collection.' },
  { id: 'sell', title: 'SELL', desc: 'Take an instant offer on liquid cards.' },
  { id: 'swap', title: 'SWAP', desc: 'Trade directly toward your bias.' },
];

export default function FourPossibilities() {
  const [active, setActive] = useState('pull');

  return (
    <section className="py-32 relative text-pearl overflow-hidden border-t border-white/5">
      {/* Background with Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-plum via-seoul-night to-midnight-plum" />
        <div className="absolute top-1/2 right-10 w-[50vw] h-[30vh] bg-choeae-pink/5 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          <div className="w-full md:w-1/2">
            <h2 className="section-headline mb-16">One pull.<br/>Your choice.</h2>
            
            <div className="flex flex-col gap-4">
              {possibilities.map((p) => (
                <div 
                  key={p.id}
                  onMouseEnter={() => setActive(p.id)}
                  className={cn(
                    "p-6 rounded-2xl cursor-pointer transition-all duration-300 border",
                    active === p.id 
                      ? "glass border-white/20 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.03)]" 
                      : "border-transparent opacity-50 hover:opacity-100"
                  )}
                >
                  <h3 className="font-sora font-bold text-2xl mb-2 flex items-center gap-4">
                    {p.title}
                    {active === p.id && <span className="text-holo-violet text-sm">✦</span>}
                  </h3>
                  <p className="text-moon-grey text-lg">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[500px] relative flex items-center justify-center">
            {/* Interactive Card Stage */}
            <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
              
              <AnimatePresence mode="popLayout">
                {active === 'pull' && (
                  <motion.div
                    key="pull"
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0, rotateY: 10, rotateX: 5 }}
                    exit={{ scale: 0.8, opacity: 0, y: -50 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="w-64 h-96 rounded-2xl glass-card border-2 border-holo-violet/50 relative overflow-hidden shadow-[0_0_50px_rgba(185,161,255,0.2)] flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-holo-violet/20 to-seoul-blue/20" />
                    <div className="font-sora font-bold text-2xl tracking-widest text-white/50 relative z-10">
                      PACK
                    </div>
                  </motion.div>
                )}

                {active === 'keep' && (
                  <motion.div
                    key="keep"
                    initial={{ scale: 0.8, opacity: 0, x: -50 }}
                    animate={{ scale: 1, opacity: 1, x: 0, rotateY: -10, rotateX: 0 }}
                    exit={{ scale: 0.8, opacity: 0, x: 50 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="w-64 h-96 rounded-2xl glass-card border border-white/20 relative overflow-hidden flex items-center justify-center"
                  >
                     <div className="absolute inset-0 bg-gradient-to-tr from-choeae-pink/20 to-transparent" />
                     <div className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-md relative z-10">
                       <span className="text-white text-2xl">♡</span>
                     </div>
                  </motion.div>
                )}

                {active === 'sell' && (
                  <motion.div
                    key="sell"
                    initial={{ scale: 0.8, opacity: 0, y: -50 }}
                    animate={{ scale: 1, opacity: 1, y: 0, rotateY: 0, rotateX: 10 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="w-64 h-96 rounded-2xl glass-card border border-champagne/40 relative overflow-hidden flex flex-col items-center justify-center gap-4"
                  >
                     <div className="absolute inset-0 bg-gradient-to-b from-champagne/10 to-transparent" />
                     <span className="font-sora text-4xl font-bold text-champagne relative z-10">$180</span>
                     <span className="text-xs uppercase tracking-widest text-white/50 relative z-10">Offer Accepted</span>
                  </motion.div>
                )}

                {active === 'swap' && (
                  <div key="swap" className="relative w-full h-full flex items-center justify-center">
                    <motion.div
                      initial={{ x: -100, opacity: 0, rotateY: -20 }}
                      animate={{ x: -60, opacity: 1, rotateY: 10, zIndex: 10 }}
                      exit={{ x: -100, opacity: 0 }}
                      className="absolute w-48 h-72 rounded-xl glass-card border border-white/20 bg-black/50"
                    />
                    <motion.div
                      initial={{ x: 100, opacity: 0, rotateY: 20 }}
                      animate={{ x: 60, opacity: 1, rotateY: -10, zIndex: 20 }}
                      exit={{ x: 100, opacity: 0 }}
                      className="absolute w-48 h-72 rounded-xl glass-card border-2 border-choeae-pink/50 bg-black/50 shadow-[0_0_30px_rgba(255,143,184,0.2)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-choeae-pink/10 to-transparent" />
                    </motion.div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, zIndex: 30 }}
                      className="absolute w-12 h-12 rounded-full bg-pearl flex items-center justify-center shadow-xl"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B0811" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
