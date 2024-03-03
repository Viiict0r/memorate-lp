import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between text-[#141414]">
      <Link href="/">
        <Image
          src="/memorate_logo_dark.svg"
          alt="logotipo memorate"
          width={255}
          height={36}
        />
      </Link>
      <span>icone</span>
    </header>
  );
};
