"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE, telHref } from "@/config/site";
import { getDict, href, type Lang } from "@/content";
import { Icon } from "@/components/ui/Icon";
import { ButtonEl } from "@/components/ui/Button";

type Mode = "contact" | "apply";
type Status = "idle" | "sending" | "success" | "error";

const inputBase =
  "w-full rounded-xl border-0 bg-white px-4 py-3 text-[0.9375rem] text-navy-900 shadow-soft ring-1 ring-ink-200 outline-none transition-all placeholder:text-ink-400 focus:ring-2 focus:ring-brand-500";

function Field({
  label,
  required,
  error,
  htmlFor,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-center gap-1.5 text-[0.8125rem] font-bold text-navy-900"
      >
        {label}
        {required && <span className="text-brand-600">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-[0.75rem] font-medium text-red-600">
          <Icon name="close" size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

export function InquiryForm({
  lang,
  mode = "contact",
}: {
  lang: Lang;
  mode?: Mode;
}) {
  const t = getDict(lang);
  const f = t.form;
  const isApply = mode === "apply";

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [usedMailFallback, setUsedMailFallback] = useState(false);

  const subjectPrefix = useMemo(
    () =>
      isApply
        ? lang === "ko"
          ? "[레벨테스트·상담 예약]"
          : "[Level test booking]"
        : lang === "ko"
          ? "[홈페이지 문의]"
          : "[Website enquiry]",
    [isApply, lang],
  );

  const validate = (data: FormData) => {
    const next: Record<string, string> = {};
    const req = (key: string) => {
      const v = String(data.get(key) ?? "").trim();
      if (!v) next[key] = f.validation.required;
      return v;
    };

    req("parentName");
    if (isApply) req("studentName");

    const phone = req("phone");
    if (phone && !/^[0-9+\-\s()]{7,20}$/.test(phone)) {
      next.phone = f.validation.phone;
    }

    const email = String(data.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      next.email = f.validation.email;
    }

    if (!isApply) req("message");
    if (!data.get("consent")) next.consent = f.validation.consent;

    return next;
  };

  const buildBody = (data: FormData) => {
    const rows: [string, string][] = [
      [f.fields.parentName, String(data.get("parentName") ?? "")],
      [f.fields.studentName, String(data.get("studentName") ?? "")],
      [f.fields.phone, String(data.get("phone") ?? "")],
      [f.fields.email, String(data.get("email") ?? "")],
      [f.fields.grade, String(data.get("grade") ?? "")],
      [f.fields.program, String(data.get("program") ?? "")],
    ];
    if (isApply) {
      rows.push([f.fields.preferredDate, String(data.get("preferredDate") ?? "")]);
      rows.push([f.fields.preferredTime, String(data.get("preferredTime") ?? "")]);
    }
    rows.push([f.fields.route, String(data.get("route") ?? "")]);
    rows.push([f.fields.message, String(data.get("message") ?? "")]);

    return rows
      .filter(([, v]) => v.trim().length > 0)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    const body = buildBody(data);
    const subject = `${subjectPrefix} ${data.get("parentName")}`;

    /* 1) 폼 전송 주소가 설정되어 있으면 → 자동 접수 */
    if (SITE.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(SITE.formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: (() => {
            data.append("_subject", subject);
            data.append("_summary", body);
            return data;
          })(),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("success");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    /* 2) 설정 전에는 → 메일 앱으로 내용이 채워진 채 열립니다 */
    setUsedMailFallback(true);
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.assign(mailto);
    setStatus("success");
    form.reset();
  };

  /* ------------------------------------------------------------ 완료 화면 */
  if (status === "success") {
    return (
      <div className="rounded-[1.75rem] bg-white p-8 text-center shadow-card ring-1 ring-ink-100 sm:p-12">
        <span className="mx-auto inline-flex size-16 items-center justify-center rounded-2xl bg-mint-100 text-mint-600">
          <Icon name="check" size={30} />
        </span>
        <h3 className="mt-6 text-[1.375rem] font-bold text-navy-900">
          {f.successTitle}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-[1.85] text-ink-600">
          {usedMailFallback ? f.mailFallbackNotice : f.successBody}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={telHref(SITE.phone.main)}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-navy-900 px-5 text-[0.9375rem] font-bold text-white transition-colors hover:bg-navy-800"
          >
            <Icon name="phone" size={17} />
            {SITE.phone.main}
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setUsedMailFallback(false);
            }}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-5 text-[0.9375rem] font-bold text-ink-600 ring-1 ring-ink-200 transition-colors hover:bg-ink-50"
          >
            {f.another}
          </button>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------- 입력 */
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[1.75rem] bg-white p-6 shadow-card ring-1 ring-ink-100 sm:p-8 lg:p-10"
    >
      <h3 className="text-[1.25rem] font-bold text-navy-900">
        {isApply ? f.applyTitle : f.contactTitle}
      </h3>

      {/* 스팸 방지용 숨김 필드 */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field
          label={f.fields.parentName}
          required
          htmlFor="parentName"
          error={errors.parentName}
        >
          <input
            id="parentName"
            name="parentName"
            type="text"
            autoComplete="name"
            className={cn(inputBase, errors.parentName && "ring-red-400")}
          />
        </Field>

        <Field
          label={f.fields.studentName}
          required={isApply}
          htmlFor="studentName"
          error={errors.studentName}
        >
          <input
            id="studentName"
            name="studentName"
            type="text"
            className={cn(inputBase, errors.studentName && "ring-red-400")}
          />
        </Field>

        <Field label={f.fields.phone} required htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="010-0000-0000"
            className={cn(inputBase, errors.phone && "ring-red-400")}
          />
        </Field>

        <Field label={f.fields.email} htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className={cn(inputBase, errors.email && "ring-red-400")}
          />
        </Field>

        <Field label={f.fields.grade} htmlFor="grade">
          <select id="grade" name="grade" defaultValue="" className={inputBase}>
            <option value="" disabled>
              {f.fields.gradePlaceholder}
            </option>
            {f.grades.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </Field>

        <Field label={f.fields.program} htmlFor="program">
          <select id="program" name="program" defaultValue="" className={inputBase}>
            <option value="" disabled>
              {f.fields.programPlaceholder}
            </option>
            {f.programOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>

        {isApply && (
          <>
            <Field label={f.fields.preferredDate} htmlFor="preferredDate">
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                className={inputBase}
              />
            </Field>

            <Field label={f.fields.preferredTime} htmlFor="preferredTime">
              <select
                id="preferredTime"
                name="preferredTime"
                defaultValue=""
                className={inputBase}
              >
                <option value="" disabled>
                  {f.fields.timePlaceholder}
                </option>
                {f.timeOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>
          </>
        )}

        <Field label={f.fields.route} htmlFor="route" className="sm:col-span-2">
          <select id="route" name="route" defaultValue="" className={inputBase}>
            <option value="" disabled>
              {f.fields.routePlaceholder}
            </option>
            {f.routeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label={f.fields.message}
          required={!isApply}
          htmlFor="message"
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder={
              isApply
                ? f.fields.applyMessagePlaceholder
                : f.fields.messagePlaceholder
            }
            className={cn(
              inputBase,
              "resize-y leading-[1.8]",
              errors.message && "ring-red-400",
            )}
          />
        </Field>
      </div>

      {/* 개인정보 동의 */}
      <div className="mt-7 rounded-2xl bg-ink-50 p-4 ring-1 ring-ink-100">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            value="agree"
            className="mt-0.5 size-4.5 shrink-0 cursor-pointer rounded border-ink-300 accent-brand-600"
          />
          <span className="text-[0.8125rem] leading-relaxed text-ink-700">
            <span className="font-bold text-navy-900">{f.consent.label}</span>
            <span className="ml-1 text-brand-600">*</span>
            <Link
              href={href(lang, "privacy")}
              className="ml-2 font-semibold text-brand-600 underline-offset-2 hover:underline"
            >
              {f.consent.link}
            </Link>
            <span className="mt-1.5 block text-[0.75rem] leading-relaxed text-ink-500">
              {f.consent.summary}
            </span>
          </span>
        </label>
        {errors.consent && (
          <p className="mt-2 flex items-center gap-1 text-[0.75rem] font-medium text-red-600">
            <Icon name="close" size={12} />
            {errors.consent}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="mt-5 rounded-2xl bg-red-50 p-4 ring-1 ring-red-200">
          <p className="text-[0.875rem] font-bold text-red-700">{f.errorTitle}</p>
          <p className="mt-1 text-[0.8125rem] leading-relaxed text-red-600">
            {f.errorBody}
          </p>
        </div>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <ButtonEl
          type="submit"
          size="lg"
          icon="send"
          disabled={status === "sending"}
          className="w-full sm:w-auto"
        >
          {status === "sending"
            ? f.submitting
            : isApply
              ? f.submitApply
              : f.submit}
        </ButtonEl>
        <a
          href={telHref(SITE.phone.main)}
          className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl px-5 text-[0.9375rem] font-bold text-navy-900 ring-1 ring-ink-200 transition-colors hover:bg-ink-50 sm:w-auto"
        >
          <Icon name="phone" size={17} />
          {SITE.phone.main}
        </a>
      </div>
    </form>
  );
}
