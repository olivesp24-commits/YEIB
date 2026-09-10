import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { FadeIn } from "@/components/ui/FadeIn";
export function EligibilitySection() {
  const tags = [
    "Agriculture", "Creative Industries", "Trade", "ICT", 
    "Women-led", "Youth-led", "Climate Resilient", "Digitally Enabled"
  ];
  
  const goals = [
    { value: "312", label: "Businesses backed since inception", status: "IN-PROGRESS · FY2026" },
    { value: "10 days", label: "Average application review time", status: "IN-PROGRESS · FY2026" },
    { value: "₦4.2bn", label: "Deployed across youth- and women-led MSMEs", status: "IN-PROGRESS · FY2026" }
  ];
  
  const eligibilityCards = [
    { letter: "Y", title: "Youth-Led", desc: "Business owned, managed, or primarily employing people under 35" },
    { letter: "W", title: "Women-Led", desc: "Businesses with significant women ownership or management" },
    { letter: "M", title: "Registered MSME", desc: "Formally registered Nigerian business with verifiable track record" },
    { letter: "P", title: "Priority Sectors", desc: "Agriculture, Creative Industries, Trade, and ICT." }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[var(--color-pale-oak)]/20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url("/asset/Eligibility-section-background-pattern.png")' }}
      />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <FadeIn direction="up" className="mb-12">
          <p className="text-[var(--color-tiger-orange)] font-bold text-sm tracking-wider uppercase mb-4">
            Eligibility
          </p>
          <h2 className="font-[var(--font-asul)] text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-evergreen)] mb-4">
            Built for founders under <span className="text-[var(--color-tiger-orange)]">35</span>
          </h2>
          <p className="text-lg text-[var(--color-evergreen)]/80 max-w-2xl mb-8">
            YEIB Investment Fund is designed for youth-led and women-led micro, small, and medium enterprises across Nigeria.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Tag variant="solid">Agriculture</Tag>
            <Tag variant="solid">Creative Industries</Tag>
            <Tag variant="solid">Trade</Tag>
            <Tag variant="solid">ICT</Tag>
            <Tag variant="soft">Women-led</Tag>
            <Tag variant="soft">Youth-led</Tag>
            <Tag variant="soft">Climate Resilient</Tag>
            <Tag variant="soft">Digitally Enabled</Tag>
          </div>
        </FadeIn>

        <FadeIn delay={200} direction="up" className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: Goals */}
          <div className="lg:w-1/3 bg-[var(--color-evergreen)] rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col justify-between">
            <h3 className="font-bold text-xs tracking-[0.2em] uppercase text-white/70 mb-12 text-center">
              Our Goals
            </h3>
            <div className="space-y-8">
              {goals.map((goal, i) => (
                <div key={i} className="pb-8 border-b border-white/10 last:border-0 last:pb-0">
                  <div className="font-[var(--font-asul)] text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                    {goal.value}
                  </div>
                  <div className="text-white/80 mb-4 text-sm font-medium">
                    {goal.label}
                  </div>
                  <div className="flex items-center text-xs font-bold tracking-wider text-[var(--color-mint-leaf)] uppercase">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-mint-leaf)] mr-2"></span>
                    {goal.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Eligibility Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {eligibilityCards.map((card, i) => (
              <Card key={i} className="bg-white border-[var(--color-pale-oak)]/30 hover:border-[var(--color-mint-leaf)] transition-colors shadow-sm h-full">
                <CardHeader>
                  <div className="w-10 h-10 rounded bg-[var(--color-mint-cream)] text-[var(--color-evergreen)] font-bold font-[var(--font-asul)] flex items-center justify-center text-lg mb-4">
                    {card.letter}
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[var(--color-evergreen)]/70 leading-relaxed pt-0">
                  {card.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
