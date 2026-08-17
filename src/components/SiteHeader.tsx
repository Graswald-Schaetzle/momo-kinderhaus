import { Link } from "@tanstack/react-router";
import momoLogo from "@/assets/momo-logo-web.svg.asset.json";

const navItems = [
  { to: "/ueber-uns", label: "ÜBER UNS" },
  { to: "/preise", label: "PREISE" },
  { to: "/kontakt", label: "KONTAKT" },
] as const;

export function SiteHeader() {
  return (
    <header className="px-6 pt-16 text-center sm:px-10 md:px-14">
      <div className="flex flex-col items-center">
        <img
          src={momoLogo.url}
          alt="MOMO Kinderhaus"
          className="h-16 w-auto sm:h-20 md:h-24"
          width={860}
          height={238}
        />
        <span className="mt-3 text-xl font-normal tracking-[0.06em] sm:text-2xl md:text-3xl">
          KINDERHAUS
        </span>
      </div>

      <h1 className="mt-8 text-3xl font-normal leading-tight sm:text-4xl md:text-5xl">1-3 Jahre</h1>

      <p className="mt-12 text-base font-bold leading-relaxed sm:text-lg">
        Mo-Fr. 07.45 - 13.45 Uhr
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

      <p className="mt-4 text-base font-bold leading-relaxed sm:text-lg">
        bewusst familiär gestaltet: 9 Kinder, 3 Pädagoginnen, viel Geborgenheit.
      </p>

      <nav
        className="mt-16 flex w-full items-center justify-between text-base font-bold sm:text-lg"
        aria-label="Hauptnavigation"
      >
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="underline-offset-4 hover:underline"
            activeProps={{ className: "underline" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
