"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE, telHref } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { Icon } from "@/components/ui/Icon";

/** 모바일 하단 고정 CTA — 학원 사이트에서 전환율이 가장 높은 요소입니다. */
export function MobileCta({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transition-all duration-300 sm:hidden",
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-3 mb-3 grid grid-cols-2 gap-2 rounded-2xl bg-white/85 p-2 shadow-lift ring-1 ring-ink-200/70 backdrop-blur-xl">
        <a
          href={telHref(SITE.phone.main)}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-navy-900 text-[0.875rem] font-bold text-white"
        >
          <Icon name="phone" size={16} />
          {t.common.callNow}
        </a>
        <Link
          href={href(lang, "campuses")}
          className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-brand-600 text-[0.875rem] font-bold text-white"
        >
          <Icon name="mapPin" size={16} />
          {t.common.directions}
        </Link>
      </div>
    </div>
  );
}
