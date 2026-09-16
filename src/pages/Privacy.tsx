import Page from "../components/Page";

export default function Privacy() {
  return (
    <Page title="Privacidade" subtitle="Como o Orchid Git trata seus dados.">
      <p>
        Esta política descreve como este site (orchidgit.com) trata informações. A ideia é
        simples: coletamos o mínimo possível — de preferência, nada que identifique você.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Cookies</h2>
        <p>
          Este site <strong className="text-zinc-100">não usa cookies</strong> — nem para
          analytics, nem para publicidade. Por isso não há banner de consentimento.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Analytics</h2>
        <p>
          Usamos o <strong className="text-zinc-100">Logly</strong>, uma ferramenta de
          analytics que funciona sem cookies e sem armazenar dados pessoais (nem de forma
          anonimizada). Ele registra apenas métricas agregadas, como:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>páginas visitadas, visitas e sessões;</li>
          <li>origem do acesso (referrer);</li>
          <li>tempo ativo de leitura na página.</li>
        </ul>
        <p>
          Esses dados não são vinculados a você. Eles ficam hospedados na União Europeia —
          veja a{" "}
          <a
            href="https://logly.uk/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-300 underline-offset-4 hover:underline"
          >
            política de privacidade do Logly
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Dados que você nos envia</h2>
        <p>
          Não há formulários nem cadastro neste site. Se você entrar em contato pelo e-mail{" "}
          <a
            href="mailto:contact@orchidgit.com"
            className="text-fuchsia-300 underline-offset-4 hover:underline"
          >
            contact@orchidgit.com
          </a>
          , guardaremos apenas o necessário para responder à sua mensagem.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Seus direitos (LGPD)</h2>
        <p>
          Você pode solicitar acesso, correção ou exclusão de qualquer dado pessoal que
          tenhamos sobre você (por exemplo, o e-mail de um contato) escrevendo para o
          endereço acima.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Alterações</h2>
        <p>
          Esta política pode ser atualizada para refletir mudanças no site. A data da última
          atualização aparece abaixo.
        </p>
        <p className="text-sm text-zinc-500">Última atualização: setembro de 2026.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Contato</h2>
        <p>
          Dúvidas sobre privacidade? Escreva para{" "}
          <a
            href="mailto:contact@orchidgit.com"
            className="text-fuchsia-300 underline-offset-4 hover:underline"
          >
            contact@orchidgit.com
          </a>
          .
        </p>
      </section>
    </Page>
  );
}
