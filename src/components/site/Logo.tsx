import { cn } from "@/lib/utils";
import { SITE, asset } from "@/config/site";
import type { Lang } from "@/content";

/**
 * 로고.
 * public/logo.png (배경 투명) 를 사용합니다.
 * 어두운 배경에서는 흰색으로 반전해 표시합니다.
 */
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/logo.png")}
        alt={alt}
        width={620}
        height={370}
        className={cn(
          "h-12 w-auto sm:h-14",
          /* 어두운 배경에서는 흰색 로고로 표시합니다 */
          dark && "brightness-0 invert",
        )}
      />
    </span>
  );
}
