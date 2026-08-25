export type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[];

/** 조건부 className 을 안전하게 합칩니다. */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (v: ClassValue) => {
    if (!v && v !== 0) return;
    if (Array.isArray(v)) {
      v.forEach(walk);
      return;
    }
    out.push(String(v));
  };
  inputs.forEach(walk);
  return out.join(" ");
}

/** "13:00" → "오후 1:00" / "1:00 PM" */
export function formatTime(t: string, lang: "ko" | "en"): string {
  if (!t) return "";
  const [hStr, mStr] = t.split(":");
  const h = Number(hStr);
  const m = mStr ?? "00";
  if (lang === "en") {
    const period = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return `${h12}:${m} ${period}`;
  }
  const period = h >= 12 ? "오후" : "오전";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${period} ${h12}:${m}`;
}

/** 서울 시간대 기준 현재 요일/분 */
export function seoulNow(): { day: number; minutes: number } {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const dayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };
  const day = dayMap[get("weekday")] ?? 0;
  const hour = Number(get("hour")) % 24;
  const minute = Number(get("minute"));
  return { day, minutes: hour * 60 + minute };
}

const toMinutes = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + (m || 0);
};

export type HourRow = {
  readonly day: number;
  readonly open: string;
  readonly close: string;
  readonly closed: boolean;
};

/** 지금 영업 중인지 판단합니다. */
export function isOpenNow(rows: readonly HourRow[]): boolean {
  const { day, minutes } = seoulNow();
  const row = rows.find((r) => r.day === day);
  if (!row || row.closed) return false;
  return minutes >= toMinutes(row.open) && minutes < toMinutes(row.close);
}

/** 오늘 요일 (서울 기준) */
export function todaySeoul(): number {
  return seoulNow().day;
}

/** 전화번호를 사람이 읽기 좋게 */
export function prettyPhone(num: string): string {
  return num;
}
