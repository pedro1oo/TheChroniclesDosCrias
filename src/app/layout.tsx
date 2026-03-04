import type { Metadata } from "next";
import { Cinzel, Permanent_Marker, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"],
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ecos de Ferro e Vidro",
  description: "A traição quebrou o mundo. A vingança vai queimá-lo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${cinzel.variable} ${permanentMarker.variable} ${inter.variable} font-sans antialiased bg-abyss text-foreground overflow-x-hidden noise-bg`}
      >
        {children}
      </body>
    </html>
  );
}
