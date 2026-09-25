const shots = [
  {
    src: "/images/screenshots/changes.png",
    title: "Alterações e staging",
    desc: "Stage, unstage e commit com um clique — com diff, blame e histórico à mão.",
  },
  {
    src: "/images/screenshots/commit.png",
    title: "Commit",
    desc: "Revise os arquivos staged e escreva a mensagem antes de commitar.",
  },
  {
    src: "/images/screenshots/conflict.png",
    title: "Resolução de conflitos",
    desc: "Escolha Ours, Theirs ou Both bloco a bloco, em visão unificada ou 3-pane.",
  },
  {
    src: "/images/screenshots/conflict-3pane.png",
    title: "Conflito lado a lado",
    desc: "Compare OURS, MERGED e THEIRS em três painéis e decida a resolução.",
  },
  {
    src: "/images/screenshots/rebase.png",
    title: "Rebase interativo",
    desc: "Reordene commits e escolha pick, reword, squash, fixup ou drop.",
  },
  {
    src: "/images/screenshots/cherry-pick.png",
    title: "Cherry-pick",
    desc: "Traga commits específicos para a branch atual pelo hash.",
  },
  {
    src: "/images/screenshots/stash.png",
    title: "Stash",
    desc: "Guarde alterações temporariamente e recupere quando precisar.",
  },
  {
    src: "/images/screenshots/metrics.png",
    title: "Métricas do repositório",
    desc: "Commits por mês, por autor e por período para enxergar o ritmo do time.",
  },
  {
    src: "/images/screenshots/files.png",
    title: "Explorador de arquivos",
    desc: "Navegue pela árvore do projeto e abra qualquer arquivo sem sair do app.",
  },
  {
    src: "/images/screenshots/settings.png",
    title: "Ajustes por repositório",
    desc: "Usuário, remoto e autenticação configurados no lugar certo.",
  },
];

export default function Screenshots() {
  return (
    <section id="telas" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-400">Por dentro</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Veja a interface do Orchid Git.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">Capturas reais da aplicação em uso.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {shots.map((s, i) => (
            <figure
              key={s.src}
              className={`group animate-fade-in-up overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] opacity-0 transition duration-300 hover:border-fuchsia-500/40 stagger-${i + 1}`}
            >
              <img
                src={s.src}
                alt={s.title}
                width={2142}
                height={1298}
                loading="lazy"
                className="w-full border-b border-white/10"
              />
              <figcaption className="p-5">
                <p className="text-sm font-bold text-white">{s.title}</p>
                <p className="mt-1 text-sm text-zinc-400">{s.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
