import { SITE, telHref } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { PageHero } from "@/components/sections/PageHero";
import { FaqList } from "@/components/sections/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function FaqView({ lang }: { lang: Lang }) {
  const t = getDict(lang);

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={t.faq.hero.eyebrow}
        title={t.faq.hero.title}
        description={t.faq.hero.description}
        crumbLabel={t.nav[4].label}
      />

      <Section tightTop className="bg-white">
        <FaqList lang={lang} />

        <Reveal delay={100}>
          <div className="mt-12 rounded-3xl bg-soft-mesh p-8 text-center ring-1 ring-ink-100 sm:p-10">
            <h2 className="text-[1.25rem] font-bold text-navy-900 sm:text-[1.5rem]">
              {t.faq.stillCurious.title}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[0.875rem] leading-[1.85] text-ink-600">
              {t.faq.stillCurious.description}
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
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
          </div>
        </Reveal>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}
