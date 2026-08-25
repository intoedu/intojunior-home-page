import { SITE, telHref } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { OpeningHours } from "@/components/site/OpeningHours";
import { MapEmbed, MapLinks } from "./MapEmbed";

export function LocationPreview({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const l = t.home.locationPreview;

  return (
    <Section size="wide" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={l.eyebrow}
            title={l.title}
            description={l.description}
          />

          <Reveal delay={80}>
            <dl className="mt-9 space-y-5">
              <div className="flex gap-3.5">
                <dt className="mt-0.5 shrink-0 text-brand-500">
                  <Icon name="mapPin" size={19} />
                  <span className="sr-only">{t.location.labels.address}</span>
                </dt>
                <dd className="text-[0.9375rem] leading-[1.8] font-semibold text-navy-900">
                  {lang === "ko" ? SITE.address.ko : SITE.address.en}
                </dd>
              </div>
              <div className="flex gap-3.5">
                <dt className="mt-0.5 shrink-0 text-brand-500">
                  <Icon name="phone" size={19} />
                  <span className="sr-only">{t.location.labels.phone}</span>
                </dt>
                <dd className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <a
                    href={telHref(SITE.phone.main)}
                    className="text-[0.9375rem] font-bold tabular-nums text-navy-900 transition-colors hover:text-brand-700"
                  >
                    {SITE.phone.main}
                  </a>
                  <a
                    href={telHref(SITE.phone.mobile)}
                    className="text-[0.875rem] tabular-nums text-ink-500 transition-colors hover:text-brand-700"
                  >
                    {SITE.phone.mobile}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={140}>
            <MapLinks lang={lang} className="mt-7" />
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8">
              <Button
                href={href(lang, "location")}
                variant="secondary"
                icon="arrowRight"
              >
                {t.common.directions}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={90}>
            <MapEmbed lang={lang} className="aspect-4/3 w-full sm:aspect-16/10" />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-4 rounded-3xl bg-ink-50 p-6 ring-1 ring-ink-100">
              <h3 className="flex items-center gap-2 text-[0.8125rem] font-bold tracking-wide text-navy-900 uppercase">
                <Icon name="clock" size={16} className="text-brand-500" />
                {t.location.labels.hours}
              </h3>
              <OpeningHours lang={lang} compact className="mt-4" />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
