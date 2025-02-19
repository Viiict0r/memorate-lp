import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MobileMenuWrapper } from "../components/header/mobile-menu";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "memorate - Lembretes especiais",
  description: "Datas importantes nunca foram tão fáceis de recordar",
  applicationName: "memorate",
  keywords:
    "memorate, lembrete aniversário, lembrete, aniversário, relacionamento, eventos, férias, organização, organizador, aniversários",
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    type: "website",
    url: "https://memorate.app.br",
    title: "memorate - Lembretes especiais",
    description: "Datas importantes nunca foram tão fáceis de recordar",
    images: [
      {
        url: "https://memorate.app.br/og-image.png",
        alt: "memorate - Lembretes especiais",
      },
    ],
  },
  twitter: {
    site: "@memorate.app.br",
    card: "summary_large_image",
    images: [
      {
        url: "https://memorate.app.br/og-image.png",
        alt: "memorate - Lembretes especiais",
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
        className={`${poppins.className} mx-auto max-w-[1650px] relative px-6`}
      >
        {children}
        <MobileMenuWrapper />
      </body>
    </html>
  );
}
