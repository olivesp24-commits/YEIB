import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

export function AllySection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[url('/asset/logo-icon-section-background-pattern1.png')] bg-cover bg-center bg-[var(--color-evergreen)] overflow-hidden bg-blend-overlay">
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10 flex flex-col items-center text-center">
        <FadeIn direction="up">
          <h2 className="font-[var(--font-asul)] text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold text-white mb-6 tracking-tight">
            Ally
          </h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
            We are the institutional partner you need to build successful MSMEs and a brighter economy.
          </p>
        </FadeIn>
      </div>

    </section>
  );
}
