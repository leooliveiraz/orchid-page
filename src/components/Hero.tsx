import GraphMockup from "./GraphMockup";

const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  size: Math.random() * 2.5 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}));

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 lg:pt-44">
      {/* animated stars */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              opacity: 0.15,
              animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

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
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-fuchsia-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
            </span>
            🌸 De dev, para dev
          </div>

          <h1 className="animate-fade-in-up text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Usar o Git nunca foi
            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              tão fácil ✨
            </span>
          </h1>

          <p className="animate-fade-in-up mt-6 max-w-xl text-balance text-lg leading-relaxed text-zinc-400" style={{ animationDelay: "0.1s" }}>
            Cansou de decorar comando de terminal? Orchid Git é o cliente visual que
            transforma commits, merges, rebases e cherry-picks em <strong className="text-zinc-200">alguns cliques</strong>.
            Seu fluxo de trabalho mais rápido — sem perder o foco.
          </p>

          <div className="animate-fade-in-up mt-9 flex flex-col items-center gap-4 sm:flex-row" style={{ animationDelay: "0.2s" }}>
            <a
              href="#download"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-fuchsia-500/30 transition-all duration-300 hover:scale-105 hover:shadow-fuchsia-500/50 hover:brightness-110"
            >
              <span className="animate-shimmer pointer-events-none absolute inset-0" />
              <span className="relative flex items-center gap-2">
                🌸 Baixar Orchid Git grátis
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
            <a
              href="#fluxo"
              className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:scale-110" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Ver como funciona
            </a>
          </div>

          <div className="animate-fade-in-up mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-medium text-zinc-500" style={{ animationDelay: "0.3s" }}>
            <span className="flex items-center gap-1.5"><CheckIcon /> Windows, macOS &amp; Linux</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> Rebase interativo</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> Cherry-pick múltiplo</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> 100% gratuito</span>
          </div>

          {/* social proof */}
          <div className="animate-fade-in-up mt-8 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-3 text-xs text-zinc-500" style={{ animationDelay: "0.35s" }}>
            <span className="flex items-center gap-1.5">
              <span className="flex -space-x-2">
                {["👩", "👨", "🧑", "👩", "👨"].map((emoji, i) => (
                  <span key={i} className="inline-block animate-float" style={{ animationDelay: `${i * 0.3}s`, animationDuration: "3s" }}>
                    {emoji}
                  </span>
                ))}
              </span>
              <span><strong className="text-zinc-300">10.000+</strong> devs já usam</span>
            </span>
            <span className="hidden sm:inline">·</span>
            <span>⭐ <strong className="text-zinc-300">4.9</strong> de satisfação</span>
            <span className="hidden sm:inline">·</span>
            <span>🔓 100% gratuito</span>
          </div>
        </div>

        {/* showcase mockup */}
        <div className="animate-fade-in-up relative mx-auto mt-16 max-w-5xl" style={{ animationDelay: "0.4s" }}>
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
