import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToId } from "../utils/scroll";

const links = [
  { label: "Recursos", to: "/#recursos" },
  { label: "Fluxo de trabalho", to: "/#fluxo" },
  { label: "Por que Orchid", to: "/#comparativo" },
  { label: "Download", to: "/#download" },
];

const pageLinks = [{ label: "Sobre", to: "/sobre" }];

function OrchidMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-600 p-1.5 shadow-lg shadow-fuchsia-500/30 ${className}`}
    >
      <img src="/images/logo-128.png" alt="Orchid Git" className="h-full w-full object-cover" />
    </div>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 12);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, scrollY / max) : 0);

      if (!onHome) {
        setActive("");
        return;
      }

      const threshold = scrollY + 140;
      let current = "";
      for (const link of links) {
        const id = link.to.split("#")[1];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= threshold) current = link.to;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (to: string) => {
    setOpen(false);
    const id = to.split("#")[1];
    if (id) requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <nav aria-label="Navegação principal" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => handleNav("/#top")}>
          <OrchidMark />
          <span className="text-lg font-extrabold tracking-tight text-white">
            Orchid <span className="text-fuchsia-400">Git</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => handleNav(link.to)}
              aria-current={active === link.to ? "true" : undefined}
              className={`text-sm font-medium transition ${
                active === link.to ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {pageLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={pathname === link.to ? "page" : undefined}
              className={`text-sm font-medium transition ${
                pathname === link.to ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/#download"
            onClick={() => handleNav("/#download")}
            className="rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:shadow-fuchsia-500/40 hover:brightness-110"
          >
            Baixar grátis
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-black/95 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNav(link.to)}
                aria-current={active === link.to ? "true" : undefined}
                className={`text-sm font-medium ${
                  active === link.to ? "text-white" : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {pageLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.to ? "page" : undefined}
                className={`text-sm font-medium ${
                  pathname === link.to ? "text-white" : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#download"
              onClick={() => handleNav("/#download")}
              className="mt-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Baixar grátis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
