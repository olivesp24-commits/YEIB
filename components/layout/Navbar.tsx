"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-6xl">
      <div className="bg-white/70 backdrop-blur-lg rounded-full px-4 sm:px-6 md:px-8 h-14 sm:h-16 md:h-20 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40">
        
        {/* Logo */}
        <Link href="/" className="inline-block pointer-events-none" onClick={closeMenu}>
          <Image 
            src="/brand/logo-green.png" 
            alt="YEIB Investment Fund" 
            width={120} 
            height={32}
            className="h-6 sm:h-8 w-auto object-contain"
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 pointer-events-none">
          <Link href="/about" className="text-sm font-semibold text-[var(--color-evergreen)] hover:text-[var(--color-mint-leaf)] transition-colors pointer-events-none">
            What We Do
          </Link>
          <Link href="/entrepreneurs" className="text-sm font-semibold text-[var(--color-evergreen)] hover:text-[var(--color-mint-leaf)] transition-colors pointer-events-none">
            Who We Serve
          </Link>
          <Link href="/impact" className="text-sm font-medium text-[var(--color-evergreen)] hover:text-[var(--color-mint-leaf)] transition-colors pointer-events-none">
            Impact
          </Link>
          <Link href="/investors" className="text-sm font-medium text-[var(--color-evergreen)] hover:text-[var(--color-mint-leaf)] transition-colors pointer-events-none">
            Partners
          </Link>
          <Link href="/esg" className="text-sm font-medium text-[var(--color-evergreen)] hover:text-[var(--color-mint-leaf)] transition-colors pointer-events-none">
            ESG
          </Link>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button size="sm" className="pointer-events-none">
            Apply for funding
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden p-2 text-[var(--color-evergreen)] pointer-events-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col gap-6 lg:hidden origin-top animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4 text-center pointer-events-none">
            <Link href="/about" onClick={closeMenu} className="text-lg font-semibold text-[var(--color-evergreen)] pointer-events-none">
              What We Do
            </Link>
            <Link href="/entrepreneurs" onClick={closeMenu} className="text-lg font-semibold text-[var(--color-evergreen)] pointer-events-none">
              Who We Serve
            </Link>
            <Link href="/impact" onClick={closeMenu} className="text-lg font-medium text-[var(--color-evergreen)] pointer-events-none">
              Impact
            </Link>
            <Link href="/investors" onClick={closeMenu} className="text-lg font-medium text-[var(--color-evergreen)] pointer-events-none">
              Partners
            </Link>
            <Link href="/esg" onClick={closeMenu} className="text-lg font-medium text-[var(--color-evergreen)] pointer-events-none">
              ESG
            </Link>
          </nav>
          <div className="h-[1px] w-full bg-gray-200" />
          <div className="flex flex-col gap-4 text-center items-center">
            <Button size="lg" className="w-full pointer-events-none" onClick={closeMenu}>
              Apply for funding
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
