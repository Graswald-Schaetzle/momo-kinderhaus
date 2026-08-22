import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import naeheImg from "@/assets/ueberuns-naehe.png";
import ruheImg from "@/assets/ueberuns-ruhe.png";
import ruheVideo from "@/assets/film-ruhe-kerze-quer.mp4.asset.json";
import ganzheitlichkeitImg from "@/assets/ueberuns-ganzheitlichkeit-2.png";
import ganzheitlichkeitVideo from "@/assets/film-ganzheitlichkeit-gras-quer.mp4.asset.json";
import naturImg from "@/assets/ueberuns-natur.png";
import eigenstaendigkeitImg from "@/assets/ueberuns-eigenstaendigkeit.png";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Nähe, Ruhe, Ganzheitlichkeit, Natur und Eigenständigkeit: 9 Kinder, 3 Pädagoginnen — bewusst familiäre Betreuung für Kinder von 1-3 Jahren in Remseck am Neckar.",
      },
      { property: "og:title", content: "Über uns — MOMO Kleinkindergarten Remseck" },
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

type Section = {
  title: string;
  image: string;
  video?: string;
  alt: string;
  text: string;
};

const sections: Section[] = [
  {
    title: "Nähe",
    image: naeheImg,
    alt: "Aquarell-Zeichnung: Pädagogin hält ein Kind im Arm",
    text: "9 Kinder, betreut von 3 festen Pädagoginnen: Das ermöglicht echte Aufmerksamkeit von Bezugspersonen, die euer Kind wirklich kennen. Genau das schenkt eurem Kind die Zuneigung, die es in den ersten Jahren am meisten braucht.",
  },
  {
    title: "Ruhe",
    image: ruheImg,
    video: ruheVideo.url,
    alt: "Filmaufnahme: eine Hand zündet eine Kerze an und pustet sie wieder aus",
    text: "Bei uns hat der Tag einen ruhigen Klang. Verlässliche Rituale und feste Bezugspersonen geben Halt statt Hektik und schenken eurem Kind: innere Ruhe statt Reizüberflutung. Und natürlich darf dabei gelacht, getobt und laut gespielt werden.",
  },
  {
    title: "Ganzheitlichkeit",
    image: ganzheitlichkeitImg,
    video: ganzheitlichkeitVideo.url,
    alt: "Filmaufnahme: barfüßige Kinderfüße laufen durch Gras im Garten",
    text: "Ein Kind ist mehr als sein Verhalten, es ist Körper, Gefühl und Geist zugleich. Deshalb gehört bei uns Barfußlaufen genauso zum Alltag wie gemeinsames Singen. Alle Gefühle bekommen Raum und werden sorgsam begleitet. So darf sich euer Kind mit all seinen Facetten entfalten.",
  },
  {
    title: "Natur",
    image: naturImg,
    alt: "Aquarell-Zeichnung: Baum mit Vogel und Kind auf einem Baumstamm",
    text: "Unser Garten ist ein echter kleiner Naturraum: klettern auf Baumstämmen, matschen mit Wasser und Erde, Vögel beobachten. Kinder lernen hier mit allen Sinnen und in ihrem eigenen Tempo draußen, wo Entdecken noch echt ist.",
  },
  {
    title: "Eigenständigkeit",
    image: eigenstaendigkeitImg,
    alt: "Aquarell-Zeichnung: Kind mit erhobener Hand neben Bauklötzen",
    text: "Bei uns gibt es feste Rituale und klare Regeln, die dem Alltag Halt geben. Innerhalb dieses verlässlichen Rahmens soll euer Kind aber mitbestimmen, zum Beispiel welches Lied im Morgenkreis gesungen wird oder womit im Freispiel gebaut und gestaltet wird. So erlebt es von Anfang an: Meine Meinung zählt, in einem Rahmen der mich sicher fühlen lässt.",
  },
];

function UeberUns() {
  return (
    <main className="min-h-screen pb-32">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-6 pt-12 sm:px-10 md:px-14">
        {sections.map((section, i) => {
          const imageFirst = i % 2 === 1;
          return (
            <section
              key={section.title}
              className="grid grid-cols-2 items-center gap-4 py-8 sm:gap-10 sm:py-14"
            >
              <div
                className={`${
                  imageFirst ? "order-2" : "order-1"
                } ${imageFirst ? "pl-2 sm:pl-6" : "pr-2 sm:pr-6"} text-left`}
              >
                <h2 className="font-display text-xl font-normal leading-tight tracking-[0.04em] sm:text-3xl md:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-2 text-justify text-[11px] leading-snug sm:mt-4 sm:text-base sm:leading-relaxed md:text-lg">
                  {section.text}
                </p>
              </div>

              <div
                className={`${imageFirst ? "order-1 flex justify-start" : "order-2 flex justify-end"}`}
              >
                {section.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={section.alt}
                    width={1200}
                    height={675}
                    className="aspect-video w-full max-w-[200px] rounded-sm object-cover sm:max-w-[360px] md:max-w-lg"
                  >
                    <source src={section.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={section.image}
                    alt={section.alt}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="w-full max-w-[140px] object-contain mix-blend-multiply sm:max-w-[260px] md:max-w-sm"
                  />
                )}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
