import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export function WhatIsYEIB() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-[var(--font-asul)] text-4xl md:text-5xl font-bold text-[var(--color-evergreen)] mb-6 leading-tight">
              A platform that funds funders.
            </h2>
            <p className="text-lg text-[var(--color-evergreen)]/80 mb-8 leading-relaxed">
              YEIB Investment Fund is a wholesale investment platform designed to make youth- and women-led MSMEs in Nigeria bankable and investable. By sitting at the intersection of public and private capital, we derisk investments and build the ecosystem required for long-term growth.
            </p>
            <div className="flex items-center gap-4 text-sm font-semibold text-[var(--color-tiger-orange)] uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-[var(--color-tiger-orange)]"></span>
              The Institutional Bridge
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-[var(--color-mint-cream)] border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[var(--color-evergreen)]/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-evergreen)]"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <CardTitle className="text-xl">Mobilizing Capital</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-evergreen)]/80">
                Drawing in DFIs, pension funds, and private capital toward a $300M target to fund the real economy.
              </CardContent>
            </Card>
            
            <Card className="bg-[var(--color-mint-cream)] border-none shadow-md sm:translate-y-8">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[var(--color-evergreen)]/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-evergreen)]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <CardTitle className="text-xl">Ecosystem Development</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-evergreen)]/80">
                Strengthening ESOs, hubs, and policy frameworks so that capital finds investment-ready businesses.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
