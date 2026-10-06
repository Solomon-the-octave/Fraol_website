"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGUAGES, type Lang } from "./i18n";
import { useLang, useLabel } from "./LangContext";
import { ROUTES, DARK_TOP_ROUTES, ChevronDown, type RouteDef } from "./ui";

/* Brand lockup.

   The mark is probed with an off-DOM Image() rather than rendered with an
   onError fallback: pages are statically prerendered, so a missing file fails
   before React hydrates and onError never runs — which is what left a broken
   image box in the nav. Nothing renders for the mark until it has loaded.

   It probes the COW MARK on its own, not a lockup with type baked in: the
   delivered artwork sets the wordmark inside the mark, which turns to mush at
   nav height and still reads JANKA FARMS. The symbol beside the Poppins type
   lockup is the right small-size treatment. */
function BrandLockup({ solid, brandName, brandSub }: { solid: boolean; brandName: string; brandSub: string }) {
  const [hasBadge, setHasBadge] = useState(false);

  useEffect(() => {
    const probe = new window.Image();
    probe.onload = () => setHasBadge(true);
    probe.onerror = () => setHasBadge(false);
    probe.src = "/logo/fraol-icon.png";
    return () => {
      probe.onload = null;
      probe.onerror = null;
    };
  }, []);

  /* Two colourways of the same mark: the forest green one for the solid white
     bar, the white one while the nav sits transparent over a dark header. */
  const mark = solid ? "/logo/fraol-icon.png" : "/logo/fraol-icon-light.png";

  return (
    <Link href="/" className="no-underline flex items-center shrink-0" style={{ gap: hasBadge ? 11 : 0, lineHeight: 1.15 }}>
      {hasBadge && <img src={mark} alt="" aria-hidden="true" style={{ height: 46, width: "auto", display: "block" }} />}
      <span className="flex flex-col">
        <span className="brandfont font-extrabold" style={{ fontSize: 21, letterSpacing: "0.04em", lineHeight: 1, color: solid ? "#1E3A2F" : "#fff", whiteSpace: "nowrap" }}>
          {brandName}
        </span>
        <span
          className="brandfont font-semibold brand-sub"
          style={{ fontSize: 8.5, letterSpacing: "0.17em", textTransform: "uppercase", color: "#C89B3C", marginTop: 3, whiteSpace: "nowrap" }}
        >
          {brandSub}
        </span>
      </span>
      <span className="sr-only-brand">{`${brandName} ${brandSub}`}</span>
    </Link>
  );
}

function LangSwitcher({ solid }: { solid: boolean }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang)!;

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <div className="lang-switcher" ref={ref}>
      <button className={`lang-btn${solid ? " scrolled" : ""}`} onClick={() => setOpen(!open)} aria-label="Select language">
        <span className="lang-code">{current.short}</span>
        <span className="lang-label">{current.label}</span>
        <ChevronDown />
      </button>
      {open && (
        <div className="lang-dropdown">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              className={`lang-option${l.code === lang ? " active" : ""}`}
              onClick={() => {
                setLang(l.code as Lang);
                setOpen(false);
              }}
            >
              <span className="lang-code">{l.short}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


/* A top level nav entry. Entries with children open a small panel on hover
   and on focus, so the added pages stay one row deep. */
function NavItem({ route, solid, pathname }: { route: RouteDef; solid: boolean; pathname: string }) {
  const label = useLabel();
  const [open, setOpen] = useState(false);
  const active = pathname === route.href || (route.children ?? []).some((c) => c.href === pathname);
  const color = active ? "#C89B3C" : solid ? "#1C1A12" : "rgba(255,255,255,0.85)";

  if (!route.children) {
    return (
      <Link href={route.href} className={`nav-link${active ? " active" : ""}`} style={{ color, whiteSpace: "nowrap" }}>
        {label(route.key)}
      </Link>
    );
  }

  return (
    <div
      className="nav-group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link href={route.href} className={`nav-link${active ? " active" : ""}`} style={{ color, whiteSpace: "nowrap" }}>
        {label(route.key)}
        <span className="nav-caret" aria-hidden="true">
          <ChevronDown />
        </span>
      </Link>
      {open && (
        <div className="nav-dropdown">
          {route.children.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="nav-drop-link"
              style={{ color: pathname === c.href ? "#C89B3C" : "#3D3B2E" }}
            >
              {label(c.key)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const { t } = useLang();
  const label = useLabel();
  const pathname = usePathname();
  const darkTop = DARK_TOP_ROUTES.includes(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Pages with a dark full-bleed header let the nav sit transparent on top;
     every other page gets the solid white bar from the start. */
  const solid = !darkTop || scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: solid ? "rgba(255,255,255,0.97)" : "transparent",
        boxShadow:       solid ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
        backdropFilter:  solid ? "blur(12px)" : "none",
        WebkitBackdropFilter: solid ? "blur(12px)" : "none",
      }}
    >
      <div className="nav-shell mx-auto px-8 flex items-center justify-between gap-4" style={{ height: 78 }}>
        <BrandLockup solid={solid} brandName={t.brandName} brandSub={t.brandSub} />

        <nav className="desktop-nav flex items-center">
          {ROUTES.map((r) => (
            <NavItem key={r.href} route={r} solid={solid} pathname={pathname} />
          ))}
          <LangSwitcher solid={solid} />
          <Link href="/contact" className="btn-gold nav-cta" style={{ padding: "10px 20px", fontSize: 11.5 }}>
            {t.navCta}
          </Link>
        </nav>

        <div className="mobile-burger flex items-center gap-3">
          <LangSwitcher solid={solid} />
          <button className="bg-transparent border-0 cursor-pointer p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 22,
                  height: 2,
                  marginBottom: i < 2 ? 5 : 0,
                  background: solid ? "#1C1A12" : "#fff",
                  borderRadius: 2,
                  transition: "transform 0.2s, opacity 0.2s",
                  transform: mobileOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px,5px)"
                      : i === 2
                        ? "rotate(-45deg) translate(5px,-5px)"
                        : ""
                    : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="bg-white px-8 pb-6 pt-2 border-t mobile-menu-panel" style={{ borderColor: "#DCD4C2" }}>
          {ROUTES.map((r) => (
            <div key={r.href}>
              <Link
                href={r.href}
                className="block py-3 text-sm font-medium no-underline border-b"
                style={{ borderColor: "#DCD4C2", color: pathname === r.href ? "#C89B3C" : "#1C1A12" }}
              >
                {label(r.key)}
              </Link>
              {(r.children ?? []).map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block py-2 text-sm no-underline border-b"
                  style={{ borderColor: "#EFEAE0", paddingLeft: 16, color: pathname === c.href ? "#C89B3C" : "#7A7660" }}
                >
                  {label(c.key)}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/contact" className="btn-gold mt-4 inline-flex">
            {t.navCta}
          </Link>
        </div>
      )}
    </header>
  );
}
