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
    <main className="min-h-screen">
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
    </main>
  );
}
