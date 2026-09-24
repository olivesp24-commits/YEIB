import { InvestorsHero } from "@/features/investors/components/InvestorsHero";
import { TwoSidedModel } from "@/features/investors/components/TwoSidedModel";
import { FundStructure } from "@/features/investors/components/FundStructure";
import { FirstLossGuarantee } from "@/features/investors/components/FirstLossGuarantee";
import { Roadmap } from "@/features/investors/components/Roadmap";
import { InstitutionalPartners } from "@/features/investors/components/InstitutionalPartners";
import { ClosingCTA } from "@/features/home/components/ClosingCTA";

export default function InvestorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <InvestorsHero />
      <TwoSidedModel />
      <FundStructure />
      <FirstLossGuarantee />
      <Roadmap />
      <InstitutionalPartners />
      <ClosingCTA />
    </div>
  );
}
