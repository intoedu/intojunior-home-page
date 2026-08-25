import { getDict, type Lang } from "@/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const TONES = [
  "from-brand-100 to-brand-50 text-brand-700 ring-brand-200",
  "from-brand-200 to-brand-50 text-brand-700 ring-brand-200",
  "from-mint-100 to-brand-50 text-mint-600 ring-mint-300/60",
  "from-accent-100 to-brand-50 text-accent-700 ring-accent-200",
];

export function Levels({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const l = t.home.levels;

  return (
    <Section size="wide" className="bg-navy-950 text-white">
      <SectionHeading
        eyebrow={l.eyebrow}
        title={l.title}
        description={l.description}
        tone="dark"
      />

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {l.items.map((item, i) => (
          <Reveal as="li" key={item.step} delay={i * 80}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07] hover:ring-white/20">
              {/* 단계 진행 표시 */}
              <div className="flex items-center gap-1.5">
                {l.items.map((_, j) => (
                  <span
                    key={j}
                    className={
                      j <= i
                        ? "h-1 flex-1 rounded-full bg-linear-to-r from-brand-400 to-mint-400"
                        : "h-1 flex-1 rounded-full bg-white/12"
                    }
                  />
                ))}
              </div>

              <p className="mt-6 font-display text-[0.6875rem] font-extrabold tracking-[0.2em] text-brand-300">
                {item.step}
              </p>
              <h3 className="mt-2 text-[1.1875rem] font-bold text-white">
                {item.name}
              </h3>
              <p className="mt-3 text-[0.8125rem] leading-[1.8] text-white/55">
                {item.target}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                {item.goals.map((g) => (
                  <li
                    key={g}
                    className="flex items-start gap-2.5 text-[0.8125rem] leading-relaxed text-white/80"
                  >
                    <Icon
                      name="check"
                      size={15}
                      className="mt-0.5 shrink-0 text-mint-300"
                    />
                    {g}
                  </li>
                ))}
              </ul>

              <span
                aria-hidden
                className={`pointer-events-none absolute -right-12 -bottom-12 size-32 rounded-full bg-linear-to-br opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20 ${TONES[i % TONES.length]}`}
              />
            </article>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120}>
        <p className="mt-8 text-[0.8125rem] text-white/45">{l.note}</p>
      </Reveal>
    </Section>
  );
}
