import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Das Team des MOMO Kleinkindergartens in Remseck am Neckar: drei feste Pädagoginnen für neun Kinder von 1-3 Jahren.",
      },
      { property: "og:title", content: "Team — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Drei feste Pädagoginnen, neun Kinder, viel Geborgenheit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

function Team() {
  return (
    <main className="min-h-screen pb-32 text-center">
      <SiteHeader />
      <section className="px-6 pt-20 sm:px-10 md:px-14">
        <h1 className="font-display text-xl font-normal tracking-[0.04em] sm:text-3xl md:text-4xl">
          Team
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
          Inhalt folgt.
        </p>
      </section>
    </main>
  );
}
