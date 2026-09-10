import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function ClosingCTA() {
  return (
    <section className="relative py-32 md:py-48 bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Modern executive boardroom"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/80" />
      </div>

      {/* Decorative Accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-full hidden md:block opacity-30 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00C9A7]/40 to-transparent blur-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-64 border-[1px] border-[#00C9A7] rounded-full" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-full hidden md:block opacity-30 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-l from-[#00C9A7]/40 to-transparent blur-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-64 h-64 border-[1px] border-[#00C9A7] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-20 text-center">
        <h2 className="font-[var(--font-asul)] text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
          Ready to build the case <br className="hidden sm:block" /> for your business?
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/entrepreneurs">
            <Button size="lg" className="w-full sm:w-auto px-10 py-6 text-lg rounded-full bg-[#00C9A7] hover:bg-[#00b093] text-white border-none shadow-[0_0_20px_rgba(0,201,167,0.4)] transition-all duration-300 pointer-events-auto">
              Apply for funding
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
