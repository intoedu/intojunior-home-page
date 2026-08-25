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
    <Section size="wide" className="bg-navy-950 text-white">
      <SectionHeading
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.description}
        tone="dark"
      />

      <div className="mt-14 space-y-8 lg:space-y-12">
        {c.items.map((item, i) => {
          const videos = CORE_PROGRAM_VIDEOS[i] ?? [];
          const current = videos[active[i]] ?? "";
          const flip = i % 2 === 1;

          return (
            <Reveal key={item.title} delay={i * 90}>
              <article className="grid items-center gap-8 rounded-[2rem] bg-white/[0.04] p-6 ring-1 ring-white/10 lg:grid-cols-12 lg:gap-12 lg:p-10">
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
                            "inline-flex h-10 items-center gap-1.5 rounded-xl px-4 text-[0.8125rem] font-bold transition-all",
                            active[i] === vi
                              ? "bg-white text-navy-900"
                              : "bg-white/8 text-white/70 ring-1 ring-white/15 hover:bg-white/15 hover:text-white",
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
                    <span className="font-display text-[0.6875rem] font-extrabold tracking-[0.2em] text-brand-300">
                      {item.no}
                    </span>
                    <span className="rounded-full bg-mint-400/15 px-3 py-1 text-[0.6875rem] font-bold text-mint-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-3 text-[1.625rem] font-extrabold tracking-[-0.03em] text-white sm:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[0.8125rem] font-semibold tracking-wide text-white/45">
                    {item.subtitle}
                  </p>

                  <p className="mt-5 text-[0.9375rem] leading-[1.9] text-white/70">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[0.875rem] leading-relaxed text-white/80"
                      >
                        <Icon
                          name="check"
                          size={15}
                          className="mt-0.5 shrink-0 text-mint-300"
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
              className="inline-flex h-12 items-center gap-2 rounded-2xl bg-white/8 px-5 text-[0.875rem] font-bold text-white ring-1 ring-white/15 transition-all hover:-translate-y-0.5 hover:bg-white/15"
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
