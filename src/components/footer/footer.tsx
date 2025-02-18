import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full gap-[1.5rem] hidden flex-row pb-8 pointer-events-none md:flex">
      <Link
        className="hover:underline pointer-events-auto"
        href="termos-de-uso"
      >
        Termos de uso.
      </Link>
      <Link
        className="hover:underline pointer-events-auto"
        href="politica-de-privacidade"
      >
        Política de privacidade.
      </Link>
      <Link
        className="hover:underline pointer-events-auto"
        href="mailto:victor@cepil.dev"
      >
        Contate-nos.
      </Link>
    </footer>
  );
};
