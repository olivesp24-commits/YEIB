"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CountUp({ text }: { text: string }) {
  const domRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // 1. Remove commas so the regex can capture continuous numbers properly
    const sanitizedText = text.replace(/,/g, "");
    
    // 2. Capture (prefix) (number) (suffix)
    const match = sanitizedText.match(/(.*?)(\d+(?:\.\d+)?)(.*)/);
    
    if (!match || !domRef.current) {
      return;
    }
    
    const prefix = match[1];
    const targetValue = parseFloat(match[2]);
    const suffix = match[3];
    const isFloat = match[2].includes(".");
    const decimals = isFloat ? match[2].split(".")[1].length : 0;
    
    const formatNumber = (val: number) => {
      if (isFloat) {
        return val.toFixed(decimals);
      }
      return Math.floor(val).toLocaleString("en-US");
    };

    const targetObj = { val: 0 };
    let animation: gsap.core.Tween | null = null;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset to 0 and animate up every time it enters the viewport
            targetObj.val = 0;
            if (domRef.current) {
              domRef.current.innerText = `${prefix}${formatNumber(0)}${suffix}`;
            }
            
            animation = gsap.to(targetObj, {
              val: targetValue,
              duration: 2.5,
              ease: "power2.out",
              onUpdate: () => {
                if (domRef.current) {
                  domRef.current.innerText = `${prefix}${formatNumber(targetObj.val)}${suffix}`;
                }
              }
            });
          } else {
            // When leaving the viewport, kill the animation so it's ready to restart
            if (animation) {
              animation.kill();
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } // Triggers slightly before it fully comes into view
    );
    
    observer.observe(domRef.current);
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
      gsap.killTweensOf(targetObj);
    };
  }, [text]);

  // Initially render the text as 0 (but with prefixes) to prevent layout shift before hydration
  const initialMatch = text.replace(/,/g, "").match(/(.*?)(\d+(?:\.\d+)?)(.*)/);
  let initialText = text;
  if (initialMatch) {
    const isFloat = initialMatch[2].includes(".");
    initialText = `${initialMatch[1]}${isFloat ? "0." + "0".repeat(initialMatch[2].split(".")[1].length) : "0"}${initialMatch[3]}`;
  }

  return <span ref={domRef}>{initialText}</span>;
}
