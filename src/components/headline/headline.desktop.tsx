/* eslint-disable @next/next/no-img-element */
import { Counter } from "@/components/headline/counter";
import { StoreButtons } from "@/components/headline/store-buttons";

function FruFrus() {
  return (
    <>
      <img
        src="/arrow.png"
        className="max-w-24 absolute -right-10 top-56 hidden min-[1140px]:block"
        alt="arrow"
      />
      <img
        src="/star.png"
        className="absolute max-h-[28px] -top-20 right-72"
        alt="star"
      />
      <img
        src="/star.png"
        className="absolute max-h-[30px] bottom-8 right-40 hidden min-[1140px]:block"
        alt="star"
      />
    </>
  );
}

export function HeadlineDesktop() {
  return (
    <div className="relative min[1150px]:max-w-[700px] hidden sm:block">
      <Counter />
      <h1 className="text-h1 font-semibold leading-[55px] mt-6">
        Datas importantes nunca foram tão fáceis de recordar.
      </h1>
      <h2 className="text-sub1 mt-5">
        Organize, lembre-se e faça{" "}
        <span className="bottom-risk bg-clip-text font-semibold bg-gradient-to-r from-[#BD00FF] to-[#2F00B6] text-transparent bg-black relative w-fit mx-auto">
          cada data única!
        </span>
      </h2>
      <div className="mt-12">
        <StoreButtons />
      </div>
      <FruFrus />
    </div>
  );
}
