import Link from "next/link";
import { SITE, telHref, MAP_LINKS } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { MapEmbed, MapLinks } from "@/components/sections/MapEmbed";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { OpeningHours } from "@/components/site/OpeningHours";
import { SocialLinks, socialEntries } from "@/components/site/SocialLinks";

export function ContactView({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const c = t.contact;
  const hasSocial = socialEntries().length > 0;
  const hasKakao = SITE.social.kakao.trim().length > 0;

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        description={c.hero.description}
        crumbLabel={t.nav[5].label}
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
            href={href(lang, "campuses")}
            variant="onDark"
            size="lg"
            icon="mapPin"
            iconPosition="left"
          >
            {t.common.directions}
          </Button>
        </div>
      </PageHero>

      {/* ── 연락 방법 ── */}
      <Section tightTop size="wide" className="bg-white">
        <Reveal>
          <h2 className="text-[1.75rem] font-bold text-navy-900 sm:text-[2.125rem]">
            {c.channels.title}
          </h2>
          <p className="mt-3 text-[0.9375rem] text-ink-600">
            {c.channels.description}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {/* 전화 — 가장 크게 */}
          <Reveal className="lg:col-span-7">
            <a
              href={telHref(SITE.phone.main)}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] bg-navy-950 p-8 text-white transition-transform hover:-translate-y-1 sm:p-10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-16 size-64 rounded-full bg-brand-500/25 blur-3xl transition-all duration-500 group-hover:bg-brand-500/40"
              />
              <span className="relative">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-brand-200 ring-1 ring-white/15">
                  <Icon name="phone" size={22} />
                </span>
                <span className="mt-6 block text-[1.125rem] font-bold">
                  {c.channels.callTitle}
                </span>
                <span className="mt-2 block max-w-sm text-[0.875rem] leading-[1.85] text-white/55">
                  {c.channels.callDesc}
                </span>
              </span>

              <span className="relative mt-8 flex flex-wrap items-end gap-x-6 gap-y-2">
                <span className="text-[2rem] leading-none font-extrabold tabular-nums sm:text-[2.5rem]">
                  {SITE.phone.main}
                </span>
                <span className="text-[1rem] leading-none font-semibold tabular-nums text-white/45">
                  {SITE.phone.mobile}
                </span>
              </span>
            </a>
          </Reveal>

          {/* 이메일 · 카카오 · 방문 */}
          <div className="grid gap-4 lg:col-span-5">
            <Reveal delay={80}>
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-start gap-4 rounded-[1.5rem] bg-ink-50 p-6 ring-1 ring-ink-100 transition-transform hover:-translate-y-1"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft">
                  <Icon name="mail" size={20} />
                </span>
                <span className="flex-1">
                  <span className="block text-[0.9375rem] font-bold text-navy-900">
                    {c.channels.emailTitle}
                  </span>
                  <span className="mt-1 block text-[0.875rem] font-semibold break-all text-brand-700">
                    {SITE.email}
                  </span>
                  <span className="mt-2 block text-[0.75rem] leading-relaxed text-ink-500">
                    {c.channels.emailDesc}
                  </span>
                </span>
              </a>
            </Reveal>

            {hasKakao && (
              <Reveal delay={120}>
                <a
                  href={SITE.social.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-[1.5rem] bg-ink-50 p-6 ring-1 ring-ink-100 transition-transform hover:-translate-y-1"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft">
                    <Icon name="kakao" size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[0.9375rem] font-bold text-navy-900">
                      {c.channels.kakaoTitle}
                    </span>
                    <span className="mt-2 block text-[0.75rem] leading-relaxed text-ink-500">
                      {c.channels.kakaoDesc}
                    </span>
                  </span>
                  <Icon
                    name="arrowUpRight"
                    size={18}
                    className="shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              </Reveal>
            )}

            <Reveal delay={160}>
              <a
                href={MAP_LINKS.naver}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start gap-4 rounded-[1.5rem] bg-ink-50 p-6 ring-1 ring-ink-100 transition-transform hover:-translate-y-1"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft">
                  <Icon name="mapPin" size={20} />
                </span>
                <span className="flex-1">
                  <span className="block text-[0.9375rem] font-bold text-navy-900">
                    {c.channels.visitTitle}
                  </span>
                  <span className="mt-1 block text-[0.8125rem] leading-relaxed text-ink-700">
                    {lang === "ko" ? SITE.address.ko : SITE.address.en}
                  </span>
                  <span className="mt-2 block text-[0.75rem] leading-relaxed text-ink-500">
                    {c.channels.visitDesc}
                  </span>
                </span>
                <Icon
                  name="arrowUpRight"
                  size={18}
                  className="shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </Reveal>
          </div>
        </div>

        {hasSocial && (
          <Reveal delay={200}>
            <div className="mt-4 flex flex-col gap-4 rounded-[1.5rem] bg-ink-50 p-6 ring-1 ring-ink-100 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.9375rem] font-bold text-navy-900">
                  {c.channels.snsTitle}
                </p>
                <p className="mt-1 text-[0.75rem] text-ink-500">
                  {c.channels.snsDesc}
                </p>
              </div>
              <SocialLinks />
            </div>
          </Reveal>
        )}
      </Section>

      {/* ── 상담 진행 순서 ── */}
      <Section size="wide" className="bg-soft-mesh">
        <Reveal>
          <h2 className="text-[1.75rem] font-bold text-navy-900 sm:text-[2.125rem]">
            {c.steps.title}
          </h2>
        </Reveal>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.steps.items.map((step, i) => (
            <Reveal as="li" key={step.no} delay={i * 80}>
              <div className="relative h-full rounded-2xl bg-white p-7 shadow-soft ring-1 ring-ink-100">
                <span className="font-display text-[0.6875rem] font-extrabold tracking-[0.18em] text-brand-600">
                  {step.no}
                </span>
                <h3 className="mt-2 text-[1.0625rem] font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.8125rem] leading-[1.8] text-ink-600">
                  {step.description}
                </p>
                {i < c.steps.items.length - 1 && (
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

        <Reveal delay={140}>
          <p className="mt-6 text-[0.8125rem] text-ink-500">{c.steps.note}</p>
        </Reveal>
      </Section>

      {/* ── 운영시간 · 위치 ── */}
      <Section size="wide" className="bg-white">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="rounded-[1.5rem] bg-ink-50 p-7 ring-1 ring-ink-100">
              <h2 className="flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                <Icon name="clock" size={15} />
                {t.campuses.labels.hours}
              </h2>
              <OpeningHours lang={lang} className="mt-5" />
            </div>

            <Reveal delay={120}>
              <Link
                href={href(lang, "faq")}
                className="group mt-4 flex items-center justify-between gap-4 rounded-[1.5rem] bg-brand-50 p-6 ring-1 ring-brand-100 transition-transform hover:-translate-y-1"
              >
                <span>
                  <span className="block text-[0.9375rem] font-bold text-navy-900">
                    {t.faq.stillCurious.title}
                  </span>
                  <span className="mt-1 block text-[0.75rem] leading-relaxed text-ink-600">
                    {t.faq.hero.description}
                  </span>
                </span>
                <Icon
                  name="arrowRight"
                  size={18}
                  className="shrink-0 text-brand-600 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-7">
            <MapEmbed lang={lang} className="aspect-4/3 w-full sm:aspect-16/10" />
            <MapLinks lang={lang} className="mt-4" />
          </Reveal>
        </div>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}
