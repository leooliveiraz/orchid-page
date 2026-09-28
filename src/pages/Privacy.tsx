import Page from "../components/Page";
import { resetConsent } from "../utils/consent";

export default function Privacy() {
  const reviewConsent = () => {
    resetConsent();
    window.location.reload();
  };

  return (
    <Page title="Privacidade" section="privacidade" subtitle="Como o Orchid Git trata seus dados.">
      <p>
        Esta política descreve como este site (orchidgit.com) trata informações. A ideia é
        simples: coletamos o mínimo possível e nada de analytics é ativado sem a sua escolha.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Cookies e armazenamento local</h2>
        <p>
          Este site <strong className="text-zinc-100">não usa cookies</strong> — nem para
          analytics, nem para publicidade. Por isso não há banner de cookies. O analytics próprio
          guarda apenas dois identificadores anônimos no armazenamento local do navegador (
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-zinc-200">
            localStorage
          </code>
          ): um de visitante e um de sessão. Eles são criados somente depois que você aceita o
          aviso de analytics e podem ser apagados a qualquer momento limpando os dados do site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Seu consentimento</h2>
        <p>
          Na sua primeira visita mostramos um aviso para você{" "}
          <strong className="text-zinc-100">aceitar ou recusar</strong> o analytics.{" "}
          <strong className="text-zinc-100">Nada é coletado antes da sua decisão</strong>, e
          recusar não afeta o funcionamento do site. Você pode revisar sua escolha quando quiser:
        </p>
        <button
          type="button"
          onClick={reviewConsent}
          className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:border-fuchsia-400/40 hover:bg-white/10"
        >
          Revisar minha escolha
        </button>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Analytics próprio</h2>
        <p>
          Quando você aceita, usamos um sistema de analytics{" "}
          <strong className="text-zinc-100">próprio</strong>, sem cookies e hospedado em servidor
          próprio. Coletamos, de forma anônima:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>páginas e rotas visitadas, origem do acesso (referrer) e parâmetros de campanha (UTM);</li>
          <li>
            eventos de interação: cliques, downloads, links externos, tempo na página, rolagem e
            envolvimento por seção;
          </li>
          <li>
            dados técnicos do navegador: idioma, tipo de dispositivo, navegador, sistema
            operacional e tamanho de tela;
          </li>
          <li>localização aproximada (país, região e cidade), estimada a partir do IP.</li>
        </ul>
        <p>
          O seu IP é usado somente no momento da requisição, para estimar a localização e para
          gerar um identificador anônimo; ele{" "}
          <strong className="text-zinc-100">não é armazenado</strong>. O identificador de visitante
          é um hash irreversível com um segredo que muda diariamente, e o de sessão dura apenas
          enquanto você navega. Não usamos esses dados para publicidade nem os compartilhamos com
          terceiros. Os eventos são mantidos por até 12 meses e depois apagados.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Logly</h2>
        <p>
          Também usamos o <strong className="text-zinc-100">Logly</strong>, carregado somente após
          o seu consentimento. É uma ferramenta de analytics que funciona sem cookies e sem
          armazenar dados pessoais (nem de forma anonimizada), registrando apenas métricas
          agregadas como páginas visitadas, origem do acesso e tempo ativo na página. Os dados
          ficam hospedados na União Europeia — veja a{" "}
          <a
            href="https://logly.uk/privacy"
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="privacy_logly"
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
            data-analytics="privacy_email"
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
          Como o analytics não guarda o seu IP nem qualquer dado que identifique você, não há dado
          pessoal de navegação para acessar, corrigir ou excluir. Se você entrou em contato por
          e-mail, pode solicitar acesso, correção ou exclusão desse contato escrevendo para o
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
            data-analytics="privacy_email"
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
