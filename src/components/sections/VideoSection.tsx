import { SITE } from "@/config/site";
import { getDict, type Lang } from "@/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { YouTubePlayer } from "@/components/ui/YouTubePlayer";

/** 학원 대표 소개 영상 */
export function VideoSection({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const v = t.home.video;

  return (
    <Section size="wide" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow={v.eyebrow}
            title={v.title}
            description={v.description}
          />
          {SITE.social.youtube && (
            <Reveal delay={90}>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-[0.875rem] font-bold text-brand-600 transition-colors hover:text-brand-700"
              >
                <Icon name="youtube" size={18} />
                {t.home.core.channelCta}
                <Icon name="arrowUpRight" size={15} />
              </a>
            </Reveal>
          )}
        </div>

        <Reveal delay={80} className="lg:col-span-8">
          <YouTubePlayer
            videoId={SITE.video.id}
            title={v.title.replace(/\n/g, " ")}
            lang={lang}
            placeholder={t.common.videoPlaceholder}
            className="rounded-[1.75rem]"
          />
        </Reveal>
      </div>
    </Section>
  );
}
