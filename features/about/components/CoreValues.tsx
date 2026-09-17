import { FadeIn } from "@/components/ui/FadeIn";

export function CoreValues() {
  const values = [
    {
      title: "Excellence",
      desc: "We rigorously source, assess, and support every MSME, aiming for the highest standard of delivery and outcome."
    },
    {
      title: "Teamwork",
      desc: "We build collaborative partnerships with government, DFIs, commercial banks, and founders to achieve shared success."
    },
    {
      title: "Responsibility",
      desc: "We invest with intention, prioritizing transparent impact, ESG compliance, and long-term economic transformation."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-evergreen)] text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn direction="up" className="mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 text-white text-xs font-bold tracking-widest uppercase mb-6">
            Core Values
          </div>
          <h2 className="font-[var(--font-asul)] text-3xl md:text-5xl font-bold">
            How we make decisions.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((val, i) => (
            <FadeIn key={i} delay={i * 150} direction="up" className="h-full">
              <div className="flex flex-col border-t-2 border-white/20 pt-6 mt-2">
                <h3 className="font-[var(--font-asul)] text-2xl font-bold mb-4">
                  {val.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
