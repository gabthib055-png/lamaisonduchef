import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <span className="font-serif text-xl font-bold text-stone-900">M</span>
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-white">La Maison du Chef</p>
                <p className="text-[10px] font-medium uppercase tracking-widest text-stone-400">Gastronomie française</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-stone-400">
              Une expérience gastronomique unique alliant tradition culinaire française 
              et innovation digitale. Découvrez une nouvelle façon de vivre le restaurant.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500">Navigation</h4>
            <ul className="mt-6 space-y-4">
              {[
                { label: "Accueil", href: "/" },
                { label: "Notre Carte", href: "/menu" },
                { label: "Le Restaurant", href: "/restaurant" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500">Contact</h4>
            <ul className="mt-6 space-y-4 text-sm text-stone-400">
              <li>
                <p>12 Rue de la Gastronomie</p>
                <p>75008 Paris, France</p>
              </li>
              <li>
                <a href="tel:+33123456789" className="transition-colors duration-300 hover:text-white">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a href="mailto:contact@lamaisonduchef.fr" className="transition-colors duration-300 hover:text-white">
                  contact@lamaisonduchef.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500">Horaires</h4>
            <ul className="mt-6 space-y-2 text-sm text-stone-400">
              <li>Mar - Sam</li>
              <li>12h - 14h30</li>
              <li>19h - 22h30</li>
              <li className="pt-2 text-stone-500">Dim - Lun : Fermé</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 md:flex-row">
          <p className="text-xs text-stone-500">
            © 2025 La Maison du Chef. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <Link href="/mentions-legales" className="text-xs text-stone-500 transition-colors duration-300 hover:text-white">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-xs text-stone-500 transition-colors duration-300 hover:text-white">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
