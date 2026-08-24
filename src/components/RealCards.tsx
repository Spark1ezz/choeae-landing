"use client";

import { motion } from "framer-motion";

export default function RealCards() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="section-headline mb-4">Real cards. <span className="text-holo">Digital speed.</span></h2>
          <p className="text-moon-grey text-lg max-w-xl mx-auto">
            Every card on CHOEAE corresponds to a real physical collectible held by verified partners. Trade instantly while the card stays safely in the vault.
          </p>
        </div>

        {/* Value Chain Visual */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {['Verified Korean Supply', 'Physical Vault', 'CHOEAE', 'Digital Ownership', 'Ship Whenever'].map((step, i) => (
              <div key={step} className="flex items-center gap-4 flex-col md:flex-row w-full md:w-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-pearl text-center whitespace-nowrap"
                >
                  {step}
                </motion.div>
                
                {i < 4 && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="text-white/20 rotate-90 md:rotate-0"
                  >
                    →
                  </motion.div>
                )}
              </div>
            ))}

          </div>
          <p className="text-center text-[10px] text-moon-grey/40 mt-10 tracking-widest uppercase">
            Powered by Solana rails. Built for everyone.
          </p>
        </div>

        {/* Transparency Section */}
        <div className="pt-20 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sora text-4xl font-semibold mb-4 text-pearl">No mystery behind the mystery.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Verified Inventory', desc: 'Every pull comes from a real physical card.' },
              { title: 'Visible Odds', desc: 'See the probability before you pull.' },
              { title: 'Visible Grails', desc: 'Know which premium cards remain in the drop.' },
              { title: 'Transparent Randomness', desc: 'Pull results cannot be secretly changed.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass-card border border-white/5 hover:border-white/20 transition-colors"
              >
                <h3 className="font-sora font-semibold text-lg text-pearl mb-3">{item.title}</h3>
                <p className="text-sm text-moon-grey">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
