import { SITE, telHref, MAP_LINKS } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { PageHero } from "@/components/sections/PageHero";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SocialLinks, socialEntries } from "@/components/site/SocialLinks";
import Link from "next/link";

export function ContactView({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const c = t.contact;
  const hasSocial = socialEntries().length > 0;

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        description={c.hero.description}
        crumbLabel={t.nav[5].label}
      />

      <Section size="wide" className="bg-white">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* 폼 */}
          <Reveal className="lg:col-span-7">
            <InquiryForm lang={lang} mode="contact" />
          </Reveal>

          {/* 연락 수단 */}
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <h2 className="text-[1.375rem] font-bold text-navy-900">
                {c.channels.title}
              </h2>
              <p className="mt-2 text-[0.875rem] text-ink-600">
                {c.channels.description}
              </p>
            </Reveal>

            <div className="mt-7 space-y-3">
              <Reveal delay={120}>
                <a
                  href={telHref(SITE.phone.main)}
                  className="group flex items-start gap-4 rounded-2xl bg-navy-950 p-6 text-white transition-transform hover:-translate-y-1"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-200">
                    <Icon name="phone" size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[0.9375rem] font-bold">
                      {c.channels.callTitle}
                    </span>
                    <span className="mt-1 block text-[1.25rem] font-extrabold tabular-nums">
                      {SITE.phone.main}
                    </span>
                    <span className="mt-1 block text-[0.75rem] tabular-nums text-white/50">
                      {SITE.phone.mobile}
                    </span>
                    <span className="mt-2 block text-[0.75rem] leading-relaxed text-white/55">
                      {c.channels.callDesc}
                    </span>
                  </span>
                  <Icon
                    name="arrowUpRight"
                    size={18}
                    className="shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              </Reveal>

              <Reveal delay={160}>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-start gap-4 rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100 transition-transform hover:-translate-y-1"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft">
                    <Icon name="mail" size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[0.9375rem] font-bold text-navy-900">
                      {c.channels.emailTitle}
                    </span>
                    <span className="mt-1 block text-[0.875rem] font-semibold break-all text-brand-700">
                      {SITE.email}
                    </span>
                    <span className="mt-2 block text-[0.75rem] leading-relaxed text-ink-500">
                      {c.channels.emailDesc}
                    </span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={200}>
                <a
                  href={MAP_LINKS.naver}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100 transition-transform hover:-translate-y-1"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft">
                    <Icon name="mapPin" size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[0.9375rem] font-bold text-navy-900">
                      {c.channels.visitTitle}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] leading-relaxed text-ink-700">
                      {lang === "ko" ? SITE.address.ko : SITE.address.en}
                    </span>
                    <span className="mt-2 block text-[0.75rem] leading-relaxed text-ink-500">
                      {c.channels.visitDesc}
                    </span>
                  </span>
                  <Icon
                    name="arrowUpRight"
                    size={18}
                    className="shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              </Reveal>

              {hasSocial && (
                <Reveal delay={240}>
                  <div className="rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100">
                    <p className="text-[0.9375rem] font-bold text-navy-900">
                      {c.channels.snsTitle}
                    </p>
                    <p className="mt-1 text-[0.75rem] leading-relaxed text-ink-500">
                      {c.channels.snsDesc}
                    </p>
                    <SocialLinks className="mt-4" />
                  </div>
                </Reveal>
              )}

              <Reveal delay={320}>
                <Link
                  href={href(lang, "faq")}
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100 transition-transform hover:-translate-y-1"
                >
                  <span>
                    <span className="block text-[0.9375rem] font-bold text-navy-900">
                      {t.faq.stillCurious.title}
                    </span>
                    <span className="mt-1 block text-[0.75rem] leading-relaxed text-ink-600">
                      {t.faq.hero.description}
                    </span>
                  </span>
                  <Icon
                    name="arrowRight"
                    size={18}
                    className="shrink-0 text-brand-600 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
