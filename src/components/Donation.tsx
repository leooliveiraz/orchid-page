const faq = [
  { emoji: "💸", label: "PIX", detail: "Chave aleatória — cai na hora" },
  { emoji: "☕", label: "Buy Me a Coffee", detail: "Internacional, rápido" },
  { emoji: "💳", label: "Cartão", detail: "Via Buy Me a Coffee" },
];
export default function Donation() {
  return (
    <section className="relative py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-fuchsia-500/25 bg-gradient-to-br from-fuchsia-900/30 via-purple-900/30 to-indigo-900/30 px-8 py-14 text-center shadow-2xl shadow-fuchsia-500/20 backdrop-blur-xl sm:px-16">
          <div className="pointer-events-none absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-fuchsia-500/40 via-purple-500/40 to-indigo-500/40 blur-xl" />
          <div className="relative">
            <span className="inline-flex animate-pulse items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-bold text-fuchsia-300">
              💜 Apoie o projeto
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Gostou do Orchid Git?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-zinc-300">
              Ele é <strong className="text-white">100% gratuito</strong> e vai continuar sendo.
              Mas se ele te salvou de um rebase cabeludo ou te fez mais produtivo,
              <strong className="text-fuchsia-300"> considere fazer uma doação</strong>.
              Qualquer valor ajuda a manter o projeto vivo! 🌸
            </p>
            <div className="mx-auto mt-2 flex max-w-lg items-center justify-center gap-2 text-sm text-zinc-500">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <span>🚀 Sua contribuição impulsiona o Orchid</span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {faq.map((item) => (
                <div
                  key={item.label}
                  className="group relative cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-fuchsia-500/15"
                >
                  <div className="text-3xl transition duration-300 group-hover:scale-110">{item.emoji}</div>
                  <p className="mt-3 text-sm font-bold text-white">{item.label}</p>
                  <p className="mt-1 text-xs text-zinc-500">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-dashed border-fuchsia-500/30 bg-fuchsia-500/[0.04] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-400">Chave PIX aleatória</p>
              <p className="mt-3 font-mono text-base font-bold tracking-wider text-white">
                donald@exemplo.com
              </p>
              <p className="mt-2 text-xs text-zinc-500">Ou escaneie o QR Code na página de doação</p>
              <div className="mx-auto mt-4 flex h-24 w-24 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <span className="text-4xl">🌸</span>
              </div>
            </div>
            <p className="mt-8 text-xs text-zinc-600">
              Feito com 💜 por devs, para devs. Nada aqui é obrigatório — só gratidão mesmo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
