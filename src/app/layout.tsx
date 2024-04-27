import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileMenuWrapper } from "../components/header/mobile-menu";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Memorate - Lembrete de Aniversários",
  description: "Organize, lembre-se e torne único",
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
