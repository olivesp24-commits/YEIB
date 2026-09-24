import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";

export function Governance() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn direction="up">
          <Tag variant="soft" className="mb-6 capitalize tracking-widest text-xs border-[var(--color-evergreen)] text-[var(--color-evergreen)]">
            Governance
          </Tag>
          <h2 className="font-[var(--font-asul)] text-3xl md:text-5xl font-bold text-[var(--color-evergreen)] mb-12">
            Rigorous and Independent Oversight
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-evergreen)] mb-4">Board of Directors</h3>
              <p className="text-lg text-[var(--color-evergreen)]/80 mb-6">
                Chaired by an Independent Director, with <strong>60% independent directors</strong> (including private-sector experts, DFIs, and entrepreneurs) to ensure commercially sustainable and mission-driven operations.
              </p>
              <ul className="space-y-3 text-[var(--color-evergreen)]/80 list-disc pl-5">
                <li>Strategic oversight of ManCo management</li>
                <li>Ensures strong gender and climate integration</li>
                <li>Meets quarterly</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-evergreen)] mb-4">Investment & Grant Committees</h3>
              <p className="text-lg text-[var(--color-evergreen)]/80 mb-6">
                A highly qualified, independently selected Investment Committee with diverse, gender-balanced expertise makes final capital allocation decisions.
              </p>
              <ul className="space-y-3 text-[var(--color-evergreen)]/80 list-disc pl-5">
                <li>Independent of political influence</li>
                <li>Rigorous evaluation of impact and return</li>
                <li>Oversees Equity and Ecosystem Development Funds</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
