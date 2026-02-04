import type { Metadata } from "next";
import { HeroSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez La Maison du Chef pour une réservation ou toute demande d'information.",
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="px-6 pt-8">
        <div className="mx-auto max-w-7xl">
          <HeroSection
            eyebrow="Contact"
            title="Réservez votre table ou contactez-nous"
            description="Notre équipe est à votre disposition pour toute demande de réservation, événement privé ou information."
            backgroundImage="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600"
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <h2 className="font-serif text-xl font-medium text-foreground md:text-2xl">
                Envoyez-nous un message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Nous vous répondrons dans les plus brefs délais.
              </p>
              <form className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-xs font-medium text-foreground">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-xs font-medium text-foreground">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                      placeholder="Dupont"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                    placeholder="jean.dupont@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-medium text-foreground">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-xs font-medium text-foreground">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                  >
                    <option value="reservation">Réservation</option>
                    <option value="event">Événement privé</option>
                    <option value="information">{"Demande d'information"}</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:bg-foreground/90"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-serif text-lg font-medium text-foreground">Coordonnées</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Adresse</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        12 Rue de la Gastronomie<br />
                        75008 Paris, France
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Téléphone</p>
                      <a href="tel:+33123456789" className="mt-1 block text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground">
                        +33 1 23 45 67 89
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a href="mailto:contact@lamaisonduchef.fr" className="mt-1 block text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground">
                        contact@lamaisonduchef.fr
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-serif text-lg font-medium text-foreground">{"Horaires d'ouverture"}</h3>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Mardi - Vendredi</span>
                    <span className="font-medium text-foreground">12h - 14h30, 19h - 22h30</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Samedi</span>
                    <span className="font-medium text-foreground">19h - 23h</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Dimanche - Lundi</span>
                    <span className="font-medium text-foreground">Fermé</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                    <p className="mt-3 text-sm text-muted-foreground">Carte interactive</p>
                    <p className="text-xs text-muted-foreground/70">12 Rue de la Gastronomie, 75008 Paris</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
