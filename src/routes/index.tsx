import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import heroVideo from "@/assets/momo-hund.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOMO Kinderhaus — Kinderbetreuung 1-3 Jahre in Remseck" },
      {
        name: "description",
        content:
          "MOMO Kinderhaus in Remseck am Neckar: bewusst familiär mit 9 Kindern und 3 Pädagoginnen. Mo-Fr. 07.45-13.45 Uhr. Eröffnung Januar 2027.",
      },
      { property: "og:title", content: "MOMO Kinderhaus — Kinderbetreuung 1-3 Jahre in Remseck" },
      {
        property: "og:description",
        content: "Bewusst familiär gestaltet: 9 Kinder, 3 Pädagoginnen, viel Geborgenheit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen pb-40 text-center">
      <SiteHeader />

      <div className="mx-auto mt-20 w-full max-w-5xl px-6 sm:px-10 md:px-14">
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Animierte Aquarell-Illustration: schlummernder Weimaraner"
          className="w-full mix-blend-multiply"
        />
      </div>

      <p className="mt-8 px-6 text-base font-bold sm:px-10 md:px-14">Eröffnung Januar 2027</p>

      <p className="mx-auto mt-16 max-w-2xl px-6 text-base font-bold sm:px-10 md:px-14">
        bewusst familiär gestaltet: 9 Kinder, 3 Pädagoginnen, viel Geborgenheit.
      </p>
    </main>
  );
}

