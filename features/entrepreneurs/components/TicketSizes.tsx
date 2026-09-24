import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";

export function TicketSizes() {
  const tickets = [
    { label: "Capital for MSMEs", value: "$ 1K - 500K" },
    { label: "Capital for VCs / PE firms", value: "$ 5 million" },
    { label: "Technical Assistance (TA) to MSMEs", value: "up to $ 5K" },
    { label: "TA for ESOs / BDS providers", value: "up to $ 25K" },
  ];

  return (
    <section className="py-24 bg-[var(--color-pale-oak)]/20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn direction="up" className="text-center mb-16">
          <Tag variant="solid" className="mb-6 capitalize tracking-widest text-xs">
            Investment Parameters
          </Tag>
          <h2 className="font-[var(--font-asul)] text-3xl md:text-5xl font-bold text-[var(--color-evergreen)]">
            Ticket Sizes
          </h2>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-evergreen)]/10 overflow-hidden">
            {tickets.map((t, i) => (
              <div key={i} className="flex flex-col sm:flex-row justify-between items-center p-6 border-b border-[var(--color-evergreen)]/10 last:border-0">
                <span className="text-lg font-bold text-[var(--color-evergreen)]">{t.label}</span>
                <span className="text-2xl font-[var(--font-asul)] font-bold text-[var(--color-tiger-orange)]">{t.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
