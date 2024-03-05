import Markdown from "react-markdown";
import { markdown } from "./markdown";

import "./styles.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memorate - Política de Privacidade",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="tos-wrapper p-24 text-[#141414]">
      <Markdown>{markdown}</Markdown>
    </main>
  );
}
