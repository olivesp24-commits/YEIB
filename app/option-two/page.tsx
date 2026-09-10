import { OptionTwoHero } from "@/features/home/components/OptionTwoHero";
import { PartnerLogos } from "@/features/home/components/PartnerLogos";
import { FounderCarousel } from "@/features/home/components/FounderCarousel";
import { StatsSection } from "@/features/home/components/StatsSection";
import { EligibilitySection } from "@/features/home/components/EligibilitySection";

export default function OptionTwoHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <OptionTwoHero />
      <PartnerLogos />
      <FounderCarousel />
      {/* In Option 2, StatsSection comes before EligibilitySection */}
      <StatsSection />
      <EligibilitySection />
    </div>
  );
}
