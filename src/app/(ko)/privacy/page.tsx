import type { Metadata } from "next";
import { PrivacyView } from "@/views/PrivacyView";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("ko", "privacy", "privacy");

export default function Page() {
  return <PrivacyView lang="ko" />;
}
