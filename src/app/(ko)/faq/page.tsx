import type { Metadata } from "next";
import { FaqView } from "@/views/FaqView";
import { JsonLd } from "@/components/site/JsonLd";
import { pageMetadata, faqJsonLd } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("ko", "faq", "faq");

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd("ko")} />
      <FaqView lang="ko" />
    </>
  );
}
