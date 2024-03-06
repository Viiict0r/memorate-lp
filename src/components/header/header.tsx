import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center text-[#141414]">
      <Link href="/">
        <Image
          src="/memorate_logo_dark.svg"
          alt="logotipo memorate"
          width={255}
          height={36}
        />
      </Link>
      <span>
        <Image
          width={17}
          height={17}
          alt="icon instagram"
          src="/icon_instagram.svg"
        />
      </span>
    </header>
  );
};
