import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import heroVideo from "@/assets/momo-hund2.mp4.asset.json";
import heroVideoWebm from "@/assets/momo-hund2.webm.asset.json";
import heroPoster from "@/assets/momo-hund2-poster.jpg.asset.json";

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

      <div className="mx-auto mt-20 w-full max-w-5xl overflow-hidden px-6 sm:px-10 md:px-14">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster.url}
          aria-label="Animierte Aquarell-Illustration: schlummernder Weimaraner"
          className="w-full scale-[1.06]"
        >
          <source src={heroVideoWebm.url} type="video/webm" />
          <source src={heroVideo.url} type="video/mp4" />
        </video>
      </div>

      <p className="mt-8 px-6 text-3xl font-normal leading-tight sm:text-4xl md:text-5xl">START JAN. 2027</p>

    </main>
  );
}

