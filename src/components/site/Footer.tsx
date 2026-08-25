import Link from "next/link";
import { SITE, telHref, MAP_LINKS } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { OpeningHours } from "./OpeningHours";

export function Footer({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const year = 2026;

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(48rem 26rem at 8% 0%, rgba(52,101,255,0.28) 0, transparent 60%), radial-gradient(36rem 22rem at 96% 12%, rgba(20,184,163,0.16) 0, transparent 62%)",
        }}
      />

      <Container size="wide" className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* 브랜드 */}
          <div className="lg:col-span-4">
            <Logo lang={lang} tone="dark" />
            <p className="mt-5 max-w-xs text-[0.875rem] leading-[1.85] text-white/60">
              {t.footer.tagline}
            </p>
            <SocialLinks tone="dark" className="mt-6" />
          </div>

          {/* 바로가기 */}
          <nav className="lg:col-span-2" aria-label={t.footer.quickTitle}>
            <h2 className="text-[0.6875rem] font-bold tracking-[0.18em] text-white/40 uppercase">
              {t.footer.quickTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {[...t.nav, { slug: "apply", label: t.common.applyLong }].map(
                (item) => (
                  <li key={item.slug || "home"}>
                    <Link
                      href={href(lang, item.slug)}
                      className="text-[0.875rem] font-medium text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* 연락처 */}
          <div className="lg:col-span-3">
            <h2 className="text-[0.6875rem] font-bold tracking-[0.18em] text-white/40 uppercase">
              {t.footer.contactTitle}
            </h2>
            <ul className="mt-5 space-y-4 text-[0.875rem]">
              <li className="flex gap-3">
                <Icon name="phone" size={17} className="mt-0.5 shrink-0 text-brand-300" />
                <span className="flex flex-col gap-1">
                  <a
                    href={telHref(SITE.phone.main)}
                    className="font-bold tabular-nums text-white transition-colors hover:text-brand-200"
                  >
                    {SITE.phone.main}
                  </a>
                  <a
                    href={telHref(SITE.phone.mobile)}
                    className="tabular-nums text-white/60 transition-colors hover:text-white"
                  >
                    {SITE.phone.mobile}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" size={17} className="mt-0.5 shrink-0 text-brand-300" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-white/70 transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mapPin" size={17} className="mt-0.5 shrink-0 text-brand-300" />
                <a
                  href={MAP_LINKS.naver}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-[1.7] text-white/70 transition-colors hover:text-white"
                >
                  {lang === "ko" ? SITE.address.ko : SITE.address.en}
                </a>
              </li>
            </ul>
          </div>

          {/* 운영시간 */}
          <div className="lg:col-span-3">
            <h2 className="text-[0.6875rem] font-bold tracking-[0.18em] text-white/40 uppercase">
              {t.footer.hoursTitle}
            </h2>
            <OpeningHours lang={lang} tone="dark" compact className="mt-5" />
            <p className="mt-3 px-2.5 text-[0.75rem] text-white/45">
              {t.footer.holidayNote}
            </p>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.75rem] text-white/45">
            <span>
              {t.footer.ceoLabel} {SITE.ceo}
            </span>
            {SITE.business.registrationNo && (
              <span>사업자등록번호 {SITE.business.registrationNo}</span>
            )}
            {SITE.business.academyNo && (
              <span>학원등록번호 {SITE.business.academyNo}</span>
            )}
            <Link
              href={href(lang, "privacy")}
              className="font-semibold text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {t.footer.privacy}
            </Link>
          </div>
          <p className="text-[0.75rem] text-white/35">
            © {year} {t.footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
