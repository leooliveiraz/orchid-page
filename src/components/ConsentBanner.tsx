import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { applyConsent } from "../analytics";
import { getConsent, setStoredConsent } from "../utils/consent";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  if (!visible) return null;

  const decide = (granted: boolean) => {
    setStoredConsent(granted ? "granted" : "denied");
    applyConsent(granted);
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Aviso de cookies e analytics"
      className="fixed inset-x-0 bottom-0 z-[90] p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-black/85 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-zinc-300">
          Usamos analytics para entender como o site é usado e melhorá-lo. Nada de publicidade e
          nada é coletado antes da sua escolha.{" "}
          <Link
            to="/privacidade"
            className="text-fuchsia-300 underline-offset-4 hover:underline"
          >
            Saiba mais
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => decide(false)}
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className="rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:brightness-110"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
