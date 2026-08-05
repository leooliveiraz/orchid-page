const columns = [
  {
    title: "Produto",
    links: ["Recursos", "Fluxo de trabalho", "Comparativo", "Changelog", "Roadmap"],
  },
  {
    title: "Comunidade",
    links: ["Discord"],
  },
  {
    title: "Empresa",
    links: ["Sobre", "Contato", "Licença", "Privacidade"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 p-1">
                <img src="/images/icon.png" alt="Orchid Git" className="h-full w-full object-cover" />
              </div>
              <span className="text-lg font-extrabold text-white">
                Orchid <span className="text-fuchsia-400">Git</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              O cliente Git visual feito por um dev, para devs. Commits, merges, rebase e cherry-picks — sem fricção.
            </p>
            <div className="mt-6 flex gap-3">
              {["x", "discord"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-fuchsia-400/40 hover:text-fuchsia-300"
                  aria-label={s}
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-bold text-white">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-zinc-500 transition hover:text-fuchsia-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Orchid Git. Feito com 🌸 por devs, para devs.</p>
          <p>Construído com React, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "x") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8.1-9.3L1 2h7l4.8 6.4L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M20.3 5.3A17 17 0 0016 3.9l-.3.6a15 15 0 014 1.4c-1.7-.8-3.4-1.2-5.1-1.4-.5-.05-.9-.05-1.4-.05s-.9 0-1.4.05c-1.7.2-3.4.6-5.1 1.4a15 15 0 014-1.4L10.4 3.9a17 17 0 00-4.3 1.4C3.6 8.8 3 12.2 3.2 15.6c1.8 1.3 3.5 2.1 5.2 2.6l.6-1c-.9-.3-1.7-.7-2.5-1.2.2-.1.4-.3.6-.4 3.6 1.6 7.4 1.6 10.9 0 .2.1.4.3.6.4-.8.5-1.6.9-2.5 1.2l.6 1c1.7-.5 3.4-1.3 5.2-2.6.3-4.1-.7-7.4-2.9-10.3zM9.7 13.7c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7zm4.6 0c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7z" />
    </svg>
  );
}
