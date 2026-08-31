import { CAMPUSES } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { OpeningHours } from "@/components/site/OpeningHours";
import { Icon } from "@/components/ui/Icon";
import { CampusCard } from "./CampusCard";
import { MapEmbed } from "./MapEmbed";

/**
 * 홈의 캠퍼스 섹션.
 * 캠퍼스가 한 곳이면 지도와 나란히, 여러 곳이면 카드 목록으로 보여줍니다.
 */
export function CampusesPreview({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const c = t.home.campuses;
  const single = CAMPUSES.length === 1;

  return (
    <Section size="wide" className="bg-white">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          description={c.description}
          className="max-w-xl"
        />
        <Reveal delay={80} className="shrink-0">
          <Button
            href={href(lang, "location")}
            variant="secondary"
            icon="arrowRight"
          >
            {t.common.viewCampuses}
          </Button>
        </Reveal>
      </div>

      {single ? (
        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <Reveal>
              <CampusCard campus={CAMPUSES[0]} lang={lang} showPhoto={false} />
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl bg-ink-50 p-6 ring-1 ring-ink-100">
                <h3 className="flex items-center gap-2 text-[0.8125rem] font-bold tracking-wide text-navy-900 uppercase">
                  <Icon name="clock" size={16} className="text-brand-500" />
                  {t.campuses.labels.hours}
                </h3>
                <OpeningHours lang={lang} compact className="mt-4" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={90} className="lg:col-span-7">
            <MapEmbed
              lang={lang}
              campus={CAMPUSES[0]}
              className="aspect-4/3 w-full lg:aspect-auto lg:h-full lg:min-h-80"
            />
          </Reveal>
        </div>
      ) : (
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAMPUSES.map((campus, i) => (
            <Reveal as="li" key={campus.id} delay={(i % 3) * 80}>
              <CampusCard campus={campus} lang={lang} />
            </Reveal>
          ))}
        </ul>
      )}
    </Section>
  );
}
