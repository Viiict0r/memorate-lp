import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Memorate - Lembrete de Aniversários",
  description: "Organize, lembre-se e torne único",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} max-h-screen h-screen overflow-hidden dynamic-container mx-auto max-w-[1920px] relative`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
