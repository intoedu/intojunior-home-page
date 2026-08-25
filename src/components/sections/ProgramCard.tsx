import { cn } from "@/lib/utils";
import type { Dict } from "@/content";
import { Icon, type IconName } from "@/components/ui/Icon";

type Program = Dict["programs"]["items"][number];

export function ProgramCard({
  program,
  detailed = false,
  className,
}: {
  program: Program;
  detailed?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-ink-100 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:ring-brand-200 sm:p-8",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-brand-600 to-mint-500 transition-transform duration-500 group-hover:scale-x-100"
      />

      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
          <Icon name={program.icon as IconName} size={22} />
        </span>
        <span className="inline-flex items-center rounded-full bg-navy-900/5 px-3 py-1 text-[0.6875rem] font-bold text-navy-800">
          {program.tag}
        </span>
      </div>

      <p className="mt-6 font-display text-[0.6875rem] font-extrabold tracking-[0.16em] text-ink-300">
        {program.no}
      </p>
      <h3 className="mt-1.5 text-[1.1875rem] leading-snug font-bold text-navy-900">
        {program.title}
      </h3>
      <p className="mt-1 text-[0.75rem] font-semibold tracking-wide text-brand-600">
        {program.subtitle}
      </p>

      <p className="mt-4 text-[0.875rem] leading-[1.85] text-ink-600">
        {program.summary}
      </p>

      {detailed && (
        <ul className="mt-6 space-y-2.5 border-t border-dashed border-ink-200 pt-6">
          {program.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 text-[0.8125rem] leading-relaxed text-ink-700"
            >
              <Icon
                name="check"
                size={15}
                className="mt-0.5 shrink-0 text-mint-500"
              />
              {point}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
