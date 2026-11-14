import { getDict, type Lang } from "@/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TUITION } from "@/config/site";

/**
 * 교습비 안내 (학원법상 게시 항목)
 * 금액은 src/config/site.ts 의 TUITION, 이름·문구는 content 의 programs.tuition 입니다.
 */
export function Tuition({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const u = t.programs.tuition;

  const n = (value: number) => value.toLocaleString("en-US");
  const won = (value: number) =>
    lang === "ko" ? `${n(value)}원` : `₩${n(value)}`;

  return (
    <Section id="tuition" size="wide" className="bg-white">
      <SectionHeading
        eyebrow={u.eyebrow}
        title={u.title}
        description={u.description}
      />

      <div className="mt-12 space-y-6">
        {TUITION.map((group, gi) => (
          <Reveal key={group.group} delay={gi * 80}>
            <div className="overflow-hidden rounded bg-white ring-1 ring-ink-200">
              <h3 className="border-b border-ink-100 bg-ink-50 px-6 py-4 text-[0.9375rem] font-extrabold text-navy-900">
                {u.groups[group.group]}
              </h3>

              {/* 작은 화면: 카드 */}
              <ul className="divide-y divide-ink-100 md:hidden">
                {group.rows.map((row) => (
                  <li key={row.id} className="px-5 py-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-[0.9375rem] font-extrabold text-navy-900">
                        {u.names[row.id]}
                      </p>
                      <p className="shrink-0 text-[1.0625rem] font-extrabold tabular-nums text-brand-700">
                        {won(row.fee)}
                      </p>
                    </div>
                    <dl className="mt-4 space-y-2.5 border-t border-ink-100 pt-4 text-[0.8125rem]">
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="shrink-0 text-ink-500">{u.columns[1]}</dt>
                        <dd className="text-right tabular-nums text-ink-700">
                          {n(row.minutes)}
                          {u.units.minutes}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="shrink-0 text-ink-500">{u.columns[2]}</dt>
                        <dd className="text-right tabular-nums text-ink-700">
                          {won(row.unitPrice)}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="shrink-0 text-ink-500">{u.columns[4]}</dt>
                        <dd className="text-right tabular-nums text-ink-700">
                          {n(row.capacity)}
                          {u.units.capacity}
                        </dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>

              {/* 큰 화면: 표 */}
              <table className="hidden w-full border-collapse text-left md:table">
                <thead>
                  <tr className="border-b border-ink-100 bg-white">
                    {u.columns.map((c, i) => (
                      <th
                        key={c}
                        className={
                          i === 0
                            ? "px-6 py-4 text-[0.75rem] font-bold tracking-wide text-ink-500"
                            : "w-[15%] px-6 py-4 text-right text-[0.75rem] font-bold tracking-wide text-ink-500"
                        }
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {group.rows.map((row) => (
                    <tr key={row.id} className="border-t border-ink-100">
                      <td className="px-6 py-4 text-[0.875rem] font-bold whitespace-nowrap text-navy-900">
                        {u.names[row.id]}
                      </td>
                      <td className="px-6 py-4 text-right text-[0.875rem] tabular-nums whitespace-nowrap text-ink-600">
                        {n(row.minutes)}
                        {u.units.minutes}
                      </td>
                      <td className="px-6 py-4 text-right text-[0.875rem] tabular-nums whitespace-nowrap text-ink-600">
                        {won(row.unitPrice)}
                      </td>
                      <td className="px-6 py-4 text-right text-[0.9375rem] font-extrabold tabular-nums whitespace-nowrap text-brand-700">
                        {won(row.fee)}
                      </td>
                      <td className="px-6 py-4 text-right text-[0.875rem] tabular-nums whitespace-nowrap text-ink-600">
                        {n(row.capacity)}
                        {u.units.capacity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <p className="mt-6 text-[0.8125rem] leading-relaxed text-ink-500">
          {u.note}
        </p>
      </Reveal>
    </Section>
  );
}
