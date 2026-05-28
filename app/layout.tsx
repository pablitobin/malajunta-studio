import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Mala Junta Creative Studio.",
  description: "Ideas creativas y algo más. Rosario, Argentina.",
  icons: {
    icon: "/img/malajunta/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={jetbrainsMono.variable}>
      <body>{children}</body>
    </html>
  );
}
