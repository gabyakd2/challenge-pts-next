import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CharacterProvider } from "@/context/CharacterContext/CharacterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ricky & Morty",
  description: "Pagina web creada con Next Js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CharacterProvider>
        <body className={inter.className}>{children}</body>
      </CharacterProvider>
    </html>
  );
}
