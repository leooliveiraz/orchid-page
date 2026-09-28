export type ConsentValue = "granted" | "denied";

const CONSENT_KEY = "analytics_consent";

export function getConsent(): ConsentValue | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function setStoredConsent(value: ConsentValue): void {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    return;
  }
}

export function resetConsent(): void {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    return;
  }
}

export function hasConsent(): boolean {
  return getConsent() === "granted";
}
