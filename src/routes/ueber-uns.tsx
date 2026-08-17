import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns — MOMO Kinderhaus Remseck" },
      {
        name: "description",
        content:
          "MOMO Kinderhaus in Remseck am Neckar: 9 Kinder, 3 Pädagoginnen, bewusst familiäre Betreuung für Kinder von 1-3 Jahren.",
      },
      { property: "og:title", content: "Über uns — MOMO Kinderhaus Remseck" },
      {
        property: "og:description",
        content: "Bewusst familiär: 9 Kinder, 3 Pädagoginnen, viel Geborgenheit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ueber-uns" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ueber-uns" }],
  }),
  component: UeberUns,
});

function UeberUns() {
  return (
    <main className="min-h-screen pb-32 text-center">
      <SiteHeader />
      <section className="px-6 pt-20 sm:px-10 md:px-14">
        <h2 className="text-base font-bold sm:text-lg">Über uns</h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-bold leading-relaxed sm:text-lg">
          Inhalt folgt.
        </p>
      </section>
    </main>
  );
}
