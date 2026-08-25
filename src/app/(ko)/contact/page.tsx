import type { Metadata } from "next";
import { ContactView } from "@/views/ContactView";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("ko", "contact", "contact");

export default function Page() {
  return <ContactView lang="ko" />;
}
