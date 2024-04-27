/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const DOWNLOAD_APP_STORE_LINK =
  "https://apps.apple.com/br/app/memorate/id6478419879";

export default function Home() {
  return (
    <main className="max-h-screen h-screen overflow-hidden relative">
      <Header />
      <div className="flex flex-col items-center w-full relative h-full gap-5 sm:gap-10 md:-mt-28 md:flex-row md:justify-between">
        <section className="relative grid place-content-center h-full">
          <h1 className="text-center md:text-left md:whitespace-nowrap text-[1.875rem] sm:text-[2.625rem] lg:text-[3rem] xl:text-6xl leading-[2.3125rem] sm:leading-[44px] md:leading-tight font-semibold w-full max-w-[337px] sm:max-w-[500px] md:max-w-full relative">
            Aniversários nunca foram&nbsp;
            <br className="hidden md:block" /> tão fáceis{" "}
            <br className="block md:hidden" /> de lembrar.
            {/* Highlight icon */}
            <img
              src="highlight-icon.png"
              alt=""
              className="max-h-5 sm:max-h-8 md:max-h-10 lg:max-h-14 right-0 sm:right-4 md:-right-5 lg:-right-8 -top-1 sm:-top-4 md:-top-5 lg:-top-7 absolute"
            />
            {/* Star icon */}
            <img
              src="/star.png"
              className="absolute max-h-[18px] sm:max-h-5 md:max-h-7 left-0 sm:left-10 md:left-24 md:-top-16"
              alt="star"
            />
          </h1>
          <h2 className="text-lg lg:text-[1.375rem] xl:text-2xl font-normal mt-5 grid text-center md:max-w-full md:block md:text-left relative">
            Organize, lembre-se e faça&nbsp;
            <span className="bottom-risk bg-clip-text font-semibold bg-gradient-to-r from-[#BD00FF] to-[#2F00B6] text-transparent bg-black relative w-fit mx-auto">
              cada aniversário único!
            </span>
            {/* Arrow */}
            <img
              src="/arrow.png"
              className="max-w-24 lg:max-w-[120px] absolute -right-16 lg:-right-20 top-5 xl:-right-0 xl:top-0 hidden md:block"
              alt="arrow"
            />
          </h2>
          <div className="flex gap-5 sm:gap-4 mt-16 justify-center md:justify-start relative">
            <Link href={DOWNLOAD_APP_STORE_LINK}>
              <img
                src="app-store.png"
                className="download-btn"
                alt="Baixe na App Store"
              />
            </Link>
            <div className="w-fit h-fit relative">
              <img
                src="google-play.png"
                className="download-btn"
                alt="Baixe na Play Store"
              />
              <div className="absolute h-full w-full bg-white/80 rounded-lg top-0 left-0 grid place-content-center">
                <span className="font-semibold uppercase text-sm">
                  Em breve
                </span>
              </div>
            </div>
            {/* Second star */}
            <img
              src="/star.png"
              className="absolute hidden md:block max-h-8 xl:max-h-10 right-[120px] lg:right-[180px] xl:right-[300px] -top-6 lg:-top-4"
              alt="star"
            />
          </div>
        </section>
        <section className="w-full max-w-[500px] flex justify-end md:max-w-[100%] md:translate-y-[17%]">
          <img
            alt="app preview"
            src="/desktop-screens.png"
            className="h-auto w-full hidden sm:block"
          />
          <img
            alt="app preview"
            src="/mobile-screens.png"
            className="h-auto w-full block sm:hidden"
          />
        </section>
      </div>
      <Footer />
    </main>
  );
}
