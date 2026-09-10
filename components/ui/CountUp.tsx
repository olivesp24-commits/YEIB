"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CountUp({ text }: { text: string }) {
  const domRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

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
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // GSAP tween from 0 to target
            gsap.to(targetObj, {
              val: targetValue,
              duration: 2.5,
              ease: "power2.out",
              onUpdate: () => {
                if (domRef.current) {
                  domRef.current.innerText = `${prefix}${formatNumber(targetObj.val)}${suffix}`;
                }
              }
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    
    observer.observe(domRef.current);
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
      gsap.killTweensOf(targetObj);
    };
  }, [text, hasAnimated]);

  // Initially render the text as 0 (but with prefixes) to prevent layout shift before hydration
  const initialMatch = text.replace(/,/g, "").match(/(.*?)(\d+(?:\.\d+)?)(.*)/);
  let initialText = text;
  if (initialMatch && !hasAnimated) {
    const isFloat = initialMatch[2].includes(".");
    initialText = `${initialMatch[1]}${isFloat ? "0." + "0".repeat(initialMatch[2].split(".")[1].length) : "0"}${initialMatch[3]}`;
  }

  return <span ref={domRef}>{hasAnimated ? text : initialText}</span>;
}
