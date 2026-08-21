import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import momoLogo from "@/assets/momo-logo-thin.svg.asset.json";

const navItems = [
  { to: "/ueber-uns", label: "ÜBER UNS" },
  { to: "/preise", label: "PREISE" },
  { to: "/kontakt", label: "KONTAKT" },
] as const;

export function SiteHeader() {
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
        <nav
          aria-label="Hauptnavigation"
          aria-hidden={!open}
          className="flex h-full flex-col items-center justify-center gap-8"
        >
          {navItems.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 80}ms` : "0ms" }}
              className={`font-display text-xl font-medium tracking-[0.12em] text-menu-overlay-foreground transition-all duration-500 hover:opacity-70 sm:text-2xl md:text-3xl ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>


      <Link to="/" className="flex flex-col items-center">
        <img
          src={momoLogo.url}
          alt="MOMO Kinderhaus"
          className="h-14 w-auto sm:h-24 md:h-28"
          width={860}
          height={238}
        />
        <span className="mt-2 font-display text-base font-normal tracking-[0.06em] sm:mt-4 sm:text-xl md:text-2xl">
          KLEINKINDERGARTEN
        </span>
      </Link>

      <p className="mt-6 font-display text-base font-bold leading-relaxed sm:mt-20 sm:text-xl md:text-2xl">
        9 Kinder, 3 Pädagoginnen, unendliche Geborgenheit.
      </p>
    </header>

  );
}
