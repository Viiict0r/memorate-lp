import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 text-[#141414]">
      <section>
        <div className="max-w-[864px] flex flex-col gap-[19px]">
          <h1 className="font-extrabold text-[64px] leading-[74px]">
            Aniversários nunca foram tão fáceis de lembrar.
          </h1>
          <h2 className="font-normal text-[28px] leading-[38px]">
            <span className="bg-clip-text font-bold bg-gradient-to-r from-[#BD00FF] to-[#2F00B6] text-transparent">
              cada aniversário único!
            </span>
          </h2>
          <div>
            <Link href="#">link1</Link>
            <Link href="#">link2</Link>
          </div>
        </div>
        <div>image</div>
      </section>
    </main>
  );
}
