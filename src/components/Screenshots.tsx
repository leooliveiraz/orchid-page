import { useCallback, useEffect, useState } from "react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback((dir: number) => {
    setOpenIndex((i) => (i === null ? i : (i + dir + shots.length) % shots.length));
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : shots[openIndex];

  return (
    <section id="telas" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-400">Por dentro</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Veja a interface do Orchid Git.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Capturas reais da aplicação em uso. Clique para ampliar.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {shots.map((s, i) => (
            <figure
              key={s.src}
              className={`group animate-fade-in-up overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] opacity-0 transition duration-300 hover:border-fuchsia-500/40 stagger-${(i % 9) + 1}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Ampliar imagem: ${s.title}`}
                className="block w-full cursor-zoom-in"
              >
                <img
                  src={s.src}
                  alt={s.title}
                  width={2142}
                  height={1298}
                  loading="lazy"
                  className="w-full border-b border-white/10 transition group-hover:brightness-110"
                />
              </button>
              <figcaption className="p-5">
                <p className="text-sm font-bold text-white">{s.title}</p>
                <p className="mt-1 text-sm text-zinc-400">{s.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Imagem anterior"
            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-white/10 sm:left-6"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Próxima imagem"
            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-white/10 sm:right-6"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <figure className="relative max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.title}
              className="mx-auto max-h-[78vh] w-auto rounded-xl border border-white/10 shadow-2xl shadow-black/60"
            />
            <figcaption className="mt-4 text-center">
              <p className="text-sm font-bold text-white">{current.title}</p>
              <p className="mt-1 text-sm text-zinc-400">{current.desc}</p>
              <p className="mt-2 text-xs text-zinc-500">
                {(openIndex ?? 0) + 1} / {shots.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
