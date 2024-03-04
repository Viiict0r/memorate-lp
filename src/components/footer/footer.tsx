import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full gap-[1.5rem] flex flex-row text-[#141414] mt-auto p-4">
      <Link className="hover:underline" href="termos-de-uso">
        Termos de uso.
      </Link>
      <Link className="hover:underline" href="politica-de-privacidade">
        Política de privacidade.
      </Link>
    </footer>
  );
};
