export const RELEASES_BASE = "https://downloads.orchidgit.com/releases";

export type ReleaseAsset = {
  name?: string;
  url?: string;
  size?: number;
  sha256?: string;
  type?: string;
};

export type ReleaseManifest = {
  version?: string;
  platform?: string;
  assets?: Record<string, ReleaseAsset>;
  artifacts?: ReleaseAsset[];
};

export type DownloadLinks = {
  version: string;
  windows: string;
  deb: string;
  rpm: string;
  mac: string;
};

export const MANIFEST_PLATFORMS = ["win32", "linux", "darwin"] as const;
export type ManifestPlatform = (typeof MANIFEST_PLATFORMS)[number];

export function manifestUrl(platform: ManifestPlatform): string {
  return `${RELEASES_BASE}/latest-${platform}.json`;
}

function normalizeUrl(url: string): string {
  return url.replace(`${RELEASES_BASE}/releases/`, `${RELEASES_BASE}/`);
}

function typeOf(asset: ReleaseAsset): string {
  if (asset.type) return asset.type.replace(/^\./, "").toLowerCase();
  const m = (asset.name ?? "").match(/\.([A-Za-z0-9]+)$/);
  return m ? m[1].toLowerCase() : "";
}

function primaryAsset(manifest: ReleaseManifest | null, platform: string): string | null {
  if (!manifest) return null;
  const direct = manifest.assets?.[platform];
  if (direct?.url) return normalizeUrl(direct.url);
  const any = Object.values(manifest.assets ?? {}).find((a) => a?.url);
  return any?.url ? normalizeUrl(any.url) : null;
}

function typedAsset(manifest: ReleaseManifest | null, type: string): string | null {
  const found = manifest?.artifacts?.find((a) => a?.url && typeOf(a) === type);
  return found?.url ? normalizeUrl(found.url) : null;
}

function parseVersion(value?: string): number[] | null {
  const m = String(value ?? "").replace(/^v/, "").match(/^(\d+)\.(\d+)\.(\d+)/);
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
}

function compareVersions(a: number[], b: number[]): number {
  for (let i = 0; i < 3; i++) {
    if (a[i] !== b[i]) return a[i] - b[i];
  }
  return 0;
}

function pickVersion(...versions: (string | undefined)[]): string | null {
  let best: string | null = null;
  let bestParsed: number[] | null = null;
  for (const value of versions) {
    const parsed = parseVersion(value);
    if (!parsed) continue;
    if (!bestParsed || compareVersions(parsed, bestParsed) > 0) {
      best = `v${parsed.join(".")}`;
      bestParsed = parsed;
    }
  }
  return best;
}

export function staticLinks(version: string): DownloadLinks {
  const v = version.replace(/^v/, "");
  const dir = `${RELEASES_BASE}/v${v}`;
  return {
    version: `v${v}`,
    windows: `${dir}/${encodeURIComponent(`Orchid Git-${v} Setup.exe`)}`,
    deb: `${dir}/orchid-git_${v}_amd64.deb`,
    rpm: `${dir}/orchid-git-${v}-1.x86_64.rpm`,
    mac: `${dir}/${encodeURIComponent(`Orchid Git-darwin-arm64-${v}.zip`)}`,
  };
}

export async function fetchManifest(
  platform: ManifestPlatform,
  signal?: AbortSignal,
): Promise<ReleaseManifest | null> {
  try {
    const res = await fetch(manifestUrl(platform), { signal, cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as ReleaseManifest;
  } catch {
    return null;
  }
}

export async function fetchDownloadLinks(signal?: AbortSignal): Promise<DownloadLinks | null> {
  const [win32, linux, darwin] = await Promise.all(
    MANIFEST_PLATFORMS.map((platform) => fetchManifest(platform, signal)),
  );

  if (!win32 && !linux && !darwin) return null;

  const version = pickVersion(win32?.version, linux?.version, darwin?.version);
  if (!version) return null;

  const fallback = staticLinks(version);
  return {
    version,
    windows: primaryAsset(win32, "win32") ?? fallback.windows,
    deb: typedAsset(linux, "deb") ?? primaryAsset(linux, "linux") ?? fallback.deb,
    rpm: typedAsset(linux, "rpm") ?? fallback.rpm,
    mac: primaryAsset(darwin, "darwin") ?? fallback.mac,
  };
}
