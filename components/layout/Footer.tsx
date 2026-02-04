import Link from "next/link";

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Notre Carte", href: "/menu" },
    { label: "Le Restaurant", href: "/restaurant" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-ink-700/5 bg-ink-900 text-pearl-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pearl-50">
                <span className="text-serifs text-lg font-semibold text-ink-900">M</span>
              </div>
              <div>
                <p className="text-serifs text-lg font-semibold text-pearl-50">La Maison du Chef</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-pearl-400">Gastronomie connectée</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-pearl-300">
              Une expérience gastronomique unique alliant tradition culinaire française 
              et innovation digitale. Découvrez une nouvelle façon de vivre le restaurant.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-pearl-50">Navigation</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-pearl-300 transition duration-160 hover:text-pearl-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-pearl-50">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-pearl-300">
              <li>
                <p>12 Rue de la Gastronomie</p>
                <p>75008 Paris, France</p>
              </li>
              <li>
                <a href="tel:+33123456789" className="transition duration-160 hover:text-pearl-50">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a href="mailto:contact@lamaisonduchef.fr" className="transition duration-160 hover:text-pearl-50">
                  contact@lamaisonduchef.fr
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pearl-50">Horaires</p>
              <p className="mt-2 text-sm text-pearl-300">Mar - Sam : 12h - 14h30, 19h - 22h30</p>
              <p className="text-sm text-pearl-300">Dim - Lun : Fermé</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-pearl-100/10 pt-8 md:flex-row">
          <p className="text-xs text-pearl-400">
            © {new Date().getFullYear()} La Maison du Chef. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-pearl-400 transition duration-160 hover:text-pearl-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
