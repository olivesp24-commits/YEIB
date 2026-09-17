import { ImpactHero } from "@/features/impact/components/ImpactHero";
import { ImpactTargets } from "@/features/impact/components/ImpactTargets";
import { ImpactCommitment } from "@/features/impact/components/ImpactCommitment";
import { ClosingCTA } from "@/features/home/components/ClosingCTA";

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ImpactHero />
      <ImpactTargets />
      <ImpactCommitment />
      <ClosingCTA />
    </div>
  );
}
