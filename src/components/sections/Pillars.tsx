import { getDict, type Lang } from "@/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Pillars({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const p = t.home.pillars;

  return (
    <Section size="wide" className="bg-white">
      <SectionHeading
        eyebrow={p.eyebrow}
        title={p.title}
        description={p.description}
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {p.items.map((item, i) => (
          <Reveal as="li" key={item.key} delay={i * 80}>
            <article className="group relative h-full overflow-hidden rounded-3xl bg-ink-50 p-7 ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-lift hover:ring-brand-200">
              {/* 호버 시 나타나는 그라디언트 */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/12"
              />

              <div className="relative flex items-center justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft ring-1 ring-ink-100 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                  <Icon name={item.icon as IconName} size={22} />
                </span>
                <span className="font-display text-[0.6875rem] font-extrabold tracking-[0.18em] text-ink-300">
                  {item.no}
                </span>
              </div>

              <p className="relative mt-6 text-[0.6875rem] font-extrabold tracking-[0.2em] text-brand-600 uppercase">
                {item.en}
              </p>
              <h3 className="relative mt-2 text-[1.125rem] font-bold text-navy-900">
                {item.title}
              </h3>
              <p className="relative mt-3.5 text-[0.875rem] leading-[1.85] text-ink-600">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
