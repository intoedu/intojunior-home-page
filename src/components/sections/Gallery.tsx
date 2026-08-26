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
const PHOTOS = ["room1", "room2", "room3", "room4", "room5", "room6"].map(
  (name) => photo(name) || undefined,
);

/* 첫 번째 사진만 크게(2×2) 배치해 3×3 격자를 꽉 채웁니다. */
const CELL = [
  "col-span-2 lg:col-span-2 lg:row-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-2 lg:col-span-1",
];

const RATIO = [
  "aspect-16/10 lg:aspect-auto lg:h-full",
  "aspect-square",
  "aspect-square",
  "aspect-square",
  "aspect-square",
  "aspect-16/10 lg:aspect-square",
];

export function Gallery({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const g = t.home.gallery;

  return (
    <Section size="wide" className="bg-soft-mesh">
      <SectionHeading
        eyebrow={g.eyebrow}
        title={g.title}
        description={g.description}
        align="center"
      />

      <div className="mt-14 grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {g.captions.map((caption, i) => (
          <Reveal key={caption} delay={i * 60} className={CELL[i]}>
            <PhotoSlot
              src={PHOTOS[i]}
              alt={caption}
              caption={caption}
              label={PHOTOS[i] ? undefined : t.common.photoPlaceholder}
              icon={ICONS[i % ICONS.length]}
              className={cn("w-full rounded-3xl ring-1 ring-ink-100", RATIO[i])}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
