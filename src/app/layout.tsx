import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MobileMenuWrapper } from "../components/header/mobile-menu";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Memorate - Lembrete de Aniversários",
  description: "Organize, lembre-se e torne único",
  applicationName: "memorate",
  keywords:
    "memorate, lembrete aniversário, lembrete, aniversário, organização, organizador, aniversários",
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    type: "website",
    url: "https://memorate.app.br",
    title: "Memorate - Lembrete de Aniversários",
    description: "Organize, lembre-se e torne único",
    images: [
      {
        url: "https://memorate.app.br/og-image.png",
        alt: "Memorate - Lembrete de Aniversários",
      },
    ],
  },
  twitter: {
    site: "@memorate.app.br",
    card: "summary_large_image",
    images: [
      {
        url: "https://memorate.app.br/og-image.png",
        alt: "Memorate - Lembrete de Aniversários",
      },
    ],
  },
  metadataBase: new URL("https://memorate.app.br"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} mx-auto max-w-[1650px] relative px-6 sm:px-16`}
      >
        {children}
        <MobileMenuWrapper />
      </body>
    </html>
  );
}
