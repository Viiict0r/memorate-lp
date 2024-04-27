import Markdown from "react-markdown";
import { markdown } from "./markdown";

import "./styles.css";
import { Metadata } from "next";
import { Header } from "../../../components/header";

export const metadata: Metadata = {
  title: "Memorate - Termos de Uso",
};

export default function TermosDeUso() {
  return (
    <div className="tos-wrapper text-[#141414]">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
