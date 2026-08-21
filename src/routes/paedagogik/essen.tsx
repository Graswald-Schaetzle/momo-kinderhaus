import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/paedagogik/essen")({
  head: () => ({
    meta: [
      { title: "Essen — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Essen im MOMO Kleinkindergarten in Remseck am Neckar: frisches, kindgerechches Essen als Teil des pädagogischen Alltags.",
      },
      { property: "og:title", content: "Essen — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Essen im MOMO Kleinkindergarten, Mozartstraße 4, Remseck am Neckar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/paedagogik/essen" }],
  }),
  component: Essen,
});

function Essen() {
  return (
    <main className="min-h-screen pb-32">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 pt-12 sm:px-10 md:px-14">
        <h1 className="font-display text-center text-2xl font-normal tracking-[0.04em] sm:text-3xl md:text-4xl">
          Essen
        </h1>
        <p className="mt-6 text-center font-display text-sm leading-relaxed sm:text-base md:text-lg">
          Inhalt folgt.
        </p>
      </div>
    </main>
  );
}
