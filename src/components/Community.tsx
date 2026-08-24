"use client";

import { motion } from "framer-motion";

const pulls = [
  { val: "$20 → $184", desc: "Lucky Draw", highlight: true },
  { val: "$10 → $74", desc: "POB" },
  { val: "$50 → $420", desc: "Exclusive", highlight: true },
  { val: "$30 → $620", desc: "Rare Event Card", highlight: true },
  { val: "$10 → $12", desc: "Album" },
  { val: "$20 → $15", desc: "Album" },
];

export default function Community() {
  return (
    <section id="community" className="py-32 relative bg-seoul-night border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
          
          <div className="w-full md:w-1/2">
            <h2 className="section-headline mb-4">A collector platform<br/>built with the fandom.</h2>
            <p className="text-moon-grey text-lg mb-10">
              Not another faceless marketplace.
            </p>

            <div className="space-y-4">
              {[
                "Mira pulled a rare POB ✦",
                "Sofia completed her TWICE era",
                "4,281 collectors voted for the next drop",
                "New Stray Kids creator drop",
                "Jennie Collector role unlocked"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-6 py-4 rounded-xl glass border border-white/5 text-sm text-pearl font-medium shadow-lg"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md p-10 rounded-3xl glass-card border border-holo-violet/30 text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-holo-violet/10 to-transparent pointer-events-none" />
               <h3 className="font-sora text-3xl font-bold text-pearl mb-2 relative z-10">CHOEAE CLUB</h3>
               <p className="text-moon-grey text-sm mb-8 relative z-10">Collectors shape what comes next.</p>
               
               <ul className="text-left space-y-3 mb-8 text-sm text-pearl/80 relative z-10">
                 <li>✦ Early drop access</li>
                 <li>✦ Community voting</li>
                 <li>✦ Exclusive roles</li>
                 <li>✦ Offline meetups</li>
               </ul>

               <button className="w-full bg-holo-violet/20 border border-holo-violet text-holo-violet py-3 rounded-full font-sora font-semibold hover:bg-holo-violet hover:text-midnight-plum transition-colors relative z-10">
                 Join the Club
               </button>
            </div>
          </div>

        </div>
      </div>

      {/* Live Pulls Horizontal Ticker */}
      <div id="drops" className="relative border-y border-white/5 py-16 bg-midnight-plum">
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-plum via-transparent to-midnight-plum z-10 pointer-events-none" />
        
        <div className="text-center mb-10">
          <h3 className="font-sora text-2xl font-bold text-pearl">Every pull has a story.</h3>
        </div>

        <div className="flex gap-6 overflow-hidden relative">
          <motion.div 
            className="flex gap-6 min-w-max"
            animate={{ x: [0, -1035] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Double the array for seamless infinite scroll */}
            {[...pulls, ...pulls].map((pull, i) => (
              <div 
                key={i} 
                className={`w-64 p-6 rounded-2xl border ${pull.highlight ? 'border-choeae-pink/30 bg-choeae-pink/5' : 'border-white/10 bg-white/5'} glass-card`}
              >
                 <span className={`font-sora text-2xl font-bold ${pull.highlight ? 'text-choeae-pink' : 'text-pearl'}`}>
                   {pull.val}
                 </span>
                 <p className="text-sm text-moon-grey mt-2 uppercase tracking-widest font-bold">
                   {pull.desc}
                 </p>
              </div>
            ))}
          </motion.div>
        </div>

        <p className="text-center text-[10px] text-moon-grey/50 mt-8 max-w-xl mx-auto px-6">
          Example values shown for product visualization. Actual launch inventory, values and odds will be published before each drop.
        </p>
      </div>

    </section>
  );
}
