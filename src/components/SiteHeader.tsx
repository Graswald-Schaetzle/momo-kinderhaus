import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import momoLogo from "@/assets/momo-logo-web.svg.asset.json";

const navItems = [
  { to: "/ueber-uns", label: "ÜBER UNS" },
  { to: "/preise", label: "PREISE" },
  { to: "/kontakt", label: "KONTAKT" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-6 pt-16 text-center sm:px-10 md:px-14">
      <div className="fixed left-4 top-4 z-50 text-left sm:left-6 sm:top-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="flex h-10 w-10 items-center justify-center"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

        {open ? (
          <nav
            className="mt-3 flex flex-col gap-3 text-base font-bold sm:text-lg"
            aria-label="Hauptnavigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="underline-offset-4 hover:underline"
                activeProps={{ className: "underline" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>

      <div className="flex flex-col items-center">
        <img
          src={momoLogo.url}
          alt="MOMO Kinderhaus"
          className="h-16 w-auto sm:h-20 md:h-24"
          width={860}
          height={238}
        />
        <span className="mt-3 text-base font-normal tracking-[0.06em] sm:text-lg md:text-xl">
          KLEINKINDERGARTEN
        </span>
      </div>

      <p className="mt-6 text-base font-bold leading-relaxed sm:text-lg">
        9 Kinder, 3 Pädagoginnen, undendliche Geborgenheit.
      </p>

      <h1 className="mt-8 text-xl font-normal tracking-[0.06em] sm:text-2xl md:text-3xl">1-3 Jahre</h1>
    </header>

  );
}
