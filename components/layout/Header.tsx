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
    <header 
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: 'rgba(251, 250, 248, 0.95)', borderBottom: '1px solid rgba(232, 225, 215, 0.5)' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div 
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: '#14141c' }}
          >
            <span className="font-serif text-lg font-semibold" style={{ color: '#fbfaf8' }}>M</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-serif text-lg font-semibold" style={{ color: '#14141c' }}>La Maison du Chef</p>
            <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: '#636376' }}>Gastronomie connectée</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: '#636376' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="rounded-full px-5 py-2.5 text-xs font-semibold transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundColor: '#14141c', color: '#fbfaf8' }}
          >
            Réserver une table
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          style={{ border: '1px solid #e8e1d7', backgroundColor: 'transparent' }}
          aria-label="Menu"
        >
          <svg
            className="h-5 w-5"
            style={{ color: '#14141c' }}
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
        <div 
          className="px-6 py-4 md:hidden"
          style={{ borderTop: '1px solid #e8e1d7', backgroundColor: '#fbfaf8' }}
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#636376' }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-full px-5 py-2.5 text-center text-xs font-semibold"
              style={{ backgroundColor: '#14141c', color: '#fbfaf8' }}
            >
              Réserver une table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
