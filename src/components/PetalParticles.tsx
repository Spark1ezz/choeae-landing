"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PetalProps {
  id: number;
  xStart: number;
  yStart: number;
  duration: number;
  delay: number;
  size: number;
  rotateEnd: number;
  blur: number;
  zIndex: number;
}

export default function PetalParticles() {
  const [petals, setPetals] = useState<PetalProps[]>([]);

  useEffect(() => {
    // Check for reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 8 : 20;

    const newPetals = Array.from({ length: count }).map((_, i) => ({
      id: i,
      xStart: Math.random() * 50 - 10, // Start slightly left
      yStart: -20 - Math.random() * 20, // Start above screen
      duration: 15 + Math.random() * 20, // Very slow
      delay: Math.random() * 10,
      size: 10 + Math.random() * 15,
      rotateEnd: 360 + Math.random() * 360,
      blur: Math.random() * 4,
      zIndex: Math.random() > 0.5 ? 40 : 10, // some in front, some behind
    }));

    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: petal.size,
            height: petal.size * 0.6,
            background: "linear-gradient(135deg, #FFD0DE 0%, #FF8FB8 100%)",
            filter: `blur(${petal.blur}px)`,
            zIndex: petal.zIndex,
            opacity: 0.6 + Math.random() * 0.3,
            borderRadius: "50% 0 50% 50%", // Petal shape
          }}
          initial={{
            x: `${petal.xStart}vw`,
            y: `${petal.yStart}vh`,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          }}
          animate={{
            x: [`${petal.xStart}vw`, `${petal.xStart + 30 + Math.random() * 30}vw`],
            y: [`${petal.yStart}vh`, "110vh"],
            rotateX: petal.rotateEnd,
            rotateY: petal.rotateEnd * 0.5,
            rotateZ: petal.rotateEnd,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
