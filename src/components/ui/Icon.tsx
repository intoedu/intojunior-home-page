import type { SVGProps } from "react";

export type IconName =
  | "book" | "mic" | "chart" | "star" | "target" | "speech" | "shield"
  | "handshake" | "bridge" | "grammar" | "bus" | "car" | "building"
  | "phone" | "mail" | "mapPin" | "clock" | "arrowRight" | "arrowUpRight"
  | "check" | "chevronDown" | "chevronRight" | "menu" | "close" | "play"
  | "instagram" | "youtube" | "blog" | "kakao" | "globe" | "sparkle"
  | "quote" | "calendar" | "user" | "copy" | "send" | "route";

const PATHS: Record<IconName, React.ReactNode> = {
  book: (
    <>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 0 4 21.5z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M9 7h7" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <path d="M12 17v5M8.5 22h7" />
    </>
  ),
  chart: (
    <>
      <path d="M3 20h18" />
      <path d="M6.5 20V12" />
      <path d="M12 20V5" />
      <path d="M17.5 20v-5.5" />
    </>
  ),
  star: (
    <path d="m12 2.8 2.7 5.7 6.1.9-4.4 4.4 1 6.3-5.4-3-5.4 3 1-6.3L3.2 9.4l6.1-.9z" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  speech: (
    <>
      <path d="M20 4H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v4l4.5-4H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.7 4.5 5.6v6.1c0 4.6 3.1 8.3 7.5 9.6 4.4-1.3 7.5-5 7.5-9.6V5.6z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7.1-.9l.5.3a2 2 0 0 0 1.4.2L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </>
  ),
  bridge: (
    <>
      <path d="M3 18h18" />
      <path d="M3 10a9 9 0 0 1 18 0" />
      <path d="M7 18v-6M12 18V9M17 18v-6" />
    </>
  ),
  grammar: (
    <>
      <path d="m3.5 15.5 3.9-9.3h.6l3.9 9.3" />
      <path d="M5.1 12.3h5.6" />
      <path d="m13.8 14.2 2.6 2.6 4.6-5.2" />
    </>
  ),
  bus: (
    <>
      <rect x="4" y="3.5" width="16" height="13" rx="2.5" />
      <path d="M4 11h16" />
      <path d="M7 16.5v2M17 16.5v2" />
      <circle cx="8" cy="13.8" r=".9" fill="currentColor" stroke="none" />
      <circle cx="16" cy="13.8" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  car: (
    <>
      <path d="M4.5 16.5h15" />
      <path d="M5.5 16.5V19a.9.9 0 0 1-.9.9H4a.9.9 0 0 1-.9-.9v-5.3l2-5A1.8 1.8 0 0 1 6.8 7.5h10.4a1.8 1.8 0 0 1 1.7 1.2l2 5V19a.9.9 0 0 1-.9.9h-.6a.9.9 0 0 1-.9-.9v-2.5" />
      <path d="M3.1 13.7h17.8" />
      <circle cx="7.2" cy="13.7" r=".2" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M3 21h18" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h2.1l1.6 4-1.9 1.4a12 12 0 0 0 5.6 5.6l1.4-1.9 4 1.6v2.1a2.2 2.2 0 0 1-2.4 2.2C10.4 17.9 5.9 13.4 4.4 5.9A2.2 2.2 0 0 1 6.6 3.5z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.6 6.4 7.5 5.6a1.5 1.5 0 0 0 1.8 0l7.5-5.6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21.5s7-5.8 7-11.3a7 7 0 1 0-14 0C5 15.7 12 21.5 12 21.5z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.2 2" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  chevronDown: <path d="m6 9.5 6 6 6-6" />,
  chevronRight: <path d="m9.5 6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  play: (
    <path
      d="M8.6 5.4 18.4 12 8.6 18.6z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.3 9.4 4.7 2.6-4.7 2.6z" fill="currentColor" stroke="none" />
    </>
  ),
  blog: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="3.5" />
      <path d="M8.2 15.5V8.6l4.2 6.9V8.6" />
      <path d="M16.4 15.5V8.6" />
    </>
  ),
  kakao: (
    <>
      <path d="M12 4c-4.5 0-8 2.7-8 6.1 0 2.2 1.5 4.1 3.7 5.2L6.8 19l3.6-2.2c.5.1 1 .1 1.6.1 4.5 0 8-2.7 8-6.1S16.5 4 12 4z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 9.8h17.6M3.2 14.2h17.6" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5 13.6 9 19 10.6 13.6 12.2 12 17.7 10.4 12.2 5 10.6 10.4 9z" />
      <path d="M18 16.5 18.7 18.8 21 19.5 18.7 20.2 18 22.5 17.3 20.2 15 19.5 17.3 18.8z" />
    </>
  ),
  quote: (
    <path d="M9.4 6.5C6.6 7.8 5 10.2 5 13.2c0 2.6 1.5 4.3 3.6 4.3 1.9 0 3.3-1.4 3.3-3.2 0-1.8-1.3-3.1-3-3.1-.3 0-.6 0-.8.1.4-1.4 1.5-2.6 3.1-3.4zm9 0c-2.8 1.3-4.4 3.7-4.4 6.7 0 2.6 1.5 4.3 3.6 4.3 1.9 0 3.3-1.4 3.3-3.2 0-1.8-1.3-3.1-3-3.1-.3 0-.6 0-.8.1.4-1.4 1.5-2.6 3.1-3.4z" />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17" />
      <path d="M8 3v4M16 3v4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.2" r="3.7" />
      <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M15 6.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h.5" />
    </>
  ),
  send: (
    <>
      <path d="M21 3 10.5 13.5" />
      <path d="M21 3 14.4 21l-3.9-7.5L3 9.6z" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18.5" r="2.5" />
      <circle cx="18" cy="5.5" r="2.5" />
      <path d="M15.5 5.5H9.8A3.3 3.3 0 0 0 9.8 12h4.4a3.3 3.3 0 0 1 0 6.5H8.5" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  /** px 크기 (기본 24) */
  size?: number;
};

export function Icon({ name, size = 24, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
