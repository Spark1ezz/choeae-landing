"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SparkleProps {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "star" | "orb" | "diamond";
  color: string;
  glow: string;
}

const colors = [
  { color: "#FF8FB8", glow: "rgba(255, 143, 184, 0.4)" }, // Choeae Pink
  { color: "#B9A1FF", glow: "rgba(185, 161, 255, 0.4)" }, // Holo Violet
  { color: "#86D7FF", glow: "rgba(134, 215, 255, 0.4)" }, // Seoul Blue
  { color: "#FFF9F7", glow: "rgba(255, 249, 247, 0.5)" }, // Pearl White
];

export default function PetalParticles() {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 18 : 36;

    const items: SparkleProps[] = Array.from({ length: count }).map((_, i) => {
      const palette = colors[i % colors.length];
      const typeChoice = i % 3 === 0 ? "star" : i % 3 === 1 ? "diamond" : "orb";
      return {
        id: i,
        x: Math.random() * 100, // 0 - 100% width
        y: Math.random() * 100, // 0 - 100% height
        size: typeChoice === "star" ? 10 + Math.random() * 8 : 3 + Math.random() * 5,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 4,
        type: typeChoice,
        color: palette.color,
        glow: palette.glow,
      };
    });

    setSparkles(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sp) => (
        <motion.div
          key={sp.id}
          className="absolute flex items-center justify-center pointer-events-none"
          style={{
            left: `${sp.x}%`,
            top: `${sp.y}%`,
          }}
          initial={{ opacity: 0.1, scale: 0.6 }}
          animate={{
            opacity: [0.15, 0.85, 0.15],
            scale: [0.7, 1.25, 0.7],
            y: [0, -25, 0],
            rotate: sp.type === "star" ? [0, 45, 0] : [0, 90, 0],
          }}
          transition={{
            duration: sp.duration,
            delay: sp.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {sp.type === "star" && (
            <svg
              width={sp.size}
              height={sp.size}
              viewBox="0 0 24 24"
              fill={sp.color}
              style={{ filter: `drop-shadow(0 0 8px ${sp.glow})` }}
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          )}

          {sp.type === "diamond" && (
            <div
              style={{
                width: sp.size * 0.9,
                height: sp.size * 0.9,
                backgroundColor: sp.color,
                boxShadow: `0 0 10px ${sp.glow}`,
                transform: "rotate(45deg)",
                borderRadius: "1px",
              }}
            />
          )}

          {sp.type === "orb" && (
            <div
              className="rounded-full"
              style={{
                width: sp.size,
                height: sp.size,
                backgroundColor: sp.color,
                boxShadow: `0 0 12px ${sp.glow}`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
