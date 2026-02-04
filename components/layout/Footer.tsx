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
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
                <span className="font-serif text-lg font-semibold text-foreground">M</span>
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-primary-foreground">La Maison du Chef</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">Gastronomie connectée</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Une expérience gastronomique unique alliant tradition culinaire française 
              et innovation digitale. Découvrez une nouvelle façon de vivre le restaurant.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">Navigation</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 no-underline transition-colors duration-200 hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li>
                <p>12 Rue de la Gastronomie</p>
                <p>75008 Paris, France</p>
              </li>
              <li>
                <a href="tel:+33123456789" className="no-underline transition-colors duration-200 hover:text-primary-foreground">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a href="mailto:contact@lamaisonduchef.fr" className="no-underline transition-colors duration-200 hover:text-primary-foreground">
                  contact@lamaisonduchef.fr
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">Horaires</p>
              <p className="mt-2 text-sm text-primary-foreground/70">Mar - Sam : 12h - 14h30, 19h - 22h30</p>
              <p className="text-sm text-primary-foreground/70">Dim - Lun : Fermé</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/60">
            © 2025 La Maison du Chef. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-primary-foreground/60 no-underline transition-colors duration-200 hover:text-primary-foreground"
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
