import Link from "next/link";
import { cn } from "@/lib/utils";
import { getDict, href, type Lang } from "@/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/** 하위 페이지 공통 히어로 (딥 네이비 그라디언트) */
export function PageHero({
  lang,
  eyebrow,
  title,
  description,
  crumbLabel,
  children,
  className,
}: {
  lang: Lang;
  eyebrow?: string;
  title: string;
  description?: string;
  crumbLabel: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const t = getDict(lang);

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-brand-mesh text-white",
        className,
      )}
    >
      <div aria-hidden className="absolute inset-0 bg-grid-faint opacity-40" />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 size-96 rounded-full bg-brand-500/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-16 size-80 rounded-full bg-mint-500/15 blur-3xl"
      />

      <Container
        size="wide"
        className="relative pb-14 sm:pb-16"
        // 고정 헤더 높이만큼 여백 확보
      >
        <div style={{ paddingTop: "calc(var(--header-h) + 3.5rem)" }}>
          {/* 브레드크럼 */}
          <Reveal>
            <nav
              aria-label="breadcrumb"
              className="flex items-center gap-1.5 text-[0.75rem] font-medium text-white/45"
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

          <Reveal delay={60} className="mt-6 max-w-3xl">
            {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
            <h1 className="mt-4 text-[2rem] leading-[1.2] font-extrabold tracking-[-0.03em] whitespace-pre-line text-white sm:text-[2.75rem] lg:text-[3.25rem]">
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-2xl text-[0.9375rem] leading-[1.9] text-white/70 sm:text-[1.0625rem]">
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

      {/* 하단 곡선 */}
      <div
        aria-hidden
        className="absolute inset-x-0 -bottom-px h-8 rounded-t-[2.5rem] bg-white sm:h-10 sm:rounded-t-[3.5rem]"
      />
      <div className="h-8 sm:h-10" />
    </section>
  );
}
