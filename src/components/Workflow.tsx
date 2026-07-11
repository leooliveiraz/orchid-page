import { useState } from "react";

const steps = [
  {
    id: "commit",
    label: "Commit",
    title: "Stage e commit sem esforço",
    desc: "Selecione arquivos, revise diffs linha a linha e escreva commits com templates inteligentes — tudo numa única tela.",
    terminal: [
      "$ git add src/App.tsx src/utils/cn.ts",
      "$ git status",
      "$ git commit -m \"feat: add cn helper\"",
    ],
    orchid: ["✓ Selecionar arquivos alterados", "✓ Revisar diff lado a lado", "✓ Escrever mensagem e commit em 1 clique"],
  },
  {
    id: "merge",
    label: "Merge",
    title: "Merges sem medo de conflito",
    desc: "Veja as duas versões lado a lado, aceite trechos com um clique e finalize o merge com total confiança.",
    terminal: [
      "$ git checkout main",
      "$ git merge feature/rebase-ui",
      "$ git mergetool",
      "$ git commit",
    ],
    orchid: ["✓ Escolher branch de destino", "✓ Editor visual de conflitos", "✓ Confirmar merge com 1 clique"],
  },
  {
    id: "rebase",
    label: "Rebase",
    title: "Rebase interativo, sem decoreba",
    desc: "Arraste commits para reordenar, marque para squash ou edite mensagens direto na lista visual.",
    terminal: [
      "$ git rebase -i HEAD~6",
      "# editar pick/squash/reword no editor",
      "# resolver conflitos manualmente",
      "$ git rebase --continue",
    ],
    orchid: ["✓ Arrastar para reordenar commits", "✓ Marcar squash/reword com um clique", "✓ Continuar com feedback visual"],
  },
  {
    id: "cherrypick",
    label: "Cherry-pick",
    title: "Cherry-pick múltiplo em lote",
    desc: "Marque quantos commits quiser, de qualquer branch, e aplique todos de uma vez na ordem certa.",
    terminal: [
      "$ git cherry-pick a1b2c3d",
      "$ git cherry-pick d4e5f6a",
      "$ git cherry-pick 7a8b9c0",
      "# repetir para cada commit...",
    ],
    orchid: ["✓ Selecionar múltiplos commits (Ctrl+click)", "✓ Escolher branch de destino", "✓ Aplicar tudo em lote, em ordem"],
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
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active === s.id
                  ? "bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white shadow-lg shadow-fuchsia-500/25"
                  : "border border-white/10 text-zinc-400 hover:border-white/25 hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-white">{current.title}</h3>
            <p className="mt-3 text-zinc-400">{current.desc}</p>

            <div className="mt-6 rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/[0.04] p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-fuchsia-300">Com Orchid Git</p>
              <ul className="space-y-2 text-sm text-zinc-200">
                {current.orchid.map((line) => (
                  <li key={line} className="flex items-start gap-2">
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
