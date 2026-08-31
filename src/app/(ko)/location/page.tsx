import type { Metadata } from "next";
import { CampusesView } from "@/views/CampusesView";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("ko", "campuses", "location");

export default function Page() {
  return <CampusesView lang="ko" />;
}
