import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";

export function Audiences() {
  const audiences = [
    {
      title: "For Founders",
      desc: "A dedicated institutional partner that provides patient capital, capacity building, and market access for your early-stage business."
    },
    {
      title: "For Financial Institutions",
      desc: "De-risking mechanisms, credit guarantees, and co-investment opportunities to help you lend safely to the MSME sector."
    },
    {
      title: "For Government & Partners",
      desc: "A transparent, structured vehicle to channel impact capital, achieving sustainable economic development and job creation."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-pale-oak)]/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn direction="up" className="mb-16">
          <Tag variant="soft" className="mb-6">Who We Serve</Tag>
          <h2 className="font-[var(--font-asul)] text-3xl md:text-5xl font-bold text-[var(--color-evergreen)]">
            One promise, three audiences.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {audiences.map((audience, i) => (
            <FadeIn key={i} delay={i * 150} direction="up" className="h-full">
              <div className="flex flex-col border-t-2 border-[var(--color-evergreen)]/20 pt-6 mt-2">
                <h3 className="font-[var(--font-asul)] text-2xl font-bold text-[var(--color-evergreen)] mb-4">
                  {audience.title}
                </h3>
                <p className="text-[var(--color-evergreen)]/80 leading-relaxed">
                  {audience.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
