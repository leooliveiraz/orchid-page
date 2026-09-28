type AnalyticsProperties = Record<string, unknown>;

declare global {
  interface Window {
    analytics?: {
      track?: (name: string, properties?: AnalyticsProperties) => void;
    };
  }
}

export function track(name: string, properties?: AnalyticsProperties): void {
  if (typeof window === "undefined") return;
  window.analytics?.track?.(name, properties);
}
