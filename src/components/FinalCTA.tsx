"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section id="waitlist" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-midnight-plum pt-20 pb-32">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Giant glowing moon */}
        <div className="absolute top-[10%] w-64 md:w-[500px] h-64 md:h-[500px] rounded-full bg-pearl/10 blur-[120px] shadow-[0_0_150px_rgba(255,249,247,0.2)]" />
        
        {/* Atmospheric Light */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-choeae-pink/10 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hero-headline mb-4 font-bold text-pearl"
        >
          Who&apos;s your choeae?
        </motion.h2>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-headline text-holo italic mb-8"
        >
          Maybe they&apos;re one pull away.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-moon-grey text-lg mb-12"
        >
          Join the waitlist for early drops, community access and launch rewards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <WaitlistForm />
        </motion.div>
      </div>
    </section>
  );
}
