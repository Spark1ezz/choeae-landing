"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BiasSwapDemo() {
  const [swapped, setSwapped] = useState(false);

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="section-headline mb-4">Didn&apos;t pull your favorite?</h2>
          <h2 className="section-headline text-holo mb-6">Swap closer.</h2>
          <p className="text-moon-grey text-lg font-light max-w-md mx-auto">
            Turn unwanted pulls into the members you actually collect.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          
          {/* You Pulled */}
          <div className="flex flex-col items-center gap-6 w-full md:w-1/3">
            <h3 className="font-sora text-moon-grey tracking-widest text-sm font-bold">YOU PULLED</h3>
            <div className="w-56 h-80 rounded-2xl glass-card border border-white/20 relative overflow-hidden flex flex-col justify-end p-4 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <div className="relative z-10 bg-black/50 backdrop-blur-md rounded-lg p-3 border border-white/10 w-full text-center">
                 <p className="font-sora font-bold text-pearl mb-1">Lee Know</p>
                 <p className="text-xs text-moon-grey">Estimated value <span className="text-white">$38</span></p>
              </div>
            </div>
          </div>

          {/* Interaction Area */}
          <div className="flex flex-col items-center justify-center gap-4 z-20">
            <div className="px-4 py-2 rounded-full glass border border-choeae-pink/30 text-choeae-pink font-sora text-sm font-bold shadow-[0_0_20px_rgba(255,143,184,0.2)]">
              +$13
            </div>
            
            <button 
              onClick={() => setSwapped(!swapped)}
              className="bg-pearl text-midnight-plum px-6 py-3 rounded-full font-sora font-semibold hover:scale-105 transition-transform shadow-lg shadow-pearl/20"
            >
              {swapped ? "Undo Swap" : "Swap to my bias"}
            </button>
          </div>

          {/* Your Choeae */}
          <div className="flex flex-col items-center gap-6 w-full md:w-1/3">
            <h3 className="font-sora tracking-widest text-sm font-bold text-holo-violet flex items-center gap-2">
              YOUR CHOEAE <span className="text-holo-violet">✦</span>
            </h3>
            
            <div className="w-56 h-80 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-end p-4 perspective-[1000px]">
              
              <AnimatePresence>
                {!swapped ? (
                  <motion.div 
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 border-2 border-dashed border-white/20 rounded-2xl flex items-center justify-center"
                  >
                    <span className="text-white/20 font-sora font-bold text-4xl">?</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="card"
                    initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    className="absolute inset-0 glass-card border border-holo-violet/50 shadow-[0_0_40px_rgba(185,161,255,0.3)] flex flex-col justify-end p-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-holo-violet/20 to-choeae-pink/20" />
                    {/* Foil effect */}
                    <motion.div
                      className="absolute inset-0 opacity-50 mix-blend-color-dodge"
                      style={{
                        background: "linear-gradient(125deg, transparent 20%, rgba(255, 143, 184, 0.4) 40%, rgba(134, 215, 255, 0.4) 60%, transparent 80%)",
                        backgroundSize: "200% 200%",
                      }}
                      animate={{ backgroundPosition: [`0% 0%`, `100% 100%`] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <div className="relative z-10 bg-black/60 backdrop-blur-md rounded-lg p-3 border border-white/20 w-full text-center">
                      <p className="font-sora font-bold text-pearl mb-1">Felix</p>
                      <p className="text-xs text-moon-grey">Estimated value <span className="text-holo font-bold">$51</span></p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
