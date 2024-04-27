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
        {/* <div className="center-arrow absolute top-[70%] transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit z-10 hidden lg:block">
          <img src="/arrow.png" className="max-w-32" alt="arrow" />
        </div> */}
        <section className="relative grid place-content-center h-full">
          {/* <img
            src="/star.png"
            className="absolute bottom-[10vh] max-h-[18px] max-w-[18px] md:top-[-8vh] md:left-[16%] md:max-h-7 md:max-w-7"
            alt="star"
          /> */}
          {/* text-[2.8125rem] whitespace-nowrap 2xl:text-[3.125rem] 1xl: */}
          <h1 className="text-center md:text-left md:whitespace-nowrap text-[1.875rem] sm:text-[2.625rem] lg:text-[3rem] xl:text-6xl leading-[2.3125rem] sm:leading-[44px] md:leading-tight font-semibold w-full max-w-[337px] sm:max-w-[500px] md:max-w-full">
            Aniversários nunca foram&nbsp;
            <br className="hidden md:block" /> tão fáceis{" "}
            <br className="block md:hidden" /> de lembrar.
            {/* <img
              src="highlight-icon.png"
              alt=""
              className="max-h-5 -top-2 right-0 absolute sm:max-h-8 sm:-top-4 sm:-right-3 lg:-top-7 lg:-right-10 lg:max-h-16"
            /> */}
          </h1>
          <h2 className="text-lg lg:text-[1.375rem] xl:text-2xl font-normal mt-5 grid text-center md:max-w-full md:block md:text-left">
            Organize, lembre-se e faça&nbsp;
            <span className="bottom-risk bg-clip-text font-semibold bg-gradient-to-r from-[#BD00FF] to-[#2F00B6] text-transparent bg-black relative w-fit mx-auto">
              cada aniversário único!
            </span>
          </h2>
          <div className="flex gap-4 mt-10 justify-center md:justify-start">
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
          </div>
          {/* <img
            src="/star.png"
            className="max-h-10 max-w-10 bottom-[-10vh] right-[25%] hidden md:absolute"
            alt="star"
          /> */}
        </section>
        <section className="w-full max-w-[500px] flex justify-end md:max-w-[100%] md:translate-y-1/4">
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
