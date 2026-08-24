import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChoeaeLoop from "@/components/ChoeaeLoop";
import FourPossibilities from "@/components/FourPossibilities";
import Fandoms from "@/components/Fandoms";
import ProblemComparison from "@/components/ProblemComparison";
import BiasSwapDemo from "@/components/BiasSwapDemo";
import DigitalBinder from "@/components/DigitalBinder";
import RealCards from "@/components/RealCards";
import Community from "@/components/Community";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0914] relative overflow-hidden text-pearl">
      {/* Unified Global Ambient Lighting & Seamless Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top Hero Glow */}
        <div className="absolute -top-[10%] left-1/4 w-[60vw] h-[50vh] bg-holo-violet/10 blur-[150px] rounded-full" />
        <div className="absolute top-[15%] -left-[10%] w-[50vw] h-[45vh] bg-choeae-pink/8 blur-[140px] rounded-full" />
        {/* Mid Page Ambient Glows */}
        <div className="absolute top-[40%] right-[-5%] w-[55vw] h-[50vh] bg-holo-violet/8 blur-[160px] rounded-full" />
        <div className="absolute top-[65%] left-[-10%] w-[50vw] h-[45vh] bg-seoul-blue/6 blur-[150px] rounded-full" />
        {/* Bottom CTA Moon Glow */}
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] bg-choeae-pink/8 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ChoeaeLoop />
        <FourPossibilities />
        <Fandoms />
        <ProblemComparison />
        <BiasSwapDemo />
        <DigitalBinder />
        <RealCards />
        <Community />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
