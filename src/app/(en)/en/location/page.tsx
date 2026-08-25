import type { Metadata } from "next";
import { LocationView } from "@/views/LocationView";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "location", "location");

export default function Page() {
  return <LocationView lang="en" />;
}
