import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function ImpactHero() {
  return (
    <section 
      className="relative w-full min-h-[100svh] flex flex-col md:flex-row items-stretch"
      style={{ background: "linear-gradient(180deg, #00976F 24.52%, #003124 100%)" }}
    >
      {/* Left side content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 relative z-10">
        <div className="max-w-xl w-full mt-20 md:mt-0">
          <FadeIn direction="up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white text-[var(--color-evergreen)] text-xs font-bold tracking-widest uppercase mb-8">
              Impact
            </div>
            
            <h1 className="font-[var(--font-asul)] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-bold text-white mb-8">
              We measure what we mean to build.
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
              YEIB is early. Here&apos;s what we&apos;re building toward, and how we&apos;ll report on it as we go.
            </p>

            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-[var(--color-tiger-orange)] text-white hover:bg-[var(--color-tiger-orange)]/90 hover:opacity-100 border border-[var(--color-tiger-orange)]">
                Apply for funding
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10">
                Learn more
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Right side image */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
        {/* Placeholder for construction workers image */}
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
        <Image 
          src="/asset/impact-hero.jpg" 
          alt="Workers collaborating on construction site" 
          fill
          className="object-cover object-center relative z-10"
        />
      </div>
    </section>
  );
}
