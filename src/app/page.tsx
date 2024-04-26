/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const DOWNLOAD_APP_STORE_LINK =
  "https://apps.apple.com/br/app/memorate/id6478419879";

export default function Home() {
  return (
    <main className="flex flex-col gap mt-10 items-center w-full md:-mt-9 md:flex-row lg:gap-10 h-full relative">
      <div className="center-arrow absolute top-[70%] transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit z-10 hidden lg:block">
        <img src="/arrow.png" className="max-w-32" alt="arrow" />
      </div>
      <section className="relative grid place-content-center h-full">
        <img
          src="/star.png"
          className="absolute bottom-[10vh] max-h-[18px] max-w-[18px] md:top-[-8vh] md:left-[16%] md:max-h-7 md:max-w-7"
          alt="star"
        />
        <h1 className="font-semibold text-cta text-cta-width text-center md:text-left relative lg:whitespace-nowrap max-w-[400px] md:max-w-max">
          Aniversários nunca foram&nbsp;
          <br className="hidden lg:block" />
          tão fáceis <br className="sm:hidden block" />
          de lembrar.
          <img
            src="highlight-icon.png"
            alt=""
            className="max-h-5 -top-2 right-0 absolute sm:max-h-8 sm:-top-4 sm:-right-3 lg:-top-7 lg:-right-10 lg:max-h-16"
          />
        </h1>
        <h2 className="text-subtitle font-normal grid text-center md:max-w-full md:block md:text-left">
          Organize, lembre-se e faça&nbsp;
          <span className="bottom-risk bg-clip-text font-semibold bg-gradient-to-r from-[#BD00FF] to-[#2F00B6] text-transparent bg-black relative w-fit mx-auto">
            cada aniversário único!
          </span>
        </h2>
        <div className="flex gap-4 mt-10 justify-center md:justify-start md:mt-14 md:-mb-14">
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
              <span className="font-semibold uppercase text-sm">Em breve</span>
            </div>
          </div>
        </div>
        <img
          src="/star.png"
          className="max-h-10 max-w-10 bottom-[-10vh] right-[25%] hidden md:absolute"
          alt="star"
        />
      </section>
      <section className="sm:pl-5 sm:mb-0 -mb-[10vh]">
        <img
          alt="Screen app"
          src="/app-phones.png"
          className="sm:cta-image pointer-events-none max-w-full"
        />
      </section>
    </main>
  );
}
