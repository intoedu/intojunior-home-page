import type { Metadata } from "next";
import Link from "next/link";
import { getDict, href } from "@/content";
import { SiteShell } from "@/components/site/SiteShell";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import "./globals.css";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 | 인투주니어학원 대전도안점",
  robots: { index: false, follow: true },
};

/**
 * 404 페이지.
 * 언어별 루트 레이아웃 밖에 있어 <html> 은 Next.js 가 만들어 줍니다.
 * 여기서는 본문만 렌더링합니다.
 */
export default function NotFound() {
  const t = getDict("ko");
  const en = getDict("en");

  return (
    <SiteShell lang="ko">
      {/* 이 페이지는 언어별 루트 레이아웃 밖에 있어 <html> 을 Next.js 가 만듭니다.
          화면 낭독기를 위해 문서 언어만 지정해 줍니다. */}
      <script
        dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang="ko"' }}
      />
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-brand-mesh py-32 text-white">
        <div aria-hidden className="absolute inset-0 bg-grid-faint opacity-40" />
        <Container className="relative text-center">
          <p className="font-display text-[4rem] leading-none font-extrabold tracking-tight text-white/20 sm:text-[6rem]">
            404
          </p>
          <h1 className="mt-4 text-[1.75rem] font-extrabold text-white sm:text-[2.25rem]">
            {t.notFound.title}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[0.9375rem] leading-[1.9] text-white/65">
            {t.notFound.description}
          </p>
          <p className="mx-auto mt-2 max-w-md text-[0.8125rem] leading-relaxed text-white/40">
            {en.notFound.description}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={href("ko")}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-[0.9375rem] font-bold text-navy-900 transition-transform hover:-translate-y-0.5"
            >
              {t.common.backHome}
              <Icon name="arrowRight" size={17} />
            </Link>
            <Link
              href={href("ko", "contact")}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 text-[0.9375rem] font-bold text-white ring-1 ring-white/20 transition-transform hover:-translate-y-0.5"
            >
              {t.common.contact}
            </Link>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
