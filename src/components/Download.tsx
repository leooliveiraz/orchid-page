const platforms = [
  {
    name: "Windows",
    detail: ".exe · winget",
    icon: (
      <path d="M3 5.5L10.5 4.4V11.3H3V5.5ZM11.4 4.3L21 3V11.2H11.4V4.3ZM3 12.2H10.5V19.1L3 18V12.2ZM11.4 12.2H21V20.5L11.4 19.2V12.2Z" />
    ),
  },
  {
    name: "macOS",
    detail: ".dmg · Apple Silicon & Intel",
    icon: (
      <path d="M16.365 1.43c0 1.14-.415 2.06-1.245 2.77-.83.71-1.79 1.03-2.885 1.03-.09-1.13.33-2.13 1.16-2.94.83-.81 1.83-1.24 2.97-1.29.02.14.02.29 0 .43zM20.9 17.05c-.42.97-.93 1.87-1.53 2.71-.83 1.16-1.51 1.96-2.04 2.4-.82.75-1.7 1.14-2.64 1.16-.68.02-1.5-.19-2.46-.63-.96-.44-1.84-.65-2.63-.65-.83 0-1.73.21-2.71.65-.98.44-1.77.67-2.36.69-.9.04-1.79-.36-2.66-1.19-.57-.5-1.28-1.34-2.13-2.5-.91-1.24-1.66-2.68-2.25-4.32-.63-1.77-.95-3.48-.95-5.14 0-1.9.41-3.54 1.23-4.9.65-1.1 1.51-1.96 2.6-2.6 1.09-.63 2.27-.96 3.54-.98.72-.01 1.66.22 2.83.68 1.16.46 1.91.69 2.24.69.25 0 1.08-.27 2.48-.81 1.32-.5 2.44-.71 3.35-.63 2.47.2 4.33 1.18 5.56 2.94-2.21 1.34-3.31 3.21-3.29 5.61.02 1.87.7 3.42 2.04 4.65.61.55 1.29.98 2.04 1.28-.16.48-.34.94-.53 1.39z" />
    ),
  },
  {
    name: "Linux",
    detail: ".AppImage · .deb · .rpm",
    icon: (
      <path d="M12 2c1.5 0 2.5 1.5 2.5 3.2 0 1.1-.3 1.9-.7 2.6.6.3 1.2.9 1.2 1.9 0 .6-.2 1-.5 1.4.9.5 1.7 1.5 1.7 3.1 0 2.9-2.3 5.3-4.2 5.3-.5 0-1-.2-1.4-.4-.4.2-.9.4-1.4.4-1.9 0-4.2-2.4-4.2-5.3 0-1.6.8-2.6 1.7-3.1-.3-.4-.5-.8-.5-1.4 0-1 .6-1.6 1.2-1.9-.4-.7-.7-1.5-.7-2.6C9.5 3.5 10.5 2 12 2z" />
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-1.5 text-xs font-bold text-fuchsia-300">
              🌸 v1.0.0 disponível agora
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Pare de brigar com o terminal.
              <span className="block">Comece a usar o Orchid.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-300">
              Gratuito, leve e feito para acelerar seu dia a dia com Git — em qualquer sistema operacional.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {platforms.map((p) => (
                <button
                  key={p.name}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-left transition hover:border-fuchsia-400/40 hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-white transition group-hover:text-fuchsia-300" fill="currentColor">
                    {p.icon}
                  </svg>
                  <div className="text-center">
                    <p className="text-sm font-bold text-white">{p.name}</p>
                    <p className="text-xs text-zinc-400">{p.detail}</p>
                  </div>
                </button>
              ))}
            </div>

            <p className="mt-8 text-xs text-zinc-500">
              Sem cartão de crédito. Sem conta. Só baixar, instalar e commitar. 🌸
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
