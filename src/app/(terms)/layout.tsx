import { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-[1650px] relative px-6 sm:px-16">
      <Header />
      {children}
      <div className="relative pb-16 mt-20">
        <Footer />
      </div>
    </main>
  );
}
