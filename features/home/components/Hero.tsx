import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/asset/hero-section-background-pattern.png")' }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center text-white max-w-4xl pt-20">
        <FadeIn direction="up">
          <h1 className="mb-8 font-[var(--font-asul)] text-4xl md:text-6xl lg:text-[72px] leading-tight font-bold text-white drop-shadow-md">
            The institutional bridge between capital and ambition
          </h1>
        </FadeIn>
        
        <FadeIn delay={200} direction="up" className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="w-full sm:w-auto">
            Apply for funding
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-[var(--color-evergreen)] backdrop-blur-sm">
            Read our approach
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
