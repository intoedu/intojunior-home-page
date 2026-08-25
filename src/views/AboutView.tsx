import { SITE } from "@/config/site";
import { getDict, type Lang } from "@/content";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Icon, type IconName } from "@/components/ui/Icon";

export function AboutView({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const a = t.about;

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        description={a.hero.description}
        crumbLabel={t.nav[1].label}
      />

      {/* ── 원장 인사말 ── */}
      <Section tightTop size="wide" className="bg-white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <PhotoSlot
                src={SITE.photos.director || undefined}
                alt={a.greeting.photoCaption}
                caption={a.greeting.photoCaption}
                label={t.common.photoPlaceholder}
                icon="user"
                className="aspect-4/5 w-full rounded-[2rem] shadow-card ring-1 ring-ink-100"
              />
              <div className="mt-6 rounded-2xl bg-ink-50 p-5 ring-1 ring-ink-100">
                <p className="text-[0.75rem] font-semibold text-ink-500">
                  {a.greeting.signature}
                </p>
                <p className="mt-1 text-[1.25rem] font-extrabold text-navy-900">
                  {a.greeting.name}
                </p>
                <p className="mt-2 text-[0.8125rem] leading-relaxed font-semibold text-brand-700">
                  {a.greeting.credential}
                </p>
                <p className="mt-3 border-t border-ink-200 pt-3 text-[0.75rem] tabular-nums text-ink-500">
                  {SITE.phone.main} · {SITE.phone.mobile}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{a.greeting.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[1.75rem] font-bold text-navy-900 sm:text-[2.125rem]">
                {a.greeting.title}
              </h2>
              <Icon
                name="quote"
                size={40}
                className="mt-8 text-brand-100"
              />
            </Reveal>

            <div className="mt-6 space-y-6">
              {a.greeting.paragraphs.map((para, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p
                    className={
                      i === 0
                        ? "text-[1.0625rem] leading-[1.9] font-semibold text-navy-900"
                        : "text-[0.9375rem] leading-[2] text-ink-600 sm:text-base"
                    }
                  >
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <p className="mt-10 border-t border-ink-200 pt-6 text-right">
                <span className="block text-[0.8125rem] text-ink-500">
                  {a.greeting.signature}
                </span>
                <span className="mt-1 block text-[1.125rem] font-extrabold text-navy-900">
                  {a.greeting.name}
                </span>
                <span className="mt-1 block text-[0.75rem] text-ink-500">
                  {a.greeting.credential}
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── 브랜드 슬로건 ── */}
      <Section size="wide" className="bg-navy-950 text-white">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Icon
              name="quote"
              size={36}
              className="mx-auto text-white/15"
            />
            <p className="mt-6 text-[1.5rem] leading-[1.5] font-extrabold tracking-[-0.02em] text-white sm:text-[2rem]">
              {a.motto.line}
            </p>
            <p className="mx-auto mt-6 max-w-xl text-[0.9375rem] leading-[1.9] text-white/65 sm:text-[1.0625rem]">
              {a.motto.statement}
            </p>
            <p className="mt-8 text-[0.75rem] font-bold tracking-[0.2em] text-brand-300 uppercase">
              INTO JUNIOR ACADEMY
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── 교육 철학 ── */}
      <Section size="wide" className="bg-soft-mesh">
        <SectionHeading
          eyebrow={a.philosophy.eyebrow}
          title={a.philosophy.title}
          description={a.philosophy.description}
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {a.philosophy.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80}>
              <article className="group flex h-full gap-5 rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:ring-brand-200 sm:p-8">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={item.icon as IconName} size={22} />
                </span>
                <div>
                  <h3 className="text-[1.0625rem] font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.875rem] leading-[1.85] text-ink-600">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ── 이런 고민이 있으셨다면 ── */}
      <Section size="wide" className="bg-navy-950 text-white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={a.fitFor.eyebrow}
              title={a.fitFor.title}
              tone="dark"
            />
            <Reveal delay={100}>
              <p className="mt-7 rounded-2xl bg-white/[0.06] p-5 text-[0.875rem] leading-[1.85] text-white/70 ring-1 ring-white/10">
                {a.fitFor.footnote}
              </p>
            </Reveal>
          </div>

          <ul className="lg:col-span-7">
            {a.fitFor.items.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70}>
                <div className="flex items-center gap-4 border-b border-white/10 py-5">
                  <span className="font-display text-[0.75rem] font-extrabold text-brand-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="flex-1 text-[0.9375rem] font-medium text-white/85 sm:text-[1.0625rem]">
                    {item}
                  </p>
                  <Icon name="check" size={18} className="shrink-0 text-mint-300" />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── 공간 ── */}
      <Section size="wide" className="bg-white">
        <SectionHeading
          eyebrow={a.facility.eyebrow}
          title={a.facility.title}
          description={a.facility.description}
          align="center"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {t.home.gallery.captions.slice(0, 3).map((caption, i) => (
            <Reveal key={caption} delay={i * 80}>
              <PhotoSlot
                alt={caption}
                caption={caption}
                label={t.common.photoPlaceholder}
                icon={(["building", "book", "mic"] as IconName[])[i]}
                className="aspect-4/5 w-full rounded-3xl ring-1 ring-ink-100"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 rounded-3xl bg-ink-50 p-8 text-center ring-1 ring-ink-100">
            <Eyebrow className="justify-center">{a.teachers.eyebrow}</Eyebrow>
            <h3 className="mt-4 text-[1.375rem] font-bold text-navy-900">
              {a.teachers.title}
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-[0.875rem] leading-[1.85] text-ink-600">
              {a.teachers.description}
            </p>
            <p className="mt-5 text-[0.75rem] text-ink-400">{a.teachers.note}</p>
          </div>
        </Reveal>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}
