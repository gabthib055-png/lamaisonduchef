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
    <header className="sticky top-0 z-50 border-b border-ink-700/5 bg-pearl-50/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900">
            <span className="text-serifs text-lg font-semibold text-pearl-50">M</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-serifs text-lg font-semibold text-ink-900">La Maison du Chef</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500">Gastronomie connectée</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 transition duration-160 hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/menu"
            className="rounded-full bg-ink-900 px-5 py-2.5 text-xs font-semibold text-pearl-50 transition duration-160 hover:bg-ink-800"
          >
            Réserver une table
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700/10 md:hidden"
          aria-label="Menu"
        >
          <svg
            className="h-5 w-5 text-ink-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-ink-700/5 bg-pearl-50 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-ink-700 transition duration-160 hover:text-ink-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-full bg-ink-900 px-5 py-2.5 text-center text-xs font-semibold text-pearl-50"
            >
              Réserver une table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
