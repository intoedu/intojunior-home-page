import { cn } from "@/lib/utils";
import { asset, photo as findPhoto } from "@/config/site";

/**
 * 네이비 섹션의 배경 사진.
 *
 * 사진 위에 네이비를 덮어 글씨가 잘 읽히게 합니다.
 * tone 은 "글씨가 어디에 있는지" 에 맞춰 고릅니다.
 */
const TONES = {
  /** 왼쪽 정렬 글씨 — 왼쪽이 가장 진합니다 (히어로) */
  edge: "bg-linear-to-r from-navy-950/85 via-navy-950/55 to-navy-950/35",
  /**
   * 가운데 정렬 글씨 — 가운데가 가장 진합니다 (전환 밴드·슬로건)
   * 휴대폰에서는 글씨가 화면 끝까지 차므로 양옆도 함께 진하게 둡니다.
   */
  center:
    "bg-linear-to-r from-navy-950/70 via-navy-950/88 to-navy-950/70 sm:from-navy-950/40 sm:via-navy-950/85 sm:to-navy-950/40",
  /** 글씨가 좌우로 꽉 차는 2단 구성 — 어느 쪽도 밝아지지 않게 고르게 덮습니다 */
  even: "bg-navy-950/45",
  /** 제목 아래로 카드가 이어지는 섹션 — 위는 옅고 아래로 진해집니다 */
  top: "bg-linear-to-b from-navy-950/55 via-navy-950/75 to-navy-950/95",
} as const;

export function PhotoBackdrop({
  photo,
  tone = "edge",
  priority = false,
}: {
  /** public/photos/ 의 파일 이름 (확장자 빼고). 파일이 없으면 아무것도 그리지 않습니다 */
  photo?: string;
  tone?: keyof typeof TONES;
  /** 첫 화면에 바로 보이는 사진이면 true */
  priority?: boolean;
}) {
  const src = photo ? findPhoto(photo) : "";
  if (!src) return null;

  return (
    /* 부모에 relative isolate overflow-hidden 이 있어야 제자리에 깔립니다 */
    <div aria-hidden className="absolute inset-0 -z-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(src)}
        alt=""
        className="size-full object-cover"
        {...(priority
          ? { fetchPriority: "high" as const }
          : { loading: "lazy" as const })}
      />
      <div className="absolute inset-0 bg-navy-950/82" />
      <div className={cn("absolute inset-0", TONES[tone])} />
    </div>
  );
}
