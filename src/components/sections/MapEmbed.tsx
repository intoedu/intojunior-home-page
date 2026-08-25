import { MAP_LINKS, SITE } from "@/config/site";
import { getDict, type Lang } from "@/content";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/** 지도 (API 키 없이 동작합니다) */
export function MapEmbed({
  lang,
  className,
}: {
  lang: Lang;
  className?: string;
}) {
  const t = getDict(lang);
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] bg-ink-100 shadow-card ring-1 ring-ink-100",
        className,
      )}
    >
      <iframe
        src={MAP_LINKS.embed(lang)}
        title={`${SITE.brand.fullKo} ${t.location.labels.address}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full border-0"
        allowFullScreen
      />
    </div>
  );
}

/** 네이버 / 카카오 / 구글 지도 바로가기 */
export function MapLinks({
  lang,
  className,
  tone = "light",
}: {
  lang: Lang;
  className?: string;
  tone?: "light" | "dark";
}) {
  const t = getDict(lang);
  const links = [
    { href: MAP_LINKS.naver, label: t.location.labels.mapNaver },
    { href: MAP_LINKS.kakao, label: t.location.labels.mapKakao },
    { href: MAP_LINKS.google, label: t.location.labels.mapGoogle },
  ];

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-11 items-center gap-1.5 rounded-xl px-4 text-[0.8125rem] font-bold transition-all hover:-translate-y-0.5",
              tone === "dark"
                ? "bg-white/8 text-white ring-1 ring-white/15 hover:bg-white/15"
                : "bg-white text-navy-900 shadow-soft ring-1 ring-ink-200 hover:text-brand-700 hover:ring-brand-200",
            )}
          >
            <Icon name="mapPin" size={15} />
            {l.label}
            <Icon name="arrowUpRight" size={13} className="opacity-50" />
          </a>
        </li>
      ))}
    </ul>
  );
}
