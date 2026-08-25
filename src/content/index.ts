import { ko, type Dict } from "./ko";
import { en } from "./en";

export type Lang = "ko" | "en";

const DICTS: Record<Lang, Dict> = { ko, en };

export const getDict = (lang: Lang): Dict => DICTS[lang];

/** 언어별 링크 경로를 만들어 줍니다. ("" → "/" 또는 "/en/") */
export const href = (lang: Lang, slug = ""): string => {
  const base = lang === "ko" ? "" : "/en";
  return slug ? `${base}/${slug}/` : `${base}/` || "/";
};

/** 반대쪽 언어의 같은 페이지 경로 */
export const altHref = (lang: Lang, slug = ""): string =>
  href(lang === "ko" ? "en" : "ko", slug);

export const LANGS: Lang[] = ["ko", "en"];

export type { Dict };
