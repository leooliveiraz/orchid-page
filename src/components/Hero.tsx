import GraphMockup from "./GraphMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 lg:pt-44">
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[100px]" />
      <img
        src="/images/orchid-glow.png"
        alt=""
        className="animate-float-slow pointer-events-none absolute -right-24 top-10 hidden w-[420px] opacity-40 mix-blend-screen lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-fuchsia-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
            </span>
            Feito por um dev, para devs de verdade
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Git nunca foi tão
            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              bonito de usar.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-zinc-400">
            Orchid Git é o cliente Git visual que transforma commits, merges, rebases
            e cherry-picks múltiplos em segundos. Menos terminal, mais fluxo.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#download"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-fuchsia-500/30 transition hover:shadow-fuchsia-500/50 hover:brightness-110"
            >
              Baixar Orchid Git grátis
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#fluxo"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Ver como funciona
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-medium text-zinc-500">
            <span className="flex items-center gap-1.5"><CheckIcon /> Windows, macOS &amp; Linux</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> Rebase interativo</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> Cherry-pick múltiplo</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> 100% gratuito</span>
          </div>
        </div>

        {/* showcase mockup */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-fuchsia-600/20 via-purple-600/10 to-indigo-600/20 blur-2xl" />
          <div className="animate-float relative">
            <GraphMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
