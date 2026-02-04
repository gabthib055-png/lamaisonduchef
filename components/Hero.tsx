"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-ink-900 text-pearl-50">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Table gastronomique"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 grid gap-6 px-10 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.4em] text-pearl-100">
            La Maison du Chef
          </p>
          <h1 className="text-serifs text-4xl font-semibold leading-tight lg:text-5xl">
            Une expérience immersive, fluide et premium pour commander, partager
            et régler en toute élégance.
          </h1>
          <p className="max-w-xl text-sm text-pearl-100">
            Carte interactive, commandes synchronisées, paiement split et
            suivi temps réel : tout est pensé pour une expérience gastronomique
            connectée.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-pearl-50 px-5 py-2 text-xs font-semibold text-ink-900 transition duration-160 hover:bg-pearl-100">
              Explorer le menu
            </button>
            <button className="rounded-full border border-pearl-50/40 px-5 py-2 text-xs font-semibold text-pearl-50 transition duration-160 hover:border-pearl-50">
              Voir le parcours
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
          className="rounded-3xl bg-white/10 p-6 backdrop-blur"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-pearl-100">
            Temps réel
          </p>
          <h2 className="mt-3 text-lg font-semibold">Flux de service</h2>
          <ul className="mt-4 space-y-2 text-sm text-pearl-100">
            <li>• Scan QR & attribution table instantanée</li>
            <li>• Panier synchronisé multi-clients</li>
            <li>• POS admin en live pour la cuisine</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
