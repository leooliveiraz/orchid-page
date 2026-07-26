const rows = [
  { label: "🌳 Grafo de branches interativo", orchid: true, others: "⚠️ básico" },
  { label: "🍒 Cherry-pick múltiplo em lote", orchid: true, others: false },
  { label: "🔄 Rebase interativo com drag & drop", orchid: true, others: false },
  { label: "🤝 Resolução visual de conflitos", orchid: true, others: "⚠️ parcial" },
  { label: "📁 Multi-repositório num só painel", orchid: true, others: "⚠️ parcial" },
  { label: "⌨️ Atalhos de teclado completos", orchid: true, others: "⚠️ básico" },
  { label: "⚡ Performance em repositórios grandes", orchid: true, others: "🐢 lento" },
  { label: "🔓 Gratuito e leve", orchid: true, others: false },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-500/20 text-fuchsia-300">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-zinc-600">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    );
  }
  return <span className="text-xs font-medium capitalize text-zinc-500">{value}</span>;
}

export default function Comparison() {
  return (
    <section id="comparativo" className="relative py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-400">Por que Orchid</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Feito por um dev cansado de clientes Git genéricos.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Orchid Git nasceu da frustração do dia a dia — e resolve exatamente o que outros deixam pra trás.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-bold sm:px-8">
            <span className="text-zinc-400">Funcionalidade</span>
            <span className="text-center text-fuchsia-300">Orchid Git</span>
            <span className="text-center text-zinc-500">Outros clientes</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 items-center px-4 py-4 text-sm sm:px-8 ${
                i % 2 === 0 ? "bg-white/[0.015]" : ""
              }`}
            >
              <span className="pr-2 text-zinc-300">{row.label}</span>
              <span className="flex justify-center"><Cell value={row.orchid} /></span>
              <span className="flex justify-center"><Cell value={row.others} /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
