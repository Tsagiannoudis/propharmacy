import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "greek"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProPharmacy | Online Φαρμακείο – Δερμοκαλλυντικά, Βιταμίνες & Βρεφικά",
  description:
    "Το σύγχρονο online φαρμακείο σας. Γνήσια δερμοκαλλυντικά, βιταμίνες, βρεφικά και είδη φαρμακείου με συμβουλές φαρμακοποιού και παράδοση σε 24-48 ώρες.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col"><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
