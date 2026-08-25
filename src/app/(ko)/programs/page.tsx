import type { Metadata } from "next";
import { ProgramsView } from "@/views/ProgramsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("ko", "programs", "programs");

export default function Page() {
  return <ProgramsView lang="ko" />;
}
