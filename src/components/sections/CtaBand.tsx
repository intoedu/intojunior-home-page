import { SITE, telHref } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/** 페이지 하단 공통 전환 유도 섹션 */
export function CtaBand({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const c = t.home.cta;

  return (
    <section className="bg-navy-950 py-20 text-white sm:py-25">
      <Container>
        <div className="mx-auto max-w-[44rem] text-center">
          <Reveal>
            <Eyebrow tone="dark">{c.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[1.875rem] leading-[1.3] font-extrabold tracking-[-0.01em] whitespace-pre-line text-white sm:text-[2.5rem]">
              {c.title}
            </h2>
            <p className="mt-6 text-[0.9375rem] leading-[1.8] text-white/70 sm:text-base">
              {c.description}
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={SITE.booking || telHref(SITE.phone.main)}
                external
                size="lg"
                className="w-full sm:w-auto"
              >
                {SITE.booking ? t.common.bookLong : SITE.phone.main}
              </Button>
              <Button
                href={href(lang, "contact")}
                variant="onDark"
                size="lg"
                className="w-full sm:w-auto"
              >
                {t.common.contact}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
