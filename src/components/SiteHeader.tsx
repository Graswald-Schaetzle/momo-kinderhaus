import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/ueber-uns", label: "ÜBER UNS" },
  { to: "/preise", label: "PREISE" },
  { to: "/kontakt", label: "KONTAKT" },
] as const;

export function SiteHeader() {
  return (
    <header className="px-6 pt-16 sm:px-10 md:px-14">
      <p className="text-base font-bold leading-snug sm:text-lg">
        MOMO Kinderhaus
        <br />
        1-3 Jahre
      </p>

      <p className="mt-8 text-base font-bold leading-snug sm:text-lg">
        Mo-Fr. 07.45- 13.45 Uhr
        <br />
        Mozartstraße 4, 71686 Remseck am Neckar
      </p>

      <nav className="mt-12 text-base font-bold sm:text-lg" aria-label="Hauptnavigation">
        {navItems.map((item, i) => (
          <span key={item.to}>
            {i > 0 && <span className="px-2 select-none">//</span>}
            <Link
              to={item.to}
              className="underline-offset-4 hover:underline"
              activeProps={{ className: "underline" }}
            >
              {item.label}
            </Link>
          </span>
        ))}
      </nav>
    </header>
  );
}
