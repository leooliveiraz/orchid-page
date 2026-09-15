import { Link } from "react-router-dom";
import Page from "../components/Page";

export default function NotFound() {
  return (
    <Page title="Página não encontrada" subtitle="O caminho que você tentou acessar não existe.">
      <Link
        to="/"
        className="inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
      >
        Voltar para o início
      </Link>
    </Page>
  );
}
