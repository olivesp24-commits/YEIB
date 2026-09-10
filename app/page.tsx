import { RotatingHero } from "@/features/home/components/RotatingHero";
import { PartnerLogos } from "@/features/home/components/PartnerLogos";
import { FounderCarousel } from "@/features/home/components/FounderCarousel";
import { StatsSection } from "@/features/home/components/StatsSection";
import { EligibilitySection } from "@/features/home/components/EligibilitySection";
import { ClosingCTA } from "@/features/home/components/ClosingCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <RotatingHero />
      <PartnerLogos />
      <FounderCarousel />
      <EligibilitySection />
      <StatsSection />
      <ClosingCTA />
    </div>
  );
}
