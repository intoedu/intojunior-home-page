import { photo } from "@/config/site";
import { getDict, type Lang } from "@/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { IconName } from "@/components/ui/Icon";

const ICONS: IconName[] = ["building", "book", "mic", "target", "speech", "star"];

/**
 * 사진 갤러리.
 * public/photos/ 에 room1 ~ room6 이름으로 사진을 올리면 자동으로 표시됩니다.
 * (확장자는 jpg / png / webp 아무거나 상관없습니다)
 */
const PHOTOS = [
  "g-library",
  "g-classroom",
  "g-ailab",
  "g-group",
  "g-booth",
  "g-class",
  "g-reception",
  "g-books",
  "g-speech",
].map((name) => photo(name) || undefined);

/*
 * 큰 화면은 4열. 첫 사진만 2×2 로 두면 남는 8칸을 나머지가 정확히 채웁니다.
 * (2×2 + 8 = 4열 × 3행)
 */
const FEATURE = "col-span-2 row-span-2";
const RATIO_FEATURE = "aspect-square lg:aspect-auto lg:h-full";
const RATIO_CELL = "aspect-square";

export function Gallery({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const g = t.home.gallery;

  return (
    <Section size="wide" className="bg-ink-50">
      <SectionHeading
        eyebrow={g.eyebrow}
        title={g.title}
        description={g.description}
        align="center"
      />

      <div className="mt-14 grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {g.captions.map((caption, i) => (
          <Reveal
            key={caption}
            delay={i * 60}
            className={i === 0 ? FEATURE : undefined}
          >
            <PhotoSlot
              src={PHOTOS[i]}
              alt={caption}
              caption={caption}
              label={PHOTOS[i] ? undefined : t.common.photoPlaceholder}
              icon={ICONS[i % ICONS.length]}
              className={cn(
                "w-full rounded ring-1 ring-ink-200",
                i === 0 ? RATIO_FEATURE : RATIO_CELL,
              )}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
