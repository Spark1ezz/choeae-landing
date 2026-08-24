"use client";

import PetalParticles from "./PetalParticles";
import WaitlistForm from "./WaitlistForm";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background - Night Seoul Horizon */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-plum via-seoul-night to-midnight-plum" />
        {/* Abstract glowing horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-choeae-pink/5 to-transparent" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80vw] h-[20vh] bg-holo-violet/10 blur-[100px] rounded-full" />
        {/* Subtle Moon */}
        <div className="absolute top-[20%] right-[15%] w-16 h-16 rounded-full bg-pearl/20 blur-[2px] shadow-[0_0_40px_rgba(255,249,247,0.3)]" />
      </div>

      {/* Cherry Blossom Branch Silhouette (Left) */}
      <div className="absolute -left-[20%] -bottom-[10%] w-[60%] h-[80%] opacity-40 mix-blend-screen z-10 pointer-events-none hidden md:block">
         {/* Abstract branch shape using CSS / SVG would be ideal, but for now a blur block simulating the volume */}
         <div className="w-full h-full bg-gradient-radial from-choeae-pink/10 to-transparent blur-3xl transform -rotate-45" />
      </div>

      {/* Petal Particles layer */}
      <div className="absolute inset-0 z-10">
        <PetalParticles />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col md:flex-row items-center">
        
        {/* Left/Center Content (Waitlist + Typography) */}
        <div className="w-full md:w-1/2 pt-10 md:pt-0 md:pr-10 z-30">
          <p className="font-sora text-moon-grey tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-choeae-pink" />
            Welcome to your CHOEAE
          </p>
          
          <h1 className="hero-headline mb-6 font-bold text-pearl">
            Your favorite <br />
            <span className="text-holo italic pr-2 leading-tight">is one pull away.</span>
          </h1>
          
          <p className="text-moon-grey text-lg max-w-lg mb-8 leading-relaxed">
            Open authentic physical K-pop photocards. Keep what you love, instantly sell the rest, or trade your way to your bias.
          </p>
          
          <WaitlistForm />
        </div>

        {/* Right Content (Floating Cards) */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative mt-10 md:mt-0 z-20">
          <FloatingCards />
        </div>
      </div>
      
      {/* Bottom gradient fade for scroll transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight-plum to-transparent z-20" />
    </section>
  );
}
