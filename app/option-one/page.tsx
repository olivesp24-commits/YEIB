import { Hero } from "@/features/home/components/Hero";
import { PartnerLogos } from "@/features/home/components/PartnerLogos";
import { FounderCarousel } from "@/features/home/components/FounderCarousel";
import { StatsSection } from "@/features/home/components/StatsSection";
import { EligibilitySection } from "@/features/home/components/EligibilitySection";

export default function OptionOneHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <PartnerLogos />
      <FounderCarousel />
      <EligibilitySection />
      <StatsSection />
    </div>
  );
}
