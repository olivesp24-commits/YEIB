import { Button } from "@/components/ui/Button";

import { cn } from "@/lib/utils";

export function Hero({ isActive = true }: { isActive?: boolean }) {
  return (
    <section className="relative w-full h-[100svh] md:h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/asset/hero-section-background-pattern.png")' }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center text-white max-w-[940px] flex flex-col items-center justify-center">
        <div 
          className={cn(
            "transition-all duration-1000 ease-out",
            isActive ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-12"
          )}
        >
          <h1 className="mb-8 md:mb-12 font-[var(--font-asul)] text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-[1.2] md:leading-[1.1] font-bold text-white drop-shadow-sm">
            The institutional bridge between capital and ambition
          </h1>
        </div>
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-1000 ease-out",
            isActive ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-12"
          )}
        >
          <Button size="lg" className="w-full sm:w-auto bg-white text-[var(--color-evergreen)] hover:bg-[var(--color-mint-cream)] pointer-events-none">
            Apply for funding
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10 pointer-events-none">
            Read our approach
          </Button>
        </div>
      </div>
    </section>
  );
}
