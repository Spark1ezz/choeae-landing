"use client";

import { motion } from "framer-motion";

export default function ProblemComparison() {
  return (
    <section className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="section-headline text-center mb-24 max-w-4xl mx-auto">
          Collecting shouldn&apos;t be this complicated.
        </h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          
          {/* Today */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 p-8 md:p-12 rounded-3xl border border-white/5 bg-midnight-plum/50"
          >
            <h3 className="font-sora text-2xl text-moon-grey mb-8 font-semibold">Today</h3>
            <ul className="space-y-6 text-moon-grey/70">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Wrong member.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Weeks searching for a trade.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Multiple shipping fees.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Fake cards.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>DM negotiations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>No clear pricing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Disconnected collections.</span>
              </li>
            </ul>
          </motion.div>

          {/* With CHOEAE */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 p-8 md:p-12 rounded-3xl border border-choeae-pink/20 glass shadow-[0_0_50px_rgba(255,143,184,0.05)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-choeae-pink/5 to-transparent pointer-events-none" />
            <h3 className="font-sora text-2xl text-pearl mb-8 font-semibold flex items-center gap-3">
              With CHOEAE <span className="text-holo-violet">✦</span>
            </h3>
            <ul className="space-y-6 text-pearl">
              <li className="flex items-start gap-3">
                <span className="text-seoul-blue mt-1">✓</span>
                <span>Verified cards.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-seoul-blue mt-1">✓</span>
                <span>Instant marketplace.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-seoul-blue mt-1">✓</span>
                <span>Bias swap.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-seoul-blue mt-1">✓</span>
                <span>One physical vault.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-seoul-blue mt-1">✓</span>
                <span>One collection.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-seoul-blue mt-1">✓</span>
                <span>One shipment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-seoul-blue mt-1">✓</span>
                <span>Transparent pricing.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
