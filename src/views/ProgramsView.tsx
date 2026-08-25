import { getDict, type Lang } from "@/content";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Levels } from "@/components/sections/Levels";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { OpeningHours } from "@/components/site/OpeningHours";
import { Button } from "@/components/ui/Button";
import { href } from "@/content";
import { SITE, telHref } from "@/config/site";

export function ProgramsView({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const p = t.programs;

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        description={p.hero.description}
        crumbLabel={t.nav[2].label}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={href(lang, "apply")} size="lg" icon="arrowRight">
            {t.common.applyLong}
          </Button>
          <Button
            href={telHref(SITE.phone.main)}
            external
            variant="onDark"
            size="lg"
            icon="phone"
            iconPosition="left"
          >
            {SITE.phone.main}
          </Button>
        </div>
      </PageHero>

      {/* ── 과정 목록 ── */}
      <Section size="wide" className="bg-white">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((item, i) => (
            <Reveal as="li" key={item.no} delay={(i % 3) * 80}>
              <ProgramCard program={item} detailed />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ── 성장 단계 ── */}
      <Levels lang={lang} />

      {/* ── 수업 요일·시간 ── */}
      <Section size="wide" className="bg-soft-mesh">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-7">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft ring-1 ring-ink-100">
              <Icon name="calendar" size={22} />
            </span>
            <h2 className="mt-6 text-[1.75rem] font-bold text-navy-900 sm:text-[2.125rem]">
              {p.scheduleNote.title}
            </h2>
            <p className="mt-5 max-w-xl text-[0.9375rem] leading-[1.9] text-ink-600">
              {p.scheduleNote.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={href(lang, "apply")} icon="arrowRight">
                {t.common.applyLong}
              </Button>
              <Button
                href={telHref(SITE.phone.main)}
                external
                variant="secondary"
                icon="phone"
                iconPosition="left"
              >
                {SITE.phone.main}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="rounded-[1.75rem] bg-white p-7 shadow-card ring-1 ring-ink-100">
              <h3 className="flex items-center gap-2 text-[0.8125rem] font-bold tracking-wide text-navy-900 uppercase">
                <Icon name="clock" size={16} className="text-brand-500" />
                {p.scheduleNote.hoursTitle}
              </h3>
              <OpeningHours lang={lang} className="mt-5" />
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}
