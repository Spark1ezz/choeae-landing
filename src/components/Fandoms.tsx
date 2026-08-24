"use client";

import { motion } from "framer-motion";

const fandoms = [
  { name: "STRAY KIDS", color: "from-red-600/30 to-black", text: "COMING DROP" },
  { name: "SEVENTEEN", color: "from-pink-300/30 to-blue-200/30", text: "JOIN WAITLIST" },
  { name: "NCT", color: "from-green-500/30 to-black", text: "JOIN WAITLIST" },
  { name: "TWICE", color: "from-orange-300/30 to-pink-400/30", text: "JOIN WAITLIST" },
  { name: "BLACKPINK", color: "from-pink-500/30 to-black", text: "JOIN WAITLIST" },
  { name: "BTS", color: "from-purple-600/30 to-black", text: "PREMIUM DROPS", highlight: true },
];

export default function Fandoms() {
  return (
    <section className="py-32 relative bg-midnight-plum">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="section-headline mb-6">Start with the <br/>fandom you love.</h2>
          <p className="text-moon-grey text-xl font-light">
            Different groups. Different drops. One collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fandoms.map((fandom, i) => (
            <motion.div
              key={fandom.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              {/* Abstract Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${fandom.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <h3 className="font-sora font-bold text-2xl text-white tracking-wider">
                  {fandom.name}
                </h3>
                
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold tracking-widest px-3 py-1.5 rounded-full border ${fandom.highlight ? 'border-holo-violet/50 text-holo-violet bg-holo-violet/10' : 'border-white/20 text-white/70 bg-white/5'} backdrop-blur-sm`}>
                    {fandom.text}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
