import {
  type Campus,
  campusMapLinks,
  telHref,
} from "@/config/site";
import { getDict, type Lang } from "@/content";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

/** 캠퍼스 한 곳을 보여주는 카드 (홈·캠퍼스 안내 공용) */
export function CampusCard({
  campus,
  lang,
  showPhoto = true,
  className,
}: {
  campus: Campus;
  lang: Lang;
  showPhoto?: boolean;
  className?: string;
}) {
  const t = getDict(lang);
  const L = t.campuses.labels;
  const links = campusMapLinks(campus);
  const name = lang === "ko" ? campus.nameKo : campus.nameEn;
  const region = lang === "ko" ? campus.regionKo : campus.regionEn;
  const address = lang === "ko" ? campus.addressKo : campus.addressEn;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:ring-brand-200",
        className,
      )}
    >
      {showPhoto && (
        <PhotoSlot
          src={campus.photo || undefined}
          alt={name}
          caption={name}
          label={campus.photo ? undefined : t.common.photoPlaceholder}
          icon="building"
          className="aspect-16/10 w-full"
        />
      )}

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[0.6875rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
            {region}
          </span>
          {campus.isHq && (
            <span className="inline-flex items-center rounded-full bg-navy-900 px-2.5 py-0.5 text-[0.625rem] font-bold text-white">
              {t.common.hqBadge}
            </span>
          )}
          {campus.comingSoon && (
            <span className="inline-flex items-center rounded-full bg-accent-100 px-2.5 py-0.5 text-[0.625rem] font-bold text-accent-700">
              {t.common.comingSoon}
            </span>
          )}
        </div>

        <h3 className="mt-2 text-[1.25rem] font-bold text-navy-900">{name}</h3>

        <dl className="mt-5 space-y-3 text-[0.875rem]">
          <div className="flex gap-3">
            <dt className="mt-0.5 shrink-0 text-brand-500">
              <Icon name="mapPin" size={17} />
              <span className="sr-only">{L.address}</span>
            </dt>
            <dd className="leading-[1.7] text-ink-700">{address}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="mt-0.5 shrink-0 text-brand-500">
              <Icon name="phone" size={17} />
              <span className="sr-only">{L.phone}</span>
            </dt>
            <dd className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <a
                href={telHref(campus.phone)}
                className="font-bold tabular-nums text-navy-900 transition-colors hover:text-brand-700"
              >
                {campus.phone}
              </a>
              {campus.mobile && (
                <a
                  href={telHref(campus.mobile)}
                  className="text-[0.8125rem] tabular-nums text-ink-500 transition-colors hover:text-brand-700"
                >
                  {campus.mobile}
                </a>
              )}
            </dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <a
            href={telHref(campus.phone)}
            className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-4 text-[0.8125rem] font-bold text-white transition-colors hover:bg-brand-700"
          >
            <Icon name="phone" size={15} />
            {L.callCampus}
          </a>
          <a
            href={links.naver}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl px-4 text-[0.8125rem] font-bold text-navy-900 ring-1 ring-ink-200 transition-colors hover:text-brand-700 hover:ring-brand-200"
          >
            <Icon name="mapPin" size={15} />
            {L.viewOnMap}
          </a>
        </div>
      </div>
    </article>
  );
}
