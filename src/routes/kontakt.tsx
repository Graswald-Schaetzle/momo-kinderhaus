import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — MOMO Kinderhaus Remseck" },
      {
        name: "description",
        content:
          "Kontakt zum MOMO Kinderhaus, Mozartstraße 4, 71686 Remseck am Neckar. Eröffnung Januar 2027.",
      },
      { property: "og:title", content: "Kontakt — MOMO Kinderhaus Remseck" },
      {
        property: "og:description",
        content: "Mozartstraße 4, 71686 Remseck am Neckar. Eröffnung Januar 2027.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontakt" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <main className="min-h-screen pb-32 text-center">
      <SiteHeader />
      <section className="px-6 pt-20 sm:px-10 md:px-14">
        <h2 className="text-base font-bold sm:text-lg">Kontakt</h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-bold leading-relaxed sm:text-lg">
          MOMO Kinderhaus
          <br />
          <a
            href="https://maps.app.goo.gl/GWdSX3YC2a3odJEM8"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Mozartstraße 4, 71686 Remseck am Neckar
          </a>
        </p>
      </section>
    </main>
  );
}
