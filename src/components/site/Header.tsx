"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SITE, telHref } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";

/** 현재 경로에서 슬러그를 추출 ( "/en/about/" → "about" ) */
function slugFromPath(pathname: string, lang: Lang): string {
  let p = pathname.replace(/\/+$/, "");
  if (lang === "en") p = p.replace(/^\/en/, "");
  return p.replace(/^\//, "");
}

export function Header({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const pathname = usePathname() ?? "/";
  const current = slugFromPath(pathname, lang);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;
  const altLang: Lang = lang === "ko" ? "en" : "ko";

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100"
      >
        {t.common.skipToContent}
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "border-b border-ink-100 bg-white/85 backdrop-blur-xl supports-backdrop-filter:bg-white/75"
            : "border-b border-transparent bg-transparent",
        )}
        style={{ height: "var(--header-h)" }}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center gap-4 px-5 sm:px-8">
          <Link
            href={href(lang)}
            className="-m-1 shrink-0 rounded-xl p-1"
            aria-label={SITE.brand.fullKo}
          >
            <Logo lang={lang} tone={solid ? "light" : "dark"} />
          </Link>

          {/* 데스크톱 내비게이션 */}
          <nav
            className="ml-auto hidden items-center gap-0.5 lg:flex"
            aria-label={t.common.menu}
          >
            {t.nav.map((item) => {
              const active = current === item.slug;
              return (
                <Link
                  key={item.slug || "home"}
                  href={href(lang, item.slug)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-xl px-3.5 py-2 text-[0.875rem] font-semibold transition-colors",
                    solid
                      ? active
                        ? "text-brand-700"
                        : "text-ink-700 hover:text-brand-600"
                      : active
                        ? "text-white"
                        : "text-white/75 hover:text-white",
                  )}
                >
                  {item.label}
                  {active && (
                    <span
                      className={cn(
                        "absolute inset-x-3.5 -bottom-px h-0.5 rounded-full",
                        solid ? "bg-brand-600" : "bg-white",
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-4">
            {/* 언어 전환 */}
            <Link
              href={href(altLang, current)}
              aria-label={`${t.common.langSwitchAria}: ${t.common.langLabel}`}
              className={cn(
                "hidden h-10 items-center gap-1.5 rounded-xl px-3 text-[0.8125rem] font-bold transition-colors sm:inline-flex",
                solid
                  ? "text-ink-600 ring-1 ring-ink-200 hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200"
                  : "text-white/85 ring-1 ring-white/25 hover:bg-white/10 hover:text-white",
              )}
            >
              <Icon name="globe" size={15} />
              {t.common.langLabel}
            </Link>

            {/* 전화 (데스크톱) */}
            <a
              href={telHref(SITE.phone.main)}
              className={cn(
                "hidden h-10 items-center gap-2 rounded-xl px-3.5 text-[0.8125rem] font-bold tabular-nums transition-colors xl:inline-flex",
                solid
                  ? "text-navy-900 hover:text-brand-700"
                  : "text-white/90 hover:text-white",
              )}
            >
              <Icon name="phone" size={15} />
              {SITE.phone.main}
            </a>

            <a
              href={SITE.booking || telHref(SITE.phone.main)}
              {...(SITE.booking
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={cn(
                "hidden h-10 items-center gap-1.5 rounded-xl px-4 text-[0.8125rem] font-bold transition-all hover:-translate-y-0.5 sm:inline-flex",
                solid
                  ? "bg-brand-600 text-white shadow-glow hover:bg-brand-700"
                  : "bg-white text-navy-900 shadow-lift hover:bg-brand-50",
              )}
            >
              <Icon name={SITE.booking ? "calendar" : "phone"} size={15} />
              {t.common.book}
            </a>

            {/* 모바일 메뉴 버튼 */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.common.close : t.common.menu}
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-xl transition-colors lg:hidden",
                solid
                  ? "text-navy-900 ring-1 ring-ink-200 hover:bg-ink-50"
                  : "text-white ring-1 ring-white/25 hover:bg-white/10",
              )}
            >
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 드로어 */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-0 top-0 origin-top overflow-y-auto rounded-b-4xl bg-white pb-8 shadow-lift transition-all duration-300",
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0",
          )}
          style={{ paddingTop: "var(--header-h)", maxHeight: "100dvh" }}
        >
          <nav className="px-5 pt-4" aria-label={t.common.menu}>
            <ul className="flex flex-col">
              {t.nav.map((item, i) => {
                const active = current === item.slug;
                return (
                  <li key={item.slug || "home"}>
                    <Link
                      href={href(lang, item.slug)}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between border-b border-ink-100 py-4 text-lg font-bold transition-colors",
                        active ? "text-brand-700" : "text-navy-900",
                      )}
                      style={{ transitionDelay: `${i * 20}ms` }}
                    >
                      {item.label}
                      <Icon
                        name="chevronRight"
                        size={18}
                        className={active ? "text-brand-500" : "text-ink-300"}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 grid gap-2.5">
              <a
                href={telHref(SITE.phone.main)}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 text-[0.9375rem] font-bold text-white shadow-glow"
              >
                <Icon name="phone" size={17} />
                {SITE.phone.main}
              </a>
              <Link
                href={href(lang, "contact")}
                onClick={() => setOpen(false)}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-navy-900 px-5 text-[0.9375rem] font-bold text-white"
              >
                {t.common.contact}
                <Icon name="arrowRight" size={17} />
              </Link>
              <Link
                href={href(altLang, current)}
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl text-[0.875rem] font-bold text-ink-600 ring-1 ring-ink-200"
              >
                <Icon name="globe" size={16} />
                {t.common.langLabel}
              </Link>
            </div>

            <p className="mt-6 text-[0.75rem] leading-relaxed text-ink-400">
              {lang === "ko" ? SITE.address.ko : SITE.address.en}
            </p>
          </nav>
        </div>
      </div>
    </>
  );
}
