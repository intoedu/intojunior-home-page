"use client";

import { useState } from "react";
import { SITE } from "@/config/site";
import { getDict, type Lang } from "@/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/**
 * 유튜브 영상 섹션.
 * 클릭하기 전에는 유튜브를 불러오지 않아 페이지가 빠릅니다.
 * 영상 ID 는 src/config/site.ts 의 video.id 에 넣어주세요.
 */
export function VideoSection({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const v = t.home.video;
  const [playing, setPlaying] = useState(false);
  const id = SITE.video.id;

  return (
    <Section size="wide" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow={v.eyebrow}
            title={v.title}
            description={v.description}
          />
          {SITE.social.youtube && (
            <Reveal delay={90}>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-[0.875rem] font-bold text-brand-600 transition-colors hover:text-brand-700"
              >
                <Icon name="youtube" size={18} />
                {lang === "ko" ? "유튜브 채널 바로가기" : "Visit our YouTube channel"}
                <Icon name="arrowUpRight" size={15} />
              </a>
            </Reveal>
          )}
        </div>

        <Reveal delay={80} className="lg:col-span-8">
          <div className="relative aspect-video overflow-hidden rounded-[1.75rem] bg-navy-950 shadow-lift ring-1 ring-navy-900/10">
            {id && playing ? (
              <iframe
                className="absolute inset-0 size-full"
                src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&hl=${lang}`}
                title={v.title.replace(/\n/g, " ")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <>
                {id ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                    alt=""
                    className="absolute inset-0 size-full object-cover opacity-90"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-80"
                    style={{
                      backgroundImage:
                        "radial-gradient(38rem 22rem at 20% 10%, rgba(52,101,255,0.45) 0, transparent 62%), radial-gradient(30rem 20rem at 88% 88%, rgba(20,184,163,0.32) 0, transparent 60%)",
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-navy-950/35" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
                  {id ? (
                    <button
                      type="button"
                      onClick={() => setPlaying(true)}
                      className="group inline-flex size-[4.5rem] items-center justify-center rounded-full bg-white/95 text-brand-600 shadow-lift transition-transform duration-300 hover:scale-110"
                      aria-label={lang === "ko" ? "영상 재생" : "Play video"}
                    >
                      <Icon name="play" size={26} className="ml-1" />
                    </button>
                  ) : (
                    <>
                      <span className="inline-flex size-[4.5rem] items-center justify-center rounded-full bg-white/12 text-white/80 ring-1 ring-white/25 backdrop-blur-sm">
                        <Icon name="play" size={26} className="ml-1" />
                      </span>
                      <p className="text-[0.875rem] font-semibold text-white/80">
                        {t.common.videoPlaceholder}
                      </p>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
