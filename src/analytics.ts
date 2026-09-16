const LOGLY_SITE_ID = "orchidgit-com";

export function initAnalytics() {
  if (!import.meta.env.PROD || document.querySelector("script[data-site]")) return;

  const script = document.createElement("script");
  script.src = `https://logly.uk/p.js?s=${LOGLY_SITE_ID}`;
  script.async = true;
  script.dataset.site = LOGLY_SITE_ID;
  document.head.appendChild(script);
}
