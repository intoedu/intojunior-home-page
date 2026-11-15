"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SITE } from "@/config/site";
import { getDict, type Lang } from "@/content";
import { formatTime, isOpenNow, todaySeoul } from "@/lib/utils";

type Row = (typeof SITE.hours)[number];

/**
 * 같은 시간대끼리 묶어 줄 수를 줄입니다.
 * 월~금 중 문을 여는 날이 모두 같은 시간이면 "평일" 로 합칩니다.
 * (site.ts 의 HOURS 에서 그때그때 계산하므로, 시간이 바뀌면 따라서 바뀝니다)
 */
function groupHours(rows: readonly Row[]) {
  const open = rows.filter((r) => !r.closed);
  const closed = rows.filter((r) => r.closed);

  const buckets = new Map<string, Row[]>();
  for (const r of open) {
    const key = `${r.open}-${r.close}`;
    const list = buckets.get(key);
    if (list) list.push(r);
    else buckets.set(key, [r]);
  }

  /** 월~금 중 문 여는 날 전부가 한 묶음에 들어가는지 */
  const openWeekdays = open.filter((r) => r.day >= 1 && r.day <= 5);
  const isAllWeekdays = (group: Row[]) =>
    group.length >= 2 &&
    group.every((r) => r.day >= 1 && r.day <= 5) &&
    group.length === openWeekdays.length;

  const groups = [...buckets.values()]
    .sort((a, b) => a[0].day - b[0].day)
    .map((group) => ({ group, weekday: isAllWeekdays(group) }));

  return { groups, closed };
}

/**
 * 운영시간.
 * 같은 시간끼리 묶어 "평일 / 토요일 / 정기휴무" 세 줄로 보여줍니다.
 * 오늘이 포함된 줄을 강조하고, 지금 영업 중인지 배지로 알려줍니다.
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
  const { groups, closed } = groupHours(SITE.hours);
  const dayName = (r: Row) => (lang === "ko" ? r.ko : r.en);
  /** 한국어는 24시간 표기가 짧고 읽기 쉬워 그대로 씁니다 */
  const time = (v: string) => (lang === "ko" ? v : formatTime(v, lang));

  const line = (
    key: string,
    label: string,
    value: string,
    isToday: boolean,
    muted = false,
  ) => (
    <div
      key={key}
      className={cn(
        "flex items-baseline justify-between gap-4 rounded-lg px-2.5 py-2.5",
        isToday ? (dark ? "bg-white/10" : "bg-brand-50") : "bg-transparent",
      )}
    >
      <dt
        className={cn(
          "shrink-0 font-semibold",
          isToday
            ? dark
              ? "text-white"
              : "text-brand-700"
            : dark
              ? "text-white/60"
              : "text-ink-600",
        )}
      >
        {label}
      </dt>
      <dd
        className={cn(
          "text-right tabular-nums",
          muted
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
        {value}
      </dd>
    </div>
  );

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

      <dl className={cn("grid", compact ? "text-[0.8125rem]" : "text-sm")}>
        {groups.map(({ group, weekday }) =>
          line(
            `${group[0].open}-${group[0].close}`,
            weekday ? t.common.weekdays : group.map(dayName).join(" · "),
            `${time(group[0].open)} – ${time(group[0].close)}`,
            today !== null && group.some((r) => r.day === today),
          ),
        )}

        {closed.length > 0 &&
          line(
            "closed",
            t.common.regularHoliday,
            closed.map(dayName).join(", "),
            today !== null && closed.some((r) => r.day === today),
            true,
          )}
      </dl>
    </div>
  );
}
