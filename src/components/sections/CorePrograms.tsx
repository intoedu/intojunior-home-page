"use client";

import { useState } from "react";
import { CORE_PROGRAM_VIDEOS, SITE } from "@/config/site";
import { getDict, type Lang } from "@/content";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { YouTubePlayer } from "@/components/ui/YouTubePlayer";

/** 핵심 프로그램 두 가지 — 소개 영상과 함께 크게 보여줍니다 */
export function CorePrograms({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const c = t.home.core;
  const [active, setActive] = useState<number[]>(c.items.map(() => 0));

  return (
    <Section size="wide" className="bg-white">
      <SectionHeading
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.description}
      />

      <div className="mt-14 space-y-8 lg:space-y-12">
        {c.items.map((item, i) => {
          const videos = CORE_PROGRAM_VIDEOS[i] ?? [];
          const current = videos[active[i]] ?? "";
          const flip = i % 2 === 1;

          return (
            <Reveal key={item.title} delay={i * 90}>
              <article className="grid items-center gap-8 rounded bg-white p-6 ring-1 ring-ink-200 lg:grid-cols-12 lg:gap-12 lg:p-10">
                {/* 영상 */}
                <div className={cn("lg:col-span-7", flip && "lg:order-2")}>
                  <YouTubePlayer
                    videoId={current}
                    title={`${item.title} ${item.videoLabel}`}
                    lang={lang}
                    placeholder={t.common.videoPlaceholder}
                  />

                  {videos.length > 1 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {videos.map((_, vi) => (
                        <button
                          key={vi}
                          type="button"
                          onClick={() =>
                            setActive((prev) =>
                              prev.map((v, idx) => (idx === i ? vi : v)),
                            )
                          }
                          aria-pressed={active[i] === vi}
                          className={cn(
                            "inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-[0.8125rem] font-bold transition-colors",
                            active[i] === vi
                              ? "bg-brand-600 text-white"
                              : "bg-white text-ink-600 ring-1 ring-ink-200 hover:text-navy-900",
                          )}
                        >
                          <Icon name="play" size={13} />
                          {c.videoTabs[vi] ?? `${vi + 1}`}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 설명 */}
                <div className={cn("lg:col-span-5", flip && "lg:order-1")}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-[0.6875rem] font-extrabold tracking-[0.2em] text-brand-600">
                      {item.no}
                    </span>
                    <span className="rounded-full bg-mint-100 px-3 py-1 text-[0.6875rem] font-bold text-mint-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-3 text-[1.625rem] font-extrabold tracking-[-0.02em] text-navy-900 sm:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[0.8125rem] font-semibold tracking-wide text-ink-400">
                    {item.subtitle}
                  </p>

                  <p className="mt-5 text-[0.9375rem] leading-[1.8] text-ink-600">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-ink-200 pt-6">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[0.875rem] leading-relaxed text-ink-700"
                      >
                        <Icon
                          name="check"
                          size={15}
                          className="mt-0.5 shrink-0 text-mint-600"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {SITE.social.youtube && (
        <Reveal delay={140}>
          <div className="mt-10 text-center">
            <a
              href={SITE.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-[0.875rem] font-bold text-navy-900 ring-1 ring-ink-200 transition-colors hover:ring-brand-300"
            >
              <Icon name="youtube" size={18} />
              {c.channelCta}
              <Icon name="arrowUpRight" size={15} className="opacity-60" />
            </a>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
