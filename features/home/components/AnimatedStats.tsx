"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATS = [
  { value: 1600000, prefix: "~", suffix: "", label: "Direct and Indirect Jobs", bg: "#F7E3D3", ink: "#10173A" },
  { value: 118, prefix: "", suffix: "", label: "ESOs Mobilised", bg: "#D9EAF6", ink: "#10173A" },
  { value: 5, prefix: "Year ", suffix: "", label: "Gender-Parity Target", bg: "#F1ECE3", ink: "#10173A" },
  { value: 38400, prefix: "~", suffix: "", label: "Businesses Supported", bg: "#F7E3D3", ink: "#10173A" },
];

const CountUpNumber = ({ value, prefix, suffix }: { value: number, prefix: string, suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500; // 1.5s animation

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(value * easeOut);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  return (
    <span className="font-[var(--font-asul)] text-6xl md:text-8xl lg:text-[100px] leading-none font-bold tabular-nums">
      {prefix}{Math.round(count).toLocaleString()}{suffix}
    </span>
  );
};

export function AnimatedStats() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection observer to start animation only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Cycling logic
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STATS.length);
    }, 4500); // 4.5s per stat

    return () => clearInterval(interval);
  }, [isVisible]);

  const currentStat = STATS[activeIndex];

  // Ray generation
  const rays = Array.from({ length: 40 }).map((_, i) => {
    const angle = -60 + (120 * i) / 39;
    return (
      <motion.div
        key={`ray-${activeIndex}-${i}`}
        className="absolute left-0 top-0 w-px bg-current opacity-10 origin-top"
        style={{ height: '45vh', color: currentStat.ink }}
        initial={{ rotate: angle, scaleY: 0 }}
        animate={{ rotate: angle, scaleY: 1 }}
        transition={{ duration: 0.9, delay: i * 0.012, ease: "easeOut" }}
      />
    );
  });

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: currentStat.bg }}
    >
      {isVisible && (
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full h-full"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 pointer-events-none">
              {rays}
            </div>

            <div className="flex items-center gap-4 md:gap-10 relative z-20" style={{ color: currentStat.ink }}>
              <div className="h-px bg-current opacity-40 w-12 md:w-32" />
              <div className="flex flex-col items-center text-center min-w-[200px] md:min-w-[320px]">
                <CountUpNumber value={currentStat.value} prefix={currentStat.prefix} suffix={currentStat.suffix} />
                <p className="mt-4 text-sm md:text-lg tracking-widest capitalize font-bold opacity-80">
                  {currentStat.label}
                </p>
              </div>
              <div className="h-px bg-current opacity-40 w-12 md:w-32" />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
