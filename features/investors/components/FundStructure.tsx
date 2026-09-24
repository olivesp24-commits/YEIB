import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";

export function FundStructure() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn direction="up" className="text-center mb-16">
          <Tag variant="soft" className="mb-6 capitalize tracking-widest text-xs border-[var(--color-evergreen)] text-[var(--color-evergreen)]">
            Vehicle & Governance
          </Tag>
          <h2 className="font-[var(--font-asul)] text-3xl md:text-5xl font-bold text-[var(--color-evergreen)] mb-6">
            Institutional Fund Structure
          </h2>
          <p className="text-lg text-[var(--color-evergreen)]/80 max-w-3xl mx-auto">
            Designed for catalytic impact with rigorous independent oversight.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={100} direction="up" className="bg-[var(--color-mint-cream)] p-8 rounded-2xl border border-[var(--color-evergreen)]/10">
            <h3 className="text-xl font-bold text-[var(--color-tiger-orange)] mb-4">Capital Allocation</h3>
            <ul className="space-y-4 text-[var(--color-evergreen)]/80">
              <li><strong>65%</strong> Equity & Quasi-Equity</li>
              <li><strong>25%</strong> Ecosystem Development (Grants & TA)</li>
              <li><strong>10%</strong> Guarantees</li>
            </ul>
          </FadeIn>
          
          <FadeIn delay={200} direction="up" className="bg-[var(--color-mint-cream)] p-8 rounded-2xl border border-[var(--color-evergreen)]/10">
            <h3 className="text-xl font-bold text-[var(--color-tiger-orange)] mb-4">VC/PE Ticket Size</h3>
            <p className="text-4xl font-bold font-[var(--font-asul)] text-[var(--color-evergreen)] mb-2">$ 5M</p>
            <p className="text-[var(--color-evergreen)]/80">
              For investments in pre-vetted fund managers to multiply impact and crowd-in private capital.
            </p>
          </FadeIn>

          <FadeIn delay={300} direction="up" className="bg-[var(--color-mint-cream)] p-8 rounded-2xl border border-[var(--color-evergreen)]/10">
            <h3 className="text-xl font-bold text-[var(--color-tiger-orange)] mb-4">Independent Governance</h3>
            <ul className="space-y-4 text-[var(--color-evergreen)]/80">
              <li><strong>60% Independent Board</strong> led by an independent chairperson</li>
              <li>Highly qualified, independently selected <strong>Investment Committee</strong></li>
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
