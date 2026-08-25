import type { Metadata, Viewport } from "next";
import { RootHtml } from "@/components/site/RootHtml";
import { pageMetadata } from "@/lib/metadata";
import { SITE, asset, NOINDEX } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...pageMetadata("ko", "home"),
  icons: {
    icon: [{ url: asset("/icon.svg"), type: "image/svg+xml" }],
    apple: asset("/apple-icon.png"),
  },
  robots: NOINDEX
    ? { index: false, follow: false }
    : { index: true, follow: true },
  other: { "format-detection": "telephone=no" },
};

export const viewport: Viewport = {
  themeColor: "#0e1f4a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function koRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootHtml lang="ko">{children}</RootHtml>;
}
