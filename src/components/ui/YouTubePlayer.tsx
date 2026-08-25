"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

/**
 * 유튜브 재생기.
 * 클릭하기 전에는 유튜브를 불러오지 않아 페이지가 가볍고,
 * 방문자가 재생 버튼을 눌렀을 때만 연결됩니다.
 */
export function YouTubePlayer({
  videoId,
  title,
  lang,
  placeholder,
  className,
}: {
  videoId: string;
  title: string;
  lang: "ko" | "en";
  /** 영상 ID 가 없을 때 보여줄 문구 */
  placeholder: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-[1.5rem] bg-navy-950 shadow-lift ring-1 ring-navy-900/10",
        className,
      )}
    >
      {videoId && playing ? (
        <iframe
          key={videoId}
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&hl=${lang}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <>
          {videoId ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
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
                  "radial-gradient(38rem 22rem at 20% 10%, rgba(61,82,184,0.5) 0, transparent 62%), radial-gradient(30rem 20rem at 88% 88%, rgba(41,180,202,0.34) 0, transparent 60%)",
              }}
            />
          )}
          <div className="absolute inset-0 bg-navy-950/35" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
            {videoId ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="inline-flex size-[4.5rem] items-center justify-center rounded-full bg-white/95 text-brand-600 shadow-lift transition-transform duration-300 hover:scale-110"
                aria-label={title}
              >
                <Icon name="play" size={26} className="ml-1" />
              </button>
            ) : (
              <>
                <span className="inline-flex size-[4.5rem] items-center justify-center rounded-full bg-white/12 text-white/80 ring-1 ring-white/25 backdrop-blur-sm">
                  <Icon name="play" size={26} className="ml-1" />
                </span>
                <p className="text-[0.875rem] font-semibold text-white/80">
                  {placeholder}
                </p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
