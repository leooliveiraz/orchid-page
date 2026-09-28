import { hasConsent } from "./utils/consent";

const LOGLY_SITE_ID = "orchidgit-com";
const SITE_ANALYTICS_KEY = "ak_udIGQpIDm5AyyaVphqlAlBFWiYNmKIOT0QVNFOj989g";
const SITE_ANALYTICS_SRC = "https://analytics.orchidgit.com/js/analytics.js";

export function initAnalytics(): void {
  if (!import.meta.env.PROD) return;
  applyConsent(hasConsent());
}

export function applyConsent(granted: boolean): void {
  if (!import.meta.env.PROD || !granted) return;
  initSiteAnalytics();
  initLogly();
  window.dispatchEvent(new Event("analytics-consent"));
}

function initSiteAnalytics(): void {
  if (document.querySelector("script[data-key]")) return;

  const script = document.createElement("script");
  script.src = SITE_ANALYTICS_SRC;
  script.async = true;
  script.dataset.key = SITE_ANALYTICS_KEY;
  script.dataset.autoClick = "true";
  script.dataset.outbound = "true";
  script.dataset.download = "true";
  script.dataset.images = "true";
  script.dataset.sections = "false";
  script.dataset.scroll = "true";
  document.head.appendChild(script);
}

function initLogly(): void {
  if (document.querySelector("script[data-site]")) return;

  const script = document.createElement("script");
  script.src = `https://logly.uk/p.js?s=${LOGLY_SITE_ID}`;
  script.async = true;
  script.dataset.site = LOGLY_SITE_ID;
  document.head.appendChild(script);
}
