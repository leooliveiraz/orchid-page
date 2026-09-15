import type { ComponentType } from "react";
import { DebianIcon, FedoraIcon, RedHatIcon, UbuntuIcon, WindowsIcon, type IconProps } from "./Icons";

const RELEASES_URL = "https://github.com/leooliveiraz/orchid-page/releases";
const LATEST_DOWNLOAD_URL = `${RELEASES_URL}/latest/download`;

type Platform = {
  name: string;
  detail: string;
  url: string;
  icon: ComponentType<IconProps>;
  swapWith?: ComponentType<IconProps>;
};

const platforms: Platform[] = [
  {
    name: "Windows",
    detail: ".exe · instalador",
    url: `${LATEST_DOWNLOAD_URL}/Orchid-Git-Setup.exe`,
    icon: WindowsIcon,
  },
  {
    name: "Linux · deb",
    detail: "Debian, Ubuntu e derivados",
    url: `${LATEST_DOWNLOAD_URL}/orchid-git-amd64.deb`,
    icon: DebianIcon,
    swapWith: UbuntuIcon,
  },
  {
    name: "Linux · rpm",
    detail: "Fedora, RHEL e derivados",
    url: `${LATEST_DOWNLOAD_URL}/orchid-git-x86_64.rpm`,
    icon: FedoraIcon,
    swapWith: RedHatIcon,
  },
];

const ICON_CLASS = "h-8 w-8 text-white transition group-hover:scale-110 group-hover:text-fuchsia-300";

function DistroSwapIcon({ a: IconA, b: IconB }: { a: ComponentType<IconProps>; b: ComponentType<IconProps> }) {
  return (
    <span className="relative block h-8 w-8 text-white transition group-hover:scale-110 group-hover:text-fuchsia-300">
      <IconA className="animate-icon-swap-a absolute inset-0 h-8 w-8" />
      <IconB className="animate-icon-swap-b absolute inset-0 h-8 w-8" />
    </span>
  );
}

export default function Download() {
  return (
    <section id="download" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-purple-700/20 to-indigo-800/20 px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-[100px]" />

          <div className="relative">
            <span className="animate-pulse-glow inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-1.5 text-xs font-bold text-fuchsia-300">
              🌸 v0.9.8 — lançamento oficial
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

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {platforms.map((p, i) => {
                const Icon = p.icon;
                return (
                  <a
                    key={p.name}
                    href={p.url}
                    className="group animate-fade-in-up flex w-52 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-left opacity-0 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-fuchsia-500/20"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  >
                    {p.swapWith ? <DistroSwapIcon a={Icon} b={p.swapWith} /> : <Icon className={ICON_CLASS} />}
                    <div className="text-center">
                      <p className="text-sm font-bold text-white group-hover:text-fuchsia-200">{p.name}</p>
                      <p className="text-xs text-zinc-400">{p.detail}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              Sempre baixa a versão mais recente ·{" "}
              <a href={RELEASES_URL} className="font-semibold text-fuchsia-300 underline-offset-4 transition hover:text-fuchsia-200 hover:underline">
                ver todas as versões
              </a>
            </p>

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
