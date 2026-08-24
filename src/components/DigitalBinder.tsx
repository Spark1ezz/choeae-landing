"use client";

import { motion } from "framer-motion";

export default function DigitalBinder() {
  return (
    <section className="py-32 relative bg-seoul-night border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-headline mb-4">Your collection,<br/>beautifully organized.</h2>
        </div>

        {/* Mock Profile & Binder UI */}
        <div className="max-w-6xl mx-auto glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Header Profile Area */}
          <div className="p-8 border-b border-white/5 bg-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-choeae-pink to-holo-violet p-1">
                 <div className="w-full h-full rounded-full bg-midnight-plum flex items-center justify-center">
                    <span className="font-sora font-bold text-xl text-pearl">M</span>
                 </div>
              </div>
              <div>
                <h3 className="font-sora text-2xl font-bold text-pearl mb-1">Mina&apos;s Choeae Binder</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-moon-grey">
                  <span className="flex items-center gap-1"><span className="text-pearl font-semibold">47</span> Cards</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1"><span className="text-pearl font-semibold">$1,842</span> Collection Value</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1"><span className="text-pearl font-semibold">3</span> Completed Sets</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <span className="text-xs tracking-widest text-moon-grey uppercase">Ultimate Choeae</span>
              <div className="px-4 py-2 rounded-full border border-holo-violet/30 bg-holo-violet/10 text-holo-violet font-sora text-sm font-bold flex items-center gap-2">
                Felix <span className="text-xs">✦</span>
              </div>
            </div>
          </div>

          {/* Binder Content */}
          <div className="p-8">
            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-white/10 pb-4 mb-8 overflow-x-auto hide-scrollbar">
              {['All', 'Favorites', 'Stray Kids', 'TWICE', 'Wishlist', 'For Trade'].map((tab, i) => (
                <button 
                  key={tab}
                  className={`whitespace-nowrap font-medium text-sm transition-colors ${
                    i === 0 ? 'text-pearl border-b-2 border-pearl pb-4 -mb-[17px]' : 'text-moon-grey hover:text-pearl'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="aspect-[2.5/3.5] rounded-xl glass-card border border-white/10 relative overflow-hidden group cursor-pointer"
                >
                  {/* Abstract card visual */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-50 ${
                    i % 3 === 0 ? 'from-purple-500/20 to-pink-500/20' :
                    i % 3 === 1 ? 'from-blue-500/20 to-cyan-500/20' :
                    'from-rose-500/20 to-orange-500/20'
                  }`} />
                  
                  {i === 2 && (
                    <div className="absolute inset-0 border-2 border-holo-violet/50 rounded-xl pointer-events-none" />
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                     <span className="font-sora font-bold text-pearl">${40 + (i * 12)}</span>
                     <div className="flex gap-2">
                       <button className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors">Trade</button>
                       <button className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors">Sell</button>
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
