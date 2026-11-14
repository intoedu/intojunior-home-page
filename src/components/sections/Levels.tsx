import { getDict, type Lang } from "@/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Levels({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const l = t.home.levels;

  return (
    <Section size="wide" className="bg-ink-50">
      <SectionHeading
        eyebrow={l.eyebrow}
        title={l.title}
        description={l.description}
      />

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {l.items.map((item, i) => (
          <Reveal as="li" key={item.step} delay={i * 80}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded bg-white p-7 ring-1 ring-ink-200 transition-colors duration-200 hover:ring-brand-300">
              {/* 단계 진행 표시 */}
              <div className="flex items-center gap-1.5">
                {l.items.map((_, j) => (
                  <span
                    key={j}
                    className={
                      j <= i
                        ? "h-1 flex-1 rounded-full bg-linear-to-r from-brand-400 to-mint-400"
                        : "h-1 flex-1 rounded-full bg-ink-200"
                    }
                  />
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="font-display text-[0.6875rem] font-extrabold tracking-[0.2em] text-brand-600">
                  {item.step}
                </span>
                <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[0.625rem] font-bold text-ink-600">
                  {item.group}
                </span>
              </div>
              <h3 className="mt-2 text-[1.1875rem] font-bold text-navy-900">
                {item.name}
              </h3>
              <p className="mt-3 text-[0.8125rem] leading-[1.8] text-ink-500">
                {item.target}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-mint-100 px-2.5 py-1.5 text-[0.75rem] font-semibold tabular-nums text-mint-600">
                <Icon name="clock" size={13} />
                {item.schedule}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-ink-200 pt-6">
                {item.goals.map((g) => (
                  <li
                    key={g}
                    className="flex items-start gap-2.5 text-[0.8125rem] leading-relaxed text-ink-700"
                  >
                    <Icon
                      name="check"
                      size={15}
                      className="mt-0.5 shrink-0 text-mint-600"
                    />
                    {g}
                  </li>
                ))}
              </ul>

            </article>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120}>
        <p className="mt-8 text-[0.8125rem] text-ink-400">{l.note}</p>
      </Reveal>
    </Section>
  );
}
