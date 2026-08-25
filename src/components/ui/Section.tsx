import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Section({
  id,
  className,
  containerClassName,
  size = "default",
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  size?: "default" | "narrow" | "wide";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

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
        "inline-flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.2em]",
        tone === "light" ? "text-brand-600" : "text-brand-200",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          tone === "light" ? "bg-brand-400" : "bg-brand-300/70",
        )}
      />
      {children}
    </span>
  );
}

/** 섹션 제목 블록. title 안의 줄바꿈(\n)은 그대로 반영됩니다. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
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
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-4 text-[1.75rem] leading-[1.28] font-bold whitespace-pre-line sm:text-[2.125rem] lg:text-[2.5rem]",
          tone === "dark" && "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-[0.9375rem] leading-[1.85] sm:text-base",
            tone === "dark" ? "text-navy-100/80" : "text-ink-600",
          )}
        >
          {description}
        </p>
      )}
      {children}
    </Reveal>
  );
}
