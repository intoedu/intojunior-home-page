import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "accent";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-glow hover:bg-brand-700 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-white text-navy-900 ring-1 ring-ink-200 shadow-soft hover:ring-brand-300 hover:text-brand-700 hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-transparent text-navy-900 hover:bg-brand-50 hover:text-brand-700",
  onDark:
    "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0",
  accent:
    "bg-accent-400 text-navy-950 shadow-[0_16px_40px_-16px_rgba(249,138,7,0.7)] hover:bg-accent-300 hover:-translate-y-0.5 active:translate-y-0",
};

const SIZES: Record<Size, string> = {
  sm: "h-10 px-4 text-[0.875rem] gap-1.5 rounded-xl",
  md: "h-12 px-5 text-[0.9375rem] gap-2 rounded-2xl",
  lg: "h-14 px-7 text-base gap-2.5 rounded-2xl",
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
  "inline-flex items-center justify-center font-semibold tracking-[-0.01em] transition-all duration-200 will-change-transform select-none";

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
        "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
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
