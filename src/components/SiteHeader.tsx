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
      <p className="flex items-center justify-center gap-3 text-base font-bold leading-snug sm:text-lg">
        <img
          src={momoLogo.url}
          alt="MOMO"
          className="h-8 w-auto sm:h-10"
          width={860}
          height={238}
        />
        <span>Kinderhaus</span>
      </p>
      <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">1-3 Jahre</h1>

      <p className="mt-8 text-base font-bold leading-snug sm:text-lg">
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

      <nav
        className="mt-12 flex w-full items-center justify-between text-base font-bold sm:text-lg"
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
