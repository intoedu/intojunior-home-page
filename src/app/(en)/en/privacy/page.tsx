import type { Metadata } from "next";
import { PrivacyView } from "@/views/PrivacyView";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "privacy", "privacy");

export default function Page() {
  return <PrivacyView lang="en" />;
}
