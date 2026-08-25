import { getDict, type Lang } from "@/content";
import { PageHero } from "@/components/sections/PageHero";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { OpeningHours } from "@/components/site/OpeningHours";
import { SITE, telHref } from "@/config/site";

export function ApplyView({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const a = t.apply;

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        description={a.hero.description}
        crumbLabel={t.common.applyLong}
      />

      {/* ── 예약 절차 ── */}
      <Section size="wide" className="bg-white pb-0! sm:pb-0!">
        <Reveal>
          <h2 className="text-[1.375rem] font-bold text-navy-900 sm:text-[1.75rem]">
            {a.steps.title}
          </h2>
        </Reveal>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {a.steps.items.map((step, i) => (
            <Reveal as="li" key={step.no} delay={i * 80}>
              <div className="relative h-full rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100">
                <span className="font-display text-[0.6875rem] font-extrabold tracking-[0.18em] text-brand-600">
                  {step.no}
                </span>
                <h3 className="mt-2 text-[1rem] font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-[1.8] text-ink-600">
                  {step.description}
                </p>
                {i < a.steps.items.length - 1 && (
                  <Icon
                    name="chevronRight"
                    size={16}
                    aria-hidden
                    className="absolute top-1/2 -right-3 hidden -translate-y-1/2 text-ink-300 lg:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="mt-6 text-[0.8125rem] text-ink-500">{a.note}</p>
        </Reveal>
      </Section>

      {/* ── 신청서 ── */}
      <Section size="wide" className="bg-white">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-8">
            <InquiryForm lang={lang} mode="apply" />
          </Reveal>

          <div className="lg:col-span-4">
            <Reveal delay={100}>
              <div className="lg:sticky lg:top-28">
                <div className="rounded-[1.5rem] bg-navy-950 p-7 text-white">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white/10 text-brand-200">
                    <Icon name="phone" size={20} />
                  </span>
                  <p className="mt-5 text-[0.875rem] font-semibold text-white/60">
                    {lang === "ko"
                      ? "전화가 더 편하시다면"
                      : "Prefer to call?"}
                  </p>
                  <a
                    href={telHref(SITE.phone.main)}
                    className="mt-1 block text-[1.5rem] font-extrabold tabular-nums transition-colors hover:text-brand-200"
                  >
                    {SITE.phone.main}
                  </a>
                  <a
                    href={telHref(SITE.phone.mobile)}
                    className="mt-1 block text-[0.875rem] tabular-nums text-white/50 transition-colors hover:text-white"
                  >
                    {SITE.phone.mobile}
                  </a>
                </div>

                <div className="mt-4 rounded-[1.5rem] bg-ink-50 p-7 ring-1 ring-ink-100">
                  <h3 className="flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                    <Icon name="clock" size={15} />
                    {t.location.labels.hours}
                  </h3>
                  <OpeningHours lang={lang} compact className="mt-4" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
