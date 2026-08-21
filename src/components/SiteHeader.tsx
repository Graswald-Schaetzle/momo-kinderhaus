import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import momoLogo from "@/assets/momo-logo-thin.svg.asset.json";

const navItems = [
  { to: "/ueber-uns", label: "ÜBER UNS" },
  { to: "/team", label: "TEAM", sub: true },
  { to: "/paedagogik", label: "PÄDAGOGIK" },
  { to: "/raeume", label: "RÄUME" },
  { to: "/preise", label: "PREISE" },
  { to: "/kontakt", label: "KONTAKT" },
] as const;

export function SiteHeader({ showSlogan = false }: { showSlogan?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="px-6 pt-4 text-center sm:px-10 sm:pt-8 md:px-14">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        className="fixed left-4 top-4 z-[60] flex h-10 w-10 items-center justify-center sm:left-6 sm:top-6"
      >
        <span className="relative block h-5 w-7">
          <span
            className={`absolute left-0 block h-[2px] w-7 transition-all duration-300 ease-out ${
              open
                ? "top-1/2 rotate-45 bg-menu-overlay-foreground"
                : "top-0 bg-foreground"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-[2px] w-7 -translate-y-1/2 bg-foreground transition-all duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-[2px] w-7 transition-all duration-300 ease-out ${
              open
                ? "top-1/2 -rotate-45 bg-menu-overlay-foreground"
                : "top-full bg-foreground"
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-50 bg-menu-overlay transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="no-underline flex flex-col items-center pt-10 sm:pt-12"
          >
            <img
              src={momoLogo.url}
              alt="MOMO Kleinkindergarten"
              className={`h-12 w-auto transition-opacity duration-300 sm:h-16 md:h-20 ${
                open ? "opacity-100" : "opacity-0"
              }`}
              width={860}
              height={238}
            />
            <span
              className={`mt-1 font-display text-xs font-normal tracking-[0.06em] text-black transition-opacity duration-300 sm:mt-2 sm:text-sm md:text-base ${
                open ? "opacity-100" : "opacity-0"
              }`}
            >
              KLEINKINDERGARTEN
            </span>
          </Link>
          <nav
            aria-label="Hauptnavigation"
            aria-hidden={!open}
            className="flex flex-1 flex-col items-center justify-center gap-6 sm:gap-8"
          >
            {navItems.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${120 + i * 80}ms` : "0ms" }}
                className={`no-underline font-display text-xl font-medium tracking-[0.12em] text-menu-overlay-foreground transition-all duration-500 hover:opacity-70 sm:text-2xl md:text-3xl ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <footer className="pb-8 pt-4 text-center sm:pb-12">
            <p className="font-display text-sm font-bold leading-relaxed text-menu-overlay-foreground sm:text-lg">
              Mo-Fr. 07.45 - 13.45 Uhr
              <br />
              <a
                href="https://maps.app.goo.gl/GWdSX3YC2a3odJEM8"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:opacity-70"
              >
                Mozartstraße 4, 71686 Remseck am Neckar
              </a>
              <br />
              <Link
                to="/kontakt"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="no-underline hover:opacity-70"
              >
                Kontakt
              </Link>
            </p>
          </footer>
        </div>
      </div>


      <Link to="/" className="no-underline flex flex-col items-center">
        <img
          src={momoLogo.url}
          alt="MOMO Kinderhaus"
          className="h-10 w-auto sm:h-24 md:h-28"
          width={860}
          height={238}
        />
        <span className="mt-1 font-display text-sm font-normal tracking-[0.06em] sm:mt-4 sm:text-xl md:text-2xl">
          KLEINKINDERGARTEN
        </span>
      </Link>

      {showSlogan && (
        <p className="mt-8 max-w-md px-4 font-display text-sm font-bold leading-relaxed sm:mt-12 sm:text-lg md:mt-16 md:text-xl">
          Neun Kinder, Drei Pädagoginnen, unendliche Geborgenheit.
        </p>
      )}
    </header>

  );
}
