import { useEffect, useState, type ComponentType } from "react";
import { DebianIcon, FedoraIcon, RedHatIcon, UbuntuIcon, WindowsIcon, type IconProps } from "./Icons";

const LATEST_VERSION = "v0.9.12";
const RELEASES_URL = "https://github.com/leooliveiraz/orchid-page/releases";
const LATEST_DOWNLOAD_URL = `${RELEASES_URL}/latest/download`;

type PlatformOS = "windows" | "linux";

type Platform = {
  name: string;
  detail: string;
  url: string;
  os: PlatformOS;
  icon: ComponentType<IconProps>;
  swapWith?: ComponentType<IconProps>;
};

const platforms: Platform[] = [
  {
    name: "Windows",
    detail: ".exe · instalador",
    url: `${LATEST_DOWNLOAD_URL}/Orchid-Git-Setup.exe`,
    os: "windows",
    icon: WindowsIcon,
  },
  {
    name: "Linux · deb",
    detail: "Debian, Ubuntu e derivados",
    url: `${LATEST_DOWNLOAD_URL}/orchid-git-amd64.deb`,
    os: "linux",
    icon: DebianIcon,
    swapWith: UbuntuIcon,
  },
  {
    name: "Linux · rpm",
    detail: "Fedora, RHEL e derivados",
    url: `${LATEST_DOWNLOAD_URL}/orchid-git-x86_64.rpm`,
    os: "linux",
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

function detectOS(): PlatformOS | null {
  if (typeof navigator === "undefined") return null;
  const ua = `${navigator.userAgent} ${navigator.platform ?? ""}`.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("linux") || ua.includes("x11")) return "linux";
  return null;
}

export default function Download() {
  const [os, setOs] = useState<PlatformOS | null>(null);

  useEffect(() => {
    setOs(detectOS());
  }, []);

  const orderedPlatforms = os
    ? [...platforms].sort((a, b) => Number(b.os === os) - Number(a.os === os))
    : platforms;

  return (
    <section id="download" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-purple-700/20 to-indigo-800/20 px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-[100px]" />

          <div className="relative">
            <span className="animate-pulse-glow inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-1.5 text-xs font-bold text-fuchsia-300">
              🌸 {LATEST_VERSION} — lançamento oficial
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Chega de sofrer com o Git.
              <span className="block bg-gradient-to-r from-fuchsia-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Vem pro Orchid.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-300">
              Gratuito, leve e sem complicação 💜
              O Orchid nasceu para tornar o Git mais simples — experimente e veja a diferença no seu fluxo.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {orderedPlatforms.map((p, i) => {
                const Icon = p.icon;
                const recommended = os !== null && i === 0;
                return (
                  <a
                    key={p.name}
                    href={p.url}
                    className={`group animate-fade-in-up relative flex w-52 flex-col items-center gap-3 rounded-2xl border px-6 py-6 text-left opacity-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-fuchsia-500/20 ${
                      recommended
                        ? "border-fuchsia-400/60 bg-fuchsia-500/10 hover:border-fuchsia-300/70"
                        : "border-white/10 bg-white/5 hover:border-fuchsia-400/40 hover:bg-white/10"
                    }`}
                    style={{ animationDelay: `${i * 0.12}s` }}
                  >
                    {recommended && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        Recomendado
                      </span>
                    )}
                    {p.swapWith ? <DistroSwapIcon a={Icon} b={p.swapWith} /> : <Icon className={ICON_CLASS} />}
                    <div className="text-center">
                      <p className="text-sm font-bold text-white group-hover:text-fuchsia-200">{p.name}</p>
                      <p className="text-xs text-zinc-400">{p.detail}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <p className="mt-6 text-xs text-zinc-500">Você sempre baixa a versão mais recente.</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">🔓 Sem cartão de crédito</span>
              <span className="flex items-center gap-1.5">👤 Sem criar conta</span>
              <span className="flex items-center gap-1.5">🌸 Mantido com carinho</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
