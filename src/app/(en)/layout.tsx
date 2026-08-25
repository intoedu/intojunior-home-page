import type { Metadata, Viewport } from "next";
import { RootHtml } from "@/components/site/RootHtml";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...pageMetadata("en", "home"),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
  robots: { index: true, follow: true },
  other: { "format-detection": "telephone=no" },
};

export const viewport: Viewport = {
  themeColor: "#0e1f4a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function enRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootHtml lang="en">{children}</RootHtml>;
}
