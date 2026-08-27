"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CardProps {
  type: string;
  value: string;
  top: string;
  left: string;
  delay: number;
  rotation: number;
  image: string;
  imageColor: string;
}

const cards: CardProps[] = [
  { type: "EXCLUSIVE", value: "$420", top: "6%", left: "6%", delay: 0.2, rotation: -10, image: "/bts_0.png", imageColor: "from-purple-500/40 to-pink-500/40" },
  { type: "POB", value: "$42", top: "34%", left: "46%", delay: 0.4, rotation: 6, image: "/bts_1.jpg", imageColor: "from-blue-500/40 to-teal-500/40" },
  { type: "GRAIL", value: "$1,240", top: "14%", left: "76%", delay: 0.6, rotation: 12, image: "/bts_2.png", imageColor: "from-yellow-500/40 to-orange-500/40" },
  { type: "LUCKY DRAW", value: "$180", top: "54%", left: "12%", delay: 0.8, rotation: -6, image: "/bts_3.jpg", imageColor: "from-rose-500/40 to-red-500/40" },
  { type: "ALBUM", value: "$8", top: "60%", left: "68%", delay: 1.0, rotation: -16, image: "/bts_4.jpg", imageColor: "from-indigo-500/40 to-cyan-500/40" },
];

export default function FloatingCards() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 perspective-[1000px] pointer-events-auto">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragElastic={0.4}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
          whileTap={{ scale: 0.95, cursor: "grabbing" }}
          whileDrag={{ scale: 1.05, rotate: -1, zIndex: 40, cursor: "grabbing" }}
          whileHover={{ scale: 1.02, cursor: "grab", zIndex: 20 }}
          className="absolute w-40 h-56 md:w-48 md:h-64 rounded-xl border border-white/20 glass-card overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing select-none"
          style={{
            top: card.top,
            left: card.left,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
            rotateX: mousePosition.y * (i % 2 === 0 ? 1 : -1) + 10,
            rotateY: mousePosition.x * (i % 2 === 0 ? -1 : 1) + card.rotation,
          }}
          transition={{
            opacity: { duration: 1, delay: card.delay },
            y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
            rotateX: { type: "spring", stiffness: 50, damping: 20 },
            rotateY: { type: "spring", stiffness: 50, damping: 20 },
          }}
        >
          {/* Card Image */}
          <div className="absolute inset-0 bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(${card.image})` }} />
          <div className={`absolute inset-0 bg-gradient-to-br ${card.imageColor} mix-blend-overlay pointer-events-none`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          
          {/* Holographic foil overlay - smooth seamless continuous shimmer */}
          <motion.div
            className="absolute inset-0 opacity-25 mix-blend-color-dodge pointer-events-none"
            style={{
              background: "linear-gradient(125deg, transparent 15%, rgba(255, 143, 184, 0.35) 40%, rgba(185, 161, 255, 0.35) 50%, rgba(134, 215, 255, 0.35) 60%, transparent 85%)",
              backgroundSize: "250% 250%",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ 
              duration: 7 + i, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "easeInOut" 
            }}
          />

          <div className="absolute inset-0 p-3 flex flex-col justify-between z-10 pointer-events-none">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-sora font-bold tracking-widest text-white/80 uppercase px-2 py-1 bg-black/40 rounded backdrop-blur-md">
                {card.type}
              </span>
              <span className="text-holo-violet text-xs">✦</span>
            </div>
            
            <div className="space-y-1">
              <div className="w-16 h-1 bg-white/20 rounded-full" />
              <div className="flex justify-between items-end">
                <span className="font-sora text-xl font-bold text-white">{card.value}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Center Demo Card with specific overlay */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.4}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        whileDrag={{ scale: 1.05, rotate: -1, zIndex: 50, cursor: "grabbing" }}
        whileHover={{ scale: 1.02, cursor: "grab", zIndex: 30 }}
        className="absolute w-56 h-80 rounded-xl border border-white/30 glass-card overflow-hidden shadow-2xl z-20 hidden md:block cursor-grab active:cursor-grabbing select-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          y: [-8, 8, -8],
          rotateX: mousePosition.y * 1.5,
          rotateY: mousePosition.x * 1.5,
        }}
        transition={{
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotateX: { type: "spring", stiffness: 40 },
          rotateY: { type: "spring", stiffness: 40 },
        }}
      >
        <div className="absolute inset-0 bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(/bts_3.jpg)` }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-seoul-night/40 to-choeae-pink/40 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        
        {/* Holographic foil overlay - smooth seamless ping-pong */}
        <motion.div
            className="absolute inset-0 opacity-30 mix-blend-color-dodge pointer-events-none"
            style={{
              background: "linear-gradient(125deg, transparent 15%, rgba(255, 143, 184, 0.4) 40%, rgba(185, 161, 255, 0.4) 50%, rgba(134, 215, 255, 0.4) 60%, transparent 85%)",
              backgroundSize: "250% 250%",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "easeInOut" 
            }}
        />

        <div className="absolute inset-0 p-4 flex flex-col justify-between z-10 pointer-events-none">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-sora font-bold tracking-widest text-white uppercase px-2 py-1 bg-black/60 rounded backdrop-blur-md border border-white/10">
              EXCLUSIVE
            </span>
          </div>
          
          <div className="bg-black/60 backdrop-blur-md rounded-lg p-3 border border-white/10">
            <p className="text-[10px] text-moon-grey mb-1">Pulled for $20</p>
            <p className="text-xs text-center text-moon-grey my-1">↓</p>
            <p className="text-xs text-white">Estimated value <span className="text-holo font-bold text-sm">$420</span></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
