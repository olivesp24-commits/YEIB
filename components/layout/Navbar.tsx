"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="bg-white/70 backdrop-blur-lg rounded-full px-6 md:px-8 h-16 md:h-20 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40">
        <Link href="/" className="inline-block">
          <Image 
            src="/brand/logo-green.png" 
            alt="YEIB Investment Fund" 
            width={120} 
            height={32}
            className="h-8 w-auto object-contain"
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/about"
            className="flex items-center text-sm font-semibold text-[var(--color-evergreen)] hover:text-[var(--color-mint-leaf)] transition-colors"
          >
            What We Do
          </Link>
          <Link
            href="/entrepreneurs"
            className="flex items-center text-sm font-semibold text-[var(--color-evergreen)] hover:text-[var(--color-mint-leaf)] transition-colors"
          >
            Who We Serve
          </Link>
          <Link
            href="/impact"
            className="flex items-center text-sm font-medium text-[var(--color-evergreen)] hover:text-[var(--color-mint-leaf)] transition-colors"
          >
            Impact
          </Link>
          <Link
            href="/investors"
            className="flex items-center text-sm font-medium text-[var(--color-evergreen)] hover:text-[var(--color-mint-leaf)] transition-colors"
          >
            Partners
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {pathname === "/option-two" ? (
            <Link
              href="/"
              className="text-sm font-semibold text-[var(--color-evergreen)] hover:text-[var(--color-mint-leaf)] transition-colors"
            >
              Option 1
            </Link>
          ) : (
            <Link
              href="/option-two"
              className="text-sm font-semibold text-[var(--color-evergreen)] hover:text-[var(--color-mint-leaf)] transition-colors"
            >
              Option 2
            </Link>
          )}
          <Button size="sm">
            Apply for funding
          </Button>
        </div>
      </div>
    </header>
  );
}
