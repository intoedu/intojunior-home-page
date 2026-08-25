import type { Metadata } from "next";
import { HomeView } from "@/views/HomeView";
import { JsonLd } from "@/components/site/JsonLd";
import { pageMetadata, schoolJsonLd } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "home", "");

export default function Page() {
  return (
    <>
      <JsonLd data={schoolJsonLd("en")} />
      <HomeView lang="en" />
    </>
  );
}
