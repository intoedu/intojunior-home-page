import { cn } from "@/lib/utils";
import { asset } from "@/config/site";
import { Icon, type IconName } from "./Icon";

/**
 * 사진 자리.
 * - src 를 넣으면 실제 사진이 표시됩니다. (예: src="/photos/classroom.jpg")
 * - 비워두면 "사진 준비 중" 자리 표시가 나타납니다.
 */
export function PhotoSlot({
  src,
  alt,
  caption,
  label,
  icon = "sparkle",
  tone = "light",
  className,
  imgClassName,
  priority,
}: {
  src?: string;
  alt: string;
  caption?: string;
  label?: string;
  icon?: IconName;
  /** 어두운 배경 위에 놓일 때는 "dark" */
  tone?: "light" | "dark";
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden bg-ink-100", className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(src)}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : undefined}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
        {caption && (
          <span className="absolute bottom-3 left-3 rounded-full bg-navy-950/70 px-3 py-1 text-[0.6875rem] font-medium text-white backdrop-blur-sm">
            {caption}
          </span>
        )}
      </div>
    );
  }

  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden text-center",
        dark
          ? "bg-white/[0.06] backdrop-blur-sm"
          : "bg-linear-160 from-brand-100 via-brand-50 to-mint-100",
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <div
        aria-hidden
        className={dark ? "absolute inset-0 opacity-90" : "absolute inset-0 opacity-[0.55]"}
        style={{
          backgroundImage: dark
            ? "radial-gradient(circle at 26% 16%, rgba(52,101,255,0.35) 0, transparent 52%), radial-gradient(circle at 78% 82%, rgba(20,184,163,0.24) 0, transparent 54%)"
            : "radial-gradient(circle at 22% 18%, rgba(52,101,255,0.22) 0, transparent 48%), radial-gradient(circle at 82% 80%, rgba(20,184,163,0.20) 0, transparent 50%)",
        }}
      />
      <div
        className={cn(
          "relative flex size-12 items-center justify-center rounded-2xl",
          dark
            ? "bg-white/12 text-white/80 ring-1 ring-white/20"
            : "bg-white/80 text-brand-500 shadow-soft ring-1 ring-brand-100",
        )}
      >
        <Icon name={icon} size={22} />
      </div>
      <div className="relative px-4">
        <p
          className={cn(
            "text-[0.8125rem] font-semibold",
            dark ? "text-white/90" : "text-navy-900",
          )}
        >
          {caption ?? alt}
        </p>
        {label && (
          <p
            className={cn(
              "mt-1 text-[0.6875rem] font-medium tracking-wide",
              dark ? "text-white/45" : "text-ink-400",
            )}
          >
            {label}
          </p>
        )}
      </div>
    </div>
  );
}
