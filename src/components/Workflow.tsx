import { useState } from "react";

const steps = [
  {
    id: "sync",
    label: "Sincronizar",
    title: "Sincronize sem sair do ritmo",
    desc: "Fetch, pull e push com um clique, upstream configurado sozinho e auto-fetch em segundo plano.",
    terminal: ["$ git fetch origin", "$ git pull --ff-only origin main", "$ git push -u origin main"],
    orchid: [
      "✓ Fetch, pull e push em um clique",
      "✓ Upstream configurado automaticamente",
      "✓ Auto-fetch a cada 5 min e force-with-lease",
      "✓ Detecta GitHub, GitLab, Bitbucket e abre o PR",
    ],
  },
  {
    id: "changes",
    label: "Alterações",
    title: "Stage, commit e amend numa tela",
    desc: "Revise o diff, faça stage por arquivo ou por hunk e commite — com amend quando precisar.",
    terminal: [
      "$ git add -p src/main.py",
      "$ git diff --staged",
      '$ git commit -m "fix: corrige parser"',
      "$ git commit --amend",
    ],
    orchid: [
      "✓ Stage/unstage por arquivo e por hunk",
      "✓ Diff visual antes de commitar",
      "✓ Commit e amend no mesmo fluxo",
    ],
  },
  {
    id: "diff",
    label: "Diff & Blame",
    title: "Entenda cada linha do histórico",
    desc: "Diff unified ou split com rolagem sincronizada, blame colorido por autor e histórico por arquivo.",
    terminal: ["$ git diff", "$ git diff --staged", "$ git blame src/main.py", "$ git log --follow src/main.py"],
    orchid: [
      "✓ Diff unified/split lado a lado",
      "✓ Blame colorido por autor em cada linha",
      "✓ Histórico do arquivo por commit",
    ],
  },
  {
    id: "merge",
    label: "Merge & conflitos",
    title: "Merges sem medo de conflito",
    desc: "Escolha a estratégia e resolva conflitos num editor de 3 painéis, bloco a bloco.",
    terminal: ["$ git checkout main", "$ git merge feature/api", "$ git mergetool", "$ git commit"],
    orchid: [
      "✓ Estratégias normal, squash, no-ff ou ff-only",
      "✓ Resolver de conflitos em 3 painéis",
      "✓ Aceitar ours/theirs/both por bloco",
    ],
  },
  {
    id: "rebase",
    label: "Rebase",
    title: "Rebase interativo, sem decoreba",
    desc: "Arraste commits para reordenar e marque pick, reword, squash, fixup ou drop na lista visual.",
    terminal: ["$ git rebase -i HEAD~6", "# editar pick/squash/reword/drop", "# resolver conflitos", "$ git rebase --continue"],
    orchid: [
      "✓ Arrastar para reordenar commits",
      "✓ pick/reword/squash/fixup/drop com um clique",
      "✓ Continuar ou abortar com feedback visual",
    ],
  },
  {
    id: "cherrypick",
    label: "Cherry-pick",
    title: "Cherry-pick múltiplo em lote",
    desc: "Marque vários commits de qualquer branch e aplique tudo de uma vez, na ordem certa.",
    terminal: ["$ git cherry-pick a1b2c3d", "$ git cherry-pick d4e5f6a", "$ git cherry-pick 7a8b9c0", "# repetir para cada commit..."],
    orchid: [
      "✓ Selecionar múltiplos commits (Ctrl+click)",
      "✓ Escolher branch de destino",
      "✓ Aplicar tudo em lote, em ordem",
    ],
  },
  {
    id: "stash",
    label: "Stash",
    title: "Stash em segundos",
    desc: "Guarde alterações com uma mensagem, veja o conteúdo de cada stash e recupere quando quiser.",
    terminal: ['$ git stash push -m "wip: novo endpoint"', "$ git stash list", "$ git stash pop"],
    orchid: [
      "✓ Guardar alterações com mensagem",
      "✓ Ver o que há em cada stash",
      "✓ Aplicar ou descartar com um clique",
    ],
  },
  {
    id: "tags",
    label: "Tags & releases",
    title: "Versões marcadas no grafo",
    desc: "Crie tags leves ou anotadas e acompanhe cada release destacada direto no grafo de commits.",
    terminal: ['$ git tag -a v1.0.0 -m "release"', "$ git tag", "$ git push origin --tags"],
    orchid: [
      "✓ Tags leves e anotadas",
      "✓ Releases destacadas no grafo",
      "✓ Criar e remover em um clique",
    ],
  },
  {
    id: "metrics",
    label: "Métricas",
    title: "Veja o ritmo do projeto",
    desc: "Gráficos de commits ao longo do tempo, distribuição por autor, arquivos mais alterados e mais.",
    terminal: ["$ git shortlog -sn", "$ git log --numstat | awk ...", "# planilhando isso na mão..."],
    orchid: [
      "✓ Commits por dia/mês e por autor",
      "✓ Arquivos mais alterados e por hora",
      "✓ Linhas adicionadas e removidas",
    ],
  },
];

export default function Workflow() {
  const [active, setActive] = useState(steps[0].id);
  const current = steps.find((s) => s.id === active)!;

  return (
    <section id="fluxo" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-400">Fluxo de trabalho</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            O mesmo Git. Um fluxo bem mais rápido.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Compare o que você digitaria no terminal com o que o Orchid Git resolve em cliques.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2">
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active === s.id
                  ? "scale-105 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white shadow-lg shadow-fuchsia-500/25"
                  : "border border-white/10 text-zinc-400 hover:scale-105 hover:border-white/25 hover:text-white"
              }`}
            >
              {active === s.id ? "🌸 " : ""}{s.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="animate-fade-in" key={current.id}>
            <h3 className="text-2xl font-bold text-white">{current.title}</h3>
            <p className="mt-3 text-zinc-400">{current.desc}</p>

            <div className="mt-6 rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/[0.04] p-5 transition-all hover:border-fuchsia-500/40">
              <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fuchsia-300">
                <span>🌸</span> Com Orchid Git
              </p>
              <ul className="space-y-2 text-sm text-zinc-200">
                {current.orchid.map((line, i) => (
                  <li key={line} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${i * 0.08}s` }}>
                    <span className="mt-0.5 text-fuchsia-400">{line.slice(0, 1)}</span>
                    <span>{line.slice(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0912] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs font-medium text-zinc-500">terminal — sem Orchid Git</span>
            </div>
            <div className="space-y-2.5 p-6 font-mono text-sm">
              {current.terminal.map((line, i) => (
                <p key={i} className={line.startsWith("#") ? "text-zinc-600" : "text-zinc-300"}>
                  {line.startsWith("$") ? (
                    <>
                      <span className="text-fuchsia-400">$</span>
                      {line.slice(1)}
                    </>
                  ) : (
                    line
                  )}
                </p>
              ))}
              <p className="pt-3 text-xs text-zinc-600">// vs. alguns cliques no Orchid Git ✨</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
