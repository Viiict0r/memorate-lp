/* eslint-disable @next/next/no-img-element */
import { Counter } from "@/components/headline/counter";
import { StoreButtons } from "@/components/headline/store-buttons";

function FruFrus() {
  return (
    <>
      <img
        src="highlight-icon.png"
        alt=""
        className="max-h-6 absolute top-[50px] right-5"
      />
      <img
        src="/star.png"
        className="absolute max-h-[18px] top-44 -left-5"
        alt="star"
      />
    </>
  );
}

export function HeadlineMobile() {
  return (
    <div className="relative block sm:hidden text-center max-w-[340px] mx-auto mt-10">
      <Counter />
      <h1 className="text-h1 font-semibold leading-[32px] mt-6">
        Datas importantes nunca foram tão fáceis de recordar.
      </h1>
      <h2 className="text-sub1 mt-3">
        Organize, lembre-se e faça <br />
        <span className="bottom-risk bg-clip-text font-semibold bg-gradient-to-r from-[#BD00FF] to-[#2F00B6] text-transparent bg-black relative w-fit mx-auto">
          cada data única!
        </span>
      </h2>
      <div className="mt-8 w-fit mx-auto">
        <StoreButtons />
      </div>
      <FruFrus />
    </div>
  );
}
