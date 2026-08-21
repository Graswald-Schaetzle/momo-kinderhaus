import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen flex-col pb-8 text-center">
      <SiteHeader />
      <section className="flex flex-1 flex-col items-center px-6 pt-10 sm:px-10 md:px-14">
        <h2 className="font-display text-2xl font-normal tracking-[0.08em] sm:text-3xl">
          Kontakt
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm font-bold leading-relaxed sm:text-lg">
          {"\n"}
        </p>

        {submitted ? (
          <div className="mx-auto mt-10 max-w-xl rounded-lg bg-black/5 px-8 py-10">
            <p className="font-display text-lg font-normal leading-relaxed">
              Vielen Dank! Ihre Nachricht ist bei uns eingegangen.
              <br />
              Wir melden uns in Kürze bei Ihnen.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-5 text-left"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold sm:text-base">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-md border border-black/20 bg-white/50 px-4 py-3 text-sm focus:border-black/40 focus:outline-none sm:text-base"
                placeholder="Ihr Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold sm:text-base">
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-md border border-black/20 bg-white/50 px-4 py-3 text-sm focus:border-black/40 focus:outline-none sm:text-base"
                placeholder="ihre@email.de"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold sm:text-base">
                Nachricht
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="resize-none rounded-md border border-black/20 bg-white/50 px-4 py-3 text-sm focus:border-black/40 focus:outline-none sm:text-base"
                placeholder="Ihre Nachricht an uns"
              />
            </div>
            <button
              type="submit"
              className="mt-2 self-center rounded-md bg-black/80 px-10 py-3 font-display text-sm font-bold tracking-[0.08em] text-white transition-colors hover:bg-black sm:text-base"
            >
              Absenden
            </button>
          </form>
        )}
      </section>
      <SiteFooter />
    </main>
  );
}
