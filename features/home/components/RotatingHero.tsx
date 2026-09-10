"use client";

import { useState, useEffect } from "react";
import { Hero } from "./Hero";
import { OptionTwoHero } from "./OptionTwoHero";
import { cn } from "@/lib/utils";

export function RotatingHero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-swipe timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => {
        // If we are at the second slide, move to the third (duplicate of first)
        if (prev === 1) return 2;
        // Otherwise just move to the next
        return prev + 1;
      });
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  // Infinite loop reset logic
  useEffect(() => {
    if (activeIdx === 2) {
      // Once it slides to the 3rd slide (duplicate of 1st), wait for animation to finish
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false); // Turn off CSS transitions
        setActiveIdx(0); // Instantly snap back to the 1st slide
      }, 1000); // Wait for the 1000ms CSS transition to complete
      return () => clearTimeout(resetTimer);
    } else if (!isTransitioning) {
      // Turn transitions back on immediately after the snap
      const enableTimer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(enableTimer);
    }
  }, [activeIdx, isTransitioning]);

  return (
    <div className="relative w-full h-[100svh] md:h-[100vh] overflow-hidden bg-[var(--color-evergreen)]">
      
      {/* Sliding Track */}
      <div 
        className="flex w-full h-full"
        style={{
          transform: `translateX(-${activeIdx * 100}%)`,
          transition: isTransitioning ? "transform 1000ms cubic-bezier(0.4, 0, 0.2, 1)" : "none"
        }}
      >
        <div className="w-full h-full flex-shrink-0">
          <Hero />
        </div>
        <div className="w-full h-full flex-shrink-0">
          <OptionTwoHero />
        </div>
        {/* Duplicate of Slide 1 for seamless looping */}
        <div className="w-full h-full flex-shrink-0">
          <Hero />
        </div>
      </div>

      {/* Manual Swipe Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        <button 
          onClick={() => { setIsTransitioning(true); setActiveIdx(0); }}
          className={cn(
            "w-2.5 h-2.5 rounded-full transition-colors",
            activeIdx === 0 || activeIdx === 2 ? "bg-white" : "bg-white/40 hover:bg-white/60"
          )}
          aria-label="View Option 1"
        />
        <button 
          onClick={() => { setIsTransitioning(true); setActiveIdx(1); }}
          className={cn(
            "w-2.5 h-2.5 rounded-full transition-colors",
            activeIdx === 1 ? "bg-white" : "bg-white/40 hover:bg-white/60"
          )}
          aria-label="View Option 2"
        />
      </div>
    </div>
  );
}
