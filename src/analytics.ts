const LOGLY_SITE_ID = "orchidgit-com";
const SITE_ANALYTICS_KEY = "ak_5tSt5gI_E3jEKA_P87YjY8dQRwMDyoIeMf3BbCmKROA";
const SITE_ANALYTICS_SRC = "http://164.163.11.12/js/analytics.js";

export function initAnalytics() {
  initSiteAnalytics();
  if (!import.meta.env.PROD) return;
  initLogly();
}

function initSiteAnalytics() {
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

function initLogly() {
  if (document.querySelector("script[data-site]")) return;

  const script = document.createElement("script");
  script.src = `https://logly.uk/p.js?s=${LOGLY_SITE_ID}`;
  script.async = true;
  script.dataset.site = LOGLY_SITE_ID;
  document.head.appendChild(script);
}
