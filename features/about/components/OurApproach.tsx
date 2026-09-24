"use client";

import { useRef, useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { Card } from "@/components/ui/Card";
import { Briefcase, ShieldCheck, Users } from "lucide-react";

export function OurApproach() {
  const approaches = [
    {
      title: "Equity Investment Fund (65% of AUM)",
      desc: (
        <div className="space-y-3">
          <p><strong>Products:</strong> Direct equity/quasi-equity into high-growth youth ventures, capital for local VC/PE firms, and first-loss capital.</p>
          <p><strong>Rationale:</strong> Provides patient, early-stage capital and tailor-made financing to catalyze growth across sectors.</p>
          <p><strong>Revenue Stream:</strong> Capital gains, interest earnings, and profit.</p>
        </div>
      ),
      icon: <Briefcase className="w-12 h-12 text-[var(--color-tiger-orange)]" />,
      color: "bg-[var(--color-tiger-orange)]"
    },
    {
      title: "Credit Guarantee Fund (25% of AUM)",
      desc: (
        <div className="space-y-3">
          <p><strong>Products:</strong> First loss credit guarantees to commercial lenders and MFIs, up to 75% coverage.</p>
          <p><strong>Rationale:</strong> Unlocks additional capital by addressing the systemic bottleneck of lack of collateral.</p>
          <p><strong>Revenue Stream:</strong> Guarantee fees.</p>
        </div>
      ),
      icon: <ShieldCheck className="w-12 h-12 text-[#2E86AB]" />,
      color: "bg-[#2E86AB]"
    },
    {
      title: "Ecosystem Development Fund (10% of AUM)",
      desc: (
        <div className="space-y-3">
          <p><strong>Products:</strong> Grants to ESOs, BDS providers, and reimbursable grants to MSMEs.</p>
          <p><strong>Rationale:</strong> Addresses ecosystem challenges, provides catalytic capital, and increases the number of investment-ready MSMEs.</p>
          <p><strong>Revenue Stream:</strong> Grant principal returned (for reimbursable grants), otherwise no financial return.</p>
        </div>
      ),
      icon: <Users className="w-12 h-12 text-[var(--color-mint-leaf)]" />,
      color: "bg-[var(--color-mint-leaf)]"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const sections = containerRef.current.querySelectorAll('.approach-section');
      let currentIdx = 0;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // If the top of the section is above the middle of the viewport
        if (rect.top <= window.innerHeight / 2) {
          currentIdx = index;
        }
      });
      
      setActiveIndex(currentIdx);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 bg-[var(--color-mint-cream)] relative" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <Tag variant="soft" className="mb-6 capitalize tracking-widest text-xs border-[var(--color-evergreen)] text-[var(--color-evergreen)]">
            Our Approach
          </Tag>
          <h2 className="font-[var(--font-asul)] text-3xl md:text-5xl font-bold text-[var(--color-evergreen)]">
            Three ways we back your growth.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row-reverse relative">
          {/* Right Column (Visually on Right): Timeline Items */}
          <div className="w-full md:w-1/2 md:pl-16 relative">
            {/* Vertical Line */}
            <div className="absolute left-[11px] top-4 bottom-4 w-px bg-[var(--color-evergreen)]/20 hidden md:block"></div>

            {approaches.map((approach, i) => (
              <div 
                key={i} 
                className={`approach-section min-h-[40vh] md:min-h-[60vh] py-12 relative flex transition-opacity duration-500 ${activeIndex === i ? 'opacity-100' : 'opacity-40'}`}
              >
                {/* Timeline Dot */}
                <div className={`hidden md:block absolute left-0 top-16 w-6 h-6 rounded-full border-4 border-[var(--color-mint-cream)] z-10 transition-colors duration-500 ${activeIndex === i ? 'bg-[var(--color-tiger-orange)]' : 'bg-[var(--color-evergreen)]/20'}`}></div>
                
                <div className="md:pl-12">
                  <span className="text-sm font-bold text-[var(--color-evergreen)]/50 capitalize tracking-widest mb-2 block">
                    Approach 0{i + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-evergreen)] mb-6 leading-tight">
                    {approach.title}
                  </h3>
                  <div className="text-lg text-[var(--color-evergreen)]/80 leading-relaxed">
                    {approach.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Visual */}
          <div className="w-full md:w-1/2 relative hidden md:block">
            <div className="sticky top-1/3 pt-12">
              <FadeIn>
                <Card className="bg-white rounded-3xl p-12 shadow-2xl border-none h-[400px] flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-700">
                  <div className="relative z-10">
                    <div className="w-24 h-24 rounded-full bg-[var(--color-mint-cream)] flex items-center justify-center mx-auto mb-8 shadow-sm">
                      {approaches[activeIndex].icon}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--color-evergreen)] font-[var(--font-asul)]">
                      {approaches[activeIndex].title}
                    </h4>
                  </div>
                  
                  {/* Decorative background accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 rounded-full transition-colors duration-700 ${approaches[activeIndex].color}`}></div>
                  <div className={`absolute bottom-0 left-0 w-40 h-40 blur-3xl opacity-20 rounded-full transition-colors duration-700 ${approaches[activeIndex].color}`}></div>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
