import { InstitutionalPartners } from "@/features/investors/components/InstitutionalPartners";
import { ClosingCTA } from "@/features/home/components/ClosingCTA";

export default function InvestorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-24 md:pt-32">
        <InstitutionalPartners />
      </div>
      <ClosingCTA />
    </div>
  );
}
