import type { ReactNode } from "react";

export default function Page({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative pb-24 pt-36 lg:pt-44">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-zinc-400">{subtitle}</p>}
        <div className="mt-10 space-y-6 leading-relaxed text-zinc-300">{children}</div>
      </div>
    </section>
  );
}
