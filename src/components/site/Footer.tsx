import Link from "next/link";
import { SITE, telHref, MAP_LINKS } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SocialLinks } from "./SocialLinks";
import { OpeningHours } from "./OpeningHours";

export function Footer({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const year = 2026;

  return (
    <footer className="border-t border-ink-200 bg-ink-50 text-ink-700">
      <Container className="py-16 sm:py-20">
        {/* 전화번호 + 버튼 */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href={telHref(SITE.phone.main)}
              className="block text-[2rem] leading-none font-extrabold tabular-nums text-navy-900 transition-colors hover:text-brand-700 sm:text-[2.25rem]"
            >
              {SITE.phone.main}
            </a>
            <p className="mt-3 text-[0.875rem] text-ink-500">
              {t.footer.holidayNote}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <div className="flex flex-wrap gap-2">
              <a
                href={MAP_LINKS.naver}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-4 text-[0.8125rem] font-bold text-navy-900 ring-1 ring-ink-200 transition-colors hover:ring-brand-300"
              >
                <Icon name="mapPin" size={15} />
                {t.campuses.labels.viewOnMap}
              </a>
              <Link
                href={href(lang, "contact")}
                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-4 text-[0.8125rem] font-bold text-navy-900 ring-1 ring-ink-200 transition-colors hover:ring-brand-300"
              >
                {t.common.contact}
              </Link>
              <a
                href={SITE.booking || telHref(SITE.phone.main)}
                {...(SITE.booking
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-brand-600 px-4 text-[0.8125rem] font-bold text-white transition-colors hover:bg-brand-700"
              >
                <Icon name={SITE.booking ? "calendar" : "phone"} size={15} />
                {t.common.book}
              </a>
            </div>
            <SocialLinks />
          </div>
        </div>

        {/* 바로가기 · 연락처 · 운영시간 */}
        <div className="mt-14 grid gap-10 border-t border-ink-200 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <nav aria-label={t.footer.quickTitle}>
            <h2 className="text-[0.75rem] font-extrabold tracking-[0.04em] text-ink-400 uppercase">
              {t.footer.quickTitle}
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {t.nav.map((item) => (
                <li key={item.slug || "home"}>
                  <Link
                    href={href(lang, item.slug)}
                    className="-my-1.5 inline-flex items-center py-1.5 text-[0.875rem] font-medium text-ink-600 transition-colors hover:text-navy-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* 교습비는 학원법상 표시 항목이라 어느 페이지에서든 바로 닿게 둡니다 */}
              <li>
                <Link
                  href={`${href(lang, "programs")}#tuition`}
                  className="-my-1.5 inline-flex items-center py-1.5 text-[0.875rem] font-medium text-ink-600 transition-colors hover:text-navy-900"
                >
                  {t.footer.tuitionLink}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.75rem] font-extrabold tracking-[0.04em] text-ink-400 uppercase">
              {t.footer.contactTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-[0.875rem]">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="-my-1.5 inline-flex items-center py-1.5 break-all text-ink-600 transition-colors hover:text-navy-900"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={MAP_LINKS.naver}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-[1.7] text-ink-600 transition-colors hover:text-navy-900"
                >
                  {lang === "ko" ? SITE.address.ko : SITE.address.en}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.75rem] font-extrabold tracking-[0.04em] text-ink-400 uppercase">
              {t.footer.hoursTitle}
            </h2>
            <OpeningHours lang={lang} compact className="mt-4" />
          </div>
        </div>

        {/* 하단 바 */}
        <div className="mt-12 flex flex-col gap-3 border-t border-ink-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.75rem] text-ink-400">
            <span>{t.footer.tagline}</span>
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
              className="font-semibold text-ink-500 underline-offset-4 transition-colors hover:text-navy-900 hover:underline"
            >
              {t.footer.privacy}
            </Link>
          </div>
          <p className="text-[0.75rem] text-ink-400">
            © {year} {t.footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
