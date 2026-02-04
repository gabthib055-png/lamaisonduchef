"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Notre Carte", href: "/menu" },
  { label: "Le Restaurant", href: "/restaurant" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/50 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900">
            <span className="font-serif text-xl font-bold text-white">M</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-serif text-lg font-bold text-stone-900">La Maison du Chef</p>
            <p className="text-[10px] font-medium uppercase tracking-widest text-stone-500">Gastronomie française</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition-colors duration-200 hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="rounded-full bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-amber-700 hover:shadow-lg"
          >
            Réserver
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white md:hidden"
          aria-label="Menu"
        >
          <svg className="h-5 w-5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-stone-200 bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-700 transition-colors duration-200 hover:text-stone-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 rounded-full bg-amber-600 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Réserver une table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
