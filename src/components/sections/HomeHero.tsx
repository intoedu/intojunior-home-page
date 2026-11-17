import { SITE, telHref } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoBackdrop } from "@/components/ui/PhotoBackdrop";

export function HomeHero({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const h = t.home.hero;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <PhotoBackdrop photo="hero" tone="edge" priority />

        <Container>
          <div className="py-24 sm:py-32 lg:pt-40 lg:pb-35">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-[0.875rem] font-bold text-white">
                {h.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="mt-7 text-[2.5rem] leading-[1.2] font-extrabold tracking-[-0.02em] text-white sm:text-[3.5rem] lg:text-[4.375rem]">
                <span className="block">{h.titleLead}</span>
                <span className="block">{h.titleAccent}</span>
                <span className="block">{h.titleTail}</span>
              </h1>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-7 max-w-[34rem] text-[1rem] leading-[1.75] text-white/70 sm:text-[1.25rem]">
                {h.description}
              </p>
            </Reveal>

            <Reveal delay={190}>
              <ul className="mt-7 flex flex-wrap gap-2">
                {h.badges.map((b) => (
                  <li
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-2 text-[0.8125rem] font-bold text-white/80"
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
                  className="w-full sm:w-auto"
                >
                  {h.primaryCta}
                </Button>
                <Button
                  href={href(lang, "programs")}
                  variant="onDark"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {h.secondaryCta}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 한눈에 보기 ── */}
      <section className="border-b border-ink-200 bg-white">
        <Container>
          <Reveal>
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {t.home.quickFacts.map((f, i) => (
                <div
                  key={f.label}
                  className={
                    "px-1 py-7 sm:py-8" +
                    (i % 2 === 1 ? " border-l border-ink-200 pl-5" : "") +
                    (i >= 2 ? " border-t border-ink-200 lg:border-t-0" : "") +
                    (i === 2 ? " lg:border-l lg:border-ink-200 lg:pl-5" : "")
                  }
                >
                  <dt className="text-[0.75rem] font-extrabold tracking-[0.04em] text-brand-600 uppercase">
                    {f.label}
                  </dt>
                  <dd className="mt-2.5 text-[1rem] leading-tight font-extrabold text-navy-900 sm:text-[1.125rem]">
                    {f.value}
                  </dd>
                  <dd className="mt-1.5 text-[0.8125rem] leading-snug text-ink-500">
                    {f.sub}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
