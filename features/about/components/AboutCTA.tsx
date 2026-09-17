import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function AboutCTA() {
  return (
    <section className="relative w-full py-32 md:py-48 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/asset/closing-cta-section-background-pattern.png" 
          alt="Modern boardroom" 
          fill
          className="object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-[var(--font-asul)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-md">
          Ready to build the case for your business?
        </h2>
        
        <Link href="/entrepreneurs">
          <Button size="lg" className="bg-[var(--color-tiger-orange)] text-white hover:bg-[var(--color-tiger-orange)]/90 hover:opacity-100 border-none shadow-lg px-12">
            Apply for Funding
          </Button>
        </Link>
      </div>
    </section>
  );
}
