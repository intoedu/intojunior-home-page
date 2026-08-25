import { SITE, telHref } from "@/config/site";
import { getDict, type Lang } from "@/content";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { MapEmbed, MapLinks } from "@/components/sections/MapEmbed";
import { CopyAddress } from "@/components/sections/CopyAddress";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { OpeningHours } from "@/components/site/OpeningHours";

export function LocationView({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const l = t.location;

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={l.hero.eyebrow}
        title={l.hero.title}
        description={l.hero.description}
        crumbLabel={t.nav[3].label}
      >
        <MapLinks lang={lang} tone="dark" />
      </PageHero>

      {/* ── 지도 + 정보 ── */}
      <Section size="wide" className="bg-white">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <MapEmbed lang={lang} className="aspect-4/3 w-full sm:aspect-16/11" />
          </Reveal>

          <Reveal delay={90} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-4">
              {/* 주소 */}
              <div className="rounded-[1.5rem] bg-ink-50 p-6 ring-1 ring-ink-100">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                    <Icon name="mapPin" size={15} />
                    {l.labels.address}
                  </h2>
                  <CopyAddress lang={lang} />
                </div>
                <p className="mt-3 text-[1.0625rem] leading-[1.7] font-bold text-navy-900">
                  {lang === "ko" ? SITE.address.ko : SITE.address.en}
                </p>
                {lang === "ko" && (
                  <p className="mt-2 text-[0.8125rem] text-ink-500">
                    {SITE.address.en}
                  </p>
                )}
              </div>

              {/* 연락처 */}
              <div className="rounded-[1.5rem] bg-ink-50 p-6 ring-1 ring-ink-100">
                <h2 className="flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                  <Icon name="phone" size={15} />
                  {l.labels.phone}
                </h2>
                <dl className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <dt className="text-[0.8125rem] font-semibold text-ink-500">
                      {l.labels.mainLine}
                    </dt>
                    <dd>
                      <a
                        href={telHref(SITE.phone.main)}
                        className="text-[1.0625rem] font-extrabold tabular-nums text-navy-900 transition-colors hover:text-brand-700"
                      >
                        {SITE.phone.main}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-ink-200 pt-3">
                    <dt className="text-[0.8125rem] font-semibold text-ink-500">
                      {l.labels.mobileLine}
                    </dt>
                    <dd>
                      <a
                        href={telHref(SITE.phone.mobile)}
                        className="text-[0.9375rem] font-bold tabular-nums text-navy-800 transition-colors hover:text-brand-700"
                      >
                        {SITE.phone.mobile}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* 운영시간 */}
              <div className="flex-1 rounded-[1.5rem] bg-ink-50 p-6 ring-1 ring-ink-100">
                <h2 className="flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                  <Icon name="clock" size={15} />
                  {l.labels.hours}
                </h2>
                <OpeningHours lang={lang} className="mt-4" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── 찾아오시는 방법 ── */}
      <Section size="wide" className="bg-soft-mesh">
        <Reveal>
          <h2 className="text-[1.75rem] font-bold text-navy-900 sm:text-[2.125rem]">
            {l.labels.transport}
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {l.transport.map((item, i) => (
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
                {l.labels.parking}
              </strong>{" "}
              {l.parkingNote}
            </span>
          </p>
        </Reveal>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}
