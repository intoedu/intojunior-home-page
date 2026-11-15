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
  /** 펼쳐진 상위 메뉴 번호 (데스크톱) */
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  /** 모바일 드로어에서 펼쳐진 항목 */
  const [openMobile, setOpenMobile] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Esc 로 펼침 메뉴 닫기 */
  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx]);

  const altLang: Lang = lang === "ko" ? "en" : "ko";
  const linkTo = (slug: string, hash: string) =>
    `${href(lang, slug)}${hash ? `#${hash}` : ""}`;

  /**
   * 지금 보고 있는 페이지가 속한 상위 메뉴인지.
   * 하위 항목의 페이지(예: 자주 묻는 질문)에 있어도 상위(문의·예약)를 켭니다.
   */
  const isActive = (item: (typeof t.menu)[number]) =>
    current === item.slug ||
    item.groups.some((g) => g.items.some((s) => s.slug === current));

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100"
      >
        {t.common.skipToContent}
      </a>

      <header
        className="sticky top-0 z-50 border-b border-ink-200 bg-white/96 backdrop-blur-xl"
        onMouseLeave={() => setOpenIdx(null)}
      >
        <div
          className="mx-auto flex max-w-[61.25rem] items-center gap-4 px-5"
          style={{ height: "var(--header-h)" }}
        >
          <Link
            href={href(lang)}
            className="-m-1 shrink-0 rounded p-1"
            aria-label={SITE.brand.fullKo}
          >
            <Logo lang={lang} />
          </Link>

          {/* 데스크톱 내비게이션 — 상위 메뉴에 올리면 아래로 펼쳐집니다 */}
          <nav
            className="ml-auto hidden self-stretch lg:flex"
            aria-label={t.common.menu}
          >
            {t.menu.map((item, i) => {
              /* 펼친 메뉴가 있으면 그쪽을, 없으면 현재 페이지를 켭니다 */
              const highlighted =
                openIdx !== null ? openIdx === i : isActive(item);
              return (
                /* 상위 메뉴도 눌러서 해당 페이지로 이동합니다 (올리면 펼쳐짐) */
                <Link
                  key={item.slug}
                  href={href(lang, item.slug)}
                  onMouseEnter={() => setOpenIdx(i)}
                  onFocus={() => setOpenIdx(i)}
                  onClick={() => setOpenIdx(null)}
                  className={cn(
                    "flex items-center px-7 text-[0.96875rem] font-bold transition-colors",
                    highlighted
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-700 hover:text-navy-900",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-5">
            {/* 언어 전환 */}
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

            {/* 예약 CTA */}
            <a
              href={SITE.booking || telHref(SITE.phone.main)}
              {...(SITE.booking
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="hidden h-11 items-center gap-1.5 rounded-full bg-brand-600 px-5 text-[0.875rem] font-bold text-white transition-colors hover:bg-brand-700 sm:inline-flex"
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
              className="inline-flex size-11 items-center justify-center rounded-full text-navy-900 ring-1 ring-ink-200 transition-colors hover:bg-ink-50 lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>

        {/* 펼침 패널 */}
        {openIdx !== null && t.menu[openIdx].groups.length > 0 && (
          <div className="absolute inset-x-0 top-full hidden border-b border-ink-200 bg-white lg:block">
            <div className="mx-auto max-w-[61.25rem] px-5 py-10">
              <div className="flex gap-16">
                {t.menu[openIdx].groups.map((group) => (
                  <div key={group.title} className="min-w-[11rem]">
                    <h2 className="border-b border-ink-200 pb-3 text-[1.0625rem] font-extrabold text-navy-900">
                      {group.title}
                    </h2>
                    <ul className="mt-4 space-y-1">
                      {group.items.map((sub) => (
                        <li key={sub.label + sub.hash}>
                          <Link
                            href={linkTo(sub.slug, sub.hash)}
                            onClick={() => setOpenIdx(null)}
                            className="-mx-2 flex items-center gap-2 rounded px-2 py-2 text-[0.9375rem] text-ink-600 transition-colors hover:text-brand-700"
                          >
                            <span className="text-ink-300">·</span>
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
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
              <li>
                <Link
                  href={href(lang)}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-ink-200 py-4 text-lg font-bold text-navy-900"
                >
                  {t.nav[0].label}
                  <Icon name="chevronRight" size={18} className="text-ink-300" />
                </Link>
              </li>

              {t.menu.map((item, i) => {
                const expanded = openMobile === i;
                return (
                  <li key={item.slug}>
                    {/* 이름을 누르면 페이지로, 화살표를 누르면 하위 메뉴가 펼쳐집니다 */}
                    <div className="flex items-center border-b border-ink-200">
                      <Link
                        href={href(lang, item.slug)}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex-1 py-4 text-lg font-bold transition-colors",
                          isActive(item) ? "text-brand-700" : "text-navy-900",
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-label={`${item.label} ${t.common.menu}`}
                        onClick={() => setOpenMobile(expanded ? null : i)}
                        className="-mr-2 inline-flex size-12 items-center justify-center"
                      >
                        <Icon
                          name="chevronDown"
                          size={20}
                          className={cn(
                            "text-ink-400 transition-transform",
                            expanded && "rotate-180",
                          )}
                        />
                      </button>
                    </div>
                    {expanded && (
                      <div className="border-b border-ink-200 bg-ink-50 px-1 py-3">
                        {item.groups.map((group) => (
                          <div key={group.title} className="px-3 py-2">
                            <p className="text-[0.75rem] font-extrabold tracking-[0.04em] text-ink-400 uppercase">
                              {group.title}
                            </p>
                            <ul className="mt-2 space-y-0.5">
                              {group.items.map((sub) => (
                                <li key={sub.label + sub.hash}>
                                  <Link
                                    href={linkTo(sub.slug, sub.hash)}
                                    onClick={() => {
                                      setOpen(false);
                                      setOpenMobile(null);
                                    }}
                                    className="block py-2 text-[0.9375rem] text-ink-700"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
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
