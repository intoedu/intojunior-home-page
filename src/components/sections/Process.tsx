import { getDict, type Lang } from "@/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Process({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const p = t.home.process;

  return (
    <Section size="wide" className="bg-white">
      <SectionHeading
        eyebrow={p.eyebrow}
        title={p.title}
        description={p.description}
      />

      <ol className="relative mt-14 grid gap-6 lg:grid-cols-5 lg:gap-4">
        {/* 데스크톱 연결선 */}
        <span
          aria-hidden
          className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-linear-to-r from-brand-200 via-brand-300 to-mint-300 lg:block"
        />

        {p.steps.map((step, i) => (
          <Reveal as="li" key={step.no} delay={i * 90} className="relative">
            <div className="flex gap-5 lg:flex-col lg:gap-0">
              {/* 번호 */}
              <div className="relative shrink-0">
                <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-2xl bg-white font-display text-[0.9375rem] font-extrabold text-brand-600 shadow-card ring-1 ring-brand-100">
                  {step.no}
                </span>
                {/* 모바일 세로선 */}
                {i < p.steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-14 left-1/2 h-full w-px -translate-x-1/2 bg-linear-to-b from-brand-200 to-transparent lg:hidden"
                  />
                )}
              </div>

              <div className="pb-8 lg:pt-6 lg:pb-0">
                <h3 className="text-[1.0625rem] font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.875rem] leading-[1.8] text-ink-600 lg:pr-4">
                  {step.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
