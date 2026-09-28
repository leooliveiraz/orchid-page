import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import ConsentBanner from "./ConsentBanner";
import SectionTracker from "./SectionTracker";
import { scrollToId } from "../utils/scroll";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      requestAnimationFrame(() => scrollToId(id));
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#08070b] text-white antialiased selection:bg-fuchsia-500/30">
      <ScrollManager />
      <SectionTracker />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <ConsentBanner />
    </div>
  );
}
