export default function EntrepreneursPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="mb-6">For Entrepreneurs</h1>
      <p className="text-xl text-[var(--color-evergreen)]/80 mb-12">
        Patient capital structured for early-stage growth — designed around the realities of the business life-cycle.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-[var(--color-pale-oak)]/30">
        <h3 className="mb-4 text-2xl">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-[var(--color-evergreen)]">
          <li>Under age 35 (with a specific band for women).</li>
          <li>Youth-led business at the helm, OR management team that is ≥50% under 35, OR employing people under 35.</li>
          <li>Priority sectors: Agriculture, Trade, Creative, ICT.</li>
        </ul>
      </div>
    </div>
  );
}
