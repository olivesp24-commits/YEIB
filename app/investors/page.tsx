export default function InvestorsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="mb-6">For Investors & Partners</h1>
      <p className="text-xl text-[var(--color-evergreen)]/80 mb-12">
        A $300M thesis-driven fund deploying capital to de-risk and scale Nigerian youth- and women-led MSMEs.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-[var(--color-pale-oak)]/30">
        <h3 className="mb-4 text-2xl">Partner with YEIB</h3>
        <p className="mb-4 text-[var(--color-evergreen)]">
          We operate a two-sided model serving both the supply side (DFIs, banks, PE/VC, foundations) and the demand side. Our intermediary and guarantee mechanisms are designed to align institutional capital with vetted pipeline opportunities.
        </p>
      </div>
    </div>
  );
}
