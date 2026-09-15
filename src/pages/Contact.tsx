import Page from "../components/Page";

const channels = [
  {
    label: "E-mail",
    value: "contact@orchidgit.com",
    href: "mailto:contact@orchidgit.com",
    external: false,
  },
  {
    label: "X (Twitter)",
    value: "@OrchidGit",
    href: "https://x.com/OrchidGit",
    external: true,
  },
];

export default function Contact() {
  return (
    <Page title="Contato" subtitle="Dúvidas, sugestões, bugs ou imprensa? Escolha o canal.">
      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-fuchsia-400/40 hover:bg-white/10"
          >
            <p className="text-sm font-bold text-white group-hover:text-fuchsia-200">{c.label}</p>
            <p className="mt-1 text-sm text-zinc-400">{c.value}</p>
          </a>
        ))}
      </div>
    </Page>
  );
}
