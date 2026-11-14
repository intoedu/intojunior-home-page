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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
        className="sticky top-0 z-50 border-b border-ink-200 bg-white/92 backdrop-blur-xl"
        style={{ height: "var(--header-h)" }}
      >
        <div className="mx-auto flex h-full max-w-[72.5rem] items-center gap-4 px-5">
          <Link
            href={href(lang)}
            className="-m-1 shrink-0 rounded p-1"
            aria-label={SITE.brand.fullKo}
          >
            <Logo lang={lang} size="sm" />
          </Link>

          {/* 데스크톱 내비게이션 */}
          <nav
            className="ml-auto hidden items-center gap-1 lg:flex"
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
                    "rounded px-3 py-2 text-[0.9375rem] font-bold transition-colors",
                    active
                      ? "text-navy-900"
                      : "text-ink-600 hover:text-navy-900",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-5">
            {/* 예약 CTA */}
            <a
              href={SITE.booking || telHref(SITE.phone.main)}
              {...(SITE.booking
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="hidden h-10 items-center gap-1.5 rounded-full bg-brand-600 px-5 text-[0.875rem] font-bold text-white transition-colors hover:bg-brand-700 sm:inline-flex"
            >
              <Icon name={SITE.booking ? "calendar" : "phone"} size={15} />
              {t.common.book}
            </a>

            {/* 언어 전환 — 현재 언어가 진하게 표시됩니다 */}
            <div className="hidden h-10 items-center gap-1 rounded-full px-2 ring-1 ring-ink-200 sm:inline-flex">
              <Icon name="globe" size={15} className="mx-1 text-ink-400" />
              <span className="rounded-full bg-navy-900 px-2.5 py-1 text-[0.75rem] font-extrabold text-white">
                {lang === "ko" ? "KO" : "EN"}
              </span>
              <Link
                href={href(altLang, current)}
                aria-label={`${t.common.langSwitchAria}: ${t.common.langLabel}`}
                className="rounded-full px-2.5 py-1 text-[0.75rem] font-extrabold text-ink-500 transition-colors hover:text-navy-900"
              >
                {altLang === "ko" ? "KO" : "EN"}
              </Link>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.common.close : t.common.menu}
              className="inline-flex size-10 items-center justify-center rounded-full text-navy-900 ring-1 ring-ink-200 transition-colors hover:bg-ink-50 lg:hidden"
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
            "absolute inset-0 bg-navy-950/40 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-0 top-0 overflow-y-auto border-b border-ink-200 bg-white pb-8 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          )}
          style={{ paddingTop: "var(--header-h)", maxHeight: "100dvh" }}
        >
          <nav className="px-5 pt-4" aria-label={t.common.menu}>
            <ul className="flex flex-col">
              {t.nav.map((item) => {
                const active = current === item.slug;
                return (
                  <li key={item.slug || "home"}>
                    <Link
                      href={href(lang, item.slug)}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between border-b border-ink-200 py-4 text-lg font-bold transition-colors",
                        active ? "text-brand-700" : "text-navy-900",
                      )}
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
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand-600 px-5 text-[0.9375rem] font-bold text-white"
              >
                <Icon name="phone" size={17} />
                {SITE.phone.main}
              </a>
              <Link
                href={href(lang, "contact")}
                onClick={() => setOpen(false)}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-navy-900 px-5 text-[0.9375rem] font-bold text-white"
              >
                {t.common.contact}
                <Icon name="arrowRight" size={17} />
              </Link>
              <Link
                href={href(altLang, current)}
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full text-[0.875rem] font-bold text-ink-600 ring-1 ring-ink-200"
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
