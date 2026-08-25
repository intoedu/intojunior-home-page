"use client";

import { useCallback } from "react";
import { cn } from "@/lib/utils";

/**
 * 화면에 들어오면 부드럽게 나타나는 래퍼.
 * 상태 없이 DOM 클래스만 토글해 리렌더가 발생하지 않습니다.
 * 모션 최소화 설정을 켠 사용자에게는 바로 표시됩니다.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "span";
}) {
  const attach = useCallback((el: HTMLElement | null) => {
    if (!el) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("reveal-in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={attach as never}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
