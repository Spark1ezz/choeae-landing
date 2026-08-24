"use client";

import { motion } from "framer-motion";

export default function ChoeaeLoop() {
  return (
    <section id="how-it-works" className="py-32 relative text-pearl overflow-hidden">
      {/* Ambient atmospheric glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[35vh] bg-holo-violet/8 blur-[130px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="section-headline mb-6">Meet the <span className="text-holo">Choeae Loop.</span></h2>
          <p className="text-moon-grey text-xl font-light">
            Pull. Keep. Sell. Swap. Get closer to your favorite every time.
          </p>
        </div>

        {/* Visual Flow Diagram */}
        <div className="relative max-w-4xl mx-auto py-10">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col items-center gap-16 relative z-10">
            
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass px-8 py-4 rounded-full border border-white/15 flex items-center justify-center shadow-[0_0_30px_rgba(255,143,184,0.15)] bg-white/5 backdrop-blur-md"
            >
              <span className="font-sora font-bold text-xl tracking-widest text-choeae-pink">PULL</span>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="w-32 h-44 rounded-xl bg-gradient-to-b from-white/10 to-transparent border border-white/20 flex flex-col items-center justify-center gap-2 glass-card shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            >
              <div className="w-16 h-20 bg-white/5 rounded-lg border border-white/10" />
              <span className="font-sora text-sm font-semibold text-pearl">YOUR CARD</span>
            </motion.div>

            {/* Branches */}
            <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {['KEEP', 'SELL', 'SWAP'].map((action, i) => (
                <motion.div
                  key={action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="glass p-6 rounded-2xl border border-white/10 hover:border-white/25 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(185,161,255,0.1)] bg-white/5"
                >
                  <span className="font-sora font-bold tracking-widest text-lg text-pearl mb-2 block">{action}</span>
                  <p className="text-sm text-moon-grey">
                    {action === 'KEEP' && 'Add to your secure vault.'}
                    {action === 'SELL' && 'Instant liquidity.'}
                    {action === 'SWAP' && 'Trade directly toward your bias.'}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.6 }}
              className="mt-8 glass px-12 py-6 rounded-full border border-holo-violet/40 flex items-center justify-center relative overflow-hidden group shadow-[0_0_40px_rgba(185,161,255,0.2)] bg-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-choeae-pink/15 via-holo-violet/15 to-seoul-blue/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="font-sora font-bold text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 flex items-center gap-3">
                YOUR CHOEAE <span className="text-holo-violet">✦</span>
              </span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
