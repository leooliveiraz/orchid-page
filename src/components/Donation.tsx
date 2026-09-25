import { useState } from "react";

const PIX_KEY = "b13ccfa8-b2b7-4bbd-94d3-e0c25ca2a76a";
const PIX_BRCODE =
  "00020126580014br.gov.bcb.pix0136b13ccfa8-b2b7-4bbd-94d3-e0c25ca2a76a5204000053039865802BR5914LEONARDO ROCHA6007JACAREI62070503***6304ABD3";
const BUY_ME_A_COFFEE_URL = "https://buymeacoffee.com/orchidgit";

const supportUse = [
  { icon: "🌐", title: "Domínio e hospedagem", desc: "Mantém o site e os downloads sempre no ar." },
  { icon: "🛠️", title: "Horas de desenvolvimento", desc: "Novos recursos e correções feitos com calma." },
  { icon: "💜", title: "Apoio ao criador", desc: "Um incentivo direto pra continuar mantendo o projeto vivo." },
];

const cardClass =
  "group relative flex cursor-pointer flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-fuchsia-500/15";

export default function Donation() {
  const [copied, setCopied] = useState<"key" | "brcode" | null>(null);

  async function copy(value: string, kind: "key" | "brcode") {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  }

  return (
    <section className="relative py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-fuchsia-500/25 bg-gradient-to-br from-fuchsia-900/30 via-purple-900/30 to-indigo-900/30 px-8 py-14 shadow-2xl shadow-fuchsia-500/20 backdrop-blur-xl sm:px-12 lg:px-16">
          <div className="pointer-events-none absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-fuchsia-500/40 via-purple-500/40 to-indigo-500/40 blur-xl" />

          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: message + where the money goes */}
            <div className="text-center lg:text-left">
              <span className="relative inline-flex items-center">
                <span
                  aria-hidden="true"
                  className="animate-pulse-glow absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 opacity-70 blur-md"
                />
                <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-fuchsia-500/50 ring-1 ring-white/25">
                  <span aria-hidden="true" className="animate-shimmer pointer-events-none absolute inset-0" />
                  <span className="relative">💜 Apoie o projeto</span>
                </span>
              </span>
              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Gostou do Orchid Git?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                Ele é <strong className="text-white">100% gratuito</strong> e vai continuar sendo.
                Mas se ele te salvou de um rebase cabeludo ou te fez mais produtivo,
                <strong className="text-fuchsia-300"> considere fazer uma doação</strong>.
                Qualquer valor ajuda a manter o projeto vivo! 🌸
              </p>

              <ul className="mx-auto mt-8 max-w-md space-y-4 text-left lg:mx-0">
                {supportUse.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-sm leading-snug text-zinc-300">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm text-zinc-400">
                Feito com 💜 de dev, para dev. Nada aqui é obrigatório — só gratidão mesmo.
              </p>
            </div>

            {/* Right: donation methods */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button type="button" onClick={() => copy(PIX_KEY, "key")} className={cardClass}>
                  <div className="text-3xl transition duration-300 group-hover:scale-110">💸</div>
                  <p className="mt-3 text-sm font-bold text-white">PIX</p>
                  <p className="mt-1 text-xs text-zinc-300">
                    {copied === "key" ? "✓ Chave copiada!" : "Clique para copiar a chave"}
                  </p>
                </button>

                <a href={BUY_ME_A_COFFEE_URL} target="_blank" rel="noreferrer" className={cardClass}>
                  <div className="text-3xl transition duration-300 group-hover:scale-110">☕</div>
                  <p className="mt-3 text-sm font-bold text-white">Buy Me a Coffee</p>
                  <p className="mt-1 text-xs text-zinc-300">Cartão, PayPal e mais — internacional</p>
                </a>
              </div>

              <div className="rounded-2xl border border-dashed border-fuchsia-500/30 bg-fuchsia-500/[0.04] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-400">Chave PIX aleatória</p>
                <p className="mt-3 break-all font-mono text-sm font-bold tracking-wider text-white sm:text-base">{PIX_KEY}</p>
                <p className="mt-1 text-xs text-zinc-300">Recebedor: Leonardo Rocha</p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => copy(PIX_KEY, "key")}
                    className="rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-5 py-2 text-xs font-bold text-white shadow-lg shadow-fuchsia-500/25 transition hover:brightness-110"
                  >
                    {copied === "key" ? "✓ Chave copiada" : "Copiar chave PIX"}
                  </button>
                  <button
                    type="button"
                    onClick={() => copy(PIX_BRCODE, "brcode")}
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-bold text-white transition hover:border-white/30 hover:bg-white/10"
                  >
                    {copied === "brcode" ? "✓ Código copiado" : "Copiar código copia e cola"}
                  </button>
                </div>

                <div className="mt-6 flex flex-col items-center gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                  <img
                    src="/images/pix-qr.png"
                    alt="QR Code PIX — Leonardo Rocha"
                    className="h-32 w-32 shrink-0 rounded-xl border border-white/10 bg-white p-2"
                  />
                  <p className="text-center text-sm text-zinc-300 sm:text-left">
                    Ou escaneie o QR Code com o app do seu banco. 💜
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
