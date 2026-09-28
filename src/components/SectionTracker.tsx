import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { track } from "../utils/track";

const MIN_DWELL_MS = 200;
const FLUSH_INTERVAL_MS = 15000;

function scrollPct(): number {
  const height = Math.max(
    document.documentElement.scrollHeight,
    document.body ? document.body.scrollHeight : 0,
  );
  if (height <= 0) return 0;
  const current = window.scrollY + window.innerHeight;
  return Math.max(0, Math.min(100, Math.round((current / height) * 100)));
}

export default function SectionTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    let active: Record<string, number> = {};
    let totals: Record<string, number> = {};

    const flush = () => {
      const now = Date.now();
      for (const key of Object.keys(active)) {
        totals[key] = (totals[key] ?? 0) + (now - active[key]);
        active[key] = now;
      }
      const pct = scrollPct();
      for (const key of Object.keys(totals)) {
        if (totals[key] >= MIN_DWELL_MS) {
          track("section_engage", { sectionKey: key, durationMs: totals[key], scrollPct: pct });
        }
        totals[key] = 0;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const now = Date.now();
        for (const entry of entries) {
          const key = entry.target.getAttribute("data-analytics-section");
          if (!key) continue;
          if (entry.isIntersecting) {
            if (!(key in active)) active[key] = now;
          } else if (key in active) {
            totals[key] = (totals[key] ?? 0) + (now - active[key]);
            delete active[key];
          }
        }
      },
      { threshold: 0.25 },
    );

    const observeAll = () =>
      Array.from(document.querySelectorAll("[data-analytics-section]")).forEach((el) =>
        observer.observe(el),
      );

    const onConsent = () => {
      active = {};
      totals = {};
      observer.disconnect();
      observeAll();
    };

    observeAll();
    const interval = window.setInterval(flush, FLUSH_INTERVAL_MS);
    const onVisibility = () => {
      if (document.visibilityState === "hidden") flush();
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", flush);
    window.addEventListener("analytics-consent", onConsent);

    return () => {
      flush();
      observer.disconnect();
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", flush);
      window.removeEventListener("analytics-consent", onConsent);
    };
  }, [pathname]);

  return null;
}
