const features = [
  {
    title: "🌳 Grafo de commits interativo",
    desc: "Visualize toda a árvore de branches, merges e tags em um grafo fluido, com zoom, filtros e ordenação topológica.",
    icon: (
      <>
        <circle cx="5" cy="6" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 9v6" />
        <circle cx="5" cy="18" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
        <circle cx="19" cy="6" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 15.7A9 9 0 0 0 19 9" />
      </>
    ),
  },
  {
    title: "🍒 Cherry-pick múltiplo",
    desc: "Selecione vários commits de branches diferentes e aplique tudo de uma vez, sem repetir o comando um por um.",
    icon: (
      <>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v6" />
        <circle cx="18" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12h-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9l-3 3 3 3" />
      </>
    ),
  },
  {
    title: "🔄 Rebase interativo visual",
    desc: "Reordene, combine (squash), edite ou remova commits arrastando cards — sem decorar flags de terminal.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />,
  },
  {
    title: "🤝 Merge sem sustos",
    desc: "Resolva conflitos com um editor lado a lado, destacando exatamente o que mudou em cada branch.",
    icon: (
      <>
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 21V9a9 9 0 0 0 9 9" />
      </>
    ),
  },
  {
    title: "⚡ Checkout instantâneo",
    desc: "Troque de branch, crie novas ou restaure arquivos com um clique — e volte ao contexto certo na hora.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />,
  },
  {
    title: "📦 Stash inteligente",
    desc: "Guarde alterações em segundos e aplique de volta com histórico e busca, sem perder nada no caminho.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  },
  {
    title: "📁 Multi-repositório",
    desc: "Gerencie vários repositórios recentes, favoritos e times num único painel, sem trocar de janela.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />,
  },
  {
    title: "🏷️ Tags & releases",
    desc: "Crie, edite e acompanhe tags de versão diretamente no grafo, com destaque visual para cada release.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M3 11l8-8h6a2 2 0 012 2v6l-8 8-8-8z" />,
  },
  {
    title: "⌨️ Atalhos para todo lado",
    desc: "Um comando por atalho: commit, push, pull, fetch, branch, tudo pensado para não tirar a mão do teclado.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 6L3 12l6 6M15 6l6 6-6 6" />,
  },
];

export default function Features() {
  return (
    <section id="recursos" className="relative py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-400">Recursos</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Tudo que seu Git precisava e faltava.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Cada operação do dia a dia repensada como uma experiência visual, rápida e sem fricção.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group animate-fade-in-up relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 opacity-0 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-500/40 hover:bg-white/[0.06] stagger-${i + 1}`}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-fuchsia-500/0 blur-2xl transition group-hover:bg-fuchsia-500/20" />
              <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 text-fuchsia-300 ring-1 ring-inset ring-white/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  {f.icon}
                </svg>
              </div>
              <h3 className="relative text-base font-bold text-white">{f.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
