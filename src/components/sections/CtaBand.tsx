import { SITE, telHref } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

/** 페이지 하단 공통 전환 유도 섹션 */
export function CtaBand({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const c = t.home.cta;

  return (
    <section className="relative overflow-hidden bg-brand-mesh py-20 text-white sm:py-28">
      <div aria-hidden className="absolute inset-0 bg-grid-faint opacity-40" />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow tone="dark" className="justify-center">
              {c.eyebrow}
            </Eyebrow>
            <h2 className="mt-5 text-[1.875rem] leading-[1.25] font-extrabold tracking-[-0.03em] whitespace-pre-line text-white sm:text-[2.5rem]">
              {c.title}
            </h2>
            <p className="mt-6 text-[0.9375rem] leading-[1.9] text-white/70 sm:text-base">
              {c.description}
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={href(lang, "apply")}
                size="lg"
                icon="arrowRight"
                className="w-full sm:w-auto"
              >
                {t.common.applyLong}
              </Button>
              <Button
                href={telHref(SITE.phone.main)}
                external
                variant="onDark"
                size="lg"
                icon="phone"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {SITE.phone.main}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-[0.75rem] text-white/60 ring-1 ring-white/12">
              <Icon name="clock" size={14} />
              {lang === "ko"
                ? "월·화·목·금 13:00–20:30 / 토 14:00–16:00 (수·일 휴무)"
                : "Mon·Tue·Thu·Fri 1–8:30 PM / Sat 2–4 PM (closed Wed & Sun)"}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
