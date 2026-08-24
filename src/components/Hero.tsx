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

      {/* Petal/Stardust Particles layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <PetalParticles />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Left/Center Content (Waitlist + Typography) - Ultra Premium Redesign */}
        <div className="w-full md:w-1/2 pt-0 md:pr-10 z-30">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-xl mb-6 shadow-[0_2px_20px_rgba(255,143,184,0.15)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-choeae-pink opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-choeae-pink" />
            </span>
            <span className="font-sora text-pearl tracking-[0.18em] text-[11px] uppercase font-bold">
              CHOEAE 최애
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-holo-violet tracking-wider text-[11px] font-semibold">
              Physical Vault Protocol
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px] font-bold tracking-[-0.04em] leading-[1.05] mb-5">
            <span className="block text-pearl drop-shadow-[0_2px_15px_rgba(255,249,247,0.15)]">
              Your favorite
            </span>
            <span className="block mt-1.5 sm:mt-2 text-holo font-semibold">
              is one pull away.
            </span>
          </h1>

          {/* Description */}
          <p className="text-moon-grey text-base md:text-lg max-w-lg mb-6 leading-relaxed font-light">
            Open authentic physical K-pop photocards. Keep what you love, instantly sell the rest, or trade your way to your bias.
          </p>

          {/* Micro Feature Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-medium text-pearl/90 backdrop-blur-sm shadow-sm">
              <span className="text-choeae-pink text-xs">✦</span> 100% Authentic Vault
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-medium text-pearl/90 backdrop-blur-sm shadow-sm">
              <span className="text-holo-violet text-xs">✦</span> Instant Liquidity
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-medium text-pearl/90 backdrop-blur-sm shadow-sm">
              <span className="text-seoul-blue text-xs">✦</span> Direct Bias Swap
            </div>
          </div>
          
          {/* Waitlist Form */}
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
