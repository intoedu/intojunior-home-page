import Link from "next/link";
import { cn } from "@/lib/utils";
import { getDict, href, type Lang } from "@/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoBackdrop } from "@/components/ui/PhotoBackdrop";

/**
 * 하위 페이지 공통 히어로 (딥 네이비)
 *
 * photo 에 public/photos/ 의 파일 이름(확장자 빼고)을 넘기면
 * 홈 첫 화면처럼 배경 사진이 깔립니다. 파일이 없으면 네이비 단색으로 나옵니다.
 */
export function PageHero({
  lang,
  eyebrow,
  title,
  description,
  crumbLabel,
  photo,
  children,
  className,
}: {
  lang: Lang;
  eyebrow?: string;
  title: string;
  description?: string;
  crumbLabel: string;
  /** 배경 사진 이름 — 예) "h-about" */
  photo?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const t = getDict(lang);

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-navy-950 text-white",
        className,
      )}
    >
      <PhotoBackdrop photo={photo} tone="edge" priority />

      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {/* 브레드크럼 */}
          <Reveal>
            <nav
              aria-label="breadcrumb"
              className="flex items-center gap-1.5 text-[0.8125rem] font-medium text-white/45"
            >
              <Link
                href={href(lang)}
                className="-my-2 inline-flex items-center py-2 transition-colors hover:text-white"
              >
                {t.nav[0].label}
              </Link>
              <Icon name="chevronRight" size={13} />
              <span className="text-white/80">{crumbLabel}</span>
            </nav>
          </Reveal>

          <Reveal delay={60} className="mt-7 max-w-[40rem]">
            {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
            <h1 className="mt-3 text-[2rem] leading-[1.25] font-extrabold tracking-[-0.015em] whitespace-pre-line text-white sm:text-[2.75rem] lg:text-[3.25rem]">
              {title}
            </h1>
            {description && (
              <p className="mt-6 text-[1rem] leading-[1.75] text-white/70 sm:text-[1.125rem]">
                {description}
              </p>
            )}
          </Reveal>

          {children && (
            <Reveal delay={120} className="mt-9">
              {children}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
