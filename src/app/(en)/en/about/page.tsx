import type { Metadata } from "next";
import { AboutView } from "@/views/AboutView";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "about", "about");

export default function Page() {
  return <AboutView lang="en" />;
}
