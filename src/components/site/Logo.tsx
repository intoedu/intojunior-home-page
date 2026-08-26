import { cn } from "@/lib/utils";
import { SITE, asset } from "@/config/site";
import type { Lang } from "@/content";

/**
 * 로고.
 * 실제 로고 이미지 파일을 받으면 `public/logo.svg` 로 넣고
 * <LogoMark /> 부분을 <img src="/logo.svg" ... /> 로 바꾸면 됩니다.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="ij-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3465ff" />
          <stop offset="55%" stopColor="#1c46f5" />
          <stop offset="100%" stopColor="#14b8a3" />
        </linearGradient>
      </defs>
      <rect width="44" height="44" rx="13" fill="url(#ij-mark)" />
      {/* 말풍선 = 말하기 */}
      <path
        d="M13 14.5h18a2 2 0 0 1 2 2v10.2a2 2 0 0 1-2 2h-8.6L16 34v-5.3h-3a2 2 0 0 1-2-2V16.5a2 2 0 0 1 2-2z"
        fill="rgba(255,255,255,0.16)"
      />
      {/* 성장 화살표 = 실력 상승 */}
      <path
        d="M15.6 25.3l4.7-4.8 3.3 3.2 5.6-5.7"
        fill="none"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.6 17.6h4.4v4.4"
        fill="none"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  lang,
  tone = "light",
  className,
}: {
  lang: Lang;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  const alt = lang === "ko" ? SITE.brand.fullKo : SITE.brand.fullEn;

  return (
    <span className={cn("flex items-center", className)}>
      {/* 로고 원본이 흰 바탕이라, 어두운 배경에서는 흰 판 위에 올립니다 */}
      <span
        className={cn(
          "inline-flex items-center rounded-xl transition-colors",
          dark && "bg-white px-2.5 py-1.5 shadow-soft",
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/logo.jpg")}
          alt={alt}
          width={501}
          height={299}
          className="h-9 w-auto sm:h-10"
        />
      </span>
    </span>
  );
}
