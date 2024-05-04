"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    const element = document.getElementById("mobile-wrapper")!;

    if (isOpen) {
      element.classList.remove("menu-active");
      element.classList.remove("z-10");
      element.classList.add("menu-inactive");
      element.classList.add("-z-10");

      // Enable scroll on menu close
      document.body.classList.remove("overflow-hidden");

      setOpen(false);
    } else {
      element.classList.add("menu-active");
      element.classList.add("z-10");
      element.classList.remove("menu-inactive");
      element.classList.remove("hidden");
      element.classList.remove("-z-10");

      // Disable scroll on menu close
      document.body.classList.add("overflow-hidden");

      setOpen(true);
    }
  };

  return (
    <button
      onClick={handleOpen}
      className="absolute transform -translate-y-1/2 top-1/2 right-0 w-fit h-fit hover:opacity-50 transition-opacity duration-300 cursor-pointer"
    >
      <div className="min-h-4">
        {!isOpen && (
          <img
            src="/mobile-menu-icon.png"
            className="max-h-4 md:hidden"
            alt="Menu"
          />
        )}

        {isOpen && (
          <img src="/close-icon.png" className="max-h-4 md:hidden" alt="Menu" />
        )}
      </div>
    </button>
  );
};

export const MobileMenuWrapper = () => {
  const closeMenu = () => {
    const element = document.getElementById("mobile-wrapper")!;

    element.classList.remove("menu-active");
    element.classList.remove("z-10");
    element.classList.add("menu-inactive");
    element.classList.add("-z-10");

    // Enable scroll on menu close
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div
      id="mobile-wrapper"
      className="bg-[#f5f5f5] fixed w-full h-screen bottom-0 left-0 mobile-wrapper md:-z-10 hidden md:block"
    >
      <div className="md:hidden grid place-content-center gap-3 h-full text-sm sm:text-lg text-center">
        <Link
          onClick={closeMenu}
          className="hover:underline pointer-events-auto"
          href="termos-de-uso"
        >
          Termos de uso.
        </Link>
        <Link
          onClick={closeMenu}
          className="hover:underline pointer-events-auto"
          href="politica-de-privacidade"
        >
          Política de privacidade.
        </Link>
        <Link
          onClick={closeMenu}
          className="hover:underline pointer-events-auto"
          href="mailto:victor@cepil.dev"
        >
          Contate-nos.
        </Link>
        <Link
          href="https://www.instagram.com/memorate.app.br"
          className="grid place-content-center mt-12"
        >
          <Image
            width={28}
            height={28}
            alt="icon instagram"
            className="max-h-6 max-w-6 sm:max-h-7 sm:max-w-7"
            src="/icon_instagram.svg"
          />
        </Link>
      </div>
    </div>
  );
};
