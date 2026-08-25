"use client";

import { useState } from "react";
import { SITE } from "@/config/site";
import { getDict, type Lang } from "@/content";
import { Icon } from "@/components/ui/Icon";

export function CopyAddress({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const [copied, setCopied] = useState(false);
  const value = lang === "ko" ? SITE.address.ko : SITE.address.en;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-9 items-center gap-1.5 rounded-lg px-2.5 text-[0.75rem] font-bold text-ink-500 transition-colors hover:bg-brand-50 hover:text-brand-700"
    >
      <Icon name={copied ? "check" : "copy"} size={14} />
      {copied ? t.location.labels.copied : t.location.labels.copy}
    </button>
  );
}
