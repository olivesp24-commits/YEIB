export function PrioritySectors() {
  const sectors = [
    {
      title: "Agriculture",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13a7 7 0 0 1 7-7 7 7 0 0 1 7 7v7Z"/><path d="M11 20V6"/><path d="M11 13H4"/></svg>,
    },
    {
      title: "Trade",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.42-3.22a2 2 0 0 1 2.34 0l4.42 3.22"/><path d="m11 17 4.42-3.22a2 2 0 0 1 2.34 0l4.42 3.22"/><path d="M22 22H2"/><path d="M2 13v9"/><path d="M11 13v9"/><path d="M22 13v9"/></svg>,
    },
    {
      title: "Creative",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/><path d="M8 18h1"/><path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z"/></svg>,
    },
    {
      title: "ICT",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/></svg>,
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-evergreen)] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="max-w-xl">
            <h2 className="font-[var(--font-asul)] text-4xl font-bold mb-6">
              A sector-agnostic approach with strategic priorities.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              While we evaluate robust business models across all industries, we place a special focus on sectors with high capacity for youth employment, technological innovation, and scalable impact across Nigeria.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
            {sectors.map((sector, i) => (
              <div key={i} className="bg-white/10 border border-white/20 p-6 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[var(--color-mint-leaf)] text-[var(--color-evergreen)] flex items-center justify-center mb-4">
                  {sector.icon}
                </div>
                <h3 className="font-semibold text-lg">{sector.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
