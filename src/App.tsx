import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Comparison from "./components/Comparison";
import Testimonials from "./components/Testimonials";
import Download from "./components/Download";
import Footer from "./components/Footer";

const stats = [
  { value: "10x", label: "mais rápido em operações complexas" },
  { value: "100%", label: "gratuito" },
  { value: "3", label: "sistemas operacionais suportados" },
  { value: "0", label: "comandos decorados de cor" },
];

function StatsBar() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.02] py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-2 text-xs font-medium leading-snug text-zinc-500 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#08070b] text-white antialiased selection:bg-fuchsia-500/30">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Workflow />
        <Comparison />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
