import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/paedagogik/")({
  head: () => ({
    meta: [
      { title: "Pädagogik — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Pädagogischer Ansatz im MOMO Kleinkindergarten in Remseck am Neckar: bewusst familiäre Betreuung für Kinder von 1-3 Jahren.",
      },
    ],
  }),
  component: PaedagogikIndex,
});

function PaedagogikIndex() {
  return (
    <section className="px-6 pt-20 text-center sm:px-10 md:px-14">
      <h2 className="text-base font-bold sm:text-lg">Pädagogik</h2>
      <p className="mx-auto mt-6 max-w-xl text-base font-bold leading-relaxed sm:text-lg">
        Inhalt folgt.
      </p>
    </section>
  );
}
