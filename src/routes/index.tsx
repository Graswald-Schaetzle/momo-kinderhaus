import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import heroVideo from "@/assets/momo-hund3.mp4.asset.json";
import heroVideoWebm from "@/assets/momo-hund3.webm.asset.json";
import heroPoster from "@/assets/momo-hund3-poster.jpg.asset.json";
import snoreAudio from "@/assets/momo-schnarchen-2.mp3.asset.json";

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
  const audioRef = useRef<HTMLAudioElement>(null);
  const [snoring, setSnoring] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.6;

    const start = () => {
      void audio
        .play()
        .then(() => setSnoring(true))
        .catch(() => setSnoring(false));
    };

    start();

    const onInteract = () => start();
    window.addEventListener("pointerdown", onInteract);
    window.addEventListener("keydown", onInteract);
    window.addEventListener("touchstart", onInteract);
    return () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("touchstart", onInteract);
    };
  }, []);

  const toggleSnore = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (snoring) {
      audio.pause();
      setSnoring(false);
    } else {
      audio.volume = 0.6;
      void audio.play().then(() => setSnoring(true)).catch(() => setSnoring(false));
    }
  };

  return (
    <main className="min-h-screen pb-40 text-center">
      <SiteHeader />

      <div className="mx-auto mt-20 w-full max-w-5xl overflow-hidden px-6 sm:px-10 md:px-14">
        <button
          type="button"
          onClick={toggleSnore}
          aria-pressed={snoring}
          aria-label={snoring ? "Schnarchen ausschalten" : "Schnarchen einschalten"}
          className="block w-full cursor-pointer"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroPoster.url}
            aria-label="Animierte Aquarell-Illustration: schlummernder Weimaraner"
            className="w-full scale-[1.06]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%), linear-gradient(to bottom, transparent 0, #000 6%, #000 94%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%), linear-gradient(to bottom, transparent 0, #000 6%, #000 94%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
            }}
          >
            <source src={heroVideoWebm.url} type="video/webm" />
            <source src={heroVideo.url} type="video/mp4" />
          </video>
        </button>
        <audio ref={audioRef} src={snoreAudio.url} loop autoPlay preload="auto" />
        <button
          type="button"
          onClick={toggleSnore}
          aria-pressed={snoring}
          aria-label={snoring ? "Schnarchen ausschalten" : "Schnarchen einschalten"}
          className="mx-auto mt-4 flex items-center justify-center text-stone-700/70 transition-opacity hover:opacity-100"
        >
          {snoring ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.59 3L19 9.41 17.59 8l-2.41 2.41L12.77 8l-1.41 1.41L13.77 12l-2.41 2.41L12.77 16l2.41-2.41L17.59 16 19 14.59 16.59 12z" />
            </svg>
          )}
        </button>
      </div>

      <p className="mt-8 px-6 font-display text-3xl font-normal leading-tight sm:text-4xl md:text-5xl">START JAN. 2027</p>

    </main>
  );
}

