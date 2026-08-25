import { CAMPUSES, SITE, telHref, type Campus } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { MapEmbed, MapLinks } from "@/components/sections/MapEmbed";
import { CopyAddress } from "@/components/sections/CopyAddress";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { OpeningHours } from "@/components/site/OpeningHours";

function CampusBlock({
  campus,
  lang,
  index,
}: {
  campus: Campus;
  lang: Lang;
  index: number;
}) {
  const t = getDict(lang);
  const L = t.campuses.labels;
  const name = lang === "ko" ? campus.nameKo : campus.nameEn;
  const region = lang === "ko" ? campus.regionKo : campus.regionEn;
  const address = lang === "ko" ? campus.addressKo : campus.addressEn;
  const ready = address.trim().length > 0 && campus.phone.trim().length > 0;

  return (
    <article id={campus.id} className="scroll-mt-28">
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-display text-[0.6875rem] font-extrabold tracking-[0.18em] text-ink-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="text-[1.5rem] font-bold text-navy-900 sm:text-[1.875rem]">
            {name}
          </h2>
          {campus.isHq && (
            <span className="inline-flex items-center rounded-full bg-navy-900 px-3 py-1 text-[0.6875rem] font-bold text-white">
              {t.common.hqBadge}
            </span>
          )}
          {campus.comingSoon && (
            <span className="inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-[0.6875rem] font-bold text-accent-700">
              {t.common.comingSoon}
            </span>
          )}
        </div>
        <p className="mt-2 text-[0.8125rem] font-semibold tracking-wide text-brand-600 uppercase">
          {region}
        </p>
      </Reveal>

      {!ready && (
        <Reveal>
          <div className="mt-8 flex flex-col gap-5 rounded-3xl bg-ink-50 p-8 ring-1 ring-ink-100 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[1.0625rem] font-bold text-navy-900">
                {L.preparing}
              </p>
              <p className="mt-2 max-w-xl text-[0.875rem] leading-[1.85] text-ink-600">
                {L.askHq}
              </p>
            </div>
            <Button
              href={telHref(SITE.phone.main)}
              external
              icon="phone"
              iconPosition="left"
              className="shrink-0"
            >
              {SITE.phone.main}
            </Button>
          </div>
        </Reveal>
      )}

      {ready && (
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <MapEmbed
            lang={lang}
            campus={campus}
            className="aspect-4/3 w-full sm:aspect-16/11"
          />
          <MapLinks lang={lang} campus={campus} className="mt-4" />
        </Reveal>

        <Reveal delay={90} className="lg:col-span-5">
          <div className="flex h-full flex-col gap-4">
            {campus.photo && (
              <PhotoSlot
                src={campus.photo}
                alt={name}
                caption={name}
                className="aspect-16/10 w-full rounded-[1.5rem] ring-1 ring-ink-100"
              />
            )}

            <div className="rounded-[1.5rem] bg-ink-50 p-6 ring-1 ring-ink-100">
              <div className="flex items-start justify-between gap-3">
                <h3 className="flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                  <Icon name="mapPin" size={15} />
                  {L.address}
                </h3>
                {campus.isHq && <CopyAddress lang={lang} />}
              </div>
              <p className="mt-3 text-[1rem] leading-[1.7] font-bold text-navy-900">
                {address}
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-ink-50 p-6 ring-1 ring-ink-100">
              <h3 className="flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                <Icon name="phone" size={15} />
                {L.phone}
              </h3>
              <dl className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <dt className="text-[0.8125rem] font-semibold text-ink-500">
                    {L.mainLine}
                  </dt>
                  <dd>
                    <a
                      href={telHref(campus.phone)}
                      className="-my-1.5 inline-flex items-center py-1.5 text-[1.0625rem] font-extrabold tabular-nums text-navy-900 transition-colors hover:text-brand-700"
                    >
                      {campus.phone}
                    </a>
                  </dd>
                </div>
                {campus.mobile && (
                  <div className="flex items-center justify-between border-t border-ink-200 pt-3">
                    <dt className="text-[0.8125rem] font-semibold text-ink-500">
                      {L.mobileLine}
                    </dt>
                    <dd>
                      <a
                        href={telHref(campus.mobile)}
                        className="-my-1.5 inline-flex items-center py-1.5 text-[0.9375rem] font-bold tabular-nums text-navy-800 transition-colors hover:text-brand-700"
                      >
                        {campus.mobile}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="flex-1 rounded-[1.5rem] bg-ink-50 p-6 ring-1 ring-ink-100">
              <h3 className="flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                <Icon name="clock" size={15} />
                {L.hours}
              </h3>
              <OpeningHours lang={lang} className="mt-4" />
            </div>
          </div>
        </Reveal>
      </div>
      )}
    </article>
  );
}

export function CampusesView({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const c = t.campuses;
  const multi = CAMPUSES.length > 1;

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        description={c.hero.description}
        crumbLabel={t.nav[3].label}
      >
        {multi ? (
          <ul className="flex flex-wrap gap-2">
            {CAMPUSES.map((campus) => (
              <li key={campus.id}>
                <a
                  href={`#${campus.id}`}
                  className="inline-flex h-11 items-center gap-1.5 rounded-xl bg-white/8 px-4 text-[0.8125rem] font-bold text-white ring-1 ring-white/15 transition-all hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <Icon name="mapPin" size={15} />
                  {lang === "ko" ? campus.nameKo : campus.nameEn}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <MapLinks lang={lang} campus={CAMPUSES[0]} tone="dark" />
        )}
      </PageHero>

      {/* ── 캠퍼스별 상세 ── */}
      <Section tightTop size="wide" className="bg-white">
        <div className="space-y-20 sm:space-y-24">
          {CAMPUSES.map((campus, i) => (
            <CampusBlock key={campus.id} campus={campus} lang={lang} index={i} />
          ))}
        </div>
      </Section>

      {/* ── 찾아오시는 방법 ── */}
      <Section size="wide" className="bg-soft-mesh">
        <Reveal>
          <h2 className="text-[1.75rem] font-bold text-navy-900 sm:text-[2.125rem]">
            {c.labels.transport}
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {c.transport.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80}>
              <article className="h-full rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-100">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name={item.icon as IconName} size={22} />
                </span>
                <h3 className="mt-5 text-[1.0625rem] font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-[1.85] text-ink-600">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mt-6 flex items-start gap-2.5 rounded-2xl bg-white p-5 text-[0.8125rem] leading-relaxed text-ink-600 ring-1 ring-ink-100">
            <Icon name="car" size={17} className="mt-px shrink-0 text-brand-500" />
            <span>
              <strong className="font-bold text-navy-900">
                {c.labels.parking}
              </strong>{" "}
              {c.parkingNote}
            </span>
          </p>
        </Reveal>

        {/* 캠퍼스 관련 문의 */}
        <Reveal delay={160}>
          <div className="mt-6 flex flex-col gap-5 rounded-3xl bg-white p-8 ring-1 ring-ink-100 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Eyebrow>{c.hero.eyebrow}</Eyebrow>
              <h3 className="mt-3 text-[1.25rem] font-bold text-navy-900">
                {c.expanding.title}
              </h3>
              <p className="mt-2 max-w-xl text-[0.875rem] leading-[1.85] text-ink-600">
                {c.expanding.description}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                href={telHref(SITE.phone.main)}
                external
                icon="phone"
                iconPosition="left"
              >
                {SITE.phone.main}
              </Button>
              <Button
                href={href(lang, "contact")}
                variant="secondary"
                icon="arrowRight"
              >
                {t.common.contact}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}
