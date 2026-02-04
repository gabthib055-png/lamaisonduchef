import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Providers from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "La Maison du Chef",
    template: "%s | La Maison du Chef",
  },
  description:
    "Expérience gastronomique connectée : menu interactif, commande en temps réel et paiement simplifié dans un cadre raffiné.",
  keywords: ["restaurant", "gastronomie", "Paris", "cuisine française", "réservation"],
  authors: [{ name: "La Maison du Chef" }],
  openGraph: {
    title: "La Maison du Chef",
    description: "Expérience gastronomique connectée à Paris",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#14141c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
