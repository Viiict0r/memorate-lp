import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="px-5 sm:px-16 xl:px-[96px] py-[2.25rem] flex flex-col h-screen">
      {children}
    </section>
  );
};
