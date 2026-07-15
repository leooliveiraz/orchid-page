const commits = [
  { hash: "4ff43ba9", msg: "fix(styles): use color-mix for secondary", author: "orchid", tag: null, color: "bg-sky-400" },
  { hash: "2baa8608", msg: "chore(release): version packages", author: "ci-bot", tag: "v4.8.3", color: "bg-fuchsia-400" },
  { hash: "07900769", msg: "fix(cli): update template handling", author: "R. Aggarwal", tag: null, color: "bg-sky-400" },
  { hash: "360e8a19", msg: "fix(rebase): preserve quote style", author: "A. Konoplyov", tag: null, color: "bg-sky-400" },
  { hash: "55ea86f2", msg: "chore: update templates (#1078)", author: "orchid", tag: null, color: "bg-sky-400" },
  { hash: "f3e16e7d", msg: "feat(cherry-pick): multi-select mode", author: "orchid", tag: null, color: "bg-emerald-400" },
  { hash: "c8737139", msg: "fix(v4): serve registries from dir", author: "orchid", tag: null, color: "bg-sky-400" },
  { hash: "df1752df", msg: "feat: interactive rebase UI", author: "orchid", tag: "v4.8.1", color: "bg-fuchsia-400" },
];

export default function GraphMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0b12]/95 shadow-2xl shadow-fuchsia-900/30 backdrop-blur">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <div className="ml-3 flex items-center gap-2 text-xs font-medium text-zinc-400">
          <span className="text-sm">🌸</span> Orchid Git — meu-projeto-incrivel
        </div>
      </div>

      <div className="flex text-xs">
        {/* sidebar */}
        <div className="hidden w-44 shrink-0 border-r border-white/10 bg-white/[0.02] p-3 sm:block">
          <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Branches</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 rounded-md bg-fuchsia-500/15 px-2 py-1.5 text-fuchsia-300">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> main
            </div>
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" /> feature/rebase-ui
            </div>
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" /> fix/merge-conflict
            </div>
          </div>
          <p className="mb-2 mt-4 px-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Stash</p>
          <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> WIP: ajustes de tela
          </div>
        </div>

        {/* graph */}
        <div className="flex-1 p-3">
          <div className="mb-2 flex items-center gap-4 border-b border-white/5 pb-2 text-[11px] font-semibold text-zinc-500">
            <span className="text-fuchsia-300">GRAPH</span>
            <span>CHANGES</span>
            <span>METRICS</span>
          </div>
          <div className="space-y-2.5">
            {commits.map((c, i) => (
              <div key={c.hash} className="flex items-center gap-3">
                <div className="relative flex w-5 shrink-0 justify-center">
                  <span className={`z-10 h-2.5 w-2.5 rounded-full ${c.color} ring-4 ring-[#0c0b12]`} />
                  {i !== commits.length - 1 && (
                    <span className="absolute top-2.5 h-full w-px bg-gradient-to-b from-fuchsia-500/60 to-purple-500/10" />
                  )}
                </div>
                <span className="hidden shrink-0 font-mono text-purple-300/70 md:inline">{c.hash}</span>
                {c.tag && (
                  <span className="hidden shrink-0 rounded-full bg-fuchsia-500/20 px-2 py-0.5 font-mono text-[10px] text-fuchsia-300 sm:inline">
                    {c.tag}
                  </span>
                )}
                <span className="flex-1 truncate text-zinc-300">{c.msg}</span>
                <span className="hidden shrink-0 text-zinc-500 lg:inline">{c.author}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
