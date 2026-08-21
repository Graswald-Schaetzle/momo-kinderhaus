import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/paedagogik")({
  head: () => ({
    meta: [
      { title: "Pädagogik — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Pädagogischer Ansatz im MOMO Kleinkindergarten in Remseck am Neckar: bewusst familiäre Betreuung für Kinder von 1-3 Jahren.",
      },
      { property: "og:title", content: "Pädagogik — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Pädagogischer Ansatz im MOMO Kleinkindergarten, Mozartstraße 4, Remseck am Neckar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/paedagogik" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/paedagogik" }],
  }),
  component: Paedagogik,
});

function Paedagogik() {
  return (
    <main className="min-h-screen pb-32 text-center">
      <SiteHeader />
      <section className="px-6 pt-20 sm:px-10 md:px-14">
        <h2 className="text-base font-bold sm:text-lg">Pädagogik</h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-bold leading-relaxed sm:text-lg">
          Inhalt folgt.
        </p>
      </section>
    </main>
  );
}
