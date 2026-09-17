import { RotatingHero } from "@/features/home/components/RotatingHero";
import { PartnerLogos } from "@/features/home/components/PartnerLogos";
import { FounderCarousel } from "@/features/home/components/FounderCarousel";
import { StatsSection } from "@/features/home/components/StatsSection";
import { EligibilitySection } from "@/features/home/components/EligibilitySection";
import { ClosingCTA } from "@/features/home/components/ClosingCTA";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <RotatingHero />
      <PartnerLogos />
      <FounderCarousel />
      <EligibilitySection />
      
      <section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] min-h-[300px]">
        <Image 
          src="/asset/section-image.png" 
          alt="YEIB Office and Environment" 
          fill 
          className="object-cover object-center" 
        />
      </section>

      <StatsSection />
      <ClosingCTA />
    </div>
  );
}
