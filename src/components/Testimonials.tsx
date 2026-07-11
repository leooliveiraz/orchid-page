const testimonials = [
  {
    name: "Mariana Costa",
    role: "Tech Lead @ Fintech",
    quote:
      "Resolvi um rebase que estava travado há dias em cinco minutos, arrastando commits. O Orchid Git virou parte do onboarding do meu time.",
    initials: "MC",
  },
  {
    name: "Felipe Nogueira",
    role: "Engenheiro Backend",
    quote:
      "O cherry-pick múltiplo sozinho já paga o download. Consigo levar commits específicos entre branches sem repetir comando um por um.",
    initials: "FN",
  },
  {
    name: "Bianca Souza",
    role: "Full-stack Developer",
    quote:
      "Nunca mais tive medo de merge. O editor de conflitos lado a lado é simplesmente o melhor que já usei, e olha que já testei vários.",
    initials: "BS",
  },
  {
    name: "Rafael Tavares",
    role: "DevOps Engineer",
    quote:
      "Gerencio mais de 20 repositórios no dia a dia e o painel multi-repo do Orchid Git é o que faltava pra não perder o fio da meada.",
    initials: "RT",
  },
  {
    name: "Camila Duarte",
    role: "Software Engineer",
    quote:
      "É raro achar uma ferramenta feita por quem realmente entende a dor do dev. Dá pra sentir isso em cada atalho do Orchid Git.",
    initials: "CD",
  },
  {
    name: "Lucas Andrade",
    role: "Mobile Developer",
    quote:
      "Troquei meu client antigo no primeiro dia. O grafo visual deixou muito mais claro o que estava acontecendo em cada branch.",
    initials: "LA",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-400">Depoimentos</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Devs que trocaram de client e não olharam pra trás.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-fuchsia-500/30 hover:bg-white/[0.05]"
            >
              <div>
                <div className="mb-4 flex gap-0.5 text-fuchsia-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-zinc-300">“{t.quote}”</p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
