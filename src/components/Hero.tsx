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
        
        {/* Left/Center Content (Waitlist + Typography) - shifted lower to fill bottom space */}
        <div className="w-full md:w-1/2 pt-6 md:pt-12 md:pr-10 z-30">
          <p className="font-sora text-moon-grey tracking-[0.2em] text-xs uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-choeae-pink" />
            Welcome to your CHOEAE
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.06] text-pearl mb-6">
            Your favorite <br />
            <span className="text-holo italic pr-2 leading-tight">is one pull away.</span>
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
