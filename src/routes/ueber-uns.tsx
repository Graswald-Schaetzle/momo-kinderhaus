import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import naeheImg from "@/assets/ueberuns-naehe.png";
import ruheImg from "@/assets/ueberuns-ruhe.png";
import ganzheitlichkeitImg from "@/assets/ueberuns-ganzheitlichkeit.png";
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

const sections = [
  {
    title: "Nähe",
    image: naeheImg,
    alt: "Aquarell-Zeichnung: Pädagogin hält ein Kind im Arm",
    text: "9 Kinder, betreut von 3 festen Pädagoginnen: Das ermöglicht echte Aufmerksamkeit von Bezugspersonen, die euer Kind wirklich kennen. Genau das schenkt eurem Kind die Zuneigung, die es in den ersten Jahren am meisten braucht.",
  },
  {
    title: "Ruhe",
    image: ruheImg,
    alt: "Aquarell-Zeichnung: schlafendes Kind unter einem Mond",
    text: "Bei uns hat der Tag einen ruhigen Klang. Verlässliche Rituale und feste Bezugspersonen geben Halt statt Hektik und schenken eurem Kind genau das, was es in den ersten Jahren am meisten braucht: innere Ruhe statt Reizüberflutung. Und natürlich darf dabei gelacht, getobt und laut gespielt werden.",
  },
  {
    title: "Ganzheitlichkeit",
    image: ganzheitlichkeitImg,
    alt: "Aquarell-Zeichnung: barfüßiges, singendes Kind",
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
              className={`grid grid-cols-1 items-center gap-6 py-10 sm:gap-12 sm:py-16 md:grid-cols-2 ${
                imageFirst ? "pl-8 md:pl-0" : "pr-8 md:pr-0"
              }`}
            >
              <div
                className={`${imageFirst ? "order-2 md:order-2" : "order-1 md:order-1"} ${
                  imageFirst ? "md:pl-6" : "md:pr-6"
                }`}
              >
                <h2 className="font-display text-3xl font-normal leading-tight tracking-[0.04em] sm:text-4xl md:text-5xl">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-prose text-base leading-relaxed sm:mt-6 sm:text-lg">
                  {section.text}
                </p>
              </div>

              <div className={`${imageFirst ? "order-1 md:order-1" : "order-2 md:order-2"} ${
                imageFirst ? "pr-4 md:pr-0" : "pl-4 md:pl-0"
              }`}>
                <img
                  src={section.image}
                  alt={section.alt}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="w-2/3 max-w-xs object-contain mix-blend-multiply sm:w-full sm:max-w-sm md:mx-auto"
                />
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
