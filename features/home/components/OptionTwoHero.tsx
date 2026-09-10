import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

export function OptionTwoHero() {
  return (
    <section 
      className="relative w-full h-[100svh] md:h-[100vh] flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #00976F 24.52%, #003124 100%)" }}
    >
      
      {/* Bridge Background Image */}
      <div 
        className="absolute inset-0 bg-[position:center_bottom] bg-no-repeat bg-[length:100%_auto] md:bg-[length:75%_auto] bg-[url('/asset/hero-section-background-bridge-pattern.png')]"
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center text-white max-w-[940px] flex flex-col items-center justify-center">
        <FadeIn direction="up">
          <h1 className="mb-8 md:mb-12 font-[var(--font-asul)] text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-[1.2] md:leading-[1.1] font-bold text-white drop-shadow-sm">
            The institutional bridge between capital and ambition
          </h1>
        </FadeIn>
        
        <FadeIn delay={200} direction="up" className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="w-full sm:w-auto bg-white text-[var(--color-evergreen)] hover:bg-[var(--color-mint-cream)] pointer-events-none">
            Apply for funding
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10 pointer-events-none">
            Read our approach
          </Button>
        </FadeIn>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-evergreen)]/50 to-transparent pointer-events-none" />
    </section>
  );
}
