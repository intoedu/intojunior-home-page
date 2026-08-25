import type { Metadata } from "next";
import { ApplyView } from "@/views/ApplyView";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("ko", "apply", "apply");

export default function Page() {
  return <ApplyView lang="ko" />;
}
