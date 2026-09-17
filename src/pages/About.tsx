import Page from "../components/Page";

export default function About() {
  return (
    <Page
      title="Sobre o Orchid Git"
      subtitle="O cliente Git visual feito por um dev, para todos os devs."
    >
      <p>
        O Orchid Git nasceu de uma frustração simples: tarefas do dia a dia com Git costumam
        virar uma sequência de comandos decorados — e um <code>rebase</code> no terminal ainda
        assusta.
      </p>
      <p>
        A ideia é oferecer uma interface visual, leve e direta para commits, merges, rebase
        interativo e cherry-pick, sem esconder o que está acontecendo por baixo do capô.
      </p>
      <p>
        É gratuito, roda em Windows e Linux e está em evolução constante. Críticas, ideias e
        relatos de bug são muito bem-vindos.
      </p>
    </Page>
  );
}
