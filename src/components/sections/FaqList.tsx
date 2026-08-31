"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { getDict, type Lang } from "@/content";
import { Icon } from "@/components/ui/Icon";

export function FaqList({
  lang,
  limit,
  showFilter = true,
}: {
  lang: Lang;
  limit?: number;
  showFilter?: boolean;
}) {
  const t = getDict(lang);
  const [category, setCategory] = useState<string>("all");
  const [open, setOpen] = useState<number | null>(0);

  /* 답변이 아직 준비되지 않은 항목은 화면에 내보내지 않습니다 */
  const items = t.faq.items
    .filter((item) => item.a.trim().length > 0)
    .filter((item) => category === "all" || item.category === category)
    .slice(0, limit);

  const allLabel = lang === "ko" ? "전체" : "All";

  return (
    <div>
      {showFilter && (
        <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {[{ key: "all", label: allLabel }, ...t.faq.categories].map((c) => {
            const active = category === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => {
                  setCategory(c.key);
                  setOpen(0);
                }}
                aria-pressed={active}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2.5 text-[0.8125rem] font-bold transition-all",
                  active
                    ? "bg-brand-600 text-white shadow-glow"
                    : "bg-white text-ink-600 ring-1 ring-ink-200 hover:text-brand-700 hover:ring-brand-200",
                )}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      )}

      <ul className={cn("space-y-3", showFilter && "mt-8")}>
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li
              key={item.q}
              className={cn(
                "overflow-hidden rounded-2xl bg-white ring-1 transition-all duration-300",
                isOpen
                  ? "shadow-card ring-brand-200"
                  : "shadow-soft ring-ink-100 hover:ring-brand-200",
              )}
            >
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span
                    className={cn(
                      "mt-px inline-flex size-6 shrink-0 items-center justify-center rounded-lg font-display text-[0.75rem] font-extrabold transition-colors",
                      isOpen
                        ? "bg-brand-600 text-white"
                        : "bg-brand-50 text-brand-600",
                    )}
                  >
                    Q
                  </span>
                  <span
                    className={cn(
                      "flex-1 text-[0.9375rem] leading-snug font-bold transition-colors sm:text-[1.0625rem]",
                      isOpen ? "text-brand-700" : "text-navy-900",
                    )}
                  >
                    {item.q}
                  </span>
                  <Icon
                    name="chevronDown"
                    size={19}
                    className={cn(
                      "mt-0.5 shrink-0 text-ink-400 transition-transform duration-300",
                      isOpen && "rotate-180 text-brand-600",
                    )}
                  />
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex gap-4 px-5 pb-6 sm:px-7 sm:pb-7">
                    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-lg bg-mint-100 font-display text-[0.75rem] font-extrabold text-mint-600">
                      A
                    </span>
                    <p className="flex-1 text-[0.875rem] leading-[1.9] whitespace-pre-line text-ink-600 sm:text-[0.9375rem]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
