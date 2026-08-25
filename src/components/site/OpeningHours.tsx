"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SITE } from "@/config/site";
import { getDict, type Lang } from "@/content";
import { formatTime, isOpenNow, todaySeoul } from "@/lib/utils";

/**
 * 운영시간 표.
 * 오늘 요일을 강조하고, 현재 영업 중인지 배지로 알려줍니다.
 * (서버/클라이언트 렌더 불일치를 막기 위해 마운트 후에 오늘 정보를 표시합니다.)
 */
export function OpeningHours({
  lang,
  tone = "light",
  compact = false,
  className,
}: {
  lang: Lang;
  tone?: "light" | "dark";
  compact?: boolean;
  className?: string;
}) {
  const t = getDict(lang);
  const [today, setToday] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const sync = () => {
      setToday(todaySeoul());
      setOpen(isOpenNow(SITE.hours));
    };
    sync();
    const id = window.setInterval(sync, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const dark = tone === "dark";

  return (
    <div className={className}>
      {open !== null && (
        <span
          className={cn(
            "mb-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.6875rem] font-bold",
            open
              ? dark
                ? "bg-mint-400/15 text-mint-300"
                : "bg-mint-100 text-mint-600"
              : dark
                ? "bg-white/10 text-white/60"
                : "bg-ink-100 text-ink-500",
          )}
        >
          <span
            className={cn(
              "size-1.5 rounded-full",
              open ? "bg-mint-400" : "bg-ink-400",
            )}
          />
          {open ? t.common.openNow : t.common.closedNow}
        </span>
      )}

      <dl className={cn("grid gap-px", compact ? "text-[0.8125rem]" : "text-sm")}>
        {SITE.hours.map((row) => {
          const isToday = today === row.day;
          return (
            <div
              key={row.day}
              className={cn(
                "flex items-center justify-between rounded-lg px-2.5 py-2 transition-colors",
                isToday
                  ? dark
                    ? "bg-white/10"
                    : "bg-brand-50"
                  : "bg-transparent",
              )}
            >
              <dt
                className={cn(
                  "font-semibold",
                  isToday
                    ? dark
                      ? "text-white"
                      : "text-brand-700"
                    : dark
                      ? "text-white/60"
                      : "text-ink-600",
                )}
              >
                {lang === "ko" ? row.ko : row.en}
              </dt>
              <dd
                className={cn(
                  "tabular-nums",
                  row.closed
                    ? dark
                      ? "text-white/40"
                      : "text-ink-400"
                    : isToday
                      ? dark
                        ? "font-bold text-white"
                        : "font-bold text-brand-700"
                      : dark
                        ? "text-white/70"
                        : "text-ink-700",
                )}
              >
                {row.closed
                  ? t.common.regularHoliday
                  : `${formatTime(row.open, lang)} – ${formatTime(row.close, lang)}`}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
