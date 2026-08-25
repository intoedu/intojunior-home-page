import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 사이트로 내보내기 → Vercel / Netlify / Cloudflare Pages / 카페24 등
  // 어떤 호스팅에도 그대로 올릴 수 있습니다. (`npm run build` → `out/` 폴더)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
