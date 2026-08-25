import type { Lang } from "@/content";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileCta } from "./MobileCta";

export function SiteShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header lang={lang} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer lang={lang} />
      <MobileCta lang={lang} />
    </>
  );
}
