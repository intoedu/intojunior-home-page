import { Outfit } from "next/font/google";
import type { Lang } from "@/content";
import { SiteShell } from "./SiteShell";
import "@/app/globals.css";

/** 영문·숫자용 디스플레이 서체 */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display-latin",
  display: "swap",
});

/**
 * 언어별 <html> 루트.
 * 한국어 본문 서체(Pretendard)는 globals.css 에서 자체 호스팅으로 불러옵니다.
 */
export function RootHtml({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={`${outfit.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white antialiased">
        {/* 자바스크립트가 꺼진 환경에서도 모든 내용이 보이도록 */}
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <SiteShell lang={lang}>{children}</SiteShell>
      </body>
    </html>
  );
}
