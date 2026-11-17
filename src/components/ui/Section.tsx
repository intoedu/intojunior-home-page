import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Section({
  id,
  className,
  containerClassName,
  size = "default",
  /** 히어로 바로 아래에 오는 첫 섹션은 위 여백을 줄입니다 */
  tightTop = false,
  /** 배경에 깔 요소 (PhotoBackdrop 등). className 에 relative isolate overflow-hidden 을 함께 넣어 주세요 */
  backdrop,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  size?: "default" | "narrow" | "wide";
  tightTop?: boolean;
  backdrop?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        tightTop ? "pt-16 pb-20 sm:pt-20 sm:pb-25" : "py-20 sm:py-25",
        className,
      )}
    >
      {backdrop}
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

/** 섹션 제목 위의 작은 영문 라벨 */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "block text-[0.875rem] font-extrabold tracking-[0.04em] uppercase",
        tone === "light" ? "text-brand-600" : "text-brand-300",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** 섹션 제목 블록. title 안의 줄바꿈(\n)은 그대로 반영됩니다. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        align === "center" ? "mx-auto max-w-[44rem] text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-3 text-[1.75rem] leading-[1.3] font-extrabold tracking-[-0.01em] whitespace-pre-line sm:text-[2.125rem] lg:text-[2.5rem]",
          tone === "dark" ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-[0.9375rem] leading-[1.8] sm:text-base",
            tone === "dark" ? "text-navy-100/75" : "text-ink-500",
          )}
        >
          {description}
        </p>
      )}
      {children}
    </Reveal>
  );
}
