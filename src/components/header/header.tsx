import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <Link href="/" className="w-fit">
        <Image
          src="/memorate_logo_dark.svg"
          alt="memorate.app.br"
          className="max-h-7 md:max-h-9 w-fit"
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
