import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  return (
    <header className="w-full flex justify-center md:justify-between items-center py-8 relative">
      <Link href="/" className="w-fit">
        <Image
          src="/memorate_logo_dark.svg"
          alt="memorate.app.br"
          className="max-h-7 md:max-h-9 w-fit hidden md:block"
          width={255}
          height={36}
        />
        <Image
          src="/logo-mobile.png"
          alt="memorate.app.br"
          className="max-h-10 w-fit md:hidden"
          width={255}
          height={36}
        />
      </Link>
      <span className="hidden md:block">
        <Image
          width={17}
          height={17}
          alt="icon instagram"
          src="/icon_instagram.svg"
        />
      </span>
      <MobileMenu />
    </header>
  );
};
