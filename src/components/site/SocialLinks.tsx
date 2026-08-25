import { cn } from "@/lib/utils";
import { SITE } from "@/config/site";
import { Icon, type IconName } from "@/components/ui/Icon";

type Entry = { key: string; url: string; icon: IconName; label: string };

/** 주소가 입력된 채널만 표시합니다. (src/config/site.ts 에서 관리) */
export function socialEntries(): Entry[] {
  const s = SITE.social;
  const all: Entry[] = [
    { key: "instagram", url: s.instagram, icon: "instagram", label: "Instagram" },
    { key: "youtube", url: s.youtube, icon: "youtube", label: "YouTube" },
    { key: "blog", url: s.blog, icon: "blog", label: "Naver Blog" },
    { key: "kakao", url: s.kakao, icon: "kakao", label: "KakaoTalk" },
    { key: "naverPlace", url: s.naverPlace, icon: "mapPin", label: "Naver Place" },
  ];
  return all.filter((e) => e.url.trim().length > 0);
}

export function SocialLinks({
  tone = "light",
  className,
  size = 18,
}: {
  tone?: "light" | "dark";
  className?: string;
  size?: number;
}) {
  const entries = socialEntries();
  if (entries.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {entries.map((e) => (
        <li key={e.key}>
          <a
            href={e.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={e.label}
            title={e.label}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-xl transition-all hover:-translate-y-0.5",
              tone === "dark"
                ? "bg-white/8 text-white/80 ring-1 ring-white/15 hover:bg-white/15 hover:text-white"
                : "bg-white text-ink-500 ring-1 ring-ink-200 hover:text-brand-600 hover:ring-brand-200",
            )}
          >
            <Icon name={e.icon} size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
