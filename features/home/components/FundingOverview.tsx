import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import Link from "next/link";

export function FundingOverview() {
  const financialServices = [
    { title: "Direct Investment", desc: "Capital directly injected into high-growth youth & women-led MSMEs." },
    { title: "Intermediaries", desc: "Funding deployed through trusted PE, VC, and fintech partners." },
    { title: "Bank Guarantees", desc: "Risk coverage up to 75% for commercial and microfinance banks lending to our target demographic." }
  ];

  const nonFinancialServices = [
    { title: "Reimbursable Grants", desc: "Patient, non-interest-based capital for early-stage ventures." },
    { title: "ESO Grants", desc: "Up to $50K for Entrepreneurship Support Organizations and hubs." },
    { title: "Ecosystem Infrastructure", desc: "Systemic investments to solve market-level barriers and build capacity." }
  ];

  return (
    <section className="py-24 bg-[var(--color-pale-oak)]/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[var(--font-asul)] text-4xl font-bold text-[var(--color-evergreen)] mb-4">
            Two Tracks to Growth
          </h2>
          <p className="text-lg text-[var(--color-evergreen)]/80">
            Our support changes based on your business stage and the role you play in the ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-pale-oak)]/20">
            <div className="w-16 h-16 rounded-xl bg-[var(--color-evergreen)] text-white flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3 className="text-2xl font-bold font-[var(--font-asul)] text-[var(--color-evergreen)] mb-6">Financial Services</h3>
            <div className="space-y-6">
              {financialServices.map((item, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-[var(--color-evergreen)] mb-1">{item.title}</h4>
                  <p className="text-sm text-[var(--color-evergreen)]/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-pale-oak)]/20">
            <div className="w-16 h-16 rounded-xl bg-[var(--color-mint-leaf)] text-[var(--color-evergreen)] flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <h3 className="text-2xl font-bold font-[var(--font-asul)] text-[var(--color-evergreen)] mb-6">Non-Financial Services</h3>
            <div className="space-y-6">
              {nonFinancialServices.map((item, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-[var(--color-evergreen)] mb-1">{item.title}</h4>
                  <p className="text-sm text-[var(--color-evergreen)]/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/how-it-works">
            <Button variant="secondary" className="border-[var(--color-evergreen)] text-[var(--color-evergreen)] hover:bg-[var(--color-evergreen)] hover:text-white pointer-events-none">
              Explore How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
