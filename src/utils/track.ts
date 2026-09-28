import { hasConsent } from "./consent";

type AnalyticsProperties = Record<string, unknown>;

declare global {
  interface Window {
    analytics?: {
      track?: (name: string, properties?: AnalyticsProperties) => void;
    };
  }
}

type PendingEvent = { name: string; properties?: AnalyticsProperties };

const pending: PendingEvent[] = [];
let pollTimer: number | undefined;

function deliver(): boolean {
  if (!hasConsent()) {
    pending.length = 0;
    return true;
  }
  const analytics = window.analytics;
  if (!analytics || typeof analytics.track !== "function") return false;
  while (pending.length > 0) {
    const event = pending.shift()!;
    analytics.track(event.name, event.properties);
  }
  return true;
}

function startPolling(): void {
  if (pollTimer !== undefined) return;
  let attempts = 0;
  pollTimer = window.setInterval(() => {
    attempts += 1;
    if (deliver() || attempts >= 40) {
      window.clearInterval(pollTimer);
      pollTimer = undefined;
    }
  }, 250);
}

export function track(name: string, properties?: AnalyticsProperties): void {
  if (typeof window === "undefined") return;
  if (!hasConsent()) return;

  const analytics = window.analytics;
  if (analytics && typeof analytics.track === "function") {
    analytics.track(name, properties);
    return;
  }

  pending.push({ name, properties });
  startPolling();
}
