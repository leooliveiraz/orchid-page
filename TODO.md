# TODO — Melhorias do site Orchid Git

## Alta prioridade / ganhos rápidos
- [x] Adicionar meta tags de compartilhamento em `index.html` (ver seção SEO)
      - [x] `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
      - [x] `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
      - [x] `canonical`
      - [x] criar imagem de OG (1200x630)
- [x] Links do Footer — `Sobre`/`Contato`/`Licença`/`Privacidade` agora são páginas; `Recursos`/`Fluxo`/`Comparativo` viram âncoras; social X aponta para `@OrchidGit`
- [x] Links mortos resolvidos — removidos Changelog, Roadmap e Discord; sem `href="#"` no código
- [x] Confirmar repositório dos downloads — confirmado: o remote é `leooliveiraz/orchid-page`

## Páginas separadas (roteamento)
- [x] Adicionado `react-router-dom` com `BrowserRouter` (`src/App.tsx`)
- [x] Páginas: `/sobre`, `/contato`, `/licenca`, `/privacidade` (+ 404 em `src/pages/`)
- [x] Layout compartilhado (`src/components/Layout.tsx`) com Navbar/Footer e scroll para âncoras
- [x] Fallback SPA no Cloudflare via `assets.not_found_handling: "single-page-application"` (Wrangler) — `_redirects` foi removido por causar loop infinito (erro 100324)
- [x] `sitemap.xml` atualizado com as novas rotas
- [x] Conteúdo de Privacidade (cobrindo Logly, cookies e LGPD)
- [ ] Preencher conteúdo real de Licença (ainda é placeholder)

## Screenshots & documentação (registrar; detalhes a definir)
- [x] Hero com screenshot real do grafo (substituiu o mockup `GraphMockup`) — `public/images/screenshots/graph.png`
- [x] Seção "Por dentro" com prints reais (`src/components/Screenshots.tsx`): changes, commit, conflict (unificado + 3-pane), rebase, cherry-pick, stash, metrics, files, settings
- [x] Capturas padronizadas (tema escuro, 2142x1298, repo demo) — via `Orchid-Git/scripts/capture-screenshots.js`
- [ ] GIF curto (5–8s) demonstrando o fluxo real
- [ ] Seção "Primeiros passos" na landing (3–4 passos)
- [ ] Seção de FAQ (cobrindo requisitos, Git mínimo, configs, updates, segurança)
- [ ] Definir hospedagem das docs completas (site à parte / README) e linkar no Footer/navbar

## SEO
- [x] `index.html` — meta tags base
      - [x] `<link rel="canonical" href="https://orchidgit.com/" />`
      - [x] `<meta name="robots" content="index,follow,max-image-preview:large" />`
      - [x] `<meta name="theme-color" content="#08070b" />`
- [x] `index.html` — Open Graph
      - [x] `og:type` = `website`
      - [x] `og:site_name` = `Orchid Git`
      - [x] `og:title` = "Orchid Git — O cliente Git feito de dev, para dev"
      - [x] `og:description` (reaproveitar a meta description atual)
      - [x] `og:url` = `https://orchidgit.com/`
      - [x] `og:image` = `https://orchidgit.com/images/og-image.png` (+ width/height/alt)
      - [x] `og:locale` = `pt_BR`
- [x] `index.html` — Twitter Card
      - [x] `twitter:card` = `summary_large_image`
      - [x] `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`
- [x] Imagem de OG dedicada 1200x630 em `public/images/og-image.png`
- [x] JSON-LD `SoftwareApplication`
      - [x] `name` = "Orchid Git", `applicationCategory` = `DeveloperApplication`
      - [x] `operatingSystem` = "Windows, Linux"
      - [x] `offers` = `{ price: "0", priceCurrency: "BRL" }`
      - [x] `downloadUrl` = página de releases; `softwareVersion` = "0.9.8"
      - [x] `url` = `https://orchidgit.com/`; `author`/`publisher` = Leonardo Rocha
- [x] `public/robots.txt`
      - [x] `Allow: /` + `Sitemap: https://orchidgit.com/sitemap.xml`
- [x] `public/sitemap.xml`
      - [x] `<loc>https://orchidgit.com/</loc>` + `lastmod`
- [x] `public/site.webmanifest`
      - [x] `name`/`short_name`, `start_url` = `/`, `theme_color` = `#08070b`,
            `background_color` = `#08070b`, `icons` 192/512
- [x] Favicon completo: `apple-touch-icon` 180x180 + `icon-192.png` + `icon-512.png`
- [ ] JSON-LD `FAQPage` (dependente da seção de FAQ)
- [ ] Validar no Rich Results Test + preview de link (OpenGraph.xyz) — requer site publicado

## Conversão
- [x] Detectar SO do visitante e destacar/reordenar o botão de download correspondente (`Download.tsx`)
- [x] Releases — decisão: exibir apenas a versão atual (`LATEST_VERSION`), sem changelog e sem link para a página do GitHub
- [x] Revisar trust bar em `Download.tsx` — removida (empresas citadas sem comprovação)

## Acessibilidade & performance
- [x] Respeitar `prefers-reduced-motion` (`index.css` + `BackToTop` usa scroll `auto`)
- [x] Estados `focus-visible` nos links/botões (`:focus-visible` global em `index.css`)
- [x] Travar scroll do body quando o menu mobile abre (`Navbar.tsx` + `aria-expanded`/`aria-controls`)
- [x] Analytics — Logly (`src/analytics.ts`, injetado só em produção via `import.meta.env.PROD`)

## Opcional / polimento
- [x] Botão "voltar ao topo" (`src/components/BackToTop.tsx`, renderizado no `App.tsx`)
- [x] Scroll progress na Navbar (barra gradiente no topo, baseada em `scrollY / max`)
- [x] `aria-current` no link ativo da navbar (detecção por seção no scroll, desktop e mobile)
