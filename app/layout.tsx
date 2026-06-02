import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pecan Energies | Unlocking Prosperity",
  description:
    "Pecan Energies is a Pan-African oil and gas operator developing the Pecan field in ultra-deep waters offshore Ghana, unlocking prosperity for African communities.",
  keywords: "Pecan Energies, Ghana, oil, gas, deepwater, AFC, energy, offshore",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#0A0F1E] text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
