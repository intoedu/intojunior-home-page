import type { Lang } from "@/content";
import { HomeHero } from "@/components/sections/HomeHero";
import { Pillars } from "@/components/sections/Pillars";
import { ProgramsPreview } from "@/components/sections/ProgramsPreview";
import { Process } from "@/components/sections/Process";
import { Levels } from "@/components/sections/Levels";
import { VideoSection } from "@/components/sections/VideoSection";
import { Gallery } from "@/components/sections/Gallery";
import { LocationPreview } from "@/components/sections/LocationPreview";
import { CtaBand } from "@/components/sections/CtaBand";

export function HomeView({ lang }: { lang: Lang }) {
  return (
    <>
      <HomeHero lang={lang} />
      <Pillars lang={lang} />
      <ProgramsPreview lang={lang} />
      <Process lang={lang} />
      <Levels lang={lang} />
      <VideoSection lang={lang} />
      <Gallery lang={lang} />
      <LocationPreview lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}
