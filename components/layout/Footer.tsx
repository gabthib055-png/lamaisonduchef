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
    <footer style={{ backgroundColor: '#14141c', borderTop: '1px solid #e8e1d7' }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div 
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: '#fbfaf8' }}
              >
                <span className="font-serif text-lg font-semibold" style={{ color: '#14141c' }}>M</span>
              </div>
              <div>
                <p className="font-serif text-lg font-semibold" style={{ color: '#fbfaf8' }}>La Maison du Chef</p>
                <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(251, 250, 248, 0.6)' }}>Gastronomie connectée</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed" style={{ color: 'rgba(251, 250, 248, 0.7)' }}>
              Une expérience gastronomique unique alliant tradition culinaire française 
              et innovation digitale. Découvrez une nouvelle façon de vivre le restaurant.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#fbfaf8' }}>Navigation</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity duration-200 hover:opacity-100"
                    style={{ color: 'rgba(251, 250, 248, 0.7)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#fbfaf8' }}>Contact</h4>
            <ul className="mt-4 space-y-3 text-sm" style={{ color: 'rgba(251, 250, 248, 0.7)' }}>
              <li>
                <p>12 Rue de la Gastronomie</p>
                <p>75008 Paris, France</p>
              </li>
              <li>
                <a href="tel:+33123456789" className="transition-opacity duration-200 hover:opacity-100">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a href="mailto:contact@lamaisonduchef.fr" className="transition-opacity duration-200 hover:opacity-100">
                  contact@lamaisonduchef.fr
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#fbfaf8' }}>Horaires</p>
              <p className="mt-2 text-sm" style={{ color: 'rgba(251, 250, 248, 0.7)' }}>Mar - Sam : 12h - 14h30, 19h - 22h30</p>
              <p className="text-sm" style={{ color: 'rgba(251, 250, 248, 0.7)' }}>Dim - Lun : Fermé</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div 
          className="mt-12 flex flex-col items-center justify-between gap-4 pt-8 md:flex-row"
          style={{ borderTop: '1px solid rgba(251, 250, 248, 0.1)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(251, 250, 248, 0.6)' }}>
            © 2025 La Maison du Chef. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-opacity duration-200 hover:opacity-100"
                style={{ color: 'rgba(251, 250, 248, 0.6)' }}
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
