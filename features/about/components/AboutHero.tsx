import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function AboutHero() {
  return (
    <section 
      className="relative w-full min-h-[100svh] flex items-center overflow-hidden pt-24 md:pt-0"
      style={{ background: "linear-gradient(180deg, #00976F 24.52%, #003124 100%)" }}
    >
      <div className="container mx-auto px-4 max-w-6xl relative z-10 flex flex-col md:flex-row h-full">
        <div className="w-full md:w-[55%] pt-12 pb-[35vh] md:py-32 flex flex-col justify-center text-center md:text-left z-20">
          <FadeIn direction="up">
            <h1 className="font-[var(--font-asul)] text-4xl lg:text-5xl leading-[1.15] font-bold text-white mb-6 tracking-tight">
              We exist to dismantle <br />
              the barriers standing <br />
              between young founders <br />
              and their potential.
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg font-medium mx-auto md:mx-0 mb-10">
              A specialized development bank built to provide the capital, advisory, and ecosystem infrastructure necessary for Nigerian MSMEs to scale globally.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-[var(--color-tiger-orange)] text-white hover:bg-[var(--color-tiger-orange)]/90 hover:opacity-100 border border-[var(--color-tiger-orange)]">
                Apply for funding
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10">
                Read our approach
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Right side image - Positioned absolutely to fill the height */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-[35vh] md:h-full z-10 pointer-events-none opacity-40 md:opacity-100 flex justify-end">
        <FadeIn direction="up" delay={200} className="w-full h-full relative">
          <Image 
            src="/asset/what-we-do-hero-image.png"
            alt="YEIB founders" 
            fill
            priority
            className="object-contain object-bottom md:object-right-bottom drop-shadow-2xl"
          />
        </FadeIn>
      </div>
    </section>
  );
}
