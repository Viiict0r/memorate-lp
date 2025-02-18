import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeadlineDesktop } from "@/components/headline";
import { HeadlineMobile } from "@/components/headline/headline.mobile";
import { MockupDesktop } from "@/components/mockup";

export default function Dev() {
  // v2 page
  return (
    <main className="max-h-screen h-full w-full overflow-hidden">
      <Header />
      {/* 100% - menu - footer | desk */}
      {/* 100% - menu  | mobile */}
      <div className="h-[calc(100%-92px)] sm:h-[calc(100%-92px-56px)] grid gap-8 sm:gap-0 sm:grid-cols-2 grid-cols-1 items-center">
        <section className="sm:col-span-1">
          <HeadlineDesktop />
          <HeadlineMobile />
        </section>
        <section className="sm:col-span-1">
          <MockupDesktop />
        </section>
      </div>
      <Footer />
    </main>
  );
}
