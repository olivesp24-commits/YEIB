import { ImpactHero } from "@/features/impact/components/ImpactHero";
import { ImpactTargets } from "@/features/impact/components/ImpactTargets";
import { ImpactFramework } from "@/features/impact/components/ImpactFramework";
import { FourTraits } from "@/features/impact/components/FourTraits";
import { ImpactCommitment } from "@/features/impact/components/ImpactCommitment";
import { ClosingCTA } from "@/features/home/components/ClosingCTA";

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ImpactHero />
      <ImpactTargets />
      <ImpactFramework />
      <FourTraits />
      <ImpactCommitment />
      <ClosingCTA />
    </div>
  );
}
