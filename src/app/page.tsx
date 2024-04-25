/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import app_store_icon from "@/assets/app_store_icon.svg";
import google_play_icon from "@/assets/google_play_icon.svg";
import screen_app from "@/assets/screen_app.svg";

export default function Home() {
  return (
    <main className="flex flex-col mt-10 items-center w-full md:-mt-9 md:flex-row lg:gap-10 h-full">
      <section>
        <h1 className="font-semibold text-cta text-cta-width text-center md:text-left relative lg:whitespace-nowrap">
          Aniversários nunca foram&nbsp;
          <br className="hidden lg:block" />
          tão fáceis de lembrar.
          <img
            src="highlight-icon.png"
            alt=""
            className="max-h-8 -top-4 -right-3 absolute lg:-top-7 lg:-right-10 lg:max-h-16"
          />
        </h1>
        <h2 className="text-subtitle font-normal grid text-center md:max-w-full md:block md:text-left">
          Organize, lembre-se e faça&nbsp;
          <span className="bottom-risk bg-clip-text font-semibold bg-gradient-to-r from-[#BD00FF] to-[#2F00B6] text-transparent bg-black relative w-fit mx-auto">
            cada aniversário único!
          </span>
        </h2>
      </section>
      <section className="pl-5">
        <Image
          alt="Screen app"
          src={screen_app}
          width={761}
          height={1050}
          layout="responsive"
          className="cta-image pointer-events-none"
        />
      </section>
      {/* <section className="flex flex-row gap-4 items-center h-full absolute">
        <div className="lg:w-[364px] md:w-24 2xl:w-[664px] 3xl:w-[864px] flex flex-col z-10">
          <h1 className="font-extrabold lg:text-[34px] 2xl:text-[44px] 3xl:text-[64px] lg:leading-[54px] 3xl:leading-[74px] md:text-[45px]">
            Aniversários nunca foram tão fáceis de lembrar.
          </h1>
          <section className="flex 2xl:flex-row  3xl:flex-row 2xl:gap-3 3xl:gap-3 3xl:items-center 2xl:items-center 3xl:justify-start 2xl:justify-start 3xl:text-[28px]  2xl:text-[18px] lg:flex-col lg:items-start lg:gap-0 ">
            <h2 className="font-normal leading-[38px]">
              Organize, lembre-se e faça
            </h2>
            <span className="bg-clip-text font-extrabold bg-gradient-to-r from-[#BD00FF] to-[#2F00B6] text-transparent">
              cada aniversário único!
            </span>
          </section>
          <div className="flex flex-row gap-4 mt-14">
            <Link href="#">
              <Image
                alt="Icon google play"
                src={app_store_icon}
                width={175}
                height={64}
              />
            </Link>
            <Link href="#">
              <Image
                alt="Icon google play"
                src={google_play_icon}
                width={175}
                height={64}
              />
            </Link>
          </div>
        </div>
        <div>
          <Image
            alt="Screen app"
            src={screen_app}
            width={761}
            height={1050}
            layout="responsive"
            className="fixed 3xl:-bottom-72 2xl:-bottom-64 right-12  3xl:max-w-[731px] 2xl:max-w-[661px] lg:max-w-[564px] lg:-bottom-14 "
          />
        </div>
      </section> */}
    </main>
  );
}
