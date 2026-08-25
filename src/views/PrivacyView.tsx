import { getDict, type Lang } from "@/content";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function PrivacyView({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const p = t.privacy;

  return (
    <>
      <PageHero
        lang={lang}
        title={p.title}
        description={p.updated}
        crumbLabel={t.footer.privacy}
      />

      <Section tightTop size="narrow" className="bg-white">
        <Reveal>
          <p className="text-[0.9375rem] leading-[1.95] text-ink-600">
            {p.intro}
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {p.sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <section>
                <h2 className="text-[1.0625rem] font-bold text-navy-900">
                  {s.title}
                </h2>
                <p className="mt-3 text-[0.875rem] leading-[1.95] whitespace-pre-line text-ink-600">
                  {s.body}
                </p>
              </section>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
