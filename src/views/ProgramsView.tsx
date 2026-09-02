import { getDict, type Lang } from "@/content";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { CorePrograms } from "@/components/sections/CorePrograms";
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
          <Button
            href={telHref(SITE.phone.main)}
            external
            size="lg"
            icon="phone"
            iconPosition="left"
          >
            {SITE.phone.main}
          </Button>
          <Button
            href={href(lang, "contact")}
            variant="onDark"
            size="lg"
            icon="arrowRight"
          >
            {t.common.contact}
          </Button>
        </div>
      </PageHero>

      <CorePrograms lang={lang} />

      {/* ── 전체 과정 목록 ── */}
      <Section tightTop size="wide" className="bg-white">
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

      {/* ── 연간 커리큘럼 · 수업 시간 ── */}
      <Section size="wide" className="bg-soft-mesh">
        <Reveal>
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft ring-1 ring-ink-100">
            <Icon name="calendar" size={22} />
          </span>
          <h2 className="mt-6 text-[1.75rem] font-bold text-navy-900 sm:text-[2.125rem]">
            {p.scheduleNote.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[0.9375rem] leading-[1.9] text-ink-600">
            {p.scheduleNote.description}
          </p>
        </Reveal>

        {/* 연간 로테이션 — 좁은 화면에서는 카드로 표시해 잘리지 않게 합니다 */}
        <Reveal delay={80}>
          {/* 작은 화면: 카드 */}
          <ul className="mt-10 space-y-3 md:hidden">
            {p.scheduleNote.rows.map((row) => (
              <li
                key={row.period}
                className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-100"
              >
                <p className="text-[0.9375rem] font-extrabold text-navy-900">
                  {row.period}
                </p>
                <dl className="mt-4 space-y-2.5 border-t border-ink-100 pt-4 text-[0.875rem]">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="shrink-0 text-ink-500">
                      {p.scheduleNote.columns[1]}
                    </dt>
                    <dd className="text-right font-bold text-brand-700">
                      {row.regular}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="shrink-0 text-ink-500">
                      {p.scheduleNote.columns[2]}
                    </dt>
                    <dd className="text-right text-ink-700">{row.special}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>

          {/* 큰 화면: 표 */}
          <div className="mt-10 hidden overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink-100 md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-navy-950 text-white">
                  {p.scheduleNote.columns.map((c) => (
                    <th
                      key={c}
                      className="px-6 py-4 text-[0.8125rem] font-bold tracking-wide"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {p.scheduleNote.rows.map((row) => (
                  <tr key={row.period} className="border-t border-ink-100">
                    <td className="px-6 py-4 text-[0.875rem] font-bold whitespace-nowrap text-navy-900">
                      {row.period}
                    </td>
                    <td className="px-6 py-4 text-[0.875rem] font-semibold text-brand-700">
                      {row.regular}
                    </td>
                    <td className="px-6 py-4 text-[0.875rem] text-ink-600">
                      {row.special}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-[0.8125rem] text-ink-500">
            {p.scheduleNote.note}
          </p>
        </Reveal>

        {/* 수업 시간 + 운영시간 */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal delay={120} className="lg:col-span-7">
            <div className="h-full rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink-100">
              <h3 className="flex items-center gap-2 text-[0.8125rem] font-bold tracking-wide text-navy-900 uppercase">
                <Icon name="clock" size={16} className="text-brand-500" />
                {p.scheduleNote.timesTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {p.scheduleNote.classTimes.map((c) => (
                  <li
                    key={c.course}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-2xl bg-ink-50 px-5 py-4 ring-1 ring-ink-100"
                  >
                    <span className="text-[0.9375rem] font-bold text-navy-900">
                      {c.course}
                      <span className="ml-2 text-[0.75rem] font-semibold text-brand-600">
                        {c.classes}
                      </span>
                    </span>
                    <span className="text-[0.8125rem] text-ink-600">
                      {c.days}
                      <span className="ml-2 font-bold tabular-nums text-navy-900">
                        {c.time}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink-100">
              <h3 className="flex items-center gap-2 text-[0.8125rem] font-bold tracking-wide text-navy-900 uppercase">
                <Icon name="clock" size={16} className="text-brand-500" />
                {p.scheduleNote.hoursTitle}
              </h3>
              <OpeningHours lang={lang} compact className="mt-5" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
        </Reveal>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}
