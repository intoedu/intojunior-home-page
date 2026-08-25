import { cn } from "@/lib/utils";
import { SITE } from "@/config/site";
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
  const brand = lang === "ko" ? SITE.brand.ko : SITE.brand.en;
  const branch = lang === "ko" ? SITE.brand.branchKo : SITE.brand.branchEn;

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="size-9 sm:size-10" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[0.9375rem] font-extrabold tracking-[-0.02em] sm:text-base",
            tone === "dark" ? "text-white" : "text-navy-900",
          )}
        >
          {brand}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6875rem] font-semibold tracking-[0.02em]",
            tone === "dark" ? "text-white/65" : "text-brand-600",
          )}
        >
          {branch}
        </span>
      </span>
    </span>
  );
}
