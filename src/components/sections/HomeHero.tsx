import { CAMPUSES, SITE, telHref } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function HomeHero({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const h = t.home.hero;

  return (
    <section className="relative bg-brand-mesh text-white">
      {/* 배경 레이어 — 잘라내기는 배경에만 적용해, 겹쳐 놓은 카드가 잘리지 않게 합니다 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-faint opacity-45" />
        <div className="absolute -top-40 -left-32 size-[34rem] animate-float-slow rounded-full bg-brand-500/25 blur-3xl" />
        <div className="absolute top-1/4 -right-40 size-[30rem] animate-float-slow rounded-full bg-mint-500/18 blur-3xl [animation-delay:-6s]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-navy-950/60 to-transparent" />
      </div>

      <Container size="wide" className="relative">
        <div
          className="grid items-center gap-12 pb-24 lg:grid-cols-12 lg:gap-10 lg:pb-28"
          style={{ paddingTop: "calc(var(--header-h) + 3rem)" }}
        >
          {/* ── 텍스트 ── */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/8 py-1.5 pr-4 pl-1.5 text-[0.75rem] font-semibold text-white/80 ring-1 ring-white/15 backdrop-blur-sm">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-400 px-2 py-1 text-[0.625rem] font-extrabold tracking-wide text-navy-950">
                  <Icon name="sparkle" size={11} />
                  INTO JUNIOR
                </span>
                {h.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="mt-7 text-[2.25rem] leading-[1.16] font-extrabold tracking-[-0.035em] text-white sm:text-[3.25rem] lg:text-[3.5rem] xl:text-[3.875rem]">
                <span className="block">{h.titleLead}</span>
                <span className="relative mt-1 block">
                  <span className="relative z-10 bg-linear-to-r from-accent-300 via-accent-200 to-accent-300 bg-clip-text text-transparent">
                    {h.titleAccent}
                  </span>
                </span>
                <span className="mt-1 block">{h.titleTail}</span>
              </h1>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-7 max-w-xl text-[0.9375rem] leading-[1.95] text-white/70 sm:text-[1.0625rem]">
                {h.description}
              </p>
            </Reveal>

            <Reveal delay={190}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {h.badges.map((b) => (
                  <li
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/6 px-3.5 py-2 text-[0.75rem] font-semibold text-white/75 ring-1 ring-white/12"
                  >
                    <Icon name="check" size={13} className="text-mint-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={SITE.booking || telHref(SITE.phone.main)}
                  external
                  size="lg"
                  icon={SITE.booking ? "calendar" : "phone"}
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  {h.primaryCta}
                </Button>
                <Button
                  href={href(lang, "programs")}
                  variant="onDark"
                  size="lg"
                  icon="arrowUpRight"
                  className="w-full sm:w-auto"
                >
                  {h.secondaryCta}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={310}>
              <a
                href={telHref(SITE.phone.main)}
                className="mt-8 inline-flex items-center gap-3 text-white/60 transition-colors hover:text-white"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/15">
                  <Icon name="phone" size={16} />
                </span>
                <span className="text-left">
                  <span className="block text-[0.6875rem] font-medium tracking-wide uppercase opacity-70">
                    {lang === "ko" ? "전화 상담" : "Call us"}
                  </span>
                  <span className="block text-[1.0625rem] font-bold tabular-nums text-white">
                    {SITE.phone.main}
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          {/* ── 비주얼 ── */}
          <div className="lg:col-span-5">
            <Reveal delay={160} className="relative mx-auto max-w-md sm:max-w-xl lg:max-w-none lg:pl-8">
              <div className="relative">
                {/* 메인 사진 */}
                <PhotoSlot
                  src={SITE.photos.hero || undefined}
                  alt={h.photoCaption}
                  caption={h.photoCaption}
                  label={t.common.photoPlaceholder}
                  icon="mic"
                  tone="dark"
                  priority
                  className="aspect-4/5 w-full rounded-[2rem] shadow-lift ring-1 ring-white/15 sm:aspect-5/4 lg:aspect-4/5"
                />

                {/* 떠 있는 카드 — 4대 역량 */}
                <div className="absolute -bottom-8 left-0 w-56 rounded-2xl bg-white p-4 shadow-lift sm:-left-8 sm:w-64">
                  <p className="text-[0.625rem] font-bold tracking-[0.16em] text-brand-600 uppercase">
                    4 Skills
                  </p>
                  <ul className="mt-3 space-y-2">
                    {t.home.pillars.items.map((p) => (
                      <li
                        key={p.key}
                        className="flex items-center gap-2 text-[0.75rem] font-semibold text-navy-900"
                      >
                        <span className="inline-flex size-5 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                          <Icon name="check" size={11} />
                        </span>
                        {p.title}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 떠 있는 배지 — 위치 */}
                <div className="absolute -top-4 -right-2 hidden items-center gap-2 rounded-2xl bg-navy-900/85 px-4 py-3 shadow-lift ring-1 ring-white/15 backdrop-blur-md sm:flex lg:-right-4">
                  <Icon name="mapPin" size={16} className="text-mint-300" />
                  <span className="text-[0.75rem] leading-tight font-semibold text-white">
                    {CAMPUSES.length > 1
                      ? `${CAMPUSES.length}${t.common.campusCountSuffix}`
                      : lang === "ko"
                        ? CAMPUSES[0].regionKo
                        : CAMPUSES[0].regionEn}
                    <span className="block text-[0.6875rem] font-medium text-white/55">
                      {CAMPUSES.length > 1
                        ? t.common.viewCampuses
                        : lang === "ko"
                          ? CAMPUSES[0].nameKo
                          : CAMPUSES[0].nameEn}
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* ── 하단 요약 카드 (히어로에 겹침) ──
          어두운 그라디언트보다 위에 그려지도록 z-10 을 줍니다 */}
      <Container size="wide" className="relative z-10">
        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink-200/80 shadow-lift lg:-mb-16 lg:grid-cols-4">
            {t.home.quickFacts.map((f) => (
              <div key={f.label} className="bg-white px-5 py-6 sm:px-6 sm:py-7">
                <dt className="text-[0.6875rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                  {f.label}
                </dt>
                <dd className="mt-2.5 text-[0.9375rem] leading-tight font-extrabold text-navy-900 sm:text-[1.0625rem]">
                  {f.value}
                </dd>
                <dd className="mt-1.5 text-[0.75rem] leading-snug text-ink-500">
                  {f.sub}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
      {/* 히어로가 끝나는 지점 — relative 가 없으면 위의 그라디언트가 덧칠돼 회색 띠가 생깁니다 */}
      <div className="relative h-0 bg-white lg:h-16" />
    </section>
  );
}
