import { cn } from "@/lib/utils";

/**
 * 본문 폭. 기준 폭은 980px 입니다. (좌우 여백 20px)
 */
export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5",
        size === "narrow" && "max-w-[46rem]",
        size === "default" && "max-w-[61.25rem]",
        size === "wide" && "max-w-[61.25rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}
