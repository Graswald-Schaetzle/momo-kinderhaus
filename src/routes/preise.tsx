import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise — MOMO Kinderhaus Remseck" },
      {
        name: "description",
        content:
          "Betreuungspreise im MOMO Kinderhaus in Remseck am Neckar für Kinder von 1-3 Jahren.",
      },
      { property: "og:title", content: "Preise — MOMO Kinderhaus Remseck" },
      {
        property: "og:description",
        content: "Betreuungspreise im MOMO Kinderhaus, Mozartstraße 4, Remseck am Neckar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/preise" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/preise" }],
  }),
  component: Preise,
});

function Preise() {
  return (
    <main className="min-h-screen pb-32 text-center">
      <SiteHeader />
      <section className="px-6 pt-20 sm:px-10 md:px-14">
        <h2 className="text-base font-bold sm:text-lg">Preise</h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-bold leading-relaxed sm:text-lg">
          Inhalt folgt.
        </p>
      </section>
    </main>
  );
}
