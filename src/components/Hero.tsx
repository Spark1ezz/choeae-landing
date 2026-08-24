"use client";

import PetalParticles from "./PetalParticles";
import WaitlistForm from "./WaitlistForm";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-[700px] flex items-center pt-20 pb-10 md:pt-24 md:pb-12 overflow-hidden">
      {/* Background - Horizon Light & Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Abstract glowing horizon */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[30vh] bg-holo-violet/10 blur-[130px] rounded-full" />
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
        <div className="w-full md:w-1/2 pt-2 md:pt-0 md:pr-8 z-30">
          <p className="font-sora text-moon-grey tracking-[0.2em] text-[11px] md:text-xs uppercase mb-2 md:mb-3 flex items-center gap-2">
            <span className="w-6 md:w-8 h-px bg-choeae-pink" />
            Welcome to your CHOEAE
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-pearl mb-3 md:mb-4">
            Your favorite <br />
            <span className="text-holo italic pr-2 leading-tight">is one pull away.</span>
          </h1>
          
          <p className="text-moon-grey text-sm md:text-base max-w-md mb-4 md:mb-5 leading-relaxed">
            Open authentic physical K-pop photocards. Keep what you love, instantly sell the rest, or trade your way to your bias.
          </p>
          
          <WaitlistForm />
        </div>

        {/* Right Content (Floating Cards) */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-[75vh] relative mt-4 md:mt-0 z-20 pointer-events-none">
          <FloatingCards />
        </div>
      </div>
    </section>
  );
}
