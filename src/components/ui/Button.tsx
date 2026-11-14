import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "accent";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary:
    "bg-white text-navy-900 ring-1 ring-ink-200 hover:ring-brand-300 hover:text-brand-700",
  ghost: "bg-transparent text-navy-900 hover:bg-brand-50 hover:text-brand-700",
  onDark: "bg-white/12 text-white hover:bg-white/20",
  accent: "bg-accent-400 text-navy-950 hover:bg-accent-300",
};

/** 높이·글자 크기는 레퍼런스(인투유학)와 같은 값입니다 */
const SIZES: Record<Size, string> = {
  sm: "h-10 px-5 text-[0.875rem] gap-1.5",
  md: "h-12 px-6 text-[0.9375rem] gap-2",
  lg: "h-14 px-7 text-base gap-2.5",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center rounded-full font-bold tracking-[-0.01em] transition-colors duration-200 select-none";

export function Button({
  href,
  external,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  children,
  ...rest
}: BaseProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">) {
  const content = (
    <>
      {icon && iconPosition === "left" && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {icon && iconPosition === "right" && <Icon name={icon} size={18} />}
    </>
  );
  const cls = cn(base, VARIANTS[variant], SIZES[size], className);

  if (external) {
    return (
      <a
        href={href}
        className={cls}
        rel="noopener noreferrer"
        target={href.startsWith("http") ? "_blank" : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}

export function ButtonEl({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  children,
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        base,
        VARIANTS[variant],
        SIZES[size],
        "disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...rest}
    >
      {icon && iconPosition === "left" && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {icon && iconPosition === "right" && <Icon name={icon} size={18} />}
    </button>
  );
}
