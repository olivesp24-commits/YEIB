import { EntrepreneursHero } from "@/features/entrepreneurs/components/EntrepreneursHero";
import { GrowthCapital } from "@/features/entrepreneurs/components/GrowthCapital";
import { RiskBanksWont } from "@/features/entrepreneurs/components/RiskBanksWont";
import { CapitalAlone } from "@/features/entrepreneurs/components/CapitalAlone";
import { EntrepreneursPartners } from "@/features/entrepreneurs/components/EntrepreneursPartners";
import { BusinessStageMatrix } from "@/features/entrepreneurs/components/BusinessStageMatrix";
import { ClosingCTA } from "@/features/home/components/ClosingCTA";

export default function EntrepreneursPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EntrepreneursHero />
      <GrowthCapital />
      <RiskBanksWont />
      <CapitalAlone />
      <EntrepreneursPartners />
      <BusinessStageMatrix />
      <ClosingCTA />
    </div>
  );
}
