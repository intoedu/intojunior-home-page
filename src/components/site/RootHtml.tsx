import type { Lang } from "@/content";
import { SiteShell } from "./SiteShell";
import "@/app/globals.css";

/**
 * 언어별 <html> 루트.
 * 서체(Pretendard)는 globals.css 에서 사이트 안에 함께 담아 불러옵니다.
 * 외부 서비스에 접속하지 않으므로 인터넷 없이도 빌드됩니다.
 */
export function RootHtml({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className="h-full">
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
