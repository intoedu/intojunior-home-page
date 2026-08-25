import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { getDict, type Lang } from "@/content";

type MetaKey = keyof ReturnType<typeof getDict>["meta"];

const pathFor = (lang: Lang, slug: string) => {
  const base = lang === "ko" ? "" : "/en";
  return slug ? `${base}/${slug}/` : `${base}/` || "/";
};

/** 페이지별 SEO 메타데이터를 만들어 줍니다. */
export function pageMetadata(
  lang: Lang,
  key: MetaKey,
  slug = "",
): Metadata {
  const t = getDict(lang);
  const m = t.meta[key];
  const path = pathFor(lang, slug);
  const url = `${SITE.url}${path}`;

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        ko: `${SITE.url}${pathFor("ko", slug)}`,
        en: `${SITE.url}${pathFor("en", slug)}`,
        "x-default": `${SITE.url}${pathFor("ko", slug)}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: lang === "ko" ? SITE.brand.fullKo : SITE.brand.fullEn,
      locale: lang === "ko" ? "ko_KR" : "en_US",
      url,
      title: m.title,
      description: m.description,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: lang === "ko" ? SITE.brand.fullKo : SITE.brand.fullEn,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/og.png"],
    },
  };
}

/** 검색엔진에 학원 정보를 알려주는 구조화 데이터 (JSON-LD) */
export function schoolJsonLd(lang: Lang) {
  const t = getDict(lang);
  const dayMap: Record<number, string> = {
    0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday",
    4: "Thursday", 5: "Friday", 6: "Saturday",
  };

  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE.url}#organization`,
    name: lang === "ko" ? SITE.brand.fullKo : SITE.brand.fullEn,
    alternateName: SITE.brand.en,
    url: SITE.url,
    description: t.meta.home.description,
    telephone: SITE.phone.main,
    email: SITE.email,
    founder: { "@type": "Person", name: SITE.ceo },
    address: {
      "@type": "PostalAddress",
      streetAddress: "691 Dongseo-daero, 3F #302",
      addressLocality: "Yuseong-gu",
      addressRegion: "Daejeon",
      postalCode: SITE.address.postalCode,
      addressCountry: "KR",
    },
    openingHoursSpecification: SITE.hours
      .filter((h) => !h.closed)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${dayMap[h.day]}`,
        opens: h.open,
        closes: h.close,
      })),
    sameAs: Object.values(SITE.social).filter((v) => v.length > 0),
  };
}

/** FAQ 구조화 데이터 — 검색 결과에 질문/답변이 노출될 수 있습니다. */
export function faqJsonLd(lang: Lang) {
  const t = getDict(lang);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
