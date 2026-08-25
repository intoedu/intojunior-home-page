import { getDict, href, type Lang } from "@/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProgramCard } from "./ProgramCard";

export function ProgramsPreview({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const p = t.home.programsPreview;

  return (
    <Section size="wide" className="bg-soft-mesh">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow={p.eyebrow}
          title={p.title}
          description={p.description}
          className="max-w-xl"
        />
        <Reveal delay={80} className="shrink-0">
          <Button
            href={href(lang, "programs")}
            variant="secondary"
            icon="arrowRight"
          >
            {t.common.viewPrograms}
          </Button>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.programs.items.map((item, i) => (
          <Reveal as="li" key={item.no} delay={(i % 3) * 80}>
            <ProgramCard program={item} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
