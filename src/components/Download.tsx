const platforms = [
  {
    name: "Windows",
    detail: ".exe · winget",
    icon: (
      <path d="M3 5.5L10.5 4.4V11.3H3V5.5ZM11.4 4.3L21 3V11.2H11.4V4.3ZM3 12.2H10.5V19.1L3 18V12.2ZM11.4 12.2H21V20.5L11.4 19.2V12.2Z" />
    ),
  },
];

export default function Download() {
  return (
    <section id="download" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-purple-700/20 to-indigo-800/20 px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-[100px]" />

          <div className="relative">
            <span className="animate-pulse-glow inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-1.5 text-xs font-bold text-fuchsia-300">
              🌸 v1.0.0 — lançamento oficial
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Chega de sofrer no terminal. 💔
              <span className="block bg-gradient-to-r from-fuchsia-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Vem pro Orchid. 🚀
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-300">
              Gratuito, leve e feito por um dev que também ficava perdendo cabelo com Git.
              Testa que você não vai querer voltar atrás. 💜
            </p>

            <div className="mt-10 flex justify-center">
              {platforms.map((p, i) => (
                <button
                  key={p.name}
                  className="group animate-fade-in-up flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-left opacity-0 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-fuchsia-500/20"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-white transition group-hover:scale-110 group-hover:text-fuchsia-300" fill="currentColor">
                    {p.icon}
                  </svg>
                  <div className="text-center">
                    <p className="text-sm font-bold text-white group-hover:text-fuchsia-200">{p.name}</p>
                    <p className="text-xs text-zinc-400">{p.detail}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">🔓 Sem cartão de crédito</span>
              <span className="flex items-center gap-1.5">👤 Sem criar conta</span>
              <span className="flex items-center gap-1.5">📦 Apenas ~15MB</span>
              <span className="flex items-center gap-1.5">🌸 Mantido com carinho</span>
            </div>
          </div>
        </div>

        {/* trust bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs text-zinc-600">
          <span>Usado por devs da →</span>
          <span className="font-semibold text-zinc-500">Nubank</span>
          <span className="font-semibold text-zinc-500">VTEX</span>
          <span className="font-semibold text-zinc-500">QuiD</span>
          <span className="font-semibold text-zinc-500">Trybe</span>
          <span className="font-semibold text-zinc-500">e mais</span>
        </div>
      </div>
    </section>
  );
}
