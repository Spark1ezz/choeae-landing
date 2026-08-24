"use client";

import PetalParticles from "./PetalParticles";
import WaitlistForm from "./WaitlistForm";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
      {/* Background - Rich Midnight Seoul Plum Atmospheric Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0a17] via-[#161224] to-[#120f1d]" />
        {/* Glowing ambient horizons */}
        <div className="absolute top-[20%] left-1/4 w-[65vw] h-[35vh] bg-holo-violet/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85vw] h-[35vh] bg-holo-violet/12 blur-[130px] rounded-full" />
        <div className="absolute bottom-5 left-10 w-[45vw] h-[30vh] bg-choeae-pink/8 blur-[120px] rounded-full" />
        {/* Subtle Moon */}
        <div className="absolute top-[15%] right-[15%] w-16 h-16 rounded-full bg-pearl/20 blur-[2px] shadow-[0_0_40px_rgba(255,249,247,0.3)]" />
      </div>

      {/* Cherry Blossom Branch Silhouette (Left) */}
      <div className="absolute -left-[20%] -bottom-[10%] w-[60%] h-[80%] opacity-40 mix-blend-screen z-10 pointer-events-none hidden md:block">
         <div className="w-full h-full bg-gradient-radial from-choeae-pink/10 to-transparent blur-3xl transform -rotate-45" />
      </div>

      {/* Petal Particles layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <PetalParticles />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Left/Center Content (Waitlist + Typography) */}
        <div className="w-full md:w-1/2 pt-0 md:pr-10 z-30">
          {/* Unified Hero Header + Value Proposition Unit */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-choeae-pink animate-pulse" />
            <span className="font-sora text-pearl/90 tracking-[0.18em] text-[11px] uppercase font-semibold">
              CHOEAE 최애
            </span>
            <span className="text-white/20 text-xs">•</span>
            <span className="text-moon-grey/80 tracking-wide text-[11px] font-medium">
              Next-gen K-pop Collecting
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[64px] font-bold tracking-[-0.035em] leading-[1.08] mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pearl via-white to-pearl/90 drop-shadow-sm">
              Your favorite
            </span>
            <span className="block mt-1 sm:mt-2 text-holo font-semibold">
              is one pull away.
            </span>
          </h1>

          <p className="text-moon-grey text-base md:text-lg max-w-lg mb-8 leading-relaxed">
            Open authentic physical K-pop photocards. Keep what you love, instantly sell the rest, or trade your way to your bias.
          </p>
          
          <WaitlistForm />
        </div>

        {/* Right Content (Floating Cards) */}
        <div className="w-full md:w-1/2 h-[55vh] md:h-[85vh] relative mt-6 md:mt-0 z-20 pointer-events-none">
          <FloatingCards />
        </div>
      </div>
    </section>
  );
}
